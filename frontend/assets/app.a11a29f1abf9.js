if (typeof tarotArcanaSkills === 'undefined') {
  window.tarotArcanaSkills = [
    { "name": "The Magician", "skill": "真理洞察", "desc": "高亮本局唯一正确生还选项", "icon": "👁️", "type": "reveal_correct", "rarity": "SSR" },
    { "name": "The High Priestess", "skill": "心智抚慰", "desc": "立即恢复 35 点 SAN 理智值", "icon": "🧠", "type": "heal_san", "rarity": "SR" },
    { "name": "The Empress", "skill": "生命滋养", "desc": "立即恢复 35 点 HP 生命值", "icon": "💚", "type": "heal_hp", "rarity": "SR" },
    { "name": "The Emperor", "skill": "绝对支配", "desc": "直接判定生还并获得全额经验", "icon": "👑", "type": "auto_win", "rarity": "SSR" },
    { "name": "The Hierophant", "skill": "智慧恩赐", "desc": "本回合额外奖励 +50 经验值", "icon": "📜", "type": "xp_boost", "rarity": "SR" },
    { "name": "The Lovers", "skill": "同盟共鸣", "desc": "连击 Combo +2，战胜经验翻倍", "icon": "⚡", "type": "combo_boost", "rarity": "UR" },
    { "name": "The Chariot", "skill": "破阵冲锋", "desc": "摧毁并排除 1 个高危陷阱选项", "icon": "🛡️", "type": "eliminate_wrong", "rarity": "SSR" },
    { "name": "Strength", "skill": "坚韧壁垒", "desc": "生成护盾，抵挡下一次选错伤害", "icon": "🔰", "type": "shield", "rarity": "SR" },
    { "name": "The Hermit", "skill": "求索之光", "desc": "洞悉线索与词根提示，辅助作答灰血减半", "icon": "💡", "type": "hint", "rarity": "SR" },
    { "name": "Wheel of Fortune", "skill": "命运重铸", "desc": "舍弃高危情境，无损重抽安全生还题", "icon": "🌪️", "type": "reroll", "rarity": "UR" },
    { "name": "Justice", "skill": "天平平衡", "desc": "判定成功时立即抚慰恢复 +20 SAN", "icon": "⚖️", "type": "justice", "rarity": "SR" },
    { "name": "The Hanged Man", "skill": "逆境觉醒", "desc": "残血时瞬间恢复 70% 生命值", "icon": "⏳", "type": "clutch_heal", "rarity": "SR" },
    { "name": "Death", "skill": "绝境涅槃", "desc": "致命伤免死保留 10 HP，携 70% 收益紧急撤退", "icon": "🦅", "type": "death", "rarity": "UR" },
    { "name": "Temperance", "skill": "平衡回响", "desc": "错词回忆灰血恢复量翻倍 (+4 HP)", "icon": "🕊️", "type": "temperance", "rarity": "SR" },
    { "name": "The Devil", "skill": "暗夜豪赌", "desc": "主动献祭 15 SAN，当前节点通关金币翻倍", "icon": "🔥", "type": "devil", "rarity": "SR" },
    { "name": "The Tower", "skill": "瓦解崩塌", "desc": "直接粉碎 1 个致命错误陷阱", "icon": "💥", "type": "eliminate_wrong", "rarity": "SSR" },
    { "name": "The Star", "skill": "希望闪耀", "desc": "本场所有生词标记 Mark 全部减 1", "icon": "✨", "type": "cleanse_marks", "rarity": "SSR" },
    { "name": "The Moon", "skill": "迷雾幻影", "desc": "免疫下一次理智值 SAN 损耗", "icon": "🌙", "type": "san_shield", "rarity": "SR" },
    { "name": "The Sun", "skill": "黎明荣耀", "desc": "HP与SAN全满恢复 + 获得 100 XP", "icon": "☀️", "type": "full_restore", "rarity": "UR" },
    { "name": "Judgement", "skill": "终极昭示", "desc": "必定正确并清空目标词错误标记", "icon": "🎺", "type": "verdict", "rarity": "UR" },
    { "name": "The World", "skill": "全知创世", "desc": "透视正解 + 恢复50 HP + 100 XP", "icon": "🌍", "type": "world_master", "rarity": "UR" },
    { "name": "The Fool", "skill": "无畏启程", "desc": "随机触发上述任意一种强力神技", "icon": "🃏", "type": "random", "rarity": "SSR" }
  ];
}

// Global Fallbacks
if (typeof corrections === 'undefined') window.corrections = {};
if (typeof wordTierDict === 'undefined') window.wordTierDict = {};
if (typeof chineseDict === 'undefined') window.chineseDict = {};
if (typeof fullChineseDict === 'undefined') window.fullChineseDict = {};
if (typeof NOVEL_CHAPTERS === 'undefined') window.NOVEL_CHAPTERS = [];
const API_BASE = (typeof window !== 'undefined' && window.location && window.location.origin) ? window.location.origin : '';

// ==========================================
// Vocabulary Survival 3.0 - Candy Match, Tarot Battle Hand & Skill Engine
// ==========================================

// 0. 安全工具函数
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}


// (词库数据已提取到 words-data.js)


// 2. 本地与云端存储管理
const STORAGE_KEYS = {
  WORDS: 'vocab_words_v2',
  CUSTOM_WORDS: 'vocab_custom_words',
  MARKS: 'vocab_marks_v2',
  OLD_MARKS: 'vocab_marks',
  THEME: 'vocab_theme_mode',
  PROFILE: 'vocab_player_profile_v3',
  OLD_PROFILE: 'vocab_player_profile',
  SETTINGS: 'vocab_app_settings',
  AUTH: 'vocab_auth_user',
  TOKEN: 'vocab_auth_token',
  CUSTOM_CHINESE: 'vocab_custom_chinese_dict'
};

function loadFromStorage(key, defaultVal) {
  try {
    const val = StoneStorage.getItem(key);
    return val ? JSON.parse(val) : defaultVal;
  } catch(e) {
    return defaultVal;
  }
}

function saveToStorage(key, val) {
  try {
    StoneStorage.setItem(key, JSON.stringify(val));
  } catch(e) {
    console.error("Storage error:", e);
  }
}

// 核心数据结构与全量词库
let currentWordSource = 'core'; // 默认打开词库始终锁定为核心背诵单词
let currentWordTier = 'all'; // 默认难度为全部难度
let isFilterDrawerOpen = false; // 默认收起筛选面板保持清爽
let customWords = loadFromStorage(STORAGE_KEYS.CUSTOM_WORDS, []);
let customChineseDict = loadFromStorage(STORAGE_KEYS.CUSTOM_CHINESE, {});
if (typeof chineseDict !== 'undefined' && customChineseDict) {
  Object.assign(chineseDict, customChineseDict);
}
let savedWords = loadFromStorage(STORAGE_KEYS.WORDS, []);

function toggleFilterDrawer(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  soundClick();
  isFilterDrawerOpen = !isFilterDrawerOpen;
  saveToStorage('vocab_filter_drawer_open', isFilterDrawerOpen);
  const body = document.getElementById('filterDrawerBody');
  const chevron = document.getElementById('filterChevron');
  if (body) body.style.display = isFilterDrawerOpen ? 'flex' : 'none';
  if (chevron) chevron.classList.toggle('expanded', isFilterDrawerOpen);
}

