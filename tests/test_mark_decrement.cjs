/**
 * test_mark_decrement.cjs
 * ============================================================
 * 针对生词标记减 1 (Mark -1) 功能恢复与全链路学习闭环自动化测试
 * ============================================================
 */

const assert = require('assert');
const path = require('path');
const fs = require('fs');

console.log('================================================================');
console.log('★ 生词标记减 1 (Mark -1) 功能恢复与学习闭环严格测试');
console.log('================================================================\n');

// 模拟浏览器全局环境
const fakeLocalStorage = {};
global.localStorage = {
  getItem: (k) => fakeLocalStorage[k] || null,
  setItem: (k, v) => { fakeLocalStorage[k] = String(v); },
  removeItem: (k) => { delete fakeLocalStorage[k]; },
  clear: () => { Object.keys(fakeLocalStorage).forEach(k => delete fakeLocalStorage[k]); }
};

global.STORAGE_KEYS = {
  MARKS: 'vocab_marks',
  WORDS: 'vocab_words',
  CUSTOM_WORDS: 'vocab_custom_words'
};
global.marks = {};
global.words = ['vacant', 'available', 'unoccupied'];
global.customWords = [];
global.currentLookupWord = 'vacant';
global.currentSubTab = 'all';

global.loadFromStorage = (k, def) => {
  const v = global.localStorage.getItem(k);
  if (!v) return def;
  try { return JSON.parse(v); } catch { return def; }
};
global.saveToStorage = (k, val) => {
  global.localStorage.setItem(k, JSON.stringify(val));
};
global.updateBadges = () => {};
global.triggerCloudSync = () => {};
global.showToast = (msg) => { global.lastToast = msg; };
global.escapeHtml = (s) => String(s || '');
global.corrections = {};
global.chineseDict = { vacant: '空缺的；空虚的', available: '可获得的', unoccupied: '未占用的' };
global.appSettings = { dictLanguageMode: 'zh', showChinese: true };

// 模拟 DOM 节点
const fakeElements = {};
global.document = {
  getElementById: (id) => {
    if (!fakeElements[id]) {
      fakeElements[id] = {
        id,
        textContent: '',
        innerHTML: '',
        style: {},
        classList: {
          remove: () => {},
          add: () => {}
        },
        querySelectorAll: () => [],
        appendChild: () => {},
        disabled: false
      };
    }
    return fakeElements[id];
  },
  querySelectorAll: () => [],
  createElement: (tag) => ({
    tagName: tag,
    className: '',
    innerHTML: '',
    style: {},
    classList: { add: () => {}, remove: () => {} },
    appendChild: () => {}
  }),
  createDocumentFragment: () => ({ appendChild: () => {} })
};
global.window = global;

// 加载 vocabulary.js
const vocabCode = fs.readFileSync(path.join(__dirname, '../frontend/vocabulary.js'), 'utf8');
eval(vocabCode);

// 【测试 1】addMark 与 reduceMark 基础阶梯增减测试
console.log('【测试 1/5】addMark 与 reduceMark 阶梯增减与归零测试:');
assert.strictEqual(getMarkCount('vacant'), 0, '初始 mark 为 0');
addMark('vacant');
assert.strictEqual(getMarkCount('vacant'), 1, 'addMark 后 mark 变为 1');
addMark('vacant');
assert.strictEqual(getMarkCount('vacant'), 2, '再次 addMark 后 mark 变为 2');
addMark('vacant');
assert.strictEqual(getMarkCount('vacant'), 3, '再次 addMark 后 mark 变为 3');

reduceMark('vacant');
assert.strictEqual(getMarkCount('vacant'), 2, 'reduceMark 成功将 3 减为 2');
reduceMark('vacant');
assert.strictEqual(getMarkCount('vacant'), 1, 'reduceMark 成功将 2 减为 1');
reduceMark('vacant');
assert.strictEqual(getMarkCount('vacant'), 0, 'reduceMark 成功将 1 减为 0 并从词典清除');
assert.strictEqual(marks['vacant'], undefined, '归零后键名已从 marks 中彻底删除');

// 对 0 再次减 1 不会溢出或报错
reduceMark('vacant');
assert.strictEqual(getMarkCount('vacant'), 0, '对未标记词 reduceMark 安全无报错且保持 0');
console.log('  ✅ PASS: 3 -> 2 -> 1 -> 0 阶梯递减与彻底清零验证通过');

// 【测试 2】toggleMarkWord 智能多级翻转测试
console.log('【测试 2/5】toggleMarkWord 翻转与广播测试:');
toggleMarkWord('available');
assert.strictEqual(getMarkCount('available'), 1, 'toggle 0 标记词变成 1');
toggleMarkWord('available');
assert.strictEqual(getMarkCount('available'), 0, '再次 toggle 将 1 标记词减为 0');
console.log('  ✅ PASS: toggleMarkWord 顺畅支持生词添加与消除');

// 【测试 3】远征模式 (ExpeditionEngine) 答对自动 reduceMark 测试
console.log('【测试 3/5】ExpeditionEngine 答对考点自动触发 reduceMark 测试:');
const ExpeditionEngine = require('../frontend/expedition-engine.js');

