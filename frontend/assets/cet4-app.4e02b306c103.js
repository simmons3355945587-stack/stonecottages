/**
 * CET-4 Listening Master (四级听力多模式复读机) - Origami Web Engine
 * Pure Vanilla JS · Web Audio & HTML5 Canvas · Full Mobile Responsive
 * Multi-Mode Station: Core Vocab, Liaison & Weak Forms, Dictation, Sonar Fog
 */

(function() {
  'use strict';

  // ════════════════════════════════════════════════════════════
  // 1. 全局状态与配置
  // ════════════════════════════════════════════════════════════
  let manifest = [];
  let currentExam = null;
  let currentSegments = [];
  let currentActiveSegIndex = 0;
  
  // Modes: 'blank' | 'liaison' | 'dictation' | 'sonar'
  let currentMode = StoneStorage.getItem('cet4_mode') || 'blank';

  // Quiz State
  let quizItems = [];
  let currentQuizIndex = 0;
  let score = { correct: 0, total: 20, streak: 0 };
  let isQuizMode = false;
  let loopMode = 'single'; // 'single' or 'continuous'
  let stopAtTime = null;
  let currentFilter = 'all';

  // Mode 3: Dictation State
  let dictWords = [];
  let dictCurrentIdx = 0;
  let dictStats = { correctCount: 0, totalTyped: 0, startTime: null };

  // Mode 4: Sonar Fog State
  let sonarPlayCount = 0;
  let sonarWords = [];
  let hasStartedTraining = false;

  // Mode 5: Sequential Flow State (首字母线索通关)
  let seqWords = [];
  let seqCurrentIdx = 0;
  let seqStats = { correctCount: 0, totalWords: 0 };

  // Deaf Vocab Tracker (小石屋通缉榜)
  let failedWordAttempts = JSON.parse(StoneStorage.getItem('cet4_failed_attempts') || '{}');
  let deafVocabList = JSON.parse(StoneStorage.getItem('cet4_deaf_vocab') || '[]');

  // ════════════════════════════════════════════════════════════
  // 自动循环重播调度器 (未输完自动停顿重播)
  // ════════════════════════════════════════════════════════════
  let replayTimer = null;
  function cancelPendingReplay() {
    if (replayTimer) {
      clearTimeout(replayTimer);
      replayTimer = null;
    }
  }

  // ════════════════════════════════════════════════════════════
  // 词形/屈折/派生智能比对引擎 (免除-s/-ed/词性派生的听力误伤)
  // ════════════════════════════════════════════════════════════
  function isMorphologicalMatch(w1, w2) {
    if (!w1 || !w2) return false;
    w1 = w1.toLowerCase().replace(/[^a-z]/g, '');
    w2 = w2.toLowerCase().replace(/[^a-z]/g, '');
    if (w1 === w2) return true;
    if (w1.length < 2 || w2.length < 2) return false;

    // 1. 直接屈折变化: s, es, d, ed, ing, ly, ion, tion, ation
    if (w1 + 's' === w2 || w2 + 's' === w1) return true;
    if (w1 + 'es' === w2 || w2 + 'es' === w1) return true;
    if (w1 + 'd' === w2 || w2 + 'd' === w1) return true;
    if (w1 + 'ed' === w2 || w2 + 'ed' === w1) return true;
    if (w1 + 'ing' === w2 || w2 + 'ing' === w1) return true;
    if (w1 + 'ly' === w2 || w2 + 'ly' === w1) return true;
    if (w1 + 'ion' === w2 || w2 + 'ion' === w1) return true;
    if (w1 + 'tion' === w2 || w2 + 'tion' === w1) return true;

    // y <-> ies, ied, ily, ier, iest
    const yPairs = [['y', 'ies'], ['y', 'ied'], ['y', 'ily'], ['y', 'ier'], ['y', 'iest']];
    for (const [ey, ei] of yPairs) {
      if (w1.endsWith(ey) && w1.slice(0, -ey.length) + ei === w2) return true;
      if (w2.endsWith(ey) && w2.slice(0, -ey.length) + ei === w1) return true;
    }

    // 双写辅音: run/running, stop/stopped, plan/planned
    if (w1.length >= 3 && w2.length >= 5) {
      const last1 = w1[w1.length - 1];
      if (w2 === w1 + last1 + 'ing' || w2 === w1 + last1 + 'ed') return true;
    }
    if (w2.length >= 3 && w1.length >= 5) {
      const last2 = w2[w2.length - 1];
      if (w1 === w2 + last2 + 'ing' || w1 === w2 + last2 + 'ed') return true;
    }

    // 去不发音 e + ing/ed/ion/ation: make/making, operate/operating, create/creation
    if (w1.endsWith('e') && w1.length >= 3) {
      const stem = w1.slice(0, -1);
      if (stem + 'ing' === w2 || stem + 'ed' === w2 || stem + 'ion' === w2 || stem + 'ation' === w2) return true;
    }
    if (w2.endsWith('e') && w2.length >= 3) {
      const stem = w2.slice(0, -1);
      if (stem + 'ing' === w1 || stem + 'ed' === w1 || stem + 'ion' === w1 || stem + 'ation' === w1) return true;
    }

    // 拉丁词源动名词转化: -de / -d <-> -sion (decide/decision, divide/division, provide/provision)
    if (w1.endsWith('de') && w1.slice(0, -2) + 'sion' === w2) return true;
    if (w2.endsWith('de') && w2.slice(0, -2) + 'sion' === w1) return true;
    if (w1.endsWith('d') && w1.slice(0, -1) + 'sion' === w2) return true;
    if (w2.endsWith('d') && w2.slice(0, -1) + 'sion' === w1) return true;

    // 2. 经典形容词与名词互转: -ent/-ence, -ant/-ance, -ent/-ency, -ant/-ancy
    const adjNounPairs = [['ent', 'ence'], ['ant', 'ance'], ['ent', 'ency'], ['ant', 'ancy']];
    for (const [s1, s2] of adjNounPairs) {
      if (w1.endsWith(s1) && w2.endsWith(s2) && w1.slice(0, -s1.length) === w2.slice(0, -s2.length)) return true;
      if (w2.endsWith(s1) && w1.endsWith(s2) && w2.slice(0, -s1.length) === w1.slice(0, -s2.length)) return true;
    }

    // 3. 词根归一化比对 (getSimpleStem 剥离常见派生词缀)
    const root1 = getSimpleStem(w1);
    const root2 = getSimpleStem(w2);
    if (root1 && root2 && root1 === root2 && root1.length >= 3) {
      return true;
    }

    // 4. 派生词缀比对 (基于共同前缀 + 合法构词后缀集合)
    const minLen = Math.min(w1.length, w2.length);
    let cp = 0;
    while (cp < minLen && w1[cp] === w2[cp]) cp++;

    if (cp >= 4 && (cp / minLen) >= 0.60) {
      const s1 = w1.slice(cp);
      const s2 = w2.slice(cp);

      const validSuffixes = new Set([
        '', 'e', 'y', 's', 'es', 'ed', 'd', 'ing', 'ly', 'er', 'est',
        'al', 'ial', 'ical', 'ic', 'tion', 'sion', 'ation', 'ition', 'ion',
        'ment', 'ments', 'able', 'ible',
        'ive', 'ity', 'ty', 'ful', 'fully', 'less', 'lessly', 'ness',
        'ous', 'ious', 'ate', 'ize', 'ise', 'ism', 'ist', 'ng', 'on'
      ]);

      if (validSuffixes.has(s1) && validSuffixes.has(s2)) {
        return true;
      }
    }

    return false;
  }

  function getSimpleStem(word) {
    if (!word || word.length <= 3) return word;
    let w = word;
    const sfxList = [
      'ization', 'isation', 'ational', 'fulness', 'ousness',
      'ation', 'ition', 'ments', 'tions', 'sions',
      'ment', 'tion', 'sion', 'ance', 'ence', 'able', 'ible',
      'ness', 'less', 'full', 'fully', 'ing', 'ied', 'ies',
      'ive', 'ity', 'ous', 'ial', 'ical', 'ic', 'al', 'ed', 'ly', 'er', 'es'
    ];
    for (const sfx of sfxList) {
      if (w.endsWith(sfx) && w.length - sfx.length >= 3) {
        w = w.slice(0, -sfx.length);
        break;
      }
    }
    if (w.endsWith('s') && !w.endsWith('ss') && w.length > 3) w = w.slice(0, -1);
    if (w.endsWith('e') && w.length > 3) w = w.slice(0, -1);
    return w;
  }

  // ════════════════════════════════════════════════════════════
  // 2. DOM 元素引用
  // ════════════════════════════════════════════════════════════
  const examSelect = document.getElementById('examSelect');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const transcriptList = document.getElementById('transcriptList');
  const transcriptCountBadge = document.getElementById('transcriptCountBadge');
  const searchInput = document.getElementById('searchInput');
  const filterTabs = document.querySelectorAll('.tab-chip');
  const mobileTabBtns = document.querySelectorAll('.mobile-tab-btn');

  const panelTranscript = document.getElementById('panelTranscript');
  const panelPlayer = document.getElementById('panelPlayer');
  const panelQuiz = document.getElementById('panelQuiz');

  // Capsule Drawer
  const modeCapsuleTrigger = document.getElementById('modeCapsuleTrigger');
  const modeDrawer = document.getElementById('modeDrawer');
  const currentModeBadge = document.getElementById('currentModeBadge');
  const modeIndicatorChip = document.getElementById('modeIndicatorChip');
  const modeCards = document.querySelectorAll('.mode-card');
  const modeArrow = document.getElementById('modeArrow');

  // Player & Banner
  const currentExamName = document.getElementById('currentExamName');
  const currentExamStats = document.getElementById('currentExamStats');
  const currentSegIndex = document.getElementById('currentSegIndex');
  const currentSegSectionBadge = document.getElementById('currentSegSectionBadge');
  const currentSentenceText = document.getElementById('currentSentenceText');

  const audioPlayer = document.getElementById('audioPlayer');
  const mainPlayBtn = document.getElementById('mainPlayBtn');
  const timeSlider = document.getElementById('timeSlider');
  const currentTimeLabel = document.getElementById('currentTimeLabel');
  const durationLabel = document.getElementById('durationLabel');
  const loopModeBtn = document.getElementById('loopModeBtn');

  const btnPlayCurrent = document.getElementById('btnPlayCurrent');
  const btnPlaySlow = document.getElementById('btnPlaySlow');
  const btnSkipQuiz = document.getElementById('btnSkipQuiz');
  const btnNextQuiz = document.getElementById('btnNextQuiz');

  // Mode Special DOMs
  const liaisonAlertTag = document.getElementById('liaisonAlertTag');
  const sonarControls = document.getElementById('sonarControls');
  const sonarStagePill = document.getElementById('sonarStagePill');
  const btnRevealAllWords = document.getElementById('btnRevealAllWords');

  const dictationStreamWrap = document.getElementById('dictationStreamWrap');
  const dictationWordSlots = document.getElementById('dictationWordSlots');
  const dictCurrentWord = document.getElementById('dictCurrentWord');
  const dictAccuracy = document.getElementById('dictAccuracy');
  const dictWpm = document.getElementById('dictWpm');

  // Inputs & HUD
  const quizInputContainer = document.getElementById('quizInputContainer');
  const quizInput = document.getElementById('quizInput');
  const btnSubmitAnswer = document.getElementById('btnSubmitAnswer');
  const quizFeedback = document.getElementById('quizFeedback');
  const quizOverview = document.getElementById('quizOverview');
  const btnNewRound = document.getElementById('btnNewRound');
  const btnNewRoundText = document.getElementById('btnNewRoundText');

  const scoreCorrect = document.getElementById('scoreCorrect');
  const scoreProgress = document.getElementById('scoreProgress');
  const scoreStreak = document.getElementById('scoreStreak');
  const quizModeBadge = document.getElementById('quizModeBadge');

  // Deaf Bounty Box
  const bountyCountTag = document.getElementById('bountyCountTag');
  const deafWordsChips = document.getElementById('deafWordsChips');

  // Waveform
  const waveformCanvas = document.getElementById('waveformCanvas');
  const canvasCtx = waveformCanvas.getContext('2d');

  // Start Training Hero DOM
  const startTrainingHero = document.getElementById('startTrainingHero');
  const sentenceStageWrap = document.getElementById('sentenceStageWrap');
  const heroModePill = document.getElementById('heroModePill');
  const heroExamTitle = document.getElementById('heroExamTitle');
  const heroModeDesc = document.getElementById('heroModeDesc');
  const btnHeroStart = document.getElementById('btnHeroStart');
  const btnHeroChangeMode = document.getElementById('btnHeroChangeMode');
  const btnHeroFreeBrowse = document.getElementById('btnHeroFreeBrowse');
  const btnStartFromHeader = document.getElementById('btnStartFromHeader');

  // Mode 5 & Bounty Auth DOMs
  const sequentialStreamWrap = document.getElementById('sequentialStreamWrap');
  const seqWordSlots = document.getElementById('seqWordSlots');
  const seqCurrentWord = document.getElementById('seqCurrentWord');
  const seqWordProgress = document.getElementById('seqWordProgress');
  const seqExamProgress = document.getElementById('seqExamProgress');
  const bountyAuthStatus = document.getElementById('bountyAuthStatus');
  const authDot = document.getElementById('authDot');
  const bountyAuthText = document.getElementById('bountyAuthText');

  // ════════════════════════════════════════════════════════════
  // 3. 系统初始化与模式控制
  // ════════════════════════════════════════════════════════════
  async function init() {
    initTheme();
    setupEventListeners();
    setupMobileTabs();
    setupModeCapsule();
    renderDeafBountyChips();
    await loadManifest();
    flushBounties();
  }

  function setupModeCapsule() {
    // Set initial active card
    updateModeDisplay(currentMode);

    modeCapsuleTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = modeDrawer.classList.toggle('open');
      modeArrow.textContent = isOpen ? '▴' : '▾';
    });

    document.addEventListener('click', (e) => {
      if (!modeDrawer.contains(e.target) && !modeCapsuleTrigger.contains(e.target)) {
        modeDrawer.classList.remove('open');
        modeArrow.textContent = '▾';
      }
    });

    modeCards.forEach(card => {
      card.addEventListener('click', () => {
        const mode = card.getAttribute('data-mode');
        switchTrainingMode(mode);
        modeDrawer.classList.remove('open');
        modeArrow.textContent = '▾';
      });
    });
  }

  function updateHeroDisplay() {
    if (!startTrainingHero) return;
    const meta = {
      blank: {
        pill: '🎯 核心词挖空特训 · 20 题',
        desc: '抽取真题对话与短文中的重点实词挖空，专注听音拼写，强化核心生词听觉记忆。'
      },
      liaison: {
        pill: '⚡ 连读/弱读特训 · 20 题',
        desc: '精准识别辅元连读与 to/of/at 等功能词弱读吞音，击破连音听觉断层。'
      },
      dictation: {
        pill: '✍️ 整句打字听写 · 15 句',
        desc: '听取整句录音并逐词提交答案，检验瞬时听觉记忆与全句拼写反应。'
      },
      sonar: {
        pill: '🌫️ 折纸声呐迷雾 · 20 题',
        desc: '第 1 遍首字母盲听建立声呐感知，第 2 遍随音频发音渐进翻开全句。'
      }
    }[currentMode] || {
      pill: '🎯 核心词挖空特训 · 20 题',
      desc: '基于历年四级真题切片 · 实词盲听针对性特训'
    };

    if (heroModePill) heroModePill.textContent = meta.pill;
    if (heroModeDesc) heroModeDesc.textContent = meta.desc;
    if (heroExamTitle && currentExam) heroExamTitle.textContent = currentExam.name;
  }

  function showStartHero() {
    hasStartedTraining = false;
    if (startTrainingHero) startTrainingHero.style.display = 'flex';
    if (sentenceStageWrap) sentenceStageWrap.style.display = 'none';
    if (quizInputContainer) quizInputContainer.style.display = 'none';
    if (liaisonAlertTag) liaisonAlertTag.style.display = 'none';
    if (sonarControls) sonarControls.style.display = 'none';
    if (dictationStreamWrap) dictationStreamWrap.style.display = 'none';
    updateHeroDisplay();
  }

  function hideStartHero() {
    if (startTrainingHero) startTrainingHero.style.display = 'none';
    if (sentenceStageWrap) sentenceStageWrap.style.display = 'flex';
  }

  function switchTrainingMode(newMode) {
    currentMode = newMode;
    StoneStorage.setItem('cet4_mode', newMode);
    updateModeDisplay(newMode);
    adaptUIForMode(newMode);

    if (!hasStartedTraining) {
      updateHeroDisplay();
    } else {
      startNewRound();
    }
  }

  function updateModeDisplay(mode) {
    modeCards.forEach(c => {
      c.classList.toggle('active', c.getAttribute('data-mode') === mode);
    });

    const meta = {
      blank: { name: '🎯 核心词挖空', badge: '20 题实词', tip: '核心词挖空' },
      liaison: { name: '⚡ 连读/弱读特训', badge: '20 题音变', tip: '连读与弱读' },
      dictation: { name: '✍️ 整句打字听写', badge: '全句盲打', tip: '整句听写' },
      sonar: { name: '🌫️ 折纸声呐迷雾', badge: '两遍解码', tip: '声呐迷雾' },
      sequential: { name: '🚶 全文顺序模式', badge: '全卷通关', tip: '首字母线索' }
    }[mode] || { name: '🎯 核心词挖空', badge: '20 题实词', tip: '核心词挖空' };

    currentModeBadge.textContent = meta.name;
    modeIndicatorChip.textContent = meta.tip;
    quizModeBadge.textContent = meta.badge;
    btnNewRoundText.textContent = `开始新一轮 (${meta.tip})`;
  }

  function adaptUIForMode(mode) {
    // Reset all specific blocks
    if (liaisonAlertTag) liaisonAlertTag.style.display = 'none';
    if (sonarControls) sonarControls.style.display = 'none';
    if (dictationStreamWrap) dictationStreamWrap.style.display = 'none';
    if (sequentialStreamWrap) sequentialStreamWrap.style.display = 'none';

    // If hero start card is visible, hide the input container
    if (!hasStartedTraining && startTrainingHero && startTrainingHero.style.display !== 'none') {
      if (quizInputContainer) quizInputContainer.style.display = 'none';
      return;
    }

    // Activate current mode UI
    if (mode === 'sonar') {
      if (quizInputContainer) quizInputContainer.style.display = 'none';
      if (sonarControls) sonarControls.style.display = 'flex';
      if (quizInput) quizInput.placeholder = "声呐迷雾模式无需手动输入，戴上耳机专注辨音...";
    } else if (mode === 'dictation') {
      if (quizInputContainer) quizInputContainer.style.display = 'flex';
      if (dictationStreamWrap) dictationStreamWrap.style.display = 'flex';
      if (quizInput) quizInput.placeholder = "输入单词，按 Enter 或点击验证...";
    } else if (mode === 'sequential') {
      if (quizInputContainer) quizInputContainer.style.display = 'flex';
      if (sequentialStreamWrap) sequentialStreamWrap.style.display = 'flex';
      if (quizInput) quizInput.placeholder = "输入单词或后半截，按 Enter 验证...";
    } else if (mode === 'liaison') {
      if (quizInputContainer) quizInputContainer.style.display = 'flex';
      if (quizInput) quizInput.placeholder = "输入连读双词（如 turn out），按 Enter 验证...";
    } else { // blank
      if (quizInputContainer) quizInputContainer.style.display = 'flex';
      if (quizInput) quizInput.placeholder = "输入空缺单词，按 Enter 或点击验证...";
    }

    const tip = document.getElementById('quickTipText');
    if (tip) {
      if (mode === 'sequential') tip.textContent = "Enter 验证 ↵ | 未完自动重播 🔁";
      else if (mode === 'dictation') tip.textContent = "Enter 提交 ↵ | 未完自动重播 🔁";
      else if (mode === 'blank') tip.textContent = "Enter 验证 ↵";
      else if (mode === 'liaison') tip.textContent = "双词后按 Enter ↵";
      else tip.textContent = "";
    }
  }

  // ════════════════════════════════════════════════════════════
  // 4. 数据加载与试卷切换
  // ════════════════════════════════════════════════════════════
  async function loadManifest() {
    try {
      const res = await fetch(Stone.url('cet4/data/manifest.json'));
      if (!res.ok) throw new Error('Failed to load manifest');
      manifest = await res.json();

      examSelect.innerHTML = '';
      manifest.forEach((exam) => {
        const opt = document.createElement('option');
        opt.value = exam.id;
        opt.textContent = `${exam.name} (${exam.segments_count} 句)`;
        examSelect.appendChild(opt);
      });

      if (manifest.length > 0) {
        loadExam(manifest[0].id);
      }
    } catch (e) {
      console.error(e);
      transcriptList.innerHTML = `<div style="color:var(--brand-danger);text-align:center;padding:20px;">加载考试清单失败: ${e.message}</div>`;
    }
  }

  async function loadExam(examId) {
    try {
      const examMeta = manifest.find(m => m.id === examId);
      if (!examMeta) return;

      currentExamName.textContent = examMeta.name;
      currentExamStats.textContent = `听前准备: ${examMeta.stats.pre}句 | 正文: ${examMeta.stats.body}句 | 问题: ${examMeta.stats.question}句`;

      const res = await fetch(Stone.url('cet4/'+examMeta.json_file));
      currentExam = await res.json();
      currentSegments = currentExam.segments;

      audioPlayer.src = currentExam.audio;
      audioPlayer.load();

      const firstBodyIdx = currentSegments.findIndex(s => s.sec === 'body');
      const startIdx = firstBodyIdx !== -1 ? firstBodyIdx : 0;
      currentActiveSegIndex = startIdx;
      isQuizMode = false;
      quizItems = [];
      renderTranscriptList();

      // 一进入优先展示「开始训练」起步卡，避免直接进入前奏或未经启动的句子状态
      showStartHero();
      drawWaveformVisual(currentSegments[startIdx]);

      quizOverview.textContent = "点击「开始训练」生成特训题目...";
      quizFeedback.style.display = 'none';
      score = { correct: 0, total: 20, streak: 0 };
      updateScoreHUD();
    } catch (e) {
      console.error(e);
    }
  }

  // ════════════════════════════════════════════════════════════
  // 5. 移动端选项卡导航
  // ════════════════════════════════════════════════════════════
  function setupMobileTabs() {
    mobileTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-tab');
        switchMobileTab(target);
      });
    });
  }

  function switchMobileTab(targetTab) {
    mobileTabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === targetTab);
    });

    if (window.innerWidth <= 960) {
      panelTranscript.classList.remove('active-tab');
      panelPlayer.classList.remove('active-tab');
      panelQuiz.classList.remove('active-tab');

      if (targetTab === 'tab-player') {
        panelPlayer.classList.add('active-tab');
      } else if (targetTab === 'tab-transcript') {
        panelTranscript.classList.add('active-tab');
      } else if (targetTab === 'tab-overview') {
        panelQuiz.classList.add('active-tab');
      }
    }
  }

  // ════════════════════════════════════════════════════════════
  // 6. 句子点读与渲染
  // ════════════════════════════════════════════════════════════
  function renderTranscriptList() {
    if (!currentSegments || currentSegments.length === 0) return;

    const query = searchInput.value.trim().toLowerCase();
    transcriptList.innerHTML = '';

    let visibleCount = 0;
    const secIcons = { pre: '📋', body: '📝', question: '❓' };

    currentSegments.forEach((seg, idx) => {
      if (currentFilter !== 'all' && seg.sec !== currentFilter) return;
      if (query && !seg.t.toLowerCase().includes(query)) return;

      visibleCount++;
      const item = document.createElement('div');
      item.className = `sentence-item ${idx === currentActiveSegIndex ? 'active' : ''}`;
      item.id = `seg-item-${idx}`;

      item.innerHTML = `
        <div class="sentence-meta">
          <span>${secIcons[seg.sec] || ''} [${String(idx + 1).padStart(3, '0')}]</span>
          <span>${formatTime(seg.s)} - ${formatTime(seg.e)}</span>
        </div>
        <div class="sentence-text">${escapeHtml(seg.t)}</div>
      `;

      item.addEventListener('click', () => {
        isQuizMode = false;
        selectSegment(idx, true);
        if (window.innerWidth <= 960) switchMobileTab('tab-player');
      });

      transcriptList.appendChild(item);
    });

    transcriptCountBadge.textContent = `${visibleCount} / ${currentSegments.length} 句`;
  }

  function selectSegment(index, autoPlay = true) {
    if (index < 0 || index >= currentSegments.length) return;
    hideStartHero();
    if (!isQuizMode && btnStartFromHeader) btnStartFromHeader.style.display = 'inline-block';
    currentActiveSegIndex = index;
    const seg = currentSegments[index];

    document.querySelectorAll('.sentence-item').forEach(el => el.classList.remove('active'));
    const activeEl = document.getElementById(`seg-item-${index}`);
    if (activeEl) {
      activeEl.classList.add('active');
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    currentSegIndex.textContent = `[ ${String(index + 1).padStart(3, '0')} ]`;
    const secLabels = { pre: '📋 听前准备', body: '📝 正文', question: '❓ 问题提问' };
    currentSegSectionBadge.className = `sec-chip ${seg.sec}`;
    currentSegSectionBadge.textContent = secLabels[seg.sec] || seg.sec;

    // Reset sonar play count for new sentence
    sonarPlayCount = 0;

    if (seg.sec === 'pre') {
      // 听前导语/规则说明：坚决不进入任何训练题型，仅做纯朗读与波形试听
      if (dictationStreamWrap) dictationStreamWrap.style.display = 'none';
      if (sonarControls) sonarControls.style.display = 'none';
      if (liaisonAlertTag) liaisonAlertTag.style.display = 'none';
      if (quizInputContainer) quizInputContainer.style.display = 'none';

      currentSentenceText.innerHTML = `<span style="color:var(--text-secondary);"><span style="color:var(--brand-primary);font-weight:600;">[听前导语 · 仅供试听]</span> ${escapeHtml(seg.t)}</span>`;
      drawWaveformVisual(seg);
    } else {
      adaptUIForMode(currentMode);
      if (currentMode === 'sonar') {
        renderSonarSentence(seg);
      } else if (currentMode === 'dictation') {
        setupDictationSentence(seg);
      } else if (currentMode === 'sequential') {
        setupSequentialSentence(seg);
      } else {
        currentSentenceText.textContent = seg.t;
        drawWaveformVisual(seg);
      }
    }

    if (autoPlay) {
      playSegmentTime(seg.s, seg.e);
    }
  }

  function playSegmentTime(startTime, endTime, playbackRate = 1.0) {
    audioPlayer.playbackRate = playbackRate;
    audioPlayer.currentTime = startTime;
    stopAtTime = endTime;
    audioPlayer.play().catch(e => console.log("Autoplay blocked:", e));
    mainPlayBtn.textContent = '⏸';

    if (currentMode === 'sonar') {
      sonarPlayCount++;
      updateSonarStageStatus();
    }
  }

  // 查找下一个符合当前训练模式的句子索引（严格排除听前导语 pre）
  function findNextTrainableIndex(fromIdx, direction = 1) {
    if (!currentSegments || currentSegments.length === 0) return -1;
    let idx = fromIdx + direction;
    while (idx >= 0 && idx < currentSegments.length) {
      const seg = currentSegments[idx];
      if (currentMode === 'blank') {
        // 核心词模式：只在正文部分抽取
        if (seg.sec === 'body') return idx;
      } else {
        // 全文蒙答、折纸声呐、连读特训：包含正文与问题，绝不抽听前部分
        if (seg.sec === 'body' || seg.sec === 'question') return idx;
      }
      idx += direction;
    }
    return -1;
  }

  // ════════════════════════════════════════════════════════════
  // 7. 特训生成算法与多模式逻辑
  // ════════════════════════════════════════════════════════════
  function startNewRound() {
    hasStartedTraining = true;
    hideStartHero();
    adaptUIForMode(currentMode);
    if (btnStartFromHeader) btnStartFromHeader.style.display = 'none';

    if (currentMode === 'blank') {
      quizItems = generateBlankQuiz(20);
    } else if (currentMode === 'liaison') {
      quizItems = generateLiaisonQuiz(20);
    } else if (currentMode === 'dictation') {
      quizItems = generateDictationQuiz(15);
    } else if (currentMode === 'sonar') {
      quizItems = generateSonarQuiz(20);
    } else if (currentMode === 'sequential') {
      quizItems = generateSequentialQuiz();
    }

    if (quizItems.length === 0) {
      alert("当前试卷未解析出符合条件的训练段落！");
      return;
    }

    let resumeIndex = 0;
    if (currentMode === 'sequential' && currentExam) {
      const savedProg = parseInt(StoneStorage.getItem(`cet4_seq_prog_${currentExam.id}`) || '0', 10);
      if (savedProg > 0 && savedProg < quizItems.length) {
        resumeIndex = savedProg;
      }
    }

    currentQuizIndex = resumeIndex;
    isQuizMode = true;
    score = { correct: 0, total: quizItems.length, streak: 0 };
    updateScoreHUD();
    loadCurrentQuizItem();
    updateQuizOverviewText();

    if (window.innerWidth <= 960) switchMobileTab('tab-player');
  }

  // --- 算法 A: 核心词挖空 ---
  function generateBlankQuiz(n = 20) {
    if (!currentSegments) return [];
    const eligible = [];
    currentSegments.forEach((seg, idx) => {
      if (seg.sec === 'body' && seg.w && seg.w.length >= 2) {
        eligible.push({ idx, seg });
      }
    });

    const shuffled = [...eligible].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(n, shuffled.length));

    const blanks = [];
    selected.forEach(({ idx, seg }) => {
      const candidates = seg.w.filter(w => {
        const clean = w.w.replace(/[^a-zA-Z]/g, '').toLowerCase();
        if (clean.length < 4) return false;
        const testRegex = new RegExp(`\\b${escapeRegExp(clean)}\\b`, 'i');
        return testRegex.test(seg.t);
      });

      if (candidates.length > 0) {
        const target = candidates[Math.floor(Math.random() * candidates.length)];
        const cleanWord = target.w.replace(/[^a-zA-Z]/g, '');
        const regex = new RegExp(`\\b${escapeRegExp(cleanWord)}\\b`, 'i');
        const blankedText = seg.t.replace(regex, '____');

        blanks.push({
          type: 'blank',
          segIndex: idx,
          seg: seg,
          answer: cleanWord,
          blankedText: blankedText,
          wordStart: target.s,
          wordEnd: target.e
        });
      }
    });
    return blanks;
  }

  // --- 算法 B: 连读与弱读双词挖空 ---
  function generateLiaisonQuiz(n = 20) {
    if (!currentSegments) return [];
    const items = [];
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const weakWords = new Set(['of', 'to', 'at', 'in', 'have', 'could', 'would', 'should', 'can', 'it', 'is', 'and', 'but', 'out', 'up', 'on', 'for', 'them', 'him', 'her']);

    currentSegments.forEach((seg, idx) => {
      if ((seg.sec !== 'body' && seg.sec !== 'question') || !seg.w || seg.w.length < 3) return;

      for (let i = 0; i < seg.w.length - 1; i++) {
        const w1 = seg.w[i];
        const w2 = seg.w[i + 1];
        const c1 = w1.w.replace(/[^a-zA-Z]/g, '').toLowerCase();
        const c2 = w2.w.replace(/[^a-zA-Z]/g, '').toLowerCase();

        if (c1.length === 0 || c2.length === 0) continue;

        const gap = w2.s - w1.e;
        const lastC1 = c1[c1.length - 1];
        const firstC2 = c2[0];

        // Criterion: tight temporal gap (< 0.08s) AND (consonant-vowel or weak function word)
        const isLiaison = (gap <= 0.08) && (!vowels.has(lastC1) && vowels.has(firstC2));
        const isWeak = (gap <= 0.10) && (weakWords.has(c1) || weakWords.has(c2));

        if (isLiaison || isWeak) {
          const phrase = `${c1} ${c2}`;
          const regex = new RegExp(`\\b${escapeRegExp(w1.w)}\\s+${escapeRegExp(w2.w)}\\b`, 'i');
          const blanked = seg.t.replace(regex, '____ ____');

          items.push({
            type: 'liaison',
            segIndex: idx,
            seg: seg,
            answer: phrase,
            blankedText: blanked,
            wordStart: w1.s,
            wordEnd: w2.e,
            phraseTag: isLiaison ? '⚡ 辅元连读' : '💨 弱读吞音'
          });
          break; // Max 1 per sentence
        }
      }
    });

    return items.sort(() => 0.5 - Math.random()).slice(0, Math.min(n, items.length));
  }

  // --- 算法 C: 整句听写打字 (正文+问题，排除听前) ---
  function generateDictationQuiz(n = 15) {
    if (!currentSegments) return [];
    const eligible = currentSegments
      .map((seg, idx) => ({ seg, idx }))
      .filter(item => (item.seg.sec === 'body' || item.seg.sec === 'question') && item.seg.w && item.seg.w.length >= 4 && item.seg.w.length <= 20);

    return eligible.sort(() => 0.5 - Math.random()).slice(0, Math.min(n, eligible.length)).map(item => ({
      type: 'dictation',
      segIndex: item.idx,
      seg: item.seg
    }));
  }

  // --- 算法 D: 折纸声呐迷雾 (正文+问题，排除听前) ---
  function generateSonarQuiz(n = 20) {
    if (!currentSegments) return [];
    const eligible = currentSegments
      .map((seg, idx) => ({ seg, idx }))
      .filter(item => (item.seg.sec === 'body' || item.seg.sec === 'question') && item.seg.w && item.seg.w.length >= 4);

    return eligible.sort(() => 0.5 - Math.random()).slice(0, Math.min(n, eligible.length)).map(item => ({
      type: 'sonar',
      segIndex: item.idx,
      seg: item.seg
    }));
  }

  // --- 加载当前题型 ---
  function loadCurrentQuizItem() {
    cancelPendingReplay();
    if (!isQuizMode || currentQuizIndex >= quizItems.length) {
      currentSentenceText.textContent = `🎉 本轮特训已完成！最终得分: ${score.correct} / ${score.total}`;
      quizFeedback.className = 'quiz-feedback success';
      quizFeedback.textContent = `🏆 太棒了！您完成了本轮特训，准确率: ${Math.round(score.correct / score.total * 100)}%！`;
      quizFeedback.style.display = 'block';
      if (quizInputContainer) quizInputContainer.style.display = 'none';
      return;
    }

    adaptUIForMode(currentMode);

    const item = quizItems[currentQuizIndex];
    currentActiveSegIndex = item.segIndex;

    currentSegIndex.textContent = `[ 题 ${currentQuizIndex + 1} / ${quizItems.length} ]`;
    quizFeedback.style.display = 'none';

    if (item.type === 'blank') {
      currentSegSectionBadge.className = `sec-chip ${item.seg.sec}`;
      currentSegSectionBadge.textContent = '🎯 核心挖空';
      currentSentenceText.innerHTML = escapeHtml(item.blankedText).replace(/____/g, '<span class="blank-highlight">____</span>');
      quizInput.value = '';
      quizInput.focus();
      drawWaveformVisual(item.seg, item.wordStart, item.wordEnd);
      playSegmentTime(item.seg.s, item.seg.e, 1.0);
    } else if (item.type === 'liaison') {
      currentSegSectionBadge.className = `sec-chip ${item.seg.sec}`;
      currentSegSectionBadge.textContent = item.phraseTag || (item.seg.sec === 'question' ? '⚡ 问题连读' : '⚡ 连读音爆');
      currentSentenceText.innerHTML = escapeHtml(item.blankedText).replace(/____\s+____/g, '<span class="liaison-highlight">____ ____</span>');
      liaisonAlertTag.style.display = 'block';
      liaisonAlertTag.textContent = `${item.phraseTag} (输入双词)`;
      quizInput.value = '';
      quizInput.focus();
      drawWaveformVisual(item.seg, item.wordStart, item.wordEnd);
      playSegmentTime(item.seg.s, item.seg.e, 1.0);
    } else if (item.type === 'dictation') {
      currentSegSectionBadge.className = `sec-chip ${item.seg.sec}`;
      currentSegSectionBadge.textContent = item.seg.sec === 'question' ? '❓ 问题听写' : '✍️ 整句听写';
      setupDictationSentence(item.seg);
      quizInput.value = '';
      quizInput.focus();
      drawWaveformVisual(item.seg);
      playSegmentTime(item.seg.s, item.seg.e, 1.0);
    } else if (item.type === 'sonar') {
      currentSegSectionBadge.className = `sec-chip ${item.seg.sec}`;
      currentSegSectionBadge.textContent = item.seg.sec === 'question' ? '❓ 问题迷雾' : '🌫️ 声呐迷雾';
      renderSonarSentence(item.seg);
      drawWaveformVisual(item.seg);
      playSegmentTime(item.seg.s, item.seg.e, 1.0);
    } else if (item.type === 'sequential') {
      currentSegSectionBadge.className = `sec-chip ${item.seg.sec}`;
      currentSegSectionBadge.textContent = item.seg.sec === 'question' ? '❓ 问题通关' : '🚶 顺序正文';
      setupSequentialSentence(item.seg);
      quizInput.value = '';
      quizInput.focus();
      drawWaveformVisual(item.seg);
      playSegmentTime(item.seg.s, item.seg.e, 1.0);
    }

    updateQuizOverviewText();
  }


  // --- 算法 E: 全文顺序通关算法 (包含正文+问题，严格排除听前导语) ---
  function generateSequentialQuiz() {
    if (!currentSegments) return [];
    const eligible = currentSegments
      .map((seg, idx) => ({ seg, idx }))
      .filter(item => (item.seg.sec === 'body' || item.seg.sec === 'question'));

    return eligible.map(item => ({
      type: 'sequential',
      segIndex: item.idx,
      seg: item.seg
    }));
  }

  // --- 模式 5: 首字母线索交互逻辑 ---
  function setupSequentialSentence(seg) {
    if (sequentialStreamWrap) sequentialStreamWrap.style.display = 'flex';
    if (quizInputContainer) quizInputContainer.style.display = 'flex';

    if (!seg.w || seg.w.length === 0) {
      seqWords = seg.t.split(/\s+/).map(w => ({
        w: w,
        clean: w.replace(/[^a-zA-Z]/g, '').toLowerCase()
      }));
    } else {
      seqWords = seg.w.map(w => ({
        w: w.w,
        clean: w.w.replace(/[^a-zA-Z]/g, '').toLowerCase(),
        s: w.s,
        e: w.e
      }));
    }

    seqCurrentIdx = 0;
    seqStats = { correctCount: 0, totalWords: seqWords.filter(w => w.clean.length > 0).length };

    seqWordSlots.innerHTML = '';
    seqWords.forEach((dw, i) => {
      const slot = document.createElement('span');
      slot.className = `seq-slot ${i === 0 ? 'active' : ''}`;
      slot.id = `seq-slot-${i}`;

      if (dw.clean.length === 0) {
        slot.textContent = dw.w;
        slot.classList.add('punct');
      } else {
        const firstLetter = dw.clean[0];
        const dots = '·'.repeat(Math.max(1, dw.clean.length - 1));
        slot.innerHTML = `<span class="initial-letter">${escapeHtml(firstLetter)}</span><span class="slot-dots">${dots}</span>`;
      }
      seqWordSlots.appendChild(slot);
    });

    while (seqCurrentIdx < seqWords.length && seqWords[seqCurrentIdx].clean.length === 0) {
      seqCurrentIdx++;
      if (seqCurrentIdx < seqWords.length) {
        const next = document.getElementById(`seq-slot-${seqCurrentIdx}`);
        if (next) next.classList.add('active');
      }
    }

    updateSequentialHUD();
    currentSentenceText.innerHTML = `<span style="color:var(--text-secondary);">[顺序通关] 请在下方输入完整单词（或后半截）按 Enter 前进...</span>`;
  }

  function handleSequentialTyping(trigger = 'space') {
    if (currentMode !== 'sequential' || seqWords.length === 0) return;
    if (seqCurrentIdx >= seqWords.length) return;

    const currentObj = seqWords[seqCurrentIdx];
    const typed = quizInput.value.trim().toLowerCase().replace(/[^a-z]/g, '');
    const slot = document.getElementById(`seq-slot-${seqCurrentIdx}`);

    if (trigger === 'skip') {
      // 显式点击跳过本词：揭晓词汇并计入通缉令
      if (slot) {
        slot.textContent = currentObj.w;
        slot.className = 'seq-slot wrong';
      }
      trackDeafVocab(currentObj.clean, currentExam ? currentExam.id : 'cet4');
      quizInput.value = '';
      seqCurrentIdx++;
    } else {
      if (!typed) {
        // 空格误触：不惩罚、清空输入框防止残留
        quizInput.value = '';
        return;
      }

      const isExact = (typed === currentObj.clean);
      const isSuffix = (currentObj.clean.length >= 2 && typed === currentObj.clean.slice(1));
      const isMorph = isMorphologicalMatch(typed, currentObj.clean) ||
        (currentObj.clean.length >= 2 && isMorphologicalMatch(currentObj.clean[0] + typed, currentObj.clean));

      if (isExact || isSuffix || isMorph) {
        seqStats.correctCount++;
        if (slot) {
          slot.textContent = currentObj.w;
          slot.className = 'seq-slot correct';
        }
      } else {
        if (slot) {
          slot.textContent = currentObj.w;
          slot.className = 'seq-slot wrong';
        }
        trackDeafVocab(currentObj.clean, currentExam ? currentExam.id : 'cet4', typed);
      }

      quizInput.value = '';
      seqCurrentIdx++;
    }

    while (seqCurrentIdx < seqWords.length && seqWords[seqCurrentIdx].clean.length === 0) {
      seqCurrentIdx++;
    }

    if (seqCurrentIdx < seqWords.length) {
      const nextSlot = document.getElementById(`seq-slot-${seqCurrentIdx}`);
      if (nextSlot) nextSlot.classList.add('active');
      updateSequentialHUD();
    } else {
      cancelPendingReplay();
      audioPlayer.pause();
      seqCurrentWord.textContent = "全句完成! 🎉";
      quizFeedback.className = 'quiz-feedback success';
      quizFeedback.textContent = `🏆 本句通关！准确率: ${Math.round(seqStats.correctCount / Math.max(1, seqStats.totalWords) * 100)}%`;
      quizFeedback.style.display = 'block';

      if (isQuizMode) {
        score.correct++;
        updateScoreHUD();
        if (currentExam) {
          StoneStorage.setItem(`cet4_seq_prog_${currentExam.id}`, currentQuizIndex + 1);
        }
        setTimeout(() => {
          currentQuizIndex++;
          loadCurrentQuizItem();
        }, 800);
      }
    }
  }

  function updateSequentialHUD() {
    if (seqCurrentIdx < seqWords.length) {
      seqCurrentWord.textContent = `${seqWords[seqCurrentIdx].clean.slice(0, 1).toUpperCase()}...`;
    }
    seqWordProgress.textContent = `${Math.min(seqCurrentIdx + 1, seqWords.length)} / ${seqWords.length}`;
    if (isQuizMode) {
      seqExamProgress.textContent = `${currentQuizIndex + 1} / ${quizItems.length} 句`;
    }
  }

  // ════════════════════════════════════════════════════════════
  // 8. 模式交互实现（连读校验、整句打字、声呐迷雾）
  // ════════════════════════════════════════════════════════════

  // --- 模式 1 & 2 答案校验 ---
  function checkAnswer(trigger = 'submit') {
    if (!isQuizMode || currentQuizIndex >= quizItems.length) return;
    const item = quizItems[currentQuizIndex];

    if (trigger === 'skip') {
      onAnswerFailure(item.answer, item.seg);
      return;
    }

    if (item.type === 'blank') {
      const userAns = quizInput.value.trim().toLowerCase().replace(/[^a-z]/g, '');
      if (!userAns) {
        quizInput.value = '';
        return;
      }
      const correctAns = item.answer.trim().toLowerCase().replace(/[^a-z]/g, '');

      if (userAns === correctAns || isMorphologicalMatch(userAns, correctAns) || (userAns.length >= 3 && correctAns.includes(userAns))) {
        onAnswerSuccess(item.answer);
      } else {
        onAnswerFailure(item.answer, item.seg, userAns);
      }
    } else if (item.type === 'liaison') {
      const userAns = quizInput.value.trim().toLowerCase().replace(/\s+/g, ' ');
      if (!userAns) {
        quizInput.value = '';
        return;
      }
      const correctAns = item.answer.trim().toLowerCase().replace(/\s+/g, ' ');

      const normUser = userAns.replace(/[^a-z]/g, '');
      const normCorrect = correctAns.replace(/[^a-z]/g, '');

      if (normUser === normCorrect) {
        onAnswerSuccess(`⚡ 连读破解: "${item.answer}"`);
      } else {
        onAnswerFailure(item.answer, item.seg);
      }
    }
  }

  function onAnswerSuccess(msg) {
    cancelPendingReplay();
    score.correct++;
    score.streak++;
    updateScoreHUD();

    quizFeedback.className = 'quiz-feedback success';
    quizFeedback.textContent = `✅ 正确！${msg} (得分: ${score.correct}/${score.total})`;
    quizFeedback.style.display = 'block';

    setTimeout(() => {
      currentQuizIndex++;
      loadCurrentQuizItem();
    }, 1100);
  }

  function onAnswerFailure(answer, seg, userAns = null) {
    cancelPendingReplay();
    score.streak = 0;
    updateScoreHUD();

    // Track Deaf Vocab (仅在真正未听懂时记入，若仅为词形词性变体则豁免)
    trackDeafVocab(answer, currentExam ? currentExam.id : 'cet4', userAns);

    quizFeedback.className = 'quiz-feedback error';
    quizFeedback.textContent = `❌ 错误！正确答案: "${answer}"\n↓ 自动 0.5x 慢放重听，已记入通缉令 ↓`;
    quizFeedback.style.display = 'block';

    playSegmentTime(seg.s, seg.e, 0.5);
  }

  // --- 模式 3: 整句打字机逻辑 ---
  function setupDictationSentence(seg) {
    if (dictationStreamWrap) dictationStreamWrap.style.display = 'flex';
    if (quizInputContainer) quizInputContainer.style.display = 'flex';

    if (!seg.w || seg.w.length === 0) {
      dictWords = seg.t.split(/\s+/).map(w => ({
        w: w,
        clean: w.replace(/[^a-zA-Z]/g, '').toLowerCase()
      }));
    } else {
      dictWords = seg.w.map(w => ({
        w: w.w,
        clean: w.w.replace(/[^a-zA-Z]/g, '').toLowerCase(),
        s: w.s,
        e: w.e
      }));
    }

    dictCurrentIdx = 0;
    dictStats = { correctCount: 0, totalTyped: 0, startTime: Date.now() };

    dictationWordSlots.innerHTML = '';
    dictWords.forEach((dw, i) => {
      const slot = document.createElement('span');
      slot.className = `dict-slot ${i === 0 ? 'active' : ''}`;
      slot.id = `dict-slot-${i}`;
      slot.textContent = '____';
      dictationWordSlots.appendChild(slot);
    });

    updateDictationHUD();
    currentSentenceText.innerHTML = `<span style="color:var(--text-tertiary);">[整句听写中] 请在下方输入框输入当前单词，按 Enter 继续...</span>`;
  }

  function handleDictationTyping(trigger = 'space') {
    if (currentMode !== 'dictation' || dictWords.length === 0) return;
    if (dictCurrentIdx >= dictWords.length) return;

    const currentObj = dictWords[dictCurrentIdx];
    const typed = quizInput.value.trim().toLowerCase().replace(/[^a-z]/g, '');
    const slot = document.getElementById(`dict-slot-${dictCurrentIdx}`);

    dictStats.totalTyped++;

    if (trigger === 'skip') {
      if (slot) {
        slot.textContent = currentObj.w;
        slot.className = 'dict-slot wrong';
      }
      trackDeafVocab(currentObj.clean, currentExam ? currentExam.id : 'cet4');
      quizInput.value = '';
      dictCurrentIdx++;
    } else {
      if (!typed) {
        quizInput.value = '';
        return;
      }

      const isExact = (typed === currentObj.clean);
      const isMorph = isMorphologicalMatch(typed, currentObj.clean);

      if (isExact || isMorph) {
        dictStats.correctCount++;
        if (slot) {
          slot.textContent = currentObj.w;
          slot.className = 'dict-slot correct';
        }
      } else {
        if (slot) {
          slot.textContent = currentObj.w;
          slot.className = 'dict-slot wrong';
        }
        trackDeafVocab(currentObj.clean, currentExam ? currentExam.id : 'cet4', typed);
      }

      quizInput.value = '';
      dictCurrentIdx++;
    }

    if (dictCurrentIdx < dictWords.length) {
      const nextSlot = document.getElementById(`dict-slot-${dictCurrentIdx}`);
      if (nextSlot) nextSlot.classList.add('active');
      updateDictationHUD();
    } else {
      cancelPendingReplay();
      audioPlayer.pause();
      dictCurrentWord.textContent = "全句完成! 🎉";
      quizFeedback.className = 'quiz-feedback success';
      quizFeedback.textContent = `🏆 本句听写完成！准确率: ${Math.round(dictStats.correctCount / dictWords.length * 100)}%`;
      quizFeedback.style.display = 'block';

      if (isQuizMode) {
        score.correct++;
        updateScoreHUD();
        setTimeout(() => {
          currentQuizIndex++;
          loadCurrentQuizItem();
        }, 1200);
      }
    }
  }

  function updateDictationHUD() {
    if (dictCurrentIdx < dictWords.length) {
      dictCurrentWord.textContent = `[${dictCurrentIdx + 1}/${dictWords.length}]`;
    }
    const acc = dictStats.totalTyped === 0 ? 100 : Math.round((dictStats.correctCount / dictStats.totalTyped) * 100);
    dictAccuracy.textContent = `${acc}%`;

    const mins = Math.max(0.05, (Date.now() - (dictStats.startTime || Date.now())) / 60000);
    const wpm = Math.round(dictStats.correctCount / mins);
    dictWpm.textContent = `${wpm} WPM`;
  }

  // --- 模式 4: 折纸声呐迷雾逻辑 ---
  function renderSonarSentence(seg) {
    if (sonarControls) sonarControls.style.display = 'flex';
    if (quizInputContainer) quizInputContainer.style.display = 'none';
    currentSentenceText.innerHTML = '';
    sonarWords = (seg.w && seg.w.length > 0) ? seg.w : seg.t.split(/\s+/).map(w => ({ w }));

    sonarWords.forEach((wObj, idx) => {
      const fullWord = wObj.w;
      const clean = fullWord.replace(/[^a-zA-Z]/g, '');
      const first = clean.length > 0 ? clean[0] : fullWord[0];
      const dots = '·'.repeat(Math.max(2, clean.length - 1));

      const tile = document.createElement('span');
      tile.className = 'sonar-word-tile';
      tile.id = `sonar-tile-${idx}`;
      tile.setAttribute('data-full', fullWord);
      tile.setAttribute('data-folded', first + dots);
      tile.textContent = first + dots;

      // Click to unfold single tile
      tile.addEventListener('click', () => {
        tile.classList.toggle('unfolded');
        tile.textContent = tile.classList.contains('unfolded') ? fullWord : (first + dots);
      });

      currentSentenceText.appendChild(tile);
    });

    updateSonarStageStatus();
  }

  function updateSonarStageStatus() {
    if (sonarPlayCount <= 1) {
      sonarStagePill.textContent = `第 1 遍 · 盲听声呐态 (仅显首字母)`;
      sonarStagePill.style.color = `var(--brand-accent)`;
    } else {
      sonarStagePill.textContent = `第 ${sonarPlayCount} 遍 · 声波破雾态 (随音频自动翻开)`;
      sonarStagePill.style.color = `var(--brand-success)`;
    }
  }

  function revealAllSonarWords() {
    document.querySelectorAll('.sonar-word-tile').forEach(tile => {
      tile.classList.add('unfolded');
      tile.textContent = tile.getAttribute('data-full');
    });
  }

  // ════════════════════════════════════════════════════════════
  // 9. 小石屋「聋子词通缉榜」联动体系
  // ════════════════════════════════════════════════════════════
  function trackDeafVocab(word, examId, userTyped = null) {
    const clean = word.toLowerCase().trim();
    if (!clean || clean.length < 3) return;

    // 格式/词形/词性偏差豁免：如果用户输入的是合法词根派生或屈折形态，说明耳朵已听懂，坚决不入通缉令！
    if (userTyped) {
      const cleanTyped = userTyped.toLowerCase().trim().replace(/[^a-z]/g, '');
      if (cleanTyped && isMorphologicalMatch(cleanTyped, clean)) {
        console.log(`[DeafVocab Exempt] "${cleanTyped}" is morphological variant of "${clean}", exempt from bounty.`);
        return;
      }
    }

    failedWordAttempts[clean] = (failedWordAttempts[clean] || 0) + 1;

    if (failedWordAttempts[clean] >= 2) {
      if (!deafVocabList.some(item => item.word === clean)) {
        deafVocabList.unshift({
          word: clean,
          exam: examId,
          time: new Date().toLocaleDateString()
        });
        StoneStorage.setItem('cet4_deaf_vocab', JSON.stringify(deafVocabList));
        renderDeafBountyChips();

        // Async report to VPS backend (fire-and-forget)
        reportDeafWordToBackend(clean, examId);
      }
    }
  }

  function renderDeafBountyChips() {
    bountyCountTag.textContent = `${deafVocabList.length} 词`;
    deafWordsChips.innerHTML = '';

    if (deafVocabList.length === 0) {
      deafWordsChips.innerHTML = `<span class="no-bounty-tip">暂无聋子词，耳力处于巅峰状态！⚡</span>`;
      return;
    }

    deafVocabList.slice(0, 15).forEach(item => {
      const chip = document.createElement('span');
      chip.className = 'deaf-chip';
      chip.textContent = `🎧 ${item.word}`;
      chip.title = `来自真题: ${item.exam}，点击快速检索包含该词的听力真题`;

      chip.addEventListener('click', () => {
        searchInput.value = item.word;
        renderTranscriptList();
        if (window.innerWidth <= 960) switchMobileTab('tab-transcript');
      });

      deafWordsChips.appendChild(chip);
    });
  }

  let bountyFlushBusy=false;
  async function reportDeafWordToBackend(word,examId) {
    if(!StoneStorage.getItem('vocab_auth_token'))return;
    const queue=JSON.parse(StoneStorage.getItem('cet4_report_queue')||'[]');
    queue.push({word,examId,eventId:crypto.randomUUID()});
    StoneStorage.setItem('cet4_report_queue',JSON.stringify(queue));
    await flushBounties();
  }
  async function flushBounties(){
    if(bountyFlushBusy)return;
    const raw=StoneStorage.getItem('vocab_auth_token');let token;try{token=JSON.parse(raw);}catch{token=raw;}if(!token)return;
    bountyFlushBusy=true;
    try{while(true){const queue=JSON.parse(StoneStorage.getItem('cet4_report_queue')||'[]');if(!queue.length)break;
      const r=await fetch('/api/cet4/report-deaf-word',{method:'POST',headers:{'Content-Type':'application/json',Authorization:'Bearer '+token},body:JSON.stringify(queue[0]),signal:AbortSignal.timeout(10000)});
      if(r.status===403||r.status===401)break;if(!r.ok)throw new Error('sync unavailable');
      const latest=JSON.parse(StoneStorage.getItem('cet4_report_queue')||'[]').filter(x=>x.eventId!==queue[0].eventId);StoneStorage.setItem('cet4_report_queue',JSON.stringify(latest));
    }}catch{}finally{bountyFlushBusy=false;}
  }
  window.addEventListener('online',flushBounties);
  async function checkBountyAuthStatus() {
    if (!bountyAuthStatus || !authDot || !bountyAuthText) return;
    const storedToken = StoneStorage.getItem('vocab_auth_token');
    let token;try{token=JSON.parse(storedToken);}catch{token=storedToken;}
    if (!token) {
      authDot.className = 'auth-dot guest';
      bountyAuthText.textContent = '🔒 本地通缉模式 (登录小石屋主站开启云端同步)';
      return;
    }
    try {
      const res = await fetch('/api/cet4/auth-status', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const d = await res.json();
        if (d.can_sync_cloud) {
          authDot.className = 'auth-dot active';
          bountyAuthText.textContent = `🟢 站长特权已激活 · [${d.username}] 实时同步大逃杀`;
        } else {
          authDot.className = 'auth-dot pending';
          bountyAuthText.textContent = `⚠️ 游客体验态 · [${d.username}] 需站长后台开放同步额度`;
        }
      } else {
        authDot.className = 'auth-dot guest';
        bountyAuthText.textContent = '🔒 本地通缉模式 (登录令牌已失效)';
      }
    } catch (e) {
      authDot.className = 'auth-dot guest';
      bountyAuthText.textContent = '🔒 本地通缉模式';
    }
  }

  // ════════════════════════════════════════════════════════════
  // 10. Canvas 折纸波形动态绘制
  // ════════════════════════════════════════════════════════════
  function drawWaveformVisual(seg = null, wordStart = null, wordEnd = null) {
    const width = waveformCanvas.width;
    const height = waveformCanvas.height;
    canvasCtx.clearRect(0, 0, width, height);

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    // Paper background
    const bgGrad = canvasCtx.createLinearGradient(0, 0, width, height);
    if (isDark) {
      bgGrad.addColorStop(0, '#111722');
      bgGrad.addColorStop(1, '#1e2636');
    } else {
      bgGrad.addColorStop(0, '#f5efe6');
      bgGrad.addColorStop(1, '#ebe2d3');
    }
    canvasCtx.fillStyle = bgGrad;
    canvasCtx.fillRect(0, 0, width, height);

    // Crease line
    canvasCtx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(180, 150, 120, 0.25)';
    canvasCtx.lineWidth = 1;
    canvasCtx.beginPath();
    canvasCtx.moveTo(0, height / 2);
    canvasCtx.lineTo(width, height / 2);
    canvasCtx.stroke();

    const numBars = 110;
    const barWidth = width / numBars;
    const seed = seg ? seg.s * 100 : 42;

    for (let i = 0; i < numBars; i++) {
      const progress = i / numBars;
      const amp = Math.sin(progress * Math.PI * 6 + seed) * 0.32 + 
                  Math.sin(progress * Math.PI * 14 + seed * 2) * 0.22 + 
                  0.38;
      const barHeight = Math.max(4, amp * (height * 0.76));
      const x = i * barWidth;
      const y = (height - barHeight) / 2;

      let isHighlight = false;
      if (seg && wordStart && wordEnd) {
        const segDuration = Math.max(0.1, seg.e - seg.s);
        const wRelStart = (wordStart - seg.s) / segDuration;
        const wRelEnd = (wordEnd - seg.s) / segDuration;
        if (progress >= wRelStart && progress <= wRelEnd) {
          isHighlight = true;
        }
      }

      if (isHighlight) {
        canvasCtx.fillStyle = currentMode === 'liaison' ? '#dc2626' : (isDark ? '#f59e0b' : '#d97706');
      } else {
        canvasCtx.fillStyle = isDark ? 'rgba(129, 140, 248, 0.85)' : 'rgba(67, 56, 202, 0.82)';
      }

      canvasCtx.fillRect(x + 1, y, barWidth - 2, barHeight);
    }
  }

  // ════════════════════════════════════════════════════════════
  // 11. 全局事件绑定
  // ════════════════════════════════════════════════════════════
  function setupEventListeners() {
    examSelect.addEventListener('change', (e) => loadExam(e.target.value));
    themeToggleBtn.addEventListener('click', toggleTheme);

    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentFilter = tab.getAttribute('data-filter');
        renderTranscriptList();
      });
    });

    searchInput.addEventListener('input', renderTranscriptList);

    // Audio Player
    audioPlayer.addEventListener('timeupdate', () => {
      const cur = audioPlayer.currentTime;
      const dur = audioPlayer.duration || 1;
      timeSlider.value = (cur / dur) * 100;
      currentTimeLabel.textContent = formatTime(cur);

      // Sonar mode 2nd pass: reveal words as audio reaches them
      if (currentMode === 'sonar' && sonarPlayCount >= 2 && sonarWords.length > 0) {
        sonarWords.forEach((wObj, idx) => {
          if (wObj.s && cur >= wObj.s) {
            const tile = document.getElementById(`sonar-tile-${idx}`);
            if (tile && !tile.classList.contains('unfolded')) {
              tile.classList.add('unfolded');
              tile.textContent = tile.getAttribute('data-full');
            }
          }
        });
      }

      // Check single segment stop & auto-replay incomplete sentence
      if (stopAtTime !== null && cur >= stopAtTime) {
        audioPlayer.pause();
        mainPlayBtn.textContent = '▶';
        stopAtTime = null;

        // 核心判断：当前句子是否尚未输入完成？
        const isSeqIncomplete = (currentMode === 'sequential' && seqWords.length > 0 && seqCurrentIdx < seqWords.length);
        const isDictIncomplete = (currentMode === 'dictation' && dictWords.length > 0 && dictCurrentIdx < dictWords.length);
        const isContinuousQuiz = (isQuizMode && loopMode === 'continuous');

        if (isSeqIncomplete || isDictIncomplete || isContinuousQuiz) {
          // 当前句未输完，自动留出 1.0 秒呼吸间隔后重新播放当前句（真正闭环精听）
          cancelPendingReplay();
          const seg = isQuizMode ? quizItems[currentQuizIndex]?.seg : currentSegments[currentActiveSegIndex];
          if (seg) {
            replayTimer = setTimeout(() => {
              const stillIncomplete = (currentMode === 'sequential' ? (seqCurrentIdx < seqWords.length) :
                                       currentMode === 'dictation' ? (dictCurrentIdx < dictWords.length) :
                                       isQuizMode);
              if (stillIncomplete && audioPlayer.paused) {
                playSegmentTime(seg.s, seg.e, audioPlayer.playbackRate || 1.0);
              }
            }, 1000);
          }
        } else if (!isQuizMode) {
          if (loopMode === 'continuous') {
            const nextIdx = findNextTrainableIndex(currentActiveSegIndex, 1);
            if (nextIdx !== -1) {
              selectSegment(nextIdx, true);
            }
          }
        }
      }
    });

    audioPlayer.addEventListener('loadedmetadata', () => {
      durationLabel.textContent = formatTime(audioPlayer.duration);
    });

    audioPlayer.addEventListener('play', () => { mainPlayBtn.textContent = '⏸'; });
    audioPlayer.addEventListener('pause', () => { mainPlayBtn.textContent = '▶'; });

    mainPlayBtn.addEventListener('click', () => {
      if (!hasStartedTraining) {
        startNewRound();
        return;
      }
      if (audioPlayer.paused) {
        cancelPendingReplay();
        const seg = isQuizMode ? quizItems[currentQuizIndex]?.seg : currentSegments[currentActiveSegIndex];
        if (seg && (audioPlayer.currentTime < seg.s || audioPlayer.currentTime >= seg.e)) {
          playSegmentTime(seg.s, seg.e, 1.0);
        } else {
          audioPlayer.play();
        }
      } else {
        cancelPendingReplay();
        audioPlayer.pause();
      }
    });

    timeSlider.addEventListener('input', () => {
      stopAtTime = null;
      const dur = audioPlayer.duration || 1;
      audioPlayer.currentTime = (timeSlider.value / 100) * dur;
    });

    loopModeBtn.addEventListener('click', () => {
      if (loopMode === 'single') {
        loopMode = 'continuous';
        loopModeBtn.textContent = '🔁';
        loopModeBtn.title = '当前模式: 连续播放';
      } else {
        loopMode = 'single';
        loopModeBtn.textContent = '➡️';
        loopModeBtn.title = '当前模式: 单句播放';
      }
    });

    btnPlayCurrent.addEventListener('click', () => {
      cancelPendingReplay();
      if (!hasStartedTraining) {
        startNewRound();
        return;
      }
      if (!currentSegments || currentSegments.length === 0) return;
      const seg = isQuizMode ? quizItems[currentQuizIndex]?.seg : currentSegments[currentActiveSegIndex];
      if (seg) playSegmentTime(seg.s, seg.e, 1.0);
    });

    btnPlaySlow.addEventListener('click', () => {
      cancelPendingReplay();
      const seg = isQuizMode ? quizItems[currentQuizIndex]?.seg : currentSegments[currentActiveSegIndex];
      if (seg) playSegmentTime(seg.s, seg.e, 0.5);
    });

    btnSkipQuiz.addEventListener('click', () => {
      if (!hasStartedTraining) {
        startNewRound();
        return;
      }
      if (isQuizMode && currentQuizIndex < quizItems.length - 1) {
        score.streak = 0;
        updateScoreHUD();
        currentQuizIndex++;
        loadCurrentQuizItem();
      } else if (!isQuizMode) {
        const nextIdx = findNextTrainableIndex(currentActiveSegIndex, 1);
        if (nextIdx !== -1) {
          selectSegment(nextIdx, true);
        }
      }
    });

    btnNextQuiz.addEventListener('click', () => {
      if (!hasStartedTraining) {
        startNewRound();
        return;
      }
      if (isQuizMode && currentQuizIndex < quizItems.length - 1) {
        currentQuizIndex++;
        loadCurrentQuizItem();
      } else if (!isQuizMode) {
        const nextIdx = findNextTrainableIndex(currentActiveSegIndex, 1);
        if (nextIdx !== -1) {
          selectSegment(nextIdx, true);
        }
      }
    });

    btnNewRound.addEventListener('click', startNewRound);

    // 统一提交分发器 (兼容敲空格、软键盘回车/前往、点击验证按钮、快捷按键)
    let isSubmitting = false;
    function submitCurrentAnswer(triggerType = 'space') {
      if (isSubmitting) return;
      isSubmitting = true;

      try {
        if (currentMode === 'sequential') {
          handleSequentialTyping(triggerType);
        } else if (currentMode === 'dictation') {
          handleDictationTyping(triggerType);
        } else if (currentMode === 'blank' || currentMode === 'liaison') {
          checkAnswer(triggerType);
        }
      } finally {
        setTimeout(() => { isSubmitting = false; }, 60);
      }
    }

    // 1. 验证按钮点击 (全模式通用)
    btnSubmitAnswer.addEventListener('click', () => {
      submitCurrentAnswer('click');
    });

    // Enter is the safe default. Optional Space mode never processes IME input events.
    quizInput.addEventListener('keydown', (e) => {
      if(e.isComposing || e.keyCode===229 || e.repeat || e.ctrlKey || e.metaKey || e.altKey)return;
      if(e.key==='Enter') {e.preventDefault();submitCurrentAnswer('enter');return;}
      if(e.code==='Space' && window.StoneUI?.spaceSubmit) {
        if(currentMode==='liaison' && quizInput.value.trim().split(/\s+/).filter(Boolean).length<2)return;
        e.preventDefault();submitCurrentAnswer('space');
      }
    });

    // 4. 移动端轻量快捷按键 (重听、慢放、跳过当前词)
    const btnQuickReplay = document.getElementById('btnQuickReplay');
    const btnQuickSlow = document.getElementById('btnQuickSlow');
    const btnQuickSkip = document.getElementById('btnQuickSkip');

    if (btnQuickReplay) {
      btnQuickReplay.addEventListener('click', () => {
        cancelPendingReplay();
        const seg = isQuizMode ? quizItems[currentQuizIndex]?.seg : currentSegments[currentActiveSegIndex];
        if (seg) playSegmentTime(seg.s, seg.e, 1.0);
      });
    }

    if (btnQuickSlow) {
      btnQuickSlow.addEventListener('click', () => {
        cancelPendingReplay();
        const seg = isQuizMode ? quizItems[currentQuizIndex]?.seg : currentSegments[currentActiveSegIndex];
        if (seg) playSegmentTime(seg.s, seg.e, 0.5);
      });
    }

    if (btnQuickSkip) {
      btnQuickSkip.addEventListener('click', () => {
        submitCurrentAnswer('skip');
      });
    }

    if (btnHeroStart) {
      btnHeroStart.addEventListener('click', () => {
        startNewRound();
      });
    }

    if (btnHeroChangeMode) {
      btnHeroChangeMode.addEventListener('click', () => {
        modeDrawer.classList.toggle('open');
        modeArrow.textContent = modeDrawer.classList.contains('open') ? '▴' : '▾';
      });
    }

    if (btnHeroFreeBrowse) {
      btnHeroFreeBrowse.addEventListener('click', () => {
        hideStartHero();
        isQuizMode = false;
        const firstBody = currentSegments.findIndex(s => s.sec === 'body');
        const targetIdx = firstBody !== -1 ? firstBody : 0;
        selectSegment(targetIdx, false);
      });
    }

    if (btnStartFromHeader) {
      btnStartFromHeader.addEventListener('click', () => {
        startNewRound();
      });
    }

    if (btnRevealAllWords) {
      btnRevealAllWords.addEventListener('click', revealAllSonarWords);
    }
  }

  // ════════════════════════════════════════════════════════════
  // 12. 辅助函数
  // ════════════════════════════════════════════════════════════
  function updateScoreHUD() {
    scoreCorrect.textContent = score.correct;
    scoreProgress.textContent = `${currentQuizIndex + 1 > score.total ? score.total : currentQuizIndex + 1} / ${score.total}`;
    scoreStreak.textContent = `🔥 ${score.streak}`;
  }

  function updateQuizOverviewText() {
    if (!quizItems || quizItems.length === 0) {
      quizOverview.textContent = "点击「开始新一轮」生成本轮特训题单...";
      return;
    }

    const itemMap = new Map();
    quizItems.forEach((b) => itemMap.set(b.segIndex, b));

    const lines = [];
    const secIcons = { pre: '📋', body: '📝', question: '❓' };

    currentSegments.forEach((seg, idx) => {
      const isCurrent = idx === currentActiveSegIndex;
      const marker = isCurrent ? '▶ ' : '  ';
      const icon = secIcons[seg.sec] || '';
      const text = itemMap.has(idx) ? (itemMap.get(idx).blankedText || seg.t) : seg.t;
      lines.push(`${marker}${icon} [${String(idx + 1).padStart(3, '0')}] ${text}`);
    });

    quizOverview.textContent = lines.join('\n');
  }

  function formatTime(seconds) {
    if (isNaN(seconds)) return '00:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  function escapeHtml(str) {
    return (str || '').replace(/[&<>"']/g, m => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[m]));
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function initTheme() {
    const saved = StoneStorage.getItem('cet4_theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    themeToggleBtn.textContent = saved === 'dark' ? '🌙' : '☀️';
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    StoneStorage.setItem('cet4_theme', next);
    themeToggleBtn.textContent = next === 'dark' ? '🌙' : '☀️';
    drawWaveformVisual(currentSegments[currentActiveSegIndex]);
  }

  window.addEventListener('DOMContentLoaded', init);
})();
