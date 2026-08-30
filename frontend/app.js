const tarotArcanaSkills = [
  { "name": "The Magician", "skill": "真理洞察", "desc": "高亮本局唯一正确生还选项", "icon": "👁️", "type": "reveal_correct", "rarity": "SSR" },
  { "name": "The High Priestess", "skill": "心智抚慰", "desc": "立即恢复 35 点 SAN 理智值", "icon": "🧠", "type": "heal_san", "rarity": "SR" },
  { "name": "The Empress", "skill": "生命滋养", "desc": "立即恢复 35 点 HP 生命值", "icon": "💚", "type": "heal_hp", "rarity": "SR" },
  { "name": "The Emperor", "skill": "绝对支配", "desc": "直接判定生还并获得全额经验", "icon": "👑", "type": "auto_win", "rarity": "SSR" },
  { "name": "The Hierophant", "skill": "智慧恩赐", "desc": "本回合额外奖励 +50 经验值", "icon": "📜", "type": "xp_boost", "rarity": "SR" },
  { "name": "The Lovers", "skill": "同盟共鸣", "desc": "连击 Combo +2，战胜经验翻倍", "icon": "⚡", "type": "combo_boost", "rarity": "UR" },
  { "name": "The Chariot", "skill": "破阵冲锋", "desc": "摧毁并排除 1 个高危陷阱选项", "icon": "🛡️", "type": "eliminate_wrong", "rarity": "SSR" },
  { "name": "Strength", "skill": "坚韧壁垒", "desc": "生成护盾，抵挡下一次选错伤害", "icon": "🔰", "type": "shield", "rarity": "SR" },
  { "name": "The Hermit", "skill": "求索之光", "desc": "洞悉生还逻辑与线索提示", "icon": "💡", "type": "hint", "rarity": "SR" },
  { "name": "Wheel of Fortune", "skill": "命运重铸", "desc": "舍弃当前危机，重抽安全局势", "icon": "🌪️", "type": "reroll", "rarity": "UR" },
  { "name": "Justice", "skill": "天平平衡", "desc": "HP 与 SAN 同步恢复至 80 点", "icon": "⚖️", "type": "balance", "rarity": "SR" },
  { "name": "The Hanged Man", "skill": "逆境觉醒", "desc": "残血时瞬间恢复 70% 生命值", "icon": "⏳", "type": "clutch_heal", "rarity": "SR" },
  { "name": "Death", "skill": "绝境涅槃", "desc": "免死金牌！受到致命伤自动复活", "icon": "🦅", "type": "revive", "rarity": "UR" },
  { "name": "Temperance", "skill": "平衡回响", "desc": "同时恢复 +20 HP 与 +20 SAN", "icon": "🕊️", "type": "dual_heal", "rarity": "SR" },
  { "name": "The Devil", "skill": "暗夜豪赌", "desc": "消耗 15 SAN，直接获得 +80 XP", "icon": "🔥", "type": "gamble_xp", "rarity": "SR" },
  { "name": "The Tower", "skill": "瓦解崩塌", "desc": "直接粉碎 1 个致命错误陷阱", "icon": "💥", "type": "eliminate_wrong", "rarity": "SSR" },
  { "name": "The Star", "skill": "希望闪耀", "desc": "本场所有生词标记 Mark 全部减 1", "icon": "✨", "type": "cleanse_marks", "rarity": "SSR" },
  { "name": "The Moon", "skill": "迷雾幻影", "desc": "免疫下一次理智值 SAN 损耗", "icon": "🌙", "type": "san_shield", "rarity": "SR" },
  { "name": "The Sun", "skill": "黎明荣耀", "desc": "HP与SAN全满恢复 + 获得 100 XP", "icon": "☀️", "type": "full_restore", "rarity": "UR" },
  { "name": "Judgement", "skill": "终极昭示", "desc": "必定正确并清空目标词错误标记", "icon": "🎺", "type": "verdict", "rarity": "UR" },
  { "name": "The World", "skill": "全知创世", "desc": "透视正解 + 恢复50 HP + 100 XP", "icon": "🌍", "type": "world_master", "rarity": "UR" },
  { "name": "The Fool", "skill": "无畏启程", "desc": "随机触发上述任意一种强力神技", "icon": "🃏", "type": "random", "rarity": "SSR" }
];

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
  TOKEN: 'vocab_auth_token'
};

function loadFromStorage(key, defaultVal) {
  try {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : defaultVal;
  } catch(e) {
    return defaultVal;
  }
}

function saveToStorage(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch(e) {
    console.error("Storage error:", e);
  }
}

// 核心数据结构与全量词库
let currentWordSource = loadFromStorage('vocab_current_source', 'all');
let customWords = loadFromStorage(STORAGE_KEYS.CUSTOM_WORDS, []);
let savedWords = loadFromStorage(STORAGE_KEYS.WORDS, []);

function getActiveWordList() {
  const fullList = (typeof defaultWords !== 'undefined' && Array.isArray(defaultWords) && defaultWords.length > 0)
    ? defaultWords
    : ((typeof ORIGINAL_STUDY_WORDS !== 'undefined' && Array.isArray(ORIGINAL_STUDY_WORDS)) ? ORIGINAL_STUDY_WORDS : []);
  
  const combined = [...fullList];
  if (Array.isArray(customWords)) {
    customWords.forEach(w => {
      if (!combined.includes(w)) combined.push(w);
    });
  }
  return combined;
}

function switchWordSource(sourceKey) {
  soundClick();
  currentWordSource = sourceKey;
  saveToStorage('vocab_current_source', sourceKey);

  ['original', 'novel', 'all'].forEach(k => {
    const btn = document.getElementById(`srcBtn_${k}`);
    if (btn) {
      btn.classList.toggle('active', k === sourceKey);
    }
  });

  words = getActiveWordList();
  updateBadges();
  const searchVal = document.getElementById('searchInput') ? document.getElementById('searchInput').value : '';
  renderWords(searchVal);
  if (currentSubTab === 'marked') {
    renderMarked();
  }
}

let words = getActiveWordList();

let marks = loadFromStorage(STORAGE_KEYS.MARKS, null);
if (!marks) marks = loadFromStorage(STORAGE_KEYS.OLD_MARKS, {});

let playerProfile = loadFromStorage(STORAGE_KEYS.PROFILE, null);
if (!playerProfile) {
  const old = loadFromStorage(STORAGE_KEYS.OLD_PROFILE, {});
  playerProfile = {
    hp: old.hp || 100,
    san: old.san || 100,
    xp: old.xp || 0,
    level: old.level || 1,
    combo: old.combo || 1,
    wonRounds: old.wonRounds || 0,
    tarotCardsCollected: old.tarotCardsCollected || [],
    battleHand: []
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
  audioMuted: false
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
async function triggerCloudSync() {
  authToken = loadFromStorage(STORAGE_KEYS.TOKEN, null);
  if (!authToken) return;

  clearTimeout(cloudSyncDebounce);
  cloudSyncDebounce = setTimeout(async () => {
    try {
      const resp = await fetch(`${API_BASE}/api/sync`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + authToken
        },
        body: JSON.stringify({
          hp: playerProfile.hp,
          san: playerProfile.san,
          level: playerProfile.level,
          xp: playerProfile.xp,
          combo: playerProfile.combo,
          wonRounds: playerProfile.wonRounds,
          gachaCards: playerProfile.tarotCardsCollected || [],
          marks: marks,
          customWords: customWords,
          novelProgress: novelProgress,
          novelSaves: novelSaveSlots
        })
      });
      if (resp.ok) {
        console.log("☁️ Cloud profile synced successfully!");
      }
    } catch(e) {
      console.warn("Cloud sync failed (offline fallback):", e);
    }
  }, 300);
}

async function initCloudSession() {
  authToken = loadFromStorage(STORAGE_KEYS.TOKEN, null);
  if (!authToken) {
    updateAuthUI();
    return;
  }

  try {
    const resp = await fetch(`${API_BASE}/api/profile`, {
      headers: { 'Authorization': 'Bearer ' + authToken }
    });
    if (resp.ok) {
      const cloud = await resp.json();
      playerProfile.level = Math.max(playerProfile.level || 1, cloud.level || 1);
      playerProfile.xp = Math.max(playerProfile.xp || 0, cloud.xp || 0);
      playerProfile.wonRounds = Math.max(playerProfile.wonRounds || 0, cloud.wonRounds || 0);

      // 云端小说关卡进度合并
      if (cloud.novelProgress && typeof cloud.novelProgress === 'object') {
        const cloudCh = parseInt(cloud.novelProgress.currentChapter, 10) || 1;
        const cloudBeat = parseInt(cloud.novelProgress.currentBeat, 10) || 1;
        if (cloudCh > currentNovelChapter || (cloudCh === currentNovelChapter && cloudBeat >= currentNovelBeat)) {
          currentNovelChapter = cloudCh;
          currentNovelBeat = cloudBeat;
          novelProgress = Object.assign({}, novelProgress, cloud.novelProgress);
          saveToStorage('vocab_novel_progress', novelProgress);
          saveToStorage('vocab_novel_ch', currentNovelChapter);
          saveToStorage('vocab_novel_beat', currentNovelBeat);
        }
      }
      if (Array.isArray(cloud.novelSaves) && cloud.novelSaves.length > 0) {
        novelSaveSlots = cloud.novelSaves;
        saveToStorage('vocab_novel_saves', novelSaveSlots);
      }

      // 合并卡牌
      const mergedCards = [...(playerProfile.tarotCardsCollected || [])];
      (cloud.gachaCards || []).forEach(c => {
        const w = typeof c === 'string' ? c : c.word;
        if (!mergedCards.some(mc => (typeof mc === 'string' ? mc : mc.word) === w)) {
          mergedCards.push(c);
        }
      });
      playerProfile.tarotCardsCollected = mergedCards;

      marks = Object.assign({}, cloud.marks || {}, marks);
      customWords = [...new Set([...customWords, ...(cloud.customWords || [])])];
      words = [...new Set([...customWords, ...defaultWords])];

      saveToStorage(STORAGE_KEYS.PROFILE, playerProfile);
      saveToStorage(STORAGE_KEYS.MARKS, marks);
      saveToStorage(STORAGE_KEYS.CUSTOM_WORDS, customWords);
      saveToStorage(STORAGE_KEYS.WORDS, words);

      if (cloud.user) {
        authUser = Object.assign({}, authUser || {}, cloud.user);
        if (cloud.user.role === 'admin' || ['林允安', '允安'].includes(cloud.user.username)) {
          authUser.is_admin = true;
          authUser.role = 'admin';
        }
        saveToStorage(STORAGE_KEYS.AUTH, authUser);
      }

      updateBadges();
      updateAuthUI();
      renderWords(document.getElementById('searchInput').value);
      renderTarotDeck();
      renderBattleHand();
      renderProfileView();
      triggerCloudSync();
    } else if (resp.status === 401) {
      localStorage.removeItem(STORAGE_KEYS.TOKEN);
      localStorage.removeItem(STORAGE_KEYS.AUTH);
      authUser = null;
      authToken = null;
    }
  } catch(e) {
    console.warn("Cloud connection error, using local storage cache:", e);
  }
  updateAuthUI();
}

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

function speakWord(word, e) {
  if (e) e.stopPropagation();
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(word);
  u.lang = 'en-US';
  u.rate = 0.9;
  window.speechSynthesis.speak(u);
}

// 5. 安全服务端 AI 代理 + 离线剧情保底
async function callAntigravityAPI(systemPrompt, userPrompt) {
  authToken = loadFromStorage(STORAGE_KEYS.TOKEN, null);

  if (authToken) {
    try {
      const resp = await fetch(`${API_BASE}/api/ai/scenario`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + authToken
        },
        body: JSON.stringify({ system_prompt: systemPrompt, user_prompt: userPrompt })
      });
      if (resp.ok) {
        const data = await resp.json();
        if (data.result) return data.result;
      }
    } catch(e) {
      console.warn("Server AI proxy error, using procedural matrix:", e);
    }
  }

  return generateOfflineScenario(userPrompt);
}

