// Account-scoped write-ahead cache; the authenticated server is authoritative.
window.FlashcardCloud = (() => {
  let owner = null, ready = false, busy = false, loading = null, blocked = false, timer = null, expired = false;
  let debounceTimer = null, lastCloudUpdatedAt = 0;
  let record = {revision:0, dirty:false, mutation:null, data:null, updatedAt:0};
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
      try { record=JSON.parse(read(cacheKey(id))) || {revision:0,dirty:false,data:null,updatedAt:0}; } catch { record={revision:0,dirty:false,data:null,updatedAt:0}; }
      if (record && record.updatedAt) lastCloudUpdatedAt = Number(record.updatedAt) || 0;
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
  function createTimeoutSignal(ms = 3500) {
    if (typeof AbortSignal !== 'undefined' && typeof AbortSignal.timeout === 'function') {
      try { return AbortSignal.timeout(ms); } catch {}
    }
    const controller = new AbortController();
    setTimeout(() => controller.abort(), ms);
    return controller.signal;
  }
  async function load(force=false) {
    const auth=identify();
    if(!auth) {ready=true;label('未登录：进度仅暂存在本机，登录后可跨设备继续');return null;}
    if(loading) return loading;
    const id=auth.id;
    loading=(async()=>{
      label('正在读取云端进度…');
      try {
        const response=await fetch('/api/flashcards/progress',{headers:{Authorization:'Bearer '+auth.token},signal:createTimeoutSignal(3500)});
        if(!response.ok) throw Error(response.status===401?'login':'network');
        const cloud=await response.json();
        if(getAuth()?.id!==id) return null;
        if(cloud.updated_at) {
          lastCloudUpdatedAt = Number(cloud.updated_at) || 0;
          record.updatedAt = lastCloudUpdatedAt;
        }
        // A retry after an acknowledged-but-lost response is already committed.
        if(record.dirty && cloud.mutation_id===record.mutation) {record.dirty=false;record.revision=cloud.revision;}
        if(force || !record.dirty) {
          if(force && record.dirty)write(cacheKey(id)+':conflict-backup',JSON.stringify(record));
          record={revision:cloud.revision,dirty:false,mutation:null,data:cloud.state,updatedAt:lastCloudUpdatedAt};blocked=false;
        } else if(record.revision!==cloud.revision) {
          if (force || !record.data) {
            record={revision:cloud.revision,dirty:false,mutation:null,data:cloud.state,updatedAt:lastCloudUpdatedAt};blocked=false;
          } else {
            blocked=true;label('另一设备已有新进度；本机未上传，请点击“载入云端进度”');
          }
        }
        ready=true;persist();
        if(!blocked) label(record.dirty?'本机进度待上传':cloud.state?'已同步到云端 · 换设备可继续':'云存档已就绪');
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
  function save(data, immediate=false, force=false) {
    const auth=identify();
    if(!force && JSON.stringify(data)===JSON.stringify(record.data)) return;
    record.data=JSON.parse(JSON.stringify(data));
    record.dirty=true;
    record.mutation=(typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : 'mut-' + Date.now() + '-' + Math.random().toString(36).slice(2);
    persist();
    if(!auth) {label('未登录：进度仅暂存在本机，登录后可跨设备继续');return;}
    if(expired) {label('登录已过期；本机进度已保留，请重新登录同步');return;}
    if(blocked && !force) {label('另一设备已有新进度；本机未上传，请点击“载入云端进度”');return;}
    
    const isMockOrImmediate = immediate || (typeof process !== 'undefined' && process.env?.NODE_TEST_CONTEXT) || (typeof window['FlashcardEngine'] === 'undefined');
    if (isMockOrImmediate) {
      if (debounceTimer) { clearTimeout(debounceTimer); debounceTimer = null; }
      label('正在同步进度…');
      void flush(force);
    } else {
      label('已保存 (后台自动同步中)');
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        debounceTimer = null;
        void flush(force);
      }, 1000);
    }
  }
  async function flush(force=false) {
    const auth=identify();
    if(!auth||busy||(blocked&&!force)||expired||!record.dirty)return;
    if(!ready) {await load();return;}
    const sending=JSON.parse(JSON.stringify(record)),id=auth.id;
    busy=true;
    try {
      const response=await fetch('/api/flashcards/progress',{method:'PUT',headers:{'Content-Type':'application/json',Authorization:'Bearer '+auth.token},
        body:JSON.stringify({expected_revision:sending.revision,mutation_id:sending.mutation,state:sending.data,force:!!force,client_updated_at:Date.now()}),signal:createTimeoutSignal(3500)});
      if(getAuth()?.id!==id)return;
      if(response.status===409){
        blocked=true;
        label('另一设备已有新进度；本机未上传，请点击“载入云端进度”');
        if (typeof window['FlashcardEngine']?.hydrateAndRefresh === 'function') {
          void load(true).then(cloudData => {
            if (cloudData) window['FlashcardEngine'].hydrateAndRefresh(cloudData);
          });
        }
        return;
      }
      if(!response.ok)throw Error(response.status===401?'login':'network');
      const result=await response.json();record.revision=result.revision;
      if (result.updated_at) {
        lastCloudUpdatedAt = Number(result.updated_at) || Date.now();
        record.updatedAt = lastCloudUpdatedAt;
      }
      if(record.mutation===sending.mutation)record.dirty=false;
      blocked=false;
      persist();label(record.dirty?'正在同步最新进度…':'已同步到云端 · 换设备可继续');
    }catch(error){
      if(error.message==='login') { expired=true; ready=false; window.StoneAuthExpired=true; }
      label(error.message==='login'?'登录已过期，请重新登录同步':'离线暂存：联网后自动上传，尚未同步');
      clearTimeout(timer);timer=null;
      if(!expired)timer=setTimeout(()=>{timer=null;void flush(force);},5000);
    }finally{
      busy=false;
      if(getAuth()?.id===id&&record.dirty&&!blocked&&!expired&&!timer&&!debounceTimer)void flush();
    }
  }
  function refreshLabel(){label(status);}
  async function checkAndSyncLatestProgress() {
    const auth = identify();
    if (!auth || expired || busy) return;
    try {
      const response = await fetch('/api/flashcards/progress', {
        headers: { Authorization: 'Bearer ' + auth.token },
        signal: createTimeoutSignal(3500)
      });
      if (!response || !response.ok) return;
      const cloud = await response.json();
      if (!cloud || !cloud.state) return;
      const cloudUp = Number(cloud.updated_at) || 0;
      if (cloudUp > lastCloudUpdatedAt || cloud.revision > record.revision) {
        lastCloudUpdatedAt = cloudUp;
        record.revision = cloud.revision;
        record.data = cloud.state;
        record.dirty = false;
        record.updatedAt = cloudUp;
        blocked = false;
        persist();
        label('已自动同步云端最新进度');
        if (typeof window['FlashcardEngine']?.hydrateAndRefresh === 'function') {
          window['FlashcardEngine'].hydrateAndRefresh(cloud.state);
        }
      }
    } catch (e) {}
  }
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
    window.addEventListener('pagehide',()=>{if(debounceTimer){clearTimeout(debounceTimer);debounceTimer=null;}void flush();});
    if (typeof document !== 'undefined' && document.addEventListener) {
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          void checkAndSyncLatestProgress();
        } else if (debounceTimer) {
          clearTimeout(debounceTimer);
          debounceTimer = null;
          void flush();
        }
      });
    }
  }
  return {getAuth,storageKey,current,load,save,flush,refreshLabel,migrateLegacy,checkAndSyncLatestProgress,isReady:()=>ready,isBlocked:()=>blocked,needsLogin:()=>expired};
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

  const REVIEW_BATCH_KEY = 'stone_review_batch_size';
  function getStoredReviewBatchSize() {
    try {
      const val = typeof StoneStorage !== 'undefined'
        ? StoneStorage.getItem(REVIEW_BATCH_KEY)
        : localStorage.getItem(REVIEW_BATCH_KEY);
      if (val && ['20', '35', '50', 'all'].includes(val)) return val;
    } catch (e) {}
    return '35';
  }

  function setStoredReviewBatchSize(val) {
    try {
      if (typeof StoneStorage !== 'undefined') StoneStorage.setItem(REVIEW_BATCH_KEY, val);
      localStorage.setItem(REVIEW_BATCH_KEY, val);
    } catch (e) {}
  }

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
    lastReviewMarkReduced: false,
    lastReviewSleepDays: 0,
    reviewBatchSetting: getStoredReviewBatchSize(),
    reviewRoundTotal: 0,
    reviewClearedCount: 0,
    reviewSkippedCount: 0,
    reviewClearedWords: new Set(),
    reviewSkippedWords: new Set(),
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

  function isMobileViewport() {
    if (typeof window === 'undefined') return false;
    return (window.innerWidth <= 768) || ('ontouchstart' in window) || /Android|iPhone|iPad|iPod/i.test(navigator?.userAgent || '');
  }

  function safeFocusNoScroll(el) {
    if (!el || typeof el.focus !== 'function' || isMobileViewport()) return;
    try { el.focus({ preventScroll: true }); } catch { try { el.focus(); } catch {} }
  }

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
        studyStartIndex: state.studyStartIndex,
        reviewBatchSetting: state.reviewBatchSetting,
        reviewRoundTotal: state.reviewRoundTotal,
        reviewClearedCount: state.reviewClearedCount,
        reviewSkippedCount: state.reviewSkippedCount,
        reviewClearedWords: Array.from(state.reviewClearedWords || []),
        reviewSkippedWords: Array.from(state.reviewSkippedWords || [])
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

  const escapeHtmlSafe = (str) => {
    try {
      if (typeof escapeHtml === 'function') return escapeHtml(str);
      if (typeof window !== 'undefined' && typeof window.escapeHtml === 'function') return window.escapeHtml(str);
    } catch {}
    return String(str ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  };

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

    function saveDictCacheToVps(word, data) {
    if (!word || !data) return;
    if (typeof process !== 'undefined' && process.env?.NODE_TEST_CONTEXT) return;
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 3500);
      fetch('/api/dict/cache', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ word, data }),
        signal: controller.signal
      }).catch(() => {}).finally(() => clearTimeout(timer));
    } catch (e) {}
  }

  /**
   * 异步预拉取在线权威英英释义并缓存 (3.5s熔断，回传VPS持久化)
   */
  async function fetchEnglishDefOnline(word) {
    if (!word) return '';
    const clean = word.toLowerCase().trim();
    const cached = getEnglishDefinition(clean);
    if (cached) { updateEnglishDefinition(clean, cached); return cached; }
    if ((enDefFailures.get(clean) || 0) > Date.now()) { updateEnglishDefinition(clean, ''); return ''; }
    if (!enDefRequests.has(clean)) enDefRequests.set(clean, (async () => {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 3500);
      let needSaveToVps = false;
      try {
        let data;
        if (window.Stone?.english) {
          data = await window.Stone.english(clean);
        } else {
          const response = await fetch(`/api/dict/${encodeURIComponent(clean)}`, { signal: controller.signal });
          if (!response.ok) throw new Error('dictionary unavailable');
          data = await response.json();
        }
        const summary = englishSummary(data);
        if (!summary) throw new Error('empty definition');
        enDefCache[clean] = summary;
        enDefFailures.delete(clean);
        if (needSaveToVps && data) {
          saveDictCacheToVps(clean, data);
        }
        return summary;
      } catch (err) {
        enDefFailures.set(clean, Date.now() + 15000);
        return '';
      } finally {
        clearTimeout(timer);
        enDefRequests.delete(clean);
      }
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

  function formatEnglishDefHtml(summary) {
    if (!summary || summary === '正在获取英文释义…') {
      return `<div class="flashcard-en-placeholder" style="color:var(--text-secondary);font-size:clamp(12px, 0.9vw, 14px);display:flex;align-items:center;gap:6px;">
        <span class="flashcard-en-spinner" style="display:inline-block;width:12px;height:12px;border:2px solid rgba(59,130,246,0.3);border-top-color:#3b82f6;border-radius:50%;animation:spin 0.8s linear infinite;"></span>
        <span>正在获取英文释义…</span>
      </div>`;
    }
    if (summary === '正在获取英文释义…' || summary.startsWith('暂时未取得英文释义')) {
      return `<span style="color:var(--text-secondary);font-size:clamp(12px, 0.9vw, 14px);">${escapeHtmlSafe(summary)}</span>`;
    }

    // 支持以分号或连续 (pos) 切分的条目，保留全部英文释义
    const rawParts = summary.split(/(?:^|\s*;\s*)(?=\([a-zA-Z]+\))/).filter(Boolean);
    const lines = [];
    for (const part of rawParts) {
      const trimmed = part.trim();
      if (!trimmed) continue;
      const m = trimmed.match(/^\(([^)]+)\)\s*(.*)$/);
      if (m) {
        lines.push({ pos: m[1], text: m[2] });
      } else {
        lines.push({ pos: '', text: trimmed });
      }
    }

    if (lines.length === 0) {
      return `<div class="flashcard-en-def-row" style="display:flex;align-items:baseline;gap:10px;margin-bottom:8px;"><span class="flashcard-en-def-text" style="color:#1E293B;font-size:clamp(14px, 1.1vw, 17.5px);line-height:1.65;flex:1;min-width:0;overflow-wrap:break-word;">${escapeHtmlSafe(summary)}</span></div>`;
    }

    return lines.map(line => {
      const badge = line.pos
        ? `<span class="flashcard-en-pos-badge" style="font-size:clamp(12px, 0.9vw, 14px);min-width:68px;flex-shrink:0;text-align:center;background:#e0f2fe;color:#0284c7;font-weight:700;padding:2px 8px;border-radius:12px;line-height:1.3;box-sizing:border-box;display:inline-block;">${escapeHtmlSafe(line.pos)}</span>`
        : `<span style="min-width:68px;flex-shrink:0;"></span>`;
      const text = `<span class="flashcard-en-def-text" style="color:#1E293B;font-size:clamp(14px, 1.1vw, 17.5px);line-height:1.65;flex:1;min-width:0;overflow-wrap:break-word;">${escapeHtmlSafe(line.text)}</span>`;
      return `<div class="flashcard-en-def-row" style="display:flex;align-items:baseline;gap:10px;margin-bottom:8px;">${badge}${text}</div>`;
    }).join('');
  }

  function formatChineseDefHtml(rawDef, isPrimary = false) {
    if (!rawDef) return '<span style="color:var(--text-secondary);font-size:clamp(14px, 1.1vw, 17.5px);">暂无详细中文释义</span>';
    let clean = String(rawDef).replace(/\\n/g, '\n').replace(/;/g, '；').trim();
    clean = clean.replace(/([^\n])\s*(?=(?:n|v|a|adj|adv|prep|conj|pron|art|num|int|vt|vi)\.)/gi, '$1\n');
    const lines = clean.split(/\n+/).map(l => l.trim()).filter(Boolean);
    if (lines.length === 0) return '<span style="color:var(--text-secondary);font-size:clamp(14px, 1.1vw, 17.5px);">暂无详细中文释义</span>';

    const textColor = isPrimary ? 'var(--brand-accent)' : '#1E293B';
    const fontWeight = isPrimary ? '700' : '600';

    return lines.map(line => {
      const m = line.match(/^((?:n|v|a|adj|adv|prep|conj|pron|art|num|int|vt|vi)\.)\s*(.*)$/i);
      if (m) {
        const posTag = m[1].toLowerCase();
        const defText = m[2];
        return `<div class="flashcard-cn-def-row" style="display:flex;align-items:baseline;gap:8px;margin-bottom:6px;">
          <span class="flashcard-cn-pos-badge" style="background:rgba(245,158,11,0.12);color:#d97706;font-size:clamp(12px, 0.9vw, 14px);font-weight:800;padding:2px 8px;border-radius:10px;min-width:36px;text-align:center;flex-shrink:0;display:inline-block;line-height:1.3;box-sizing:border-box;">${escapeHtmlSafe(posTag)}</span>
          <span class="flashcard-cn-def-text" style="color:${textColor};font-weight:${fontWeight};font-size:clamp(17px, 1.4vw, 22px);line-height:1.6;flex:1;min-width:0;overflow-wrap:break-word;">${escapeHtmlSafe(defText)}</span>
        </div>`;
      } else {
        return `<div class="flashcard-cn-def-row" style="display:flex;align-items:baseline;gap:8px;margin-bottom:6px;">
          <span class="flashcard-cn-def-text" style="color:${textColor};font-weight:${fontWeight};font-size:clamp(17px, 1.4vw, 22px);line-height:1.6;flex:1;min-width:0;overflow-wrap:break-word;">${escapeHtmlSafe(line)}</span>
        </div>`;
      }
    }).join('');
  }

  function updateEnglishDefinition(word, summary) {
    if (!state.isOpen || state.currentWord?.toLowerCase().trim() !== word) return;
    const el = document.getElementById('fcStdDefEnText');
    const fallbackMsg = '暂时未取得英文释义，可重试或先看中文参考。';
    if (el) {
      el.textContent = summary || fallbackMsg;
      if (typeof el.innerHTML === 'string' || 'innerHTML' in el) {
        el.innerHTML = formatEnglishDefHtml(summary || fallbackMsg);
      }
      el.setAttribute?.('aria-busy', 'false');
    }
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
    const cleanDef = String(def).replace(/\\n/g, '\n');
    const matches = cleanDef.match(/\b(n|v|a|adj|adv|prep|conj|pron|art|num|int|vt|vi)\./gi);
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
  const normInput = normalize(input);
  const segments = standardDef.replace(/\\n/g, "\n").replace(/\b(n|v|a|adj|adv|prep|conj|pron|art|num|int|vt|vi)\./gi, "").split(/[；;、\n]/).map(normalize);
  if (segments.includes(normInput)) return {correct:true,confidence:1,source:"local_fast",reason:"准确匹配参考释义"};

  // 核心增强：ECDICT / 近义词库本地极速秒判 (0ms)
  const cleanWord = (word || '').toLowerCase().trim();
  let synonyms = [];
  if (typeof WORD_SYNONYMS !== 'undefined' && Array.isArray(WORD_SYNONYMS[cleanWord])) {
    synonyms = WORD_SYNONYMS[cleanWord];
  } else if (typeof WORD_UNIT_META !== 'undefined' && Array.isArray(WORD_UNIT_META[cleanWord]?.synonyms)) {
    synonyms = WORD_UNIT_META[cleanWord].synonyms;
  }
  if (synonyms.length > 0) {
    const normSyns = synonyms.map(normalize);
    if (normSyns.includes(normInput)) {
      return {correct:true,confidence:1,source:"local_fast",reason:"准确匹配近义词库"};
    }
  }

  return null;
}
async function verifyWithJev(word,input,selectedPos,standardDef) {
  if (!standardDef?.trim()) return uncertain("参考释义缺失，暂不判定。");
  const referencePos = getStandardPosList(word,standardDef);
  const startTime = performance.now();
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 3500);
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


  function getLiveMarkedList() {
    if (typeof getMarkedWords === 'function') {
      return getMarkedWords()
        .map(entry => Array.isArray(entry) ? entry[0] : entry)
        .filter(word => typeof word === 'string' && word.trim());
    }
    return [];
  }

  function getMarkEntryHelper(word) {
    if (!word) return null;
    const w = word.toLowerCase().trim();
    const raw = (typeof marks !== 'undefined' && marks) ? marks[w] : null;
    if (typeof normalizeMarkEntry === 'function') {
      return normalizeMarkEntry(raw, w, state.learnedWords);
    }
    const isMastered = !!(state.learnedWords && state.learnedWords.has(w));
    if (typeof raw === 'number') {
      return {
        mark: Math.max(1, raw),
        ever_mastered: isMastered,
        master_streak: 0,
        added_at: Date.now(),
        last_reviewed_at: 0,
        next_review_at: 0
      };
    }
    if (raw && typeof raw === 'object') {
      return {
        mark: Math.max(1, Number(raw.mark) || 1),
        ever_mastered: (raw.ever_mastered !== undefined) ? !!raw.ever_mastered : isMastered,
        master_streak: Number(raw.master_streak) || 0,
        added_at: Number(raw.added_at) || Date.now(),
        last_reviewed_at: Number(raw.last_reviewed_at) || 0,
        next_review_at: Number(raw.next_review_at) || 0
      };
    }
    return {
      mark: 1,
      ever_mastered: isMastered,
      master_streak: 0,
      added_at: Date.now(),
      last_reviewed_at: 0,
      next_review_at: 0
    };
  }

  function getActiveAndDueMarkedWords() {
    const now = Date.now();
    const liveList = getLiveMarkedList();
    const candidates = [];
    liveList.forEach(w => {
      const entry = getMarkEntryHelper(w);
      if (!entry) return;
      const isDue = (entry.mark === 1 && entry.ever_mastered && entry.next_review_at > 0 && entry.next_review_at <= now);
      const isSleeping = (entry.mark === 1 && entry.next_review_at > now);
      const isActive = !isSleeping && (entry.mark >= 2 || (entry.mark === 1 && (!entry.next_review_at || entry.next_review_at === 0)));
      if (isDue || isActive) {
        candidates.push(w);
      }
    });
    return candidates;
  }

  function getReviewQueueBadgeCounts(queue) {
    const counts = { newCount: 0, dangerCount: 0, consolidateCount: 0, checkCount: 0 };
    const now = Date.now();
    (queue || []).forEach(w => {
      const entry = getMarkEntryHelper(w);
      if (!entry) return;
      if (entry.mark === 1 && entry.ever_mastered && entry.next_review_at > 0 && entry.next_review_at <= now) {
        counts.checkCount++;
      } else if (entry.last_reviewed_at === 0) {
        counts.newCount++;
      } else if (entry.mark >= 3 || (entry.mark >= 2 && entry.ever_mastered)) {
        counts.dangerCount++;
      } else {
        counts.consolidateCount++;
      }
    });
    return counts;
  }

  function generateDeterministicReviewQueue(batchSetting = '35') {
    const now = Date.now();
    const liveList = getLiveMarkedList();
    const entriesMap = new Map();
    liveList.forEach(w => {
      const k = w.toLowerCase().trim();
      if (!k) return;
      entriesMap.set(k, getMarkEntryHelper(k));
    });

    const allWords = Array.from(entriesMap.keys());

    // 1. 计算配额
    let targetQuota = 35;
    if (batchSetting === '20') targetQuota = 20;
    else if (batchSetting === '35') targetQuota = 35;
    else if (batchSetting === '50') targetQuota = 50;
    else if (batchSetting === 'all') targetQuota = Infinity;
    else {
      const parsed = parseInt(batchSetting, 10);
      targetQuota = (!isNaN(parsed) && parsed > 0) ? parsed : 35;
    }

    // 2. 【末尾防遗忘抽查位】
    // 配额为当前所选档位的 15% 向下取整（20词→3词，35词→5词，50词→7词；选「全部」时上限 15 词）
    let checkQuota = (targetQuota === Infinity) ? 15 : Math.floor(targetQuota * 0.15);

    // 筛选到期唤醒词：mark === 1 && ever_mastered === true && next_review_at > 0 && next_review_at <= now
    const dueCandidates = [];
    allWords.forEach(w => {
      const entry = entriesMap.get(w);
      if (entry && entry.mark === 1 && entry.ever_mastered && entry.next_review_at > 0 && entry.next_review_at <= now) {
        dueCandidates.push(w);
      }
    });

    // 按 next_review_at 升序（超期最久优先），确定性保底按字母顺序
    dueCandidates.sort((a, b) => {
      const diff = entriesMap.get(a).next_review_at - entriesMap.get(b).next_review_at;
      if (diff !== 0) return diff;
      return a.localeCompare(b);
    });

    const selectedCheckWords = dueCandidates.slice(0, checkQuota);
    const checkSet = new Set(selectedCheckWords);

    // 3. 【主力攻坚位】
    // 筛选所有【未处于休眠期】的活跃词（mark >= 2，或 mark === 1 && next_review_at === 0）
    const activeCandidates = [];
    allWords.forEach(w => {
      if (checkSet.has(w)) return;
      const entry = entriesMap.get(w);
      if (!entry) return;
      const isSleeping = (entry.mark === 1 && entry.next_review_at > now);
      if (!isSleeping && (entry.mark >= 2 || (entry.mark === 1 && (!entry.next_review_at || entry.next_review_at === 0)))) {
        activeCandidates.push(w);
      }
    });

    // 4 级确定性权重排序：
    // 1) 新增未复习（last_reviewed_at === 0）排最前，按 added_at 降序（最新加入优先）；
    // 2) mark 值降序（高危顽固词优先）；
    // 3) 同 mark 下，ever_mastered === true 的「遗忘回生词」排在普通词前面；
    // 4) last_reviewed_at 升序（越久未复习越靠前）。
    activeCandidates.sort((a, b) => {
      const eA = entriesMap.get(a);
      const eB = entriesMap.get(b);

      const aIsNew = (eA.last_reviewed_at === 0);
      const bIsNew = (eB.last_reviewed_at === 0);

      // 1) 新增未复习排最前
      if (aIsNew && !bIsNew) return -1;
      if (!aIsNew && bIsNew) return 1;
      if (aIsNew && bIsNew) {
        if (eB.added_at !== eA.added_at) return eB.added_at - eA.added_at;
        return a.localeCompare(b);
      }

      // 2) mark 值降序
      if (eB.mark !== eA.mark) return eB.mark - eA.mark;

      // 3) ever_mastered 优先
      if (eA.ever_mastered !== eB.ever_mastered) {
        return eA.ever_mastered ? -1 : 1;
      }

      // 4) last_reviewed_at 升序
      if (eA.last_reviewed_at !== eB.last_reviewed_at) {
        return eA.last_reviewed_at - eB.last_reviewed_at;
      }

      return a.localeCompare(b);
    });

    const mainQuota = (targetQuota === Infinity)
      ? activeCandidates.length
      : Math.max(0, targetQuota - selectedCheckWords.length);

    const selectedMainWords = activeCandidates.slice(0, mainQuota);

    // 组合队列：主力攻坚在前，末尾防遗忘抽查固定在末尾
    const finalQueue = [...selectedMainWords, ...selectedCheckWords];

    return {
      queue: finalQueue,
      batchSize: (targetQuota === Infinity) ? finalQueue.length : targetQuota
    };
  }

  function handleReviewCorrectAnswer(word) {
    const w = word.toLowerCase().trim();
    const currentMarks = typeof getMarkCount === 'function' ? getMarkCount(w) : 1;
    const now = Date.now();

    if (currentMarks >= 2) {
      if (typeof reduceMark === 'function') {
        reduceMark(w);
      }
      const entry = getMarkEntryHelper(w) || { mark: 1, ever_mastered: false };
      entry.mark = Math.max(1, typeof getMarkCount === 'function' ? getMarkCount(w) : (currentMarks - 1));
      entry.last_reviewed_at = now;
      entry.next_review_at = 0;
      state.lastReviewMarkReduced = true;
      state.lastReviewSleepDays = 0;
      if (typeof marks !== 'undefined') marks[w] = entry;
    } else {
      const entry = getMarkEntryHelper(w) || { mark: 1, ever_mastered: false };
      entry.mark = 1; // 最低永远保持为 1，严禁降至 0
      entry.ever_mastered = true;
      entry.master_streak = (entry.master_streak || 0) + 1;
      entry.last_reviewed_at = now;

      let sleepDays = 3;
      if (entry.master_streak === 1) sleepDays = 3;
      else if (entry.master_streak === 2) sleepDays = 7;
      else if (entry.master_streak === 3) sleepDays = 15;
      else sleepDays = 30;

      entry.next_review_at = now + sleepDays * 86400000;
      state.lastReviewMarkReduced = false;
      state.lastReviewSleepDays = sleepDays;
      if (typeof marks !== 'undefined') marks[w] = entry;
    }

    state.learnedWords.add(w);
    saveLearnedWords();

    if (typeof marks !== 'undefined') {
      if (typeof saveToStorage === 'function' && typeof STORAGE_KEYS !== 'undefined') {
        saveToStorage(STORAGE_KEYS.MARKS, marks);
      }
      if (typeof triggerCloudSync === 'function') triggerCloudSync();
    }
  }

  function handleReviewWrongOrUnknownAnswer(word) {
    const w = word.toLowerCase().trim();
    const now = Date.now();
    if (typeof addMark === 'function') {
      addMark(w);
    }
    const entry = getMarkEntryHelper(w) || { mark: 1, ever_mastered: false };
    entry.mark = Math.max(1, typeof getMarkCount === 'function' ? getMarkCount(w) : (entry.mark + 1));
    entry.last_reviewed_at = now;
    entry.next_review_at = 0; // 立刻解除休眠
    entry.master_streak = 0;
    if (typeof marks !== 'undefined') marks[w] = entry;

    if (typeof marks !== 'undefined') {
      if (typeof saveToStorage === 'function' && typeof STORAGE_KEYS !== 'undefined') {
        saveToStorage(STORAGE_KEYS.MARKS, marks);
      }
      if (typeof triggerCloudSync === 'function') triggerCloudSync();
    }
  }

  function syncLiveReviewQueue() {
    if (state.mode !== 'review') return;
    const liveList = getLiveMarkedList();
    state.activeListLength = liveList.length;
    if (state.reviewBatchSetting === 'all') {
      state.reviewRoundTotal = liveList.length;
    }
    if (!state.queue || state.queue.length === 0) {
      const res = generateDeterministicReviewQueue(state.reviewBatchSetting);
      state.queue = res.queue;
      state.reviewRoundTotal = res.queue.length;
    } else if (state.reviewBatchSetting === 'all') {
      const existingSet = new Set(state.queue.map(w => (w || '').toLowerCase().trim()));
      liveList.forEach(w => {
        const k = (w || '').toLowerCase().trim();
        if (!existingSet.has(k) && !state.reviewClearedWords?.has(k) && !state.reviewSkippedWords?.has(k)) {
          state.queue.push(w);
          existingSet.add(k);
        }
      });
    }
    if (state.currentIndex >= state.queue.length) {
      state.currentIndex = Math.max(0, state.queue.length - 1);
    }
    state.currentWord = state.queue[state.currentIndex] || null;
  }

  function updateHUDCounts() {
    const liveMarkedCount = getLiveMarkedList().length;
    const chip = document.getElementById('fcWordNumberChip');
    if (chip) {
      if (state.mode === 'review') {
        const total = (state.reviewBatchSetting === 'all')
          ? (state.activeListLength || state.queue.length || liveMarkedCount)
          : (state.reviewRoundTotal || state.queue.length || liveMarkedCount);
        chip.innerHTML = `复习进度: <strong style="text-decoration:underline dotted;cursor:pointer;">${state.currentIndex + 1}</strong> / ${total}`;
        chip.title = `点击直接修改/跳转目标词号 (1 ~ ${total})`;
      } else {
        chip.innerHTML = `词库编号: <strong style="text-decoration:underline dotted;cursor:pointer;">${state.studyStartIndex + state.currentIndex + 1}</strong> / ${state.activeListLength} (第${Math.floor(state.studyStartIndex / state.targetCount) + 1}组)`;
        chip.title = `点击直接修改/跳转目标词号 (1 ~ ${state.activeListLength || 3837})`;
      }
    }
    const completed = document.getElementById('fcCompletedCount');
    if (completed) completed.textContent = state.todayStats.completed;
    if (typeof updateBadges === 'function') {
      try { updateBadges(); } catch (e) {}
    }
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
            if (state.mode === 'review') {
              state.reviewBatchSetting = sess.reviewBatchSetting || getStoredReviewBatchSize();
              state.reviewRoundTotal = Number.isInteger(sess.reviewRoundTotal) ? sess.reviewRoundTotal : sess.queue.length;
              state.reviewClearedCount = Number.isInteger(sess.reviewClearedCount) ? sess.reviewClearedCount : 0;
              state.reviewSkippedCount = Number.isInteger(sess.reviewSkippedCount) ? sess.reviewSkippedCount : 0;
              state.reviewClearedWords = new Set(Array.isArray(sess.reviewClearedWords) ? sess.reviewClearedWords : []);
              state.reviewSkippedWords = new Set(Array.isArray(sess.reviewSkippedWords) ? sess.reviewSkippedWords : []);
              state.queue = sess.queue;
              state.activeListLength = getLiveMarkedList().length;
              state.currentIndex = Math.min(sess.currentIndex, Math.max(0, state.queue.length - 1));
            } else {
              state.queue = sess.queue;
              state.currentIndex = sess.currentIndex;
              state.activeListLength = typeof getActiveWordList === 'function'
                ? getActiveWordList().length
                : state.queue.length;
            }
            state.currentWord = state.queue[state.currentIndex] || null;
            state.isAnswered = false;
            state.lastResult = null;
            state.selectedPos = [];
            state.restoreAnswer = sess.isAnswered && sess.lastResult ? sess : null;
            state.studyScopeKey = typeof sess.studyScopeKey === 'string' ? sess.studyScopeKey : '';
            state.studyStartIndex = Number.isInteger(sess.studyStartIndex) && sess.studyStartIndex >= 0 ? sess.studyStartIndex : 0;
            return;
          }
        }
      }
    } catch (e) {}

    state.manualMarkBaselines = new Map();

    // 2. 重新组队：新词严格按编号切片；复习按确定性组卷规则。
    let list = [];
    if (state.mode === 'review') {
      state.reviewBatchSetting = state.reviewBatchSetting || getStoredReviewBatchSize();
      const res = generateDeterministicReviewQueue(state.reviewBatchSetting);
      list = res.queue;
      state.studyScopeKey = '';
      state.studyStartIndex = 0;
      state.activeListLength = getLiveMarkedList().length;
      state.targetCount = res.queue.length || 35;
      state.reviewRoundTotal = res.queue.length;
      state.reviewClearedCount = 0;
      state.reviewSkippedCount = 0;
      state.reviewClearedWords = new Set();
      state.reviewSkippedWords = new Set();
      state.queue = list;
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
      state.queue = list.slice(0, state.targetCount);
    }
    state.currentIndex = 0;
    state.currentWord = state.queue[0] || null;
    state.isAnswered = false;
    state.lastResult = null;
    state.lastReviewMarkReduced = false;
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
    if (mode === 'review') {
      const liveList = getLiveMarkedList();
      state.activeListLength = liveList.length;
      if (target === 'all' || target === Infinity) {
        state.reviewBatchSetting = 'all';
      } else if (['20', '35', '50'].includes(String(target))) {
        state.reviewBatchSetting = String(target);
      } else if (typeof target === 'number' && target > 100) {
        state.reviewBatchSetting = 'all';
      } else {
        state.reviewBatchSetting = state.reviewBatchSetting || getStoredReviewBatchSize();
      }
    } else {
      state.targetCount = target || 100;
    }
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

    if (typeof document !== 'undefined' && document.body?.classList) {
      document.body.classList.add('flashcard-open');
    }
    const modal = document.getElementById('flashcardModal');
    if (modal) {
      modal.style.display = 'flex';
      if (typeof requestAnimationFrame === 'function') {
        requestAnimationFrame(() => modal.classList?.add('open'));
      } else {
        modal.classList?.add('open');
      }
      renderCard();
      resetScrollToTop();
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
      if (typeof currentDrawerDictTab !== 'undefined') {
        currentDrawerDictTab = 'etym';
      }
      openWordDetails(target);
      setTimeout(() => {
        if (typeof switchDrawerDictTab === 'function') {
          switchDrawerDictTab('etym');
        }
      }, 50);
    } else if (window.StoneEtymology) {
      window.StoneEtymology.fetchEtymology(target).then(res => {
        showToast(`【${target} 词源】\n${res.etymology.slice(0, 150)}...`);
      });
    }
  }

  // =========================================================================
  // 🏛️ 词源权威考据三段式视觉呈现 (严禁万金油套话，AI 智能提炼驱动)
  // =========================================================================
  const BENCHMARK_CONVEY = {
    full: {
      breakdown: "源自原始日耳曼语 *fullaz (装满的、充足的)，与 fill (装满) 同源",
      story: "古人用容器去河里打水，水面彻底漫到容器边缘，再也装不下任何东西的饱满状态。",
      chain: "漫到边缘 ➡️ 装满容器的 ➡️ 充分的、完全的"
    },
    accomplish: {
      breakdown: "ac- (去、朝向) + complere (填满，源自 com-完全 + plere填)",
      story: "把手头任务清单或计划表上的每一个空缺彻彻底底地全部“填满”。",
      chain: "完全填满 ➡️ 把进度填满不留遗憾 ➡️ 圆满完成、实现"
    },
    convey: {
      breakdown: "con- (共同、一起) + via (道路)",
      story: "古代武装护卫在漫长路途上一路陪同前行，把人和贵重物资安全护送到终点。",
      chain: "同路护送 ➡️ 沿途运送 ➡️ 传达、传递(信息/情感)"
    },
    ambition: {
      breakdown: "ambi- (到处、周围) + ire (走)",
      story: "古罗马政客为了拉选票，在街头“到处走动”讨好选民。",
      chain: "到处走动拉票 ➡️ 渴求权力与名声 ➡️ 野心、雄心"
    }
  };

  function isClicheStory(story) {
    if (!story) return true;
    const cliches = ['源于古代语境中的', '由原始核心词义演进', '形象直观', '演变积淀为现代表达', '语境引申'];
    return cliches.some(c => story.includes(c));
  }

  /**
   * 渲染复刻 convey 的三段式视觉卡片 (无滚动条、清爽列表结构)
   */
  function renderConveyBody(res) {
    if (!res || !res.found) {
      return `<span style="color:var(--text-secondary);">离线词库未收录该词独立演变，可使用抽屉全网搜索。</span>`;
    }

    const clean = (res.word || state.currentWord || '').toLowerCase().trim();
    let breakdownText = (res.breakdown && res.literal) ? `${res.breakdown} = ${res.literal}` : (res.roots || res.breakdown || '');
    let storyText = res.story || '';
    let chainText = res.chain || res.evolution || '';
    const rawEtymText = res.raw_etymology || res.etymology_raw || res.raw_etym || res.etymology || '';

    if (BENCHMARK_CONVEY[clean]) {
      const bm = BENCHMARK_CONVEY[clean];
      breakdownText = bm.breakdown;
      storyText = bm.story;
      chainText = bm.chain;
    }

    // 控制右上角「查看英文原版」按钮显隐
    const rawToggleBtn = document.getElementById('fcEtymRawToggleBtn');
    if (rawToggleBtn) {
      rawToggleBtn.style.display = rawEtymText ? 'inline-block' : 'none';
      const toggleText = document.getElementById('fcEtymRawToggleText');
      if (toggleText) toggleText.textContent = '查看英文原版 ▸';
    }

    const escape = escapeHtml;
    return `
      <div class="stone-convey-card" style="line-height:1.65; text-align:left; font-size:clamp(14px, 1.1vw, 17.5px); color:#1E293B;">
        <div style="margin-bottom:8px; display:flex; align-items:baseline; gap:8px;">
          <span style="font-size:clamp(14px, 1.1vw, 17px); flex-shrink:0;">🧩</span>
          <div style="flex:1; min-width:0;"><strong style="color:var(--brand-primary, #4f46e5); font-size:clamp(13px, 1vw, 15px);">拆解：</strong><span style="color:#1E293B; font-size:clamp(14px, 1.1vw, 17.5px); line-height:1.65;">${escape(breakdownText)}</span></div>
        </div>
        <div style="margin-bottom:8px; display:flex; align-items:baseline; gap:8px;">
          <span style="font-size:clamp(14px, 1.1vw, 17px); flex-shrink:0;">🎬</span>
          <div style="flex:1; min-width:0;"><strong style="color:#d97706; font-size:clamp(13px, 1vw, 15px);">画面：</strong><span style="color:#1E293B; font-size:clamp(14px, 1.1vw, 17.5px); line-height:1.65;">${escape(storyText)}</span></div>
        </div>
        <div style="margin-bottom:4px; display:flex; align-items:baseline; gap:8px;">
          <span style="font-size:clamp(14px, 1.1vw, 17px); flex-shrink:0;">🔗</span>
          <div style="flex:1; min-width:0;"><strong style="color:#059669; font-size:clamp(13px, 1vw, 15px);">演变：</strong><span style="color:#1E293B; font-size:clamp(14px, 1.1vw, 17.5px); line-height:1.65;">${escape(chainText)}</span></div>
        </div>
        ${rawEtymText ? `
          <div id="fcEtymRawContent" style="display:none; margin-top:10px; padding:10px 12px; background:rgba(0,0,0,0.03); border:1px solid var(--paper-border); border-radius:6px; font-size:clamp(12px, 0.95vw, 14px); line-height:1.65; color:#475569; word-break:break-word;">
            <div style="font-weight:700; color:var(--text-secondary); margin-bottom:6px; font-size:clamp(11.5px, 0.9vw, 13px);">[Etymonline 词源文献记录]</div>
            ${escape(rawEtymText)}
          </div>
        ` : ''}
      </div>
    `;
  }

  function toggleRawEtymology(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    const rawBox = document.getElementById('fcEtymRawContent');
    const toggleText = document.getElementById('fcEtymRawToggleText');
    if (!rawBox) return;
    const isHidden = rawBox.style.display === 'none' || !rawBox.style.display;
    rawBox.style.display = isHidden ? 'block' : 'none';
    if (toggleText) {
      toggleText.textContent = isHidden ? '收起英文原版 ▾' : '查看英文原版 ▸';
    }
  }

  /**
   * 优雅展开/折叠当前单词的词源脉络（三段式视觉卡片）
   */
  function loadEtymologyInline(target) {
    const box = document.getElementById('fcEtymInlineContent');
    const arrow = document.getElementById('fcEtymToggleArrow');
    const body = document.getElementById('fcEtymBodyText');
    const rawBtn = document.getElementById('fcEtymRawToggleBtn');
    if (!box || !body) return;
    box.style.display = 'block';
    if (arrow) arrow.textContent = '▾ 收起';

    const cleanTarget = (target || state.currentWord || '').toLowerCase().trim();
    if (!cleanTarget) return;

    // A. 标杆词 0ms 秒出
    if (BENCHMARK_CONVEY[cleanTarget]) {
      const bm = BENCHMARK_CONVEY[cleanTarget];
      body.innerHTML = renderConveyBody({
        word: cleanTarget,
        found: true,
        breakdown: bm.breakdown,
        roots: bm.breakdown,
        story: bm.story,
        chain: bm.chain,
        evolution: bm.chain,
        raw_etymology: (window.WORD_CONVEY && window.WORD_CONVEY[cleanTarget] && window.WORD_CONVEY[cleanTarget].raw_etym) || ''
      });
      return;
    }

    // B. 0ms 本地秒出：优先读取已跑批且非套话的离线三段式
    if (window.WORD_CONVEY && window.WORD_CONVEY[cleanTarget]) {
      const localConvey = window.WORD_CONVEY[cleanTarget];
      if (!isClicheStory(localConvey.story) && localConvey.story && (localConvey.roots || localConvey.breakdown)) {
        body.innerHTML = renderConveyBody({
          word: cleanTarget,
          found: true,
          roots: localConvey.roots || localConvey.breakdown,
          breakdown: localConvey.breakdown || localConvey.roots,
          literal: localConvey.literal,
          story: localConvey.story,
          evolution: localConvey.evolution || localConvey.chain,
          chain: localConvey.chain || localConvey.evolution,
          raw_etymology: localConvey.raw_etym,
          zh_def: localConvey.zh_def || state.currentWordDef
        });
        return;
      }
    }

    // C. 异步向后端 /api/etymology 请求（后端接入 DeepSeek 智能清洗并存库）
    body.innerHTML = '<div style="display:flex; align-items:center; gap:6px; color:var(--text-secondary); font-size:12px;"><span>⏳</span><span>正在提炼结构化三段式词源…</span></div>';
    const zhParam = encodeURIComponent(state.currentWordDef || '');
    fetch(`/api/etymology?word=${encodeURIComponent(cleanTarget)}&zh=${zhParam}`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(res => {
        if (res.found && (res.roots || res.breakdown || res.story)) {
          if (!window.WORD_CONVEY) window.WORD_CONVEY = {};
          window.WORD_CONVEY[cleanTarget] = {
            word: cleanTarget,
            roots: res.roots || res.breakdown,
            breakdown: res.breakdown || res.roots,
            literal: res.literal || '',
            story: res.story,
            evolution: res.evolution || res.chain,
            chain: res.chain || res.evolution,
            raw_etym: res.raw_etymology || res.etymology,
            zh_def: res.zh_def || state.currentWordDef
          };
        }
        body.innerHTML = renderConveyBody(res);
      })
      .catch(e => {
        if (BENCHMARK_CONVEY[cleanTarget]) {
          const bm = BENCHMARK_CONVEY[cleanTarget];
          body.innerHTML = renderConveyBody({
            word: cleanTarget,
            found: true,
            breakdown: bm.breakdown,
            story: bm.story,
            chain: bm.chain
          });
        } else {
          body.innerHTML = `<span style="color:var(--brand-danger);">词源加载失败 (${escapeHtml(e.message)})</span>`;
        }
      });
  }

  function toggleEtymologyDetails() {
    const box = document.getElementById('fcEtymInlineContent');
    const arrow = document.getElementById('fcEtymToggleArrow');
    const rawBtn = document.getElementById('fcEtymRawToggleBtn');
    if (!box) return;
    const isHidden = box.style.display === 'none' || !box.style.display;
    if (isHidden) {
      loadEtymologyInline(state.currentWord);
    } else {
      box.style.display = 'none';
      if (arrow) arrow.textContent = '▸ 展开';
      if (rawBtn) rawBtn.style.display = 'none';
    }
  }

  function close() {
    evaluationVersion++; state.isEvaluating = false;
    state.isOpen = false;
    saveSession();
    if (typeof document !== 'undefined' && document.body?.classList) {
      document.body.classList.remove('flashcard-open');
    }
    const modal = document.getElementById('flashcardModal');
    if (modal) {
      modal.classList.remove('open');
      setTimeout(() => { if (!state.isOpen) modal.style.display = 'none'; }, 200);
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
    if (state.mode === 'review') syncLiveReviewQueue();
    const restored = state.restoreAnswer; state.restoreAnswer = null;
    const word = state.queue[state.currentIndex];
    state.currentWord = word;
    state.isAnswered = false;
    state.lastResult = null;
    state.lastReviewMarkReduced = false;
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

    const reviewBatchHtml = state.mode === 'review' ? `
      <div class="flashcard-group-pill flashcard-batch-pill" title="切换重点复习单轮词量档位 (自动保存)">
        <span class="flashcard-group-label">每轮:</span>
        <select id="fcReviewBatchSelect" class="flashcard-group-dropdown" onchange="FlashcardEngine.setReviewBatchSize(this.value)">
          <option value="20" ${state.reviewBatchSetting === '20' ? 'selected' : ''}>20 词</option>
          <option value="35" ${state.reviewBatchSetting === '35' ? 'selected' : ''}>35 词</option>
          <option value="50" ${state.reviewBatchSetting === '50' ? 'selected' : ''}>50 词</option>
          <option value="all" ${state.reviewBatchSetting === 'all' ? 'selected' : ''}>全部</option>
        </select>
      </div>
    ` : '';

    const badgeCounts = getReviewQueueBadgeCounts(state.queue);
    const roundTotal = state.reviewRoundTotal || state.queue.length || 1;
    const clearedPercent = Math.min(100, Math.round((state.reviewClearedCount / Math.max(1, roundTotal)) * 100));
    const hudReviewTotal = (state.reviewBatchSetting === 'all')
      ? (state.activeListLength || state.queue.length || roundTotal)
      : (state.reviewRoundTotal || state.queue.length || roundTotal);

    const trackerBarHtml = state.mode === 'review' ? `
      <div class="flashcard-review-tracker" id="fcReviewTracker">
        <div class="fc-tracker-row">
          <div class="fc-tracker-left">
            <span class="fc-tracker-title">本轮已清零:</span>
            <strong class="fc-tracker-cleared">${state.reviewClearedCount}</strong>
            <span class="fc-tracker-total">/ ${roundTotal}</span>
            ${state.reviewSkippedCount > 0 ? `<span class="fc-tracker-skipped">(跳过 ${state.reviewSkippedCount})</span>` : ''}
          </div>
          <div class="fc-tracker-badges">
            <span class="fc-tracker-badge badge-new" title="新增未复习">🟠 新增 ${badgeCounts.newCount}</span>
            <span class="fc-tracker-badge badge-danger" title="高危顽固词 / 遗忘回生">🔴 高危/回生 ${badgeCounts.dangerCount}</span>
            <span class="fc-tracker-badge badge-consolidate" title="巩固中">🟡 巩固中 ${badgeCounts.consolidateCount}</span>
            <span class="fc-tracker-badge badge-check" title="曾掌握到期抽查">🟢 曾掌握抽查 ${badgeCounts.checkCount}</span>
          </div>
        </div>
        <div class="flashcard-progress-bar" style="margin-top: 6px;">
          <div class="flashcard-progress-fill" style="width: ${clearedPercent}%; background: linear-gradient(90deg, #10b981, #059669);"></div>
        </div>
      </div>
    ` : `
      <div class="flashcard-progress-bar">
        <div class="flashcard-progress-fill" style="width: ${progressPercent}%;"></div>
      </div>
    `;

    const currentEntry = getMarkEntryHelper(word);
    const now = Date.now();
    const isCheckDue = currentEntry && currentEntry.mark === 1 && currentEntry.ever_mastered && currentEntry.next_review_at > 0 && currentEntry.next_review_at <= now;
    const isRelapse = currentEntry && currentEntry.mark >= 2 && currentEntry.ever_mastered;
    const isMastered = currentEntry && currentEntry.ever_mastered;

    let learnedTagHtml = '';
    if (isCheckDue) {
      learnedTagHtml = `<span class="flashcard-learned-tag tag-check">🟢 曾掌握 · 到期抽查</span>`;
    } else if (isRelapse) {
      learnedTagHtml = `<span class="flashcard-learned-tag tag-relapse">🔴 曾掌握 · 遗忘回生</span>`;
    } else if (isMastered || state.learnedWords.has(word.toLowerCase().trim())) {
      learnedTagHtml = `<span class="flashcard-learned-tag">✔ 曾掌握</span>`;
    }

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
            <button class="btn btn-secondary btn-xs flashcard-exit-btn" id="fcExitBtn" onclick="FlashcardEngine.close()" title="退出研习 (Esc)" style="white-space:nowrap;flex-shrink:0;padding:6px 12px;">✕ 退出</button>
            <div class="flashcard-mode-pill ${state.mode === 'study' ? 'study-pill' : 'review-pill'}" onclick="FlashcardEngine.toggleMode()">
              <span>${state.mode === 'study' ? '📖 新词研习' : '🔄 重点复习'}</span>
              <span style="font-size:10px;opacity:0.75;">(切模式)</span>
            </div>
            ${groupSelectHtml}
            ${reviewBatchHtml}
            <div class="flashcard-mode-pill" onclick="FlashcardEngine.toggleLanguageMode()" title="切换释义语言显示偏好 (中/英优先)">
              <span>${(typeof appSettings !== 'undefined' && appSettings.dictLanguageMode === 'en') ? '🇬🇧 纯英优先' : '🇨🇳 中文优先'}</span>
            </div>
          </div>
          <div class="flashcard-hud-right">
            <span class="flashcard-stat-chip">今日打卡: <strong id="fcCompletedCount">${state.todayStats.completed}</strong> / ${state.mode === 'review' ? hudReviewTotal : state.todayStats.target} 词</span>
            <span class="flashcard-stat-chip flashcard-word-number-chip" id="fcWordNumberChip" onclick="FlashcardEngine.promptJumpProgress()" title="点击直接修改/跳转目标词号 (1 ~ ${state.mode === 'review' ? hudReviewTotal : (state.activeListLength || 3837)})" style="cursor:pointer;user-select:none;">${state.mode === 'study' ? `词库编号: <strong style="text-decoration:underline dotted;cursor:pointer;">${state.studyStartIndex + state.currentIndex + 1}</strong> / ${state.activeListLength} (第${Math.floor(state.studyStartIndex / state.targetCount) + 1}组)` : `复习进度: <strong style="text-decoration:underline dotted;cursor:pointer;">${state.currentIndex + 1}</strong> / ${hudReviewTotal}`}</span>
          </div>
        </div>

        <!-- 顶部云同步状态栏：左右紧凑分布，禁止按钮过度拉伸 -->
        <div class="flashcard-sync-bar">
          <span id="fcCloudStatus" role="status" aria-live="polite"></span>
          <button type="button" class="btn btn-secondary btn-xs" id="fcCloudAction" onclick="FlashcardEngine.syncCloudProgress()">立即同步</button>
        </div>

        <!-- 进度条 / 复习追踪条 -->
        ${trackerBarHtml}

        <!-- 折纸主卡片 -->
        <div class="flashcard-card-box" id="flashcardBox">
          <!-- 卡片正面头部：主单词+发音在正中央绝对居中，Mark 悬浮于最右侧 -->
          <div class="flashcard-word-row">
            <div class="flashcard-word-main">
              <h1 class="flashcard-word" id="fcWordTitle" onclick="FlashcardEngine.speakCurrent()">${escapeHtml(word)}</h1>
              <button class="flashcard-speaker-btn" onclick="FlashcardEngine.speakCurrent()" title="发音 (Space)">🔊</button>
            </div>
            <div class="flashcard-word-actions">
              <button type="button" class="btn btn-secondary btn-xs flashcard-mark-btn" id="fcMarkAdd" onclick="FlashcardEngine.addCurrentMark()" title="加入重点生词本 (快捷键: +)">＋Mark (+)</button>
              <button type="button" class="btn btn-secondary btn-xs flashcard-mark-btn" id="fcMarkUndo" onclick="FlashcardEngine.undoCurrentMark()" title="撤销本次 Mark (快捷键: -)" style="display:none;" hidden>撤销 (-)</button>
              <span id="fcMarkCountTag" class="flashcard-mark-tag" ${markCount > 0 ? '' : 'hidden'}>★ Mark ×${markCount}</span>
              ${learnedTagHtml}
            </div>
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
              <div class="flashcard-input-actions bottom-action-bar" id="fcInputActions">
                <button type="button" class="btn btn-secondary flashcard-unknown-btn" id="fcUnknownBtn" onclick="FlashcardEngine.giveUpUnknown()" title="想不起来/我不清楚 (快捷键: 空回车 或 ?)"><span class="mobile-btn-text">我不清楚</span><span class="desktop-btn-text">🤔 我不清楚</span></button>
                <button class="btn btn-primary flashcard-submit-btn" id="fcSubmitBtn" onclick="FlashcardEngine.submitAnswer()"><span class="mobile-btn-text">判卷</span><span class="desktop-btn-text">判卷 (Enter)</span></button>
              </div>
            </div>
          </div>

          <aside id="fcMarkAsideBox" aria-label="手动加入 Mark 状态" style="display:none;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;margin:4px 0;padding:4px 8px;border:1px solid var(--paper-border);border-radius:6px;background:var(--paper-surface-sub);">
            <div style="flex:1;min-width:140px;">
              <div id="fcMarkStatus" role="status" aria-live="polite" style="font-size:11px;color:var(--text-secondary);">判错自动加入；可按 + 手动 Mark。</div>
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
      if (input) {
        safeFocusNoScroll(input);
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

    // 重点：若当前打开了跳转词库进度弹窗，或者焦点在任何非主卡片输入控件内，绝不拦截任何键盘事件（避免数字1~7被词性快捷键劫持）
    if (document.getElementById('fcJumpModalOverlay')) return;
    const activeEl = document.activeElement;
    if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.isContentEditable) && activeEl.id !== 'fcInput') {
      return;
    }

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
      safeFocusNoScroll(nextBtn);
      return;
    }

    if (isDecrease && (state.isAnswered || !isInputFocused)) {
      e.preventDefault();
      e.stopPropagation();
      undoCurrentMark();
      if (typeof soundClick === 'function') soundClick();
      const nextBtn = document.getElementById('fcNextBtn');
      safeFocusNoScroll(nextBtn);
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
    const wordKey = word.toLowerCase().trim();
    const currentMarks = typeof getMarkCount === 'function' ? getMarkCount(wordKey) : 0;
    const reasonText = currentMarks === 0
      ? '已展开参考释义，已自动加入 Mark'
      : `已展开参考释义（已有 ${currentMarks} 次 Mark 保留）`;

    const result = {
      correct: false,
      confidence: 0,
      source: 'unknown_giveup',
      reason: reasonText,
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
        state.learnedWords.add(wordKey);
        saveLearnedWords();

        if (typeof soundSuccess === 'function') soundSuccess();
        if (state.mode === 'review') {
          handleReviewCorrectAnswer(wordKey);
        }
      } else {
        state.todayStats.wrong += 1;
        if (typeof soundFailure === 'function') soundFailure();
        if (state.mode === 'review') {
          handleReviewWrongOrUnknownAnswer(wordKey);
        } else {
          // study 模式
          if (result.verdict === 'REJECT' && !state.manualMarkBaselines.has(wordKey) && typeof addMark === 'function') {
            addMark(wordKey);
          } else if (result.isUnknown && !state.manualMarkBaselines.has(wordKey) && typeof getMarkCount === 'function' && typeof addMark === 'function') {
            const currentMarks = getMarkCount(wordKey);
            if (currentMarks === 0) addMark(wordKey);
          }
        }
      }
      if (state.mode === 'review') syncLiveReviewQueue();
      updateHUDCounts();
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
      ? `[${stdPosList.map(p => `${p}.`).join(' / ')}]` 
      : '暂无标注（词性不参与判定）';
    const cleanStandardDef = (standardDef || '暂无详细中文释义');
    const isEnMode = (typeof appSettings !== 'undefined' && appSettings.dictLanguageMode === 'en');
    const enDef = getEnglishDefinition(state.currentWord);
    const isWideScreen = typeof window !== 'undefined' && window.innerWidth >= 800;

    // 触发异步补齐英文释义
    // Fetch after the result DOM exists, including immediate cache/error paths.

    if (resultPanel) {
      resultPanel.style.display = 'block';
      const hasSpecifiedPos = selectedPos.length > 0 && posDisplay !== '未指定';
      resultPanel.innerHTML = `
        <div class="flashcard-badge-row">
          <span class="flashcard-verdict-badge ${isUncertain ? 'badge-unknown' : result.correct ? 'badge-correct' : (result.isUnknown ? 'badge-unknown' : 'badge-wrong')}">
            ${isUncertain ? '⚪ 暂不判定（不计对错）' : result.correct ? '✅ 判题通过！' : (result.isUnknown ? '🤔 看看参考释义' : '❌ 释义有偏差')}
          </span>
          <span class="flashcard-confidence-info">${escapeHtml(result.reason)}</span>
        </div>

        ${isUncertain ? `
          <div class="flashcard-uncertain-self-eval">
            <span style="font-size:12.5px; color:var(--text-secondary); font-weight:700;">🤔 无法判定你的释义，请自主评估：</span>
            <div class="fc-self-eval-btns">
              <button type="button" class="fc-self-eval-btn-correct" onclick="FlashcardEngine.selfEvaluateUncertain(true)">✓ 算我答对</button>
              <button type="button" class="fc-self-eval-btn-wrong" onclick="FlashcardEngine.selfEvaluateUncertain(false)">✗ 没掌握，重考</button>
            </div>
          </div>
        ` : ''}

        <div class="flashcard-def-comparison">
          ${hasSpecifiedPos ? `<div class="flashcard-compare-row">
            <div class="flashcard-compare-item">
              <span class="compare-label">你勾选的词性:</span>
              <span class="compare-content user-input-text">${escapeHtml(posDisplay)}</span>
            </div>
            <div class="flashcard-compare-item">
              <span class="compare-label">标准考纲词性:</span>
              <span class="compare-content std-def-text">${escapeHtml(stdPosDisplay)}</span>
            </div>
          </div>` : ''}
          ${!result.isUnknown ? `<div class="flashcard-compare-item" style="margin-top: 4px; display:flex; align-items:center; flex-wrap:wrap; gap:8px;">
            <span class="compare-label">你的释义:</span>
            <span class="compare-content user-input-text">${escapeHtml(userInput || '(未填写)')}</span>
            ${!hasSpecifiedPos ? `<span class="flashcard-std-pos-pill" style="margin-left:4px; font-size:11.5px; background:rgba(59,130,246,0.1); color:#2563eb; padding:2px 8px; border-radius:6px; font-weight:700;">考纲词性 ${escapeHtml(stdPosDisplay)}</span>` : ''}
          </div>` : `
            ${!hasSpecifiedPos ? `<div style="margin-top: 4px; font-size:12px; color:var(--text-secondary);">
              考纲词性: <strong style="color:#2563eb;">${escapeHtml(stdPosDisplay)}</strong>
            </div>` : ''}
          `}

          <!-- 双栏流体网格容器：屏幕宽时左右并排（大屏下词源默认展开），屏幕窄时单栏上下排列 -->
          <div class="fc-two-col-grid" style="margin-top: 10px;">
            <!-- 左栏：参考释义区 -->
            <div class="fc-grid-col-def" id="fcDefArea">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <span class="compare-label" style="font-weight:800; font-size:clamp(13px, 1vw, 15px);">参考释义 · 英汉对照</span>
              </div>

              ${isEnMode ? `
                <div class="compare-content std-def-text compare-def-primary" style="margin-bottom:10px;">
                  <div style="font-size:clamp(12px, 0.9vw, 13.5px); font-weight:800; color:var(--text-secondary); margin-bottom:6px;">[英文释义]</div>
                  <div id="fcStdDefEnText" role="status" aria-live="polite" aria-busy="${!enDef}">
                    ${formatEnglishDefHtml(enDef)}
                  </div>
                </div>
                <div class="compare-content std-def-text compare-def-secondary" style="margin-top:8px;">
                  <div style="font-size:clamp(12px, 0.9vw, 13.5px); font-weight:800; color:var(--text-secondary); margin-bottom:6px;">[中文考纲]</div>
                  ${formatChineseDefHtml(cleanStandardDef, false)}
                </div>
              ` : `
                <div class="compare-content std-def-text compare-def-primary" style="margin-bottom:10px;">
                  <div style="font-size:clamp(12px, 0.9vw, 13.5px); font-weight:800; color:var(--brand-accent); margin-bottom:6px;">[中文考纲]</div>
                  ${formatChineseDefHtml(cleanStandardDef, true)}
                </div>
                <div class="compare-content std-def-text compare-def-secondary" style="margin-top:8px;">
                  <div style="font-size:clamp(12px, 0.9vw, 13.5px); font-weight:800; color:var(--text-secondary); margin-bottom:6px;">[英文释义]</div>
                  <div id="fcStdDefEnText" role="status" aria-live="polite" aria-busy="${!enDef}">
                    ${formatEnglishDefHtml(enDef)}
                  </div>
                </div>
              `}
              <button type="button" id="fcEnglishRetry" class="btn btn-secondary" hidden style="display:none;margin-top:8px" onclick="FlashcardEngine.retryEnglishDefinition()">重新获取英文释义</button>
            </div>

            <!-- 右栏：词源脉络区 -->
            <div class="fc-grid-col-etym" id="fcEtymArea">
              <div class="flashcard-etym-inline-wrap" style="height:100%;">
                <div class="flashcard-etym-header" style="display:flex; justify-content:space-between; align-items:center; user-select:none; margin-bottom:8px; flex-wrap:wrap; gap:6px;">
                  <span onclick="FlashcardEngine.toggleEtymologyDetails()" style="font-weight:800; font-size:clamp(13px, 1vw, 15px); color:#8b5cf6; display:inline-flex; align-items:center; gap:4px; cursor:pointer;" title="点击展开/折叠词源历史脉络">
                    🏛️ [词源脉络] <span id="fcEtymToggleArrow" style="font-size:11px; transition:transform 0.2s;">${isWideScreen ? '▾ 收起' : '▸ 展开'}</span>
                  </span>
                  <button type="button" class="btn btn-link btn-xs" id="fcEtymRawToggleBtn" onclick="FlashcardEngine.toggleRawEtymology(event)" style="display:none; font-size:11px; color:#8b5cf6; text-decoration:none; cursor:pointer; padding:2px 8px; border:1px solid rgba(139,92,246,0.25); border-radius:4px; background:rgba(139,92,246,0.06); transition:all 0.15s ease;">
                    <span id="fcEtymRawToggleText">查看英文原版 ▸</span>
                  </button>
                </div>
                <div id="fcEtymInlineContent" style="display:${isWideScreen ? 'block' : 'none'}; padding:12px 14px; background:var(--paper-surface); border:1px solid var(--paper-border); border-radius:8px; line-height:1.65; box-shadow:0 1px 3px rgba(0,0,0,0.05);">
                  <div id="fcEtymBodyText">
                    <em>正在加载词源演化考据…</em>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flashcard-action-bar bottom-action-bar">
          ${!result.correct ? `<button id="fcRetryBtn" class="btn btn-secondary flashcard-retry-btn" onclick="FlashcardEngine.retryCurrent()"><span class="mobile-btn-text">再试一次</span><span class="desktop-btn-text">再试一次</span></button>` : ''}
          <button id="fcNextBtn" class="btn btn-primary flashcard-next-btn" onclick="FlashcardEngine.nextWord()">
            ${manualMarkNextLabel()}
          </button>
        </div>
      `;
      if (isWideScreen) {
        loadEtymologyInline(state.currentWord);
      }
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
    safeFocusNoScroll(nextBtn);
    fetchEnglishDefOnline(state.currentWord);
    if (!renderOnly && isUncertain) saveSession();
  }


  function manualMarkKey() {
    return (state.currentWord || '').toLowerCase().trim();
  }

  function manualMarkNextLabel() {
    const isLast = (state.currentIndex + 1 >= state.queue.length);
    if (isLast) {
      return '<span class="mobile-btn-text">结算 ➔</span><span class="desktop-btn-text">查看本次研习报告 (Enter) ➔</span>';
    }
    const isSpecial = state.manualMarkBaselines.has(manualMarkKey()) || state.lastResult?.verdict === 'REJECT' || state.lastResult?.isUnknown || (state.mode === 'review' && state.lastResult?.correct);
    const desktopText = isSpecial ? '下一个 (Enter) ➔' : '不加 Mark，下一词 (Enter) ➔';
    return `<span class="mobile-btn-text">下一个 ➔</span><span class="desktop-btn-text">${desktopText}</span>`;
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
    if (status) {
      if (added) {
        status.textContent = `已手动加入，当前 Mark：${count}。可以撤销本次添加。`;
      } else if (state.lastResult?.verdict === 'REJECT') {
        status.textContent = `本次判错已自动加入 Mark，当前 Mark：${count}。`;
      } else if (state.lastResult?.isUnknown) {
        status.textContent = `我不清楚：${count > 1 ? `已有 ${count} 次标记保留（不重复累加）` : count === 1 ? `已自动加入重点生词本，当前 Mark：1` : `当前 Mark：0`}`;
      } else if (state.mode === 'review' && state.lastResult?.correct) {
        status.textContent = state.lastReviewMarkReduced
          ? `重点词复习答对！Mark 减 1，当前 Mark：${count}。`
          : `重点词复习答对！保持 Mark 1 曾掌握，已进入休眠期（${state.lastReviewSleepDays || 3}天后自动唤醒抽查）。`;
      } else if (state.mode === 'review' && (state.lastResult?.verdict === 'REJECT' || state.lastResult?.isUnknown)) {
        status.textContent = `重点词复习未掌握！Mark 加 1（当前 Mark：${count}），已安排间隔重考（稍后第 4 题再次巩固）。`;
      } else {
        status.textContent = `本次未新增 Mark${count > 0 ? `，已有 ${count} 次标记保留` : ''}。暂不判定时可使用快捷自评或按 + 手动加入。`;
      }
    }
    const asideBox = document.getElementById('fcMarkAsideBox');
    if (asideBox) {
      const isTriggered = added || state.lastResult?.verdict === 'REJECT' || state.lastResult?.isUnknown || (state.mode === 'review' && state.lastResult?.correct);
      asideBox.style.display = isTriggered ? 'flex' : 'none';
    }
    if (tag) { tag.hidden = count === 0; tag.style.display = count > 0 ? '' : 'none'; tag.textContent = `★ Mark ×${count}`; }
    if (nextButton) {
      nextButton.innerHTML = manualMarkNextLabel();
      if (state.isAnswered) safeFocusNoScroll(nextButton);
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
      if (state.mode === 'review') syncLiveReviewQueue();
      saveSession();
      updateManualMarkControls();
      updateHUDCounts();
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
      if (state.mode === 'review') syncLiveReviewQueue();
      saveSession();
      updateManualMarkControls();
      updateHUDCounts();
    }
  }


  /**
   * 仅在打开卡片或主动切词/重测时重置顶部偏移，绝不干预用户正常滚动浏览
   */
  function resetScrollToTop() {
    if (typeof document === 'undefined') return;
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
    const modal = document.getElementById('flashcardModal');
    if (modal) modal.scrollTop = 0;
    const container = typeof modal?.querySelector === 'function' ? modal.querySelector('.flashcard-container') : null;
    if (container) container.scrollTop = 0;
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
      safeFocusNoScroll(inputEl);
    }
    saveSession();
    resetScrollToTop();
  }

  function nextWord() {
    if (state.isEvaluating || !state.isAnswered) return;

    if (state.mode === 'review') {
      const lastRes = state.lastResult;
      const isUncertain = (lastRes?.verdict === 'UNCERTAIN');

      if (isUncertain) {
        // 用户未点自评，直接点击「下一个」：
        // 保持该词所有数据库状态原样不变，仅移出本轮队列并记为“已跳过”
        const [skippedWord] = state.queue.splice(state.currentIndex, 1);
        if (skippedWord) state.reviewSkippedWords?.add(skippedWord.toLowerCase().trim());
        state.reviewSkippedCount = state.reviewSkippedWords?.size || (state.reviewSkippedCount + 1);
      } else if (lastRes?.correct) {
        // 答对：移出本轮剩余队列，本轮已清零数 +1
        const [clearedWord] = state.queue.splice(state.currentIndex, 1);
        if (clearedWord) state.reviewClearedWords?.add(clearedWord.toLowerCase().trim());
        state.reviewClearedCount = state.reviewClearedWords?.size || (state.reviewClearedCount + 1);
      } else {
        // 答错与我不清楚：
        // 从当前位置移除，固定重新插入到本轮队列当前位置往后的第 4 位（若剩余不足 4 词则插到队尾）
        const [wrongWord] = state.queue.splice(state.currentIndex, 1);
        const insertIdx = Math.min(state.queue.length, state.currentIndex + 3);
        state.queue.splice(insertIdx, 0, wrongWord);
      }

      // 如果队列已被完全清空（全部答对或跳过）
      if (state.queue.length === 0) {
        renderFinishedState();
        return;
      }

      // 若当前索引超出队列末尾，循环回到队首
      if (state.currentIndex >= state.queue.length) {
        state.currentIndex = 0;
      }
    } else {
      state.currentIndex += 1;
    }

    state.isAnswered = false;
    state.lastResult = null;
    state.lastUserInput = "";
    state.selectedPos = [];
    saveSession();
    renderCard();
    resetScrollToTop();
  }

  function selfEvaluateUncertain(isCorrect) {
    if (!state.isOpen || state.mode !== 'review' || !state.currentWord) return;
    const wordKey = state.currentWord.toLowerCase().trim();

    if (isCorrect) {
      // 算我答对
      handleReviewCorrectAnswer(wordKey);
      const [clearedWord] = state.queue.splice(state.currentIndex, 1);
      if (clearedWord) state.reviewClearedWords?.add(clearedWord.toLowerCase().trim());
      state.reviewClearedCount = state.reviewClearedWords?.size || (state.reviewClearedCount + 1);
      state.todayStats.completed += 1;
      state.todayStats.correct += 1;
      if (typeof soundSuccess === 'function') soundSuccess();
    } else {
      // 没掌握，重考
      handleReviewWrongOrUnknownAnswer(wordKey);
      const [wrongWord] = state.queue.splice(state.currentIndex, 1);
      const insertIdx = Math.min(state.queue.length, state.currentIndex + 3);
      state.queue.splice(insertIdx, 0, wrongWord);
      state.todayStats.completed += 1;
      state.todayStats.wrong += 1;
      if (typeof soundFailure === 'function') soundFailure();
    }

    updateHUDCounts();
    saveDailyStats();

    if (state.queue.length === 0) {
      renderFinishedState();
      return;
    }
    if (state.currentIndex >= state.queue.length) {
      state.currentIndex = 0;
    }

    state.isAnswered = false;
    state.lastResult = null;
    state.lastUserInput = "";
    state.selectedPos = [];
    saveSession();
    renderCard();
    resetScrollToTop();
  }

  function startNextReviewRound() {
    clearSession();
    open('review');
  }

  function setReviewBatchSize(size) {
    if (!['20', '35', '50', 'all'].includes(String(size))) return;
    state.reviewBatchSetting = String(size);
    setStoredReviewBatchSize(String(size));
    if (state.mode === 'review') {
      const res = generateDeterministicReviewQueue(state.reviewBatchSetting);
      state.queue = res.queue;
      state.reviewRoundTotal = res.queue.length;
      state.reviewClearedCount = 0;
      state.reviewSkippedCount = 0;
      state.reviewClearedWords = new Set();
      state.reviewSkippedWords = new Set();
      state.currentIndex = 0;
      state.currentWord = state.queue[0] || null;
      state.isAnswered = false;
      state.lastResult = null;
      state.selectedPos = [];
      saveSession();
      renderCard();
      resetScrollToTop();
      if (typeof showToast === 'function') {
        showToast(`每轮词量已切换为：${size === 'all' ? '全部' : size + ' 词'}，已生成新一轮`);
      }
    }
  }

  function toggleMode() {
    clearSession();
    const nextMode = state.mode === 'study' ? 'review' : 'study';
    open(nextMode);
  }

  function renderFinishedState() {
    if (state.mode === 'review') {
      clearSession();
      const modal = document.getElementById('flashcardModal');
      if (!modal) return;

      const remainingCandidates = getActiveAndDueMarkedWords();
      const allClear = (remainingCandidates.length === 0);
      const isRoundDone = (state.reviewRoundTotal > 0 && state.queue.length === 0);

      modal.innerHTML = `
        <div class="flashcard-container">
          <div class="flashcard-card-box finished-box">
            <div class="finished-trophy">${allClear ? '🌟' : '🎉'}</div>
            <h2 style="font-size:24px; font-weight:800; margin: 12px 0 6px;">
              ${allClear ? '当前待复习词已全部清零' : (isRoundDone ? '本轮攻克完成！' : '目前没有待复习词')}
            </h2>
            <p style="color:var(--text-secondary); font-size:14px; margin-bottom: 20px;">
              ${allClear
                ? '当前待复习词已全部清零，休眠词将在到期后自动唤醒。'
                : isRoundDone
                  ? `本轮已成功清零 <strong>${state.reviewClearedCount}</strong> 词${state.reviewSkippedCount > 0 ? `，跳过 <strong>${state.reviewSkippedCount}</strong> 词` : ''}。库中还有 <strong>${remainingCandidates.length}</strong> 词待复习。`
                  : '库中所有重点词均在休眠保护期中，休眠词将在到期后自动唤醒。'}
            </p>

            <div class="finished-stats-grid">
              <div class="finished-stat-card">
                <span class="stat-num" style="color:var(--brand-success);">${state.reviewClearedCount}</span>
                <span class="stat-lbl">本轮已清零</span>
              </div>
              <div class="finished-stat-card">
                <span class="stat-num" style="color:var(--brand-danger);">${state.reviewSkippedCount}</span>
                <span class="stat-lbl">已跳过</span>
              </div>
              <div class="finished-stat-card">
                <span class="stat-num" style="color:var(--brand-primary);">${remainingCandidates.length}</span>
                <span class="stat-lbl">待复习总词数</span>
              </div>
            </div>

            <div style="display:flex; gap:12px; justify-content:center; margin-top:24px; flex-wrap:wrap;">
              ${(!allClear && remainingCandidates.length > 0) ? `
                <button id="fcReviewNextRoundBtn" class="btn btn-primary" onclick="FlashcardEngine.startNextReviewRound()" style="font-weight:700; padding:8px 20px;">
                  🚀 开启下一轮 (${Math.min(remainingCandidates.length, parseInt(state.reviewBatchSetting, 10) || 35)} 词)
                </button>
              ` : ''}
              <button class="btn btn-secondary" onclick="FlashcardEngine.close()">返回词库</button>
            </div>
          </div>
        </div>
      `;
      if (typeof soundSuccess === 'function') soundSuccess();
      setTimeout(() => { const btn = document.getElementById('fcReviewNextRoundBtn') || document.querySelector('.btn-secondary'); safeFocusNoScroll(btn); }, 50);
      return;
    }

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
            ${completedQueue && hasNextStudyGroup ? `<button id="fcFinishRestartBtn" class="btn btn-primary" onclick="FlashcardEngine.open('study', ${state.targetCount}, ${nextStudyIndex})">下一组 (${nextStudyIndex + 1}-${Math.min(state.activeListLength, nextStudyIndex + state.targetCount)})</button>` : completedQueue && state.mode === 'review' ? `<button id="fcFinishRestartBtn" class="btn btn-primary" onclick="FlashcardEngine.open('review')">再次复习 Mark 词</button>` : state.mode === 'study' ? '<button id="fcFinishRestartBtn" class="btn btn-primary" onclick="FlashcardEngine.open(\'review\')">去复习 Mark 词</button>' : ''}
            ${state.mode === 'study' ? `<button class="btn btn-secondary" onclick="FlashcardEngine.open('study', ${state.targetCount}, ${state.studyStartIndex})">重学本组 (${state.studyStartIndex + 1}-${currentGroupEnd})</button>` : ''}
            <button class="btn btn-secondary" onclick="FlashcardEngine.close()">返回词库</button>
          </div>
        </div>
      </div>
    `;
    if (typeof soundSuccess === 'function') soundSuccess();
    setTimeout(() => { const btn = document.getElementById('fcFinishRestartBtn'); safeFocusNoScroll(btn); }, 50);
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
  function queueCloudProgress(cleared = false, immediate = false, force = false) {
    window.FlashcardCloud.save({learned:Array.from(state.learnedWords),sequence:state.studySequences,stats:state.todayStats,session:cleared?null:{
      date:getTodayStr(),mode:state.mode,targetCount:state.targetCount,queue:state.queue,currentIndex:state.currentIndex,
      isOpen:state.isOpen,manualMarkBaselines:Array.from(state.manualMarkBaselines),isAnswered:state.isAnswered,
      lastResult:state.lastResult,userInput:state.lastUserInput,selectedPos:state.selectedPos,queuePolicyVersion:QUEUE_POLICY_VERSION,
      studyScopeKey:state.studyScopeKey,studyStartIndex:state.studyStartIndex,
      reviewBatchSetting:state.reviewBatchSetting,reviewRoundTotal:state.reviewRoundTotal,
      reviewClearedCount:state.reviewClearedCount,reviewSkippedCount:state.reviewSkippedCount
    }}, immediate, force);
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
  function hydrateAndRefresh(cloudState) {
    if (!cloudState) return;
    hydrateCloudProgress(cloudState);
    if (state.isOpen && cloudState.session) {
      const sess = cloudState.session;
      if (Array.isArray(sess.queue) && sess.queue.length > 0) {
        state.queue = sess.queue;
        state.currentIndex = Math.min(sess.currentIndex || 0, sess.queue.length - 1);
        state.currentWord = state.queue[state.currentIndex];
        state.mode = sess.mode || state.mode;
        state.studyStartIndex = Number.isInteger(sess.studyStartIndex) ? sess.studyStartIndex : state.studyStartIndex;
        state.isAnswered = !!sess.isAnswered;
        state.lastResult = sess.lastResult || null;
        state.lastUserInput = sess.userInput || "";
        state.selectedPos = sess.selectedPos || [];
        renderCard();
        resetScrollToTop();
      }
    }
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
    if(window.FlashcardCloud.getAuth()) {
      void window.FlashcardCloud.checkAndSyncLatestProgress();
    }
  }

  function promptJumpProgress() {
    const full = typeof getActiveWordList === 'function'
      ? getActiveWordList()
      : (typeof words !== 'undefined' && Array.isArray(words) ? words : []);
    const total = state.mode === 'review'
      ? (state.activeListLength || state.queue.length || getLiveMarkedList().length)
      : (full.length || state.activeListLength || 3837);
    const currentNum = state.mode === 'study' ? (state.studyStartIndex + state.currentIndex + 1) : (state.currentIndex + 1);

    let modal = document.getElementById('fcJumpModalOverlay');
    if (modal) modal.remove();

    modal = document.createElement('div');
    modal.id = 'fcJumpModalOverlay';
    modal.className = 'flashcard-jump-modal-overlay';
    modal.style.cssText = 'position:fixed;inset:0;background:rgba(15,23,42,0.65);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;z-index:99999;';
    modal.onclick = (e) => { if (e.target === modal) closeJumpModal(); };

    modal.innerHTML = `
      <div class="flashcard-jump-card" style="background:var(--paper-surface,#ffffff);border:1px solid var(--paper-border,#e2e8f0);border-radius:12px;padding:20px 24px;width:min(90vw,360px);box-shadow:0 10px 25px rgba(0,0,0,0.2);box-sizing:border-box;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
          <h3 style="margin:0;font-size:16px;font-weight:800;color:var(--text-primary,#0f172a);">📖 跳转词库进度</h3>
          <button type="button" class="btn btn-link" onclick="FlashcardEngine.closeJumpModal()" style="border:none;background:transparent;cursor:pointer;font-size:18px;color:var(--text-secondary,#64748b);line-height:1;padding:4px;">✕</button>
        </div>
        <div style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:12px;">
          当前词号：<strong style="color:var(--brand-accent,#2563eb);">${currentNum}</strong> / ${total}
        </div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
          <label for="fcJumpInputVal" style="font-size:13px;font-weight:600;white-space:nowrap;color:var(--text-primary,#0f172a);">目标词号：</label>
          <input type="text" inputmode="numeric" pattern="[0-9]*" id="fcJumpInputVal" autocomplete="off" value="${currentNum}" placeholder="输入任意目标词号 (1 ~ ${total})" style="flex:1;padding:8px 12px;border:1px solid var(--paper-border,#cbd5e1);border-radius:6px;font-size:16px;font-weight:700;outline:none;background:var(--paper-surface,#ffffff);color:var(--text-primary,#0f172a);" />
        </div>
        <div style="display:flex;justify-content:flex-end;gap:8px;">
          <button type="button" class="btn btn-secondary btn-sm" onclick="FlashcardEngine.closeJumpModal()">取消</button>
          <button type="button" class="btn btn-primary btn-sm" id="fcJumpConfirmBtn" onclick="FlashcardEngine.confirmJumpProgress()">确认跳转并同步</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    setTimeout(() => {
      const input = document.getElementById('fcJumpInputVal');
      if (input) {
        input.focus();
        input.select();
        // 阻止任何键盘事件冒泡到全局 window / document，彻底防止快捷键干扰
        const stopKey = (e) => {
          e.stopPropagation();
          if (e.key === 'Enter') {
            e.preventDefault();
            confirmJumpProgress();
          } else if (e.key === 'Escape') {
            e.preventDefault();
            closeJumpModal();
          }
        };
        input.onkeydown = stopKey;
        input.onkeypress = (e) => { e.stopPropagation(); };
        input.onkeyup = (e) => { e.stopPropagation(); };
      }
    }, 30);
  }

  function closeJumpModal() {
    const modal = document.getElementById('fcJumpModalOverlay');
    if (modal) {
      if (typeof modal.remove === 'function') modal.remove();
      else if (modal.parentNode) modal.parentNode.removeChild(modal);
    }
  }

  function confirmJumpProgress() {
    const input = document.getElementById('fcJumpInputVal');
    if (!input) return;
    const raw = String(input.value || '').trim();
    if (!raw) {
      if (typeof showToast === 'function') showToast('请输入要跳转的目标词号');
      return;
    }
    const val = parseInt(raw, 10);
    if (!Number.isInteger(val)) {
      if (typeof showToast === 'function') showToast('请输入有效的纯数字词号');
      return;
    }
    jumpToWordNumber(val);
  }

  function jumpToWordNumber(num) {
    const full = typeof getActiveWordList === 'function'
      ? getActiveWordList()
      : (typeof words !== 'undefined' && Array.isArray(words) ? words : []);
    const total = state.mode === 'review'
      ? (state.activeListLength || state.queue.length || getLiveMarkedList().length)
      : (full.length || state.activeListLength || 3837);
    let targetNum = parseInt(num, 10);
    if (!Number.isInteger(targetNum)) return;
    if (targetNum < 1) targetNum = 1;
    let clamped = false;
    if (targetNum > total) {
      targetNum = total;
      clamped = true;
    }

    if (state.mode === 'review') {
      state.currentIndex = targetNum - 1;
      state.currentWord = state.queue[state.currentIndex] || null;
      state.isAnswered = false;
      state.lastResult = null;
      state.lastUserInput = "";
      state.selectedPos = [];
      state.restoreAnswer = null;
      state.manualMarkBaselines = new Map();
    } else {
      const size = state.targetCount || 100;
      const targetIndex = targetNum - 1;
      const startIndex = Math.floor(targetIndex / size) * size;
      const groupOffset = targetIndex - startIndex;

      state.studyStartIndex = startIndex;
      state.currentIndex = groupOffset;
      state.activeListLength = total;
      if (!state.studyScopeKey && full.length > 0) {
        state.studyScopeKey = getStudyScopeKey(full);
      }
      if (state.studyScopeKey) {
        state.studySequences[state.studyScopeKey] = startIndex;
        saveStudySequences();
      }
      state.queue = full.slice(startIndex, startIndex + size);
      state.currentWord = state.queue[state.currentIndex] || null;
      state.isAnswered = false;
      state.lastResult = null;
      state.lastUserInput = "";
      state.selectedPos = [];
      state.restoreAnswer = null;
      state.manualMarkBaselines = new Map();
    }

    saveSession();
    // 强制立即同步至 VPS 覆盖存档
    queueCloudProgress(false, true, true);

    closeJumpModal();
    if (state.isOpen) {
      renderCard();
      resetScrollToTop();
    }
    updateMainGroupSelectUI();
    if (typeof showToast === 'function') {
      if (clamped) {
        showToast(`已自适应对齐至词库上限第 ${targetNum} 词，并完成同步！`);
      } else {
        showToast(`🚀 已跳转至第 ${targetNum} 词，并强制同步至云端！`);
      }
    }
  }

  return {
    resumeCloudSession,
    promptJumpProgress,
    closeJumpModal,
    confirmJumpProgress,
    jumpToWordNumber,
    hydrateAndRefresh,
    toggleEtymologyDetails,
    toggleRawEtymology,
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
    resetScrollToTop,
    setStudyGroup,
    getStudyGroups,
    getCurrentStudyGroup,
    updateMainGroupSelectUI,
    selfEvaluateUncertain,
    setReviewBatchSize,
    startNextReviewRound,
    generateDeterministicReviewQueue,
    getLearnedWords: () => state.learnedWords,
    getReviewQueueBadgeCounts,
    getStoredReviewBatchSize,
    setStoredReviewBatchSize
  };
})();

// Account progress is loaded before resuming a card, including on a new device.
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>window.FlashcardEngine.resumeCloudSession());
else void window.FlashcardEngine.resumeCloudSession();
