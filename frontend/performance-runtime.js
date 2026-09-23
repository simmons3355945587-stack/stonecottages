/* Shared resource loading and account-scoped persistence. */
window.StoneStorage = (() => {
  const fallback = new Map();
  let persistent;
  try { persistent = window.localStorage; } catch {}
  const raw = {
    getItem(k) { if (fallback.has(k)) return fallback.get(k); try { return persistent?.getItem(k) ?? null; } catch { return null; } },
    setItem(k,v) { try { if (!persistent) throw new Error('Storage unavailable'); persistent.setItem(k,v); fallback.delete(k); } catch { fallback.set(k,String(v)); console.warn('[Stone] 浏览器存储不可用，本次变更仅保存在内存，请导出备份。'); } },
    removeItem(k) { fallback.set(k,null); try { persistent?.removeItem(k); } catch {} }
  };
  let user; try { user = JSON.parse(raw.getItem('vocab_auth_user') || 'null'); } catch {}
  const owner = user && (user.id ?? user.user_id ?? user.sub ?? user.username);
  const scope = owner == null ? 'guest' : String(owner);
  const globalKeys = new Set(['vocab_auth_token','vocab_auth_user','vocab_theme_mode','cet4_theme','vocab_app_settings']);
  const owned = k => !globalKeys.has(k) && /^(vocab_|cet4_)/.test(k);
  const key = k => owned(k) ? `stone:v1:${scope}:${k}` : k;
  // One-time copy, never delete legacy records or assign them to a second account.
  const legacyOwner = raw.getItem('stone:legacy-owner');
  if (legacyOwner === null || legacyOwner === scope) {
    for (const k of (() => { try { return Object.keys(persistent || {}); } catch { return []; } })()) if (owned(k) && raw.getItem(key(k)) === null) raw.setItem(key(k),raw.getItem(k));
    raw.setItem('stone:legacy-owner',scope);
  }
  return {scope,getItem:k=>raw.getItem(key(k)),setItem:(k,v)=>raw.setItem(key(k),v),removeItem:k=>raw.removeItem(key(k))};
})();
window.Stone = (() => {
  const scripts = new Map(), jsons = new Map();
  const resolveUrl = name => {
    const clean = name.replace(/^\//, '');
    if (window.STONE_ASSETS && window.STONE_ASSETS[clean]) return window.STONE_ASSETS[clean];
    return '/' + clean;
  };
  const url = resolveUrl;
  // Register parser/defer scripts before they finish, so module requests share them.
  const ownScript = document.currentScript;
  let beforeCurrent = true;
  for (const el of document.querySelectorAll('script[src]')) {
    if (el === ownScript) { beforeCurrent = false; continue; }
    const loadedUrl = new URL(el.src, location.href).href;
    const pending = beforeCurrent ? Promise.resolve() : new Promise((resolve, reject) => {
      el.addEventListener('load', resolve, { once: true });
      el.addEventListener('error', () => { scripts.delete(loadedUrl); reject(new Error('页面资源加载失败，请刷新')); }, { once: true });
    });
    pending.catch(() => {});
    scripts.set(loadedUrl, pending);
  }
  function script(name) {
    const key = new URL(resolveUrl(name), location.href).href;
    if (!scripts.has(key)) {
      const pending = new Promise((resolve, reject) => {
        const el = document.createElement('script');
        el.src = key;
        el.onload = resolve;
        el.onerror = () => {
          scripts.delete(key);
          el.remove();
          // Never mix a hashed release with a potentially newer unversioned script.
          reject(new Error('资源加载失败，请重试；若网站刚更新，请刷新页面'));
        };
        document.head.append(el);
      });
      scripts.set(key, pending);
    }
    return scripts.get(key);
  }
  async function json(name) {
    const key = resolveUrl(name);
    if (!jsons.has(key)) {
      const pending = (async () => {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 15000);
        try {
          const response = await fetch(key, { signal: controller.signal });
          if (!response.ok) throw new Error('数据加载失败 (' + response.status + ')');
          return await response.json();
        } finally { clearTimeout(timer); }
      })();
      jsons.set(key, pending);
      pending.catch(() => jsons.delete(key));
    }
    return jsons.get(key);
  }
  async function module(name) {
    if (name === 'tarot' || name === 'survival' || name === 'match') await script('lexical-graph.js');
    if (name === 'survival' || name === 'match') {
      await Promise.all([script('extra-definitions.js'), script('tarot.js')]);
    }
    if (name === 'survival') {
      try {
        await script('gray-health-engine.js');
      } catch (err) {
        console.warn('[Stone] Optional gray-health-engine failed:', err);
      }
      try {
        await script('risk-reward-engine.js');
      } catch (err) {
        console.warn('[Stone] Optional risk-reward-engine failed, fallback active:', err);
      }
    }
    await script(name + '.js');
  }
  function idle(fn) {
    if (navigator.connection?.saveData || /2g/.test(navigator.connection?.effectiveType || '')) return;
    (window.requestIdleCallback || (f => setTimeout(f, 300)))(() => Promise.resolve().then(fn).catch(() => {}));
  }
  let novelIndex;
  async function chapter(id) {
    if (!novelIndex) {
      novelIndex = await json('novel-index.json');
      window.NOVEL_METADATA = novelIndex.metadata;
      window.NOVEL_CHAPTERS = novelIndex.chapters.map(c => ({ ...c, beats: [] }));
    }
    const info = window.NOVEL_CHAPTERS.find(c => c.id === Number(id)) || window.NOVEL_CHAPTERS[0];
    if (!info.beats.length) Object.assign(info, await json(info.file));
    return info;
  }
  const inflight = new Map(), memory = new Map();
  let database;
  function getDatabase() {
    if (!database) database = new Promise(resolve => {
      let settled = false;
      const done = value => { if (!settled) { settled = true; clearTimeout(timer); resolve(value); } else value?.close(); };
      const timer = setTimeout(() => done(null), 1500);
      try {
        const request = indexedDB.open('stone-dictionary-v1', 1);
        request.onupgradeneeded = () => request.result.createObjectStore('entries');
        request.onsuccess = () => {
          request.result.onversionchange = () => request.result.close();
          done(request.result);
        };
        request.onerror = request.onblocked = () => done(null);
      } catch { done(null); }
    });
    return database;
  }
  async function cacheRead(k) {
    if (memory.has(k)) return memory.get(k);
    const d = await getDatabase();
    if (!d) return;
    return new Promise(resolve => {
      const timer = setTimeout(() => resolve(), 120);
      const done = value => { clearTimeout(timer); resolve(value); };
      try {
        const r = d.transaction('entries').objectStore('entries').get(k);
        r.onsuccess = () => done(r.result);
        r.onerror = () => done();
      } catch { done(); }
    });
  }
  async function cacheWrite(k, data) {
    const v = { data, expires: Date.now() + 7 * 86400000 };
    memory.set(k, v);
    if (memory.size > 300) memory.delete(memory.keys().next().value);
    const d = await getDatabase();
    if (!d) return;
    const t = d.transaction('entries', 'readwrite'), s = t.objectStore('entries');
    s.put(v, k);
    const c = s.count();
    c.onsuccess = () => {
      if (c.result > 1000) {
        let excess = c.result - 1000;
        const r = s.openCursor();
        r.onsuccess = () => {
          const cur = r.result;
          if (cur && excess-- > 0) {
            cur.delete();
            cur.continue();
          }
        };
      }
    };
  }
  function dict(resource) {
    const k = 'v1:' + resource;
    if (!inflight.has(k)) inflight.set(k, (async () => {
      // A broken or locked IndexedDB must not hold up the network.
      let timer;
      const hit = await Promise.race([cacheRead(k), new Promise(resolve => { timer = setTimeout(resolve, 150); })]);
      clearTimeout(timer);
      if (hit?.expires > Date.now()) return hit.data;
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 6500);
        let data;
        try {
        const r = await fetch(resource, { signal: controller.signal });
        if (!r.ok) throw new Error('词典暂不可用');
        data = await r.json();
        } finally { clearTimeout(timeout); }
        // A cache failure must never discard a successful dictionary response.
        cacheWrite(k, data).catch(() => {});
        return data;
      } catch (e) {
        if (hit?.data) return hit.data;
        throw e;
      }
    })().finally(() => inflight.delete(k)));
    return inflight.get(k);
  }
  function dictResponse(resource) { return dict(resource).then(data => ({ ok: true, json: async () => data })); }
  // Shared English dictionary for cards, the drawer and adjacent-word prefetch.
  const englishMemory = new Map(), englishPending = new Map();
  const cleanWord = word => String(word || '').trim().toLowerCase();
  function normalizeEnglish(data, word = '') {
    const entries = Array.isArray(data) ? data : [data];
    const first = entries.find(e => e && typeof e === 'object');
    if (!first) return null;
    const meanings = entries.flatMap(e => Array.isArray(e?.meanings) ? e.meanings : []).map(m => ({
      partOfSpeech: String(m.partOfSpeech || m.pos || ''),
      definitions: (Array.isArray(m.definitions || m.defs) ? (m.definitions || m.defs) : []).map(d => ({
        definition: typeof d === 'string' ? d : String(d?.definition || d?.def || ''),
        example: typeof d === 'object' ? String(d?.example || d?.eg || '') : ''
      })).filter(d => d.definition.trim())
    })).filter(m => m.definitions.length);
    if (!meanings.length) return null;
    return {...first, word:first.word || word, meanings};
  }
  function rememberEnglish(word, data) {
    const entry = normalizeEnglish(data, word);
    if (!entry) return null;
    englishMemory.set(cleanWord(word), entry);
    if (englishMemory.size > 1200) englishMemory.delete(englishMemory.keys().next().value);
    return entry;
  }
  function peekEnglish(word) {
    const key = cleanWord(word);
    if (englishMemory.has(key)) return englishMemory.get(key);
    const builtin = typeof builtinEnglishDict !== 'undefined' ? builtinEnglishDict[key] : null;
    if (builtin) return rememberEnglish(key, builtin);
    const hit = memory.get('v1:/api/dict/' + encodeURIComponent(key));
    if (hit?.data) return rememberEnglish(key, hit.data);
    return null;
  }
  let englishPack;
  function warmEnglish() {
    if (!window.STONE_ASSETS?.['english-core.json']) return Promise.resolve();
    if (!englishPack) englishPack = json('english-core.json').then(entries => {
      Object.entries(entries).forEach(([word, entry]) => {
        if (!englishMemory.has(word)) rememberEnglish(word, entry);
      });
    }).catch(() => { englishPack = null; });
    return englishPack;
  }
  function english(word) {
    const key = cleanWord(word);
    const ready = peekEnglish(key);
    if (ready) return Promise.resolve(ready);
    if (!englishPending.has(key)) englishPending.set(key, (async () => {
      let packTimer;
      const fromPack = Promise.race([
        warmEnglish().then(() => {
          const entry = peekEnglish(key);
          if (!entry) throw new Error('not bundled');
          return entry;
        }),
        new Promise((_, reject) => { packTimer = setTimeout(() => reject(new Error('bundle slow')), 1500); })
      ]).finally(() => clearTimeout(packTimer));
      const fromNetwork = (async () => {
      let timer;
      await Promise.race([warmEnglish(), new Promise(resolve => { timer = setTimeout(resolve, 100); })]);
      clearTimeout(timer);
      const packed = peekEnglish(key);
      if (packed) return packed;
      const entry = rememberEnglish(key, await dict('/api/dict/' + encodeURIComponent(key)));
      if (!entry) throw new Error('暂无可用英文释义');
      return entry;
      })();
      // A slightly later bundle can still satisfy a slow or failed API request.
      return Promise.any([fromPack, fromNetwork]);
    })().finally(() => englishPending.delete(key)));
    return englishPending.get(key);
  }
  let prefetchGeneration = 0;
  function prefetchEnglish(words) {
    const generation = ++prefetchGeneration;
    if (navigator.connection?.saveData || /2g/.test(navigator.connection?.effectiveType || '')) return;
    idle(async () => {
      for (const word of [...new Set(words.filter(Boolean))].slice(0, 2)) {
        if (generation !== prefetchGeneration) break;
        try { await english(word); } catch {}
      }
    });
  }
  return { url, script, module, json, idle, chapter, dictResponse,
    normalizeEnglish, peekEnglish, english, warmEnglish, prefetchEnglish };
})();