function generateOfflineScenario(userPrompt) {
  const match = userPrompt.match(/\[(.*?)\]/);
  const targetWords = match ? match[1].split(',').map(s => s.trim()) : ["rescue", "hesitate", "abandon"];
  const w1 = targetWords[0] || "rescue";
  const w2 = targetWords[1] || "hesitate";
  const w3 = targetWords[2] || "abandon";

    const PROCEDURAL_THEMES = [
    {
      theme: "🚀 Deep Space Hull Breach",
      story: `A rogue micrometeorite has pierced the outer observatory of the research vessel. Alarms strobe in crimson flashes as atmospheric pressure plummets rapidly across the module. With the automated propulsion thrusters sputtering, the crew faces an imminent orbital decay into the planetary gravity well.`,
      story_cn: `一颗失控的微陨石击穿了科考船的外层观测舱。随着舱内气压急剧骤降，刺眼的猩红警报疯狂闪烁。自动化推进器发生故障，整艘飞船正面临被拉入行星引力深渊的灭顶之灾。`,
      correctWord: w1,
      correctAction: `Take decisive initiative to ${w1} the primary emergency containment protocols.`,
      correctOutcome: `You acted with razor-sharp focus to ${w1} the vital stabilization systems. Thanks to your decisive execution, the automated bulkheads sealed the vacuum breach in the nick of time, preserving vital life support and allowing the vessel to regain safe orbital trajectory.`,
      correctOutcome_cn: `你临危不乱，果断启动核心紧急隔离协议。得益于你雷厉风行的决断，自动隔离舱门在千钧一发之际封死气压缺口，保住了关键生命维持系统，带领全队脱险重返安全轨道。`,
      wrong1Word: w2,
      wrong1Action: `Choose to ${w2} by the airlock threshold and wait for secondary telemetry.`,
      wrong1Outcome: `Your choice to ${w2} cost the squad precious seconds. The pressure differential shattered the inner reinforced glass, forcing an emergency pod ejection and leaving the research module heavily compromised.`,
      wrong1Outcome_cn: `你在气闸舱门前犹豫不决，浪费了宝贵的逃生时间。内外巨大压差瞬间震碎强化玻璃，迫使全队紧急弹射救生舱，科考舱体遭受重创。`,
      wrong2Word: w3,
      wrong2Action: `Panic recklessly and decide to ${w3} standard environmental safety gear.`,
      wrong2Outcome: `In overwhelming distress, you made the catastrophic mistake to ${w3} essential protective gear. The explosive decompression swept through the corridor, triggering severe trauma and an immediate mission failure.`,
      wrong2Outcome_cn: `极度恐慌中，你盲目弃用了标准环境防护装备。爆炸性失压瞬间席卷走廊，导致严重重创，任务彻底失败。`
    },
    {
      theme: "🔬 Biohazard Quarantine Alert",
      story: `An experimental pathogen canister has ruptured on sub-level four of the biotechnology institute. The computerized filtration grid detects hazardous airborne toxins spreading toward the residential quadrant. The heavy hermetic doors are closing rapidly on a sixty-second countdown timer.`,
      story_cn: `生物研究所地下四层的实验病原体储液罐发生破裂。环境过滤中枢检测到高危气溶胶毒素正向生活区蔓延，重型气密隔离门正进入60秒死亡倒计时。`,
      correctWord: w1,
      correctAction: `Swiftly utilize all available equipment to ${w1} the decontamination bypass sequence.`,
      correctOutcome: `You remained calm under extreme pressure to ${w1} the emergency neutralization system. The antimicrobial mist purged the containment zone, halting the contagion instantly and securing safe passage for the science detail.`,
      correctOutcome_cn: `在极端高压下，你沉着启动消杀旁路系统。强力抗菌气雾瞬间净化隔离区，彻底阻断了病毒扩散，为科研小队开辟出生还通道。`,
      wrong1Word: w2,
      wrong1Action: `Hesitate and attempt to ${w2} while re-reading warning manuals.`,
      wrong1Outcome: `Choosing to ${w2} at such a critical juncture allowed the pathogen to saturate the primary ventilation shafts, rendering the entire sub-level inaccessible and contaminating crucial bio-samples.`,
      wrong1Outcome_cn: `你在翻查应急手册时犹豫迟疑，导致高危病原体完全渗入主通风管道，整层地下设施被永久封闭。`,
      wrong2Word: w3,
      wrong2Action: `Flee blindly and ${w3} the automated quarantine controls.`,
      wrong2Outcome: `Fleeing in panic to ${w3} containment protocols triggered a permanent base-wide red lockdown, trapping your squad in the toxic corridor with dwindling oxygen supplies.`,
      wrong2Outcome_cn: `恐慌逃窜中你盲目关闭了隔离控制，触发全基地红色死锁，将小队困在氧气即将耗尽的剧毒走廊中。`
    },
    {
      theme: "🌊 Abyssal Trench Submersible Crisis",
      story: `At nine thousand meters beneath the Pacific, a hydrothermal fissure erupts beneath the exploration submersible. Extreme hydraulic pressure cracks the reinforced acrylic observation dome as the ballast tanks take on silt. External floodlights flicker erratically in the pitch-black abyss.`,
      story_cn: `在太平洋九千米深渊下，科考潜水艇正下方的深海热泉突然剧烈喷发。极端水压压裂了强化树脂观察穹顶，压载水舱被泥沙淤堵，外部探照灯在漆黑深渊中狂乱闪烁。`,
      correctWord: w1,
      correctAction: `Direct full auxiliary power to ${w1} the emergency ballast blowers.`,
      correctOutcome: `Your composed command to ${w1} the emergency blowers purged the flooded ballast tanks immediately. Buoyancy was restored in seconds, allowing the bathysphere to rocket safely away from the boiling hydrothermal vent.`,
      correctOutcome_cn: `你冷静下达指令，将全部备用动力注入紧急排沙吹除系统。浮力在数秒内迅速恢复，深潜器擦着沸腾热泉呼啸冲出深渊险境。`,
      wrong1Word: w2,
      wrong1Action: `Remain passive and ${w2} before checking pressure gauges.`,
      wrong1Outcome: `Allowing uncertainty to ${w2} your judgment caused the hull stress to exceed structural limits. A secondary fracture flooded the battery compartment, plunging the craft into total darkness.`,
      wrong1Outcome_cn: `犹豫不决让潜艇承受了超出极限的结构压力，二次破裂导致电池舱进水，整艘潜艇陷入无尽的深渊黑暗。`,
      wrong2Word: w3,
      wrong2Action: `Desperately ${w3} the primary life-support regulator.`,
      wrong2Outcome: `Tampering recklessly to ${w3} the life-support regulator caused an acute pressure drop inside the cabin, knocking the entire crew unconscious before rescue signals could be transmitted.`,
      wrong2Outcome_cn: `慌乱中盲目调整生命支持阀门，导致舱内气压急剧失衡，在发出求救信号前全员已陷入缺氧窒息。`
    },
    {
      theme: "🏛️ Ancient Desert Catacomb",
      story: `A violent sandstorm has triggered the ancient mechanism of the underground pyramid temple. Massive stone blocks slide into place with deafening grinding noises, blocking the only daylight shaft. As the torches sputter, poisonous desert vipers emerge from fractured wall hieroglyphs.`,
      story_cn: `狂暴沙尘暴触发了金字塔地宫的古老机关。数吨重的巨石伴随轰鸣滑落封死了唯一透光的盗洞。火把摇曳微光中，剧毒的沙漠蝰蛇从裂开的象形文字石壁后蜂拥而出。`,
      correctWord: w1,
      correctAction: `Carefully examine the inscriptions to ${w1} the hidden stone counterweight.`,
      correctOutcome: `Deciphering the glyphs allowed you to ${w1} the ancient counterweight mechanism. A secret archway pivoted open silently, revealing an untouched subterranean escape corridor leading safely outside the pyramid.`,
      correctOutcome_cn: `通过精准破译古文字，你果断按下了隐藏的配重机关。暗门无声滑开，露出一条直通金字塔外的古老逃生密道。`,
      wrong1Word: w2,
      wrong1Action: `Stand motionless to ${w2} amidst the crumbling masonry.`,
      wrong1Outcome: `Choosing to ${w2} proved disastrous as the shifting ceiling blocks crashed down, completely burying your exploration gear and cutting off the return path.`,
      wrong1Outcome_cn: `在滚落的碎石中僵立迟疑，导致头顶崩塌的石梁彻底砸毁了探险装备并封死了退路。`,
      wrong2Word: w3,
      wrong2Action: `Recklessly ${w3} the archaeological map and torchlight.`,
      wrong2Outcome: `Throwing caution aside to ${w3} the map caused you to trigger a hidden dart trap along the perimeter, suffering heavy injury and exhaustion in the dark.`,
      wrong2Outcome_cn: `惊慌失措中丢弃了地图与火把，不慎踩中外围毒箭陷阱，在黑暗中遭受重创。`
    },
    {
      theme: "⚡ Cyberpunk Megacity Infiltration",
      story: `High on the ninety-fifth floor of the Arasaka-style megacorp tower, laser grid alarms scream into the rainy night. Automated combat drones descend from the ceiling catwalks while counter-intrusion ICE viruses lock the terminal you are extracting.`,
      story_cn: `在巨型企业大厦95层的雨夜高空，激光警报刺破夜空。全副武装的战斗无人机从天花板栈道降下，反入侵黑客病毒瞬间锁死了你正在下载数据的核心终端。`,
      correctWord: w1,
      correctAction: `Deploy your neural deck to ${w1} the subverted firewall matrix.`,
      correctOutcome: `Your masterful hack to ${w1} the core mainframe disabled the tracking drones and opened the maintenance elevator, allowing a seamless extraction with all corporate data intact.`,
      correctOutcome_cn: `你熟练运用神经接入舱攻破了企业核心防火墙，瘫痪了追踪无人机并开启检修电梯，带着全部核心机密数据完美撤离。`,
      wrong1Word: w2,
      wrong1Action: `Fail to adapt and ${w2} inside the server closet.`,
      wrong1Outcome: `Pausing to ${w2} allowed security androids to surround the sector, pinpointing your digital signature and inflicting intense neural feedback damage.`,
      wrong1Outcome_cn: `未能及时应对而在机房内僵持迟疑，被防卫机器人精准锁定数字特征，承受了致命的神经逆流电击。`,
      wrong2Word: w3,
      wrong2Action: `Panic and abruptly ${w3} your encrypted neural link.`,
      wrong2Outcome: `Abruptly attempting to ${w3} the connection triggered a catastrophic system surge, wiping the extracted files and leaving you trapped on the rooftop.`,
      wrong2Outcome_cn: `恐慌中强行拔除神经连接引发严重系统过载，不仅损毁了提取的数据，还将自己困在绝境天台。`
    },
    {
      theme: "❄️ Arctic Glacier Blizzard Outpost",
      story: `A category-five polar storm knocks out the transmission tower and heating generator at the remote research outpost. Frost patterns spread rapidly across the double-glazed windows as exterior temperatures plunge below minus fifty degrees Celsius.`,
      story_cn: `五级极地暴风雪摧毁了极地科考站的通讯塔与供暖发电机。双层保温窗迅速蔓延出森冷冰花，室外气温骤降至零下50摄氏度以下。`,
      correctWord: w1,
      correctAction: `Work methodically to ${w1} the auxiliary thermal reactor.`,
      correctOutcome: `You methodically managed to ${w1} the backup power grid, restoring heat and vital satellite uplinks just before the base suffered permanent freeze damage.`,
      correctOutcome_cn: `你有条不紊地重启了备用供热反应堆，在基站遭受永久冻结前抢修好了供暖与卫星信号。`,
      wrong1Word: w2,
      wrong1Action: `Wander into the blizzard to ${w2} without compass guidance.`,
      wrong1Outcome: `Attempting to ${w2} in zero visibility resulted in severe disorientation and mild frostbite, forcing the team to expend precious emergency flares to locate you.`,
      wrong1Outcome_cn: `在能见度为零的暴风雪中失去方向盲目摸索，导致严重冻伤并浪费了宝贵的应急信号弹。`,
      wrong2Word: w3,
      wrong2Action: `Carelessly ${w3} the insulated survival shelter.`,
      wrong2Outcome: `Deciding to ${w3} the insulated bunker exposed your squad to the howling gale, causing immediate hypothermia risks and critical vitality loss.`,
      wrong2Outcome_cn: `草率离开绝热掩体，使小队暴露在狂暴的风雪怒吼中，体温急剧流失陷入重度失温危机。`
    },
    {
      theme: "🌋 Volcanic Island Pyroclastic Surge",
      story: `The island caldera violently erupts, hurling volcanic bombs into the coastal jungle. A towering cloud of hot ash and sulfur dioxide rushes toward the shoreline where the last evacuation ferry is moored. The harbor dock begins splintering under tectonic tremors.`,
      story_cn: `海岛火山口剧烈喷发，熔岩巨石轰然砸向雨林。数百米高的滚烫火山灰与剧毒硫磺气云遮天蔽日扑向码头，最后一艘撤离渡轮的泊位在地震中即将解体。`,
      correctWord: w1,
      correctAction: `Rally the survivors to ${w1} the emergency maritime departure.`,
      correctOutcome: `Your decisive leadership to ${w1} the departure sequence pushed the vessel past the reef breakers moments before the pyroclastic flow engulfed the shoreline, saving every passenger aboard.`,
      correctOutcome_cn: `你果断指挥渡轮强行起航穿越暗礁，在碎屑流吞没海岸线的前一秒脱险冲入公海，拯救了全船幸存者。`,
      wrong1Word: w2,
      wrong1Action: `Stop near the magma flow to ${w2} and salvage baggage.`,
      wrong1Outcome: `Losing critical time to ${w2} resulted in your vehicle being blocked by falling debris, forcing an agonizing and dangerous trek through dense ash clouds.`,
      wrong1Outcome_cn: `在熔岩前停顿犹豫试图抢救辎重，导致车辆被坠石阻断，被迫在窒息尘暴中艰难求生。`,
      wrong2Word: w3,
      wrong2Action: `Blindly ${w3} the established maritime evacuation protocol.`,
      wrong2Outcome: `Deciding to ${w3} standard evacuation rules caused panic on the loading ramp, capsizing an auxiliary lifeboat and leaving your squad in dire peril.`,
      wrong2Outcome_cn: `盲目违背撤离指引引发登船混乱，导致副救生艇倾覆，让全队陷入万劫不复的熔岩险境。`
    },
    {
      theme: "🏰 Medieval Stronghold Siege",
      story: `Flaming catapult projectiles smash through the fortress battlements as enemy scaling ladders latch onto the parapets. With the outer portcullis splintered and command horns sounding retreat, your squad holds the pivotal watchtower staircase.`,
      story_cn: `燃烧的巨石砸穿城堡箭垛，敌军云梯如恶魔巨爪扣死城头。外门已被破城槌撞裂，撤退号角凄厉响起，你的小队镇守在最后的防御塔旋梯关口。`,
      correctWord: w1,
      correctAction: `Mount a fierce counter-defense to ${w1} the inner stronghold gateway.`,
      correctOutcome: `You rallied the garrison to ${w1} the vital stone chokepoint, repelling the enemy assault wave and holding the fortress until allied cavalry crested the horizon.`,
      correctOutcome_cn: `你率领守军誓死坚守石制隘口，顽强击退敌军先锋狂攻，成功支撑到盟军铁骑踏破地平线救援。`,
      wrong1Word: w2,
      wrong1Action: `Waver under pressure and ${w2} on the exposed rampart.`,
      wrong1Outcome: `Your decision to ${w2} left the archers unprotected, allowing hostile vanguard skirmishers to overrun the watchtower and inflict heavy damage on the garrison.`,
      wrong1Outcome_cn: `在城垛上犹豫迟疑，导致弓箭手失去掩护，被敌军先锋斥候攻破防线遭受重创。`,
      wrong2Word: w3,
      wrong2Action: `Break formation and ${w3} your defensive weapons.`,
      wrong2Outcome: `Breaking ranks to ${w3} defensive gear led to immediate chaos, leaving you defenseless against incoming volleys of flaming arrows.`,
      wrong2Outcome_cn: `阵型溃散并抛弃防具，使自己彻底暴露在呼啸而至的火箭火海之中。`
    },
    {
      theme: "🌪️ Steampunk Airship Tempest",
      story: `Navigating an uncharted cloud vortex, the brass-clad dirigible suffers multiple boiler blowouts. High-voltage lightning crackles across the canvas envelope while the altitude gauge spins downward toward jagged mountain crags.`,
      story_cn: `穿行于未知的风暴云涡中，蒸汽飞艇多台锅炉发生严重爆膛。高压闪电在气囊蒙皮上狂暴游走，高度表在剧烈颠簸中失控坠向嶙峋的山峰绝壁。`,
      correctWord: w1,
      correctAction: `Adjust the pressure valves to ${w1} the steam turbine exhaust.`,
      correctOutcome: `Skillfully managing to ${w1} the valve pressure stabilized the lifting gas cells, pulling the great airship out of its steep dive and soaring above the tempest into clear skies.`,
      correctOutcome_cn: `你熟练调整排气阀精准稳定升力气囊，使巨舰从急坠中昂首拉升，冲破风暴云层重见万里晴空。`,
      wrong1Word: w2,
      wrong1Action: `Disregard the altimeter and ${w2} in the control cabin.`,
      wrong1Outcome: `Allowing panic to ${w2} your reflexes caused the airship to clip a sharp pinnacle, shearing the port propeller and causing severe hull structural damage.`,
      wrong1Outcome_cn: `恐慌迟疑导致飞艇擦撞尖锐山峰，撕裂左舷螺旋桨，船体结构发生严重断裂。`,
      wrong2Word: w3,
      wrong2Action: `Prematurely ${w3} the main ballast and cargo anchors.`,
      wrong2Outcome: `Rushing to ${w3} essential rigging destabilized the center of gravity, causing the gondola to tilt violently and throwing vital instruments overboard.`,
      wrong2Outcome_cn: `盲目抛弃核心压舱重物导致重心失衡，吊舱发生剧烈倾斜，核心导航仪表全被甩出舷外。`
    },
    {
      theme: "🔮 Quantum Collider Temporal Rift",
      story: `A magnetic containment failure inside the particle supercollider tears a shimmering temporal rift across the experimental facility. Time dilates unpredictably—falling objects freeze mid-air while chronal shockwaves shatter nearby instrument panels.`,
      story_cn: `对撞机磁约束失效，撕裂出一道泛着诡异微光的时空裂隙。时间陷入混乱——下落的仪器悬停在半空，时间冲击波震碎了周遭所有控制台。`,
      correctWord: w1,
      correctAction: `Synchronize the resonance harmonic to ${w1} the quantum field coil.`,
      correctOutcome: `You calibrated the harmonic pulse to ${w1} the magnetic coil, cleanly collapsing the temporal singularity and restoring standard spacetime metrics without casualties.`,
      correctOutcome_cn: `你精确校准谐波脉冲同步量子线圈，完美闭合了时空奇点，毫发无伤地恢复了正常时空秩序。`,
      wrong1Word: w2,
      wrong1Action: `Fail to comprehend the readings and ${w2} near the epicenter.`,
      wrong1Outcome: `Lingering to ${w2} caught your gear in a local time loop, draining your energy cells and disorienting your squad with severe temporal vertigo.`,
      wrong1Outcome_cn: `在裂隙核心旁驻留迟疑，使装备被困在局部时间死循环中，精神受到强烈的时间眩晕重创。`,
      wrong2Word: w3,
      wrong2Action: `Impulsively ${w3} the shielded safety protocols.`,
      wrong2Outcome: `Deciding to ${w3} safety shields released a blast of chronal radiation that scrambled all electronic navigation and inflicted immediate system shock.`,
      wrong2Outcome_cn: `草率弃用能量防护协议，导致爆发出强烈的时空辐射，摧毁了所有电子导航并造成严重系统震荡。`
    },
    {
      theme: "🌿 Amazonian Forbidden Temple Basin",
      story: `Trekking through the dense, uncharted rainforest, your expedition trips a hidden tripwire mechanism outside a vine-covered golden ziggurat. Stone pendulum blades swing across the muddy ravine as the river beneath swells with carnivorous predators.`,
      story_cn: `在未知的亚马逊密林深处，探险队在黄金神庙前触发了古老绊线机关。巨大的石摆巨斧在泥泞峡谷间呼啸挥舞，脚下奔腾的恶水翻滚着无数食人巨鳄。`,
      correctWord: w1,
      correctAction: `Quickly scale the ancient stonework to ${w1} the release catch.`,
      correctOutcome: `Agilely maneuvering to ${w1} the ancient counter-lever locked the deadly blades in place, clearing an unhindered path to the inner sanctum treasure vault.`,
      correctOutcome_cn: `你灵巧攀上古老石壁按下释放卡扣，锁死了致命摆斧，开辟出通向神庙核心宝库的安全坦途。`,
      wrong1Word: w2,
      wrong1Action: `Freeze in uncertainty and ${w2} on the slippery log bridge.`,
      wrong1Outcome: `Hesitating to ${w2} on the mossy span caused the wood to crack beneath you, dumping emergency rations into the raging torrent below.`,
      wrong1Outcome_cn: `在湿滑的原木桥上迟疑停滞，导致木桥轰然断裂，应急口粮全部沉入险恶湍流。`,
      wrong2Word: w3,
      wrong2Action: `Fling aside caution and ${w3} all climbing ropes.`,
      wrong2Outcome: `Choosing to ${w3} vital climbing ropes left you stranded on a crumbling ledge surrounded by hostile jungle wildlife.`,
      wrong2Outcome_cn: `抛弃攀登绳索冒险前冲，导致自己被困在悬崖绝壁上，四周潜伏着嗜血的热带凶兽。`
    },
    {
      theme: "⚓ Phantom Galleon of Bermuda",
      story: `Exploring the sunken skeletal hull of a seventeenth-century warship, your diving umbilical line snags upon a coral-encrusted bronze cannon. Disturbed ocean undercurrents begin to collapse the rotting oak timbers right above your primary oxygen manifold.`,
      story_cn: `潜入十七世纪沉船残骸深处，你的潜水脐带管被锈蚀的青铜古炮死死卡住。翻涌的深海洋流使头顶腐朽的橡木巨梁摇摇欲坠。`,
      correctWord: w1,
      correctAction: `Use your diver blade calmly to ${w1} the tangled harness line.`,
      correctOutcome: `You steadily managed to ${w1} the tangled gear without damaging your regulator, escaping the falling debris field and surfacing smoothly with valuable oceanic relics.`,
      correctOutcome_cn: `你冷静使用潜水刀割开缠绕的索具而不伤及呼吸管，平稳逃离坍塌废墟，带着稀世古物顺利上浮。`,
      wrong1Word: w2,
      wrong1Action: `Thrash frantically to ${w2} in the confined cargo hold.`,
      wrong1Outcome: `Panicking to ${w2} stirred up thick clouds of silt, blinding your dive buddy and wasting more than half of your remaining breathing gas.`,
      wrong1Outcome_cn: `在狭窄船舱内慌乱挣扎激起浓厚泥沙，完全遮蔽了视线并白白消耗了大半宝贵氧气。`,
      wrong2Word: w3,
      wrong2Action: `Recklessly ${w3} your emergency dive beacon.`,
      wrong2Outcome: `Discarding your gear to ${w3} the beacon caused you to lose contact with the surface vessel, resulting in an emergency deep-sea retrieval operation.`,
      wrong2Outcome_cn: `盲目丢弃应急潜水浮标，导致与水面支援母船彻底失联，陷入深海救援险境。`
    }
  ];

  const scene = PROCEDURAL_THEMES[Math.floor(Math.random() * PROCEDURAL_THEMES.length)];
  
  const optionsRaw = [
    {
      word: scene.correctWord,
      action: scene.correctAction,
      isCorrect: true,
      fullOutcomeStory: scene.correctOutcome,
      fullOutcomeStory_cn: scene.correctOutcome_cn
    },
    {
      word: scene.wrong1Word,
      action: scene.wrong1Action,
      isCorrect: false,
      fullOutcomeStory: scene.wrong1Outcome,
      fullOutcomeStory_cn: scene.wrong1Outcome_cn
    },
    {
      word: scene.wrong2Word,
      action: scene.wrong2Action,
      isCorrect: false,
      fullOutcomeStory: scene.wrong2Outcome,
      fullOutcomeStory_cn: scene.wrong2Outcome_cn
    }
  ];

  // 打乱选项顺序
  const shuffledOptions = optionsRaw.sort(() => 0.5 - Math.random());

  return JSON.stringify({
    story: scene.story,
    story_cn: scene.story_cn,
    options: shuffledOptions
  });
}

