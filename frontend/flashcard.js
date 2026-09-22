// Account-scoped write-ahead cache; the authenticated server is authoritative.
window.FlashcardCloud = (() => {
  let owner = null, ready = false, busy = false, loading = null, blocked = false, timer = null;
  let record = {revision:0, dirty:false, mutation:null, data:null};
  let status = '未登录：进度仅暂存在本机';
  const getAuth = () => typeof authToken !== 'undefined' && authToken && typeof authUser !== 'undefined' && (authUser?.id || authUser?.sub)
    ? {id:String(authUser.id || authUser.sub), token:authToken} : null;
  const cacheKey = id => 'stone_flashcard_cloud_v2:' + id;
  function read(key) { try { return localStorage.getItem(key); } catch { return null; } }
  function write(key,value) { try { localStorage.setItem(key,value); } catch {} }
  function identify() {
    const auth = getAuth(), id = auth?.id || 'guest';
    if (owner !== id) {
      owner=id; ready=false; blocked=false; loading=null;
      try { record=JSON.parse(read(cacheKey(id))) || {revision:0,dirty:false,data:null}; } catch { record={revision:0,dirty:false,data:null}; }
    }
    return auth;
  }
  function label(text) {
    status=text;
    const el=document.getElementById('fcCloudStatus'); if(el) el.textContent=text;
    const button=document.getElementById('fcCloudAction');
    if(button) button.textContent=blocked?'载入云端进度':getAuth()?'立即同步':'登录同步';
  }
  function persist() { write(cacheKey(owner),JSON.stringify(record)); }
  function storageKey(key) { identify(); return key+':'+owner; }
  function current() { identify(); return record.data; }
  async function load(force=false) {
    const auth=identify();
    if(!auth) {ready=true;label('未登录：进度仅暂存在本机，登录后可跨设备继续');return null;}
    if(loading) return loading;
    const id=auth.id;
    loading=(async()=>{
      label('正在读取云端进度…');
      try {
        const response=await fetch('/api/flashcards/progress',{headers:{Authorization:'Bearer '+auth.token},signal:AbortSignal.timeout(12000)});
        if(!response.ok) throw Error(response.status===401?'login':'network');
        const cloud=await response.json();
        if(getAuth()?.id!==id) return null;
        // A retry after an acknowledged-but-lost response is already committed.
        if(record.dirty && cloud.mutation_id===record.mutation) {record.dirty=false;record.revision=cloud.revision;}
        if(force || !record.dirty) {
          if(force && record.dirty)write(cacheKey(id)+':conflict-backup',JSON.stringify(record));
          record={revision:cloud.revision,dirty:false,mutation:null,data:cloud.state};blocked=false;
        } else if(record.revision!==cloud.revision) {
          blocked=true;label('另一设备已有新进度；本机未上传，请点击“载入云端进度”');
        }
        ready=true;persist();
        if(!blocked) label(record.dirty?'本机进度待上传':cloud.state?'已读取云端进度':'云存档已就绪');
        if(record.dirty&&!blocked) void flush();
        return record.data;
      } catch(error) {
        ready=false;label(error.message==='login'?'登录已过期，请重新登录同步':'离线暂存：联网后自动上传，尚未同步');
        if(record.dirty && error.message!=='login'){clearTimeout(timer);timer=setTimeout(()=>{timer=null;void flush();},5000);}
        return record.data;
      } finally { if(getAuth()?.id===id) loading=null; }
    })();
    return loading;
  }
  function save(data) {
    const auth=identify();
    if(JSON.stringify(data)===JSON.stringify(record.data)) return;
    record.data=JSON.parse(JSON.stringify(data));record.dirty=true;record.mutation=crypto.randomUUID();persist();
    if(!auth) {label('未登录：进度仅暂存在本机，登录后可跨设备继续');return;}
    if(blocked) {label('另一设备已有新进度；本机未上传，请点击“载入云端进度”');return;}
    label('正在同步进度…');void flush();
  }
  async function flush() {
    const auth=identify();
    if(!auth||busy||blocked||!record.dirty)return;
    if(!ready) {await load();return;}
    const sending=JSON.parse(JSON.stringify(record)),id=auth.id;
    busy=true;
    try {
      const response=await fetch('/api/flashcards/progress',{method:'PUT',headers:{'Content-Type':'application/json',Authorization:'Bearer '+auth.token},
        body:JSON.stringify({expected_revision:sending.revision,mutation_id:sending.mutation,state:sending.data}),signal:AbortSignal.timeout(12000)});
      if(getAuth()?.id!==id)return;
      if(response.status===409){blocked=true;label('另一设备已有新进度；本机未上传，请点击“载入云端进度”');return;}
      if(!response.ok)throw Error(response.status===401?'login':'network');
      const result=await response.json();record.revision=result.revision;
      if(record.mutation===sending.mutation)record.dirty=false;
      persist();label(record.dirty?'正在同步最新进度…':'已同步到云端 · 换设备可继续');
    }catch(error){
      label(error.message==='login'?'登录已过期，请重新登录同步':'离线暂存：联网后自动上传，尚未同步');
      clearTimeout(timer);timer=setTimeout(()=>{timer=null;void flush();},5000);
    }finally{
      busy=false;
      if(getAuth()?.id===id&&record.dirty&&!blocked&&!timer)void flush();
    }
  }
  function refreshLabel(){label(status);}
  function migrateLegacy(keys) {
    const auth=identify();
    if(record.data)return null;
    const claimed=read('stone_flashcard_legacy_owner');
    if(claimed && claimed!==auth?.id)return null;
    if(auth){
      try {const guest=JSON.parse(read(cacheKey('guest')));if(guest?.data){write('stone_flashcard_legacy_owner',auth.id);return guest.data;}}catch{}
    }
    const data={};let found=false;
    for(const [field,key] of Object.entries(keys)){
      try {data[field]=JSON.parse(read(key));if(data[field])found=true;}catch{data[field]=null;}
    }
    if(found){if(auth)write('stone_flashcard_legacy_owner',auth.id);return data;}return null;
  }
  if(typeof window.addEventListener==='function'){
    window.addEventListener('online',()=>{clearTimeout(timer);timer=null;void flush();});
    window.addEventListener('pagehide',()=>void flush());
  }
  return {getAuth,storageKey,current,load,save,flush,refreshLabel,migrateLegacy,isReady:()=>ready,isBlocked:()=>blocked};
})();

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
    lastUserInput: "",
    restoreAnswer: null,
    manualMarkBaselines: new Map(),
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
      const raw = (typeof StoneStorage !== 'undefined' ? StoneStorage.getItem(window.FlashcardCloud.storageKey(STORAGE_KEY_LEARNED)) : localStorage.getItem(window.FlashcardCloud.storageKey(STORAGE_KEY_LEARNED)));
      if (raw) {
        state.learnedWords = new Set(JSON.parse(raw));
      }
    } catch (e) {}
  }

  function saveLearnedWords() {
    try {
      const arr = Array.from(state.learnedWords);
      const str = JSON.stringify(arr);
      if (typeof StoneStorage !== 'undefined') StoneStorage.setItem(window.FlashcardCloud.storageKey(STORAGE_KEY_LEARNED), str);
      localStorage.setItem(window.FlashcardCloud.storageKey(STORAGE_KEY_LEARNED), str);
    } catch (e) {}
  }

  function loadDailyStats() {
    try {
      const raw = (typeof StoneStorage !== 'undefined' ? StoneStorage.getItem(window.FlashcardCloud.storageKey(STORAGE_KEY_STATS)) : localStorage.getItem(window.FlashcardCloud.storageKey(STORAGE_KEY_STATS)));
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
      if (typeof StoneStorage !== 'undefined') StoneStorage.setItem(window.FlashcardCloud.storageKey(STORAGE_KEY_STATS), str);
      localStorage.setItem(window.FlashcardCloud.storageKey(STORAGE_KEY_STATS), str);
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
        isOpen: state.isOpen,
        manualMarkBaselines: Array.from(state.manualMarkBaselines),
        isAnswered: state.isAnswered,
        lastResult: state.lastResult,
        userInput: state.lastUserInput,
        selectedPos: state.selectedPos
      };
      const str = JSON.stringify(sessionData);
      if (typeof StoneStorage !== 'undefined') StoneStorage.setItem(window.FlashcardCloud.storageKey(STORAGE_KEY_SESSION), str);
      localStorage.setItem(window.FlashcardCloud.storageKey(STORAGE_KEY_SESSION), str);
    } catch (e) {}
    queueCloudProgress();
  }

  function clearSession() {
    try {
      if (typeof StoneStorage !== 'undefined') StoneStorage.removeItem(window.FlashcardCloud.storageKey(STORAGE_KEY_SESSION));
      localStorage.removeItem(window.FlashcardCloud.storageKey(STORAGE_KEY_SESSION));
    } catch (e) {}
    queueCloudProgress(true);
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
      const rawSession = (typeof StoneStorage !== 'undefined' ? StoneStorage.getItem(window.FlashcardCloud.storageKey(STORAGE_KEY_SESSION)) : localStorage.getItem(window.FlashcardCloud.storageKey(STORAGE_KEY_SESSION)));
      if (rawSession) {
        const sess = JSON.parse(rawSession);
        if (sess.mode === state.mode && Array.isArray(sess.queue) && sess.queue.length > 0) {
          if (sess.currentIndex < sess.queue.length) {
            state.manualMarkBaselines = new Map(
              (Array.isArray(sess.manualMarkBaselines) ? sess.manualMarkBaselines : [])
                .filter(entry => Array.isArray(entry) && entry.length === 2 && typeof entry[0] === 'string' && Number.isInteger(entry[1]) && entry[1] >= 0)
            );
            state.queue = sess.queue;
            state.currentIndex = sess.currentIndex;
            state.currentWord = state.queue[state.currentIndex] || null;
            state.isAnswered = false;
            state.lastResult = null;
            state.selectedPos = [];
            state.restoreAnswer = sess.isAnswered && sess.lastResult ? sess : null;
            return;
          }
        }
      }
    } catch (e) {}

    state.manualMarkBaselines = new Map();

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
    if (!cloudLoaded && window.FlashcardCloud.getAuth()) return ensureCloudProgress().then(() => open(mode,target));
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
    const restored = state.restoreAnswer; state.restoreAnswer = null;
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

        <div style="display:flex;gap:8px;align-items:center;justify-content:space-between;flex-wrap:wrap;font-size:12px;">
          <span id="fcCloudStatus" role="status" aria-live="polite"></span>
          <button type="button" class="btn btn-secondary btn-xs" id="fcCloudAction" onclick="FlashcardEngine.syncCloudProgress()">立即同步</button>
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
            <span id="fcMarkCountTag" class="flashcard-mark-tag" ${markCount > 0 ? '' : 'hidden'}>★ Mark ×${markCount}</span>
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

          <aside aria-label="手动加入 Mark" style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin:14px 0;padding:12px;border:1px solid var(--paper-border);border-radius:12px;">
            <div style="flex:1;min-width:160px;">
              <strong style="font-size:13px;">Mark · 由你决定</strong>
              <div id="fcMarkStatus" role="status" aria-live="polite" style="font-size:12px;color:var(--text-secondary);margin-top:4px;">对照释义后再决定；不点击就不会新增 Mark。</div>
            </div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;">
              <button type="button" class="btn btn-secondary" id="fcMarkAdd" onclick="FlashcardEngine.addCurrentMark()">＋加入 Mark</button>
              <button type="button" class="btn btn-secondary" id="fcMarkUndo" onclick="FlashcardEngine.undoCurrentMark()" style="display:none" hidden>撤销本次 Mark</button>
            </div>
          </aside>

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

    updateManualMarkControls();
    window.FlashcardCloud.refreshLabel();
    if (restored) {
      state.selectedPos = restored.selectedPos || [];
      const input = document.getElementById('fcInput'); if(input) input.value = restored.userInput || '';
      applyEvaluationResult(restored.lastResult,restored.userInput || '',state.selectedPos,standardDef,true);
    }
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
      reason: '已展开参考释义；需要复习时，请点击 ＋加入 Mark',
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
    state.lastUserInput = userInput;
    const wordKey = state.currentWord.toLowerCase().trim();

    if (!renderOnly && !isUncertain) {
    state.todayStats.completed += 1;
    if (result.correct) {
      state.todayStats.correct += 1;
      // 答对永久进入已掌握集合，以后抽新词不再重复出现！
      state.learnedWords.add(wordKey);
      saveLearnedWords();

      if (typeof soundSuccess === 'function') soundSuccess();
      // Mark 由用户手动管理，答对不自动减少历史或本次标记。
    } else {
      state.todayStats.wrong += 1;
      if (typeof soundFailure === 'function') soundFailure();
      // 判题结果不自动加入 Mark；用户对照释义后自行选择。
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
            ${isUncertain ? '⚪ 暂不判定（不计对错）' : result.correct ? '✅ 判题通过！' : (result.isUnknown ? '🤔 看看参考释义' : '❌ 释义有偏差')}
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
          <button id="fcNextBtn" class="btn btn-primary flashcard-next-btn" onclick="FlashcardEngine.nextWord()">
            ${manualMarkNextLabel()}
          </button>
          ${!result.correct ? `<button class="btn btn-secondary" onclick="FlashcardEngine.retryCurrent()">再试一次</button>` : ''}
        </div>
      `;
    }

    if (inputSection) {
      inputSection.style.display = 'none';
    }
    updateManualMarkControls();
    if (!renderOnly && isUncertain) saveSession();
  }


  function manualMarkKey() {
    return (state.currentWord || '').toLowerCase().trim();
  }

  function manualMarkNextLabel() {
    if (state.currentIndex + 1 >= state.queue.length) return '查看本次研习报告 (Enter) ➔';
    return state.manualMarkBaselines.has(manualMarkKey()) ? '下一个 (Enter) ➔' : '不加 Mark，下一词 (Enter) ➔';
  }

  function updateManualMarkControls() {
    const key = manualMarkKey();
    const added = state.manualMarkBaselines.has(key);
    const count = typeof getMarkCount === 'function' ? getMarkCount(key) : 0;
    const addButton = document.getElementById('fcMarkAdd');
    const undoButton = document.getElementById('fcMarkUndo');
    const status = document.getElementById('fcMarkStatus');
    const tag = document.getElementById('fcMarkCountTag');
    const nextButton = document.getElementById('fcNextBtn');
    if (addButton) {
      addButton.disabled = added || typeof addMark !== 'function';
      addButton.textContent = added ? '✓ 本次已加入 Mark' : '＋加入 Mark';
    }
    if (undoButton) { undoButton.hidden = !added; undoButton.style.display = added ? '' : 'none'; }
    if (status) status.textContent = added
      ? `已手动加入，当前 Mark：${count}。可以撤销本次添加。`
      : `本次未新增 Mark${count > 0 ? `，已有 ${count} 次标记保留` : ''}。是否加入，由你决定。`;
    if (tag) { tag.hidden = count === 0; tag.style.display = count > 0 ? '' : 'none'; tag.textContent = `★ Mark ×${count}`; }
    if (nextButton) nextButton.textContent = manualMarkNextLabel();
  }

  function addCurrentMark() {
    const key = manualMarkKey();
    if (!state.isOpen || !key || state.manualMarkBaselines.has(key) || typeof addMark !== 'function' || typeof getMarkCount !== 'function') return;
    const before = getMarkCount(key);
    try {
      addMark(key);
    } finally {
      // Record only an actual increment; a duplicate click must not add twice.
      if (getMarkCount(key) > before) state.manualMarkBaselines.set(key, before);
      saveSession();
      updateManualMarkControls();
    }
  }

  function undoCurrentMark() {
    const key = manualMarkKey();
    if (!state.isOpen || !state.manualMarkBaselines.has(key) || typeof reduceMark !== 'function' || typeof getMarkCount !== 'function') return;
    const baseline = state.manualMarkBaselines.get(key);
    const before = getMarkCount(key);
    try {
      // Never remove marks that existed before this card's manual addition.
      if (before > baseline) reduceMark(key);
    } finally {
      if (before <= baseline || getMarkCount(key) < before) state.manualMarkBaselines.delete(key);
      saveSession();
      updateManualMarkControls();
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
    saveSession();
  }

  function nextWord() {
    if (state.isEvaluating || !state.isAnswered) return;
    state.currentIndex += 1;
    state.isAnswered = false; state.lastResult = null; state.lastUserInput = ""; state.selectedPos = [];
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
              <span class="stat-lbl">判错 / 未掌握</span>
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


  let cloudLoaded = false, cloudLoadPromise = null;
  function cachedProgress() {
    const read = key => { try { return JSON.parse(localStorage.getItem(window.FlashcardCloud.storageKey(key))); } catch { return null; } };
    return {learned:read(STORAGE_KEY_LEARNED)||[],stats:read(STORAGE_KEY_STATS),session:read(STORAGE_KEY_SESSION)};
  }
  function queueCloudProgress(cleared = false) {
    window.FlashcardCloud.save({learned:Array.from(state.learnedWords),stats:state.todayStats,session:cleared?null:{
      date:getTodayStr(),mode:state.mode,targetCount:state.targetCount,queue:state.queue,currentIndex:state.currentIndex,
      isOpen:state.isOpen,manualMarkBaselines:Array.from(state.manualMarkBaselines),isAnswered:state.isAnswered,
      lastResult:state.lastResult,userInput:state.lastUserInput,selectedPos:state.selectedPos
    }});
    if(typeof flushStoneSync === 'function') void flushStoneSync();
  }
  function hydrateCloudProgress(data) {
    if(!data)return;
    for(const [field,key] of Object.entries({learned:STORAGE_KEY_LEARNED,stats:STORAGE_KEY_STATS,session:STORAGE_KEY_SESSION})) {
      const scoped=window.FlashcardCloud.storageKey(key);
      try {
        if(data[field]==null) {localStorage.removeItem(scoped);if(typeof StoneStorage!=='undefined')StoneStorage.removeItem(scoped);}
        else {const raw=JSON.stringify(data[field]);localStorage.setItem(scoped,raw);if(typeof StoneStorage!=='undefined')StoneStorage.setItem(scoped,raw);}
      }catch{}
    }
    state.learnedWords=new Set(data.learned||[]);
  }
  async function ensureCloudProgress() {
    if(cloudLoadPromise)return cloudLoadPromise;
    cloudLoadPromise=(async()=>{
      let data=await window.FlashcardCloud.load();
      if(!data) data=window.FlashcardCloud.migrateLegacy({learned:STORAGE_KEY_LEARNED,stats:STORAGE_KEY_STATS,session:STORAGE_KEY_SESSION});
      hydrateCloudProgress(data);cloudLoaded=true;
      if(data)window.FlashcardCloud.save(data);
    })();
    try {await cloudLoadPromise;}finally{cloudLoadPromise=null;}
  }
  async function syncCloudProgress() {
    if(!window.FlashcardCloud.getAuth()) {if(typeof openAuthModal==='function')openAuthModal();return;}
    if(window.FlashcardCloud.isBlocked()) {
      const data=await window.FlashcardCloud.load(true);
      if(window.FlashcardCloud.isBlocked())return;
      hydrateCloudProgress(data);cloudLoaded=true;
      if(state.isOpen)open(data?.session?.mode||state.mode,data?.session?.targetCount||100);
    } else {
      await window.FlashcardCloud.flush();window.FlashcardCloud.refreshLabel();
    }
  }
  async function resumeCloudSession() {
    await ensureCloudProgress();
    const sess=cachedProgress().session;
    if(sess?.isOpen && sess.queue?.length && sess.currentIndex<sess.queue.length) open(sess.mode||'study',sess.targetCount||100);
  }

  return {
    resumeCloudSession,
    syncCloudProgress,
    addCurrentMark,
    undoCurrentMark,
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

// Account progress is loaded before resuming a card, including on a new device.
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>window.FlashcardEngine.resumeCloudSession());
else void window.FlashcardEngine.resumeCloudSession();
