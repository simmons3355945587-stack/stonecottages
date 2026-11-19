const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

function setupReviewTest(initialMarks = {}) {
  const elements = new Map();
  const storage = new Map();
  
  // Clone initial marks
  const mockMarks = JSON.parse(JSON.stringify(initialMarks));

  const context = {
    window: {},
    document: {
      readyState: 'complete',
      addEventListener() {},
      removeEventListener() {},
      getElementById(id) {
        if (!elements.has(id)) {
          elements.set(id, {
            id,
            textContent: '',
            innerHTML: '',
            style: {},
            hidden: false,
            classList: { add() {}, remove() {}, toggle() {}, contains() { return false; } },
            setAttribute(k, v) { this[k] = v; },
            removeAttribute(k) { delete this[k]; },
            addEventListener() {},
            removeEventListener() {},
            focus() {}
          });
        }
        return elements.get(id);
      },
      querySelector() { return null; },
      querySelectorAll() { return []; },
      body: { appendChild(el) { elements.set(el.id || 'el_' + Math.random(), el); }, scrollTop: 0 },
      documentElement: { scrollTop: 0 }
    },
    localStorage: {
      getItem: k => storage.get(k) || null,
      setItem: (k, v) => storage.set(k, v),
      removeItem: k => storage.delete(k)
    },
    console,
    navigator: { userAgent: 'NodeTest' },
    AbortController,
    AbortSignal,
    crypto: require('node:crypto'),
    performance,
    setTimeout,
    clearTimeout,
    chineseDict: {
      apple: '苹果',
      banana: '香蕉',
      cherry: '樱桃',
      date: '枣',
      elderberry: '接骨木莓',
      w1: '词1', w2: '词2', w3: '词3', w4: '词4', w5: '词5', w6: '词6',
      u1: '未知1', u2: '未知2', u3: '未知3', u4: '未知4', u5: '未知5',
      w_new: '新词', w_danger: '高危词', w_relapse: '回生词', w_consolidate: '巩固词', w_check: '抽查词'
    },
    words: ['apple', 'banana', 'cherry', 'date', 'elderberry', 'w1', 'w2', 'w3', 'w4', 'w5', 'w6', 'u1', 'u2', 'u3', 'u4', 'u5', 'w_new', 'w_danger', 'w_relapse', 'w_consolidate', 'w_check'],
    customWords: [],
    cet4Words: [],
    cet6Words: [],
    currentLookupWord: null,
    currentWordSource: 'all',
    currentWordTier: 'all',
    currentSubTab: 'all',
    marks: mockMarks,
    appSettings: { dictLanguageMode: 'zh' },
    escapeHtml: String,
    escapeHtmlSafe: String,
    showToast() {},
    saveToStorage() {},
    loadFromStorage: (k, def) => def,
    updateBadges() {},
    updateWordMarkInDOM() {},
    triggerCloudSync() {},
    soundSuccess() {},
    soundFailure() {},
    speakCurrent() {}
  };

  context.window = context;
  vm.createContext(context);

  // 1. Run vocabulary.js
  const vocabCode = readFileSync(path.join(__dirname, '..', 'frontend', 'vocabulary.js'), 'utf8');
  vm.runInContext(vocabCode, context);

  // 2. Run flashcard.js with test hook
  let fcCode = readFileSync(path.join(__dirname, '..', 'frontend', 'flashcard.js'), 'utf8').replace(/\r\n/g, '\n');
  fcCode = fcCode.replace(
    '  return {\n    resumeCloudSession,',
    '  window.__test={state,judgmentGate,generateDeterministicReviewQueue,handleReviewCorrectAnswer,handleReviewWrongOrUnknownAnswer,getReviewQueueBadgeCounts,getMarkEntryHelper,getActiveAndDueMarkedWords};\n  return {\n    resumeCloudSession,'
  );
  vm.runInContext(fcCode, context);

  return {
    ...context.window.__test,
    engine: context.window.FlashcardEngine,
    context,
    elements,
    storage,
    marks: context.marks
  };
}