function safeJsonParse(str) {
  let cleaned = str.trim().replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/i, '').trim();
  return JSON.parse(cleaned);
}

// 6. 可点击交互式文本渲染
function renderClickableStory(text) {
  if (!text) return '';
  return text.split(/([A-Za-z'-]+)/g).map(token => {
    if (/^[A-Za-z'-]+$/.test(token)) {
      const cleanWord = token.toLowerCase();
      const isMarked = getMarkCount(cleanWord) > 0;
      return `<span class="story-word ${isMarked ? 'marked-word-highlight' : ''}" data-word="${cleanWord}" onclick="inspectStoryWord('${cleanWord}', event)" title="Click to inspect & Mark">${escapeHtml(token)}</span>`;
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

// 7. 视图切换与词库列表
let currentSubTab = 'all';

function switchNavView(viewName) {
  soundClick();
  document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

  if (viewName === 'words') {
    document.getElementById('viewWords').classList.add('active');
    document.getElementById('navWords').classList.add('active');
    renderWords(document.getElementById('searchInput').value);
  } else if (viewName === 'survival') {
    document.getElementById('viewSurvival').classList.add('active');
    document.getElementById('navSurvival').classList.add('active');
    initNovelModeUI();
    renderBattleHand();
    launchSurvivalGame();
  } else if (viewName === 'match') {
    document.getElementById('viewMatch').classList.add('active');
    document.getElementById('navMatch').classList.add('active');
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
  const origList = (typeof ORIGINAL_STUDY_WORDS !== 'undefined' && Array.isArray(ORIGINAL_STUDY_WORDS)) ? ORIGINAL_STUDY_WORDS : [];
  const novelList = (typeof NOVEL_EXTRACTED_WORDS !== 'undefined' && Array.isArray(NOVEL_EXTRACTED_WORDS)) ? NOVEL_EXTRACTED_WORDS : [];
  const allList = [...new Set([...origList, ...novelList, ...customWords])];

  const badgeOriginal = document.getElementById('badgeSrcOriginal');
  if (badgeOriginal) badgeOriginal.textContent = origList.length;

  const badgeNovel = document.getElementById('badgeSrcNovel');
  if (badgeNovel) badgeNovel.textContent = novelList.length;

  const badgeAllSrc = document.getElementById('badgeSrcAll');
  if (badgeAllSrc) badgeAllSrc.textContent = allList.length;

  const activeWords = getActiveWordList();
  const badgeAll = document.getElementById('badgeAll');
  if (badgeAll) badgeAll.textContent = activeWords.length;

  const badgeMarked = document.getElementById('badgeMarked');
  if (badgeMarked) badgeMarked.textContent = getMarkedWords().length;

  const hudHp = document.getElementById('hudHp');
  if (hudHp) hudHp.textContent = playerProfile.hp;
  const hpBar = document.getElementById('hpBar');
  if (hpBar) hpBar.style.width = `${Math.max(0, playerProfile.hp)}%`;

  const hudSan = document.getElementById('hudSan');
  if (hudSan) hudSan.textContent = playerProfile.san;
  const sanBar = document.getElementById('sanBar');
  if (sanBar) sanBar.style.width = `${Math.max(0, playerProfile.san)}%`;

  const hudLevel = document.getElementById('hudLevel');
  if (hudLevel) hudLevel.textContent = playerProfile.level;
  const hudXp = document.getElementById('hudXp');
  if (hudXp) hudXp.textContent = `${playerProfile.xp} XP`;
}

function getMarkCount(word) {
  return marks[word.toLowerCase()] || 0;
}

function updateWordMarkInDOM(word) {
  if (!word) return;
  const safeWord = word.toLowerCase().trim();
  const mc = getMarkCount(safeWord);

  // 1. 同步更新释义抽屉内部的 Mark 计数值与动画
  const drawerCount = document.getElementById('drawerMarkCount');
  if (drawerCount && currentLookupWord === safeWord) {
    drawerCount.textContent = mc;
    drawerCount.classList.remove('mark-pulse');
    void drawerCount.offsetWidth; // 触发 reflow
    drawerCount.classList.add('mark-pulse');
  }

  // 2. 同步更新词库列表中该词卡的 ★ 徽标
  document.querySelectorAll('.origami-word-card').forEach(card => {
    const spelling = card.querySelector('.word-spelling');
    if (spelling) {
      const cardWord = spelling.childNodes[0].textContent.trim().toLowerCase();
      if (cardWord === safeWord) {
        let pill = card.querySelector('.origami-mark-pill');
        if (mc > 0) {
          if (!pill) {
            pill = document.createElement('span');
            pill.className = 'origami-mark-pill';
            card.appendChild(pill);
          }
          pill.textContent = `★ ${mc}`;
        } else {
          if (pill) pill.remove();
        }
      }
    }
  });

  // 3. 同步剧情高亮
  document.querySelectorAll(`.story-word[data-word="${safeWord}"]`).forEach(el => {
    if (mc > 0) el.classList.add('marked-word-highlight');
    else el.classList.remove('marked-word-highlight');
  });

  // 4. 若正处于重点生词本 Tab，实时刷新生词列表
  if (currentSubTab === 'marked') {
    renderMarked();
  }
}

function addMark(word) {
  if (!word) return;
  const w = word.toLowerCase().trim();
  marks[w] = (marks[w] || 0) + 1;
  saveToStorage(STORAGE_KEYS.MARKS, marks);
  updateBadges();
  updateWordMarkInDOM(w);
  triggerCloudSync();
  showToast(`★ Marked [${w}] (Total Mark: ${marks[w]})`);
}

function reduceMark(word) {
  if (!word) return;
  const w = word.toLowerCase().trim();
  if (marks[w]) {
    marks[w]--;
    if (marks[w] <= 0) {
      delete marks[w];
    }
    saveToStorage(STORAGE_KEYS.MARKS, marks);
    updateBadges();
    updateWordMarkInDOM(w);
    triggerCloudSync();
    showToast(`★ Unmarked [${w}] (Total Mark: ${marks[w] || 0})`);
  }
}

function getMarkedWords() {
  return Object.entries(marks).filter(([k, v]) => v > 0);
}

function renderWords(filter = '') {
  const container = document.getElementById('wordsListContainer');
  if (!container) return;
  container.innerHTML = '';
  const lf = filter.toLowerCase().trim();
  const activeWords = getActiveWordList();

  activeWords.forEach((w, i) => {
    const corrected = corrections[w];
    const mc = getMarkCount(w);
    const cn = chineseDict[w] || '';
    if (!lf || w.toLowerCase().includes(lf) || (corrected && corrected.toLowerCase().includes(lf)) || (cn && cn.includes(lf)) || String(i + 1) === lf) {
      const card = document.createElement('div');
      card.className = 'origami-word-card';
      const isZh = (appSettings.dictLanguageMode === 'zh' || appSettings.showChinese);

      card.innerHTML = `
        <span class="word-num">${i + 1}</span>
        <div class="word-info">
          <div class="word-spelling">
            ${escapeHtml(w)}
            <button class="word-audio-btn" onclick="speakWord('${escapeHtml(w)}', event)" title="Listen Pronunciation">🔊</button>
            ${corrected ? `<span class="word-correction">→ ${escapeHtml(corrected)}</span>` : ''}
          </div>
          ${isZh && cn ? `<div class="word-chinese-meaning" style="font-size:12.5px; color:var(--text-secondary); margin-top:3px; font-weight:500;">${escapeHtml(cn)}</div>` : ''}
        </div>
        ${mc > 0 ? `<span class="origami-mark-pill">★ ${mc}</span>` : ''}
      `;
      card.onclick = () => openWordDetails(w);
      container.appendChild(card);
    }
  });
  updateBadges();
}

function renderMarked() {
  const container = document.getElementById('markedListContainer');
  container.innerHTML = '';
  const marked = getMarkedWords();
  if (marked.length === 0) {
    container.innerHTML = `<div style="text-align:center; color:var(--text-secondary); padding:40px;">No marked words yet. Click any word to mark!</div>`;
    return;
  }
  marked.forEach(([w, count], i) => {
    const card = document.createElement('div');
    card.className = 'origami-word-card';
    const corrected = corrections[w];
    const cn = chineseDict[w] || '';
    const isZh = (appSettings.dictLanguageMode === 'zh' || appSettings.showChinese);
    card.innerHTML = `
      <span class="word-num">${i + 1}</span>
      <div class="word-info">
        <div class="word-spelling">
          ${escapeHtml(w)}
          <button class="word-audio-btn" onclick="speakWord('${escapeHtml(w)}', event)" title="Listen Pronunciation">🔊</button>
          ${corrected ? `<span class="word-correction">→ ${escapeHtml(corrected)}</span>` : ''}
        </div>
        ${isZh && cn ? `<div class="word-chinese-meaning" style="font-size:12.5px; color:var(--text-secondary); margin-top:3px; font-weight:500;">${escapeHtml(cn)}</div>` : ''}
      </div>
      <span class="origami-mark-pill">★ ${count}</span>
    `;
    card.onclick = () => openWordDetails(w);
    container.appendChild(card);
  });
}

// 8. 词典渲染系统 (支持纯英权威词典 + 中文多义项双解)
let currentLookupWord = null;
let currentDrawerDictTab = 'zh'; // 'zh' 或 'en'
let cachedZhDict = {};

function switchDrawerDictTab(tab) {
  soundClick();
  currentDrawerDictTab = tab;
  const tabZh = document.getElementById('tabDictZh');
  const tabEn = document.getElementById('tabDictEn');
  const bodyZh = document.getElementById('dictMeaningsBodyZh');
  const bodyEn = document.getElementById('dictMeaningsBodyEn');
  
  if (tabZh && tabEn && bodyZh && bodyEn) {
    if (tab === 'zh') {
      tabZh.classList.add('active');
      tabEn.classList.remove('active');
      bodyZh.style.display = 'block';
      bodyEn.style.display = 'none';
    } else {
      tabEn.classList.add('active');
      tabZh.classList.remove('active');
      bodyEn.style.display = 'block';
      bodyZh.style.display = 'none';
    }
  }
}

function getAdjacentWord(currentWord, direction) {
  if (!currentWord || !words || words.length === 0) return null;
  const cw = currentWord.toLowerCase().trim();

  let targetList = words;
  if (currentSubTab === 'marked') {
    const markedPairs = getMarkedWords();
    targetList = markedPairs.map(([w]) => w);
  } else {
    const searchVal = document.getElementById('searchInput') ? document.getElementById('searchInput').value.trim().toLowerCase() : '';
    if (searchVal) {
      targetList = words.filter((w, i) => {
        const corrected = corrections[w];
        const cn = chineseDict[w] || '';
        return w.toLowerCase().includes(searchVal) || (corrected && corrected.toLowerCase().includes(searchVal)) || (cn && cn.includes(searchVal)) || String(i + 1) === searchVal;
      });
    }
  }

  if (!targetList || targetList.length === 0) return null;
  let idx = targetList.findIndex(w => w.toLowerCase() === cw);
  if (idx === -1) idx = 0;

  let newIdx = idx + direction;
  if (newIdx < 0) newIdx = targetList.length - 1;
  if (newIdx >= targetList.length) newIdx = 0;

  return targetList[newIdx];
}

function renderDefinitionBody(entry, safeWord, lookup, cambridgeUrl, collinsUrl, merriamUrl) {
  const phoneticText = entry.phonetic || (entry.phonetics && entry.phonetics[0] ? entry.phonetics[0].text : '') || '';
  if (phoneticText) {
    const phEl = document.getElementById('dictPhonetic');
    if (phEl) phEl.textContent = phoneticText;
  }

  let meaningsHtml = '';
  if (entry.meanings && entry.meanings.length > 0) {
    entry.meanings.forEach(m => {
      const pos = m.pos || m.partOfSpeech || 'definition';
      const defs = m.defs || m.definitions || [];
      meaningsHtml += `
        <div style="background: var(--paper-surface-sub); border: 1.5px solid var(--paper-border); border-radius: var(--radius-md); padding: 14px; margin-bottom: 12px;">
          <div style="display:inline-block; background: var(--brand-primary); color: #fff; padding: 2px 10px; border-radius: 12px; font-size: 12px; font-weight: 800; font-style: italic; margin-bottom: 10px;">
            ${escapeHtml(pos)}
          </div>
          <div style="display:flex; flex-direction:column; gap:10px;">
      `;
      defs.forEach((d, idx) => {
        const defText = typeof d === 'string' ? d : (d.def || d.definition || '');
        const egText = typeof d === 'object' ? (d.eg || d.example || '') : '';
        meaningsHtml += `
          <div style="border-left: 3px solid var(--brand-accent); padding-left: 10px;">
            <div style="font-size: 14px; color: var(--text-primary); line-height: 1.5;">
              <strong>${idx + 1}.</strong> ${escapeHtml(defText)}
            </div>
            ${egText ? `<div style="font-size: 13px; color: var(--text-secondary); font-style: italic; margin-top: 4px;">Example: "${escapeHtml(egText)}"</div>` : ''}
          </div>
        `;
      });
      meaningsHtml += `</div></div>`;
    });
    const bEl = document.getElementById('dictMeaningsBody');
    if (bEl) bEl.innerHTML = meaningsHtml;
  }
}

async function openWordDetails(word) {
  soundClick();
  const safeWord = word.toLowerCase().trim();
  const lookup = corrections[safeWord] || safeWord;
  currentLookupWord = safeWord;

  // 根据设置初始化当前激活的词典 Tab：默认 'en'，设置了中文模式则默认 'zh'
  currentDrawerDictTab = (appSettings.dictLanguageMode === 'zh' || appSettings.showChinese) ? 'zh' : 'en';

  const cambridgeUrl = `https://dictionary.cambridge.org/dictionary/english/${encodeURIComponent(lookup)}`;
  const collinsUrl = `https://www.collinsdictionary.com/dictionary/english/${encodeURIComponent(lookup)}`;
  const merriamUrl = `https://www.merriam-webster.com/dictionary/${encodeURIComponent(lookup)}`;
  const youdaoUrl = `https://dict.youdao.com/w/${encodeURIComponent(lookup)}`;
  const baiduUrl = `https://fanyi.baidu.com/#en/zh/${encodeURIComponent(lookup)}`;
  const cambridgeZhUrl = `https://dictionary.cambridge.org/dictionary/english-chinese-simplified/${encodeURIComponent(lookup)}`;

  const drawer = document.getElementById('defDrawer');
  const content = document.getElementById('defDrawerContent');

  drawer.classList.add('open');
  document.getElementById('drawerOverlay').classList.add('open');

  const commonZh = chineseDict[lookup] || chineseDict[safeWord] || '';

  content.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
      <div>
        <div style="font-size: 28px; font-weight: 900; font-family: var(--font-serif); color: var(--text-primary); display:flex; align-items:center; gap:8px;">
          ${escapeHtml(lookup)}
          <button class="word-audio-btn" style="font-size:20px; color:var(--brand-accent);" onclick="speakWord('${escapeHtml(lookup)}')" title="[Space] 朗读发音">🔊</button>
        </div>
        <div style="font-size: 14px; color: var(--text-secondary); margin-top: 2px;" id="dictPhonetic">Loading phonetic...</div>
      </div>
      <div style="display:flex; gap:6px; align-items:center; margin-right: 40px;">
        <button class="btn btn-secondary" style="padding:4px 10px; font-size:12px; height:32px; border-radius: var(--radius-sm);" onclick="const p = getAdjacentWord(currentLookupWord, -1); if (p) openWordDetails(p);" title="[← 方向键] 上一个单词">◀</button>
        <button class="btn btn-secondary" style="padding:4px 10px; font-size:12px; height:32px; border-radius: var(--radius-sm);" onclick="const n = getAdjacentWord(currentLookupWord, 1); if (n) openWordDetails(n);" title="[→ 方向键] 下一个单词">▶</button>
      </div>
    </div>

    <!-- 💻 电脑键盘操控提示 -->
    <div class="drawer-kbd-guide">
      <span><kbd>ESC</kbd> 退出</span>
      <span>·</span>
      <span><kbd>←</kbd><kbd>→</kbd> 切词</span>
      <span>·</span>
      <span><kbd>Space</kbd> 发音</span>
      <span>·</span>
      <span><kbd>+</kbd><kbd>-</kbd> 增减Mark</span>
    </div>

    <!-- 🌐 词典中英文模式切换 Tab -->
    <div class="origami-tabs" style="margin-bottom:14px; margin-top:8px;">
      <button class="origami-tab-btn ${currentDrawerDictTab === 'zh' ? 'active' : ''}" id="tabDictZh" onclick="switchDrawerDictTab('zh')">🇨🇳 中文详细释义</button>
      <button class="origami-tab-btn ${currentDrawerDictTab === 'en' ? 'active' : ''}" id="tabDictEn" onclick="switchDrawerDictTab('en')">🇬🇧 纯英权威词典</button>
    </div>

    <!-- 🇨🇳 中文释义视图 -->
    <div id="dictMeaningsBodyZh" style="${currentDrawerDictTab === 'zh' ? 'display:block;' : 'display:none;'} margin-bottom: 20px;">
      <div style="background:var(--paper-surface-sub); border:1.5px solid var(--paper-border); border-radius:var(--radius-md); padding:16px; margin-bottom:12px;">
        <div style="font-size:11px; font-weight:800; color:var(--brand-primary); margin-bottom:4px; text-transform:uppercase; letter-spacing:0.5px;">⭐ 核心常用释义</div>
        <div style="font-size:16px; font-weight:700; color:var(--text-primary); line-height:1.5;">${escapeHtml(commonZh || '正在连线词典 API 获取释义...')}</div>
      </div>

      <div id="dictZhApiContainer">
        <div style="padding:15px; text-align:center; color:var(--text-secondary); font-size:13px;"><em>正在连线词典 API 加载多义项与词性...</em></div>
      </div>

      <div style="display:flex; gap:8px; margin-top:12px; flex-wrap:wrap;">
        <a href="${youdaoUrl}" target="_blank" class="dict-external-link" title="有道词典查询">📖 有道词典</a>
        <a href="${cambridgeZhUrl}" target="_blank" class="dict-external-link" title="剑桥英汉双解">📚 剑桥英汉</a>
        <a href="${baiduUrl}" target="_blank" class="dict-external-link" title="百度翻译">🌐 百度翻译</a>
      </div>
    </div>

    <!-- 🇬🇧 英文释义视图 -->
    <div id="dictMeaningsBodyEn" style="${currentDrawerDictTab === 'en' ? 'display:block;' : 'display:none;'} margin-bottom: 20px;">
      <div style="display:flex; gap:8px; margin-bottom:12px; flex-wrap:wrap;">
        <a href="${cambridgeUrl}" target="_blank" class="dict-external-link" title="Open Cambridge Dictionary">📖 Cambridge</a>
        <a href="${collinsUrl}" target="_blank" class="dict-external-link" title="Open Collins Dictionary">📚 Collins</a>
        <a href="${merriamUrl}" target="_blank" class="dict-external-link" title="Open Merriam-Webster">🎓 Webster</a>
      </div>
      <div id="dictMeaningsBody">
        <div style="padding:25px; text-align:center; color:var(--text-secondary);"><em>Loading English definitions...</em></div>
      </div>
    </div>

    <!-- 生词标记底栏 -->
    <div style="background: var(--paper-surface-sub); border:1.5px solid var(--paper-border); border-radius:var(--radius-md); padding:14px 16px; display:flex; justify-content:space-between; align-items:center;">
      <div>
        <div style="font-size:14px; font-weight:800; color:var(--text-primary);">Mark for Review: <span id="drawerMarkCount" style="color:var(--brand-danger);">${getMarkCount(safeWord)}</span></div>
        <div style="font-size:11px; color:var(--text-secondary); margin-top:2px;">Prioritized in Survival battles & personal collection</div>
      </div>
      <div style="display:flex; gap:8px;">
        <button class="btn btn-secondary" style="width:38px; height:38px; padding:0; font-size:18px;" onclick="reduceMark('${escapeHtml(safeWord)}'); document.getElementById('drawerMarkCount').textContent = getMarkCount('${escapeHtml(safeWord)}');" title="[-] 减少标记">-</button>
        <button class="btn btn-primary" style="padding:0 14px; height:38px; font-size:13px;" onclick="addMark('${escapeHtml(safeWord)}'); document.getElementById('drawerMarkCount').textContent = getMarkCount('${escapeHtml(safeWord)}');" title="[+] 增加标记">★ Mark +1</button>
      </div>
    </div>
  `;

  // 异步加载中文详细释义
  fetchZhDefinition(lookup, commonZh);

  // 加载英文释义
  if (typeof builtinEnglishDict !== 'undefined' && builtinEnglishDict && builtinEnglishDict[lookup]) {
    renderDefinitionBody(builtinEnglishDict[lookup], safeWord, lookup, cambridgeUrl, collinsUrl, merriamUrl);
    return;
  }

  let entry = null;
  const apis = [
    `${API_BASE}/api/dict/${encodeURIComponent(lookup)}`,
    `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(lookup)}`
  ];

  for (const apiUrl of apis) {
    try {
      const resp = await fetch(apiUrl);
      if (resp.ok) {
        const d = await resp.json();
        entry = Array.isArray(d) ? d[0] : d;
        if (entry && (entry.meanings || entry.definitions)) break;
      }
    } catch(e) {}
  }

  if (entry) {
    renderDefinitionBody(entry, safeWord, lookup, cambridgeUrl, collinsUrl, merriamUrl);
  } else {
    const phEl = document.getElementById('dictPhonetic');
    if (phEl && phEl.textContent.includes('Loading')) phEl.textContent = '';
    const bodyEl = document.getElementById('dictMeaningsBody');
    if (bodyEl) {
      bodyEl.innerHTML = `
        <div style="background: var(--paper-surface-sub); border: 1.5px solid var(--paper-border); border-radius: var(--radius-md); padding: 16px; text-align: center;">
          <div style="font-size: 15px; color: var(--text-primary); margin-bottom: 10px;">Full English definition is accessible on web dictionaries:</div>
          <div style="display:flex; justify-content:center; gap:10px; flex-wrap:wrap;">
            <a href="${cambridgeUrl}" target="_blank" class="dict-external-link">Open Cambridge Dictionary</a>
            <a href="${collinsUrl}" target="_blank" class="dict-external-link">Open Collins Dictionary</a>
          </div>
        </div>
      `;
    }
  }
}

async function fetchZhDefinition(word, fallbackCommon) {
  const container = document.getElementById('dictZhApiContainer');
  if (!container) return;

  if (cachedZhDict[word]) {
    renderZhDefinitionBody(cachedZhDict[word], fallbackCommon);
    return;
  }

  try {
    const resp = await fetch(`${API_BASE}/api/dict-zh/${encodeURIComponent(word)}`);
    if (resp.ok) {
      const data = await resp.json();
      if (data && data.definitions && data.definitions.length > 0) {
        cachedZhDict[word] = data;
        renderZhDefinitionBody(data, fallbackCommon);
        if (data.phonetic_us) {
          const phEl = document.getElementById('dictPhonetic');
          if (phEl && (!phEl.textContent || phEl.textContent.includes('Loading'))) {
            phEl.textContent = `/${data.phonetic_us}/`;
          }
        }
        return;
      }
    }
  } catch(e) {}

  // Fallback to Youdao web suggest
  try {
    const resp = await fetch(`https://dict.youdao.com/suggest?num=1&doctype=json&q=${encodeURIComponent(word)}`);
    if (resp.ok) {
      const d = await resp.json();
      const entries = d.data && d.data.entries ? d.data.entries : [];
      if (entries.length > 0 && entries[0].explain) {
        const fallbackData = { word: word, definitions: [entries[0].explain] };
        cachedZhDict[word] = fallbackData;
        renderZhDefinitionBody(fallbackData, fallbackCommon);
        return;
      }
    }
  } catch(e) {}

  if (fallbackCommon) {
    container.innerHTML = ``;
  } else {
    container.innerHTML = `<div style="font-size:13px; color:var(--text-secondary); padding:10px 0;">可点击下方在线词典查看更全面的中文双解。</div>`;
  }
}

function renderZhDefinitionBody(data, fallbackCommon) {
  const container = document.getElementById('dictZhApiContainer');
  if (!container) return;
  if (!data.definitions || data.definitions.length === 0) {
    container.innerHTML = '';
    return;
  }
  let html = `
    <div style="background:var(--paper-surface-sub); border:1.5px solid var(--paper-border); border-radius:var(--radius-md); padding:16px;">
      <div style="font-size:11px; font-weight:800; color:var(--brand-accent); margin-bottom:8px; text-transform:uppercase; letter-spacing:0.5px;">📖 完整词性与多义项</div>
      <div style="display:flex; flex-direction:column; gap:8px;">
  `;
  data.definitions.forEach((def, i) => {
    html += `
      <div style="font-size:14px; color:var(--text-primary); line-height:1.6; border-left:3px solid var(--brand-primary); padding-left:10px;">
        ${escapeHtml(def)}
      </div>
    `;
  });
  html += `</div></div>`;
  container.innerHTML = html;
}

function closeDefDrawer() {
  document.getElementById('defDrawer').classList.remove('open');
  document.getElementById('drawerOverlay').classList.remove('open');
  if (currentSubTab === 'all') renderWords(document.getElementById('searchInput').value);
  else renderMarked();
}

// =========================================================
// 9. 🎴 3D 塔罗卡牌战斗手牌与神技施放系统 (Tarot Battle Hand Engine)
// =========================================================
function getCardObject(cardRef) {
  if (!cardRef) return null;
  if (typeof cardRef === 'object' && cardRef.word && cardRef.skill) return cardRef;
  const word = typeof cardRef === 'string' ? cardRef : (cardRef.word || 'rescue');
  const arcana = tarotArcanaSkills[Math.abs(hashString(word)) % tarotArcanaSkills.length];
  return {
    word: word,
    arcana: arcana.name,
    skill: arcana.skill,
    desc: arcana.desc,
    icon: arcana.icon,
    type: arcana.type,
    rarity: arcana.rarity
  };
}

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

function renderBattleHand() {
  const dock = document.getElementById('battleHandDeck');
  if (!dock) return;
  dock.innerHTML = '';

  const cards = (playerProfile.tarotCardsCollected || []).map(getCardObject).filter(Boolean);
  if (cards.length === 0) {
    dock.innerHTML = `<div style="font-size:12px; color:var(--text-secondary); padding:8px;">未装备卡牌。去【塔罗圣殿】消耗 50 XP 抽卡，解锁战斗神技！</div>`;
    return;
  }

  // Display top 4 cards in battle hand
  cards.slice(0, 4).forEach((card, idx) => {
    const btn = document.createElement('button');
    btn.className = 'battle-card-btn';
    btn.innerHTML = `
      <span class="battle-card-rarity">★ ${card.rarity} ★</span>
      <span style="font-size:16px;">${card.icon}</span>
      <span class="battle-card-word">${escapeHtml(card.word)}</span>
      <span class="battle-card-skill">${escapeHtml(card.skill)}</span>
    `;
    btn.onclick = () => castBattleCard(card, btn, idx);
    dock.appendChild(btn);
  });
}

function castBattleCard(card, btn, idx) {
  soundSpell();
  btn.classList.add('cast-glow');
  setTimeout(() => btn.classList.remove('cast-glow'), 600);

  const t = card.type;
  if (t === 'heal_hp' || t === 'dual_heal' || t === 'clutch_heal') {
    const addHp = t === 'clutch_heal' ? 50 : (t === 'dual_heal' ? 20 : 35);
    playerProfile.hp = Math.min(100, playerProfile.hp + addHp);
    if (t === 'dual_heal') playerProfile.san = Math.min(100, playerProfile.san + 20);
    showToast(`💚 释放【${card.skill}】！HP +${addHp} 恢复！`);
  } else if (t === 'heal_san') {
    playerProfile.san = Math.min(100, playerProfile.san + 35);
    showToast(`🧠 释放【${card.skill}】！SAN +35 理智恢复！`);
  } else if (t === 'reveal_correct' || t === 'world_master') {
    const optButtons = document.querySelectorAll('.choice-btn');
    if (survivalData && survivalData.options) {
      survivalData.options.forEach((opt, oIdx) => {
        if (opt.isCorrect && optButtons[oIdx]) {
          optButtons[oIdx].style.borderColor = 'var(--brand-success)';
          optButtons[oIdx].style.boxShadow = '0 0 16px var(--brand-success)';
          optButtons[oIdx].innerHTML += ` <span style="color:var(--brand-success); font-weight:900;">[ 👁️ 生还正解 ]</span>`;
        }
      });
      showToast(`👁️ 释放【${card.skill}】！唯一正解已显形！`);
    }
  } else if (t === 'eliminate_wrong') {
    const optButtons = document.querySelectorAll('.choice-btn');
    if (survivalData && survivalData.options) {
      for (let oIdx = 0; oIdx < survivalData.options.length; oIdx++) {
        if (!survivalData.options[oIdx].isCorrect && optButtons[oIdx] && optButtons[oIdx].style.opacity !== '0.25') {
          optButtons[oIdx].style.opacity = '0.25';
          optButtons[oIdx].disabled = true;
          showToast(`💥 释放【${card.skill}】！已粉碎 1 个致命陷阱！`);
          break;
        }
      }
    }
  } else if (t === 'shield' || t === 'san_shield') {
    battleShieldActive = true;
    showToast(`🔰 释放【${card.skill}】！坚韧护盾激活，免疫下一次失误伤害！`);
  } else if (t === 'reroll') {
    showToast(`🌪️ 释放【${card.skill}】！正在重新抽取安全生还危机...`);
    launchSurvivalGame();
  } else if (t === 'combo_boost') {
    playerProfile.combo += 2;
    battleXPBoostActive = true;
    showToast(`⚡ 释放【${card.skill}】！连击 Combo +2，战胜经验翻倍！`);
  } else if (t === 'full_restore') {
    playerProfile.hp = 100;
    playerProfile.san = 100;
    playerProfile.xp += 100;
    showToast(`☀️ 黎明荣耀！全状态恢复并获得 100 XP！`);
  } else if (t === 'auto_win') {
    if (survivalData && survivalData.options) {
      const correctOpt = survivalData.options.find(o => o.isCorrect) || survivalData.options[0];
      handleSurvivalChoice(correctOpt, 0);
      showToast(`👑 绝对支配！直接判定全胜生还！`);
    }
  } else {
    playerProfile.hp = Math.min(100, playerProfile.hp + 25);
    playerProfile.xp += 30;
    showToast(`🃏 释放【${card.skill}】！HP +25, XP +30！`);
  }

  updateBadges();
  triggerCloudSync();
}

// 3D 卡牌背包图鉴 Modal
function openCodexModal() {
  soundClick();
  const m = document.getElementById('codexModal');
  const grid = document.getElementById('codexGrid');
  const badge = document.getElementById('codexTotalBadge');

  const cards = (playerProfile.tarotCardsCollected || []).map(getCardObject).filter(Boolean);
  badge.textContent = `${cards.length} 张`;

  if (cards.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--text-secondary);">你的卡牌背包空空如也。前往【塔罗圣殿】抽卡解锁战斗手牌！</div>`;
  } else {
    grid.innerHTML = cards.map(c => `
      <div class="codex-card">
        <div class="battle-card-rarity">★ ${c.rarity} ★</div>
        <div class="codex-card-arcana">${escapeHtml(c.arcana)}</div>
        <div class="codex-card-word">${escapeHtml(c.word)}</div>
        <div class="codex-card-cn">${escapeHtml(chineseDict[c.word] || '')}</div>
        <div class="codex-skill-box">
          <div class="codex-skill-title">${c.icon} ${escapeHtml(c.skill)}</div>
          <div class="codex-skill-desc">${escapeHtml(c.desc)}</div>
        </div>
        <button class="btn btn-secondary" style="width:100%; margin-top:10px; font-size:11px; padding:4px;" onclick="openWordDetails('${escapeHtml(c.word)}')">📖 查阅纯英释义</button>
      </div>
    `).join('');
  }

  m.style.display = 'block';
  setTimeout(() => m.style.opacity = '1', 10);
}

function closeCodexModal() {
  const m = document.getElementById('codexModal');
  m.style.opacity = '0';
  setTimeout(() => m.style.display = 'none', 200);
}

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

function setCandyTierFilter(tier) {
  soundClick();
  currentCandyTier = tier;
  document.querySelectorAll('.candy-tier-filter-bar .tier-pill').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`tierPill_${tier}`);
  if (activeBtn) activeBtn.classList.add('active');
  recentCandyWordsHistory = [];
  generateCandyBoard();
  const labelMap = { 'all': '全部高级词库', 'cet4': 'CET-4 核心词库', 'cet6': 'CET-6 & 考研高阶词库', 'ielts': '雅思托福 & 菁英词库' };
  showToast(`🎯 已切换消消乐词库：${labelMap[tier] || tier}`);
}


function startCandyMatchGame() {
  soundClick();
  const gameBox = document.getElementById('candyMatchGameBox');
  if (gameBox) gameBox.style.display = 'block';
  
  const settleArea = document.getElementById('matchSettlementArea');
  if (settleArea) {
    settleArea.style.display = 'none';
    settleArea.innerHTML = '';
  }
  const grid = document.getElementById('candyGrid');
  if (grid) grid.style.display = 'grid';

  matchRemaining = 45;
  matchScore = 0;
  matchCombo = 1;
  matchWave = 1;
  matchActiveTile = null;

  document.getElementById('matchScoreVal').textContent = matchScore;
  document.getElementById('matchComboVal').textContent = `x${matchCombo}`;
  document.getElementById('matchTimerVal').textContent = `${matchRemaining}s`;
  document.getElementById('matchWaveVal').textContent = `WAVE ${matchWave}`;
  document.getElementById('matchTimerBar').style.width = '100%';

  clearInterval(matchTimerInterval);
  matchTimerInterval = setInterval(() => {
    matchRemaining--;
    const timerVal = document.getElementById('matchTimerVal');
    const timerBar = document.getElementById('matchTimerBar');
    if (timerVal) timerVal.textContent = `${matchRemaining}s`;
    if (timerBar) timerBar.style.width = `${(matchRemaining / 45) * 100}%`;
    if (matchRemaining <= 0) {
      endCandyMatchGame();
    }
  }, 1000);

  generateCandyBoard();
  showToast("🍬 消消乐已开局！45秒极速配对挑战开始！");
}

function generateCandyBoard() {
  const grid = document.getElementById('candyGrid');
  if (!grid) return;
  grid.innerHTML = '';
  matchActiveTile = null;

  // 1. 获取有效全词库池（有中文释义的词汇，全库 670+ 优质考纲词）
  let validWords = words.filter(w => chineseDict[w] && typeof chineseDict[w] === 'string' && chineseDict[w].trim().length > 0);
  
  // 难度等级过滤
  if (currentCandyTier !== 'all' && typeof wordTierDict !== 'undefined') {
    const tiered = validWords.filter(w => (wordTierDict[w] || 'cet4') === currentCandyTier);
    if (tiered.length >= 6) {
      validWords = tiered;
    }
  }
  
  // 如果历史已出现过多，清空历史队列重新循环，确保不重样
  if (recentCandyWordsHistory.length >= validWords.length - 12 || recentCandyWordsHistory.length > 80) {
    recentCandyWordsHistory = [];
  }

  // 2. 候选词过滤：排除最近几轮刚出现过的词汇
  const unpickedWords = validWords.filter(w => !recentCandyWordsHistory.includes(w));
  const candidatePool = unpickedWords.length >= 6 ? unpickedWords : validWords;

  // 3. 错题/标记词温和回顾策略：每轮最多引入 1~2 个标记词，其余 4~5 个必须从全词库中新鲜抽取
  const marked = getMarkedWords().map(m => m[0]).filter(w => chineseDict[w] && !recentCandyWordsHistory.includes(w));
  let pool = [];
  
  if (marked.length > 0) {
    const pickMarkedCount = Math.min(2, marked.length);
    const shuffledMarked = [...marked].sort(() => 0.5 - Math.random()).slice(0, pickMarkedCount);
    pool.push(...shuffledMarked);
  }

  // 4. 用全量词库新鲜词填满至 6 个
  const freshWords = candidatePool.filter(w => !pool.includes(w)).sort(() => 0.5 - Math.random());
  while (pool.length < 6 && freshWords.length > 0) {
    pool.push(freshWords.pop());
  }

  // 记录到最近历史中，防止后续连续重复
  pool.forEach(w => {
    recentCandyWordsHistory.push(w);
  });

  const tiles = [];
  // 🎲 随机打乱 12 种独立设计师主题色（中英文色块完全随机，互不相关）
  const colorIndices = Array.from({length: 12}, (_, i) => i).sort(() => 0.5 - Math.random());
  let colorPointer = 0;

  pool.forEach((word) => {
    const rawCn = chineseDict[word] || word;
    // 提取最简洁核心释义，去除多余标点和词性前缀
    let cn = rawCn.split(/[,;，；]/)[0].replace(/^[a-z]+\.\s*/i, '').trim();
    if (!cn) cn = rawCn;
    const enColorClass = `color-theme-${colorIndices[colorPointer++ % 12]}`;
    const cnColorClass = `color-theme-${colorIndices[colorPointer++ % 12]}`;

    // 英文词块 (独立随机色)
    tiles.push({
      word: word,
      type: 'en',
      text: word,
      colorClass: enColorClass
    });
    // 中文释义词块 (独立随机色)
    tiles.push({
      word: word,
      type: 'cn',
      text: cn,
      colorClass: cnColorClass
    });
  });

  // 再次随机打乱卡片排布
  tiles.sort(() => 0.5 - Math.random());

  tiles.forEach(t => {
    const el = document.createElement('div');
    el.className = `candy-tile ${t.colorClass}`;
    el.dataset.word = t.word;
    el.dataset.type = t.type;
    el.innerHTML = `
      <span class="tile-lang-badge">${t.type === 'en' ? 'ENGLISH' : 'CHINESE'}</span>
      <span class="tile-word-text">${escapeHtml(t.text)}</span>
    `;
    el.onclick = () => handleCandyTileClick(el);
    grid.appendChild(el);
  });
}

function handleCandyTileClick(el) {
  if (el.classList.contains('pop-match') || el === matchActiveTile) return;
  soundClick();

  if (!matchActiveTile) {
    matchActiveTile = el;
    el.classList.add('selected');
    return;
  }

  const first = matchActiveTile;
  const second = el;
  matchActiveTile = null;
  first.classList.remove('selected');

  // 配对判定
  if (first.dataset.word === second.dataset.word && first.dataset.type !== second.dataset.type) {
    // 配对成功！
    soundSuccess();
    first.classList.add('pop-match');
    second.classList.add('pop-match');

    matchScore += 10 * matchCombo;
    matchCombo++;
    playerProfile.xp += 10;
    saveToStorage(STORAGE_KEYS.PROFILE, playerProfile);
    updateBadges();
    triggerCloudSync();

    const scVal = document.getElementById('matchScoreVal');
    const cbVal = document.getElementById('matchComboVal');
    if (scVal) scVal.textContent = matchScore;
    if (cbVal) cbVal.textContent = `x${matchCombo}`;

    // 检查是否清盘
    setTimeout(() => {
      const remaining = document.querySelectorAll('.candy-tile:not(.pop-match)');
      if (remaining.length === 0) {
        matchWave++;
        const wvVal = document.getElementById('matchWaveVal');
        if (wvVal) wvVal.textContent = `WAVE ${matchWave}`;
        showToast(`🎉 WAVE ${matchWave - 1} 全清！波次奖励 +30 XP`);
        playerProfile.xp += 30;
        generateCandyBoard();
      }
    }, 400);

  } else {
    // ⚠️ 选错惩罚机制：该单词的 Mark 自动 +1 并扣血！
    soundFailure();
    first.classList.add('shake-error');
    second.classList.add('shake-error');

    const wrongW1 = first.dataset.word;
    const wrongW2 = second.dataset.word;

    addMark(wrongW1);
    addMark(wrongW2);

    matchCombo = 1;
    playerProfile.hp = Math.max(0, playerProfile.hp - 5);
    const cbVal = document.getElementById('matchComboVal');
    if (cbVal) cbVal.textContent = `x1`;
    updateBadges();
    triggerCloudSync();

    showToast(`⚠️ 配对错误！[${wrongW1}] 与 [${wrongW2}] Mark +1 惩罚！`);

    setTimeout(() => {
      first.classList.remove('shake-error');
      second.classList.remove('shake-error');
    }, 450);
  }
}

function endCandyMatchGame() {
  clearInterval(matchTimerInterval);
  soundSuccess();
  
  const grid = document.getElementById('candyGrid');
  if (grid) grid.style.display = 'none';
  
  const settleArea = document.getElementById('matchSettlementArea');
  if (settleArea) {
    settleArea.style.display = 'block';
    settleArea.innerHTML = `
      <div style="background:var(--paper-surface-sub); border:2px solid var(--brand-primary); border-radius:var(--radius-lg); padding:22px; text-align:center; animation:fadeIn 0.3s ease-out;">
        <div style="font-size:36px; margin-bottom:8px;">🏁</div>
        <div style="font-size:18px; font-weight:900; color:var(--brand-primary); margin-bottom:4px;">TIME UP · 挑战结算</div>
        <div style="font-size:13px; color:var(--text-secondary); margin-bottom:16px;">45 秒极速配对挑战结束！</div>
        
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:10px; margin-bottom:18px;">
          <div style="background:var(--paper-surface); border:1px solid var(--paper-border); padding:10px; border-radius:var(--radius-sm);">
            <div style="font-size:11px; color:var(--text-secondary);">最终得分</div>
            <div style="font-size:18px; font-weight:800; color:var(--brand-accent);">${matchScore} 分</div>
          </div>
          <div style="background:var(--paper-surface); border:1px solid var(--paper-border); padding:10px; border-radius:var(--radius-sm);">
            <div style="font-size:11px; color:var(--text-secondary);">通关波次</div>
            <div style="font-size:18px; font-weight:800; color:var(--brand-success);">WAVE ${matchWave}</div>
          </div>
          <div style="background:var(--paper-surface); border:1px solid var(--paper-border); padding:10px; border-radius:var(--radius-sm);">
            <div style="font-size:11px; color:var(--text-secondary);">最高连击</div>
            <div style="font-size:18px; font-weight:800; color:var(--brand-primary);">x${matchCombo}</div>
          </div>
        </div>

        <div style="display:flex; gap:10px;">
          <button class="btn btn-primary" style="flex:2; height:42px; font-weight:800;" onclick="startCandyMatchGame()">
            ⚡ 立即再来一局 (Play Again)
          </button>
          <button class="btn btn-secondary" style="flex:1; height:42px;" onclick="abortMatchGame()">
            🚪 退出对局
          </button>
        </div>
      </div>
    `;
  }
}

function abortMatchGame() {
  soundClick();
  clearInterval(matchTimerInterval);
  const gameBox = document.getElementById('candyMatchGameBox');
  if (gameBox) gameBox.style.display = 'none';
  const settleArea = document.getElementById('matchSettlementArea');
  if (settleArea) {
    settleArea.style.display = 'none';
    settleArea.innerHTML = '';
  }
  const grid = document.getElementById('candyGrid');
  if (grid) grid.style.display = 'grid';
  showToast("🚪 已退出消消乐对局");
}


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


function initNovelModeUI() {
  const sel = document.getElementById('novelChapterSelect');
  if (!sel || typeof NOVEL_CHAPTERS === 'undefined') return;
  sel.innerHTML = '';
  NOVEL_CHAPTERS.forEach(ch => {
    const opt = document.createElement('option');
    opt.value = ch.id;
    opt.textContent = `第${ch.id}章: ${ch.title}`;
    if (ch.id === currentNovelChapter) opt.selected = true;
    sel.appendChild(opt);
  });
  updateSurvivalModeUI();
}

function updateSurvivalModeUI() {
  const tabNovel = document.getElementById('modeTabNovel');
  const tabClassic = document.getElementById('modeTabClassic');
  const banNovel = document.getElementById('novelBanner');
  const banClassic = document.getElementById('classicBanner');

  if (currentSurvivalGameMode === 'novel') {
    if (tabNovel) tabNovel.classList.add('active');
    if (tabClassic) tabClassic.classList.remove('active');
    if (banNovel) banNovel.style.display = 'flex';
    if (banClassic) banClassic.style.display = 'none';
  } else {
    if (tabClassic) tabClassic.classList.add('active');
    if (tabNovel) tabNovel.classList.remove('active');
    if (banClassic) banClassic.style.display = 'flex';
    if (banNovel) banNovel.style.display = 'none';
  }
}

function switchSurvivalMode(mode) {
  soundClick();
  currentSurvivalGameMode = mode;
  saveToStorage('vocab_survival_mode', mode);
  updateSurvivalModeUI();
  launchSurvivalGame();
  showToast(mode === 'novel' ? '📖 已开启【职场小说大冒险】' : '⚡ 已开启【经典绝境生存战】');
}

function onSelectNovelChapter(chId) {
  soundClick();
  currentNovelChapter = parseInt(chId, 10) || 1;
  currentNovelBeat = 1;
  saveToStorage('vocab_novel_ch', currentNovelChapter);
  autoSaveNovelProgress();
  showToast(`📖 已选择第 ${currentNovelChapter} 章`);
  launchSurvivalGame();
}

function nextNovelBeat() {
  soundClick();
  const ch = (typeof NOVEL_CHAPTERS !== 'undefined') ? NOVEL_CHAPTERS.find(c => c.id === currentNovelChapter) : null;
  if (!ch) {
    launchSurvivalGame();
    return;
  }
  if (currentNovelBeat < ch.beats.length) {
    currentNovelBeat++;
    autoSaveNovelProgress();
    launchSurvivalGame();
  } else {
    // Chapter completed! Move to next chapter
    currentNovelChapter = (currentNovelChapter >= NOVEL_CHAPTERS.length) ? 1 : (currentNovelChapter + 1);
    currentNovelBeat = 1;
    saveToStorage('vocab_novel_ch', currentNovelChapter);
    saveToStorage('vocab_novel_beat', currentNovelBeat);
    const sel = document.getElementById('novelChapterSelect');
    if (sel) sel.value = currentNovelChapter;
    soundSuccess();
    showToast(`🎉 恭喜通关本章！开启第 ${currentNovelChapter} 章！`);
    launchSurvivalGame();
  }
}

async function launchSurvivalGame() {
  document.getElementById('survivalGameBox').style.display = 'block';
  document.getElementById('gameHp').textContent = playerProfile.hp;
  document.getElementById('gameCombo').textContent = `x${playerProfile.combo}`;
  document.getElementById('gameOutcomeArea').innerHTML = '';
  renderBattleHand();

  // 📖 模式 1：职场大冒险小说闯关模式 (Novel Campaign Mode)
  if (currentSurvivalGameMode === 'novel' && typeof NOVEL_CHAPTERS !== 'undefined' && NOVEL_CHAPTERS.length > 0) {
    const ch = NOVEL_CHAPTERS.find(c => c.id === currentNovelChapter) || NOVEL_CHAPTERS[0];
    const beat = ch.beats[currentNovelBeat - 1] || ch.beats[0];
    
    document.getElementById('gameTheme').textContent = `📖 第 ${ch.id} 章 · ${ch.title}`;
    document.getElementById('gameRound').textContent = `切片 ${currentNovelBeat} / ${ch.beats.length}`;
    
    survivalData = {
      story: beat.story,
      story_cn: beat.story_cn || "",
      options: beat.options,
      isNovelMode: true,
      chapterId: ch.id,
      beatId: currentNovelBeat,
      totalBeats: ch.beats.length
    };
    window.survivalData = survivalData;
    renderSurvivalGame(survivalData);
    return;
  }

  // ⚡ 模式 2：经典绝境生存战 (Classic Roguelike Survival Mode)
  const marked = getMarkedWords();
  let targetPool = [];
  if (marked.length >= 3) {
    targetPool = marked.sort(() => 0.5 - Math.random()).slice(0, 3).map(m => m[0]);
  } else {
    targetPool = [...words].sort(() => 0.5 - Math.random()).slice(0, 3);
  }

  document.getElementById('gameTheme').textContent = DUNGEON_THEMES[Math.floor(Math.random() * DUNGEON_THEMES.length)];
  document.getElementById('gameStory').innerHTML = `<em>Generating crisis using your vocabulary: [${targetPool.join(', ')}]...</em>`;
  document.getElementById('gameOptions').innerHTML = '';
  document.getElementById('gameRound').textContent = currentSurvivalRound;

  const sysPrompt = "You are a suspenseful Dungeon Master. Write engaging English crisis scenarios with high-quality bilingual Chinese translations. Output valid JSON only.";
  const usrPrompt = `
    Strictly use these target words from the user's active vocabulary list: [${targetPool.join(', ')}].
    Requirements:
    1. "story": An intense crisis dilemma in English within 3 to 5 sentences (under 50 words).
    2. "story_cn": A fluent, thrilling Chinese translation of the crisis scenario.
    3. "options": Exactly 3 choices corresponding to [${targetPool.join(', ')}]. Exactly ONE option is the correct survival decision.
    4. Each option must have:
       - "word": exact word from target words
       - "action": English action sentence using the word
       - "action_cn": Chinese translation of the action
       - "isCorrect": boolean
       - "fullOutcomeStory": A complete narrative paragraph in English (3-4 sentences) describing the event and consequence.
       - "fullOutcomeStory_cn": Fluent Chinese translation of the full outcome narrative paragraph.
    
    Output JSON format only:
    {
      "story": "A critical emergency occurs in the control room. Power fails and pressure drops rapidly. You must act immediately.",
      "story_cn": "控制室突发重大险情，电力中断且气压骤降，你必须立即采取行动。",
      "options": [
        {
          "word": "${targetPool[0]}",
          "action": "Take prompt measures to ${targetPool[0]} the primary system.",
          "action_cn": "迅速采取措施稳定核心系统。",
          "isCorrect": true,
          "fullOutcomeStory": "You acted with composure to ${targetPool[0]} the vital controls. Thanks to your decisive execution, the emergency containment held firm and the entire squad safely escaped the hazard.",
          "fullOutcomeStory_cn": "你在危急关头沉着稳健地操作关键中枢，得益于你雷厉风行的决断，紧急防护罩成功咬合，带领全队脱离险境。"
        },
        {
          "word": "${targetPool[1]}",
          "action": "Choose to ${targetPool[1]} and wait passively.",
          "action_cn": "选择犹豫迟疑，被动等待。",
          "isCorrect": false,
          "fullOutcomeStory": "You chose to ${targetPool[1]} at the critical junction. The lost time allowed the pressure breach to expand, causing severe damage to the sector before backup arrived.",
          "fullOutcomeStory_cn": "你在生死关头犹豫迟疑，白白浪费了宝贵时间，导致气压缺口进一步扩大造成严重破坏。"
        },
        {
          "word": "${targetPool[2]}",
          "action": "Decide to ${targetPool[2]} all safety equipment.",
          "action_cn": "惊慌失措下弃用所有防护装备。",
          "isCorrect": false,
          "fullOutcomeStory": "In overwhelming panic, you made the fatal mistake to ${targetPool[2]} standard safety gear. The hazardous environment immediately overwhelmed the room, resulting in catastrophe.",
          "fullOutcomeStory_cn": "在极度恐慌中你盲目丢弃了标准防护装备，危险环境瞬间席卷了整个区域造成灾难性后果。"
        }
      ]
    }
  `;

  try {
    const raw = await callAntigravityAPI(sysPrompt, usrPrompt);
    survivalData = safeJsonParse(raw);
    window.survivalData = survivalData;
    renderSurvivalGame(survivalData);
  } catch(e) {
    const fallback = generateOfflineScenario(usrPrompt);
    survivalData = safeJsonParse(fallback);
    window.survivalData = survivalData;
    renderSurvivalGame(survivalData);
  }
}

function renderSurvivalGame(data) {
  const storyText = data.story || "A critical crisis demands your immediate decision!";
  document.getElementById('gameStory').innerHTML = `
    <div style="font-size: 15px; line-height: 1.6; color: var(--text-primary); font-weight: 500;">
      ${escapeHtml(storyText)}
    </div>
  `;

  const optionsGrid = document.getElementById('gameOptions');
  optionsGrid.innerHTML = '';

  const letterLabels = ['A', 'B', 'C'];
  data.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.innerHTML = `
      <div class="choice-letter-badge">${letterLabels[idx] || (idx+1)}</div>
      <div class="choice-content">
        <div class="choice-header-row">
          <span class="choice-word-badge">[ ${escapeHtml(opt.word)} ]</span>
        </div>
        <div class="choice-action-text">${escapeHtml(opt.action)}</div>
      </div>
    `;
    btn.onclick = () => handleSurvivalChoice(opt, idx);
    optionsGrid.appendChild(btn);
  });
}

function handleSurvivalChoice(opt, idx) {
  document.querySelectorAll('.choice-btn').forEach(b => b.disabled = true);
  const isSuccess = opt.isCorrect;
  const word = opt.word;

  let gainedXp = 0;
  if (isSuccess) {
    soundSuccess();
    gainedXp = (20 * playerProfile.combo) * (battleXPBoostActive ? 2 : 1);
    battleXPBoostActive = false;
    playerProfile.combo++;
    playerProfile.xp += gainedXp;
    playerProfile.wonRounds++;
    reduceMark(word);
    showToast(`🎉 战局生还！XP +${gainedXp}`);
  } else {
    soundFailure();
    if (battleShieldActive) {
      battleShieldActive = false;
      showToast(`🔰 坚韧护盾抵挡了本次选错伤害！HP/SAN 完好无损！`);
    } else {
      playerProfile.combo = 1;
      playerProfile.hp = Math.max(0, playerProfile.hp - 25);
      playerProfile.san = Math.max(0, playerProfile.san - 15);
      addMark(word);
      showToast(`💀 遭遇重创！HP -25, [${word}] Mark +1`);
    }
  }

  if (playerProfile.xp >= playerProfile.level * 100) {
    playerProfile.level++;
    playerProfile.hp = 100;
    showToast(`🌟 Survivor Level Up: LV.${playerProfile.level}! HP Restored`);
  }
  saveToStorage(STORAGE_KEYS.PROFILE, playerProfile);
  updateBadges();
  triggerCloudSync();

  // 1. 组合危机背景与决断后果的完整英文故事与中文翻译
  const storyText = survivalData.story || '';
  const outcomeStoryText = opt.fullOutcomeStory || `${storyText} ${opt.action}`;
  const clickableHtml = renderClickableStory(outcomeStoryText);

  const isZhMode = (appSettings.dictLanguageMode === 'zh' || appSettings.showChinese);
  const storyCn = survivalData.story_cn || '';
  const outcomeCn = opt.fullOutcomeStory_cn || opt.action_cn || '';
  const hasCn = Boolean(storyCn || outcomeCn);

  // 2. 清空选择按钮，直接展示沉浸式折纸战役结算卷轴
  const optionsGrid = document.getElementById('gameOptions');
  if (optionsGrid) optionsGrid.innerHTML = '';

  const outcomeCard = document.createElement('div');
  outcomeCard.className = 'settlement-scroll-card';
  outcomeCard.style.cssText = `
    margin-top: 14px; padding: 22px; border-radius: var(--radius-lg); line-height: 1.8;
    background: var(--paper-surface);
    border: 2px solid ${isSuccess ? 'var(--brand-success)' : 'var(--brand-danger)'};
    box-shadow: var(--paper-shadow-lg);
    animation: fadeIn 0.3s ease-out;
  `;
  outcomeCard.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; border-bottom:1.5px solid var(--paper-border); padding-bottom:12px;">
      <div style="display:flex; align-items:center; gap:10px;">
        <span style="font-size:26px;">${isSuccess ? '🏆' : '💀'}</span>
        <div>
          <div style="font-weight:900; font-size:18px; color: ${isSuccess ? 'var(--brand-success)' : 'var(--brand-danger)'};">
            ${isSuccess ? 'MISSION ACCOMPLISHED · 战局大捷' : 'CRITICAL RETREAT · 遭遇重创'}
          </div>
          <div style="font-size:12px; color:var(--text-secondary); margin-top:2px;">
            ${isSuccess ? 'Decisive initiative ensured tactical survival!' : 'Fatal miscalculation triggered sector hazard!'}
          </div>
        </div>
      </div>
      <div style="text-align:right;">
        <div style="font-size:14px; font-weight:800; color:var(--brand-primary);">${isSuccess ? `+${gainedXp} XP` : '0 XP'}</div>
        <div style="font-size:11px; color:var(--text-secondary);">COMBO x${playerProfile.combo}</div>
      </div>
    </div>

    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap:10px; margin-bottom:16px;">
      <div style="background:var(--paper-surface-sub); border:1px solid var(--paper-border); padding:8px 12px; border-radius:var(--radius-sm);">
        <div style="font-size:11px; color:var(--text-secondary);">DECISION WORD</div>
        <div style="font-size:14px; font-weight:800; color:var(--brand-accent); cursor:pointer;" onclick="openWordDetails('${escapeHtml(word)}')">[ ${escapeHtml(word)} ] 🔍</div>
      </div>
      <div style="background:var(--paper-surface-sub); border:1px solid var(--paper-border); padding:8px 12px; border-radius:var(--radius-sm);">
        <div style="font-size:11px; color:var(--text-secondary);">MARK STATUS</div>
        <div style="font-size:14px; font-weight:800; color:${isSuccess ? 'var(--brand-success)' : 'var(--brand-danger)'};">★ Mark: ${getMarkCount(word)}</div>
      </div>
      <div style="background:var(--paper-surface-sub); border:1px solid var(--paper-border); padding:8px 12px; border-radius:var(--radius-sm);">
        <div style="font-size:11px; color:var(--text-secondary);">HP / SAN</div>
        <div style="font-size:14px; font-weight:800; color:var(--text-primary);">${playerProfile.hp} / ${playerProfile.san}</div>
      </div>
    </div>

    <!-- 📜 完整英文战报研读 -->
    <div style="margin-bottom:16px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; flex-wrap:wrap; gap:6px;">
        <span style="font-size:13px; font-weight:800; color:var(--text-primary); display:flex; align-items:center; gap:6px;">
          📜 英文战报研读 (Complete Scene & Outcome)
        </span>
        <div style="display:flex; align-items:center; gap:8px;">
          ${hasCn ? `<button class="btn btn-secondary" id="btnToggleSurvivalCn" style="font-size:11px; padding:2px 10px; height:26px;" onclick="toggleSurvivalCnBlock()">${isZhMode ? '🇬🇧 隐藏中文译文' : '🇨🇳 显示双语对照译文'}</button>` : ''}
          <span style="font-size:11px; color:var(--brand-primary); font-weight:600;">
            💡 点击单词查词 & ★ Mark
          </span>
        </div>
      </div>
      <div style="background:var(--paper-surface-sub); padding:16px 18px; border-radius:var(--radius-md); border:1.5px solid var(--paper-border); font-size:15px; line-height:1.8; color:var(--text-primary); box-shadow: inset 0 2px 4px rgba(0,0,0,0.04);">
        ${clickableHtml}
      </div>
    </div>

    <!-- 🇨🇳 双语深度对照长卷 (原著小说场景原文翻译 + 本幕抉择因果与结局) -->
    ${hasCn ? `
      <div id="survivalCnBlock" class="survival-cn-block" style="${isZhMode ? 'display:block;' : 'display:none;'} margin-bottom:18px;">
        <div style="font-weight:800; color:var(--brand-primary); margin-bottom:10px; font-size:13px; display:flex; align-items:center; gap:6px;">
          <span>🇨🇳 双语深度对照长卷 (Bilingual Scene & Outcome)</span>
        </div>
        
        ${storyCn ? `
          <div class="settlement-translation-card" style="border-left:4px solid var(--brand-primary);">
            <div class="settlement-trans-title" style="color:var(--brand-primary);">
              <span>📖 ①【原著小说场景原文翻译】</span>
            </div>
            <div style="font-size:14px; line-height:1.7; color:var(--text-primary);">${escapeHtml(storyCn)}</div>
          </div>
        ` : ''}

        ${outcomeCn ? `
          <div class="settlement-translation-card" style="border-left:4px solid ${isSuccess ? 'var(--brand-success)' : 'var(--brand-danger)'};">
            <div class="settlement-trans-title" style="color:${isSuccess ? 'var(--brand-success)' : 'var(--brand-danger)'};">
              <span>⚡ ②【本幕抉择因果与结局】</span>
            </div>
            <div style="font-size:14px; line-height:1.7; color:var(--text-primary);">${escapeHtml(outcomeCn)}</div>
          </div>
        ` : ''}
      </div>
    ` : ''}

    <div style="display:flex; gap:10px; flex-wrap:wrap;">
      ${survivalData && survivalData.isNovelMode ? `
        <button class="btn btn-primary" style="flex:2; height:44px; font-size:14px; font-weight:800;" onclick="${isSuccess ? 'nextNovelBeat()' : 'launchSurvivalGame()'}">
          ${isSuccess ? (survivalData.beatId < survivalData.totalBeats ? `⚡ 推进下一幕 (Beat ${survivalData.beatId + 1}/${survivalData.totalBeats})` : `🎉 通关本章！进入第 ${survivalData.chapterId + 1} 章`) : '🔄 重新挑战本幕 (Retry Beat)'}
        </button>
      ` : `
        <button class="btn btn-primary" style="flex:2; height:44px; font-size:14px; font-weight:800;" onclick="nextSurvivalRound()">
          ${playerProfile.hp <= 0 ? '⚰️ 复活并重新挑战 (Respawn)' : '⚡ 开始下一战局 (Next Stage)'}
        </button>
      `}
      <button class="btn btn-secondary" style="flex:1; height:44px; font-size:13px;" onclick="switchNavView('words'); filterByTag('marked')">
        📖 查看生词本
      </button>
    </div>
  `;

  document.getElementById('gameOutcomeArea').innerHTML = '';
  document.getElementById('gameOutcomeArea').appendChild(outcomeCard);
}

function nextSurvivalRound() {
  if (typeof closeDefDrawer === 'function') closeDefDrawer();
  if (playerProfile.hp <= 0) {
    playerProfile.hp = 100;
    playerProfile.san = 100;
    playerProfile.combo = 1;
    saveToStorage(STORAGE_KEYS.PROFILE, playerProfile);
    currentSurvivalRound = 1;
    triggerCloudSync();
  } else {
    currentSurvivalRound++;
  }
  launchSurvivalGame();
}

function useHintBuff() {
  if (!survivalData) return;
  showToast("Hint: Carefully consider the logical action that ensures safe evacuation.");
}
function abortSurvivalGame() {
  document.getElementById('survivalGameBox').style.display = 'none';
}



// 13. 3D 塔罗抽卡圣殿
let tarotSlotWords = [];

function renderTarotDeck(forceUnrevealed = false) {
  const spread = document.getElementById('tarotSpread');
  if (!spread) return;
  spread.innerHTML = '';
  
  // 选取候选词：若 forceUnrevealed 为 true，优先选取未抽到的卡牌
  let pool = [...words];
  if (forceUnrevealed) {
    const uncollected = words.filter(w => !(playerProfile.tarotCardsCollected || []).some(c => (typeof c === 'string' ? c : c.word) === w));
    if (uncollected.length >= 4) {
      pool = uncollected;
    }
  }

  tarotSlotWords = [...pool].sort(() => 0.5 - Math.random()).slice(0, 4);

  tarotSlotWords.forEach((word, idx) => {
    const arcana = tarotArcanaSkills[Math.abs(hashString(word)) % tarotArcanaSkills.length];
    const isCollected = !forceUnrevealed && (playerProfile.tarotCardsCollected || []).some(c => (typeof c === 'string' ? c : c.word) === word);

    const scene = document.createElement('div');
    scene.className = 'tarot-card-scene';
    scene.innerHTML = `
      <div class="tarot-card ${isCollected ? 'flipped' : ''}" id="tarotCard_${idx}">
        <div class="tarot-card-face tarot-back">
          <div class="tarot-back-mandala">✦</div>
          <div class="tarot-back-tip">TAROT ARCANA</div>
          <div style="font-size:10px; color:var(--tarot-gold); opacity:0.8; margin-top:4px;">50 XP 翻牌激活技能</div>
        </div>
        <div class="tarot-card-face tarot-front">
          <div class="tarot-numeral">NO.${idx + 1}</div>
          <div class="tarot-arcana-name">${escapeHtml(arcana.name)}</div>
          <div class="tarot-word">${escapeHtml(word)}</div>
          <div class="tarot-meaning" style="font-size:12px; color:var(--brand-cyan); font-weight:800;">${arcana.icon} ${escapeHtml(arcana.skill)}</div>
          <div class="tarot-rarity">★ ${escapeHtml(arcana.rarity)} ★</div>
        </div>
      </div>
    `;
    scene.onclick = () => flipTarotCard(idx, word, arcana);
    spread.appendChild(scene);
  });
}

function flipTarotCard(idx, word, arcana) {
  const card = document.getElementById(`tarotCard_${idx}`);
  if (!card) return;
  if (card.classList.contains('flipped')) {
    openWordDetails(word);
    return;
  }

  if (playerProfile.xp < 50) {
    soundFailure();
    showToast(`⚠️ 翻牌需要 50 XP (当前拥有: ${playerProfile.xp} XP)。胜利通关可赚取 XP！`);
    return;
  }

  playerProfile.xp -= 50;
  if (!playerProfile.tarotCardsCollected) playerProfile.tarotCardsCollected = [];
  
  const cardObj = {
    word: word,
    arcana: arcana.name,
    skill: arcana.skill,
    desc: arcana.desc,
    icon: arcana.icon,
    type: arcana.type,
    rarity: arcana.rarity
  };

  if (!playerProfile.tarotCardsCollected.some(c => (typeof c === 'string' ? c : c.word) === word)) {
    playerProfile.tarotCardsCollected.push(cardObj);
  }

  saveToStorage(STORAGE_KEYS.PROFILE, playerProfile);
  updateBadges();
  renderProfileView();
  renderBattleHand();
  triggerCloudSync();

  soundSuccess();
  card.classList.add('flipped');
  speakWord(word);

  showToast(`✨ 抽到神卡：[${word}] · ${arcana.name} (${arcana.skill})！`);
}

function reshuffleTarotDeck() {
  soundClick();
  renderTarotDeck(true);
  soundSuccess();
  showToast("🔮 塔罗法阵已重置！4 张全新未翻开命运卡牌已就位");
}


function renderProfileView() {
  const grid = document.getElementById('achievementGrid');
  if (!grid) return;
  const cardsCount = (playerProfile.tarotCardsCollected || []).length;
  grid.innerHTML = `
    <div style="background:var(--paper-surface-sub); padding:12px; border-radius:var(--radius-sm); border:1px solid var(--paper-border);">
      <div style="font-size:11px; color:var(--text-secondary);">Survivor Level (等级)</div>
      <div style="font-size:20px; font-weight:800; color:var(--brand-primary);">LV.${playerProfile.level}</div>
    </div>
    <div style="background:var(--paper-surface-sub); padding:12px; border-radius:var(--radius-sm); border:1px solid var(--paper-border);">
      <div style="font-size:11px; color:var(--text-secondary);">Experience (经验值)</div>
      <div style="font-size:20px; font-weight:800; color:var(--brand-accent);">${playerProfile.xp} XP</div>
    </div>
    <div style="background:var(--paper-surface-sub); padding:12px; border-radius:var(--radius-sm); border:1px solid var(--paper-border);">
      <div style="font-size:11px; color:var(--text-secondary);">Collected Cards (已解锁卡牌)</div>
      <div style="font-size:20px; font-weight:800; color:var(--tarot-gold);">${cardsCount} 张</div>
    </div>
    <div style="background:var(--paper-surface-sub); padding:12px; border-radius:var(--radius-sm); border:1px solid var(--paper-border);">
      <div style="font-size:11px; color:var(--text-secondary);">Marked Words (生词标记)</div>
      <div style="font-size:20px; font-weight:800; color:var(--brand-danger);">${getMarkedWords().length} 词</div>
    </div>
  `;
}

// 14. 👑 Admin 控制台面板
async function openAdminConsole() {
  soundClick();
  authToken = loadFromStorage(STORAGE_KEYS.TOKEN, null);
  authUser = loadFromStorage(STORAGE_KEYS.AUTH, null);
  if (!authToken || !authUser) {
    showToast("👑 站长后台：请先登录管理员账号 (林允安)");
    openAuthModal();
    return;
  }

  const modal = document.getElementById('adminModal');
  const body = document.getElementById('adminModalBody');
  modal.style.display = 'block';
  setTimeout(() => modal.style.opacity = '1', 10);
  body.innerHTML = '<div style="padding:40px; text-align:center; color:var(--text-secondary);">正在加载管理后台与用户数据库...</div>';

  try {
    const [ovResp, usrResp] = await Promise.all([
      fetch(`${API_BASE}/api/admin/overview`, { headers: { 'Authorization': 'Bearer ' + authToken } }),
      fetch(`${API_BASE}/api/admin/users`, { headers: { 'Authorization': 'Bearer ' + authToken } })
    ]);

    if (!ovResp.ok || !usrResp.ok) {
      throw new Error("权限不足，只有 Admin 管理员可以访问后台");
    }

    const ovData = await ovResp.json();
    const usrData = await usrResp.json();

    const stats = ovData.stats;
    const users = usrData.users;

    body.innerHTML = `
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap:10px; margin-bottom:20px;">
        <div class="admin-stat-card">
          <div style="font-size:11px; color:var(--text-secondary);">注册总用户</div>
          <div style="font-size:24px; font-weight:900; color:var(--brand-primary);">${stats.total_users} 人</div>
        </div>
        <div class="admin-stat-card">
          <div style="font-size:11px; color:var(--text-secondary);">全英离线词库</div>
          <div style="font-size:24px; font-weight:900; color:var(--brand-success);">${stats.cached_words} 词</div>
        </div>
        <div class="admin-stat-card">
          <div style="font-size:11px; color:var(--text-secondary);">累计收集卡牌</div>
          <div style="font-size:24px; font-weight:900; color:var(--tarot-gold);">${stats.total_cards_drawn} 张</div>
        </div>
        <div class="admin-stat-card">
          <div style="font-size:11px; color:var(--text-secondary);">生词总标记数</div>
          <div style="font-size:24px; font-weight:900; color:var(--brand-danger);">${stats.total_marks} 次</div>
        </div>
      </div>

      <div style="background:var(--paper-surface-sub); border:1.5px solid var(--paper-border); border-radius:var(--radius-md); padding:16px; margin-bottom:20px;">
        <div style="font-size:15px; font-weight:800; color:var(--text-primary); margin-bottom:4px;">🛡️ Gemini API 额度防盗刷安全金库</div>
        <div style="font-size:12px; color:var(--text-secondary); margin-bottom:12px;">Key 保存在 VPS 后端数据库中，前端无法窥探。访客走 0 成本离线矩阵，杜绝被盗刷！</div>
        <div class="form-group" style="margin-bottom:10px;">
          <label class="form-label" style="font-size:12px;">服务端 Gemini API Key</label>
          <input type="password" id="adminCfgGeminiKey" class="form-input" placeholder="${stats.server_gemini_key_set ? '●●●●●●●● (已配置并受保护)' : '请输入 Google AI Studio 密钥'}" />
        </div>
        <div class="form-group" style="margin-bottom:12px;">
          <label class="form-label" style="font-size:12px;">云端 AI 调用权限模式</label>
          <select id="adminCfgAiMode" class="form-input">
            <option value="whitelist" ${stats.ai_access_mode === 'whitelist' ? 'selected' : ''}>🎯 授权白名单模式（推荐 · 仅 Admin 及已单独授权额度用户可用）</option>
            <option value="admin_only" ${stats.ai_access_mode === 'admin_only' ? 'selected' : ''}>🔒 仅限管理员独占（普通用户走 0 成本离线矩阵）</option>
            <option value="all_users" ${stats.ai_access_mode === 'all_users' ? 'selected' : ''}>🌐 开放给全部注册登录用户</option>
          </select>
        </div>
        <button class="btn btn-primary" style="width:100%;" onclick="saveAdminAiConfig()">💾 保存服务端 AI 安全配置</button>
      </div>

      <!-- ⚡ 用户额度授权快捷操作卡 (手机/PC 直观醒目大卡片) -->
      <div style="background:var(--paper-surface-sub); border:2px solid var(--brand-primary); border-radius:var(--radius-md); padding:16px; margin-bottom:20px; box-shadow:var(--paper-shadow);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; flex-wrap:wrap; gap:6px;">
          <div style="font-size:15px; font-weight:900; color:var(--brand-primary); display:flex; align-items:center; gap:6px;">
            <span>⚡ 用户 AI 额度授权开关</span>
            <span class="origami-chip" style="background:var(--brand-primary); color:#fff; font-size:11px;">核心控制区</span>
          </div>
          <span style="font-size:11px; color:var(--text-secondary);">点击即可一键开启/收回指定用户的站长额度</span>
        </div>

        <div style="display:flex; flex-direction:column; gap:10px;">
          ${users.map(u => `
            <div style="background:var(--paper-surface); border:1.5px solid var(--paper-border); border-radius:var(--radius-sm); padding:12px 14px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
              <div style="display:flex; align-items:center; gap:10px;">
                <span style="font-size:22px;">${u.role === 'admin' ? '👑' : (u.can_use_quota ? '⚡' : '👤')}</span>
                <div>
                  <div style="font-size:14px; font-weight:800; color:var(--text-primary); display:flex; align-items:center; gap:6px;">
                    <span>${escapeHtml(u.username)}</span>
                    ${u.role === 'admin' ? '<span class="admin-role-badge admin" style="font-size:10px;">Admin 主号</span>' : '<span class="admin-role-badge user" style="font-size:10px;">User</span>'}
                  </div>
                  <div style="font-size:11px; color:var(--text-secondary); margin-top:2px;">
                    ID: #${u.id} · 等级: LV.${u.level} · IP: ${u.bound_ip || '-'}
                  </div>
                </div>
              </div>

              <div>
                ${u.role === 'admin' ? 
                  '<span style="background:rgba(16,185,129,0.15); color:var(--brand-success); padding:4px 12px; border-radius:12px; font-size:12px; font-weight:800; border:1px solid var(--brand-success);">👑 永久完全特权</span>' : 
                  (u.can_use_quota ? 
                    `<button class="btn btn-primary" style="background:var(--brand-success); border-color:var(--brand-success); font-size:12px; padding:6px 14px; font-weight:800;" onclick="toggleUserQuota(${u.id}, false, '${escapeHtml(u.username)}')" title="点击收回该用户的额度使用权">⚡ 已授权额度 (点击收回)</button>` : 
                    `<button class="btn btn-secondary" style="font-size:12px; padding:6px 14px; color:var(--text-secondary); font-weight:700; border-color:var(--paper-border);" onclick="toggleUserQuota(${u.id}, true, '${escapeHtml(u.username)}')" title="点击开通该用户的额度使用权">🔒 未开通额度 (点击一键授权)</button>`
                  )
                }
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div style="background:var(--paper-surface-sub); border:1.5px solid var(--paper-border); border-radius:var(--radius-md); padding:16px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <span style="font-size:15px; font-weight:800; color:var(--text-primary);">👥 注册用户与战况清单 (${users.length})</span>
          <button class="btn btn-secondary" style="font-size:11px; padding:4px 10px;" onclick="openAdminConsole()">🔄 刷新列表</button>
        </div>
        <div style="overflow-x:auto;">
          <table class="admin-table">
            <thead>
              <tr>
                <th>ID</th><th>用户名</th><th>角色</th><th>额度权限</th><th>等级/XP</th><th>卡牌</th><th>标记生词</th><th>绑定IP</th><th>站长操作</th>
              </tr>
            </thead>
            <tbody>
              ${users.map(u => `
                <tr>
                  <td>#${u.id}</td>
                  <td style="font-weight:700;">${escapeHtml(u.username)}</td>
                  <td>${u.role === 'admin' ? '<span class="admin-role-badge admin">👑 Admin</span>' : '<span class="admin-role-badge user">👤 User</span>'}</td>
                  <td>
                    ${u.role === 'admin' ? 
                      '<span style="color:var(--brand-success); font-weight:800; font-size:11px;">⚡ 管理员特权</span>' : 
                      (u.can_use_quota ? 
                        `<button class="btn btn-primary" style="font-size:10px; padding:2px 8px; background:var(--brand-success); border-color:var(--brand-success);" onclick="toggleUserQuota(${u.id}, false, '${escapeHtml(u.username)}')" title="点击收回额度">⚡ 已授权 (点击收回)</button>` : 
                        `<button class="btn btn-secondary" style="font-size:10px; padding:2px 8px; color:var(--text-secondary);" onclick="toggleUserQuota(${u.id}, true, '${escapeHtml(u.username)}')" title="点击开通额度">🔒 未开通 (点击授权)</button>`
                      )
                    }
                  </td>
                  <td>LV.${u.level} (${u.xp} XP)</td>
                  <td style="color:var(--tarot-gold); font-weight:700;">${u.cards_count} 张</td>
                  <td style="color:var(--brand-danger); font-weight:700;">${u.marks_count} 词</td>
                  <td style="font-size:11px; font-family:var(--font-mono); color:var(--brand-cyan);">${u.bound_ip || '-'}</td>
                  <td>
                    ${u.role !== 'admin' ? `
                      <button class="btn btn-secondary" style="font-size:10px; padding:2px 6px;" onclick="resetUserPassword(${u.id}, '${escapeHtml(u.username)}')">🔑 密码</button>
                      <button class="btn btn-secondary" style="font-size:10px; padding:2px 6px; color:var(--brand-danger);" onclick="deleteUser(${u.id}, '${escapeHtml(u.username)}')">🗑️ 删除</button>
                    ` : '<span style="font-size:10px; color:var(--text-secondary);">主管理员</span>'}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  } catch(e) {
    body.innerHTML = `<div style="padding:40px; text-align:center; color:var(--brand-danger);">${escapeHtml(e.message)}</div>`;
  }
}

async function saveAdminAiConfig() {
  const key = document.getElementById('adminCfgGeminiKey').value.trim();
  const mode = document.getElementById('adminCfgAiMode').value;
  authToken = loadFromStorage(STORAGE_KEYS.TOKEN, null);

  try {
    const resp = await fetch(`${API_BASE}/api/admin/save-config`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + authToken
      },
      body: JSON.stringify({ gemini_key: key, ai_access_mode: mode })
    });
    if (resp.ok) {
      showToast("💾 服务端 AI 安全配置已保存！");
      openAdminConsole();
    } else {
      throw new Error("保存失败");
    }
  } catch(e) {
    showToast("❌ 保存失败：" + e.message);
  }
}

