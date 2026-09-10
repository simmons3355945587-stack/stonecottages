/**
 * test_lexical_graph_san.cjs
 * 验证词库相似词/形近词图谱与 SAN 认知污染 4 级阶梯难度联动
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

global.document = {
  getElementById: () => null,
  querySelectorAll: () => []
};

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

// 载入词库与图谱
require(path.join(__dirname, '../frontend/words-data.js'));
require(path.join(__dirname, '../frontend/extra-definitions.js'));
require(path.join(__dirname, '../frontend/lexical-graph.js'));
require(path.join(__dirname, '../frontend/vocabulary.js'));

// 载入远征引擎与地图模块
const ExpeditionEngine = require(path.join(__dirname, '../frontend/expedition-engine.js'));
const ExpeditionMap = require(path.join(__dirname, '../frontend/expedition-map.js'));

global.ExpeditionEngine = ExpeditionEngine;
global.ExpeditionMap = ExpeditionMap;

console.log('Testing Lexical Graph Pilot & SAN Integration...');

// 1. Verify STONE_LEXICAL_GRAPH is loaded
assert.ok(global.window.STONE_LEXICAL_GRAPH, 'STONE_LEXICAL_GRAPH must be loaded on window');
const graph = global.window.STONE_LEXICAL_GRAPH;
assert.ok(graph.adapt, 'adapt must be in graph');
assert.ok(graph.conform, 'conform must be in graph');
assert.ok(graph.vacant, 'vacant must be in graph');
console.log('✔ Lexical graph dataset loaded with words:', Object.keys(graph).length);

// 2. Test SAN >= 80 (Standard Mode)
const q100 = ExpeditionMap._buildChallengeQuestion('conform', '符合；与...一致', ['conform', 'space', 'universe'], 100);
assert.strictEqual(q100.challengeType, 'standard', 'SAN 100 should be standard');
assert.strictEqual(q100.challengeTier, 'clear');
assert.strictEqual(q100.options.length, 4);
assert.strictEqual(q100.options[0], '符合；与...一致');
console.log('✔ Tier 1 (SAN=100) Clear: Standard distractors confirmed');

// 3. Test 50 <= SAN < 80 (Spelling Confusion)
const q65 = ExpeditionMap._buildChallengeQuestion('conform', '符合；与...一致', ['conform', 'space', 'universe'], 65);
assert.strictEqual(q65.challengeType, 'spelling_confusion', 'SAN 65 should trigger spelling_confusion');
assert.strictEqual(q65.challengeTier, 'mild_polluted');
assert.ok(q65.options.includes('确认；证实'), 'Spelling confusable confirm translation should be in options');
assert.ok(q65.metaNotes.includes('confirm'), 'Meta notes should mention confusable words');
console.log('✔ Tier 2 (SAN=65) Mild Polluted: Spelling confusables (confirm -> 确认；证实) confirmed');

// 4. Test 20 <= SAN < 50 (Synonym Confusion)
const q35 = ExpeditionMap._buildChallengeQuestion('vacant', '空着的；未被占用的', ['vacant', 'space', 'universe'], 35);
assert.strictEqual(q35.challengeType, 'synonym_confusion', 'SAN 35 should trigger synonym_confusion');
assert.strictEqual(q35.challengeTier, 'heavy_polluted');
assert.ok(q35.options.includes('空空的；空洞的') || q35.options.includes('空闲的；未占用的'), 'Synonym translation should be in options');
assert.ok(q35.metaNotes.includes('empty') || q35.metaNotes.includes('unoccupied'), 'Meta notes should mention synonyms');
console.log('✔ Tier 3 (SAN=35) Heavy Polluted: High-confusion synonyms (empty/unoccupied) confirmed');

// 5. Test SAN < 20 (English Illusion)
const q10 = ExpeditionMap._buildChallengeQuestion('adapt', '适应；使适合；改编', ['adapt', 'space', 'universe'], 10);
assert.strictEqual(q10.challengeType, 'english_illusion', 'SAN 10 should trigger english_illusion');
assert.strictEqual(q10.challengeTier, 'delirious');
assert.strictEqual(q10.promptType, 'zh_to_en');
assert.strictEqual(q10.options[0], 'adapt');
assert.ok(q10.options.includes('adopt'), 'Adopt should be in English illusion options');
assert.ok(q10.options.includes('adept'), 'Adept should be in English illusion options');
console.log('✔ Tier 4 (SAN=10) Delirious: Pure English Illusion ([adapt, adopt, adept, ...]) confirmed');

// 6. Test fallback for words not in pilot
const qFallback = ExpeditionMap._buildChallengeQuestion('unknownwordxyz', '测试未知释义', ['unknownwordxyz', 'space', 'universe'], 15);
assert.strictEqual(qFallback.challengeType, 'english_illusion');
assert.strictEqual(qFallback.options.length, 4);
console.log('✔ Graceful fallback for non-pilot words confirmed');

console.log('\n🎉 ALL LEXICAL GRAPH & SAN INTEGRATION TESTS PASSED PERFECTLY!');
