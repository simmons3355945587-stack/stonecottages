const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

console.log('================================================================');
console.log('🛡️ 统一规则与灰血系统深度全场景单测套件 (Gray Health Rules Suite)');
console.log('================================================================\n');

// 1. 独立运行 GrayHealthEngine 核心单元测试
const GrayHealthEngine = require('../frontend/gray-health-engine.js');

console.log('【测试 1/6】基础错词与灰血绑定测试 (无无脑扣 SAN，错词绑定):');
let profile = GrayHealthEngine.normalizeProfile({
  hp: 100,
  san: 100,
  xp: 500,
  gold: 150,
  level: 3,
  combo: 1
});

// 失误前检查
assert.strictEqual(profile.hp, 100);
assert.strictEqual(profile.grayHp, 0);
assert.strictEqual(profile.san, 100);
assert.strictEqual(profile.gold, 150);

// 在题目 0 失误 'ephemeral'
const errRes1 = GrayHealthEngine.recordError(profile, 'ephemeral', '短暂的', { questionIndex: 0 });
assert.strictEqual(profile.hp, 92, 'HP 应当扣除 8 点');
assert.strictEqual(profile.grayHp, 4, '扣除的 8 点中 50% 应当转化为 4 点灰血');
assert.strictEqual(profile.san, 100, '普通词汇失误绝对禁止扣除 SAN！保持 100');
assert.strictEqual(profile.xp, 500, '失误绝不扣除 XP');
assert.strictEqual(profile.expedition.recoverableErrors.length, 1);
assert.strictEqual(profile.expedition.recoverableErrors[0].word, 'ephemeral');
assert.strictEqual(profile.expedition.recoverableErrors[0].grayHpRemaining, 4);
assert.strictEqual(profile.learningEvidence['ephemeral'].totalErrors, 1, '永久学习证据应当累计 1 次失误');
console.log(`  ✅ PASS: 错词转化灰血 4 点，当前 HP: ${profile.hp}, Gray HP: ${profile.grayHp}, SAN 完好无损: ${profile.san}`);

// ----------------------------------------------------
console.log('\n【测试 2/6】冷却间隔约束机制测试 (防看答案立即重选刷血):');
// 题目 1 (间隔 = 1 - 0 = 1 < MIN_RECALL_INTERVAL 2) 立即答对该词
const recallEarly = GrayHealthEngine.evaluateRecall(profile, 'ephemeral', true, { questionIndex: 1 });
assert.strictEqual(recallEarly.isRecall, true);
assert.strictEqual(recallEarly.validRecall, false, '间隔小于 2 题应当判定为无效回忆');
assert.strictEqual(recallEarly.recoveredHp, 0, '无效回忆不应恢复任何生命值');
assert.strictEqual(profile.hp, 92, 'HP 保持 92 不变');
assert.strictEqual(profile.grayHp, 4, '灰血保持 4 点不变');
console.log(`  ✅ PASS: 间隔过短防刷拦截成功，原因: "${recallEarly.reason}"`);

// ----------------------------------------------------
console.log('\n【测试 3/6】阶梯式回忆愈合与防超额恢复测试:');
// 题目 2 (间隔 = 2 - 0 = 2 >= 2) 独立正确回忆
const recallStep1 = GrayHealthEngine.evaluateRecall(profile, 'ephemeral', true, { questionIndex: 2 });
assert.strictEqual(recallStep1.validRecall, true, '应当为有效独立回忆');
assert.strictEqual(recallStep1.recoveredHp, 2, '首次独立有效回忆应当恢复 2 HP');
assert.strictEqual(profile.hp, 94, 'HP 应当恢复到 94');
assert.strictEqual(profile.grayHp, 2, '灰血余额应当减少到 2');
console.log(`  ✅ PASS: 阶梯恢复第 1 阶段成功: +${recallStep1.recoveredHp} HP, 当前 HP: ${profile.hp}, 剩余灰血: ${profile.grayHp}`);

// 题目 5 (间隔 = 5 - 0 = 5 >= 2) 再次正确回忆该词
const recallStep2 = GrayHealthEngine.evaluateRecall(profile, 'ephemeral', true, { questionIndex: 5 });
assert.strictEqual(recallStep2.validRecall, true);
assert.strictEqual(recallStep2.recoveredHp, 2, '第 2 次有效回忆恢复剩余 2 HP');
assert.strictEqual(profile.hp, 96, 'HP 恢复到 96');
assert.strictEqual(profile.grayHp, 0, '灰血完全清零');
console.log(`  ✅ PASS: 阶梯恢复第 2 阶段成功: +${recallStep2.recoveredHp} HP, 当前 HP: ${profile.hp}, 剩余灰血: ${profile.grayHp}`);