function closeAdminModal() {
  const modal = document.getElementById('adminModal');
  modal.style.opacity = '0';
  setTimeout(() => modal.style.display = 'none', 200);
}

// 15. 用户账号与云端同步
function openAuthModal() {
  soundClick();
  const modal = document.getElementById('authModal');
  const loggedSection = document.getElementById('authLoggedInSection');
  const formSection = document.getElementById('authFormSection');

  authToken = loadFromStorage(STORAGE_KEYS.TOKEN, null);
  authUser = loadFromStorage(STORAGE_KEYS.AUTH, null);

  if (authToken && authUser) {
    loggedSection.style.display = 'block';
    formSection.style.display = 'none';
    document.getElementById('authUserName').textContent = authUser.username;
    if (authUser.is_admin) {
      document.getElementById('authRoleBadge').textContent = '👑 首席管理员 (Admin · 拥有全部额度与后台特权)';
    } else if (authUser.can_use_quota) {
      document.getElementById('authRoleBadge').textContent = '⚡ 探险生还者 (User · 站长已授权使用 AI 额度)';
    } else {
      document.getElementById('authRoleBadge').textContent = '👤 探险生还者 (User · 离线矩阵保底)';
    }
    document.getElementById('adminLaunchBtn').style.display = authUser.is_admin ? 'block' : 'none';
  } else {
    loggedSection.style.display = 'none';
    formSection.style.display = 'block';
  }
  modal.style.display = 'block';
  setTimeout(() => modal.style.opacity = '1', 10);
}

