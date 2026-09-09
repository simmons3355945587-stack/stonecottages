/**
 * Our Stone Cottages - Gray Health & Learning Evidence Engine (v0.1)
 * 依据 《石屋、学习和远征共用一套规则》 第一阶段规范落地
 * 
 * 核心设计：
 * 1. 独立解耦：纯函数与状态管理器，无第三方依赖，支持 Node.js 与浏览器双环境；
 * 2. 灰血机制 (Gray / Recoverable Health)：
 *    - 发生语言学习失误时，损失 HP（默认 8 点），其中部分转为可恢复灰血（默认 4 点）；
 *    - 灰血与特定错词及词义严格绑定，非无脑答题即可回满的公共血池；
 *    - 冷却间隔约束：至少隔开 2 道题目后考查才计为有效独立回忆，杜绝看答案后立即重选刷血；
 *    - 阶梯恢复：独立答对首次恢复 2 HP，再次有效回忆恢复剩余部分；恢复不可超额、不重复领奖；
 *    - 提示惩罚：使用提示后答对仅恢复 50%（1 HP），且掌握度证据折算；
 * 3. 清明度 SAN 保护：
 *    - 普通词汇理解失误绝对不扣除 SAN；
 *    - SAN 仅在主动选择迷雾/禁忌路线、禁忌牌或特殊危机事件时改变；
 * 4. 学习证据与战局临时状态分离：
 *    - 远征失败仅清除临时战局状态与灰血，永久保留 Mastery Learning Evidence 与错词标记；
 *    - 重新出征无条件恢复基础体力，无需花钱复活。
 */

