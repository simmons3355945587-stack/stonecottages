// Account-scoped write-ahead cache; the authenticated server is authoritative.
window.FlashcardCloud = (() => {
  let owner = null, ready = false, busy = false, loading = null, blocked = false, timer = null, expired = false;
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
      owner=id; ready=false; blocked=false; loading=null; expired=false;
      try { record=JSON.parse(read(cacheKey(id))) || {revision:0,dirty:false,data:null}; } catch { record={revision:0,dirty:false,data:null}; }
    }
    return auth;
  }
  function label(text) {
    status=text;
    const el=document.getElementById('fcCloudStatus'); if(el) el.textContent=text;
    const button=document.getElementById('fcCloudAction');
    if(button) button.textContent=expired?'重新登录':blocked?'载入云端进度':getAuth()?'立即同步':'登录同步';
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
        if(error.message==='login') { expired=true; window.StoneAuthExpired=true; }
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
    if(expired) {label('登录已过期；本机进度已保留，请重新登录同步');return;}
    if(blocked) {label('另一设备已有新进度；本机未上传，请点击“载入云端进度”');return;}
    label('正在同步进度…');void flush();
  }
  async function flush() {
    const auth=identify();
    if(!auth||busy||blocked||expired||!record.dirty)return;
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
      if(error.message==='login') { expired=true; ready=false; window.StoneAuthExpired=true; }
      label(error.message==='login'?'登录已过期，请重新登录同步':'离线暂存：联网后自动上传，尚未同步');
      clearTimeout(timer);timer=null;
      if(!expired)timer=setTimeout(()=>{timer=null;void flush();},5000);
    }finally{
      busy=false;
      if(getAuth()?.id===id&&record.dirty&&!blocked&&!expired&&!timer)void flush();
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
  return {getAuth,storageKey,current,load,save,flush,refreshLabel,migrateLegacy,isReady:()=>ready,isBlocked:()=>blocked,needsLogin:()=>expired};
})();

/**
 * 🎴 Flashcard Engine (小时屋单词卡片极速研习/复习系统 v2.0)
 * 核心升级：
 * 1. 词性多选交互 (Part-of-Speech Selection)
 * 2. 新词按词库编号顺序分组 (1-100、101-200……，答题结果不改变顺序)
 * 3. 断点续学 (中途退出随时继续，不满100词进度不丢)
 * 4. Powered by TypeSafe Jev System One Model
 */
