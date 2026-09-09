/**
 * Our Stone Cottages - Risk-Adjusted Reward Engine (v0.1)
 * 依据 《Our_Stone_Cottages_Risk_Adjusted_Reward_Algorithm_v0.1.docx》 执行版规范实现
 * 
 * 核心设计：
 * 1. 采用 Rasch (1PL IRT) / 在线 Elo 统一难度与能力标度 (theta 与 D)
 * 2. 预测成功率 p_correct = 1 / (1 + exp(-(theta_eff - D_act)))
 * 3. 风险奖励呈现单峰心流钟形曲线 (中间高、两边低，惩罚虐菜与超纲盲猜)
 * 4. 置信度阻尼收缩 (Confidence Discounting)，防止冷启动数据不足导致数值失真
 * 5. 双层能力更新 (theta_long 慢变防作弊, theta_session 快变感知疲惫)
 * 6. 自适应安全护栏 (p < 0.35 触发降级与保护，杜绝死循环)
 */

(function (global) {
  'use strict';

  const RiskRewardEngine = {
    VERSION: '0.1.0',

    // 常量参数配置 (严格对齐文档规范 A3, A7, A8, A9)
    CONFIG: {
      WEIGHT_LONG: 0.85,       // 长期能力权重
      WEIGHT_SESSION: 0.15,    // 本局状态权重
      K_LONG: 0.06,            // 长期能力学习率
      K_SESSION: 0.18,         // 本局状态灵敏度
      K_ITEM: 0.015,           // 题目经验难度校准率
      DEFAULT_BASE_GOLD: 20    // 基础金币/经验单价
    },

    // A6 分段倍率表 (按预测胜率 p 分段)
    CHALLENGE_TABLE: [
      { min: 0.90, max: 1.01, multiplier: 0.80, label: '过于简单', tag: 'easy' },
      { min: 0.80, max: 0.90, multiplier: 1.00, label: '轻松生还', tag: 'light' },
      { min: 0.65, max: 0.80, multiplier: 1.30, label: '最佳挑战区', tag: 'optimal' },
      { min: 0.50, max: 0.65, multiplier: 1.50, label: '高挑战区（黄金心流）', tag: 'peak' },
      { min: 0.35, max: 0.50, multiplier: 1.35, label: '接近能力边界', tag: 'boundary' },
      { min: 0.00, max: 0.35, multiplier: 1.00, label: '疑似超纲/猜测区', tag: 'out_of_bounds' }
    ],

    // A7 置信度收缩阶梯表 (按有效答题数划分)
    CONFIDENCE_TABLE: [
      { minAnswer: 200, confidence: 1.00 },
      { minAnswer: 100, confidence: 0.85 },
      { minAnswer: 50,  confidence: 0.70 },
      { minAnswer: 20,  confidence: 0.45 },
      { minAnswer: 0,   confidence: 0.20 }
    ],

    /**
     * 初始玩家能力状态
     */
    createInitialProfile() {
      return {
        theta_long: 0.0,
        theta_session: 0.0,
        answer_count: 0,
        vocab_rating: 0.0
      };
    },

    /**
     * 计算有效能力值 theta_effective (规范 A3)
     */
    calculateEffectiveAbility(thetaLong, thetaSession, weightLong) {
      const wL = typeof weightLong === 'number' ? weightLong : this.CONFIG.WEIGHT_LONG;
      const wS = 1.0 - wL;
      return (wL * thetaLong) + (wS * thetaSession);
    },

    /**
     * 计算题目实际难度 D_actual (规范 A4)
     */
    calculateActualDifficulty(item) {
      const base = Number(item.base_difficulty) || 0.0;
      const distractor = Number(item.distractor_difficulty) || 0.0;
      const context = Number(item.context_difficulty) || 0.0;
      const mode = Number(item.mode_difficulty) || 0.0;
      const empirical = Number(item.empirical_offset) || 0.0;
      return base + distractor + context + mode + empirical;
    },

    /**
     * 预测成功率 p_correct (Logistic / Rasch 模型) (规范 A5)
     */
    predictPCorrect(thetaEffective, dActual) {
      const diff = thetaEffective - dActual;
      // 避免数学极值溢出
      if (diff > 15) return 0.99999;
      if (diff < -15) return 0.00001;
      return 1.0 / (1.0 + Math.exp(-diff));
    },

    /**
     * 查表获取基础挑战倍率 M_challenge (规范 A6)
     */
    getChallengeTier(pCorrect) {
      const p = Math.max(0.0, Math.min(1.0, pCorrect));
      for (const tier of this.CHALLENGE_TABLE) {
        if (p >= tier.min && p < tier.max) {
          return tier;
        }
      }
      return this.CHALLENGE_TABLE[this.CHALLENGE_TABLE.length - 1];
    },

    /**
     * 查表获取置信度 confidence (规范 A7)
     */
    getConfidence(answerCount) {
      const count = Math.max(0, parseInt(answerCount, 10) || 0);
      for (const row of this.CONFIDENCE_TABLE) {
        if (count >= row.minAnswer) {
          return row.confidence;
        }
      }
      return 0.20;
    },

    /**
     * 计算最终奖励倍率 M_final (置信度阻尼收缩) (规范 A7)
     */
    calculateFinalMultiplier(mChallenge, confidence) {
      const conf = Math.max(0.0, Math.min(1.0, confidence));
      return 1.0 + conf * (mChallenge - 1.0);
    },

    /**
     * SAN 值映射至干扰项难度增量 (规范 A10)
     * SAN 越高环境越清晰 (D_distractor = 0)
     * SAN 越低环境越污染混乱 (混淆项越相似)
     */
    getSanDistractorDifficulty(san) {
      const s = typeof san === 'number' ? san : 100;
      if (s >= 80) return 0.0;
      if (s >= 50) return 0.15;
      if (s >= 30) return 0.25;
      return 0.35; // 深度谵妄状态，最高相似度干扰
    },

    /**
     * 自适应护栏检测 (规范 A11)
     */
    checkSafetyRails(pCorrect) {
      if (pCorrect >= 0.80) {
        return { allowHarder: true, fallback: false, zone: 'easy', note: '允许继续增加干扰度或复杂语境' };
      }
      if (pCorrect >= 0.55) {
        return { allowHarder: false, fallback: false, zone: 'optimal', note: '保持当前心流挑战' };
      }
      if (pCorrect >= 0.35) {
        return { allowHarder: false, fallback: false, zone: 'boundary', note: '能力边界：保留视觉氛围，锁死语言难度' };
      }
      return { allowHarder: false, fallback: true, zone: 'fallback', note: '触发护栏：语言难度过高，应退回提示或降低干扰相似度' };
    },

    /**
     * 单词基础难度先验估算 (根据词库等级映射初始 D_base)
     */
    estimateBaseDifficulty(word, tierDict) {
      if (!word) return 0.0;
      const w = String(word).toLowerCase().trim();
      const tier = (tierDict && tierDict[w]) ? tierDict[w] : 'cet4';
      if (tier === 'cet4') return 0.0;
      if (tier === 'cet6') return 0.35;
      if (tier === 'ielts') return 0.70;
      return 0.20;
    },

    /**
     * 综合评估单道题目对玩家的风险与预期奖励
     */
    evaluateQuestion(profile, itemInput) {
      const pData = profile || this.createInitialProfile();
      const thetaLong = Number(pData.theta_long) || 0.0;
      const thetaSession = Number(pData.session_state ?? pData.theta_session) || 0.0;
      const answerCount = parseInt(pData.answer_count, 10) || 0;

      const thetaEff = this.calculateEffectiveAbility(thetaLong, thetaSession);
      const dActual = this.calculateActualDifficulty(itemInput);
      const pCorrect = this.predictPCorrect(thetaEff, dActual);
      const tier = this.getChallengeTier(pCorrect);
      const confidence = this.getConfidence(answerCount);
      const mFinal = this.calculateFinalMultiplier(tier.multiplier, confidence);
      const baseGold = Number(itemInput.base_gold) || this.CONFIG.DEFAULT_BASE_GOLD;
      const finalReward = Math.round(baseGold * mFinal * 10) / 10;
      const safety = this.checkSafetyRails(pCorrect);

      return {
        theta_long: thetaLong,
        theta_session: thetaSession,
        theta_effective: thetaEff,
        d_actual: dActual,
        p_correct: pCorrect,
        challenge_tier: tier.label,
        challenge_tag: tier.tag,
        m_challenge: tier.multiplier,
        confidence: confidence,
        m_final: mFinal,
        base_gold: baseGold,
        final_reward: finalReward,
        safety_rails: safety
      };
    },

    /**
     * 在线更新玩家能力与题目经验难度 (规范 A8 & A9)
     */
    updateState(profile, item, isSuccess, evalResult, options = {}) {
      const y = isSuccess ? 1.0 : 0.0;
      const p = evalResult ? evalResult.p_correct : 0.5;
      const residual = y - p;

      const kLong = options.kLong || this.CONFIG.K_LONG;
      const kSession = options.kSession || this.CONFIG.K_SESSION;
      const kItem = options.kItem || this.CONFIG.K_ITEM;

      // 1. 更新玩家双层能力
      const newThetaLong = (Number(profile.theta_long) || 0.0) + kLong * residual;
      const newThetaSession = (Number(profile.session_state ?? profile.theta_session) || 0.0) + kSession * residual;
      const newAnswerCount = (parseInt(profile.answer_count, 10) || 0) + 1;

      // 2. 更新题目经验偏移 (如果存在题目对象)
      let newEmpirical = Number(item.empirical_offset) || 0.0;
      newEmpirical = newEmpirical - kItem * residual;

      return {
        profile_update: {
          theta_long: Math.round(newThetaLong * 10000) / 10000,
          theta_session: Math.round(newThetaSession * 10000) / 10000,
          session_state: Math.round(newThetaSession * 10000) / 10000,
          answer_count: newAnswerCount,
          confidence: this.getConfidence(newAnswerCount)
        },
        item_update: {
          empirical_offset: Math.round(newEmpirical * 10000) / 10000
        },
        residual: residual
      };
    }
  };

  // 模块导出：同时支持浏览器全局与 Node.js 自动化测试
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = RiskRewardEngine;
  }
  if (typeof window !== 'undefined') {
    window.RiskRewardEngine = RiskRewardEngine;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this);