(function (global) {
  'use strict';

  const GrayHealthEngine = {
    VERSION: '0.1.0',

    // 首轮基准数值配置
    CONFIG: {
      HP_LOSS_ON_ERROR: 8,          // 单次错词默认扣减 HP
      GRAY_FRACTION: 0.5,           // 转换为灰血的比例 (8 HP 损失 -> 4 灰血)
      STAGE_RECOVER_AMOUNT: 2,      // 每次独立回忆基准恢复 HP
      MIN_RECALL_INTERVAL: 2,       // 最小回忆题目间隔 (至少隔开 2 道题)
      HINT_RECOVERY_RATIO: 0.5,     // 使用提示答对的恢复折减比率
      MAX_HP: 100,                  // 生命值上限
      MAX_SAN: 100,                 // 清明度上限
      DEFAULT_INITIAL_GOLD: 100,    // 新探险者默认初始流通金币
      TAROT_DRAW_GOLD_COST: 50      // 塔罗翻牌金币消耗 (替代历史 50 XP)
    },

    /**
     * 清明度污染分级映射 (规范：越低越污染，不把 SAN 值直接称为污染程度)
     */
    getSanPollutionTier(san) {
      const s = typeof san === 'number' ? Math.max(0, Math.min(100, san)) : 100;
      if (s >= 80) {
        return { tier: 'clear', label: '清明', desc: '心神明澈，无环境干扰', san: s };
      }
      if (s >= 50) {
        return { tier: 'mild_polluted', label: '轻度污染', desc: '微光摇曳，偶现近义混淆', san: s };
      }
      if (s >= 30) {
        return { tier: 'heavy_polluted', label: '严重污染', desc: '迷雾浓重，显著干扰侵蚀', san: s };
      }
      return { tier: 'delirious', label: '极度谵妄', desc: '混乱低语，强力易混项包围', san: s };
    },

    /**
     * 创建远征战局临时状态
     */
    createInitialExpeditionState(profile) {
      return {
        inExpedition: true,
        questionIndex: 0,
        route: 'safe', // 'safe' | 'mist' | 'forbidden'
        recoverableErrors: [], // 绑定错词的灰血条目表
        recentErrors: [],      // 本轮失误词汇列表 (待复习队列)
        completedRecalls: []   // 已成功复现掌握的词汇
      };
    },

    /**
     * 规范化并迁移玩家档案 (保证老玩家数据向后兼容，确保 XP 禁扣、Gold 独立)
     */
    normalizeProfile(profile) {
      const p = profile || {};
      const normalized = {
        hp: typeof p.hp === 'number' ? Math.max(0, Math.min(this.CONFIG.MAX_HP, p.hp)) : this.CONFIG.MAX_HP,
        grayHp: typeof p.grayHp === 'number' ? Math.max(0, Math.min(this.CONFIG.MAX_HP, p.grayHp)) : 0,
        san: typeof p.san === 'number' ? Math.max(0, Math.min(this.CONFIG.MAX_SAN, p.san)) : this.CONFIG.MAX_SAN,
        xp: typeof p.xp === 'number' ? Math.max(0, p.xp) : 0, // 永久成长经验，严禁扣减
        gold: typeof p.gold === 'number' ? Math.max(0, p.gold) : (this.CONFIG.DEFAULT_INITIAL_GOLD + (p.wonRounds || 0) * 20),
        level: typeof p.level === 'number' ? Math.max(1, p.level) : 1,
        combo: typeof p.combo === 'number' ? Math.max(1, p.combo) : 1,
        wonRounds: typeof p.wonRounds === 'number' ? p.wonRounds : 0,
        tarotCardsCollected: Array.isArray(p.tarotCardsCollected) ? p.tarotCardsCollected : [],
        battleHand: Array.isArray(p.battleHand) ? p.battleHand : [],
        riskModel: p.riskModel || null,
        learningEvidence: p.learningEvidence && typeof p.learningEvidence === 'object' ? p.learningEvidence : {},
        expedition: p.expedition || null
      };

      // 保证总生命值合法：实血 + 灰血 <= 100
      if (normalized.hp + normalized.grayHp > this.CONFIG.MAX_HP) {
        normalized.grayHp = Math.max(0, this.CONFIG.MAX_HP - normalized.hp);
      }
      return normalized;
    },

    /**
     * 记录普通词汇学习失误 (扣 HP，部分转为灰血，普通做题不扣 SAN)
     */
    recordError(profile, word, targetMeaning = '', options = {}) {
      if (!profile) throw new Error('profile is required');
      const w = String(word || '').toLowerCase().trim();
      const loss = options.hpLoss || this.CONFIG.HP_LOSS_ON_ERROR;
      const grayFraction = options.grayFraction !== undefined ? options.grayFraction : this.CONFIG.GRAY_FRACTION;
      const targetGray = Math.round(loss * grayFraction);

      // 1. 扣减真实生命值 HP
      const actualHpLoss = Math.min(profile.hp, loss);
      profile.hp = Math.max(0, profile.hp - actualHpLoss);

      // 2. 计算可增加的灰血（确保 hp + grayHp <= MAX_HP）
      const currentTotal = profile.hp + (profile.grayHp || 0);
      const addedGray = Math.min(targetGray, Math.max(0, this.CONFIG.MAX_HP - currentTotal));
      profile.grayHp = Math.max(0, (profile.grayHp || 0) + addedGray);

      // 3. 普通答错绝不扣除 SAN！保持原清明度不变
      // (SAN 由主动路线抉择与事件控制)

      // 4. 获取当前题目流水号
      if (!profile.expedition) {
        profile.expedition = this.createInitialExpeditionState(profile);
      }
      const qIndex = typeof options.questionIndex === 'number' 
        ? options.questionIndex 
        : (profile.expedition.questionIndex || 0);

      // 5. 创建该词专属的灰血绑定对象 (不可超额、不通用)
      const errorEntry = {
        id: `err_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
        word: w,
        targetMeaning: targetMeaning || '',
        questionIndex: qIndex,
        grayHpInitial: addedGray,
        grayHpRemaining: addedGray,
        recoveredHp: 0,
        attempts: 0,
        status: 'pending' // 'pending' | 'partially_recovered' | 'fully_recovered'
      };

      if (!Array.isArray(profile.expedition.recoverableErrors)) {
        profile.expedition.recoverableErrors = [];
      }
      profile.expedition.recoverableErrors.push(errorEntry);

      // 加入待复习队列
      if (!Array.isArray(profile.expedition.recentErrors)) {
        profile.expedition.recentErrors = [];
      }
      if (!profile.expedition.recentErrors.includes(w)) {
        profile.expedition.recentErrors.push(w);
      }

      // 6. 记录永久学习证据 (Mastery Evidence)，失败绝不丢失
      if (!profile.learningEvidence) profile.learningEvidence = {};
      const prevEv = profile.learningEvidence[w] || {
        word: w,
        totalErrors: 0,
        totalRecalls: 0,
        consecutiveCorrect: 0,
        lastSeenAt: Date.now(),
        masteryLevel: 0
      };
      prevEv.totalErrors++;
      prevEv.consecutiveCorrect = 0;
      prevEv.lastSeenAt = Date.now();
      prevEv.masteryLevel = Math.max(0, prevEv.masteryLevel - 1);
      profile.learningEvidence[w] = prevEv;

      return {
        hpLoss: actualHpLoss,
        grayHpAdded: addedGray,
        currentHp: profile.hp,
        currentGrayHp: profile.grayHp,
        san: profile.san,
        errorEntry: errorEntry
      };
    },

    /**
     * 评估作答回忆：检验是否为错词有效再回忆并阶梯式恢复灰血
     */
    evaluateRecall(profile, word, isSuccess, options = {}) {
      if (!profile) throw new Error('profile is required');
      const w = String(word || '').toLowerCase().trim();
      const qIndex = typeof options.questionIndex === 'number'
        ? options.questionIndex
        : (profile.expedition ? profile.expedition.questionIndex : 0);
      const usedHint = !!options.usedHint;

      // 永久学习证据维护
      if (!profile.learningEvidence) profile.learningEvidence = {};
      const prevEv = profile.learningEvidence[w] || {
        word: w,
        totalErrors: 0,
        totalRecalls: 0,
        consecutiveCorrect: 0,
        lastSeenAt: Date.now(),
        masteryLevel: 0
      };
      prevEv.lastSeenAt = Date.now();

      if (!isSuccess) {
        // 再次答错：调用 recordError 追加失误记录
        return {
          isRecall: false,
          isSuccess: false,
          recoveredHp: 0,
          errorRecord: this.recordError(profile, w, options.targetMeaning, options)
        };
      }

      // 玩家答对：检索该词是否存在待恢复的灰血条目
      const recoverableList = profile.expedition && Array.isArray(profile.expedition.recoverableErrors)
        ? profile.expedition.recoverableErrors
        : [];
      
      const targetError = recoverableList.find(e => e.word === w && e.grayHpRemaining > 0);

      if (!targetError) {
        // 常规单词答对，非错词灰血回忆
        prevEv.totalRecalls++;
        prevEv.consecutiveCorrect++;
        if (prevEv.consecutiveCorrect >= 3 && !usedHint) {
          prevEv.masteryLevel = Math.min(3, prevEv.masteryLevel + 1);
        }
        profile.learningEvidence[w] = prevEv;

        return {
          isRecall: false,
          isSuccess: true,
          recoveredHp: 0,
          currentHp: profile.hp,
          currentGrayHp: profile.grayHp || 0
        };
      }

      // 约束 1：检验冷却间隔 (防刷机制：刚看答案立即重选无效)
      const interval = qIndex - targetError.questionIndex;
      if (interval < this.CONFIG.MIN_RECALL_INTERVAL) {
        return {
          isRecall: true,
          validRecall: false,
          reason: 'too_soon',
          interval: interval,
          message: '间隔过短（需至少隔开 2 题），不计为有效独立回忆，不触发灰血愈合',
          recoveredHp: 0,
          currentHp: profile.hp,
          currentGrayHp: profile.grayHp || 0
        };
      }

      // 约束 2：计算本次回忆恢复量 (独立答对 2 HP，提示后折半 1 HP，不能超过灰血余额)
      let stageAmount = this.CONFIG.STAGE_RECOVER_AMOUNT;
      if (usedHint) {
        stageAmount = Math.max(1, Math.round(stageAmount * this.CONFIG.HINT_RECOVERY_RATIO));
      }

      const availableGrayOnWord = targetError.grayHpRemaining;
      const availablePlayerGray = profile.grayHp || 0;
      const actualRecover = Math.min(stageAmount, availableGrayOnWord, availablePlayerGray);

      if (actualRecover > 0) {
        profile.hp = Math.min(this.CONFIG.MAX_HP, profile.hp + actualRecover);
        profile.grayHp = Math.max(0, profile.grayHp - actualRecover);
        targetError.grayHpRemaining -= actualRecover;
        targetError.recoveredHp += actualRecover;
        targetError.attempts++;
        targetError.status = targetError.grayHpRemaining <= 0 ? 'fully_recovered' : 'partially_recovered';
      }

      // 更新永久学习证据
      prevEv.totalRecalls++;
      prevEv.consecutiveCorrect++;
      if (prevEv.consecutiveCorrect >= 2 && !usedHint) {
        prevEv.masteryLevel = Math.min(3, prevEv.masteryLevel + 1);
      }
      profile.learningEvidence[w] = prevEv;

      if (profile.expedition && Array.isArray(profile.expedition.completedRecalls)) {
        if (!profile.expedition.completedRecalls.includes(w)) {
          profile.expedition.completedRecalls.push(w);
        }
      }

      return {
        isRecall: true,
        validRecall: true,
        recoveredHp: actualRecover,
        usedHint: usedHint,
        remainingGrayOnWord: targetError.grayHpRemaining,
        currentHp: profile.hp,
        currentGrayHp: profile.grayHp,
        message: usedHint 
          ? `💡 辅助回忆生还！恢复 ${actualRecover} 灰血（提示折算）` 
          : `💚 有效独立回忆！恢复 ${actualRecover} 灰血（错误创伤逐渐愈合）`
      };
    },

    /**
     * 战局失败结算：清空临时战局状态，100% 封存并保留学习证据与错词记录
     */
    handleExpeditionDefeat(profile) {
      if (!profile) throw new Error('profile is required');
      profile.hp = 0;
      profile.grayHp = 0; // 临时灰血随本轮战败失效
      profile.combo = 1;

      const runErrors = (profile.expedition && profile.expedition.recentErrors) 
        ? [...profile.expedition.recentErrors] 
        : [];

      if (profile.expedition) {
        profile.expedition.inExpedition = false;
        profile.expedition.recoverableErrors = [];
      }

      // 学习证据与生词记录完全完好无损
      const evidenceCount = Object.keys(profile.learningEvidence || {}).length;

      return {
        defeated: true,
        runErrors: runErrors,
        preservedEvidenceCount: evidenceCount,
        message: '远征中止。临时战局已清空，词汇掌握证据与错词复习队列已完整封存！'
      };
    },

    /**
     * 开启新远征：无条件恢复基础生存状态，避免逼迫玩家花钱复活
     */
    resetForNewExpedition(profile) {
      if (!profile) throw new Error('profile is required');
      profile.hp = this.CONFIG.MAX_HP;
      profile.san = this.CONFIG.MAX_SAN;
      profile.grayHp = 0;
      profile.combo = 1;
      profile.expedition = this.createInitialExpeditionState(profile);
      return profile;
    }
  };

  // 挂载到环境
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = GrayHealthEngine;
  }
  if (typeof global !== 'undefined') {
    global.GrayHealthEngine = GrayHealthEngine;
  }
})(typeof window !== 'undefined' ? window : globalThis);