test('硬性约束：mark 最小永远保持为 1，严禁降为 0 或删除', () => {
  const env = setupReviewTest({
    apple: 1,
    banana: { mark: 1, ever_mastered: true, master_streak: 1 }
  });

  // 尝试使用 vocabulary.js 的 reduceMark 减少 mark === 1
  env.context.reduceMark('apple');
  assert.equal(env.context.getMarkCount('apple'), 1, 'mark 原为 1 时，执行 reduceMark 必须保持为 1');
  const markedList = env.context.getMarkedWords().map(e => Array.isArray(e) ? e[0] : e);
  assert.ok(markedList.includes('apple'), 'apple 绝不能被移出重点词库');

  env.context.reduceMark('banana');
  assert.equal(env.context.getMarkCount('banana'), 1, '复合对象 entry 的 mark 为 1 时，也必须保持为 1');
  const markedListAfter = env.context.getMarkedWords().map(e => Array.isArray(e) ? e[0] : e);
  assert.ok(markedListAfter.includes('banana'));

  // normalizeMarkEntry 容错
  const zeroEntry = env.context.normalizeMarkEntry(0, 'test_zero');
  assert.equal(zeroEntry.mark, 1, '非法或 0 值必须自动规整为 mark = 1');
  const negEntry = env.context.normalizeMarkEntry(-5, 'test_neg');
  assert.equal(negEntry.mark, 1, '负数 mark 必须自动规整为 mark = 1');
});

test('确定性组卷：15% 末尾到期抽查位 + 4级主力攻坚确定性排序', () => {
  const now = Date.now();
  const testMarks = {
    // 抽查候选词 (mark === 1 && ever_mastered === true && next_review_at <= now)
    check_due_late: { mark: 1, ever_mastered: true, master_streak: 1, next_review_at: now - 50000, added_at: 100 },
    check_due_early: { mark: 1, ever_mastered: true, master_streak: 1, next_review_at: now - 10000, added_at: 200 },
    // 仍在休眠中的词 (不应参与本轮)
    sleeping_word: { mark: 1, ever_mastered: true, master_streak: 1, next_review_at: now + 86400000, added_at: 300 },
    // 主力攻坚词 1: 新增未复习 (last_reviewed_at === 0)，added_at 较新
    new_unreviewed_newer: { mark: 2, ever_mastered: false, master_streak: 0, last_reviewed_at: 0, added_at: 500 },
    // 主力攻坚词 2: 新增未复习 (last_reviewed_at === 0)，added_at 较旧
    new_unreviewed_older: { mark: 3, ever_mastered: false, master_streak: 0, last_reviewed_at: 0, added_at: 400 },
    // 主力攻坚词 3: 高危高 mark
    high_mark_danger: { mark: 4, ever_mastered: false, master_streak: 0, last_reviewed_at: now - 3000, added_at: 50 },
    // 主力攻坚词 4: mark 2 遗忘回生 (ever_mastered === true)
    relapse_word: { mark: 2, ever_mastered: true, master_streak: 0, last_reviewed_at: now - 4000, added_at: 60 },
    // 主力攻坚词 5: mark 2 普通词 (ever_mastered === false)
    normal_mark2: { mark: 2, ever_mastered: false, master_streak: 0, last_reviewed_at: now - 2000, added_at: 70 }
  };

  const env = setupReviewTest(testMarks);

  // 1. 测试 20 词档位的配额：Math.floor(20 * 0.15) = 3
  // 此时有 2 个到期抽查词，全部进入抽查位，按 next_review_at 升序（超期越久越排前）
  const res = env.generateDeterministicReviewQueue('20');
  const queue = res.queue;

  // sleeping_word 绝不能入列
  assert.ok(!queue.includes('sleeping_word'), '未到期的休眠词绝不能入列');

  // 末尾抽查位：check_due_late (超期 50s) 排在 check_due_early (超期 10s) 之前
  assert.equal(queue[queue.length - 2], 'check_due_late');
  assert.equal(queue[queue.length - 1], 'check_due_early');

  // 主力攻坚位排序验证：
  // Tier 1: 新增未复习排最前，且 added_at 降序 -> new_unreviewed_newer(500), new_unreviewed_older(400)
  assert.equal(queue[0], 'new_unreviewed_newer');
  assert.equal(queue[1], 'new_unreviewed_older');

  // Tier 2: mark 值降序 -> high_mark_danger (mark 4)
  assert.equal(queue[2], 'high_mark_danger');

  // Tier 3: 同 mark (2) 下，ever_mastered 遗忘回生词优先 -> relapse_word 优先于 normal_mark2
  assert.equal(queue[3], 'relapse_word');
  assert.equal(queue[4], 'normal_mark2');
});