// 题目 7 再次答对该词（灰血已全部恢复，不可超额）
const recallStep3 = GrayHealthEngine.evaluateRecall(profile, 'ephemeral', true, { questionIndex: 7 });
assert.strictEqual(recallStep3.recoveredHp, 0, '灰血已被清空，不可超额恢复');
assert.strictEqual(profile.hp, 96);
console.log(`  ✅ PASS: 防超额与重复领奖拦截成功: 恢复 ${recallStep3.recoveredHp} HP`);

// ----------------------------------------------------
console.log('\n【测试 4/6】提示辅助折半惩罚测试 (Hint Penalty):');
// 失误 'serendipity'
GrayHealthEngine.recordError(profile, 'serendipity', '机缘凑巧', { questionIndex: 10 });
assert.strictEqual(profile.hp, 88);
assert.strictEqual(profile.grayHp, 4);

// 题目 13 使用提示答对
const recallWithHint = GrayHealthEngine.evaluateRecall(profile, 'serendipity', true, { questionIndex: 13, usedHint: true });
assert.strictEqual(recallWithHint.validRecall, true);
assert.strictEqual(recallWithHint.recoveredHp, 1, '使用提示辅助答对应当仅恢复 50% (1 HP)');
assert.strictEqual(profile.hp, 89);
assert.strictEqual(profile.grayHp, 3);
console.log(`  ✅ PASS: 提示折减机制有效: 恢复 ${recallWithHint.recoveredHp} HP, 消息: "${recallWithHint.message}"`);

// ----------------------------------------------------
console.log('\n【测试 5/6】战败结算与重新出征测试 (学习证据 100% 封存，无损重置):');
// 模拟受到多次重创直至战败
profile.hp = 0;
const defeatRes = GrayHealthEngine.handleExpeditionDefeat(profile);
assert.strictEqual(defeatRes.defeated, true);
assert.strictEqual(profile.grayHp, 0, '战败后临时灰血失效');
assert(profile.learningEvidence['ephemeral'], '学习证据 ephemeral 必须保留');
assert(profile.learningEvidence['serendipity'], '学习证据 serendipity 必须保留');
assert(profile.learningEvidence['ephemeral'].totalRecalls >= 2, '独立回忆记录必须完好');
console.log(`  ✅ PASS: 战败结算完成，学习证据保留总词数: ${defeatRes.preservedEvidenceCount}`);

// 开启新远征
GrayHealthEngine.resetForNewExpedition(profile);
assert.strictEqual(profile.hp, 100, '新远征无条件恢复 100 HP');
assert.strictEqual(profile.san, 100, '新远征无条件恢复 100 SAN');
assert.strictEqual(profile.combo, 1);
assert.strictEqual(profile.grayHp, 0);
assert.strictEqual(profile.expedition.inExpedition, true);
console.log(`  ✅ PASS: 无条件整备重置成功，无需花费代币买活: HP 100, SAN 100`);

// ----------------------------------------------------
console.log('\n【测试 6/6】端到端运行环境集成与代币分离测试 (survival.js + tarot.js):');
const context = {
  console: console,
  window: {},
  Math: Math,
  parseInt: parseInt,
  parseFloat: parseFloat,
  Number: Number,
  String: String,
  Boolean: Boolean,
  Array: Array,
  Object: Object,
  Date: Date,
  document: {
    querySelectorAll: () => [],
    getElementById: (id) => ({
      innerHTML: '',
      textContent: '',
      appendChild: () => {},
      classList: { add: () => {}, remove: () => {}, contains: () => false },
      style: {}
    }),
    createElement: (tag) => ({
      className: '',
      style: { cssText: '' },
      innerHTML: '',
      appendChild: () => {}
    })
  },
  soundSuccess: () => {},
  soundFailure: () => {},
  showToast: (msg) => { context.lastToast = msg; },
  reduceMark: () => {},
  addMark: () => {},
  getMarkCount: () => 0,
  getMarkedWords: () => [],
  speakWord: () => {},
  saveToStorage: () => {},
  loadFromStorage: (k, def) => def,
  updateBadges: () => {},
  triggerCloudSync: () => {},
  renderBattleHand: () => {},
  renderClickableStory: (text, word) => `<span>${text}</span>`,
  escapeHtml: (s) => s || '',
  STORAGE_KEYS: { PROFILE: 'p', SETTINGS: 's' },
  battleXPBoostActive: false,
  battleShieldActive: false,
  survivalData: { story: 'Test story', story_cn: '测试背景' },
  chineseDict: { ephemeral: '短暂的', ubiquitous: '无所不在的' },
  wordTierDict: { ephemeral: 'ielts', ubiquitous: 'cet6' },
  tarotArcanaSkills: [
    { name: "The Magician", skill: "真理洞察", desc: "高亮正确选项", icon: "👁️", type: "reveal_correct", rarity: "SSR" }
  ],
  words: ['ephemeral', 'ubiquitous', 'resilience', 'catalyst']
};
context.window = context;

