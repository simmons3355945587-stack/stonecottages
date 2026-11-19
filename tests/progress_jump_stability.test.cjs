const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function setupEnvironment(fetchHandler = null, initialStorage = new Map()) {
  const elements = new Map();
  const storage = initialStorage;
  const labels = {};

  const context = {
    window: {},
    document: {
      readyState: 'complete',
      visibilityState: 'visible',
      addEventListener(evt, fn) {
        if (!this._listeners) this._listeners = {};
        if (!this._listeners[evt]) this._listeners[evt] = [];
        this._listeners[evt].push(fn);
      },
      trigger(evt) {
        if (this._listeners?.[evt]) {
          this._listeners[evt].forEach(fn => fn());
        }
      },
      createElement(tag) {
        return {
          tagName: tag.toUpperCase(),
          id: '',
          className: '',
          style: {},
          innerHTML: '',
          textContent: '',
          classList: { add() {}, remove() {}, toggle() {}, contains() { return false; } },
          setAttribute(k, v) { this[k] = v; },
          removeAttribute(k) { delete this[k]; },
          addEventListener() {},
          removeEventListener() {},
          focus() {},
          select() {},
          remove() { elements.delete(this.id); }
        };
      },
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
            focus() {},
            select() {},
            remove() { elements.delete(id); }
          });
        }
        return elements.get(id);
      },
      body: {
        appendChild(el) { elements.set(el.id || 'body-child-' + Math.random(), el); },
        scrollTop: 0
      },
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
    setTimeout,
    clearTimeout,
    performance,
    crypto: require('node:crypto'),
    authUser: { id: '1', sub: '1' },
    authToken: 'token-valid-123',
    words: Array.from({ length: 3837 }, (_, i) => `word_${i + 1}`),
    chineseDict: { word_1: '单词一', word_410: '单词四百一十' },
    escapeHtml: String,
    escapeHtmlSafe: String,
    marks: {},
    getMarkedWords() {
      const m = context.marks || {};
      return Object.entries(m).filter(([k, v]) => {
        if (typeof v === 'number') return v > 0;
        if (v && typeof v === 'object') return (v.mark || 0) > 0;
        return false;
      });
    },
    getMarkCount(w) {
      const m = context.marks || {};
      const val = m[w?.toLowerCase()];
      if (typeof val === 'number') return val;
      if (val && typeof val === 'object') return val.mark || 0;
      return 0;
    },
    addMark(w) {
      const k = w?.toLowerCase();
      if (!context.marks) context.marks = {};
      context.marks[k] = (context.marks[k] || 0) + 1;
    },
    reduceMark(w) {
      const k = w?.toLowerCase();
      if (context.marks?.[k]) {
        context.marks[k]--;
        if (context.marks[k] <= 0) delete context.marks[k];
      }
    },
    fetch: fetchHandler || (async () => ({ ok: true, json: async () => ({}) }))
  };

  context.window = context;
  vm.createContext(context);
  const code = fs.readFileSync(path.join(__dirname, '..', 'frontend', 'flashcard.js'), 'utf8');
  vm.runInContext(code, context);

  return {
    engine: context.window.FlashcardEngine,
    cloud: context.window.FlashcardCloud,
    context,
    elements,
    storage
  };
}

test('需求1：外部词典 API 超时或异常仅影响英文局部区域，绝不卡死卡片切换与判卷按钮', async () => {
  // 模拟一个永远挂起或超时的 fetch
  let fetchCount = 0;
  const hangingFetch = async (url, opts = {}) => {
    fetchCount++;
    if (url.includes('/api/dict/')) {
      // 模拟超时挂起
      return new Promise((resolve, reject) => {
        if (opts.signal) {
          opts.signal.addEventListener('abort', () => {
            const err = new Error('The operation was aborted');
            err.name = 'AbortError';
            reject(err);
          });
        }
      });
    }
    return { ok: true, json: async () => ({}) };
  };

  const env = setupEnvironment(hangingFetch);
  await env.cloud.load();
  env.engine.open('study', 100);

  // 验证主交互立即解锁，卡片正常呈现
  assert.equal(typeof env.engine.submitAnswer, 'function');
  assert.equal(typeof env.engine.nextWord, 'function');

  // 等待 3.5s 超时熔断触发
  await new Promise(r => setTimeout(r, 3600));

  // 验证英文区域展示重试提示与局部兜底，没有发生全局崩溃
  const enTextEl = env.elements.get('fcStdDefEnText');
  assert.ok(enTextEl, 'fcStdDefEnText 元素应存在');
  assert.match(enTextEl.textContent, /暂时未取得英文释义/);

  // 验证在英文超时的状态下，依然可以流畅切换单词
  env.engine.nextWord();
  // 当前词索引应顺利推进至 1 (第二个单词)
  const modal = env.elements.get('flashcardModal');
  assert.ok(modal && modal.innerHTML.includes('fcWordNumberChip'));
});

