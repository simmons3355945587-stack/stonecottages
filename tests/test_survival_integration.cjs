const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

console.log('==================================================');
console.log('🧪 战局结算与风险算法端到端深度集成测试 (Survival Integration)');
console.log('==================================================\n');

// 1. 模拟 DOM 与浏览器环境
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
      appendChild: () => {},
      classList: { add: () => {}, remove: () => {} },
      style: {}
    }),
    createElement: (tag) => ({
      className: '',
      style: { cssText: '' },
      innerHTML: ''
    })
  },
  soundSuccess: () => {},
  soundFailure: () => {},
  showToast: (msg) => { context.lastToast = msg; },
  reduceMark: () => {},
  addMark: () => {},
  getMarkCount: () => 0,
  saveToStorage: () => {},
  loadFromStorage: (k, def) => def,
  updateBadges: () => {},
  triggerCloudSync: () => {},
  renderClickableStory: (text, word) => `<span>${text}</span>`,
  escapeHtml: (s) => s || '',
  STORAGE_KEYS: { PROFILE: 'p', SETTINGS: 's' },
  battleXPBoostActive: false,
  battleShieldActive: false,
  survivalData: { story: 'Test story', story_cn: '测试背景' },
  chineseDict: { ephemeral: '短暂的' },
  wordTierDict: { ephemeral: 'ielts', dog: 'cet4' }
};

context.window = context;

// 2. 加载 gray-health-engine.js
const grayEngineCode = fs.readFileSync(path.join(__dirname, '../frontend/gray-health-engine.js'), 'utf8');
vm.runInNewContext(grayEngineCode, context);

// 3. 加载 risk-reward-engine.js
const riskEngineCode = fs.readFileSync(path.join(__dirname, '../frontend/risk-reward-engine.js'), 'utf8');
vm.runInNewContext(riskEngineCode, context);

// 4. 加载 survival.js
const survivalCode = fs.readFileSync(path.join(__dirname, '../frontend/survival.js'), 'utf8');
vm.runInNewContext(survivalCode, context);

// ----------------------------------------------------
// Case 1: 启用风险引擎下的答对结算
// ----------------------------------------------------
console.log('【测试 1/3】启用风险引擎下的答题生还结算测试:');
context.playerProfile = {
  hp: 100,
  san: 100,
  level: 1,
  xp: 0,
  combo: 1,
  wonRounds: 0,
  riskModel: null
};
context.appSettings = { enableRiskEngine: true };

const optCorrect = {
  isCorrect: true,
  word: 'ephemeral',
  action: 'Stabilize core'
};

context.handleSurvivalChoice(optCorrect, 0);

assert(context.playerProfile.riskModel !== null, 'riskModel 应当已被自动初始化');
assert.strictEqual(context.playerProfile.riskModel.answer_count, 1, 'answer_count 应当递增至 1');
assert(context.playerProfile.riskModel.theta_long > 0, '长期能力 theta_long 应当上升');
assert(context.playerProfile.xp > 0, '应当获得 XP 奖励');
assert(context.lastToast.includes('XP +'), 'Toast 应当提示 XP 奖励');
assert(context.lastToast.includes('倍率') || context.lastToast.includes('×'), 'Toast 应当包含风险倍率标签');
console.log(`  ✅ PASS: 答对奖励 XP: ${context.playerProfile.xp}, Toast: "${context.lastToast}"`);
console.log(`  ✅ PASS: 玩家能力动态更新 theta_long: ${context.playerProfile.riskModel.theta_long.toFixed(4)}, answer_count: ${context.playerProfile.riskModel.answer_count}`);

// ----------------------------------------------------
// Case 2: 禁用风险引擎 (appSettings.enableRiskEngine = false) 回退测试
// ----------------------------------------------------
console.log('\n【测试 2/3】禁用风险引擎的兼容回退保底测试:');
context.playerProfile = {
  hp: 100,
  san: 100,
  level: 1,
  xp: 0,
  combo: 1,
  wonRounds: 0,
  riskModel: null
};
context.appSettings = { enableRiskEngine: false };

context.handleSurvivalChoice(optCorrect, 0);
assert.strictEqual(context.playerProfile.xp, 20, '回退模式下基础奖励应当严格等于 20 * combo (20 XP)');
assert(context.lastToast.includes('XP +20') && context.lastToast.includes('Gold'), '回退模式下 Toast 应当包含基础 20 XP 与 Gold 产出');
console.log(`  ✅ PASS: 回退机制 100% 触发，获得纯净经典奖励 20 XP, Toast: "${context.lastToast}"`);

// ----------------------------------------------------
// Case 3: 答错结算时能力更新与扣血扣 SAN
// ----------------------------------------------------
console.log('\n【测试 3/3】答错挫败时的动态能力惩罚与属性结算测试:');
context.playerProfile = {
  hp: 100,
  grayHp: 0,
  san: 100,
  level: 5,
  xp: 0,
  combo: 3,
  wonRounds: 5,
  riskModel: { theta_long: 0.5, theta_session: 0.5, session_state: 0.5, answer_count: 50, vocab_rating: 0.0 }
};
context.appSettings = { enableRiskEngine: true };

const optWrong = {
  isCorrect: false,
  word: 'ephemeral',
  action: 'Hesitate panic'
};

context.handleSurvivalChoice(optWrong, 1);
assert.strictEqual(context.playerProfile.hp, 92, '普通失误扣 8 HP');
assert.strictEqual(context.playerProfile.grayHp, 4, '扣除的 8 HP 中 4 点转化为可愈合灰血');
assert.strictEqual(context.playerProfile.san, 100, '普通失误绝不扣除清明度 SAN');
assert.strictEqual(context.playerProfile.combo, 1, '连击应当重置为 1');
assert(context.playerProfile.riskModel.theta_long < 0.5, '长期能力在答错后应当微降');
assert.strictEqual(context.playerProfile.riskModel.answer_count, 51, '答题总数应当自增为 51');
console.log(`  ✅ PASS: HP: ${context.playerProfile.hp} (Gray HP: ${context.playerProfile.grayHp}), SAN: ${context.playerProfile.san}, 新能力: ${context.playerProfile.riskModel.theta_long.toFixed(4)}`);

console.log('\n==================================================');
console.log('🎉 战局结算与风险算法端到端深度集成全部通过！');
console.log('==================================================');