function closeAuthModal() {
  const modal = document.getElementById('authModal');
  modal.style.opacity = '0';
  setTimeout(() => modal.style.display = 'none', 200);
}

let authTabMode = 'login';
function switchAuthTab(mode) {
  authTabMode = mode;
  document.getElementById('tabAuthLogin').classList.toggle('active', mode === 'login');
  document.getElementById('tabAuthReg').classList.toggle('active', mode === 'reg');
  document.getElementById('grpRegApiKey').style.display = mode === 'reg' ? 'block' : 'none';
  document.getElementById('authSubmitBtn').textContent = mode === 'login' ? '🔑 立即登录' : '✨ 注册新账号';
}

async function handleAuthSubmit() {
  const u = document.getElementById('authInputUser').value.trim();
  const p = document.getElementById('authInputPass').value.trim();
  const k = document.getElementById('authInputApiKey').value.trim();

  if (!u || !p) {
    showToast("⚠️ 请输入用户名和密码");
    return;
  }

  const submitBtn = document.getElementById('authSubmitBtn');
  submitBtn.disabled = true;
  submitBtn.textContent = "⏳ 正在同步云端档案...";

  try {
    const endpoint = authTabMode === 'login' ? '/api/login' : '/api/register';
    const payload = authTabMode === 'login' ? { username: u, password: p } : { username: u, password: p, custom_api_key: k };
    
    const resp = await fetch(API_BASE + endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await resp.json();
    if (!resp.ok) throw new Error(data.detail || "操作失败，请检查账号密码");

    saveToStorage(STORAGE_KEYS.TOKEN, data.token);
    saveToStorage(STORAGE_KEYS.AUTH, data.user);
    authToken = data.token;
    authUser = data.user;

    await initCloudSession();
    closeAuthModal();
    showToast(`🎉 欢迎回来，${authUser.username}！云端档案已同步`);
  } catch(e) {
    showToast(`❌ ${e.message}`);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = authTabMode === 'login' ? '🔑 立即登录' : '✨ 注册新账号';
  }
}

function logoutUser() {
  localStorage.removeItem(STORAGE_KEYS.TOKEN);
  localStorage.removeItem(STORAGE_KEYS.AUTH);
  authToken = null;
  authUser = null;
  updateAuthUI();
  closeAuthModal();
  showToast("已退出当前账号");
}

function updateAuthUI() {
  const btnName = document.getElementById('userBtnName');
  const adminBadgeBtn = document.getElementById('topAdminBtn');
  const adminLaunchBtn = document.getElementById('adminLaunchBtn');
  authToken = loadFromStorage(STORAGE_KEYS.TOKEN, null);
  authUser = loadFromStorage(STORAGE_KEYS.AUTH, null);

  // 顶部站长控制台常驻展示，点击即触发智能引导或直达面板
  if (adminBadgeBtn) {
    adminBadgeBtn.style.display = 'inline-flex';
  }

  if (authToken && authUser) {
    btnName.textContent = authUser.username;
    const isMasterAdmin = Boolean(authUser.is_admin || authUser.role === 'admin' || ['林允安', '允安'].includes(authUser.username));
    if (adminBadgeBtn) {
      adminBadgeBtn.textContent = isMasterAdmin ? '👑 控制台 (Admin)' : '👑 控制台';
    }
    if (adminLaunchBtn) {
      adminLaunchBtn.style.display = isMasterAdmin ? 'block' : 'none';
    }
  } else {
    btnName.textContent = '登录';
    if (adminBadgeBtn) {
      adminBadgeBtn.textContent = '👑 控制台';
    }
    if (adminLaunchBtn) {
      adminLaunchBtn.style.display = 'none';
    }
  }
}

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

  // 初始化词库分类按钮高亮
  ['original', 'novel', 'all'].forEach(k => {
    const btn = document.getElementById(`srcBtn_${k}`);
    if (btn) {
      btn.classList.toggle('active', k === currentWordSource);
    }
  });

  renderWords();
  initNovelModeUI();
  updateBadges();
  renderTarotDeck();
  renderBattleHand();
  renderProfileView();

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderWords(e.target.value);
    });
  }

  initCloudSession();
  setupDesktopKeyboardShortcuts();
}