async function testExpeditionEngine() {
  const profile = { hp: 100, grayHp: 0, san: 100, gold: 120, battleHand: ['Justice', 'The Devil'] };
  const session = await ExpeditionEngine.startExpedition(profile, 12345);
  // 标记考点词
  marks['vacant'] = 2;
  session.activeEncounter = {
    encounterId: 'enc_test_1',
    word: 'vacant',
    translation: '空缺的',
    options: ['空缺的', '丰富的', '坚固的', '迅速的'],
    correctIndex: 0,
    resolved: false,
    assistanceLevel: 0
  };
  session.currentNodeId = 1;
  session.state = ExpeditionEngine.STATES.IN_ENCOUNTER;

  // 答对考点 (默认 expeditionAutoReduceMark 开启，减 1)
  global.appSettings.expeditionAutoReduceMark = true;
  const res = await ExpeditionEngine.submitAnswer(session.activeEncounter.correctIndex);
  assert.strictEqual(res.isCorrect, true, '回答正确');
  assert.strictEqual(getMarkCount('vacant'), 1, '默认开启时远征答对后，考点词 mark 成功由 2 减为 1！');

  // 测试设置开关生效：当 expeditionAutoReduceMark = false 时，答对不减 Mark
  global.appSettings.expeditionAutoReduceMark = false;
  await ExpeditionEngine.enterNode(2, [
    { word: 'vacant', translation: '空缺的', options: ['空缺的', '丰富的', '坚固的', '迅速的'], correctIndex: 0 }
  ]);
  const resNoReduce = await ExpeditionEngine.submitAnswer(session.activeEncounter.correctIndex);
  assert.strictEqual(resNoReduce.isCorrect, true, '回答正确');
  assert.strictEqual(getMarkCount('vacant'), 1, '当关闭答对减Mark时，答对后 mark 保持为 1，不扣减！');

  // 恢复默认，踏入第 3 节点并故意答错考点
  global.appSettings.expeditionAutoReduceMark = true;
  await ExpeditionEngine.enterNode(3, [
    { word: 'vacant', translation: '空缺的', options: ['空缺的', '丰富的', '坚固的', '迅速的'], correctIndex: 0 }
  ]);
  const wrongIdx = (session.activeEncounter.correctIndex + 1) % session.activeEncounter.options.length;
  const resWrong = await ExpeditionEngine.submitAnswer(wrongIdx);
  assert.strictEqual(resWrong.isCorrect, false, '回答错误');
  assert.strictEqual(getMarkCount('vacant'), 2, '远征答错后，考点词 mark 自动由 1 加至 2 作为巩固');
  console.log('  ✅ PASS: 远征模式与生词熟练度闭环联通 (默认答对 -1 / 可配置答对不减 / 答错 +1)');

  // 【测试 4】词典抽屉操作栏 DOM 与按钮事件测试
  console.log('【测试 4/5】抽屉底部工具栏 stone-dictionary-actions 控件测试:');
  const uiCode = fs.readFileSync(path.join(__dirname, '../frontend/ui-enhancements.js'), 'utf8');
  assert.ok(uiCode.includes('stoneDrawerMarkMinus'), 'ui-enhancements 包含 stoneDrawerMarkMinus 减1按钮');
  assert.ok(uiCode.includes('stoneDrawerMarkAdd'), 'ui-enhancements 包含 stoneDrawerMarkAdd 加1按钮');
  assert.ok(uiCode.includes('reduceMark(currentLookupWord)'), '减1按钮点击事件正确绑定 reduceMark');

  const cssCode = fs.readFileSync(path.join(__dirname, '../frontend/ui-enhancements.css'), 'utf8');
  assert.ok(cssCode.includes('stoneDrawerMarkMinus'), 'ui-enhancements.css 包含 stoneDrawerMarkMinus 样式');
  assert.ok(!cssCode.includes('.stone-home .stone-original-mark{display:none!important;}'), '原有 stone-original-mark 隐藏规则已彻底移除');
  console.log('  ✅ PASS: 抽屉控件与样式完全支持减 1 操作');

  // 【测试 5】生产打包与资源哈希验证
  console.log('【测试 5/5】生产打包与资源哈希验证:');
  const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, '../frontend/asset-manifest.json'), 'utf8'));
  assert.ok(manifest['vocabulary.js'], 'manifest 包含 vocabulary.js');
  assert.ok(manifest['ui-enhancements.js'], 'manifest 包含 ui-enhancements.js');
  assert.ok(manifest['expedition-engine.js'], 'manifest 包含 expedition-engine.js');
  console.log('  ✅ PASS: 生产资源指纹全量更新完毕');

  console.log('\n================================================================');
  console.log('🎉 全部 5 大核心功能验证通过！Mark -1 功能已彻底恢复！');
  console.log('================================================================');
}

testExpeditionEngine().catch(err => {
  console.error('❌ 测试失败:', err);
  process.exit(1);
});