// 加载 GrayHealthEngine
const grayEngineCode = fs.readFileSync(path.join(__dirname, '../frontend/gray-health-engine.js'), 'utf8');
vm.runInNewContext(grayEngineCode, context);

// 加载 RiskRewardEngine
const riskEngineCode = fs.readFileSync(path.join(__dirname, '../frontend/risk-reward-engine.js'), 'utf8');
vm.runInNewContext(riskEngineCode, context);

// 加载 survival.js
const survivalCode = fs.readFileSync(path.join(__dirname, '../frontend/survival.js'), 'utf8');
vm.runInNewContext(survivalCode, context);

// 加载 tarot.js
const tarotCode = fs.readFileSync(path.join(__dirname, '../frontend/tarot.js'), 'utf8');
vm.runInNewContext(tarotCode, context);

// 设置初始玩家 (等级 5，距离升级需 500 XP，避免连击经验直接触发升级回血)
context.playerProfile = {
  hp: 100,
  grayHp: 0,
  san: 100,
  level: 5,
  xp: 120,
  gold: 60,
  combo: 1,
  wonRounds: 0,
  tarotCardsCollected: [],
  riskModel: null
};

// 1. 模拟在战局中答错：应当扣除 8 HP，增加 4 灰血，绝不扣除 SAN
context.handleSurvivalChoice({ isCorrect: false, word: 'ephemeral', action: 'Panic' }, 0);
assert.strictEqual(context.playerProfile.hp, 92, 'HP 应当扣除 8 点');
assert.strictEqual(context.playerProfile.grayHp, 4, '灰血应当增加 4 点');
assert.strictEqual(context.playerProfile.san, 100, '普通答错绝不扣除 SAN！');
assert.strictEqual(context.playerProfile.xp, 120, 'XP 绝不扣除');
console.log(`  ✅ PASS: 战局中答错失误: HP 92, Gray HP 4, SAN 100`);

// 2. 模拟中途答其他题目（垫两题）
context.handleSurvivalChoice({ isCorrect: true, word: 'ubiquitous', action: 'Calm analysis' }, 1);
context.handleSurvivalChoice({ isCorrect: true, word: 'catalyst', action: 'Find spark' }, 2);

// 3. 再次考查错词 'ephemeral' 并答对：灰血愈合
context.handleSurvivalChoice({ isCorrect: true, word: 'ephemeral', action: 'Recall true meaning' }, 3);
assert.strictEqual(context.playerProfile.hp, 94, '有效独立回忆灰血愈合，HP 回升至 94');
assert.strictEqual(context.playerProfile.grayHp, 2, '灰血减少至 2');
assert(context.playerProfile.gold > 60, '答对应当获得 Gold 奖励');
console.log(`  ✅ PASS: 战局中有效独立回忆: HP ${context.playerProfile.hp}, Gray HP ${context.playerProfile.grayHp}, Gold: ${context.playerProfile.gold}`);

// 4. 模拟在塔罗圣殿消耗 50 Gold 抽卡
const prevXp = context.playerProfile.xp;
const prevGold = context.playerProfile.gold;
context.flipTarotCard(0, 'ephemeral', context.tarotArcanaSkills[0]);
assert.strictEqual(context.playerProfile.xp, prevXp, '抽卡绝对禁止扣除 XP！');
assert.strictEqual(context.playerProfile.gold, prevGold - 50, '抽卡应当精准扣除 50 Gold');
console.log(`  ✅ PASS: 塔罗翻牌消耗 50 Gold, XP 完全不受影响 (${context.playerProfile.xp} XP 保持完好)`);

console.log('\n================================================================');
console.log('🎉 全部 6 大场景规范验证 100% 成功通过！');
console.log('================================================================');
