// ==========================================
// Vocabulary Survival 3.0 - Candy Match, Tarot Battle Hand & Skill Engine
// ==========================================

// 0. 安全工具函数
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
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

// 核心数据结构
let customWords = loadFromStorage(STORAGE_KEYS.CUSTOM_WORDS, []);
let savedWords = loadFromStorage(STORAGE_KEYS.WORDS, []);
let words = [...new Set([...customWords, ...savedWords, ...defaultWords])];

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
  geminiKey: '',
  geminiModel: 'gemini-3.7-flash',
  customUrl: 'http://localhost:8081/v1/chat/completions',
  customModel: 'gemini-3.7-flash',
  mimoKey: '',
  audioMuted: false
});

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
          customWords: customWords
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

      updateBadges();
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
      correctWord: w1,
      correctAction: `Take decisive initiative to ${w1} the primary emergency containment protocols.`,
      correctOutcome: `You acted with razor-sharp focus to ${w1} the vital stabilization systems. Thanks to your decisive execution, the automated bulkheads sealed the vacuum breach in the nick of time, preserving vital life support and allowing the vessel to regain safe orbital trajectory.`,
      wrong1Word: w2,
      wrong1Action: `Choose to ${w2} by the airlock threshold and wait for secondary telemetry.`,
      wrong1Outcome: `Your choice to ${w2} cost the squad precious seconds. The pressure differential shattered the inner reinforced glass, forcing an emergency pod ejection and leaving the research module heavily compromised.`,
      wrong2Word: w3,
      wrong2Action: `Panic recklessly and decide to ${w3} standard environmental safety gear.`,
      wrong2Outcome: `In overwhelming distress, you made the catastrophic mistake to ${w3} essential protective gear. The explosive decompression swept through the corridor, triggering severe trauma and an immediate mission failure.`
    },
    {
      theme: "🔬 Biohazard Quarantine Alert",
      story: `An experimental pathogen canister has ruptured on sub-level four of the biotechnology institute. The computerized filtration grid detects hazardous airborne toxins spreading toward the residential quadrant. The heavy hermetic doors are closing rapidly on a sixty-second countdown timer.`,
      correctWord: w1,
      correctAction: `Swiftly utilize all available equipment to ${w1} the decontamination bypass sequence.`,
      correctOutcome: `You remained calm under extreme pressure to ${w1} the emergency neutralization system. The antimicrobial mist purged the containment zone, halting the contagion instantly and securing safe passage for the science detail.`,
      wrong1Word: w2,
      wrong1Action: `Hesitate and attempt to ${w2} while re-reading warning manuals.`,
      wrong1Outcome: `Choosing to ${w2} at such a critical juncture allowed the pathogen to saturate the primary ventilation shafts, rendering the entire sub-level inaccessible and contaminating crucial bio-samples.`,
      wrong2Word: w3,
      wrong2Action: `Flee blindly and ${w3} the automated quarantine controls.`,
      wrong2Outcome: `Fleeing in panic to ${w3} containment protocols triggered a permanent base-wide red lockdown, trapping your squad in the toxic corridor with dwindling oxygen supplies.`
    },
    {
      theme: "🌊 Abyssal Trench Submersible Crisis",
      story: `At nine thousand meters beneath the Pacific, a hydrothermal fissure erupts beneath the exploration submersible. Extreme hydraulic pressure cracks the reinforced acrylic observation dome as the ballast tanks take on silt. External floodlights flicker erratically in the pitch-black abyss.`,
      correctWord: w1,
      correctAction: `Direct full auxiliary power to ${w1} the emergency ballast blowers.`,
      correctOutcome: `Your composed command to ${w1} the emergency blowers purged the flooded ballast tanks immediately. Buoyancy was restored in seconds, allowing the bathysphere to rocket safely away from the boiling hydrothermal vent.`,
      wrong1Word: w2,
      wrong1Action: `Remain passive and ${w2} before checking pressure gauges.`,
      wrong1Outcome: `Allowing uncertainty to ${w2} your judgment caused the hull stress to exceed structural limits. A secondary fracture flooded the battery compartment, plunging the craft into total darkness.`,
      wrong2Word: w3,
      wrong2Action: `Desperately ${w3} the primary life-support regulator.`,
      wrong2Outcome: `Tampering recklessly to ${w3} the life-support regulator caused an acute pressure drop inside the cabin, knocking the entire crew unconscious before rescue signals could be transmitted.`
    },
    {
      theme: "🏛️ Ancient Desert Catacomb",
      story: `A violent sandstorm has triggered the ancient mechanism of the underground pyramid temple. Massive stone blocks slide into place with deafening grinding noises, blocking the only daylight shaft. As the torches sputter, poisonous desert vipers emerge from fractured wall hieroglyphs.`,
      correctWord: w1,
      correctAction: `Carefully examine the inscriptions to ${w1} the hidden stone counterweight.`,
      correctOutcome: `Deciphering the glyphs allowed you to ${w1} the ancient counterweight mechanism. A secret archway pivoted open silently, revealing an untouched subterranean escape corridor leading safely outside the pyramid.`,
      wrong1Word: w2,
      wrong1Action: `Stand motionless to ${w2} amidst the crumbling masonry.`,
      wrong1Outcome: `Choosing to ${w2} proved disastrous as the shifting ceiling blocks crashed down, completely burying your exploration gear and cutting off the return path.`,
      wrong2Word: w3,
      wrong2Action: `Recklessly ${w3} the archaeological map and torchlight.`,
      wrong2Outcome: `Throwing caution aside to ${w3} the map caused you to trigger a hidden dart trap along the perimeter, suffering heavy injury and exhaustion in the dark.`
    },
    {
      theme: "⚡ Cyberpunk Megacity Infiltration",
      story: `High on the ninety-fifth floor of the Arasaka-style megacorp tower, laser grid alarms scream into the rainy night. Automated combat drones descend from the ceiling catwalks while counter-intrusion ICE viruses lock the terminal you are extracting.`,
      correctWord: w1,
      correctAction: `Deploy your neural deck to ${w1} the subverted firewall matrix.`,
      correctOutcome: `Your masterful hack to ${w1} the core mainframe disabled the tracking drones and opened the maintenance elevator, allowing a seamless extraction with all corporate data intact.`,
      wrong1Word: w2,
      wrong1Action: `Fail to adapt and ${w2} inside the server closet.`,
      wrong1Outcome: `Pausing to ${w2} allowed security androids to surround the sector, pinpointing your digital signature and inflicting intense neural feedback damage.`,
      wrong2Word: w3,
      wrong2Action: `Panic and abruptly ${w3} your encrypted neural link.`,
      wrong2Outcome: `Abruptly attempting to ${w3} the connection triggered a catastrophic system surge, wiping the extracted files and leaving you trapped on the rooftop.`
    },
    {
      theme: "❄️ Arctic Glacier Blizzard Outpost",
      story: `A category-five polar storm knocks out the transmission tower and heating generator at the remote research outpost. Frost patterns spread rapidly across the double-glazed windows as exterior temperatures plunge below minus fifty degrees Celsius.`,
      correctWord: w1,
      correctAction: `Work methodically to ${w1} the auxiliary thermal reactor.`,
      correctOutcome: `You methodically managed to ${w1} the backup power grid, restoring heat and vital satellite uplinks just before the base suffered permanent freeze damage.`,
      wrong1Word: w2,
      wrong1Action: `Wander into the blizzard to ${w2} without compass guidance.`,
      wrong1Outcome: `Attempting to ${w2} in zero visibility resulted in severe disorientation and mild frostbite, forcing the team to expend precious emergency flares to locate you.`,
      wrong2Word: w3,
      wrong2Action: `Carelessly ${w3} the insulated survival shelter.`,
      wrong2Outcome: `Deciding to ${w3} the insulated bunker exposed your squad to the howling gale, causing immediate hypothermia risks and critical vitality loss.`
    },
    {
      theme: "🌋 Volcanic Island Pyroclastic Surge",
      story: `The island caldera violently erupts, hurling volcanic bombs into the coastal jungle. A towering cloud of hot ash and sulfur dioxide rushes toward the shoreline where the last evacuation ferry is moored. The harbor dock begins splintering under tectonic tremors.`,
      correctWord: w1,
      correctAction: `Rally the survivors to ${w1} the emergency maritime departure.`,
      correctOutcome: `Your decisive leadership to ${w1} the departure sequence pushed the vessel past the reef breakers moments before the pyroclastic flow engulfed the shoreline, saving every passenger aboard.`,
      wrong1Word: w2,
      wrong1Action: `Stop near the magma flow to ${w2} and salvage baggage.`,
      wrong1Outcome: `Losing critical time to ${w2} resulted in your vehicle being blocked by falling debris, forcing an agonizing and dangerous trek through dense ash clouds.`,
      wrong2Word: w3,
      wrong2Action: `Blindly ${w3} the established maritime evacuation protocol.`,
      wrong2Outcome: `Deciding to ${w3} standard evacuation rules caused panic on the loading ramp, capsizing an auxiliary lifeboat and leaving your squad in dire peril.`
    },
    {
      theme: "🏰 Medieval Stronghold Siege",
      story: `Flaming catapult projectiles smash through the fortress battlements as enemy scaling ladders latch onto the parapets. With the outer portcullis splintered and command horns sounding retreat, your squad holds the pivotal watchtower staircase.`,
      correctWord: w1,
      correctAction: `Mount a fierce counter-defense to ${w1} the inner stronghold gateway.`,
      correctOutcome: `You rallied the garrison to ${w1} the vital stone chokepoint, repelling the enemy assault wave and holding the fortress until allied cavalry crested the horizon.`,
      wrong1Word: w2,
      wrong1Action: `Waver under pressure and ${w2} on the exposed rampart.`,
      wrong1Outcome: `Your decision to ${w2} left the archers unprotected, allowing hostile vanguard skirmishers to overrun the watchtower and inflict heavy damage on the garrison.`,
      wrong2Word: w3,
      wrong2Action: `Break formation and ${w3} your defensive weapons.`,
      wrong2Outcome: `Breaking ranks to ${w3} defensive gear led to immediate chaos, leaving you defenseless against incoming volleys of flaming arrows.`
    },
    {
      theme: "🌪️ Steampunk Airship Tempest",
      story: `Navigating an uncharted cloud vortex, the brass-clad dirigible suffers multiple boiler blowouts. High-voltage lightning crackles across the canvas envelope while the altitude gauge spins downward toward jagged mountain crags.`,
      correctWord: w1,
      correctAction: `Adjust the pressure valves to ${w1} the steam turbine exhaust.`,
      correctOutcome: `Skillfully managing to ${w1} the valve pressure stabilized the lifting gas cells, pulling the great airship out of its steep dive and soaring above the tempest into clear skies.`,
      wrong1Word: w2,
      wrong1Action: `Disregard the altimeter and ${w2} in the control cabin.`,
      wrong1Outcome: `Allowing panic to ${w2} your reflexes caused the airship to clip a sharp pinnacle, shearing the port propeller and causing severe hull structural damage.`,
      wrong2Word: w3,
      wrong2Action: `Prematurely ${w3} the main ballast and cargo anchors.`,
      wrong2Outcome: `Rushing to ${w3} essential rigging destabilized the center of gravity, causing the gondola to tilt violently and throwing vital instruments overboard.`
    },
    {
      theme: "🔮 Quantum Collider Temporal Rift",
      story: `A magnetic containment failure inside the particle supercollider tears a shimmering temporal rift across the experimental facility. Time dilates unpredictably—falling objects freeze mid-air while chronal shockwaves shatter nearby instrument panels.`,
      correctWord: w1,
      correctAction: `Synchronize the resonance harmonic to ${w1} the quantum field coil.`,
      correctOutcome: `You calibrated the harmonic pulse to ${w1} the magnetic coil, cleanly collapsing the temporal singularity and restoring standard spacetime metrics without casualties.`,
      wrong1Word: w2,
      wrong1Action: `Fail to comprehend the readings and ${w2} near the epicenter.`,
      wrong1Outcome: `Lingering to ${w2} caught your gear in a local time loop, draining your energy cells and disorienting your squad with severe temporal vertigo.`,
      wrong2Word: w3,
      wrong2Action: `Impulsively ${w3} the shielded safety protocols.`,
      wrong2Outcome: `Deciding to ${w3} safety shields released a blast of chronal radiation that scrambled all electronic navigation and inflicted immediate system shock.`
    },
    {
      theme: "🌿 Amazonian Forbidden Temple Basin",
      story: `Trekking through the dense, uncharted rainforest, your expedition trips a hidden tripwire mechanism outside a vine-covered golden ziggurat. Stone pendulum blades swing across the muddy ravine as the river beneath swells with carnivorous predators.`,
      correctWord: w1,
      correctAction: `Quickly scale the ancient stonework to ${w1} the release catch.`,
      correctOutcome: `Agilely maneuvering to ${w1} the ancient counter-lever locked the deadly blades in place, clearing an unhindered path to the inner sanctum treasure vault.`,
      wrong1Word: w2,
      wrong1Action: `Freeze in uncertainty and ${w2} on the slippery log bridge.`,
      wrong1Outcome: `Hesitating to ${w2} on the mossy span caused the wood to crack beneath you, dumping emergency rations into the raging torrent below.`,
      wrong2Word: w3,
      wrong2Action: `Fling aside caution and ${w3} all climbing ropes.`,
      wrong2Outcome: `Choosing to ${w3} vital climbing ropes left you stranded on a crumbling ledge surrounded by hostile jungle wildlife.`
    },
    {
      theme: "⚓ Phantom Galleon of Bermuda",
      story: `Exploring the sunken skeletal hull of a seventeenth-century warship, your diving umbilical line snags upon a coral-encrusted bronze cannon. Disturbed ocean undercurrents begin to collapse the rotting oak timbers right above your primary oxygen manifold.`,
      correctWord: w1,
      correctAction: `Use your diver blade calmly to ${w1} the tangled harness line.`,
      correctOutcome: `You steadily managed to ${w1} the tangled gear without damaging your regulator, escaping the falling debris field and surfacing smoothly with valuable oceanic relics.`,
      wrong1Word: w2,
      wrong1Action: `Thrash frantically to ${w2} in the confined cargo hold.`,
      wrong1Outcome: `Panicking to ${w2} stirred up thick clouds of silt, blinding your dive buddy and wasting more than half of your remaining breathing gas.`,
      wrong2Word: w3,
      wrong2Action: `Recklessly ${w3} your emergency dive beacon.`,
      wrong2Outcome: `Discarding your gear to ${w3} the beacon caused you to lose contact with the surface vessel, resulting in an emergency deep-sea retrieval operation.`
    }
  ];

  const scene = PROCEDURAL_THEMES[Math.floor(Math.random() * PROCEDURAL_THEMES.length)];
  
  const optionsRaw = [
    {
      word: scene.correctWord,
      action: scene.correctAction,
      isCorrect: true,
      fullOutcomeStory: scene.correctOutcome
    },
    {
      word: scene.wrong1Word,
      action: scene.wrong1Action,
      isCorrect: false,
      fullOutcomeStory: scene.wrong1Outcome
    },
    {
      word: scene.wrong2Word,
      action: scene.wrong2Action,
      isCorrect: false,
      fullOutcomeStory: scene.wrong2Outcome
    }
  ];

  // 随机乱序打乱选项，保证正确选项不固定在第一项
  const shuffledOptions = optionsRaw.sort(() => 0.5 - Math.random());

  return JSON.stringify({
    story: scene.story,
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
    renderBattleHand();
   else if (viewName === 'match') {
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
  document.getElementById('badgeAll').textContent = words.length;
  document.getElementById('badgeMarked').textContent = getMarkedWords().length;
  document.getElementById('hudHp').textContent = playerProfile.hp;
  document.getElementById('hpBar').style.width = `${Math.max(0, playerProfile.hp)}%`;
  document.getElementById('hudSan').textContent = playerProfile.san;
  document.getElementById('sanBar').style.width = `${Math.max(0, playerProfile.san)}%`;
  document.getElementById('hudLevel').textContent = playerProfile.level;
  document.getElementById('hudXp').textContent = `${playerProfile.xp} XP`;
}

function getMarkCount(word) {
  return marks[word.toLowerCase()] || 0;
}

function addMark(word) {
  const w = word.toLowerCase();
  marks[w] = (marks[w] || 0) + 1;
  saveToStorage(STORAGE_KEYS.MARKS, marks);
  updateBadges();
  triggerCloudSync();
  document.querySelectorAll(`.story-word[data-word="${w}"]`).forEach(el => el.classList.add('marked-word-highlight'));
  showToast(`★ Marked [${w}] (Total Mark: ${marks[w]})`);
}

function reduceMark(word) {
  const w = word.toLowerCase();
  if (marks[w]) {
    marks[w]--;
    if (marks[w] <= 0) {
      delete marks[w];
      document.querySelectorAll(`.story-word[data-word="${w}"]`).forEach(el => el.classList.remove('marked-word-highlight'));
    }
    saveToStorage(STORAGE_KEYS.MARKS, marks);
    updateBadges();
    triggerCloudSync();
  }
}

function getMarkedWords() {
  return Object.entries(marks).filter(([k, v]) => v > 0);
}

function renderWords(filter = '') {
  const container = document.getElementById('wordsListContainer');
  container.innerHTML = '';
  const lf = filter.toLowerCase().trim();

  words.forEach((w, i) => {
    const corrected = corrections[w];
    const mc = getMarkCount(w);
    const cn = chineseDict[w] || '';
    if (!lf || w.toLowerCase().includes(lf) || (corrected && corrected.toLowerCase().includes(lf)) || (cn && cn.includes(lf)) || String(i + 1) === lf) {
      const card = document.createElement('div');
      card.className = 'origami-word-card';
      card.innerHTML = `
        <span class="word-num">${i + 1}</span>
        <div class="word-info">
          <div class="word-spelling">
            ${escapeHtml(w)}
            <button class="word-audio-btn" onclick="speakWord('${escapeHtml(w)}', event)" title="Listen Pronunciation">🔊</button>
            ${corrected ? `<span class="word-correction">→ ${escapeHtml(corrected)}</span>` : ''}
          </div>
          
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
    card.innerHTML = `
      <span class="word-num">${i + 1}</span>
      <div class="word-info">
        <div class="word-spelling">
          ${escapeHtml(w)}
          <button class="word-audio-btn" onclick="speakWord('${escapeHtml(w)}', event)" title="Listen Pronunciation">🔊</button>
          ${corrected ? `<span class="word-correction">→ ${escapeHtml(corrected)}</span>` : ''}
        </div>
        
      </div>
      <span class="origami-mark-pill">★ ${count}</span>
    `;
    card.onclick = () => openWordDetails(w);
    container.appendChild(card);
  });
}

// 8. 纯英文全量词典渲染系统
let currentLookupWord = null;

function renderDefinitionBody(entry, safeWord, lookup, cambridgeUrl, collinsUrl, merriamUrl) {
  const phoneticText = entry.phonetic || (entry.phonetics && entry.phonetics[0] ? entry.phonetics[0].text : '') || '';
  document.getElementById('dictPhonetic').textContent = phoneticText;

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
    document.getElementById('dictMeaningsBody').innerHTML = meaningsHtml;
  }
}

async function openWordDetails(word) {
  soundClick();
  const safeWord = word.toLowerCase().trim();
  const lookup = corrections[safeWord] || safeWord;
  currentLookupWord = safeWord;

  const cambridgeUrl = `https://dictionary.cambridge.org/dictionary/english/${encodeURIComponent(lookup)}`;
  const collinsUrl = `https://www.collinsdictionary.com/dictionary/english/${encodeURIComponent(lookup)}`;
  const merriamUrl = `https://www.merriam-webster.com/dictionary/${encodeURIComponent(lookup)}`;

  const drawer = document.getElementById('defDrawer');
  const content = document.getElementById('defDrawerContent');

  drawer.classList.add('open');
  document.getElementById('drawerOverlay').classList.add('open');

  content.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">
      <div>
        <div style="font-size: 30px; font-weight: 900; font-family: var(--font-serif); color: var(--text-primary); display:flex; align-items:center; gap:10px;">
          ${escapeHtml(lookup)}
          <button class="word-audio-btn" style="font-size:20px; color:var(--brand-accent);" onclick="speakWord('${escapeHtml(lookup)}')">🔊</button>
        </div>
        <div style="font-size: 15px; color: var(--text-secondary); margin-top: 2px;" id="dictPhonetic">Loading phonetic...</div>
      </div>
    </div>

    <div style="display:flex; gap:8px; margin-bottom:16px; flex-wrap:wrap;">
      <a href="${cambridgeUrl}" target="_blank" class="dict-external-link" title="Open Cambridge Dictionary">📖 Cambridge</a>
      <a href="${collinsUrl}" target="_blank" class="dict-external-link" title="Open Collins Dictionary">📚 Collins</a>
      <a href="${merriamUrl}" target="_blank" class="dict-external-link" title="Open Merriam-Webster">🎓 Webster</a>
    </div>

    <div id="dictMeaningsBody" style="margin-bottom: 20px;">
      <div style="padding:25px; text-align:center; color:var(--text-secondary);"><em>Loading English definitions...</em></div>
    </div>

    <div style="background: var(--paper-surface-sub); border:1.5px solid var(--paper-border); border-radius:var(--radius-md); padding:14px 16px; display:flex; justify-content:space-between; align-items:center;">
      <div>
        <div style="font-size:14px; font-weight:800; color:var(--text-primary);">Mark for Review: <span id="drawerMarkCount" style="color:var(--brand-danger);">${getMarkCount(safeWord)}</span></div>
        <div style="font-size:11px; color:var(--text-secondary); margin-top:2px;">Prioritized in Survival battles & personal collection</div>
      </div>
      <div style="display:flex; gap:8px;">
        <button class="btn btn-secondary" style="width:38px; height:38px; padding:0; font-size:18px;" onclick="reduceMark('${escapeHtml(safeWord)}'); document.getElementById('drawerMarkCount').textContent = getMarkCount('${escapeHtml(safeWord)}');">-</button>
        <button class="btn btn-primary" style="padding:0 14px; height:38px; font-size:13px;" onclick="addMark('${escapeHtml(safeWord)}'); document.getElementById('drawerMarkCount').textContent = getMarkCount('${escapeHtml(safeWord)}');">★ Mark +1</button>
      </div>
    </div>
  `;

  if (builtinEnglishDict[lookup]) {
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
    document.getElementById('dictPhonetic').textContent = '';
    document.getElementById('dictMeaningsBody').innerHTML = `
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

function startCandyMatchGame() {
  soundClick();
  document.getElementById('candyMatchGameBox').style.display = 'block';
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
    document.getElementById('matchTimerVal').textContent = `${matchRemaining}s`;
    document.getElementById('matchTimerBar').style.width = `${(matchRemaining / 45) * 100}%`;
    if (matchRemaining <= 0) endCandyMatchGame();
  }, 1000);

  generateCandyBoard();
}

function generateCandyBoard() {
  const grid = document.getElementById('candyGrid');
  grid.innerHTML = '';
  matchActiveTile = null;

  // 优先从已标记词库或全部词库中挑选 6 个词
  const marked = getMarkedWords();
  let pool = [];
  if (marked.length >= 4) {
    pool = marked.sort(() => 0.5 - Math.random()).slice(0, 6).map(m => m[0]);
  } else {
    pool = [...words].sort(() => 0.5 - Math.random()).slice(0, 6);
  }

  const tiles = [];
  pool.forEach((word, idx) => {
    const cn = chineseDict[word] || word;
    const colorClass = `tile-en-${idx % 6}`;
    const cnColorClass = `tile-cn-${idx % 6}`;

    // 英文词块
    tiles.push({
      word: word,
      type: 'en',
      text: word,
      colorClass: colorClass
    });
    // 中文释义词块
    tiles.push({
      word: word,
      type: 'cn',
      text: cn.split(';')[0].trim(),
      colorClass: cnColorClass
    });
  });

  // 随机打乱
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

    document.getElementById('matchScoreVal').textContent = matchScore;
    document.getElementById('matchComboVal').textContent = `x${matchCombo}`;

    // 检查是否清盘
    setTimeout(() => {
      const remaining = document.querySelectorAll('.candy-tile:not(.pop-match)');
      if (remaining.length === 0) {
        matchWave++;
        document.getElementById('matchWaveVal').textContent = `WAVE ${matchWave}`;
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
    document.getElementById('matchComboVal').textContent = `x1`;
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
  document.getElementById('candyMatchGameBox').style.display = 'none';
  showToast(`🏁 45秒挑战结束！最终得分: ${matchScore} 分`);
}

function abortMatchGame() {
  clearInterval(matchTimerInterval);
  document.getElementById('candyMatchGameBox').style.display = 'none';
}

// =========================================================
// 11. 游戏模式 1: 文字生存大逃杀
// =========================================================
let currentSurvivalRound = 1;
let survivalData = null;
const DUNGEON_THEMES = ["⚡ Survival Challenge", "🔬 Laboratory Crisis", "🚀 Deep Space Expedition", "💼 Career Dilemma", "🌊 Extreme Odyssey"];

async function launchSurvivalGame() {
  const marked = getMarkedWords();
  let targetPool = [];
  if (marked.length >= 3) {
    targetPool = marked.sort(() => 0.5 - Math.random()).slice(0, 3).map(m => m[0]);
  } else {
    targetPool = [...words].sort(() => 0.5 - Math.random()).slice(0, 3);
  }

  document.getElementById('survivalGameBox').style.display = 'block';
  document.getElementById('gameTheme').textContent = DUNGEON_THEMES[Math.floor(Math.random() * DUNGEON_THEMES.length)];
  document.getElementById('gameStory').innerHTML = `<em>Generating crisis using your vocabulary: [${targetPool.join(', ')}]...</em>`;
  document.getElementById('gameOptions').innerHTML = '';
  document.getElementById('gameOutcomeArea').innerHTML = '';
  document.getElementById('gameRound').textContent = currentSurvivalRound;
  document.getElementById('gameHp').textContent = playerProfile.hp;
  document.getElementById('gameCombo').textContent = `x${playerProfile.combo}`;

  renderBattleHand();

  const sysPrompt = "You are a suspenseful Dungeon Master. Write engaging pure English story within 3 to 5 sentences without any Chinese.";
  const usrPrompt = `
    Strictly use these target words from the user's active vocabulary list: [${targetPool.join(', ')}].
    Requirements:
    1. "story": An intense crisis dilemma in pure English within 3 to 5 sentences (under 50 words). Absolutely NO Chinese.
    2. "options": Exactly 3 choices corresponding to [${targetPool.join(', ')}]. Exactly ONE option is the correct survival decision.
    3. Each option must have:
       - "word": exact word from target words
       - "action": English action sentence using the word
       - "isCorrect": boolean
       - "fullOutcomeStory": A complete, coherent narrative paragraph (3-4 sentences in pure English) describing the entire event and resulting consequence when this choice is executed.
    
    Output JSON format only:
    {
      "story": "A critical emergency occurs in the control room. Power fails and pressure drops rapidly. You must act immediately.",
      "options": [
        {
          "word": "${targetPool[0]}",
          "action": "Take prompt measures to ${targetPool[0]} the primary system.",
          "isCorrect": true,
          "fullOutcomeStory": "You acted with composure to ${targetPool[0]} the vital controls. Thanks to your decisive execution, the emergency containment held firm and the entire squad safely escaped the hazard."
        },
        {
          "word": "${targetPool[1]}",
          "action": "Choose to ${targetPool[1]} and wait passively.",
          "isCorrect": false,
          "fullOutcomeStory": "You chose to ${targetPool[1]} at the critical junction. The lost time allowed the pressure breach to expand, causing severe damage to the sector before backup arrived."
        },
        {
          "word": "${targetPool[2]}",
          "action": "Decide to ${targetPool[2]} all safety equipment.",
          "isCorrect": false,
          "fullOutcomeStory": "In overwhelming panic, you made the fatal mistake to ${targetPool[2]} standard safety gear. The hazardous environment immediately overwhelmed the room, resulting in catastrophe."
        }
      ]
    }
  `;

  try {
    const raw = await callAntigravityAPI(sysPrompt, usrPrompt);
    survivalData = safeJsonParse(raw);
    renderSurvivalGame(survivalData);
  } catch(e) {
    const fallback = generateOfflineScenario(usrPrompt);
    survivalData = safeJsonParse(fallback);
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

  data.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.innerHTML = `
      <span class="choice-word-badge">[ ${escapeHtml(opt.word)} ]</span>
      <div class="choice-content">
        <div style="font-size: 14px; font-weight: 600; color: var(--text-primary);">${escapeHtml(opt.action)}</div>
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

  // 1. 组合危机背景与决断后果的完整英文故事
  const fullStory = opt.fullOutcomeStory || `${survivalData.story} ${opt.action}`;
  const clickableHtml = renderClickableStory(fullStory);

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

    <div style="margin-bottom:18px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <span style="font-size:13px; font-weight:800; color:var(--text-primary); display:flex; align-items:center; gap:6px;">
          📜 完整英文战报研读 (Complete Story Scroll)
        </span>
        <span style="font-size:11px; color:var(--brand-primary); font-weight:600;">
          💡 点击任意单词呼出词典 & ★ Mark
        </span>
      </div>
      <div style="background:var(--paper-surface-sub); padding:16px 18px; border-radius:var(--radius-md); border:1.5px solid var(--paper-border); font-size:15px; line-height:1.8; color:var(--text-primary); box-shadow: inset 0 2px 4px rgba(0,0,0,0.04);">
        ${clickableHtml}
      </div>
    </div>

    <div style="display:flex; gap:10px; flex-wrap:wrap;">
      <button class="btn btn-primary" style="flex:2; height:44px; font-size:14px; font-weight:800;" onclick="nextSurvivalRound()">
        ${playerProfile.hp <= 0 ? '⚰️ 复活并重新挑战 (Respawn)' : '⚡ 开始下一战局 (Next Stage)'}
      </button>
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

function renderTarotDeck() {
  const spread = document.getElementById('tarotSpread');
  spread.innerHTML = '';
  tarotSlotWords = [...words].sort(() => 0.5 - Math.random()).slice(0, 4);

  tarotSlotWords.forEach((word, idx) => {
    const arcana = tarotArcanaSkills[Math.abs(hashString(word)) % tarotArcanaSkills.length];
    const isCollected = (playerProfile.tarotCardsCollected || []).some(c => (typeof c === 'string' ? c : c.word) === word);

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
  if (card.classList.contains('flipped')) {
    openWordDetails(word);
    return;
  }

  if (playerProfile.xp < 50) {
    showToast(`⚠️ 需要 50 XP (当前: ${playerProfile.xp})。胜利通关可赚取 XP！`);
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
  renderTarotDeck();
  showToast("🔮 塔罗法阵已重置！");
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
  if (!authToken) {
    showToast("⚠️ 请先登录管理员账号");
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
  authToken = loadFromStorage(STORAGE_KEYS.TOKEN, null);
  authUser = loadFromStorage(STORAGE_KEYS.AUTH, null);

  if (authToken && authUser) {
    btnName.textContent = authUser.username;
    if (adminBadgeBtn) adminBadgeBtn.style.display = authUser.is_admin ? 'inline-flex' : 'none';
  } else {
    btnName.textContent = '登录';
    if (adminBadgeBtn) adminBadgeBtn.style.display = 'none';
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
  saveToStorage(STORAGE_KEYS.SETTINGS, appSettings);
  closeSettingsModal();
  showToast("💾 Settings saved!");
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
  updateBadges();
  triggerCloudSync();
  showToast(`✨ Added ${rawWords.length} words & marked for survival!`);
}

// 初始化应用
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = loadFromStorage(STORAGE_KEYS.THEME, 'light');
  document.documentElement.setAttribute('data-theme', savedTheme);
  document.getElementById('themeBtn').textContent = savedTheme === 'dark' ? '🌙' : '☀️';
  document.getElementById('audioBtn').textContent = appSettings.audioMuted ? '🔇' : '🔊';

  renderWords();
  updateBadges();
  renderTarotDeck();
  renderBattleHand();
  renderProfileView();

  document.getElementById('searchInput').addEventListener('input', (e) => {
    renderWords(e.target.value);
  });

  initCloudSession();
});


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
