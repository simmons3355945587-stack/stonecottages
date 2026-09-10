/**
 * test_expedition_word_scope.cjs
 * 验证统一远征模式词库范围选取与只挑战 Mark 词专属筛选机制
 */

const assert = require('assert');
const path = require('path');

// 模拟浏览器全局环境
global.window = global;
global.localStorage = {
  _store: {},
  getItem(k) { return this._store[k] || null; },
  setItem(k, v) { this._store[k] = String(v); },
  removeItem(k) { delete this._store[k]; },
  clear() { this._store = {}; }
};
global.StoneStorage = global.localStorage;

global.escapeHtml = (str) => String(str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
global.showToast = () => {};
global.soundClick = () => {};
global.saveToStorage = (k, v) => global.StoneStorage.setItem(k, JSON.stringify(v));
global.loadFromStorage = (k, def) => {
  try {
    const v = global.StoneStorage.getItem(k);
    return v ? JSON.parse(v) : def;
  } catch(e) { return def; }
};

global.chineseDict = {};
global.builtinEnglishDict = {};

// 载入词库与字典数据
require(path.join(__dirname, '../frontend/words-data.js'));
require(path.join(__dirname, '../frontend/extra-definitions.js'));
require(path.join(__dirname, '../frontend/vocabulary.js'));

// 载入远征引擎与地图模块
const ExpeditionEngine = require(path.join(__dirname, '../frontend/expedition-engine.js'));
const ExpeditionMap = require(path.join(__dirname, '../frontend/expedition-map.js'));
const CottageModule = require(path.join(__dirname, '../frontend/cottage.js'));

global.ExpeditionEngine = ExpeditionEngine;
global.ExpeditionMap = ExpeditionMap;

async function runWordScopeTests() {
  console.log('================================================================');
  console.log('🎯 统一远征词库范围锁定与 Mark 词专属筛选测试 (Word Scope Suite)');
  console.log('================================================================\n');

  const profile = { hp: 100, san: 100, gold: 50, battleHand: ['The Magician', 'The Hermit', 'Death'] };

  // ------------------------------------------------------------
  // 测试 1: 启动核心背诵全量远征并锁定考纲
  // ------------------------------------------------------------
  console.log('【测试 1/5】核心背诵 (core) 词库范围启动与考纲锁定测试:');
  const session1 = await ExpeditionEngine.startExpedition(profile, 12345, { wordSource: 'core', markedOnly: false });
  assert.strictEqual(session1.config.wordSource, 'core', 'Session config should record wordSource as core');
  assert.strictEqual(session1.config.markedOnly, false, 'Session config markedOnly should be false');

  const node1 = session1.nodes[0];
  const candidates1 = await ExpeditionMap.getCandidateQuestionsForNode(node1.id, node1);
  assert(candidates1.length > 0, 'Candidate questions should be generated');
  assert(CORE_STUDY_WORDS.includes(candidates1[0].word), 'Question word should be from CORE_STUDY_WORDS');
  assert.strictEqual(candidates1[0].options.length, 4, 'Question must have 4 options');
  assert(candidates1[0].translation.length > 0, 'Question must have valid Chinese translation');
  console.log(`  ✅ PASS: 核心背诵考题生成正常 (首词: ${candidates1[0].word}, 释义: ${candidates1[0].translation})`);

  // ------------------------------------------------------------
  // 测试 2: 切换外贸函电 (trade_business) 范围启动远征
  // ------------------------------------------------------------
  console.log('\n【测试 2/5】外贸函电 (trade_business) 词库范围锁定测试:');
  const session2 = await ExpeditionEngine.startExpedition(profile, 23456, { wordSource: 'trade_business', markedOnly: false });
  assert.strictEqual(session2.config.wordSource, 'trade_business');

  const candidates2 = await ExpeditionMap.getCandidateQuestionsForNode(node1.id, node1);
  assert(candidates2.length > 0, 'Trade candidates should be generated');
  assert(TRADE_BUSINESS_WORDS.includes(candidates2[0].word), 'Question word must come from TRADE_BUSINESS_WORDS');
  console.log(`  ✅ PASS: 外贸函电词库考题生成正常 (首词: ${candidates2[0].word}, 释义: ${candidates2[0].translation})`);

  // ------------------------------------------------------------
  // 测试 3: 标记特定单词并勾选【只挑战 mark 词】
  // ------------------------------------------------------------
  console.log('\n【测试 3/5】重点生词本 (Marked Only) 专属突围测试:');
  global.marks = {
    'universe': 2,
    'convert': 1,
    'controversy': 3
  };
  global.STORAGE_KEYS = { MARKS: 'vocab_marks_v2' };

  const session3 = await ExpeditionEngine.startExpedition(profile, 34567, { wordSource: 'core', markedOnly: true });
  assert.strictEqual(session3.config.markedOnly, true, 'markedOnly must be true');

  const candidates3 = await ExpeditionMap.getCandidateQuestionsForNode(node1.id, node1);
  assert(candidates3.length > 0, 'Marked candidates must be generated');
  const allowedMarkedWords = ['universe', 'convert', 'controversy'];
  for (const c of candidates3) {
    assert(allowedMarkedWords.includes(c.word.toLowerCase()), `Candidate ${c.word} must be one of the marked words!`);
  }
  console.log(`  ✅ PASS: 只挑战 mark 词严格生效！生成考题全部命中标记生词: ${candidates3.map(c => c.word).join(', ')}`);

  // ------------------------------------------------------------
  // 测试 4: 生词本为空时勾选只挑战 mark 词的降级容错测试
  // ------------------------------------------------------------
  console.log('\n【测试 4/5】空生词本容错降级与兜底机制测试:');
  global.marks = {}; // 清空生词标记
  const session4 = await ExpeditionEngine.startExpedition(profile, 45678, { wordSource: 'core', markedOnly: true });
  const candidates4 = await ExpeditionMap.getCandidateQuestionsForNode(node1.id, node1);
  assert(candidates4.length > 0, 'Should gracefully fallback without throwing');
  assert(CORE_STUDY_WORDS.includes(candidates4[0].word), 'Fallback should pull from core word list');
  console.log(`  ✅ PASS: 空生词本优雅降级，未发生崩溃 (降级抽取词: ${candidates4[0].word})`);

  // ------------------------------------------------------------
  // 测试 5: 石屋出征整备祭坛持久化与交互方法测试
  // ------------------------------------------------------------
  console.log('\n【测试 5/5】石屋整备祭坛 scope 状态切换与本地持久化测试:');
  assert(typeof CottageModule.setExpeditionPrepScope === 'function', 'setExpeditionPrepScope must be a function');
  assert(typeof CottageModule.toggleExpeditionPrepMarkedOnly === 'function', 'toggleExpeditionPrepMarkedOnly must be a function');

  CottageModule.setExpeditionPrepScope('trade_business');
  CottageModule.toggleExpeditionPrepMarkedOnly(true);

  const saved = JSON.parse(global.localStorage.getItem('vocab_expedition_scope'));
  assert.strictEqual(saved.wordSource, 'trade_business', 'Saved wordSource should be trade_business');
  assert.strictEqual(saved.markedOnly, true, 'Saved markedOnly should be true');
  console.log(`  ✅ PASS: 出征祭坛配置持久化与切换完全正常 (Saved: ${JSON.stringify(saved)})`);

  console.log('\n================================================================');
  console.log('🎉 远征词库范围与只挑战 Mark 词测试全部 100% 顺利通过 (5/5 PASSED)!');
  console.log('================================================================\n');
}

runWordScopeTests().then(() => {
  process.exit(0);
}).catch(err => {
  console.error('❌ Test failed:', err);
  process.exit(1);
});