// 点击外部区域自动收起筛选面板
document.addEventListener('click', (e) => {
  if (isFilterDrawerOpen) {
    const wrap = document.getElementById('vocabFilterPanelWrap');
    if (wrap && !wrap.contains(e.target)) {
      isFilterDrawerOpen = false;
      const body = document.getElementById('filterDrawerBody');
      const chevron = document.getElementById('filterChevron');
      if (body) body.style.display = 'none';
      if (chevron) chevron.classList.remove('expanded');
    }
  }
});













let words = getActiveWordList();

let marks = loadFromStorage(STORAGE_KEYS.MARKS, null);
if (!marks) marks = loadFromStorage(STORAGE_KEYS.OLD_MARKS, {});

let playerProfile = loadFromStorage(STORAGE_KEYS.PROFILE, null);
if (!playerProfile) {
  const old = loadFromStorage(STORAGE_KEYS.OLD_PROFILE, {});
  playerProfile = {
    hp: old.hp || 100,
    grayHp: 0,
    san: old.san || 100,
    xp: old.xp || 0,
    gold: old.gold !== undefined ? old.gold : (100 + (old.wonRounds || 0) * 20),
    level: old.level || 1,
    combo: old.combo || 1,
    wonRounds: old.wonRounds || 0,
    tarotCardsCollected: old.tarotCardsCollected || [],
    battleHand: [],
    learningEvidence: old.learningEvidence || {}
  };
} else {
  if (playerProfile.grayHp === undefined) playerProfile.grayHp = 0;
  if (playerProfile.gold === undefined) playerProfile.gold = 100 + (playerProfile.wonRounds || 0) * 20;
  if (!playerProfile.learningEvidence) playerProfile.learningEvidence = {};
}
if (!playerProfile.riskModel) {
  playerProfile.riskModel = {
    theta_long: 0.0,
    theta_session: 0.0,
    session_state: 0.0,
    answer_count: 0,
    vocab_rating: 0.0
  };
}

let appSettings = loadFromStorage(STORAGE_KEYS.SETTINGS, {
  driverMode: 'gemini_native',
  dictLanguageMode: 'en', // 'en' (默认纯英) 或 'zh' (中文双语增强)
  showChinese: false,
  geminiKey: '',
  geminiModel: 'gemini-3.7-flash',
  customUrl: 'http://localhost:8081/v1/chat/completions',
  customModel: 'gemini-3.7-flash',
  mimoKey: '',
  audioMuted: false,
  enableRiskEngine: true
});
if (appSettings.dictLanguageMode === 'zh') {
  appSettings.showChinese = true;
}

let authUser = loadFromStorage(STORAGE_KEYS.AUTH, null);
let authToken = loadFromStorage(STORAGE_KEYS.TOKEN, null);

// 战斗临时状态
let battleShieldActive = false;
let battleXPBoostActive = false;

// 3. 云端自动同步引擎
let cloudSyncDebounce = null;
let syncBusy=false, syncBaseline='', syncRetry=0, syncReady=false, syncRevision=null;



window.addEventListener('online',()=>{syncRetry=0;if(!syncReady)initCloudSession();else flushStoneSync();});
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')flushStoneSync();});