test('四态作答流转：答对时的 mark 递减与曾掌握阶梯休眠 (3/7/15/30天)', () => {
  const env = setupReviewTest({
    // mark >= 2
    tough_word: { mark: 3, ever_mastered: false, master_streak: 0, next_review_at: 0 },
    // mark === 1, 第 1 次答对
    master_1: { mark: 1, ever_mastered: false, master_streak: 0, next_review_at: 0 },
    // mark === 1, 第 2 次答对
    master_2: { mark: 1, ever_mastered: true, master_streak: 1, next_review_at: 0 },
    // mark === 1, 第 3 次答对
    master_3: { mark: 1, ever_mastered: true, master_streak: 2, next_review_at: 0 },
    // mark === 1, 第 4 次及以上答对
    master_4: { mark: 1, ever_mastered: true, master_streak: 3, next_review_at: 0 }
  });

  // 1. mark >= 2 答对：mark 减 1，保持 next_review_at = 0
  env.handleReviewCorrectAnswer('tough_word');
  const tough = env.getMarkEntryHelper('tough_word');
  assert.equal(tough.mark, 2, 'mark 应从 3 降为 2');
  assert.equal(tough.next_review_at, 0, 'mark >= 2 时不进入休眠');

  // 2. mark === 1 第 1 次答对：streak 变 1，休眠 3 天
  const before1 = Date.now();
  env.handleReviewCorrectAnswer('master_1');
  const m1 = env.getMarkEntryHelper('master_1');
  assert.equal(m1.mark, 1, 'mark 保持 1');
  assert.equal(m1.ever_mastered, true, '标记为曾掌握');
  assert.equal(m1.master_streak, 1);
  const diffDays1 = Math.round((m1.next_review_at - before1) / 86400000);
  assert.equal(diffDays1, 3, '第 1 次应休眠 3 天');

  // 3. 第 2 次答对：streak 变 2，休眠 7 天
  const before2 = Date.now();
  env.handleReviewCorrectAnswer('master_2');
  const m2 = env.getMarkEntryHelper('master_2');
  assert.equal(m2.master_streak, 2);
  const diffDays2 = Math.round((m2.next_review_at - before2) / 86400000);
  assert.equal(diffDays2, 7, '第 2 次应休眠 7 天');

  // 4. 第 3 次答对：streak 变 3，休眠 15 天
  const before3 = Date.now();
  env.handleReviewCorrectAnswer('master_3');
  const m3 = env.getMarkEntryHelper('master_3');
  assert.equal(m3.master_streak, 3);
  const diffDays3 = Math.round((m3.next_review_at - before3) / 86400000);
  assert.equal(diffDays3, 15, '第 3 次应休眠 15 天');

  // 5. 第 4 次答对：streak 变 4，休眠 30 天
  const before4 = Date.now();
  env.handleReviewCorrectAnswer('master_4');
  const m4 = env.getMarkEntryHelper('master_4');
  assert.equal(m4.master_streak, 4);
  const diffDays4 = Math.round((m4.next_review_at - before4) / 86400000);
  assert.equal(diffDays4, 30, '第 4 次及以上应休眠 30 天');
});

test('四态作答流转：答错/不清楚时 mark+1 并重插到往后第 4 位进行间隔重考', () => {
  const env = setupReviewTest({
    w1: 1, w2: 1, w3: 1, w4: 1, w5: 1, w6: 1
  });

  env.engine.open('review', 'all');
  const initialQueue = Array.from(env.state.queue);
  assert.equal(initialQueue.length, 6);
  const targetWord = initialQueue[0];

  // targetWord 答错/不清楚
  env.engine.giveUpUnknown();
  assert.equal(env.state.isAnswered, true);

  // 切到下一题
  env.engine.nextWord();

  // targetWord 应被从头部移出，并插入到原本索引 0 往后第 4 位 (即 index 3)
  assert.equal(env.state.currentWord, initialQueue[1], '当前题目应变为第二词');
  assert.equal(env.state.queue[3], targetWord, 'targetWord 应被重新插在往后第 4 位进行间隔重考');
  assert.equal(env.state.reviewClearedCount, 0, '答错不计入已清零数');

  // 验证 targetWord 的数据状态：mark 增加为 2，next_review_at 解除休眠 (0)，streak 清零
  const entry = env.getMarkEntryHelper(targetWord);
  assert.equal(entry.mark, 2);
  assert.equal(entry.next_review_at, 0);
  assert.equal(entry.master_streak, 0);
});

