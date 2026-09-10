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

// 2. Test SAN >= 80 (Standard Mode - 常规单字中文四选一)
const q100 = ExpeditionMap._buildChallengeQuestion('conform', '符合；与...一致', ['conform', 'space', 'universe'], 100);
assert.strictEqual(q100.challengeType, 'standard', 'SAN 100 should be standard');
assert.strictEqual(q100.challengeTier, 'clear');
assert.strictEqual(q100.promptType, 'word_to_zh');
assert.strictEqual(q100.options.length, 4);
assert.strictEqual(q100.options[0], '符合；与...一致');
console.log('✔ Tier 1 (SAN=100) Clear: Standard word test with Chinese distractors confirmed');

// 3. Test 60 < SAN < 80 (80 这一档 - 句子挖空 + 4 个形近英文单词)
const q75 = ExpeditionMap._buildChallengeQuestion('conform', '符合；与...一致', ['conform', 'space', 'universe'], 75);
assert.strictEqual(q75.challengeType, 'cloze_form', 'SAN 75 should trigger cloze_form');
assert.strictEqual(q75.challengeTier, 'mild_polluted');
assert.strictEqual(q75.promptType, 'cloze_sentence');
assert.ok(q75.clozeSentence.includes('______'), 'Sentence must contain blank ______');
assert.strictEqual(q75.options.length, 4);
assert.ok(q75.options.includes('conform'), 'conform must be in options');
assert.ok(q75.options.includes('confirm'), 'confirm (form confusable) must be in options');
assert.ok(q75.options.includes('comfort'), 'comfort (form confusable) must be in options');
assert.ok(q75.options.includes('confront'), 'confront (form confusable) must be in options');
assert.ok(q75.metaNotes.includes('conform with/to'), 'Meta notes should explain collocation');
console.log('✔ Tier 2 (SAN=75) Mild Polluted: Cloze sentence with 4 pure English form confusables confirmed');

// 4. Test 40 < SAN <= 60 (第三档 - 句子挖空 + 4 个意思相似英文单词)
const q50 = ExpeditionMap._buildChallengeQuestion('vacant', '空着的；未被占用的', ['vacant', 'space', 'universe'], 50);
assert.strictEqual(q50.challengeType, 'cloze_semantic', 'SAN 50 should trigger cloze_semantic');
assert.strictEqual(q50.challengeTier, 'heavy_polluted');
assert.strictEqual(q50.promptType, 'cloze_sentence');
assert.ok(q50.clozeSentence.includes('______'), 'Sentence must contain blank ______');
assert.strictEqual(q50.options.length, 4);
assert.ok(q50.options.includes('vacant'), 'vacant must be in options');
assert.ok(q50.options.includes('available'), 'available (semantic confusable) must be in options');
assert.ok(q50.options.includes('empty'), 'empty (semantic confusable) must be in options');
assert.ok(q50.options.includes('unoccupied'), 'unoccupied (semantic confusable) must be in options');
assert.ok(q50.metaNotes.includes('vacant position'), 'Meta notes should explain subtle distinction');
console.log('✔ Tier 3 (SAN=50) Heavy Polluted: Cloze sentence with 4 pure English semantic confusables confirmed');

// 5. Test SAN <= 40 (第四档 - 狂乱绝境高压挖空近义深渊)
const q20 = ExpeditionMap._buildChallengeQuestion('adapt', '适应；使适合；改编', ['adapt', 'space', 'universe'], 20);
assert.strictEqual(q20.challengeType, 'cloze_semantic_hard', 'SAN 20 should trigger cloze_semantic_hard');
assert.strictEqual(q20.challengeTier, 'delirious');
assert.strictEqual(q20.promptType, 'cloze_sentence');
assert.ok(q20.clozeSentence.includes('______'), 'Sentence must contain blank ______');
assert.ok(q20.options.includes('adapt'), 'adapt must be in options');
assert.ok(q20.options.includes('adjust'), 'adjust must be in options');
console.log('✔ Tier 4 (SAN=20) Delirious: Cloze sentence under delirium confirmed');

// 6. Test fallback for words not in pilot
const qFallback = ExpeditionMap._buildChallengeQuestion('unknownwordxyz', '测试未知释义', ['unknownwordxyz', 'space', 'universe'], 15);
assert.strictEqual(qFallback.challengeType, 'standard');
assert.strictEqual(qFallback.options.length, 4);
console.log('✔ Graceful fallback for non-pilot words confirmed');

console.log('\n🎉 ALL V2 CLOZE & ENGLISH CONFUSABLE TESTS PASSED PERFECTLY!');