window.FlashcardEngine = (() => {
  const STORAGE_KEY_STATS = 'stone_flashcard_daily_stats_v1';
  const STORAGE_KEY_LEARNED = 'stone_flashcard_learned_words_v1';
  const STORAGE_KEY_SESSION = 'stone_flashcard_session_v1';
  const STORAGE_KEY_SEQUENCE = 'stone_flashcard_sequence_v1';
  const QUEUE_POLICY_VERSION = 2;

  const POS_OPTIONS = [
    { id: 'n', label: 'n.', key: '1' },
    { id: 'v', label: 'v.', key: '2' },
    { id: 'adj', label: 'adj.', key: '3' },
    { id: 'adv', label: 'adv.', key: '4' },
    { id: 'prep', label: 'prep.', key: '5' },
    { id: 'conj', label: 'conj.', key: '6' },
    { id: 'other', label: '其他', key: '7' }
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
    studySequences: {},
    studyScopeKey: '',
    studyStartIndex: 0,
    activeListLength: 0,
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

  function loadStudySequences() {
    try {
      const raw = (typeof StoneStorage !== 'undefined' ? StoneStorage.getItem(window.FlashcardCloud.storageKey(STORAGE_KEY_SEQUENCE)) : localStorage.getItem(window.FlashcardCloud.storageKey(STORAGE_KEY_SEQUENCE)));
      const parsed = raw ? JSON.parse(raw) : {};
      state.studySequences = parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
    } catch (e) {
      state.studySequences = {};
    }
  }

  function saveStudySequences() {
    try {
      const str = JSON.stringify(state.studySequences);
      if (typeof StoneStorage !== 'undefined') StoneStorage.setItem(window.FlashcardCloud.storageKey(STORAGE_KEY_SEQUENCE), str);
      localStorage.setItem(window.FlashcardCloud.storageKey(STORAGE_KEY_SEQUENCE), str);
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
        selectedPos: state.selectedPos,
        queuePolicyVersion: QUEUE_POLICY_VERSION,
        studyScopeKey: state.studyScopeKey,
        studyStartIndex: state.studyStartIndex
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

  const enDefCache = Object.create(null);
  const enDefRequests = new Map();
  const enDefFailures = new Map();

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
    const shared = window.Stone?.peekEnglish?.(clean);
    if (shared) return enDefCache[clean] = englishSummary(shared);

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
    const cached = getEnglishDefinition(clean);
    if (cached) { updateEnglishDefinition(clean, cached); return cached; }
    if ((enDefFailures.get(clean) || 0) > Date.now()) { updateEnglishDefinition(clean, ''); return ''; }
    if (!enDefRequests.has(clean)) enDefRequests.set(clean, (async () => {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 6500);
      try {
        let data;
        if (window.Stone?.english) data = await window.Stone.english(clean);
        else {
          const response = await fetch(`/api/dict/${encodeURIComponent(clean)}`, {signal:controller.signal});
          if (!response.ok) throw new Error('dictionary unavailable');
          data = await response.json();
        }
        const summary = englishSummary(data);
        if (!summary) throw new Error('empty definition');
        enDefCache[clean] = summary;
        enDefFailures.delete(clean);
        return summary;
      } catch {
        enDefFailures.set(clean, Date.now() + 15000);
        return '';
      } finally { clearTimeout(timer); enDefRequests.delete(clean); }
    })());
    const summary = await enDefRequests.get(clean);
    updateEnglishDefinition(clean, summary);
    return summary;
  }

  function englishSummary(data) {
    return (Array.isArray(data) ? data : [data]).flatMap(entry => entry?.meanings || []).map(m => {
      const pos = m.partOfSpeech || m.pos || '';
      const defs = m.definitions || m.defs || [];
      const first = defs.find(d => typeof d === 'string' ? d.trim() : (d?.definition || d?.def || '').trim());
      const text = typeof first === 'string' ? first : first?.definition || first?.def || '';
      return text ? `${pos ? `(${pos}) ` : ''}${text}` : '';
    }).filter(Boolean).join('; ');
  }

  function updateEnglishDefinition(word, summary) {
    if (!state.isOpen || state.currentWord?.toLowerCase().trim() !== word) return;
    const el = document.getElementById('fcStdDefEnText');
    if (el) { el.textContent = summary || '暂时未取得英文释义，可重试或先看中文参考。'; el.setAttribute?.('aria-busy', 'false'); }
    const retry = document.getElementById('fcEnglishRetry');
    if (retry) { retry.hidden = !!summary; retry.style.display = summary ? 'none' : 'inline-flex'; }
  }

  function retryEnglishDefinition() {
    const word = state.currentWord?.toLowerCase().trim();
    if (!word) return;
    enDefFailures.delete(word);
    const el = document.getElementById('fcStdDefEnText');
    if (el) { el.textContent = '正在获取英文释义…'; el.setAttribute?.('aria-busy', 'true'); }
    return fetchEnglishDefOnline(word);
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
      method:"POST", headers:{"Content-Type":"application/json", ...(typeof authToken !== 'undefined' && authToken ? {Authorization:'Bearer '+authToken} : {})}, signal:controller.signal,
      body:JSON.stringify({word,user_input:input,standard_def:standardDef,user_selected_pos:referencePos.length ? selectedPos.join(", ") || "未指定" : "未指定", standard_pos:referencePos})
    });
    if (resp.status === 401) return uncertain('请登录后使用智能判卷；仍可查看释义并自行选择 Mark。');
    if (resp.status === 403) return uncertain('当前账号尚未开通 AI 额度；仍可查看释义并自行选择 Mark。');
    if (resp.status === 429) return uncertain('判卷请求较多，请稍后重试；本次不计对错。');
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
    loadStudySequences();

    // 1. 优先尝试从本地持久化会话中恢复（支持断点续背）
    try {
      const rawSession = (typeof StoneStorage !== 'undefined' ? StoneStorage.getItem(window.FlashcardCloud.storageKey(STORAGE_KEY_SESSION)) : localStorage.getItem(window.FlashcardCloud.storageKey(STORAGE_KEY_SESSION)));
      if (rawSession) {
        const sess = JSON.parse(rawSession);
        if (sess.queuePolicyVersion === QUEUE_POLICY_VERSION && sess.mode === state.mode && Array.isArray(sess.queue) && sess.queue.length > 0) {
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
            state.studyScopeKey = typeof sess.studyScopeKey === 'string' ? sess.studyScopeKey : '';
            state.studyStartIndex = Number.isInteger(sess.studyStartIndex) && sess.studyStartIndex >= 0 ? sess.studyStartIndex : 0;
            state.activeListLength = state.mode === 'study' && typeof getActiveWordList === 'function'
              ? getActiveWordList().length
              : state.queue.length;
            return;
          }
        }
      }
    } catch (e) {}

    state.manualMarkBaselines = new Map();

    // 2. 重新组队：新词严格按编号切片；复习严格只取 Mark 词。
    let list = [];
    if (state.mode === 'review') {
      // getMarkedWords() 返回 [word, count]；复习不再用普通词补足 100。
      if (typeof getMarkedWords === 'function') {
        list = getMarkedWords().map(entry => Array.isArray(entry) ? entry[0] : entry).filter(word => typeof word === 'string' && word.trim());
      }
      state.studyScopeKey = '';
      state.studyStartIndex = 0;
      state.activeListLength = list.length;
    } else {
      const full = typeof getActiveWordList === 'function'
        ? getActiveWordList()
        : (typeof words !== 'undefined' && Array.isArray(words) ? words : []);
      state.activeListLength = full.length;
      state.studyScopeKey = getStudyScopeKey(full);
      let cursor = Number(state.studySequences[state.studyScopeKey]);
      if (!Number.isInteger(cursor) || cursor < 0) {
        cursor = inferLegacyCursor(full, state.targetCount);
        state.studySequences[state.studyScopeKey] = cursor;
        saveStudySequences();
      }
      if (full.length > 0 && cursor >= full.length) {
        cursor = Math.max(0, Math.floor((full.length - 1) / state.targetCount) * state.targetCount);
      } else {
        cursor = Math.floor(cursor / state.targetCount) * state.targetCount;
      }
      state.studyStartIndex = cursor;
      list = full.slice(state.studyStartIndex, state.studyStartIndex + state.targetCount);
    }

    state.queue = list.slice(0, state.targetCount);
    state.currentIndex = 0;
    state.currentWord = state.queue[0] || null;
    state.isAnswered = false;
    state.lastResult = null;
    state.selectedPos = [];
    saveSession();
  }

  function getStudyScopeKey(full) {
    const source = typeof currentWordSource !== 'undefined' ? currentWordSource : 'default';
    const tier = typeof currentWordTier !== 'undefined' ? currentWordTier : 'all';
    const first = full[0] || '';
    const last = full[full.length - 1] || '';
    return `${source}:${tier}:${full.length}:${first}:${last}`;
  }

  function inferLegacyCursor(full, targetCount) {
    const touched = new Set(state.learnedWords);
    let firstGroupHasMark = false;
    if (typeof getMarkedWords === 'function') {
      for (const entry of getMarkedWords()) {
        const word = Array.isArray(entry) ? entry[0] : entry;
        if (typeof word === 'string') {
          const index = full.findIndex(candidate => String(candidate).toLowerCase().trim() === word.toLowerCase().trim());
          if (index >= 0 && index < targetCount) firstGroupHasMark = true;
        }
      }
    }
    let highest = -1;
    full.forEach((word, index) => {
      if (touched.has(String(word).toLowerCase().trim())) highest = index;
    });
    if (highest < 0) return firstGroupHasMark ? Math.min(full.length, targetCount) : 0;
    return Math.min(full.length, Math.ceil((highest + 1) / targetCount) * targetCount);
  }

  function getStudyGroups(totalCount, targetCount) {
    const full = typeof getActiveWordList === 'function'
      ? getActiveWordList()
      : (typeof words !== 'undefined' && Array.isArray(words) ? words : []);
    const count = totalCount !== undefined ? totalCount : (full.length || state.activeListLength || 0);
    const size = targetCount || state.targetCount || 100;
    const numGroups = Math.max(1, Math.ceil(count / size));
    const groups = [];
    for (let i = 0; i < numGroups; i++) {
      const startIndex = i * size;
      const startNum = startIndex + 1;
      const endNum = Math.min((i + 1) * size, count);
      groups.push({
        groupIndex: i,
        groupNumber: i + 1,
        startIndex,
        startNum,
        endNum,
        label: `第 ${i + 1} 组 (${startNum}-${endNum})`,
        isCurrent: startIndex === state.studyStartIndex
      });
    }
    return groups;
  }

  function getCurrentStudyGroup() {
    const size = state.targetCount || 100;
    const groupIndex = Math.floor((state.studyStartIndex || 0) / size);
    return {
      groupIndex,
      groupNumber: groupIndex + 1,
      startIndex: state.studyStartIndex || 0,
      startNum: (state.studyStartIndex || 0) + 1,
      endNum: Math.min((state.studyStartIndex || 0) + size, state.activeListLength || ((state.studyStartIndex || 0) + size))
    };
  }

  function setStudyGroup(startIndex) {
    const full = typeof getActiveWordList === 'function'
      ? getActiveWordList()
      : (typeof words !== 'undefined' && Array.isArray(words) ? words : []);
    const listLen = full.length;
    let idx = Number(startIndex);
    if (!Number.isInteger(idx) || idx < 0) idx = 0;
    const size = state.targetCount || 100;
    if (listLen > 0 && idx >= listLen) {
      idx = Math.max(0, Math.floor((listLen - 1) / size) * size);
    } else {
      idx = Math.floor(idx / size) * size;
    }

    state.studyStartIndex = idx;
    if (!state.studyScopeKey && listLen > 0) {
      state.studyScopeKey = getStudyScopeKey(full);
    }
    if (state.studyScopeKey) {
      state.studySequences[state.studyScopeKey] = idx;
      saveStudySequences();
    }

    state.activeListLength = listLen;
    state.queue = full.slice(idx, idx + size);
    state.currentIndex = 0;
    state.currentWord = state.queue[0] || null;
    state.isAnswered = false;
    state.lastResult = null;
    state.lastUserInput = "";
    state.selectedPos = [];
    state.restoreAnswer = null;
    state.manualMarkBaselines = new Map();

    saveSession();
    queueCloudProgress();

    if (state.isOpen) {
      renderCard();
    }
    updateMainGroupSelectUI();

    const groupNum = Math.floor(idx / size) + 1;
    const startNum = idx + 1;
    const endNum = Math.min(idx + size, listLen || (idx + size));
    if (typeof showToast === 'function') {
      showToast(`📖 已切换到第 ${groupNum} 组 (${startNum}-${endNum})`);
    }
  }

  function updateMainGroupSelectUI() {
    const el = document.getElementById('fcMainGroupSelect');
    if (!el) return;
    const groups = getStudyGroups();
    el.innerHTML = groups.map(g => `<option value="${g.startIndex}" ${g.startIndex === state.studyStartIndex ? 'selected' : ''}>${g.label}</option>`).join('');
  }

  function open(mode = 'study', target = 100, startIndex = null) {
    if (!cloudLoaded && window.FlashcardCloud.getAuth()) return ensureCloudProgress().then(() => open(mode, target, startIndex));
    evaluationVersion++; state.isEvaluating = false;
    state.isOpen = true;
    state.mode = mode;
    state.targetCount = target;
    loadDailyStats();

    if (startIndex !== null && startIndex !== undefined && !isNaN(Number(startIndex))) {
      clearSession();
      const full = typeof getActiveWordList === 'function' ? getActiveWordList() : (typeof words !== 'undefined' && Array.isArray(words) ? words : []);
      state.activeListLength = full.length;
      state.studyScopeKey = getStudyScopeKey(full);
      const validIdx = Math.max(0, Math.floor(Number(startIndex) / state.targetCount) * state.targetCount);
      state.studyStartIndex = validIdx;
      loadStudySequences();
      state.studySequences[state.studyScopeKey] = validIdx;
      saveStudySequences();
    }

    initQueue();

    const modal = document.getElementById('flashcardModal');
    if (modal) {
      modal.style.display = 'flex';
      requestAnimationFrame(() => modal.classList.add('open'));
      renderCard();
    }
    updateMainGroupSelectUI();
  }

  
  /**
   * 调取权威词源考据
   */
  function openWordEtymology(word) {
    const target = word || state.currentWord;
    if (!target) return;
    if (typeof openWordDetails === 'function') {
      openWordDetails(target);
      setTimeout(() => {
        if (typeof switchDrawerDictTab === 'function') {
          switchDrawerDictTab('etym');
        }
      }, 100);
    } else if (window.StoneEtymology) {
      window.StoneEtymology.fetchEtymology(target).then(res => {
        showToast(`【${target} 词源】\n${res.etymology.slice(0, 150)}...`);
      });
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
    state.renderedAt = Date.now();
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
    // Start while the learner is thinking, before revealing the answer.
    fetchEnglishDefOnline(word);
    window.Stone?.prefetchEnglish?.(state.queue.slice(state.currentIndex + 1, state.currentIndex + 3));
    const progressPercent = Math.min(100, Math.round((state.todayStats.completed / state.todayStats.target) * 100));

    // 渲染词性多选胶囊 (附带 1~7 键盘快捷键标识)
    const groups = getStudyGroups(state.activeListLength, state.targetCount);
    const groupSelectHtml = state.mode === 'study' ? `
      <div class="flashcard-group-pill" title="自由切换当前背词分组 (如 1-100, 101-200)">
        <span class="flashcard-group-label">分组</span>
        <select id="fcGroupSelect" class="flashcard-group-dropdown" onchange="FlashcardEngine.setStudyGroup(parseInt(this.value, 10))">
          ${groups.map(g => `<option value="${g.startIndex}" ${g.startIndex === state.studyStartIndex ? 'selected' : ''}>${g.label}</option>`).join('')}
        </select>
      </div>
    ` : '';

    const posButtonsHtml = POS_OPTIONS.map(opt => `
      <button type="button" class="flashcard-pos-pill" id="fcPosBtn_${opt.id}" onclick="FlashcardEngine.togglePosOption('${opt.id}')" title="勾选 ${opt.label} (快捷键: ${opt.key} 或 Alt+${opt.key})">
        <span style="opacity:0.6;font-size:11px;margin-right:2px;">${opt.key}.</span>${opt.label}
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
            ${groupSelectHtml}
            <div class="flashcard-mode-pill" onclick="FlashcardEngine.toggleLanguageMode()" title="切换释义语言显示偏好 (中/英优先)">
              <span>${(typeof appSettings !== 'undefined' && appSettings.dictLanguageMode === 'en') ? '🇬🇧 纯英优先' : '🇨🇳 中文优先'}</span>
            </div>
          </div>
          <div class="flashcard-hud-right">
            <span class="flashcard-stat-chip">今日打卡: <strong id="fcCompletedCount">${state.todayStats.completed}</strong> / ${state.todayStats.target} 词</span>
            <span class="flashcard-stat-chip" title="支持断点续背，退出后进度不丢失">${state.mode === 'study' ? `词库编号: <strong>${state.studyStartIndex + state.currentIndex + 1}</strong> / ${state.activeListLength} (第${Math.floor(state.studyStartIndex / state.targetCount) + 1}组)` : `复习进度: <strong>${state.currentIndex + 1}</strong> / ${state.queue.length}`}</span>
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
            <button type="button" class="btn btn-secondary btn-xs" style="margin-left:8px; border-radius:12px; font-size:12px; padding:2px 8px; vertical-align:middle; cursor:pointer;" onclick="FlashcardEngine.openWordEtymology()" title="查看权威词源演变与历史故事">💡 词源</button>
            <span id="fcMarkCountTag" class="flashcard-mark-tag" ${markCount > 0 ? '' : 'hidden'}>★ Mark ×${markCount}</span>
            ${state.learnedWords.has(word.toLowerCase().trim()) ? `<span class="flashcard-learned-tag">✔ 曾掌握</span>` : ''}
          </div>

          <!-- 1. 词性勾选区 -->
          <div class="flashcard-pos-section" id="fcPosSection">
            <div class="flashcard-section-label">🎯 步骤 1：勾选词性 (多选，可选多个):</div>
            <div class="flashcard-pos-group">
              ${posButtonsHtml}
            </div>
          </div>

          <!-- 2. 中英文释义输入区 -->
          <div class="flashcard-def-section" id="fcInputSection">
            <label for="fcInput" class="flashcard-section-label">✍️ 写下你的理解 · 中文或英文均可</label>
            <div class="flashcard-input-wrap" id="fcInputWrap">
              <input type="text" id="fcInput" class="flashcard-input" maxlength="2000" placeholder="输入中文或英文释义 (例如: 放弃 / to give up)..." autocomplete="off" />
              <button class="btn btn-primary flashcard-submit-btn" id="fcSubmitBtn" onclick="FlashcardEngine.submitAnswer()">判卷 (Enter)</button>
              <button type="button" class="btn btn-secondary flashcard-unknown-btn" id="fcUnknownBtn" onclick="FlashcardEngine.giveUpUnknown()" title="想不起来/我不清楚 (快捷键: 空回车 或 ?)">🤔 我不清楚</button>
            </div>
          </div>

          <aside aria-label="手动加入 Mark" style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;margin:6px 0;padding:5px 8px;border:1px solid var(--paper-border);border-radius:8px;background:var(--paper-surface-sub);">
            <div style="flex:1;min-width:140px;">
              <div id="fcMarkStatus" role="status" aria-live="polite" style="font-size:11px;color:var(--text-secondary);">判错自动加入；可按 + 手动 Mark。</div>
            </div>
            <div style="display:flex;gap:6px;flex-wrap:wrap;">
              <button type="button" class="btn btn-secondary btn-xs" id="fcMarkAdd" onclick="FlashcardEngine.addCurrentMark()" title="加入重点生词本 (快捷键: +)" style="font-size:11px;padding:2px 7px;">＋Mark (+)</button>
              <button type="button" class="btn btn-secondary btn-xs" id="fcMarkUndo" onclick="FlashcardEngine.undoCurrentMark()" title="撤销本次 Mark (快捷键: -)" style="display:none;font-size:11px;padding:2px 7px;" hidden>撤销 (-)</button>
            </div>
          </aside>

          <!-- 极速判定中状态条 -->
          <div class="flashcard-evaluating-row" id="fcEvaluating" style="display: none;">
            <div class="flashcard-spinner"></div>
            <span>正在核对释义…</span>
          </div>

          <!-- 判定结果展示区 -->
          <div class="flashcard-result-panel" id="fcResultPanel" style="display: none;">
            <!-- 动态注入结果 -->
          </div>
        </div>

        <!-- 底部快捷键提示 -->
        <div class="flashcard-footer-tip">
          <span>快捷键: <strong>Enter</strong> 判卷/下一词 · <strong>+</strong> 标记Mark · <strong>Space</strong> 发音 · <strong>Esc</strong> 退出</span>
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
    }, 50);
  }

  function setupInputListener(input) {
    let isComposing = false;
    input.addEventListener('compositionstart', () => { isComposing = true; });
    input.addEventListener('compositionend', () => { isComposing = false; });
    input.addEventListener('keydown', (e) => {
      if (isComposing || e.isComposing || e.keyCode === 229) return;
      if (e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
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

  function handleFlashcardKeydown(e) {
    if (!state.isOpen) return;
    if (e.isComposing || e.keyCode === 229) return;
    if (e.ctrlKey || e.metaKey) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      close();
      return;
    }

    const inputEl = document.getElementById('fcInput');
    const isInputFocused = (document.activeElement === inputEl && inputEl && inputEl.offsetParent !== null);
    const isSelectFocused = Boolean(document.activeElement && (document.activeElement.tagName === 'SELECT' || (document.activeElement.classList && document.activeElement.classList.contains('flashcard-group-dropdown'))));
    if (isSelectFocused) return;

    // 1. 词性勾选快捷键：Alt+1~7 (任何聚焦状态) 或 1~7 (不在输入框打字时)
    const isAltDigit = e.altKey && e.key >= '1' && e.key <= '7';
    const isDirectDigit = !isInputFocused && !e.altKey && e.key >= '1' && e.key <= '7';
    if (!state.isAnswered && !state.isEvaluating && (isAltDigit || isDirectDigit)) {
      const idx = parseInt(e.key, 10) - 1;
      if (idx >= 0 && idx < POS_OPTIONS.length) {
        e.preventDefault();
        e.stopPropagation();
        togglePosOption(POS_OPTIONS[idx].id);
        if (typeof soundClick === 'function') soundClick();
        return;
      }
    }

    if (e.altKey) return;

    // 2. Mark 标记快捷键 (+ / = / 小键盘+ 始终加入；m 在非输入状态加入；- 撤销)
    // “+”是卡片操作键，即使输入框仍保留焦点（例如模型暂不判定）也不能被吞掉。
    const isIncrease = (e.key === '+' || e.key === '=' || e.code === 'Equal' || e.code === 'NumpadAdd' || e.key === 'Add' || (!isInputFocused && (e.key === 'm' || e.key === 'M' || e.code === 'KeyM')));
    const isDecrease = (e.key === '-' || e.key === '_' || e.code === 'Minus' || e.code === 'NumpadSubtract' || e.key === 'Subtract');

    if (isIncrease) {
      e.preventDefault();
      e.stopPropagation();
      addCurrentMark();
      if (typeof soundClick === 'function') soundClick();
      const nextBtn = document.getElementById('fcNextBtn');
      if (nextBtn && typeof nextBtn.focus === 'function') { try { nextBtn.focus(); } catch {} }
      return;
    }

    if (isDecrease && (state.isAnswered || !isInputFocused)) {
      e.preventDefault();
      e.stopPropagation();
      undoCurrentMark();
      if (typeof soundClick === 'function') soundClick();
      const nextBtn = document.getElementById('fcNextBtn');
      if (nextBtn && typeof nextBtn.focus === 'function') { try { nextBtn.focus(); } catch {} }
      return;
    }

    // 3. 空格键发音（当用户不在输入框打字时）
    if (e.code === 'Space' || e.key === ' ') {
      if (!isInputFocused) {
        e.preventDefault();
        speakCurrent();
        return;
      }
    }

    // 4. 回车键：若已作答/已提交，进入下一词；若未作答且未在输入框内聚焦，触发提交
    if (e.key === 'Enter') {
      if (state.isAnswered) {
        if (Date.now() - (state.answeredAt || 0) < 100) return;
        const active = document.activeElement;
        if (active && active.id === 'fcRetryBtn') {
          return;
        }
        e.preventDefault();
        e.stopPropagation();
        nextWord();
        return;
      }

      // 未作答状态：如果焦点不在输入框内（例如点击了词性胶囊或卡片背景），按 Enter 也提交答案
      if (!isInputFocused && inputEl && !state.isEvaluating) {
        if (Date.now() - (state.renderedAt || 0) < 250) return;
        const active = document.activeElement;
        if (active && (active.id === 'fcUnknownBtn' || active.id === 'fcSubmitBtn' || active.id === 'fcMarkAdd' || active.id === 'fcMarkUndo')) {
          return;
        }
        e.preventDefault();
        const val = inputEl.value.trim();
        if (!val || val === '?' || val === '？') {
          giveUpUnknown();
        } else {
          submitAnswer();
        }
      }
    }
  }

  if (typeof document !== 'undefined' && typeof document.addEventListener === 'function') {
    document.addEventListener('keydown', handleFlashcardKeydown);
  } else if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
    window.addEventListener('keydown', handleFlashcardKeydown);
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
    state.answeredAt = Date.now();
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
      // 只有明确 REJECT 才自动加 Mark；UNCERTAIN 仍交给用户用 + 决定。
      if (result.verdict === 'REJECT' && !state.manualMarkBaselines.has(wordKey) && typeof addMark === 'function') addMark(wordKey);
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
      if (!isUncertain && !result.isUnknown) cardBox.classList.add(result.correct ? 'is-correct' : 'is-wrong');
    }

    const posDisplay = selectedPos.length > 0 ? selectedPos.map(p => `[${p}.]`).join(' ') : '未指定';
    const stdPosList = getStandardPosList(state.currentWord, standardDef);
    const stdPosDisplay = stdPosList.length > 0 
      ? stdPosList.map(p => `[${p}.]`).join(' ') 
      : '暂无标注（词性不参与判定）';
    const isEnMode = (typeof appSettings !== 'undefined' && appSettings.dictLanguageMode === 'en');
    const enDef = getEnglishDefinition(state.currentWord);

    // 触发异步补齐英文释义
    // Fetch after the result DOM exists, including immediate cache/error paths.

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
          ${(selectedPos.length || stdPosList.length) ? `<div class="flashcard-compare-row">
            <div class="flashcard-compare-item">
              <span class="compare-label">你勾选的词性:</span>
              <span class="compare-content user-input-text">${escapeHtml(posDisplay)}</span>
            </div>
            <div class="flashcard-compare-item">
              <span class="compare-label">标准考纲词性:</span>
              <span class="compare-content std-def-text">${escapeHtml(stdPosDisplay)}</span>
            </div>
          </div>` : ''}
          ${!result.isUnknown ? `<div class="flashcard-compare-item" style="margin-top: 6px;">
            <span class="compare-label">你的释义:</span>
            <span class="compare-content user-input-text">${escapeHtml(userInput)}</span>
          </div>` : ''}
          <div class="flashcard-compare-item" style="margin-top: 6px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
              <span class="compare-label">参考释义 · 英汉对照</span>
              <div class="flashcard-dict-lang-switch" onclick="FlashcardEngine.toggleLanguageMode()" title="点击切换中英文释义优先模式" style="cursor:pointer; display:flex; gap:4px; font-size:11px;">
                <span style="padding:2px 6px; border-radius:4px; ${!isEnMode ? 'background:var(--brand-accent);color:#fff;font-weight:bold;' : 'opacity:0.6;'}">🇨🇳 中文优先</span>
                <span style="padding:2px 6px; border-radius:4px; ${isEnMode ? 'background:#3b82f6;color:#fff;font-weight:bold;' : 'opacity:0.6;'}">🇬🇧 纯英优先</span>
              </div>
            </div>

            <!-- 根据模式优先排序展示 -->
            ${isEnMode ? `
              <div class="compare-content std-def-text compare-def-primary" style="color:#3b82f6; margin-bottom:6px;">
                <strong class="compare-def-tag" style="color:var(--text-secondary); margin-right:6px;">[英文释义]</strong>
                <span id="fcStdDefEnText" role="status" aria-live="polite" aria-busy="${!enDef}">${escapeHtml(enDef || '正在获取英文释义…')}</span>
              </div>
              <div class="compare-content std-def-text compare-def-secondary" style="color:var(--text-secondary);">
                <strong class="compare-def-tag" style="color:var(--text-secondary); margin-right:6px;">[中文考纲]</strong>
                <span>${escapeHtml(standardDef || '暂无详细中文释义')}</span>
              </div>
            ` : `
              <div class="compare-content std-def-text compare-def-primary" style="color:var(--brand-accent); font-weight:700; margin-bottom:6px;">
                <strong class="compare-def-tag" style="color:var(--text-secondary); margin-right:6px;">[中文考纲]</strong>
                <span>${escapeHtml(standardDef || '暂无详细中文释义')}</span>
              </div>
              <div class="compare-content std-def-text compare-def-secondary" style="color:#3b82f6; font-style:italic;">
                <strong class="compare-def-tag" style="color:var(--text-secondary); font-style:normal; margin-right:6px;">[英文双解]</strong>
                <span id="fcStdDefEnText" role="status" aria-live="polite" aria-busy="${!enDef}">${escapeHtml(enDef || '正在获取英文释义…')}</span>
              </div>
            `}
            <div style="margin-top:10px; padding-top:8px; border-top:1px dashed var(--paper-border);">
              <button type="button" class="btn btn-secondary btn-sm" onclick="FlashcardEngine.openWordEtymology()" style="display:inline-flex; align-items:center; gap:5px; border-radius:8px; font-size:12.5px; font-weight:700; padding:5px 12px; cursor:pointer;" title="查看词源故事与演变考据">
                💡 查看「${escapeHtml(state.currentWord)}」词源故事与考据
              </button>
            </div>
            <button type="button" id="fcEnglishRetry" class="btn btn-secondary" hidden style="display:none;margin-top:8px" onclick="FlashcardEngine.retryEnglishDefinition()">重新获取英文释义</button>
          </div>
        </div>

        <div class="flashcard-action-bar">
          <button id="fcNextBtn" class="btn btn-primary flashcard-next-btn" onclick="FlashcardEngine.nextWord()">
            ${manualMarkNextLabel()}
          </button>
          ${!result.correct ? `<button id="fcRetryBtn" class="btn btn-secondary" onclick="FlashcardEngine.retryCurrent()">再试一次</button>` : ''}
        </div>
      `;
    }

    if (inputSection) {
      inputSection.style.display = 'none';
    }
    const posSection = document.getElementById('fcPosSection');
    if (posSection) posSection.style.display = 'none';
    const completed = document.getElementById('fcCompletedCount');
    if (completed) completed.textContent = state.todayStats.completed;
    updateManualMarkControls();
    const nextBtn = document.getElementById('fcNextBtn');
    if (nextBtn && typeof nextBtn.focus === 'function') { try { nextBtn.focus(); } catch {} }
    fetchEnglishDefOnline(state.currentWord);
    if (!renderOnly && isUncertain) saveSession();
  }


  function manualMarkKey() {
    return (state.currentWord || '').toLowerCase().trim();
  }

  function manualMarkNextLabel() {
    if (state.currentIndex + 1 >= state.queue.length) return '查看本次研习报告 (Enter) ➔';
    return state.manualMarkBaselines.has(manualMarkKey()) || state.lastResult?.verdict === 'REJECT' ? '下一个 (Enter) ➔' : '不加 Mark，下一词 (Enter) ➔';
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
      addButton.textContent = added ? '✓ 本次已加入 Mark' : '＋加入 Mark (+)';
      addButton.title = added ? '已手动加入重点生词本' : '加入重点生词本 (快捷键: +)';
    }
    if (undoButton) {
      undoButton.hidden = !added;
      undoButton.style.display = added ? '' : 'none';
      undoButton.title = '撤销本次 Mark (快捷键: -)';
    }
    if (status) status.textContent = added
      ? `已手动加入，当前 Mark：${count}。可以撤销本次添加。`
      : state.lastResult?.verdict === 'REJECT'
        ? `本次判错已自动加入 Mark，当前 Mark：${count}。`
        : `本次未新增 Mark${count > 0 ? `，已有 ${count} 次标记保留` : ''}。暂不判定时可按 + 手动加入。`;
    if (tag) { tag.hidden = count === 0; tag.style.display = count > 0 ? '' : 'none'; tag.textContent = `★ Mark ×${count}`; }
    if (nextButton) {
      nextButton.textContent = manualMarkNextLabel();
      if (state.isAnswered && typeof nextButton.focus === 'function') { try { nextButton.focus(); } catch {} }
    }
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
    const posSection = document.getElementById('fcPosSection');
    if (posSection) posSection.style.display = 'flex';
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
    const completedQueue = state.queue.length > 0;
    const nextStudyIndex = Math.min(state.activeListLength, state.studyStartIndex + state.queue.length);
    const hasNextStudyGroup = state.mode === 'study' && nextStudyIndex < state.activeListLength;
    if (state.mode === 'study' && completedQueue && state.studyScopeKey) {
      const nextIndex = Math.min(state.activeListLength || Number.MAX_SAFE_INTEGER, state.studyStartIndex + state.queue.length);
      const savedIndex = Number(state.studySequences[state.studyScopeKey]) || 0;
      state.studySequences[state.studyScopeKey] = Math.max(savedIndex, nextIndex);
      saveStudySequences();
    }
    clearSession();
    const modal = document.getElementById('flashcardModal');
    if (!modal) return;

    const accuracy = state.todayStats.completed > 0 
      ? Math.round((state.todayStats.correct / state.todayStats.completed) * 100) 
      : 0;

    const groups = getStudyGroups(state.activeListLength, state.targetCount);
    const groupSelectOptionsHtml = groups.map(g => `
      <option value="${g.startIndex}" ${g.startIndex === state.studyStartIndex ? 'selected' : ''}>${g.label}</option>
    `).join('');
    const currentGroupNum = Math.floor(state.studyStartIndex / state.targetCount) + 1;
    const currentGroupEnd = Math.min(state.activeListLength, state.studyStartIndex + state.targetCount);

    modal.innerHTML = `
      <div class="flashcard-container">
        <div class="flashcard-card-box finished-box">
          <div class="finished-trophy">🏆</div>
          <h2 style="font-size:24px; font-weight:800; margin: 12px 0 6px;">${completedQueue ? '本组研习圆满完成！' : (state.mode === 'study' ? '顺序新词已经全部学完' : '目前没有 Mark 词')}</h2>
          <p style="color:var(--text-secondary); font-size:14px; margin-bottom: 20px;">
            ${completedQueue ? `今日累计完成 <strong>${state.todayStats.completed}</strong> 词。当前第 ${currentGroupNum} 组 (${state.studyStartIndex + 1}-${currentGroupEnd}) 已完成。` : (state.mode === 'study' ? '当前词库已没有尚未分组的新词。' : '先在卡片或词库中添加 Mark，再进入重点复习。')}
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

          ${state.mode === 'study' ? `
            <div style="margin-top:20px; display:flex; align-items:center; justify-content:center; gap:8px;">
              <span style="font-size:13px; color:var(--text-secondary); font-weight:700;">自由跳组:</span>
              <select class="flashcard-group-dropdown" style="padding:6px 12px; font-size:13px; border-radius:8px; border:1px solid var(--paper-border); background:var(--paper-surface);" onchange="FlashcardEngine.setStudyGroup(parseInt(this.value, 10))">
                ${groupSelectOptionsHtml}
              </select>
            </div>
          ` : ''}

          <div style="display:flex; gap:12px; justify-content:center; margin-top:20px; flex-wrap:wrap;">
            ${completedQueue && hasNextStudyGroup ? `<button id="fcFinishRestartBtn" class="btn btn-primary" onclick="FlashcardEngine.open('study', ${state.targetCount}, ${nextStudyIndex})">下一组 (${nextStudyIndex + 1}-${Math.min(state.activeListLength, nextStudyIndex + state.targetCount)})</button>` : completedQueue && state.mode === 'review' ? `<button id="fcFinishRestartBtn" class="btn btn-primary" onclick="FlashcardEngine.open('review', ${state.targetCount})">再次复习 Mark 词</button>` : state.mode === 'study' ? '<button id="fcFinishRestartBtn" class="btn btn-primary" onclick="FlashcardEngine.open(\'review\', 100)">去复习 Mark 词</button>' : ''}
            ${state.mode === 'study' ? `<button class="btn btn-secondary" onclick="FlashcardEngine.open('study', ${state.targetCount}, ${state.studyStartIndex})">重学本组 (${state.studyStartIndex + 1}-${currentGroupEnd})</button>` : ''}
            <button class="btn btn-secondary" onclick="FlashcardEngine.close()">返回词库</button>
          </div>
        </div>
      </div>
    `;
    if (typeof soundSuccess === 'function') soundSuccess();
    setTimeout(() => { const btn = document.getElementById('fcFinishRestartBtn'); if (btn && typeof btn.focus === 'function') { try { btn.focus(); } catch {} } }, 50);
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
    return {learned:read(STORAGE_KEY_LEARNED)||[],sequence:read(STORAGE_KEY_SEQUENCE)||{},stats:read(STORAGE_KEY_STATS),session:read(STORAGE_KEY_SESSION)};
  }
  function queueCloudProgress(cleared = false) {
    window.FlashcardCloud.save({learned:Array.from(state.learnedWords),sequence:state.studySequences,stats:state.todayStats,session:cleared?null:{
      date:getTodayStr(),mode:state.mode,targetCount:state.targetCount,queue:state.queue,currentIndex:state.currentIndex,
      isOpen:state.isOpen,manualMarkBaselines:Array.from(state.manualMarkBaselines),isAnswered:state.isAnswered,
      lastResult:state.lastResult,userInput:state.lastUserInput,selectedPos:state.selectedPos,queuePolicyVersion:QUEUE_POLICY_VERSION,
      studyScopeKey:state.studyScopeKey,studyStartIndex:state.studyStartIndex
    }});
    if(typeof flushStoneSync === 'function') void flushStoneSync();
  }
  function hydrateCloudProgress(data) {
    if(!data)return;
    for(const [field,key] of Object.entries({learned:STORAGE_KEY_LEARNED,sequence:STORAGE_KEY_SEQUENCE,stats:STORAGE_KEY_STATS,session:STORAGE_KEY_SESSION})) {
      const scoped=window.FlashcardCloud.storageKey(key);
      try {
        if(data[field]==null) {localStorage.removeItem(scoped);if(typeof StoneStorage!=='undefined')StoneStorage.removeItem(scoped);}
        else {const raw=JSON.stringify(data[field]);localStorage.setItem(scoped,raw);if(typeof StoneStorage!=='undefined')StoneStorage.setItem(scoped,raw);}
      }catch{}
    }
    state.learnedWords=new Set(data.learned||[]);
    state.studySequences=data.sequence&&typeof data.sequence==='object'&&!Array.isArray(data.sequence)?data.sequence:{};
  }
  async function ensureCloudProgress() {
    if(cloudLoadPromise)return cloudLoadPromise;
    cloudLoadPromise=(async()=>{
      let data=await window.FlashcardCloud.load();
      if(!data) data=window.FlashcardCloud.migrateLegacy({learned:STORAGE_KEY_LEARNED,sequence:STORAGE_KEY_SEQUENCE,stats:STORAGE_KEY_STATS,session:STORAGE_KEY_SESSION});
      hydrateCloudProgress(data);cloudLoaded=true;
      if(data)window.FlashcardCloud.save(data);
    })();
    try {await cloudLoadPromise;}finally{cloudLoadPromise=null;}
  }
  async function syncCloudProgress() {
    if(!window.FlashcardCloud.getAuth() || window.FlashcardCloud.needsLogin() || window.StoneAuthExpired) {
      close();
      if(typeof openAuthModal==='function')openAuthModal(true);
      return;
    }
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
    openWordEtymology,
    handleFlashcardKeydown,
    retryEnglishDefinition,
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
    speakCurrent,
    setStudyGroup,
    getStudyGroups,
    getCurrentStudyGroup,
    updateMainGroupSelectUI
  };
})();

// Account progress is loaded before resuming a card, including on a new device.
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>window.FlashcardEngine.resumeCloudSession());
else void window.FlashcardEngine.resumeCloudSession();