test('四态作答流转：暂不判定 (UNCERTAIN) 自评快捷流转与跳过', () => {
  const env = setupReviewTest({
    u1: { mark: 2, added_at: 1000, last_reviewed_at: 0, next_review_at: 0, master_streak: 0, ever_mastered: false },
    u2: { mark: 2, added_at: 1000, last_reviewed_at: 0, next_review_at: 0, master_streak: 0, ever_mastered: false },
    u3: { mark: 2, added_at: 1000, last_reviewed_at: 0, next_review_at: 0, master_streak: 0, ever_mastered: false },
    u4: { mark: 2, added_at: 1000, last_reviewed_at: 0, next_review_at: 0, master_streak: 0, ever_mastered: false },
    u5: { mark: 2, added_at: 1000, last_reviewed_at: 0, next_review_at: 0, master_streak: 0, ever_mastered: false }
  });

  env.engine.open('review', 'all');
  
  // 1. 测试快捷自评：「算我答对」
  const u1Word = env.state.queue[0];
  env.state.currentWord = u1Word;
  env.state.currentIndex = 0;
  env.state.isAnswered = true;
  env.state.lastResult = { verdict: 'UNCERTAIN', correct: false, confidence: 0.5 };

  env.engine.selfEvaluateUncertain(true);
  assert.equal(env.state.reviewClearedCount, 1, '算我答对应计入已清零数');
  const u1Entry = env.getMarkEntryHelper(u1Word);
  assert.equal(u1Entry.mark, 1, 'mark 应减 1');
  assert.ok(!env.state.queue.includes(u1Word), 'u1 应被移出本轮队列');

  // 2. 测试快捷自评：「没掌握，重考」
  const u2Word = env.state.queue[0];
  env.state.currentWord = u2Word;
  env.state.currentIndex = 0;
  env.state.isAnswered = true;
  env.state.lastResult = { verdict: 'UNCERTAIN', correct: false, confidence: 0.5 };
  env.engine.selfEvaluateUncertain(false);
  assert.equal(env.state.reviewClearedCount, 1, '没掌握不增加清零数');
  const u2Entry = env.getMarkEntryHelper(u2Word);
  assert.equal(u2Entry.mark, 3, 'mark 应加 1');
  assert.ok(env.state.queue.includes(u2Word), 'u2 应重新插队回本轮队列');

  // 3. 测试用户不点自评，直接点击「下一个」-> 记为跳过，不修改数据库，移出本轮
  const u3Word = env.state.queue[0];
  env.state.currentWord = u3Word;
  env.state.currentIndex = 0;
  env.state.isAnswered = true;
  env.state.lastResult = { verdict: 'UNCERTAIN', correct: false, confidence: 0.5 };
  const beforeU3 = { ...env.getMarkEntryHelper(u3Word) };
  env.engine.nextWord();
  assert.equal(env.state.reviewSkippedCount, 1, '跳过数应 +1');
  const afterU3 = env.getMarkEntryHelper(u3Word);
  assert.deepEqual(JSON.parse(JSON.stringify(afterU3)), JSON.parse(JSON.stringify(beforeU3)), '直接跳过必须保持数据库字段原样不变');
  assert.ok(!env.state.queue.includes(u3Word), '跳过后移出本轮队列');
});

test('档位切换与追踪条状态徽章实时更新', () => {
  const env = setupReviewTest({
    w_new: { mark: 1, added_at: 100, last_reviewed_at: 0 },
    w_danger: { mark: 4, added_at: 100, last_reviewed_at: 50 },
    w_relapse: { mark: 2, ever_mastered: true, added_at: 100, last_reviewed_at: 50 },
    w_consolidate: { mark: 2, ever_mastered: false, added_at: 100, last_reviewed_at: 50 },
    w_check: { mark: 1, ever_mastered: true, next_review_at: Date.now() - 1000, added_at: 100, last_reviewed_at: 50 }
  });

  env.engine.open('review', 'all');
  assert.equal(env.state.reviewBatchSetting, 'all');

  // 徽章数量统计测试
  const badges = env.getReviewQueueBadgeCounts(env.state.queue);
  assert.equal(badges.newCount, 1, '新增未复习应当为 1');
  assert.equal(badges.dangerCount, 2, '高危(mark>=3)+回生(mark>=2&ever_mastered)应当为 2');
  assert.equal(badges.consolidateCount, 1, '巩固中应当为 1');
  assert.equal(badges.checkCount, 1, '到期抽查应当为 1');

  // 档位切换为 20
  env.engine.setReviewBatchSize('20');
  assert.equal(env.state.reviewBatchSetting, '20');
  assert.equal(env.storage.get('stone_review_batch_size'), '20', '档位偏好应已持久化');
  assert.equal(env.state.reviewRoundTotal, 5, '本轮总词数不超过可用词数 5');
});