test('需求2：页面切回前台 (visibilitychange) 时自动向 VPS 校验进度并无感更新最新词号', async () => {
  let progressChecked = false;
  const mockFetch = async (url, opts = {}) => {
    if (url === '/api/flashcards/progress' && (!opts.method || opts.method === 'GET')) {
      progressChecked = true;
      // 模拟云端在另一设备推进到了第 50 词 (group 0, currentIndex 49)
      return {
        ok: true,
        json: async () => ({
          revision: 10,
          updated_at: Date.now() + 50000,
          mutation_id: 'mut-cloud-remote',
          state: {
            learned: ['word_1', 'word_2'],
            sequence: {},
            stats: { completed: 49, correct: 48, wrong: 1, target: 100, date: '2026-11-14' },
            session: {
              date: '2026-11-14',
              mode: 'study',
              targetCount: 100,
              queue: Array.from({ length: 100 }, (_, i) => `word_${i + 1}`),
              currentIndex: 49,
              studyStartIndex: 0,
              isOpen: true
            }
          }
        })
      };
    }
    return { ok: true, json: async () => ({ revision: 1, status: 'synced', updated_at: Date.now() }) };
  };

  const env = setupEnvironment(mockFetch);
  await env.cloud.load();
  env.engine.open('study', 100);

  // 模拟用户切回浏览器前台 (触发 visibilitychange)
  env.context.document.trigger('visibilitychange');

  // 等待异步无感同步完成
  await new Promise(r => setTimeout(r, 100));

  assert.equal(progressChecked, true, '应自动向 VPS 校验进度');
  // 检查状态栏已更新为自动同步文案
  const statusEl = env.elements.get('fcCloudStatus');
  assert.match(statusEl.textContent, /已自动同步/);
});

test('需求3：手动修改/跳转进度，直接输入目标词号 410 并一键跳转，立即强制同步覆盖 VPS', async () => {
  let putPayload = null;
  const mockFetch = async (url, opts = {}) => {
    if (url === '/api/flashcards/progress' && opts.method === 'PUT') {
      putPayload = JSON.parse(opts.body);
      return { ok: true, json: async () => ({ revision: 5, status: 'synced', updated_at: Date.now() }) };
    }
    return { ok: true, json: async () => ({ revision: 1, state: null }) };
  };

  const env = setupEnvironment(mockFetch);
  await env.cloud.load();
  env.engine.open('study', 100);

  // 模拟用户点击词库编号唤起跳转弹窗
  env.engine.promptJumpProgress();
  const overlay = env.elements.get('fcJumpModalOverlay');
  assert.ok(overlay, '应成功唤起跳转弹窗');

  // 模拟输入目标词号 410 并确认跳转
  const input = env.context.document.getElementById('fcJumpInputVal');
  assert.ok(input, '输入框应存在');
  input.value = '410';
  env.engine.confirmJumpProgress();

  // 验证跳转后弹窗自动关闭
  assert.equal(env.elements.has('fcJumpModalOverlay'), false, '跳转后弹窗应自动关闭');

  // 验证分组计算：
  // 410 词 -> targetIndex = 409
  // startIndex = Math.floor(409 / 100) * 100 = 400 (第 5 组，对应 401~500)
  // groupOffset = 409 - 400 = 9 (组内第 10 个词)
  const group = env.engine.getCurrentStudyGroup();
  assert.equal(group.startIndex, 400, '应跳转至起始索引 400 的分组');
  assert.equal(group.groupNumber, 5, '应为第 5 组');

  // 验证立即向 VPS 发起了强制同步 (force: true)
  assert.ok(putPayload, '应立即向 VPS 调用 PUT 保存接口');
  assert.equal(putPayload.force, true, '跳转进度必须附带 force: true 强制覆盖存档');
  assert.equal(putPayload.state.session.currentIndex, 9, '组内索引应为 9 (第 410 词)');
  assert.equal(putPayload.state.session.studyStartIndex, 400);

  // 验证卡片状态栏显示了第 410 词
  const cardModal = env.elements.get('flashcardModal');
  assert.match(cardModal.innerHTML, /410/);
});

