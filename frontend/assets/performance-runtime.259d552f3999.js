/* Shared resource loading and account-scoped persistence. */
window.StoneStorage = (() => {
  const raw = window.localStorage;
  let user; try { user = JSON.parse(raw.getItem('vocab_auth_user') || 'null'); } catch {}
  const owner = user && (user.id ?? user.user_id ?? user.sub ?? user.username);
  const scope = owner == null ? 'guest' : String(owner);
  const globalKeys = new Set(['vocab_auth_token','vocab_auth_user','vocab_theme_mode','cet4_theme','vocab_app_settings']);
  const owned = k => !globalKeys.has(k) && /^(vocab_|cet4_)/.test(k);
  const key = k => owned(k) ? `stone:v1:${scope}:${k}` : k;
  // One-time copy, never delete legacy records or assign them to a second account.
  const legacyOwner = raw.getItem('stone:legacy-owner');
  if (legacyOwner === null || legacyOwner === scope) {
    for (const k of Object.keys(raw)) if (owned(k) && raw.getItem(key(k)) === null) raw.setItem(key(k),raw.getItem(k));
    raw.setItem('stone:legacy-owner',scope);
  }
  return {scope,getItem:k=>raw.getItem(key(k)),setItem:(k,v)=>raw.setItem(key(k),v),removeItem:k=>raw.removeItem(key(k))};
})();
window.Stone = (() => {
  const scripts = new Map(), jsons = new Map();
  const resolveUrl = name => {
    if (window.STONE_ASSETS && window.STONE_ASSETS[name]) return window.STONE_ASSETS[name];
    const clean = name.replace(/^\//, '');
    return '/' + clean;
  };
  const url = resolveUrl;
  function script(name) {
    if (!scripts.has(name)) scripts.set(name, new Promise((resolve, reject) => {
      const primaryUrl = resolveUrl(name);
      const el = document.createElement('script');
      el.src = primaryUrl;
      el.onload = resolve;
      el.onerror = () => {
        el.remove();
        // Fallback retry with cache-buster
        const fallbackUrl = '/' + name.replace(/^\//, '') + '?ts=' + Date.now();
        if (primaryUrl !== fallbackUrl) {
          const retryEl = document.createElement('script');
          retryEl.src = fallbackUrl;
          retryEl.onload = resolve;
          retryEl.onerror = () => {
            scripts.delete(name);
            retryEl.remove();
            console.error('[Stone] Script load failed:', name, primaryUrl, fallbackUrl);
            reject(new Error('资源加载失败，请重试'));
          };
          document.head.append(retryEl);
        } else {
          scripts.delete(name);
          reject(new Error('资源加载失败，请重试'));
        }
      };
      document.head.append(el);
    }));
    return scripts.get(name);
  }
  async function json(name) {
    if (!jsons.has(name)) {
      const getSignal = (ms) => {
        if (typeof AbortSignal !== 'undefined' && typeof AbortSignal.timeout === 'function') {
          return AbortSignal.timeout(ms);
        }
        return undefined;
      };
      const load = async (u) => {
        const sig = getSignal(15000);
        const r = await fetch(u, sig ? { signal: sig } : {});
        if (!r.ok) throw new Error('数据加载失败 (' + r.status + ')');
        return r.json();
      };
      jsons.set(name, (async () => {
        const primary = resolveUrl(name);
        try {
          return await load(primary);
        } catch (e1) {
          const fallback = '/' + name.replace(/^\//, '') + '?ts=' + Date.now();
          if (primary !== fallback) {
            try {
              return await load(fallback);
            } catch (e2) {
              jsons.delete(name);
              console.error('[Stone] JSON load failed:', name, primary, fallback, e2);
              throw e2;
            }
          }
          jsons.delete(name);
          throw e1;
        }
      })());
    }
    return jsons.get(name);
  }
  async function module(name) {
    if (name === 'survival' || name === 'match') {
      await script('extra-definitions.js');
      await script('tarot.js');
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
  const db = new Promise(resolve => {
    try {
      const r = indexedDB.open('stone-dictionary-v1', 1);
      r.onupgradeneeded = () => r.result.createObjectStore('entries');
      r.onsuccess = () => resolve(r.result);
      r.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
  async function cacheRead(k) {
    if (memory.has(k)) return memory.get(k);
    const d = await db;
    if (!d) return;
    return new Promise(resolve => {
      const r = d.transaction('entries').objectStore('entries').get(k);
      r.onsuccess = () => resolve(r.result);
      r.onerror = () => resolve();
    });
  }
  async function cacheWrite(k, data) {
    const v = { data, expires: Date.now() + 7 * 86400000 };
    memory.set(k, v);
    if (memory.size > 300) memory.delete(memory.keys().next().value);
    const d = await db;
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
      const hit = await cacheRead(k);
      if (hit?.expires > Date.now()) return hit.data;
      try {
        const sig = (typeof AbortSignal !== 'undefined' && typeof AbortSignal.timeout === 'function') ? AbortSignal.timeout(6500) : undefined;
        const r = await fetch(resource, sig ? { signal: sig } : {});
        if (!r.ok) throw new Error('词典暂不可用');
        const data = await r.json();
        await cacheWrite(k, data);
        return data;
      } catch (e) {
        if (hit?.data) return hit.data;
        throw e;
      }
    })().finally(() => inflight.delete(k)));
    return inflight.get(k);
  }
  function dictResponse(resource) { return dict(resource).then(data => ({ ok: true, json: async () => data })); }
  return { url, script, module, json, idle, chapter, dictResponse };
})();
