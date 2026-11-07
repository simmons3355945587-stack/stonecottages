/**
 * 🎴 Flashcard Engine (小时屋单词卡片极速研习/复习系统 v2.0)
 * 核心升级：
 * 1. 词性多选交互 (Part-of-Speech Selection)
 * 2. 已掌握词库过滤 (答对的词永久入库，新词研习永不重复)
 * 3. 当日断点续学 (中途退出随时继续，不满100词进度不丢)
 * 4. Powered by TypeSafe Jev System One Model
 */
window.FlashcardEngine = (() => {
  const STORAGE_KEY_STATS = 'stone_flashcard_daily_stats_v1';
  const STORAGE_KEY_LEARNED = 'stone_flashcard_learned_words_v1';
  const STORAGE_KEY_SESSION = 'stone_flashcard_session_v1';

  const POS_OPTIONS = [
    { id: 'n', label: 'n.' },
    { id: 'v', label: 'v.' },
    { id: 'adj', label: 'adj.' },
    { id: 'adv', label: 'adv.' },
    { id: 'prep', label: 'prep.' },
    { id: 'conj', label: 'conj.' },
    { id: 'other', label: '其他' }
  ];

  let state = {
    isOpen: false,
    mode: 'study', // 'study' | 'review'
    targetCount: 100,
    queue: [],
    currentIndex: 0,
    currentWord: null,
    selectedPos: [], // 用户选中的词性数组
    isEvaluating: false,
    isAnswered: false,
    lastResult: null,
    learnedWords: new Set(),
    todayStats: {
      date: getTodayStr(),
      completed: 0,
      correct: 0,
      wrong: 0,
      target: 100
    }
  };

  function getTodayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  function loadLearnedWords() {
    try {
      const raw = (typeof StoneStorage !== 'undefined' ? StoneStorage.getItem(STORAGE_KEY_LEARNED) : localStorage.getItem(STORAGE_KEY_LEARNED));
      if (raw) {
        state.learnedWords = new Set(JSON.parse(raw));
      }
    } catch (e) {}
  }

  function saveLearnedWords() {
    try {
      const arr = Array.from(state.learnedWords);
      const str = JSON.stringify(arr);
      if (typeof StoneStorage !== 'undefined') StoneStorage.setItem(STORAGE_KEY_LEARNED, str);
      localStorage.setItem(STORAGE_KEY_LEARNED, str);
    } catch (e) {}
  }

  function loadDailyStats() {
    try {
      const raw = (typeof StoneStorage !== 'undefined' ? StoneStorage.getItem(STORAGE_KEY_STATS) : localStorage.getItem(STORAGE_KEY_STATS));
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.date === getTodayStr()) {
          state.todayStats = parsed;
          return;
        }
      }
    } catch (e) {}
    state.todayStats = {
      date: getTodayStr(),
      completed: 0,
      correct: 0,
      wrong: 0,
      target: state.targetCount
    };
    saveDailyStats();
  }

  function saveDailyStats() {
    try {
      const str = JSON.stringify(state.todayStats);
      if (typeof StoneStorage !== 'undefined') StoneStorage.setItem(STORAGE_KEY_STATS, str);
      localStorage.setItem(STORAGE_KEY_STATS, str);
    } catch (e) {}
  }

  function saveSession() {
    try {
      const sessionData = {
        date: getTodayStr(),
        mode: state.mode,
        targetCount: state.targetCount,
        queue: state.queue,
        currentIndex: state.currentIndex,
        isOpen: state.isOpen
      };
      const str = JSON.stringify(sessionData);
      if (typeof StoneStorage !== 'undefined') StoneStorage.setItem(STORAGE_KEY_SESSION, str);
      localStorage.setItem(STORAGE_KEY_SESSION, str);
    } catch (e) {}
  }

  function clearSession() {
    try {
      if (typeof StoneStorage !== 'undefined') StoneStorage.removeItem(STORAGE_KEY_SESSION);
      localStorage.removeItem(STORAGE_KEY_SESSION);
    } catch (e) {}
  }

  const enDefCache = {};

  function getStandardDefinition(word) {
    if (!word) return '';
    const clean = word.toLowerCase().trim();
    // 1. 优先从全书课表元数据提取（带标准词性与权威考纲定义）
    if (typeof WORD_UNIT_META !== 'undefined' && WORD_UNIT_META[clean] && WORD_UNIT_META[clean].definition) {
      return WORD_UNIT_META[clean].definition;
    }
    // 2. 核心大词典查询
    if (typeof chineseDict !== 'undefined' && chineseDict[clean]) {
      return chineseDict[clean];
    }
    if (typeof fullChineseDict !== 'undefined' && fullChineseDict[clean]) {
      return fullChineseDict[clean];
    }
    if (typeof extraDefinitions !== 'undefined' && extraDefinitions[clean]) {
      const ext = extraDefinitions[clean];
      return typeof ext === 'string' ? ext : (ext.zh || ext.definition || '');
    }
    return '';
  }

  /**
   * 智能提取标准词性列表 (多源聚合：中文考纲 + WORD_UNIT_META + 权威英英词典)
   */
  function getStandardPosList(word, standardDef) {
    const clean = (word || '').toLowerCase().trim();
    let posSet = new Set(parseStandardPos(standardDef));

    // 从 WORD_UNIT_META 补充
    if (typeof WORD_UNIT_META !== 'undefined' && WORD_UNIT_META[clean]?.definition) {
      parseStandardPos(WORD_UNIT_META[clean].definition).forEach(p => posSet.add(p));
    }

    // 从内置英英词典 meanings 补充真实词性
    if (typeof builtinEnglishDict !== 'undefined' && builtinEnglishDict[clean]?.meanings) {
      builtinEnglishDict[clean].meanings.forEach(m => {
        const rawPos = (m.pos || m.partOfSpeech || '').toLowerCase();
        if (rawPos === 'noun') posSet.add('n');
        else if (rawPos === 'verb') posSet.add('v');
        else if (rawPos === 'adjective') posSet.add('adj');
        else if (rawPos === 'adverb') posSet.add('adv');
        else if (rawPos === 'preposition') posSet.add('prep');
        else if (rawPos === 'conjunction') posSet.add('conj');
        else if (rawPos.length > 0 && rawPos.length <= 4) posSet.add(rawPos.replace('.', ''));
      });
    }

    return Array.from(posSet);
  }

  /**
   * 获取纯英权威释义 (支持内置词典与异步在线词典)
   */
  function getEnglishDefinition(word) {
    if (!word) return '';
    const clean = word.toLowerCase().trim();
    if (enDefCache[clean]) return enDefCache[clean];

    if (typeof builtinEnglishDict !== 'undefined' && builtinEnglishDict && builtinEnglishDict[clean]) {
      const entry = builtinEnglishDict[clean];
      let defText = '';
      if (entry.meanings && entry.meanings.length > 0) {
        defText = entry.meanings.map(m => {
          const pos = m.pos || m.partOfSpeech || '';
          const firstDef = m.defs?.[0]?.def || m.definitions?.[0]?.definition || '';
          return `${pos ? `(${pos}) ` : ''}${firstDef}`;
        }).filter(Boolean).join('; ');
      }
      if (defText) {
        enDefCache[clean] = defText;
        return defText;
      }
    }
    return '';
  }

  /**
   * 异步预拉取在线权威英英释义并缓存
   */
  async function fetchEnglishDefOnline(word) {
    if (!word) return '';
    const clean = word.toLowerCase().trim();
    if (enDefCache[clean]) return enDefCache[clean];
    try {
      const resp = await fetch(`/api/dict/${encodeURIComponent(clean)}`);
      if (resp.ok) {
        const d = await resp.json();
        const meanings = d.meanings || [];
        if (meanings.length > 0) {
          const defText = meanings.map(m => {
            const pos = m.partOfSpeech || m.pos || '';
            const firstDef = m.definitions?.[0]?.definition || m.defs?.[0]?.def || '';
            return `${pos ? `(${pos}) ` : ''}${firstDef}`;
          }).filter(Boolean).join('; ');
          if (defText) {
            enDefCache[clean] = defText;
            const el = document.getElementById('fcStdDefEnText');
            if (el && state.currentWord?.toLowerCase().trim() === clean) el.textContent = defText;
            return defText;
          }
        }
      }
    } catch(e) {}
    return '';
  }

  /**
   * 从词条释义提取词性，如 "v. 放弃; n. 放任" -> ["v", "n"]
   */
  function parseStandardPos(def) {
    if (!def) return [];
    const matches = def.match(/\b(n|v|adj|adv|prep|conj|pron|art|num|int|vt|vi)\./gi);
    if (!matches) return [];
    return Array.from(new Set(matches.map(m => m.replace('.', '').toLowerCase())));
  }

  /**
   * 轨道 1：本地毫秒级词条直接判定 (0ms)
   */