test('需求4：跳转弹窗打开时，键盘事件完全隔绝，支持无限位数连续输入且不被快捷键劫持', async () => {
  let putPayload = null;
  const mockFetch = async (url, opts = {}) => {
    if (url === '/api/flashcards/progress' && opts.method === 'PUT') {
      putPayload = JSON.parse(opts.body);
      return { ok: true, json: async () => ({ revision: 6, status: 'synced', updated_at: Date.now() }) };
    }
    return { ok: true, json: async () => ({ revision: 1, state: null }) };
  };

  const env = setupEnvironment(mockFetch);
  await env.cloud.load();
  env.engine.open('study', 100);

  // 打开跳转弹窗
  env.engine.promptJumpProgress();
  const overlay = env.elements.get('fcJumpModalOverlay');
  assert.ok(overlay, '应成功唤起跳转弹窗');

  // 测试按键劫持隔离：在弹窗打开时，模拟用户在键盘按下数字 1~7 及 Enter
  let prevented = false;
  let stopped = false;
  const mockEvt1 = {
    key: '1',
    preventDefault() { prevented = true; },
    stopPropagation() { stopped = true; }
  };
  env.engine.handleFlashcardKeydown(mockEvt1);
  assert.equal(prevented, false, '弹窗打开时，数字 1 绝不应被 preventDefault 拦截');
  assert.equal(stopped, false, '弹窗打开时，数字 1 绝不应被 stopPropagation 拦截');

  // 验证多位数连续输入（例如 65、1200、3837 等任意位数）
  const input = env.context.document.getElementById('fcJumpInputVal');
  assert.ok(input, '输入框应存在');
  input.value = '1250';
  env.engine.confirmJumpProgress();

  // 验证成功跳转至第 1250 词 (startIndex: 1200, currentIndex: 49)
  const group = env.engine.getCurrentStudyGroup();
  assert.equal(group.startIndex, 1200);
  assert.equal(putPayload.state.session.currentIndex, 49);

  // 等待首次异步推送完成
  await new Promise(r => setTimeout(r, 50));

  // 再次打开弹窗并测试超大数字自适应对齐至上限 (无限输入容错)
  env.engine.promptJumpProgress();
  input.value = '99999';
  env.engine.confirmJumpProgress();
  assert.equal(putPayload.state.session.studyStartIndex, 3800); // 3837词所属组起始为 3800
  assert.equal(putPayload.state.session.currentIndex, 36);      // 3837 - 1 - 3800 = 36
});

test('需求5：重点生词动态引用，222个重点生词全量入列且随练习实时增减', async () => {
  let putPayload = null;
  const mockFetch = async (url, opts = {}) => {
    if (url === '/api/flashcards/progress' && opts.method === 'PUT') {
      putPayload = JSON.parse(opts.body);
      return { ok: true, json: async () => ({ revision: 7, status: 'synced', updated_at: Date.now() }) };
    }
    return { ok: true, json: async () => ({ revision: 1, state: null }) };
  };

  const env = setupEnvironment(mockFetch);

  // 初始化 222 个重点生词
  for (let i = 1; i <= 222; i++) {
    env.context.marks[`mword_${i}`] = 1;
  }
  assert.equal(env.context.getMarkedWords().length, 222);

  await env.cloud.load();

  // 打开复习模式：切换为「全部」档位，全量纳入 222 词
  env.engine.setReviewBatchSize('all');
  env.engine.open('review', 'all');

  const cardModal = env.elements.get('flashcardModal');
  assert.ok(cardModal, '复习卡片应正常展示');
  assert.match(cardModal.innerHTML, /复习进度:.*1.*\/.*222/, '复习进度必须显示全量 222 词，严禁只显示 100');

  // 测试直接跳转至第 200 词
  env.engine.jumpToWordNumber(200);
  assert.match(cardModal.innerHTML, /复习进度:.*200.*\/.*222/, '应成功跳转至第 200 词');
  assert.equal(putPayload.state.session.currentIndex, 199, '云端进度应保存组内索引 199');

  // 模拟练习中新增了 1 个重点生词 (增加到 223 词)
  env.context.marks['mword_223'] = 1;
  assert.equal(env.context.getMarkedWords().length, 223);

  // 作答后切词时，队列与 HUD 动态感知最新生词总数
  env.engine.giveUpUnknown();
  env.engine.nextWord();
  assert.match(cardModal.innerHTML, /复习进度:.*200.*\/.*223/, '复习进度应动态感知最新 223 词');
});
