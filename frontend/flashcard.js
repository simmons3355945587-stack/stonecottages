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
  const DEFAULT_KEY = 'apikey_21311d54ff438cd543d487365c0646a5ba09_4d0e27faf92f086612884a847f6b7536f90f5981a46bb19b0a65a6cf257375f5';

  const POS_OPTIONS = [
    { id: 'n', label: 'n. 名词' },
    { id: 'v', label: 'v. 动词' },
    { id: 'adj', label: 'adj. 形容词' },
    { id: 'adv', label: 'adv. 副词' },
    { id: 'prep', label: 'prep. 介词' },
    { id: 'other', label: '其他/短语' }
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
        currentIndex: state.currentIndex
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

  function getStandardDefinition(word) {
    if (!word) return '';
    const clean = word.toLowerCase().trim();
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
  function verifyLocally(word, input, selectedPos, standardDef) {
    if (!input || !standardDef) return null;
    const cleanInput = input.trim().toLowerCase();
    const cleanDef = standardDef.toLowerCase();

    // 检查词性匹配
    const stdPosList = parseStandardPos(cleanDef);
    let posMatch = true;
    if (stdPosList.length > 0 && selectedPos.length > 0) {
      // 用户选中的词性至少有一个在标准词性中
      posMatch = selectedPos.some(p => stdPosList.includes(p) || (p === 'v' && (stdPosList.includes('vt') || stdPosList.includes('vi'))));
    }

    if (!posMatch) {
      // 词性明确选错，不走本地秒判，交由 Jev 做综合语义判断
      return null;
    }

    // 提取释义片段
    const defWithoutPos = cleanDef.replace(/[a-z]+\./g, '').trim();
    const segments = defWithoutPos.split(/[；;,，/、\s\(\)（）]+/).map(s => s.trim()).filter(s => s.length > 0);

    for (const seg of segments) {
      if (cleanInput === seg || (cleanInput.length >= 2 && seg.includes(cleanInput)) || (seg.length >= 2 && cleanInput.includes(seg))) {
      
  function openWordEtymology(word) {
    if (typeof openWordDetails === 'function') {
      openWordDetails(word);
      if (typeof switchDrawerDictTab === 'function') {
        setTimeout(() => switchDrawerDictTab('etym'), 50);
      }
    }
  }

  return {
    openWordEtymology,
          correct: true,
          confidence: 1.0,
          source: 'local_fast',
          reason: `精准命中词条释义: “${seg}”${selectedPos.length > 0 ? ` (词性匹配: ${selectedPos.join('/')})` : ''}`
        };
      }
    }

    return null;
  }

  /**
   * 轨道 2：TypeSafe Jev 模型极速判卷 (100-200ms)
   */
  async function verifyWithJev(word, input, selectedPos, standardDef) {
    const key = (typeof appSettings !== 'undefined' && appSettings.typesafeKey) ? appSettings.typesafeKey : DEFAULT_KEY;
    const url = 'https://api.typesafe.ai/v1/systemone';

    const posStr = selectedPos.length > 0 ? selectedPos.join(', ') : '未指定';
    const payload = {
      state: {
        word: word,
        standard_definition: standardDef || "无本地释义，请按目标英语单词本身通用释义判定",
        user_input: input,
        user_selected_pos: posStr
      },
      model: 'jev-latest',
      questions: {
        is_correct: {
          type: 'noul',
          instructions: '结合用户勾选的词性（若有）与填写的中文/英文解释，判断用户的理解是否准确表达或切中了目标单词的核心含义与考点。',
          criteria: {
            true: '释义正确切中该词核心含义，且勾选的词性（若选）未出现严重冲突',
            false: '解释严重错误、词性完全张冠李戴、毫无关联或乱填'
          }
        }
      }
    };

    const startTime = performance.now();
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!resp.ok) {
      throw new Error(`Jev 接口响应异常: ${resp.status}`);
    }

    const data = await resp.json();
    const elapsed = Math.round(performance.now() - startTime);

    const noulVal = data.answers?.is_correct?.noul ?? 0;
    const isCorrect = noulVal >= 0.60;

    return {
      correct: isCorrect,
      confidence: noulVal,
      elapsedMs: elapsed,
      source: 'jev_model',
      reason: isCorrect 
        ? `Jev 模型判卷通过 (置信度: ${(noulVal * 100).toFixed(0)}%, 耗时: ${elapsed}ms)`
        : `Jev 模型判定未切中核心考点 (置信度: ${(noulVal * 100).toFixed(0)}%, 耗时: ${elapsed}ms)`
    };
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
    if (state.isAnswered) return;
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
            <button type="button" class="btn btn-secondary btn-xs" style="padding:2px 8px; font-size:11.5px; border-radius:12px; height:24px; display:inline-flex; align-items:center; gap:3px;" onclick="FlashcardEngine.openWordEtymology('${escapeHtml(word)}')" title="点击查看权威词源演变与历史故事">💡 词源</button>
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
            </div>
          </div>

          <!-- 极速判定中状态条 -->
          <div class="flashcard-evaluating-row" id="fcEvaluating" style="display: none;">
            <div class="flashcard-spinner"></div>
            <span>⚡ TypeSafe Jev 正在极速判题中 (150ms)...</span>
          </div>

          <!-- 判定结果展示区 -->
          <div class="flashcard-result-panel" id="fcResultPanel" style="display: none;">
            <!-- 动态注入结果 -->
          </div>
        </div>

        <!-- 底部快捷键提示 -->
        <div class="flashcard-footer-tip">
          <span>快捷键: <strong>Enter</strong> 提交/下一词 · <strong>Space</strong> 发音 · <strong>Esc</strong> 退出 (断点自动保存)</span>
        </div>
      </div>
    `;

    setTimeout(() => {
      const input = document.getElementById('fcInput');
      if (input) {
        input.focus();
        setupInputListener(input);
      }
      speakCurrent();
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
          submitAnswer();
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

  async function submitAnswer() {
    if (state.isEvaluating || state.isAnswered || !state.currentWord) return;
    const inputEl = document.getElementById('fcInput');
    if (!inputEl) return;
    const val = inputEl.value.trim();
    if (!val) {
      if (typeof showToast === 'function') showToast('⚠️ 请输入你理解的中英文释义');
      inputEl.focus();
      return;
    }

    state.isEvaluating = true;
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
      console.warn('Jev 判定异常，降级为模糊匹配:', err);
      const fallbackPass = val.length >= 2 && standardDef.includes(val);
      result = {
        correct: fallbackPass,
        confidence: 0.5,
        source: 'fallback',
        reason: fallbackPass ? '本地模糊匹配通过' : '未击中考纲释义'
      };
    } finally {
      state.isEvaluating = false;
      if (evalRow) evalRow.style.display = 'none';
      if (submitBtn) submitBtn.disabled = false;
    }

    applyEvaluationResult(result, val, selectedPos, standardDef);
  }

  function applyEvaluationResult(result, userInput, selectedPos, standardDef) {
    state.isAnswered = true;
    state.lastResult = result;
    const wordKey = state.currentWord.toLowerCase().trim();

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

    // 渲染卡片反馈界面
    const cardBox = document.getElementById('flashcardBox');
    const resultPanel = document.getElementById('fcResultPanel');
    const inputSection = document.getElementById('fcInputSection');

    if (cardBox) {
      cardBox.classList.remove('is-correct', 'is-wrong');
      cardBox.classList.add(result.correct ? 'is-correct' : 'is-wrong');
    }

    const posDisplay = selectedPos.length > 0 ? selectedPos.map(p => `[${p}.]`).join(' ') : '未指定';
    const stdPosDisplay = parseStandardPos(standardDef).map(p => `[${p}.]`).join(' ') || '未标注';

    if (resultPanel) {
      resultPanel.style.display = 'block';
      resultPanel.innerHTML = `
        <div class="flashcard-badge-row">
          <span class="flashcard-verdict-badge ${result.correct ? 'badge-correct' : 'badge-wrong'}">
            ${result.correct ? '✅ 判题通过！' : '❌ 释义有偏差'}
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
          <div class="flashcard-compare-item" style="margin-top: 4px;">
            <span class="compare-label">标准权威释义:</span>
            <span class="compare-content std-def-text">${escapeHtml(standardDef || '暂无详细中文释义')}</span>
          </div>
        </div>

        <div class="flashcard-action-bar">
          <button class="btn btn-primary flashcard-next-btn" onclick="FlashcardEngine.nextWord()">
            ${state.currentIndex + 1 < state.queue.length ? '下一个 (Enter)' : '查看本次研习报告 (Enter)'} ➔
          </button>
          <button class="btn btn-secondary" style="display:inline-flex; align-items:center; gap:4px;" onclick="FlashcardEngine.openWordEtymology('${escapeHtml(state.currentWord)}')">
            💡 查看词源故事
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

  return {
    open,
    close,
    submitAnswer,
    nextWord,
    retryCurrent,
    toggleMode,
    togglePosOption,
    speakCurrent
  };
})();
