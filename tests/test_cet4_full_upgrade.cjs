/**
 * test_cet4_full_upgrade.cjs
 * 验证四级全量核心词库升级 (3878词) 与好锦囊题库及单元课时折叠元数据集成
 */

const assert = require('assert');
const path = require('path');

// Mock browser globals
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

// Load modules
require(path.join(__dirname, '../frontend/words-data.js'));
require(path.join(__dirname, '../frontend/extra-definitions.js'));
require(path.join(__dirname, '../frontend/lexical-graph.js'));
require(path.join(__dirname, '../frontend/question-validator.js'));
require(path.join(__dirname, '../frontend/vocabulary.js'));

const ExpeditionEngine = require(path.join(__dirname, '../frontend/expedition-engine.js'));
const ExpeditionMap = require(path.join(__dirname, '../frontend/expedition-map.js'));
global.ExpeditionEngine = ExpeditionEngine;
global.ExpeditionMap = ExpeditionMap;

console.log('================================================================');
console.log('🚀 开始执行 CET-4 全量核心词库与好锦囊题库终审综合验证...');
console.log('================================================================\n');

// 1. 核心词库总量与顺位
console.log('👉 [Case 1] 校验核心词库总量与全书顺位...');
assert.strictEqual(Array.isArray(CORE_STUDY_WORDS), true);
assert.strictEqual(CORE_STUDY_WORDS.length, 3878, `Core words count should be 3878, got ${CORE_STUDY_WORDS.length}`);
assert.strictEqual(CORE_STUDY_WORDS[0], 'universe', `First word must be universe, got ${CORE_STUDY_WORDS[0]}`);
console.log(`   ✔ 核心词库规模达标: ${CORE_STUDY_WORDS.length} 词，首词为【${CORE_STUDY_WORDS[0]}】`);

// 2. 单元课时与词群元数据校验
console.log('\n👉 [Case 2] 校验全书单元标、课时与词群元数据 (WORD_UNIT_META)...');
assert.ok(typeof WORD_UNIT_META === 'object' && WORD_UNIT_META !== null);
const metaKeys = Object.keys(WORD_UNIT_META);
assert.ok(metaKeys.length >= 3878, `Metadata must cover all core words, got ${metaKeys.length}`);

// Check specific words
const uMeta = WORD_UNIT_META['universe'];
assert.ok(uMeta, 'universe must have metadata');
assert.strictEqual(uMeta.unit, 1);
assert.strictEqual(uMeta.lesson, 1);
assert.ok(uMeta.group_name.includes('vers'), `group_name should be vers group, got ${uMeta.group_name}`);
console.log(`   ✔ 单词元数据完备: universe -> Unit ${uMeta.unit}·Lesson ${uMeta.lesson} 词群【${uMeta.group_name}】`);

// Verify all 10 units and 4 lessons are represented
const unitsFound = new Set(Object.values(WORD_UNIT_META).map(m => m.unit));
const lessonsFound = new Set(Object.values(WORD_UNIT_META).map(m => m.lesson));
for (let u = 1; u <= 10; u++) {
  assert.ok(unitsFound.has(u), `Unit ${u} must be present in WORD_UNIT_META`);
}
for (let l = 1; l <= 4; l++) {
  assert.ok(lessonsFound.has(l), `Lesson ${l} must be present in WORD_UNIT_META`);
}
console.log(`   ✔ 10 大单元 (Unit 1~10) 与 4 课时 (Lesson 1~4) 结构覆盖完整`);

// 3. 全量相似词图谱与好锦囊校验
console.log('\n👉 [Case 3] 校验 STONE_LEXICAL_GRAPH 全量覆盖与锦囊标准...');
const graph = global.window.STONE_LEXICAL_GRAPH;
assert.ok(graph, 'STONE_LEXICAL_GRAPH must be loaded');
const graphWords = Object.keys(graph);
console.log(`   图谱总词量: ${graphWords.length} 词`);
assert.ok(graphWords.length >= 4000, `Graph should have >= 4000 words, got ${graphWords.length}`);

let checkedCount = 0;
let clozeCount = 0;
let notesCount = 0;

for (const w of CORE_STUDY_WORDS) {
  const entry = graph[w];
  assert.ok(entry, `Word [${w}] must exist in STONE_LEXICAL_GRAPH`);
  assert.ok(entry.phonetic, `Word [${w}] must have phonetic`);
  assert.ok(entry.translation, `Word [${w}] must have translation`);
  assert.ok(entry.cloze && entry.cloze.sentence && entry.cloze.sentence.includes('______'), `Word [${w}] must have valid cloze`);
  assert.strictEqual(entry.form_confusables.length, 4, `Word [${w}] must have 4 form confusables`);
  assert.strictEqual(entry.semantic_confusables.length, 4, `Word [${w}] must have 4 semantic confusables`);
  assert.ok(entry.notes && entry.notes.length > 25, `Word [${w}] notes too short`);
  assert.ok(entry.notes.includes('【正解考点】') || entry.notes.includes('【搭配考点】'), `Word [${w}] notes missing correct section`);
  assert.ok(entry.notes.includes('【形近'), `Word [${w}] notes missing form section`);
  assert.ok(entry.notes.includes('【近义'), `Word [${w}] notes missing semantic section`);
  checkedCount++;
  clozeCount++;
  notesCount++;
}
console.log(`   ✔ 全部 ${checkedCount} 个核心词 100% 具备高质量 Cloze 语境挖空与语言学辨析锦囊`);

// 4. SAN 出题校验器多层级压力抽测
console.log('\n👉 [Case 4] 随机抽测 200 个新词在 4 级 SAN 难度下的实际出题与校验...');
const sampleWords = [];
for (let i = 0; i < 200; i++) {
  sampleWords.push(CORE_STUDY_WORDS[Math.floor((i * 19) % CORE_STUDY_WORDS.length)]);
}

const sanTiers = [100, 75, 50, 20];
let testCount = 0;

for (const sw of sampleWords) {
  for (const san of sanTiers) {
    const q = ExpeditionMap._buildChallengeQuestion(sw, chineseDict[sw] || '释义', [sw, 'space', 'system'], san);
    assert.ok(q, `Question for ${sw} (SAN=${san}) must be generated`);
    assert.strictEqual(q.options.length, 4, `Question for ${sw} must have 4 options`);
    // Ensure all options are non-empty and distinct
    const opts = new Set(q.options.map(o => String(o).trim().toLowerCase()));
    assert.strictEqual(opts.size, 4, `Question for ${sw} options must be unique: ${JSON.stringify(q.options)}`);
    assert.ok(!q.options.some(o => o.startsWith('option_')), `Question for ${sw} must not have placeholder option`);
    if (san < 80) {
      assert.ok(q.clozeSentence && q.clozeSentence.includes('______'), `SAN ${san} must have cloze sentence`);
      assert.ok(q.metaNotes && q.metaNotes.length > 20, `SAN ${san} must have metaNotes`);
    }
    testCount++;
  }
}
console.log(`   ✔ 200 个词 × 4 档位 = ${testCount} 次高压出题测试 100% 通过！零占位符、零选项重复、语境挖空与辨析锦囊完美匹配！`);

console.log('\n================================================================');
console.log('🎉 恭喜！四级全量核心词库 (3878词) 与好锦囊题库终审验证 100% 全部通过！');
console.log('================================================================\n');