const JUDGMENT_THRESHOLD = 0.90;
let evaluationVersion = 0;
function uncertain(reason) {
  return {correct:null, verdict:"UNCERTAIN", confidence:null, source:"judgment_gate", reason};
}
function judgmentGate(result, standardDef) {
  if (result?.source === "unknown_giveup" && result.isUnknown === true) return result;
  if (!standardDef?.trim()) return uncertain("参考释义缺失，暂不判定；不计对错、不改变掌握状态或错词标记。");
  if (result?.verdict === "UNCERTAIN") return uncertain(result.reason || "本次暂不判定。");
  if (!result || typeof result.confidence !== "number" || !Number.isFinite(result.confidence) || result.confidence < JUDGMENT_THRESHOLD || result.confidence > 1 || typeof result.correct !== "boolean") {
    return uncertain("判定把握不足或服务暂不可用，暂不判定；不计对错、不改变掌握状态或错词标记。");
  }
  return {...result, verdict:result.correct ? "ACCEPT" : "REJECT"};
}
function verifyLocally(word,input,selectedPos,standardDef) {
  if (!input || !standardDef) return null;
  const normalize = value => value.normalize("NFKC").trim().toLowerCase().replace(/\s+/g," ");
  const pos = getStandardPosList(word,standardDef).map(p => p === "vt" || p === "vi" ? "v" : p);
  if (pos.length && selectedPos.some(p => !pos.includes(p))) return null;
  const segments = standardDef.replace(/\b(n|v|adj|adv|prep|conj|pron|art|num|int|vt|vi)\./gi, "").split(/[；;、]/).map(normalize);
  if (segments.includes(normalize(input))) return {correct:true,confidence:1,source:"local_fast",reason:"准确匹配参考释义"};
  return null;
}
async function verifyWithJev(word,input,selectedPos,standardDef) {
  if (!standardDef?.trim()) return uncertain("参考释义缺失，暂不判定。");
  const referencePos = getStandardPosList(word,standardDef);
  const startTime = performance.now();
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 12000);
  try {
    const resp = await fetch("/api/jev/verify", {
      method:"POST", headers:{"Content-Type":"application/json"}, signal:controller.signal,
      body:JSON.stringify({word,user_input:input,standard_def:standardDef,user_selected_pos:referencePos.length ? selectedPos.join(", ") || "未指定" : "未指定", standard_pos:referencePos})
    });
    if (!resp.ok) throw new Error("判定服务暂不可用");
    const data = await resp.json();
    const elapsed = Math.round(performance.now() - startTime);
    
    if (data?.contract_version !== 2) return uncertain("判定服务版本待更新，本次不计对错。");
    const probability = data.probability_correct;
    if (typeof probability !== "number" || !Number.isFinite(probability) || probability < 0 || probability > 1) return uncertain("判定数据无效，本次不计对错。");
    const expected = probability >= 0.9 ? "ACCEPT" : probability <= 0.1 ? "REJECT" : "UNCERTAIN";
    if (data.verdict !== expected || (expected !== "UNCERTAIN" && data.correct !== (expected === "ACCEPT"))) return uncertain("判定数据不一致，本次不计对错。");
    const confidence = Math.max(probability, 1 - probability);
    return judgmentGate({correct:data.correct,verdict:data.verdict,confidence,probabilityCorrect:probability,elapsedMs:elapsed,source:"jev_model",reason:expected === "UNCERTAIN" ? "模型尚不能确定；本次不计对错、不加错词。" : "JEV 判定把握：" + (confidence * 100).toFixed(1) + "%"}, standardDef);
  } finally { clearTimeout(timer); }
}


  function initQueue() {
    loadLearnedWords();

    // 1. 优先尝试从本地持久化会话中恢复（支持断点续背）
    try {
      const rawSession = (typeof StoneStorage !== 'undefined' ? StoneStorage.getItem(STORAGE_KEY_SESSION) : localStorage.getItem(STORAGE_KEY_SESSION));
      if (rawSession) {
        const sess = JSON.parse(rawSession);
        if (sess.date === getTodayStr() && sess.mode === state.mode && Array.isArray(sess.queue) && sess.queue.length > 0) {
          if (sess.currentIndex < sess.queue.length) {
            state.queue = sess.queue;
            state.currentIndex = sess.currentIndex;
            state.currentWord = state.queue[state.currentIndex] || null;
            state.isAnswered = false;
            state.lastResult = null;
            state.selectedPos = [];
            return;
          }
        }
      }
    } catch (e) {}

    // 2. 重新抽词
    let list = [];
    if (state.mode === 'review') {
      // 复习模式：优先从用户的重点生词本 (Mark词) 抽取
      if (typeof getMarkedWords === 'function') {
        list = [...getMarkedWords()];
      }
      // 不足则补充
      if (list.length < state.targetCount && typeof getActiveWordList === 'function') {
        const full = getActiveWordList();
        for (const w of full) {
          if (!list.includes(w)) list.push(w);
          if (list.length >= state.targetCount) break;
        }
      }
    } else {
      // 新词研习模式：自动过滤所有已经掌握/学过的词（已掌握永不重复出现）
      if (typeof getActiveWordList === 'function') {
        const full = getActiveWordList();
        list = full.filter(w => !state.learnedWords.has(w.toLowerCase().trim()));
      }
    }

    if (list.length === 0 && typeof words !== 'undefined') {
      list = words.filter(w => !state.learnedWords.has(w.toLowerCase().trim()));
      if (list.length === 0) list = [...words]; // 若全学完了则从头循环
    }

    state.queue = list.slice(0, state.targetCount);
    state.currentIndex = 0;
    state.currentWord = state.queue[0] || null;
    state.isAnswered = false;
    state.lastResult = null;
    state.selectedPos = [];
    saveSession();
  }

  function open(mode = 'study', target = 100) {
    evaluationVersion++; state.isEvaluating = false;
    state.isOpen = true;
    state.mode = mode;
    state.targetCount = target;
    loadDailyStats();
    initQueue();

    const modal = document.getElementById('flashcardModal');
    if (modal) {
      modal.style.display = 'flex';
      requestAnimationFrame(() => modal.classList.add('open'));
      renderCard();
    }
  }

  function close() {
    evaluationVersion++; state.isEvaluating = false;
    state.isOpen = false;
    saveSession();
    const modal = document.getElementById('flashcardModal');
    if (modal) {
      modal.classList.remove('open');
      setTimeout(() => { modal.style.display = 'none'; }, 200);
    }
    if (typeof updateBadges === 'function') updateBadges();
  }

  function togglePosOption(posId) {
    if (state.isAnswered || state.isEvaluating) return;
    const idx = state.selectedPos.indexOf(posId);
    if (idx === -1) {
      state.selectedPos.push(posId);
    } else {
      state.selectedPos.splice(idx, 1);
    }
    // 更新 UI 按钮激活态
    POS_OPTIONS.forEach(opt => {
      const btn = document.getElementById(`fcPosBtn_${opt.id}`);
      if (btn) {
        btn.classList.toggle('active', state.selectedPos.includes(opt.id));
      }
    });
  }

  function renderCard() {
    evaluationVersion++; state.isEvaluating = false;
    if (!state.isOpen) return;
    const word = state.queue[state.currentIndex];
    state.currentWord = word;
    state.isAnswered = false;
    state.lastResult = null;
    state.selectedPos = [];

    const modal = document.getElementById('flashcardModal');
    if (!modal) return;

    if (!word || state.currentIndex >= state.queue.length) {
      renderFinishedState();
      return;
    }

    const standardDef = getStandardDefinition(word);
    const markCount = typeof getMarkCount === 'function' ? getMarkCount(word) : 0;
    const progressPercent = Math.min(100, Math.round((state.todayStats.completed / state.todayStats.target) * 100));

    // 渲染词性多选胶囊
    const posButtonsHtml = POS_OPTIONS.map(opt => `
      <button type="button" class="flashcard-pos-pill" id="fcPosBtn_${opt.id}" onclick="FlashcardEngine.togglePosOption('${opt.id}')">
        ${opt.label}
      </button>
    `).join('');

    modal.innerHTML = `
      <div class="flashcard-container">
        <!-- 顶部 HUD 状态栏 -->
        <div class="flashcard-hud">
          <div class="flashcard-hud-left">
            <button class="btn btn-secondary btn-xs" onclick="FlashcardEngine.close()" title="退出研习 (Esc)">✕ 退出</button>
            <div class="flashcard-mode-pill ${state.mode === 'study' ? 'study-pill' : 'review-pill'}" onclick="FlashcardEngine.toggleMode()">
              <span>${state.mode === 'study' ? '📖 新词研习' : '🔄 重点复习'}</span>
              <span style="font-size:10px;opacity:0.75;">(切模式)</span>
            </div>
            <div class="flashcard-mode-pill" onclick="FlashcardEngine.toggleLanguageMode()" title="切换释义语言显示偏好 (中/英优先)">
              <span>${(typeof appSettings !== 'undefined' && appSettings.dictLanguageMode === 'en') ? '🇬🇧 纯英优先' : '🇨🇳 中文优先'}</span>
            </div>
          </div>
          <div class="flashcard-hud-right">
            <span class="flashcard-stat-chip">今日打卡: <strong>${state.todayStats.completed}</strong> / ${state.todayStats.target} 词</span>
            <span class="flashcard-stat-chip" title="支持断点续背，退出后进度不丢失">当前组: <strong>${state.currentIndex + 1}</strong> / ${state.queue.length}</span>
          </div>
        </div>

        <!-- 进度条 -->
        <div class="flashcard-progress-bar">
          <div class="flashcard-progress-fill" style="width: ${progressPercent}%;"></div>
        </div>

        <!-- 折纸主卡片 -->
        <div class="flashcard-card-box" id="flashcardBox">
          <!-- 卡片正面头部 -->
          <div class="flashcard-word-row">
            <h1 class="flashcard-word" id="fcWordTitle" onclick="FlashcardEngine.speakCurrent()">${escapeHtml(word)}</h1>
            <button class="flashcard-speaker-btn" onclick="FlashcardEngine.speakCurrent()" title="发音 (Space)">🔊</button>
            ${markCount > 0 ? `<span class="flashcard-mark-tag">★ 重点错词 ×${markCount}</span>` : ''}
            ${state.learnedWords.has(word.toLowerCase().trim()) ? `<span class="flashcard-learned-tag">✔ 曾掌握</span>` : ''}
          </div>

          <!-- 1. 词性勾选区 -->
          <div class="flashcard-pos-section">
            <div class="flashcard-section-label">🎯 步骤 1：勾选词性 (多选，可选多个):</div>
            <div class="flashcard-pos-group">
              ${posButtonsHtml}
            </div>
          </div>

          <!-- 2. 中英文释义输入区 -->
          <div class="flashcard-def-section" id="fcInputSection">
            <div class="flashcard-section-label">✍️ 步骤 2：填写中文或英文释义 (回车提交):</div>
            <div class="flashcard-input-wrap" id="fcInputWrap">
              <input type="text" id="fcInput" class="flashcard-input" placeholder="输入中文或英文释义 (例如: 放弃 / to give up)..." autocomplete="off" />
              <button class="btn btn-primary flashcard-submit-btn" id="fcSubmitBtn" onclick="FlashcardEngine.submitAnswer()">判卷 (Enter)</button>
              <button type="button" class="btn btn-secondary flashcard-unknown-btn" id="fcUnknownBtn" onclick="FlashcardEngine.giveUpUnknown()" title="想不起来/我不清楚 (快捷键: 空回车 或 ?)">🤔 我不清楚</button>
            </div>
          </div>

          <!-- 极速判定中状态条 -->
          <div class="flashcard-evaluating-row" id="fcEvaluating" style="display: none;">
            <div class="flashcard-spinner"></div>
            <span>⚡ 正在核对释义，请稍候…...</span>
          </div>

          <!-- 判定结果展示区 -->
          <div class="flashcard-result-panel" id="fcResultPanel" style="display: none;">
            <!-- 动态注入结果 -->
          </div>
        </div>

        <!-- 底部快捷键提示 -->
        <div class="flashcard-footer-tip">
          <span>快捷键: <strong>Enter</strong> 提交 (空内容按回车直接看答案) · <strong>Space</strong> 发音 · <strong>Esc</strong> 退出 (断点自动保存)</span>
        </div>
      </div>
    `;

    setTimeout(() => {
      const input = document.getElementById('fcInput');
      const isMobile = window.innerWidth <= 768 || ('ontouchstart' in window) || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      if (input) {
        if (!isMobile) {
          input.focus();
        }
        setupInputListener(input);
      }
      speakCurrent();
      fetchEnglishDefOnline(word);
    }, 50);
  }

  function setupInputListener(input) {
    let isComposing = false;
    input.addEventListener('compositionstart', () => { isComposing = true; });
    input.addEventListener('compositionend', () => { isComposing = false; });
    input.addEventListener('keydown', (e) => {
      if (isComposing) return;
      if (e.key === 'Enter') {
        e.preventDefault();
        if (state.isAnswered) {
          nextWord();
        } else {
          const val = input.value.trim();
          if (!val || val === '?' || val === '？') {
            giveUpUnknown();
          } else {
            submitAnswer();
          }
        }
      }
    });
  }

  function speakCurrent() {
    if (!state.currentWord) return;
    if (typeof speakWord === 'function') {
      speakWord(state.currentWord);
    }
  }

  /**
   * 用户主动点击“我不清楚/不会”或者直接空敲回车
   */
  function giveUpUnknown() {
    if (state.isEvaluating || state.isAnswered || !state.currentWord) return;

    const word = state.currentWord;
    const standardDef = getStandardDefinition(word);
    const selectedPos = [...state.selectedPos];

    const result = {
      correct: false,
      confidence: 0,
      source: 'unknown_giveup',
      reason: '主动标记为“不清楚 / 未掌握”，已自动记录入重点错词池',
      isUnknown: true
    };

    applyEvaluationResult(result, '(不清楚 / 快捷跳过)', selectedPos, standardDef);
    // 自动重播发音加深记忆
    speakCurrent();
  }

  async function submitAnswer() {
    if (state.isEvaluating || state.isAnswered || !state.currentWord) return;
    const inputEl = document.getElementById('fcInput');
    if (!inputEl) return;
    const val = inputEl.value.trim();
    if (!val) {
      giveUpUnknown();
      return;
    }

    state.isEvaluating = true;
    const requestVersion = ++evaluationVersion;
    const submitBtn = document.getElementById('fcSubmitBtn');
    const evalRow = document.getElementById('fcEvaluating');
    if (submitBtn) submitBtn.disabled = true;
    if (evalRow) evalRow.style.display = 'flex';

    const word = state.currentWord;
    const standardDef = getStandardDefinition(word);
    const selectedPos = [...state.selectedPos];

    let result = null;

    try {
      // 1. 本地极速判定通道 (0ms)
      const localRes = verifyLocally(word, val, selectedPos, standardDef);
      if (localRes) {
        result = localRes;
      } else {
        // 2. Jev 模型智能语义判卷 (~150ms)
        result = await verifyWithJev(word, val, selectedPos, standardDef);
      }
    } catch (err) {
      result = uncertain("智能判定服务暂不可用，本次不计对错。");
    } finally {
      if (requestVersion === evaluationVersion) {
        state.isEvaluating = false;
        if (evalRow) evalRow.style.display = 'none';
        if (submitBtn) submitBtn.disabled = false;
      }
    }
    if (requestVersion !== evaluationVersion || !state.isOpen) return;
    applyEvaluationResult(result, val, selectedPos, standardDef);
  }

  function applyEvaluationResult(result, userInput, selectedPos, standardDef, renderOnly = false) {
    if (state.isAnswered && !renderOnly) return;
    result = judgmentGate(result, standardDef);
    const isUncertain = result.verdict === 'UNCERTAIN';
    state.isAnswered = true;
    state.lastResult = result;
    const wordKey = state.currentWord.toLowerCase().trim();

    if (!renderOnly && !isUncertain) {
    state.todayStats.completed += 1;
    if (result.correct) {
      state.todayStats.correct += 1;
      // 答对永久进入已掌握集合，以后抽新词不再重复出现！
      state.learnedWords.add(wordKey);
      saveLearnedWords();

      if (typeof soundSuccess === 'function') soundSuccess();
      // 若在复习模式且答对，对重点生词减一
      if (state.mode === 'review' && typeof reduceMark === 'function') {
        reduceMark(state.currentWord);
      }
    } else {
      state.todayStats.wrong += 1;
      if (typeof soundFailure === 'function') soundFailure();
      // 答错自动沉淀到重点生词本，以便下次在复习中反复巩固
      if (typeof addMark === 'function') {
        addMark(state.currentWord);
      }
    }
    saveDailyStats();
    saveSession();

    }

    // 渲染卡片反馈界面
    const cardBox = document.getElementById('flashcardBox');
    const resultPanel = document.getElementById('fcResultPanel');
    const inputSection = document.getElementById('fcInputSection');

    if (cardBox) {
      cardBox.classList.remove('is-correct', 'is-wrong');
      if (!isUncertain) cardBox.classList.add(result.correct ? 'is-correct' : 'is-wrong');
    }

    const posDisplay = selectedPos.length > 0 ? selectedPos.map(p => `[${p}.]`).join(' ') : '未指定';
    const stdPosList = getStandardPosList(state.currentWord, standardDef);
    const stdPosDisplay = stdPosList.length > 0 
      ? stdPosList.map(p => `[${p}.]`).join(' ') 
      : '暂无标注（词性不参与判定）';
    const isEnMode = (typeof appSettings !== 'undefined' && appSettings.dictLanguageMode === 'en');
    const enDef = getEnglishDefinition(state.currentWord);

    // 触发异步补齐英文释义
    if (!enDef) {
      fetchEnglishDefOnline(state.currentWord);
    }

    if (resultPanel) {
      resultPanel.style.display = 'block';
      resultPanel.innerHTML = `
        <div class="flashcard-badge-row">
          <span class="flashcard-verdict-badge ${isUncertain ? 'badge-unknown' : result.correct ? 'badge-correct' : (result.isUnknown ? 'badge-unknown' : 'badge-wrong')}">
            ${isUncertain ? '⚪ 暂不判定（不计对错）' : result.correct ? '✅ 判题通过！' : (result.isUnknown ? '🤔 已记录为待复习词' : '❌ 释义有偏差')}
          </span>
          <span class="flashcard-confidence-info">${escapeHtml(result.reason)}</span>
        </div>

        <div class="flashcard-def-comparison">
          <div class="flashcard-compare-row">
            <div class="flashcard-compare-item">
              <span class="compare-label">你勾选的词性:</span>
              <span class="compare-content user-input-text">${escapeHtml(posDisplay)}</span>
            </div>
            <div class="flashcard-compare-item">
              <span class="compare-label">标准考纲词性:</span>
              <span class="compare-content std-def-text">${escapeHtml(stdPosDisplay)}</span>
            </div>
          </div>
          <div class="flashcard-compare-item" style="margin-top: 6px;">
            <span class="compare-label">你的释义:</span>
            <span class="compare-content user-input-text">${escapeHtml(userInput)}</span>
          </div>
          <div class="flashcard-compare-item" style="margin-top: 6px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
              <span class="compare-label">权威释义 (英汉双解对照):</span>
              <div class="flashcard-dict-lang-switch" onclick="FlashcardEngine.toggleLanguageMode()" title="点击切换中英文释义优先模式" style="cursor:pointer; display:flex; gap:4px; font-size:11px;">
                <span style="padding:2px 6px; border-radius:4px; ${!isEnMode ? 'background:var(--brand-accent);color:#fff;font-weight:bold;' : 'opacity:0.6;'}">🇨🇳 中文优先</span>
                <span style="padding:2px 6px; border-radius:4px; ${isEnMode ? 'background:#3b82f6;color:#fff;font-weight:bold;' : 'opacity:0.6;'}">🇬🇧 纯英优先</span>
              </div>
            </div>

            <!-- 根据模式优先排序展示 -->
            ${isEnMode ? `
              <div class="compare-content std-def-text" style="color:#3b82f6; font-size:14px; margin-bottom:4px;">
                <strong style="color:var(--text-secondary); font-size:11px; margin-right:4px;">[英文释义]</strong>
                <span id="fcStdDefEnText">${escapeHtml(enDef || '权威英文释义正在载入...')}</span>
              </div>
              <div class="compare-content std-def-text" style="color:var(--text-secondary); font-size:13px;">
                <strong style="color:var(--text-secondary); font-size:11px; margin-right:4px;">[中文考纲]</strong>
                <span>${escapeHtml(standardDef || '暂无详细中文释义')}</span>
              </div>
            ` : `
              <div class="compare-content std-def-text" style="color:var(--brand-accent); font-size:15px; font-weight:700; margin-bottom:4px;">
                <strong style="color:var(--text-secondary); font-size:11px; margin-right:4px;">[中文考纲]</strong>
                <span>${escapeHtml(standardDef || '暂无详细中文释义')}</span>
              </div>
              <div class="compare-content std-def-text" style="color:#3b82f6; font-size:13px; font-style:italic;">
                <strong style="color:var(--text-secondary); font-size:11px; font-style:normal; margin-right:4px;">[英文双解]</strong>
                <span id="fcStdDefEnText">${escapeHtml(enDef || '权威英文释义正在载入...')}</span>
              </div>
            `}
          </div>
        </div>

        <div class="flashcard-action-bar">
          <button class="btn btn-primary flashcard-next-btn" onclick="FlashcardEngine.nextWord()">
            ${state.currentIndex + 1 < state.queue.length ? '下一个 (Enter)' : '查看本次研习报告 (Enter)'} ➔
          </button>
          ${!result.correct ? `<button class="btn btn-secondary" onclick="FlashcardEngine.retryCurrent()">再试一次</button>` : ''}
        </div>
      `;
    }

    if (inputSection) {
      inputSection.style.display = 'none';
    }
  }

  function retryCurrent() {
    state.isAnswered = false;
    state.lastResult = null;
    const cardBox = document.getElementById('flashcardBox');
    const resultPanel = document.getElementById('fcResultPanel');
    const inputSection = document.getElementById('fcInputSection');
    const inputEl = document.getElementById('fcInput');

    if (cardBox) cardBox.classList.remove('is-correct', 'is-wrong');
    if (resultPanel) resultPanel.style.display = 'none';
    if (inputSection) inputSection.style.display = 'block';
    if (inputEl) {
      inputEl.value = '';
      inputEl.focus();
    }
  }

  function nextWord() {
    if (state.isEvaluating || !state.isAnswered) return;
    state.currentIndex += 1;
    saveSession();
    renderCard();
  }

  function toggleMode() {
    clearSession();
    const nextMode = state.mode === 'study' ? 'review' : 'study';
    open(nextMode, state.targetCount);
  }

  function renderFinishedState() {
    clearSession();
    const modal = document.getElementById('flashcardModal');
    if (!modal) return;

    const accuracy = state.todayStats.completed > 0 
      ? Math.round((state.todayStats.correct / state.todayStats.completed) * 100) 
      : 0;

    modal.innerHTML = `
      <div class="flashcard-container">
        <div class="flashcard-card-box finished-box">
          <div class="finished-trophy">🏆</div>
          <h2 style="font-size:24px; font-weight:800; margin: 12px 0 6px;">本组研习圆满完成！</h2>
          <p style="color:var(--text-secondary); font-size:14px; margin-bottom: 20px;">
            今日累计完成 <strong>${state.todayStats.completed}</strong> 词，已掌握单词已永久存档，后续不会重复出现。
          </p>

          <div class="finished-stats-grid">
            <div class="finished-stat-card">
              <span class="stat-num" style="color:var(--brand-success);">${state.todayStats.correct}</span>
              <span class="stat-lbl">答对词数</span>
            </div>
            <div class="finished-stat-card">
              <span class="stat-num" style="color:var(--brand-danger);">${state.todayStats.wrong}</span>
              <span class="stat-lbl">错词标记</span>
            </div>
            <div class="finished-stat-card">
              <span class="stat-num" style="color:var(--brand-primary);">${accuracy}%</span>
              <span class="stat-lbl">准确率</span>
            </div>
          </div>

          <div style="display:flex; gap:12px; justify-content:center; margin-top:24px; flex-wrap:wrap;">
            <button class="btn btn-primary" onclick="FlashcardEngine.open('${state.mode}', ${state.targetCount})">再来一组 (100词)</button>
            <button class="btn btn-secondary" onclick="FlashcardEngine.close()">返回词库</button>
          </div>
        </div>
      </div>
    `;
    if (typeof soundSuccess === 'function') soundSuccess();
  }

  function toggleLanguageMode() {
    if (typeof appSettings !== 'undefined') {
      const next = (appSettings.dictLanguageMode === 'en') ? 'zh' : 'en';
      appSettings.dictLanguageMode = next;
      if (typeof saveToStorage === 'function' && typeof STORAGE_KEYS !== 'undefined') {
        saveToStorage(STORAGE_KEYS.SETTINGS, appSettings);
      }
      if (typeof showToast === 'function') {
        showToast(next === 'en' ? '🇬🇧 已切换为纯英权威优先' : '🇨🇳 已切换为中文考纲优先');
      }
      // 如果处于已回答状态，即时刷新卡片中的释义对比排列
      if (state.isAnswered && state.lastResult) {
        applyEvaluationResult(state.lastResult, document.getElementById('fcInput')?.value || '(已提交)', [...state.selectedPos], getStandardDefinition(state.currentWord), true);
      } else if (!state.isEvaluating) {
        renderCard();
      }
    }
  }

  return {
    open,
    close,
    submitAnswer,
    giveUpUnknown,
    nextWord,
    retryCurrent,
    toggleMode,
    togglePosOption,
    toggleLanguageMode,
    speakCurrent
  };
})();

// 🔄 页面刷新时自动无缝断点恢复：若用户正在研习中刷新，自动重新激活卡片弹窗并定位到当前题
(function autoResumeFlashcardSession() {
  function tryResume() {
    try {
      const STORAGE_KEY_SESSION = 'stone_flashcard_session_v1';
      const raw = (typeof StoneStorage !== 'undefined' ? StoneStorage.getItem(STORAGE_KEY_SESSION) : localStorage.getItem(STORAGE_KEY_SESSION));
      if (!raw) return;
      const sess = JSON.parse(raw);
      if (sess && sess.isOpen && Array.isArray(sess.queue) && sess.queue.length > 0 && sess.currentIndex < sess.queue.length) {
        if (window.FlashcardEngine) {
          window.FlashcardEngine.open(sess.mode || 'study', sess.targetCount || 100);
        }
      }
    } catch (e) {}
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(tryResume, 120));
  } else {
    setTimeout(tryResume, 120);
  }
})();