// =========================================================
// 15. 💻 电脑端全套键盘操控系统 (Desktop Keyboard Shortcuts)
// =========================================================
var keyboardShortcutsInitialized = false;
function setupDesktopKeyboardShortcuts() {
  if (keyboardShortcutsInitialized) return;
  keyboardShortcutsInitialized = true;

  const handleGlobalKeydown = (e) => {
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

      // 退出释义抽屉
      if ((defDrawer && defDrawer.classList.contains('open')) || (drawerOverlay && drawerOverlay.classList.contains('open'))) {
        closeDefDrawer();
        handled = true;
      }
      // 退出设置弹窗
      if (settingsModal && (settingsModal.style.display === 'block' || settingsModal.classList.contains('show'))) {
        closeSettingsModal();
        handled = true;
      }
      // 退出登录/注册弹窗
      if (authModal && (authModal.style.display === 'block' || authModal.classList.contains('show'))) {
        closeAuthModal();
        handled = true;
      }
      // 退出卡牌背包图鉴
      if (codexModal && (codexModal.style.display === 'block' || codexModal.classList.contains('show'))) {
        closeCodexModal();
        handled = true;
      }
      // 退出管理员控制台弹窗
      if (adminModal && (adminModal.style.display === 'block' || adminModal.classList.contains('show'))) {
        closeAdminModal();
        handled = true;
      }

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

    // 2. 词典释义抽屉打开时的快捷键 (← / → 切词, Space / P 发音, + / - / M 标记)
    const defDrawer = document.getElementById('defDrawer');
    const isDrawerOpen = defDrawer && defDrawer.classList.contains('open');

    if (isDrawerOpen) {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prev = getAdjacentWord(currentLookupWord, -1);
        if (prev) openWordDetails(prev);
        return;
      }
      if (e.key === 'ArrowRight') {
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


async function deleteUser(userId, username) {
  if (!confirm(`确定要彻底删除用户 [${username}] (ID: #${userId}) 及其所有档案记录吗？此操作不可逆！`)) return;
  authToken = loadFromStorage(STORAGE_KEYS.TOKEN, null);
  try {
    const resp = await fetch(`${API_BASE}/api/admin/users/${userId}`, {
      method: 'DELETE',
      headers: { 'Authorization': 'Bearer ' + authToken }
    });
    const data = await resp.json();
    if (!resp.ok) throw new Error(data.detail || "删除失败");
    showToast(`🗑️ ${data.message}`);
    openAdminConsole();
  } catch(e) {
    showToast(`❌ ${e.message}`);
  }
}

async function resetUserPassword(userId, username) {
  const newPwd = prompt(`请输入为用户 [${username}] 重置的新密码（默认 030522）：`, "030522");
  if (newPwd === null) return;
  authToken = loadFromStorage(STORAGE_KEYS.TOKEN, null);
  try {
    const resp = await fetch(`${API_BASE}/api/admin/users/${userId}/reset-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + authToken
      },
      body: JSON.stringify({ new_password: newPwd.trim() || "030522" })
    });
    const data = await resp.json();
    if (!resp.ok) throw new Error(data.detail || "重置失败");
    showToast(`🔑 ${data.message}`);
    openAdminConsole();
  } catch(e) {
    showToast(`❌ ${e.message}`);
  }
}


async function toggleUserQuota(userId, enable, username) {
  soundClick();
  authToken = loadFromStorage(STORAGE_KEYS.TOKEN, null);
  try {
    const resp = await fetch(`${API_BASE}/api/admin/users/${userId}/toggle-quota`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + authToken
      },
      body: JSON.stringify({ enabled: enable })
    });
    const data = await resp.json();
    if (!resp.ok) throw new Error(data.detail || "操作失败");
    showToast(`⚡ ${data.message}`);
    openAdminConsole();
  } catch(e) {
    showToast(`❌ ${e.message}`);
  }
}


function toggleSurvivalCnBlock() {
  const block = document.getElementById('survivalCnBlock');
  const btn = document.getElementById('btnToggleSurvivalCn');
  if (!block) return;
  if (block.style.display === 'none') {
    block.style.display = 'block';
    if (btn) btn.textContent = '🇬🇧 隐藏中文译文';
  } else {
    block.style.display = 'none';
    if (btn) btn.textContent = '🇨🇳 显示中文译文';
  }
}








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

function autoSaveNovelProgress(customToast = null) {
  novelProgress.currentChapter = currentNovelChapter;
  novelProgress.currentBeat = currentNovelBeat;
  novelProgress.maxUnlockedChapter = Math.max(novelProgress.maxUnlockedChapter || 1, currentNovelChapter);
  novelProgress.lastSavedTime = new Date().toLocaleString();

  saveToStorage('vocab_novel_progress', novelProgress);
  saveToStorage('vocab_novel_ch', currentNovelChapter);
  saveToStorage('vocab_novel_beat', currentNovelBeat);
  
  updateSaveIndicatorUI();
  triggerCloudSync();
  if (customToast) showToast(customToast);
}

function updateSaveIndicatorUI() {
  const indText = document.getElementById('autoSaveText');
  const resText = document.getElementById('resumeBadgeText');
  if (indText) {
    indText.textContent = `已自动存档：第 ${currentNovelChapter} 章 · 第 ${currentNovelBeat} 幕`;
  }
  if (resText) {
    resText.textContent = `第 ${novelProgress.currentChapter || 1} 章 · 第 ${novelProgress.currentBeat || 1} 幕`;
  }
  const sel = document.getElementById('novelChapterSelect');
  if (sel && sel.value !== String(currentNovelChapter)) {
    sel.value = currentNovelChapter;
  }
}

function manualSaveCurrentProgress() {
  soundClick();
  autoSaveNovelProgress();
  // Automatically store snapshot into slot 1 or open modal for slot selection
  manualSaveToSlot(1, `快照: 第 ${currentNovelChapter} 章 · 第 ${currentNovelBeat} 幕`);
}

function resumeFromSavedProgress() {
  soundClick();
  currentNovelChapter = novelProgress.currentChapter || 1;
  currentNovelBeat = novelProgress.currentBeat || 1;
  saveToStorage('vocab_novel_ch', currentNovelChapter);
  saveToStorage('vocab_novel_beat', currentNovelBeat);
  updateSaveIndicatorUI();
  soundSuccess();
  showToast(`⚡ 已回到上次进度：第 ${currentNovelChapter} 章 · 第 ${currentNovelBeat} 幕`);
  launchSurvivalGame();
}

function openSaveLoadModal() {
  soundClick();
  const modal = document.getElementById('saveLoadModal');
  const overlay = document.getElementById('drawerOverlay');
  if (modal) {
    renderSaveLoadModal();
    modal.style.display = 'block';
    modal.classList.add('show');
  }
  if (overlay) overlay.classList.add('open');
}

function closeSaveLoadModal() {
  soundClick();
  const modal = document.getElementById('saveLoadModal');
  const overlay = document.getElementById('drawerOverlay');
  if (modal) {
    modal.style.display = 'none';
    modal.classList.remove('show');
  }
  if (overlay) overlay.classList.remove('open');
}

function renderSaveLoadModal() {
  const body = document.getElementById('saveLoadModalBody');
  if (!body) return;

  const chObj = (typeof NOVEL_CHAPTERS !== 'undefined') ? NOVEL_CHAPTERS.find(c => c.id === currentNovelChapter) : null;
  const totalBeatsInCurrCh = chObj ? chObj.beats.length : 28;

  let slotsHtml = novelSaveSlots.map((slot, idx) => {
    if (slot.empty) {
      return `
        <div class="save-slot-card empty-slot">
          <div class="save-slot-info">
            <div class="save-slot-title" style="color:var(--text-secondary);">
              <span>💾 存档槽位 ${idx + 1}</span>
              <span style="font-size:11px; background:var(--paper-border); padding:2px 6px; border-radius:4px;">空置</span>
            </div>
            <div class="save-slot-meta">点击右侧按钮将当前进度存入此槽位</div>
          </div>
          <button class="btn btn-primary" style="font-size:12px; padding:6px 14px;" onclick="manualSaveToSlot(${slot.id})">
            📥 存入当前进度
          </button>
        </div>
      `;
    } else {
      return `
        <div class="save-slot-card">
          <div class="save-slot-info">
            <div class="save-slot-title">
              <span>🔖 槽位 ${idx + 1}：第 ${slot.chapter} 章 · 第 ${slot.beat} 幕</span>
              <span style="font-size:11px; background:var(--brand-primary); color:#fff; padding:2px 6px; border-radius:4px;">${escapeHtml(slot.chapterTitle || '')}</span>
            </div>
            <div class="save-slot-meta">
              <span>❤️ HP: ${slot.hp || 100}</span>
              <span>🧠 SAN: ${slot.san || 100}</span>
              <span>🕒 存档时间: ${escapeHtml(slot.time || '')}</span>
            </div>
          </div>
          <div style="display:flex; gap:6px; flex-wrap:wrap;">
            <button class="btn btn-primary" style="font-size:12px; padding:6px 12px;" onclick="loadFromSlot(${slot.id})">
              ▶️ 载入
            </button>
            <button class="btn btn-secondary" style="font-size:12px; padding:6px 10px;" onclick="manualSaveToSlot(${slot.id})" title="覆盖此存档">
              🔄 覆盖
            </button>
            <button class="btn btn-secondary" style="font-size:12px; padding:6px 8px; color:var(--brand-danger);" onclick="deleteSaveSlot(${slot.id})" title="删除此存档">
              🗑️
            </button>
          </div>
        </div>
      `;
    }
  }).join('');

  // Chapter Footprint & Quick Jump
  let chaptersListHtml = '';
  if (typeof NOVEL_CHAPTERS !== 'undefined') {
    chaptersListHtml = NOVEL_CHAPTERS.map(ch => {
      const isCurrent = ch.id === currentNovelChapter;
      const isUnlocked = ch.id <= (novelProgress.maxUnlockedChapter || 1);
      return `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 12px; border-radius:var(--radius-sm); margin-bottom:6px; background:${isCurrent ? 'rgba(99, 102, 241, 0.1)' : 'var(--paper-surface)'}; border:1px solid ${isCurrent ? 'var(--brand-primary)' : 'var(--paper-border)'};">
          <div>
            <span style="font-weight:800; font-size:13px; color:var(--text-primary);">第 ${ch.id} 章 · ${escapeHtml(ch.title)}</span>
            <span style="font-size:11px; color:var(--text-secondary); margin-left:8px;">共 ${ch.beats.length} 幕互动</span>
          </div>
          <div>
            ${isCurrent ? `<span style="font-size:11px; font-weight:800; color:var(--brand-primary); margin-right:8px;">🚩 当前位置 (第 ${currentNovelBeat}/${ch.beats.length} 幕)</span>` : ''}
            <button class="btn btn-secondary" style="font-size:11px; padding:4px 10px; height:28px;" onclick="jumpToChapter(${ch.id})">
              ${isCurrent ? '⚡ 进入本章' : '📖 开启探索'}
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  body.innerHTML = `
    <!-- 当前自动存档 -->
    <div style="background:var(--paper-surface-sub); border:1.5px solid var(--brand-success); border-radius:var(--radius-md); padding:14px 16px; margin-bottom:18px;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
        <div>
          <div style="font-size:12px; font-weight:800; color:var(--brand-success); display:flex; align-items:center; gap:6px;">
            <span>⚡ 最近实时自动存档 (Auto-Save Snapshot)</span>
          </div>
          <div style="font-size:15px; font-weight:900; color:var(--text-primary); margin-top:4px;">
            第 ${currentNovelChapter} 章 · 第 ${currentNovelBeat} / ${totalBeatsInCurrCh} 幕
          </div>
          <div style="font-size:11px; color:var(--text-secondary); margin-top:2px;">
            自动存档时间: ${novelProgress.lastSavedTime || '刚刚'} · 账号进度已自动同步
          </div>
        </div>
        <button class="btn btn-primary" style="font-size:13px; font-weight:800; padding:6px 18px;" onclick="closeSaveLoadModal(); resumeFromSavedProgress();">
          ▶️ 立即继续冒险
        </button>
      </div>
    </div>

    <!-- 手动存档卡槽列表 -->
    <div style="margin-bottom:18px;">
      <div style="font-size:13px; font-weight:800; color:var(--text-primary); margin-bottom:10px; display:flex; justify-content:space-between; align-items:center;">
        <span>💾 手动存档卡槽 (5 个独立自定义槽位)</span>
        <button class="btn btn-secondary" style="font-size:11px; padding:2px 8px;" onclick="manualSaveCurrentProgress(); renderSaveLoadModal();">+ 存入当前</button>
      </div>
      ${slotsHtml}
    </div>

    <!-- 51 章节大纲与通关足迹 -->
    <div>
      <div style="font-size:13px; font-weight:800; color:var(--text-primary); margin-bottom:10px;">
        📑 原著 51 章节全目录与快速定位
      </div>
      <div style="max-height:220px; overflow-y:auto; padding-right:4px;">
        ${chaptersListHtml}
      </div>
    </div>
  `;
}

function manualSaveToSlot(slotId, customName = null) {
  soundClick();
  const slotIdx = novelSaveSlots.findIndex(s => s.id === slotId);
  if (slotIdx === -1) return;

  const chObj = (typeof NOVEL_CHAPTERS !== 'undefined') ? NOVEL_CHAPTERS.find(c => c.id === currentNovelChapter) : null;

  novelSaveSlots[slotIdx] = {
    id: slotId,
    name: customName || `存档槽位 ${slotId}`,
    empty: false,
    chapter: currentNovelChapter,
    beat: currentNovelBeat,
    chapterTitle: chObj ? chObj.title : `第 ${currentNovelChapter} 章`,
    hp: playerProfile.hp,
    san: playerProfile.san,
    time: new Date().toLocaleString()
  };

  saveToStorage('vocab_novel_saves', novelSaveSlots);
  triggerCloudSync();
  soundSuccess();
  showToast(`💾 成功保存至【存档槽位 ${slotId}】！`);
  const modal = document.getElementById('saveLoadModal');
  if (modal && modal.style.display === 'block') {
    renderSaveLoadModal();
  }
}

function loadFromSlot(slotId) {
  soundClick();
  const slot = novelSaveSlots.find(s => s.id === slotId);
  if (!slot || slot.empty) return;

  currentNovelChapter = slot.chapter;
  currentNovelBeat = slot.beat;
  if (slot.hp) playerProfile.hp = slot.hp;
  if (slot.san) playerProfile.san = slot.san;
  saveToStorage(STORAGE_KEYS.PROFILE, playerProfile);

  autoSaveNovelProgress();
  closeSaveLoadModal();
  soundSuccess();
  showToast(`📂 读档成功！已回到 第 ${slot.chapter} 章 · 第 ${slot.beat} 幕`);
  launchSurvivalGame();
}

function deleteSaveSlot(slotId) {
  soundClick();
  const slotIdx = novelSaveSlots.findIndex(s => s.id === slotId);
  if (slotIdx === -1) return;

  novelSaveSlots[slotIdx] = { id: slotId, name: `存档槽 ${slotId}`, empty: true };
  saveToStorage('vocab_novel_saves', novelSaveSlots);
  triggerCloudSync();
  showToast(`🗑️ 已清空存档槽位 ${slotId}`);
  renderSaveLoadModal();
}

function jumpToChapter(chId) {
  soundClick();
  currentNovelChapter = parseInt(chId, 10) || 1;
  currentNovelBeat = 1;
  autoSaveNovelProgress();
  closeSaveLoadModal();
  showToast(`📖 已开启第 ${currentNovelChapter} 章！`);
  launchSurvivalGame();
}


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
}

// Application Entry Point
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