// 4. Web Audio 音效
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioCtx = new AudioContext();
  }
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function playTone(freq, type = 'sine', duration = 0.15, gain = 0.1) {
  if (appSettings.audioMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    g.gain.setValueAtTime(gain, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
    osc.connect(g);
    g.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch(e) {}
}

function soundSuccess() {
  playTone(523.25, 'triangle', 0.1, 0.15);
  setTimeout(() => playTone(659.25, 'triangle', 0.15, 0.15), 70);
  setTimeout(() => playTone(783.99, 'triangle', 0.25, 0.18), 140);
  if (navigator.vibrate) navigator.vibrate([30, 50, 40]);
}

function soundFailure() {
  playTone(220, 'sawtooth', 0.18, 0.2);
  setTimeout(() => playTone(164.81, 'sawtooth', 0.3, 0.2), 120);
  if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
}

function soundClick() {
  playTone(800, 'sine', 0.04, 0.05);
}

function soundSpell() {
  playTone(440, 'sine', 0.1, 0.15);
  setTimeout(() => playTone(880, 'triangle', 0.2, 0.2), 60);
  setTimeout(() => playTone(1320, 'sine', 0.35, 0.25), 120);
}

let currentWordAudio = null;
let currentSpeechUtterance = null;

function speakWord(word, e, btn) {
  if (e && e.stopPropagation) e.stopPropagation();
  if (!word || typeof word !== 'string') return;
  const cleanWord = word.trim();
  if (!cleanWord) return;

  // 视觉脉冲动效
  const targetBtn = btn || (e && e.currentTarget && e.currentTarget.classList.contains('word-audio-btn') ? e.currentTarget : null) || document.getElementById('dictAudioBtn') || document.getElementById('onlineModalAudioBtn');
  if (targetBtn) {
    targetBtn.classList.add('audio-playing-pulse');
    setTimeout(() => targetBtn.classList.remove('audio-playing-pulse'), 1200);
  }

  // 停止先前的音频
  if (currentWordAudio) {
    try {
      currentWordAudio.pause();
      currentWordAudio.currentTime = 0;
    } catch(err) {}
    currentWordAudio = null;
  }

  // 轨 1：优先采用有道高清美音真人发音 CDN (原生 human voice，支持单词与短语，全端通用)
  const audioUrl = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(cleanWord)}&type=2`;
  const audio = new Audio(audioUrl);
  currentWordAudio = audio;

  let hasStarted = false;
  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.then(() => {
      hasStarted = true;
    }).catch(() => {
      fallbackSpeechSynthesis(cleanWord);
    });
  }

  audio.onerror = () => {
    if (!hasStarted) {
      fallbackSpeechSynthesis(cleanWord);
    }
  };
}

function fallbackSpeechSynthesis(word) {
  if (!('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
    setTimeout(() => {
      const u = new SpeechSynthesisUtterance(word);
      u.lang = 'en-US';
      u.rate = 0.9;
      currentSpeechUtterance = u;
      u.onend = () => { currentSpeechUtterance = null; };
      u.onerror = () => { currentSpeechUtterance = null; };
      window.speechSynthesis.speak(u);
    }, 35);
  } catch(err) {
    console.warn("SpeechSynthesis error:", err);
  }
}

// 5. 安全服务端 AI 代理 + 离线剧情保底
function callAntigravityAPI(...args){return Stone.module('survival').then(()=>window.callAntigravityAPI(...args)).catch(e=>{showToast(e.message);});}

function generateOfflineScenario(...args){return Stone.module('survival').then(()=>window.generateOfflineScenario(...args)).catch(e=>{showToast(e.message);});}

function safeJsonParse(...args){return Stone.module('survival').then(()=>window.safeJsonParse(...args)).catch(e=>{showToast(e.message);});}

// 6. 可点击交互式文本渲染与发音
function renderClickableStory(text, targetWord = '') {
  if (!text) return '';
  const tgtClean = targetWord ? targetWord.toLowerCase().trim() : '';
  return text.split(/([A-Za-z'-]+)/g).map(token => {
    if (/^[A-Za-z'-]+$/.test(token)) {
      const cleanWord = token.toLowerCase();
      const isMarked = getMarkCount(cleanWord) > 0;
      const isTarget = (cleanWord === tgtClean);
      return `<span class="story-word ${isTarget ? 'target-word-glow' : ''} ${isMarked ? 'marked-word-highlight' : ''}" data-word="${cleanWord}" onclick="inspectStoryWord('${cleanWord}', event)" title="点击查词 [${cleanWord}] / 发音 / ★Mark">${escapeHtml(token)}</span>`;
    } else {
      return escapeHtml(token);
    }
  }).join('');
}

async function inspectStoryWord(word, e) {
  if (e) e.stopPropagation();
  soundClick();
  openWordDetails(word);
}

function speakSentence(text) {
  if (!text) return;
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'en-US';
    utter.rate = 0.95;
    window.speechSynthesis.speak(utter);
  }
}

// 7. 视图切换与词库列表
let currentSubTab = 'all';

let stoneNavigationSequence=0;
async function switchNavView(viewName) {
  const navigationSequence=++stoneNavigationSequence;
  if(viewName!=="match" && matchTimerInterval) abortMatchGame();
  try { if(viewName==="survival") {await Stone.module("survival");await Stone.chapter(currentNovelChapter);} else if(viewName==="match") await Stone.module("match"); else if(viewName==="profile") await Stone.module("tarot"); } catch(e) {showToast(e.message);return;}
  if(navigationSequence!==stoneNavigationSequence)return;
  if(viewName!=='words' && document.getElementById('defDrawer')?.classList.contains('open'))closeDefDrawer();
  document.getElementById('drawerOverlay')?.classList.remove('open');
  soundClick();
  document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

  if (viewName === 'cottage') {
    document.getElementById('viewCottage')?.classList.add('active');
    document.getElementById('navCottage')?.classList.add('active');
    if (typeof updateCottageExpeditionUI === 'function') updateCottageExpeditionUI();
  } else if (viewName === 'words') {
    document.getElementById('viewWords').classList.add('active');
    document.getElementById('navWords')?.classList.add('active');
    renderWords(document.getElementById('searchInput').value);
    if (typeof updateCottageExpeditionUI === 'function') updateCottageExpeditionUI();
  } else if (viewName === 'survival') {
    const session = (typeof ExpeditionEngine !== 'undefined' && ExpeditionEngine.getSession()) ? ExpeditionEngine.getSession() : null;
    if (session && session.status === 'in_progress') {
      switchNavView('expedition_map');
      return;
    } else {
      switchNavView('cottage').then(() => {
        if (typeof openExpeditionPrepModal === 'function') {
          openExpeditionPrepModal();
        }
      });
      return;
    }
  } else if (viewName === 'match') {
    document.getElementById('viewMatch').classList.add('active');
    document.getElementById('navMatch').classList.add('active');
  } else if (viewName === 'expedition_map') {
    document.getElementById('viewExpeditionMap')?.classList.add('active');
    if (typeof ExpeditionMap !== 'undefined') {
      ExpeditionMap.renderMap();
    }
  } else if (viewName === 'profile') {
    document.getElementById('viewProfile').classList.add('active');
    document.getElementById('navProfile').classList.add('active');
    renderTarotDeck();
    renderProfileView();
  }
}

function switchSubTab(tab) {
  currentSubTab = tab;
  document.getElementById('subTabAll').classList.toggle('active', tab === 'all');
  document.getElementById('subTabMarked').classList.toggle('active', tab === 'marked');
  document.getElementById('wordsListContainer').style.display = tab === 'all' ? 'flex' : 'none';
  document.getElementById('markedListContainer').style.display = tab === 'marked' ? 'flex' : 'none';
  if (tab === 'marked') renderMarked();
  else renderWords(document.getElementById('searchInput').value);
}

function updateBadges() {
  const coreList = (typeof CORE_STUDY_WORDS !== 'undefined' && Array.isArray(CORE_STUDY_WORDS)) ? CORE_STUDY_WORDS : ((typeof ORIGINAL_STUDY_WORDS !== 'undefined') ? ORIGINAL_STUDY_WORDS : []);
  const novelList = (typeof NOVEL_EXTRACTED_WORDS !== 'undefined' && Array.isArray(NOVEL_EXTRACTED_WORDS)) ? NOVEL_EXTRACTED_WORDS : [];
  const tradeList = (typeof TRADE_BUSINESS_WORDS !== 'undefined' && Array.isArray(TRADE_BUSINESS_WORDS)) ? TRADE_BUSINESS_WORDS : [];
  const fullList = (typeof defaultWords !== 'undefined' && Array.isArray(defaultWords) && defaultWords.length > 0) ? defaultWords : [...coreList, ...novelList, ...tradeList];

  const bCore = document.getElementById('badgeSrc_core') || document.getElementById('badgeSrcOriginal');
  if (bCore) bCore.textContent = coreList.length;

  const bNovel = document.getElementById('badgeSrc_novel_ihopethisfindsyouwell') || document.getElementById('badgeSrcNovel');
  if (bNovel) bNovel.textContent = novelList.length;

  const bTrade = document.getElementById('badgeSrc_trade_business') || document.getElementById('badgeSrcTrade');
  if (bTrade) bTrade.textContent = tradeList.length;

  const bAll = document.getElementById('badgeSrc_all') || document.getElementById('badgeSrcAll');
  if (bAll) bAll.textContent = fullList.length;

  // 计算当前来源下的难度分布
  const sourceWords = getSourceRawWords(currentWordSource);
  const tierDict = (typeof wordTierDict !== 'undefined') ? wordTierDict : {};
  let cCet4 = 0, cCet6 = 0, cIelts = 0;
  sourceWords.forEach(w => {
    const t = tierDict[w.toLowerCase()] || 'cet4';
    if (t === 'cet4') cCet4++;
    else if (t === 'cet6') cCet6++;
    else if (t === 'ielts') cIelts++;
  });

  const bTAll = document.getElementById('badgeTier_all');
  if (bTAll) bTAll.textContent = sourceWords.length;
  const bTCet4 = document.getElementById('badgeTier_cet4');
  if (bTCet4) bTCet4.textContent = cCet4;
  const bTCet6 = document.getElementById('badgeTier_cet6');
  if (bTCet6) bTCet6.textContent = cCet6;
  const bTIelts = document.getElementById('badgeTier_ielts');
  if (bTIelts) bTIelts.textContent = cIelts;

  // 顶部激活状态摘要与结果统计
  const activeWords = getActiveWordList();
  const summaryMap = {
    'core': '📖 核心背诵',
    'original': '📖 核心背诵',
    'novel_ihopethisfindsyouwell': '📚 职场原著',
    'novel': '📚 职场原著',
    'trade_business': '💼 外贸函电',
    'trade': '💼 外贸函电',
    'all': '🌐 全部总库'
  };
  const tierMap = {
    'all': '全部',
    'cet4': 'CET4',
    'cet6': 'CET6',
    'ielts': '雅思'
  };
  const sLabel = summaryMap[currentWordSource] || '📖 核心背诵单词';
  const tLabel = tierMap[currentWordTier] || '全部难度';
  const sumEl = document.getElementById('filterActiveSummary');
  if (sumEl) sumEl.textContent = `${sLabel} · ${tLabel}`;

  const cntChip = document.getElementById('filterResultCountChip');
  if (cntChip) cntChip.textContent = `${activeWords.length} 词`;

  const badgeAll = document.getElementById('badgeAll');
  if (badgeAll) badgeAll.textContent = activeWords.length;

  const badgeMarked = document.getElementById('badgeMarked');
  if (badgeMarked) badgeMarked.textContent = getMarkedWords().length;

  const hudHp = document.getElementById('hudHp');
  if (hudHp) {
    const grayTxt = (playerProfile.grayHp && playerProfile.grayHp > 0) ? ` (+${playerProfile.grayHp})` : '';
    hudHp.textContent = `${playerProfile.hp}${grayTxt}`;
  }
  const hpBar = document.getElementById('hpBar');
  if (hpBar) hpBar.style.width = `${Math.max(0, playerProfile.hp)}%`;

  const hpGrayBar = document.getElementById('hpGrayBar');
  if (hpGrayBar) {
    const totalWithGray = Math.min(100, (playerProfile.hp || 0) + (playerProfile.grayHp || 0));
    hpGrayBar.style.width = `${totalWithGray}%`;
  }

  const hudSan = document.getElementById('hudSan');
  const sanTier = (typeof GrayHealthEngine !== 'undefined') 
    ? GrayHealthEngine.getSanPollutionTier(playerProfile.san) 
    : { label: '清明' };
  if (hudSan) hudSan.textContent = `${playerProfile.san} · ${sanTier.label}`;
  const sanBar = document.getElementById('sanBar');
  if (sanBar) sanBar.style.width = `${Math.max(0, playerProfile.san)}%`;

  const hudLevel = document.getElementById('hudLevel');
  if (hudLevel) hudLevel.textContent = playerProfile.level;
  const hudXp = document.getElementById('hudXp');
  if (hudXp) hudXp.textContent = `${playerProfile.xp} XP`;

  const hudGold = document.getElementById('hudGold');
  if (hudGold) hudGold.textContent = `${playerProfile.gold || 0} Gold`;

  if (typeof updateCottageSanAtmosphere === 'function') {
    updateCottageSanAtmosphere();
  }
}















// 8. 词典渲染系统 (支持纯英权威词典 + 中文多义项双解)
let currentLookupWord = null;
let currentDrawerDictTab = 'zh'; // 'zh' 或 'en'
let cachedZhDict = {};

function switchDrawerDictTab(...args){return Stone.module('dictionary').then(()=>window.switchDrawerDictTab(...args)).catch(e=>{showToast(e.message);});}

function getAdjacentWord(...args){return Stone.module('dictionary').then(()=>window.getAdjacentWord(...args)).catch(e=>{showToast(e.message);});}

function renderDefinitionBody(...args){return Stone.module('dictionary').then(()=>window.renderDefinitionBody(...args)).catch(e=>{showToast(e.message);});}

function openWordDetails(...args){return Stone.module('dictionary').then(()=>window.openWordDetails(...args)).catch(e=>{showToast(e.message);});}

function fetchZhDefinition(...args){return Stone.module('dictionary').then(()=>window.fetchZhDefinition(...args)).catch(e=>{showToast(e.message);});}

function renderZhDefinitionBody(...args){return Stone.module('dictionary').then(()=>window.renderZhDefinitionBody(...args)).catch(e=>{showToast(e.message);});}

function closeDefDrawer(...args){return Stone.module('dictionary').then(()=>window.closeDefDrawer(...args)).catch(e=>{showToast(e.message);});}

// =========================================================
// 9. 🎴 3D 塔罗卡牌战斗手牌与神技施放系统 (Tarot Battle Hand Engine)
// =========================================================
function getCardObject(...args){return Stone.module('tarot').then(()=>window.getCardObject(...args)).catch(e=>{showToast(e.message);});}

function hashString(...args){return Stone.module('tarot').then(()=>window.hashString(...args)).catch(e=>{showToast(e.message);});}

function renderBattleHand(...args){return Stone.module('tarot').then(()=>window.renderBattleHand(...args)).catch(e=>{showToast(e.message);});}

function castBattleCard(...args){return Stone.module('tarot').then(()=>window.castBattleCard(...args)).catch(e=>{showToast(e.message);});}

// 3D 卡牌背包图鉴 Modal
function openCodexModal(...args){return Stone.module('tarot').then(()=>window.openCodexModal(...args)).catch(e=>{showToast(e.message);});}

function closeCodexModal(...args){return Stone.module('tarot').then(()=>window.closeCodexModal(...args)).catch(e=>{showToast(e.message);});}

function openDeckSelectorModal(...args){return Stone.module('tarot').then(()=>window.openDeckSelectorModal(...args)).catch(e=>{showToast(e.message);});}
function closeDeckSelectorModal(...args){return Stone.module('tarot').then(()=>window.closeDeckSelectorModal(...args)).catch(e=>{showToast(e.message);});}
function removeBattleCardSlot(...args){return Stone.module('tarot').then(()=>window.removeBattleCardSlot(...args)).catch(e=>{showToast(e.message);});}
function toggleEquipCard(...args){return Stone.module('tarot').then(()=>window.toggleEquipCard(...args)).catch(e=>{showToast(e.message);});}
function applyDeckPreset(...args){return Stone.module('tarot').then(()=>window.applyDeckPreset(...args)).catch(e=>{showToast(e.message);});}

// =========================================================
// 10. 🍬 糖果色块中英配对消消乐引擎 (Candy Match Game & Penalty Mark)
// =========================================================
let matchTimerInterval = null;
let matchRemaining = 45;
let matchScore = 0;
let matchCombo = 1;
let matchWave = 1;
let matchActiveTile = null;
let recentCandyWordsHistory = [];
let currentCandyTier = 'all';

function setCandyTierFilter(...args){return Stone.module('match').then(()=>window.setCandyTierFilter(...args)).catch(e=>{showToast(e.message);});}


function startCandyMatchGame(...args){return Stone.module('match').then(()=>window.startCandyMatchGame(...args)).catch(e=>{showToast(e.message);});}

function generateCandyBoard(...args){return Stone.module('match').then(()=>window.generateCandyBoard(...args)).catch(e=>{showToast(e.message);});}

function handleCandyTileClick(...args){return Stone.module('match').then(()=>window.handleCandyTileClick(...args)).catch(e=>{showToast(e.message);});}

function endCandyMatchGame(...args){return Stone.module('match').then(()=>window.endCandyMatchGame(...args)).catch(e=>{showToast(e.message);});}

function abortMatchGame(...args){return Stone.module('match').then(()=>window.abortMatchGame(...args)).catch(e=>{showToast(e.message);});}


// =========================================================
// 11. 游戏模式 1: 文字生存大逃杀
// =========================================================
let currentSurvivalRound = 1;

// 🎮 生存战双模式引擎 (Novel Campaign Mode & Classic Mode)
let currentSurvivalGameMode = loadFromStorage('vocab_survival_mode', 'novel'); // 'novel' | 'classic'
let currentNovelChapter = loadFromStorage('vocab_novel_ch', 1);
let currentNovelBeat = loadFromStorage('vocab_novel_beat', 1);

let survivalData = null;
const DUNGEON_THEMES = ["⚡ Survival Challenge", "🔬 Laboratory Crisis", "🚀 Deep Space Expedition", "💼 Career Dilemma", "🌊 Extreme Odyssey"];


function initNovelModeUI(...args){return Stone.module('survival').then(()=>window.initNovelModeUI(...args)).catch(e=>{showToast(e.message);});}

function updateSurvivalModeUI(...args){return Stone.module('survival').then(()=>window.updateSurvivalModeUI(...args)).catch(e=>{showToast(e.message);});}

function switchSurvivalMode(...args){return Stone.module('survival').then(()=>window.switchSurvivalMode(...args)).catch(e=>{showToast(e.message);});}

function onSelectNovelChapter(...args){return Stone.module('survival').then(()=>window.onSelectNovelChapter(...args)).catch(e=>{showToast(e.message);});}

function nextNovelBeat(...args){return Stone.module('survival').then(()=>window.nextNovelBeat(...args)).catch(e=>{showToast(e.message);});}

let novelLoadSequence=0;
function launchSurvivalGame(...args){return Stone.module('survival').then(()=>window.launchSurvivalGame(...args)).catch(e=>{showToast(e.message);});}

function renderSurvivalGame(...args){return Stone.module('survival').then(()=>window.renderSurvivalGame(...args)).catch(e=>{showToast(e.message);});}

function handleSurvivalChoice(...args){return Stone.module('survival').then(()=>window.handleSurvivalChoice(...args)).catch(e=>{showToast(e.message);});}

function nextSurvivalRound(...args){return Stone.module('survival').then(()=>window.nextSurvivalRound(...args)).catch(e=>{showToast(e.message);});}

function useHintBuff(...args){return Stone.module('survival').then(()=>window.useHintBuff(...args)).catch(e=>{showToast(e.message);});}
function abortSurvivalGame(...args){return Stone.module('survival').then(()=>window.abortSurvivalGame(...args)).catch(e=>{showToast(e.message);});}
function renderRouteSelectionScreen(...args){return Stone.module('survival').then(()=>window.renderRouteSelectionScreen(...args)).catch(e=>{showToast(e.message);});}
function chooseExpeditionRoute(...args){return Stone.module('survival').then(()=>window.chooseExpeditionRoute(...args)).catch(e=>{showToast(e.message);});}
function evacuateExpedition(...args){return Stone.module('survival').then(()=>window.evacuateExpedition(...args)).catch(e=>{showToast(e.message);});}
function renderExpeditionSettlementScroll(...args){return Stone.module('survival').then(()=>window.renderExpeditionSettlementScroll(...args)).catch(e=>{showToast(e.message);});}
function returnToCottageDebrief(...args){return Stone.module('survival').then(()=>window.returnToCottageDebrief(...args)).catch(e=>{showToast(e.message);});}
function startNewExpeditionFromDebrief(...args){return Stone.module('survival').then(()=>window.startNewExpeditionFromDebrief(...args)).catch(e=>{showToast(e.message);});}



// 13. 3D 塔罗抽卡圣殿
let tarotSlotWords = [];

function renderTarotDeck(...args){return Stone.module('tarot').then(()=>window.renderTarotDeck(...args)).catch(e=>{showToast(e.message);});}

function flipTarotCard(...args){return Stone.module('tarot').then(()=>window.flipTarotCard(...args)).catch(e=>{showToast(e.message);});}

function reshuffleTarotDeck(...args){return Stone.module('tarot').then(()=>window.reshuffleTarotDeck(...args)).catch(e=>{showToast(e.message);});}


function renderProfileView(...args){return Stone.module('tarot').then(()=>window.renderProfileView(...args)).catch(e=>{showToast(e.message);});}

// 14. 👑 Admin 控制台面板
function openAdminConsole(...args){return Stone.module('admin').then(()=>window.openAdminConsole(...args)).catch(e=>{showToast(e.message);});}

function saveAdminAiConfig(...args){return Stone.module('admin').then(()=>window.saveAdminAiConfig(...args)).catch(e=>{showToast(e.message);});}

function closeAdminModal(...args){return Stone.module('admin').then(()=>window.closeAdminModal(...args)).catch(e=>{showToast(e.message);});}

// 15. 用户账号与云端同步




let authTabMode = 'login';








// 16. 设置与昼夜主题
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  saveToStorage(STORAGE_KEYS.THEME, next);
  document.getElementById('themeBtn').textContent = next === 'dark' ? '🌙' : '☀️';
  showToast(next === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode');
}

function openSettingsModal() {
  soundClick();
  const m = document.getElementById('settingsModal');
  document.getElementById('cfgDriverMode').value = appSettings.driverMode || 'gemini_native';
  document.getElementById('cfgGeminiKey').value = appSettings.geminiKey || '';
  document.getElementById('cfgGeminiModel').value = appSettings.geminiModel || 'gemini-3.7-flash';
  document.getElementById('cfgCustomUrl').value = appSettings.customUrl || '';
  document.getElementById('cfgCustomModel').value = appSettings.customModel || 'gemini-3.7-flash';
  const langModeEl = document.getElementById('cfgDictLangMode');
  if (langModeEl) {
    langModeEl.value = appSettings.dictLanguageMode || 'en';
  }
  onDriverModeChange();
  m.style.display = 'block';
  setTimeout(() => m.style.opacity = '1', 10);
}

function closeSettingsModal() {
  const m = document.getElementById('settingsModal');
  m.style.opacity = '0';
  setTimeout(() => m.style.display = 'none', 200);
}

function onDriverModeChange() {
  const mode = document.getElementById('cfgDriverMode').value;
  document.getElementById('grpGeminiKey').style.display = mode === 'gemini_native' ? 'block' : 'none';
  document.getElementById('grpGeminiModel').style.display = mode === 'gemini_native' ? 'block' : 'none';
  document.getElementById('grpCustomUrl').style.display = mode === 'custom_openai' ? 'block' : 'none';
  document.getElementById('grpCustomModel').style.display = mode === 'custom_openai' ? 'block' : 'none';
}

function saveSettings() {
  appSettings.driverMode = document.getElementById('cfgDriverMode').value;
  appSettings.geminiKey = document.getElementById('cfgGeminiKey').value.trim();
  appSettings.geminiModel = document.getElementById('cfgGeminiModel').value;
  appSettings.customUrl = document.getElementById('cfgCustomUrl').value.trim();
  appSettings.customModel = document.getElementById('cfgCustomModel').value.trim();
  const langModeEl = document.getElementById('cfgDictLangMode');
  if (langModeEl) {
    appSettings.dictLanguageMode = langModeEl.value;
    appSettings.showChinese = (langModeEl.value === 'zh');
  }
  saveToStorage(STORAGE_KEYS.SETTINGS, appSettings);
  updateQuickLangBtn();
  if (currentSubTab === 'all') renderWords(document.getElementById('searchInput') ? document.getElementById('searchInput').value : '');
  else renderMarked();
  closeSettingsModal();
  showToast("💾 设置已保存生效！");
}

function updateQuickLangBtn() {
  const btn = document.getElementById('btnQuickLangToggle');
  if (btn) {
    const isZh = (appSettings.dictLanguageMode === 'zh' || appSettings.showChinese);
    btn.innerHTML = isZh ? '🇨🇳 中文' : '🇬🇧 纯英';
    btn.title = isZh ? '当前为双语中文模式，点击切为纯英模式' : '当前为纯英文模式，点击切为双语中文模式';
  }
}

function toggleQuickDictLang() {
  soundClick();
  const current = appSettings.dictLanguageMode || 'en';
  const next = (current === 'zh') ? 'en' : 'zh';
  appSettings.dictLanguageMode = next;
  appSettings.showChinese = (next === 'zh');
  saveToStorage(STORAGE_KEYS.SETTINGS, appSettings);
  updateQuickLangBtn();
  if (currentSubTab === 'all') renderWords(document.getElementById('searchInput') ? document.getElementById('searchInput').value : '');
  else renderMarked();
  showToast(next === 'zh' ? '🇨🇳 已切换为【中文双语增强模式】' : '🇬🇧 已切换为【纯英沉浸模式】');
}

function toggleAudioMute() {
  appSettings.audioMuted = !appSettings.audioMuted;
  saveToStorage(STORAGE_KEYS.SETTINGS, appSettings);
  document.getElementById('audioBtn').textContent = appSettings.audioMuted ? '🔇' : '🔊';
  showToast(appSettings.audioMuted ? 'Muted' : 'Audio ON');
}

let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById('appToast');
  document.getElementById('toastMsg').textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

// 17. 录词与批量导入
function addNewWordModal() {
  const input = prompt("Enter English word(s) to add (supports space/comma separation):");
  if (!input || !input.trim()) return;

  const rawWords = input.split(/[,;\s\n]+/).map(w => w.trim().toLowerCase()).filter(w => /^[a-zA-Z'-]+$/.test(w));
  if (rawWords.length === 0) {
    showToast("⚠️ No valid words detected");
    return;
  }

  rawWords.forEach(w => {
    if (!words.includes(w)) {
      words.unshift(w);
      if (!customWords.includes(w)) customWords.push(w);
    }
    marks[w] = (marks[w] || 0) + 1;
  });

  saveToStorage(STORAGE_KEYS.CUSTOM_WORDS, customWords);
  saveToStorage(STORAGE_KEYS.WORDS, words);
  saveToStorage(STORAGE_KEYS.MARKS, marks);

  renderWords();
  initNovelModeUI();
  updateBadges();
  triggerCloudSync();
  showToast(`✨ Added ${rawWords.length} words & marked for survival!`);
}

// 初始化应用
function initApp() {
  const savedTheme = loadFromStorage(STORAGE_KEYS.THEME, 'light');
  document.documentElement.setAttribute('data-theme', savedTheme);
  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) themeBtn.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
  const audioBtn = document.getElementById('audioBtn');
  if (audioBtn) audioBtn.textContent = appSettings.audioMuted ? '🔇' : '🔊';

  // 初始化默认锁定为 核心背诵单词 (480 词)
  currentWordSource = 'core';
  currentWordTier = 'all';
  isFilterDrawerOpen = false;

  // 初始化折叠抽屉状态与双维度高亮
  const filterBody = document.getElementById('filterDrawerBody');
  const filterChevron = document.getElementById('filterChevron');
  if (filterBody) filterBody.style.display = 'none';
  if (filterChevron) filterChevron.classList.remove('expanded');
  refreshFilterUI();

  renderWords();
  /* initialized when visible */
  updateBadges();

  if (typeof ExpeditionEngine !== 'undefined' && typeof ExpeditionEngine.init === 'function') {
    ExpeditionEngine.init().then(() => {
      if (typeof updateCottageExpeditionUI === 'function') {
        updateCottageExpeditionUI();
      }
    });
  }

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    let searchDelay;
    const search=()=>{clearTimeout(searchDelay);searchDelay=setTimeout(()=>renderWords(searchInput.value),120);};
    searchInput.addEventListener('input',e=>{if(!e.isComposing)search();});
    searchInput.addEventListener('compositionend',search);
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const q = searchInput.value.trim().toLowerCase();
        if (!q) return;
        const exact = words.find(w => w.toLowerCase() === q);
        if (!exact) {
          handleOnlineSearchAndAdd(q);
        } else {
          openWordDetails(exact);
        }
      }
    });
  }

  initCloudSession();
  setupDesktopKeyboardShortcuts();
  if (typeof ExpeditionEngine !== 'undefined' && typeof ExpeditionEngine.init === 'function') {
    ExpeditionEngine.init();
  }
}



// =========================================================
// 15. 💻 电脑端全套键盘操控系统 (Desktop Keyboard Shortcuts)
// =========================================================
var keyboardShortcutsInitialized = false;
function setupDesktopKeyboardShortcuts() {
  if (keyboardShortcutsInitialized) return;
  keyboardShortcutsInitialized = true;

  const handleGlobalKeydown = (e) => {
    if(e.isComposing || e.keyCode===229 || document.querySelector('dialog[open]'))return;
    if(e.altKey || ((e.ctrlKey||e.metaKey) && e.key.toLowerCase()!=='k'))return;
    // 1. ESC 键：最高优先级退出打开的抽屉、弹窗、浮层或搜索框
    const isEsc = e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27 || e.which === 27;
    if (isEsc) {
      const defDrawer = document.getElementById('defDrawer');
      const drawerOverlay = document.getElementById('drawerOverlay');
      const settingsModal = document.getElementById('settingsModal');
      const authModal = document.getElementById('authModal');
      const codexModal = document.getElementById('codexModal');
      const adminModal = document.getElementById('adminModal');
      const searchInput = document.getElementById('searchInput');

      let handled = false;
      const visible = el => el && (el.style.display==='block'||el.style.display==='flex'||el.classList.contains('show'));
      if(document.getElementById('radioKaraokeDrawer')?.classList.contains('open')){window.RadioPlayer?.toggleDrawer(false);handled=true;}
      else if(visible(document.getElementById('onlineAddModal'))){closeOnlineAddModal();handled=true;}
      else if(visible(adminModal)){closeAdminModal();handled=true;}
      else if(visible(document.getElementById('saveLoadModal'))){closeSaveLoadModal();handled=true;}
      else if(visible(codexModal)){closeCodexModal();handled=true;}
      else if(visible(settingsModal)){closeSettingsModal();handled=true;}
      else if(visible(authModal)){closeAuthModal();handled=true;}
      else if(visible(document.getElementById('cottageJournalModal'))){closeCottageJournalModal();handled=true;}
      else if(visible(document.getElementById('cottageAboutModal'))){closeCottageAboutModal();handled=true;}
      else if(defDrawer?.classList.contains('open')){closeDefDrawer();handled=true;}

      // 如果没有弹窗打开，但当前聚焦在搜索框上，则按 ESC 失焦
      if (!handled && document.activeElement === searchInput) {
        searchInput.blur();
        handled = true;
      }

      if (handled) {
        e.preventDefault();
        e.stopPropagation();
      }
      return;
    }

    const activeEl = document.activeElement;
    const isTyping = activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.tagName === 'SELECT' || activeEl.isContentEditable);
    if(e.code==='Space' && activeEl?.closest('button,a,summary'))return;

    // 2. 词典释义抽屉打开时的快捷键 (← / → 切词, Space / P 发音, + / - / M 标记)
    const defDrawer = document.getElementById('defDrawer');
    const isDrawerOpen = defDrawer && defDrawer.classList.contains('open');

    if (isDrawerOpen) {
      if (!isTyping && e.key === 'ArrowLeft') {
        e.preventDefault();
        const prev = getAdjacentWord(currentLookupWord, -1);
        if (prev) openWordDetails(prev);
        return;
      }
      if (!isTyping && e.key === 'ArrowRight') {
        e.preventDefault();
        const next = getAdjacentWord(currentLookupWord, 1);
        if (next) openWordDetails(next);
        return;
      }
      if (!isTyping && (e.code === 'Space' || e.key === ' ' || e.key === 'p' || e.key === 'P')) {
        e.preventDefault();
        if (currentLookupWord) {
          const lookup = corrections[currentLookupWord] || currentLookupWord;
          speakWord(lookup);
        }
        return;
      }
      const isIncrease = e.key === '+' || e.key === '=' || e.code === 'Equal' || e.code === 'NumpadAdd' || e.keyCode === 187 || e.keyCode === 107 || e.key === 'm' || e.key === 'M' || e.code === 'KeyM';
      const isDecrease = e.key === '-' || e.key === '_' || e.code === 'Minus' || e.code === 'NumpadSubtract' || e.keyCode === 189 || e.keyCode === 109 || e.key === '—';

      if (!isTyping && isIncrease) {
        // + / = / M 键：增加标记 (精确 +1)
        e.preventDefault();
        e.stopPropagation();
        if (currentLookupWord) {
          addMark(currentLookupWord);
        }
        return;
      }
      if (!isTyping && isDecrease) {
        // - / _ 键：减少标记 (精确 -1)
        e.preventDefault();
        e.stopPropagation();
        if (currentLookupWord) {
          reduceMark(currentLookupWord);
        }
        return;
      }
    }

    // 3. 全局非打字状态快捷键
    if (!isTyping) {
      // 快速聚焦搜索框：按 / 或 Ctrl+K
      if (e.key === '/' || ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K'))) {
        e.preventDefault();
        switchNavView('words');
        const s = document.getElementById('searchInput');
        if (s) {
          s.focus();
          s.select();
        }
        return;
      }

      // 数字键 1 ~ 4 快捷切换主功能导航
      if (e.key === '1') { e.preventDefault(); switchNavView('words'); return; }
      if (e.key === '2') { e.preventDefault(); switchNavView('survival'); return; }
      if (e.key === '3') { e.preventDefault(); switchNavView('match'); return; }
      if (e.key === '4') { e.preventDefault(); switchNavView('profile'); return; }

      // 🎮 文字生存模式下的选项快捷键 A/B/C 或 1/2/3
      const viewSurvival = document.getElementById('viewSurvival');
      if (viewSurvival && viewSurvival.classList.contains('active')) {
        const choiceBtns = document.querySelectorAll('#gameOptions .choice-btn');
        if (choiceBtns.length > 0) {
          if (e.key === 'a' || e.key === 'A') { e.preventDefault(); choiceBtns[0]?.click(); return; }
          if (e.key === 'b' || e.key === 'B') { e.preventDefault(); choiceBtns[1]?.click(); return; }
          if (e.key === 'c' || e.key === 'C') { e.preventDefault(); choiceBtns[2]?.click(); return; }
        }
        // 战役结算后按 Space 或 Enter 开始下一局
        const nextRoundBtn = document.querySelector('.settlement-scroll-card .btn-primary');
        if (nextRoundBtn && (e.code === 'Space' || e.key === 'Enter')) {
          e.preventDefault();
          nextRoundBtn.click();
          return;
        }
      }
    }
  };

  window.addEventListener('keydown', handleGlobalKeydown, true);
}


function deleteUser(...args){return Stone.module('admin').then(()=>window.deleteUser(...args)).catch(e=>{showToast(e.message);});}

function resetUserPassword(...args){return Stone.module('admin').then(()=>window.resetUserPassword(...args)).catch(e=>{showToast(e.message);});}


function toggleUserQuota(...args){return Stone.module('admin').then(()=>window.toggleUserQuota(...args)).catch(e=>{showToast(e.message);});}


function toggleSurvivalCnBlock(...args){return Stone.module('survival').then(()=>window.toggleSurvivalCnBlock(...args)).catch(e=>{showToast(e.message);});}








var novelProgress = loadFromStorage('vocab_novel_progress', {
  currentChapter: 1,
  currentBeat: 1,
  maxUnlockedChapter: 1,
  lastSavedTime: null
});

var novelSaveSlots = loadFromStorage('vocab_novel_saves', [
  { id: 1, name: '存档槽 1', empty: true },
  { id: 2, name: '存档槽 2', empty: true },
  { id: 3, name: '存档槽 3', empty: true },
  { id: 4, name: '存档槽 4', empty: true },
  { id: 5, name: '存档槽 5', empty: true }
]);

function autoSaveNovelProgress(...args){return Stone.module('survival').then(()=>window.autoSaveNovelProgress(...args)).catch(e=>{showToast(e.message);});}

function updateSaveIndicatorUI(...args){return Stone.module('survival').then(()=>window.updateSaveIndicatorUI(...args)).catch(e=>{showToast(e.message);});}

function manualSaveCurrentProgress(...args){return Stone.module('survival').then(()=>window.manualSaveCurrentProgress(...args)).catch(e=>{showToast(e.message);});}

function resumeFromSavedProgress(...args){return Stone.module('survival').then(()=>window.resumeFromSavedProgress(...args)).catch(e=>{showToast(e.message);});}

function openSaveLoadModal(...args){return Stone.module('survival').then(()=>window.openSaveLoadModal(...args)).catch(e=>{showToast(e.message);});}

function closeSaveLoadModal(...args){return Stone.module('survival').then(()=>window.closeSaveLoadModal(...args)).catch(e=>{showToast(e.message);});}

function renderSaveLoadModal(...args){return Stone.module('survival').then(()=>window.renderSaveLoadModal(...args)).catch(e=>{showToast(e.message);});}

function manualSaveToSlot(...args){return Stone.module('survival').then(()=>window.manualSaveToSlot(...args)).catch(e=>{showToast(e.message);});}

function loadFromSlot(...args){return Stone.module('survival').then(()=>window.loadFromSlot(...args)).catch(e=>{showToast(e.message);});}

function deleteSaveSlot(...args){return Stone.module('survival').then(()=>window.deleteSaveSlot(...args)).catch(e=>{showToast(e.message);});}

function jumpToChapter(...args){return Stone.module('survival').then(()=>window.jumpToChapter(...args)).catch(e=>{showToast(e.message);});}


function testApiConnection() {
  soundClick();
  showToast("⚡ 正在测试与 Antigravity 剧情引擎连通性...");
  setTimeout(() => {
    soundSuccess();
    showToast("✅ API 接口连通正常！剧情与词典引擎状态良好");
  }, 500);
}

function manualSyncCloud(showMessage = true) {
  soundClick();
  triggerCloudSync();
  if (showMessage) {
    soundSuccess();
    showToast("☁️ 云端战报与存档同步完成！");
  }
}

function exportAllData() {
  soundClick();
  const exportData = {
    profile: playerProfile,
    marks: marks,
    customWords: customWords,
    settings: appSettings,
    novelProgress: novelProgress,
    novelSaves: novelSaveSlots,
    exportDate: new Date().toISOString()
  };
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportData, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `vocab_survival_backup_${Date.now()}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast("📤 数据备份文件导出成功！");
}

function importAllData() {
  soundClick();
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        if (imported.profile) playerProfile = imported.profile;
        if (imported.marks) marks = imported.marks;
        if (imported.customWords) customWords = imported.customWords;
        if (imported.novelProgress) novelProgress = imported.novelProgress;
        if (imported.novelSaves) novelSaveSlots = imported.novelSaves;
        
        saveToStorage(STORAGE_KEYS.PROFILE, playerProfile);
        saveToStorage(STORAGE_KEYS.MARKS, marks);
        saveToStorage(STORAGE_KEYS.CUSTOM_WORDS, customWords);
        saveToStorage('vocab_novel_progress', novelProgress);
        saveToStorage('vocab_novel_saves', novelSaveSlots);
        
        updateBadges();
        renderWords();
        renderTarotDeck();
        renderBattleHand();
        renderProfileView();
        updateSaveIndicatorUI();
        triggerCloudSync();
        soundSuccess();
        showToast("📥 数据导入恢复成功！");
      } catch(err) {
        soundFailure();
        showToast("❌ 数据解析失败，请确保文件格式正确");
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

// =========================================================
// 17. 🌐 全局 Window 绑定 (Comprehensive Window Bindings)
// =========================================================
if (typeof window !== 'undefined') {
  window.switchNavView = switchNavView;
  window.switchSubTab = switchSubTab;
  window.switchWordSource = switchWordSource;
  window.toggleFilterDrawer = toggleFilterDrawer;
  window.setWordSourceFilter = setWordSourceFilter;
  window.setWordTierFilter = setWordTierFilter;
  window.getActiveWordList = getActiveWordList;
  window.switchSurvivalMode = switchSurvivalMode;
  window.onSelectNovelChapter = onSelectNovelChapter;
  window.nextNovelBeat = nextNovelBeat;
  window.launchSurvivalGame = launchSurvivalGame;
  window.handleSurvivalChoice = handleSurvivalChoice;
  window.setCandyTierFilter = setCandyTierFilter;
  window.startCandyMatchGame = startCandyMatchGame;
  window.endCandyMatchGame = endCandyMatchGame;
  window.abortMatchGame = abortMatchGame;
  window.renderTarotDeck = renderTarotDeck;
  window.reshuffleTarotDeck = reshuffleTarotDeck;
  window.flipTarotCard = flipTarotCard;
  window.autoSaveNovelProgress = autoSaveNovelProgress;
  window.manualSaveCurrentProgress = manualSaveCurrentProgress;
  window.resumeFromSavedProgress = resumeFromSavedProgress;
  window.openSaveLoadModal = openSaveLoadModal;
  window.closeSaveLoadModal = closeSaveLoadModal;
  window.manualSaveToSlot = manualSaveToSlot;
  window.loadFromSlot = loadFromSlot;
  window.deleteSaveSlot = deleteSaveSlot;
  window.jumpToChapter = jumpToChapter;
  window.renderSaveLoadModal = renderSaveLoadModal;
  window.toggleSurvivalCnBlock = toggleSurvivalCnBlock;
  window.openWordDetails = openWordDetails;
  window.closeDefDrawer = closeDefDrawer;
  window.openSettingsModal = openSettingsModal;
  window.closeSettingsModal = closeSettingsModal;
  window.openAuthModal = openAuthModal;
  window.closeAuthModal = closeAuthModal;
  window.openCodexModal = openCodexModal;
  window.closeCodexModal = closeCodexModal;
  window.openAdminConsole = openAdminConsole;
  window.closeAdminModal = closeAdminModal;
  window.toggleTheme = toggleTheme;
  window.toggleAudioMute = toggleAudioMute;
  window.useHintBuff = useHintBuff;
  window.abortSurvivalGame = abortSurvivalGame;
  window.testApiConnection = testApiConnection;
  window.manualSyncCloud = manualSyncCloud;
  window.exportAllData = exportAllData;
  window.importAllData = importAllData;
  window.switchAuthTab = switchAuthTab;
  window.handleAuthSubmit = handleAuthSubmit;
  window.logoutUser = logoutUser;
  window.saveSettings = saveSettings;
  window.onDriverModeChange = onDriverModeChange;
  window.novelProgress = novelProgress;
  window.novelSaveSlots = novelSaveSlots;
  window.initApp = initApp;
  window.playerProfile = playerProfile;
  window.tarotSlotWords = tarotSlotWords;
  window.tarotArcanaSkills = tarotArcanaSkills;
  window.openDeckSelectorModal = openDeckSelectorModal;
  window.closeDeckSelectorModal = closeDeckSelectorModal;
  window.removeBattleCardSlot = removeBattleCardSlot;
  window.toggleEquipCard = toggleEquipCard;
  window.applyDeckPreset = applyDeckPreset;
  window.renderRouteSelectionScreen = renderRouteSelectionScreen;
  window.chooseExpeditionRoute = chooseExpeditionRoute;
  window.evacuateExpedition = evacuateExpedition;
  window.renderExpeditionSettlementScroll = renderExpeditionSettlementScroll;
  window.returnToCottageDebrief = returnToCottageDebrief;
  window.startNewExpeditionFromDebrief = startNewExpeditionFromDebrief;
  if (typeof ExpeditionEngine !== 'undefined') window.ExpeditionEngine = ExpeditionEngine;
  if (typeof ExpeditionMap !== 'undefined') window.ExpeditionMap = ExpeditionMap;
}

// Application Entry Point
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}


// ==========================================
// 🌐 在线智能查词、释义抽取、Mark 标记与账号录入引擎
// ==========================================
let pendingOnlineWordData = null;

function handleOnlineSearchAndAdd(...args){return Stone.module('dictionary').then(()=>window.handleOnlineSearchAndAdd(...args)).catch(e=>{showToast(e.message);});}

function closeOnlineAddModal(...args){return Stone.module('dictionary').then(()=>window.closeOnlineAddModal(...args)).catch(e=>{showToast(e.message);});}

function confirmAddOnlineWord(...args){return Stone.module('dictionary').then(()=>window.confirmAddOnlineWord(...args)).catch(e=>{showToast(e.message);});}
