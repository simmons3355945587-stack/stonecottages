/**
 * Our Stone Cottages - Lexicon Module: Etymology Sub-engine (词源与历史故事系统)
 * 职责：
 * 1. 负责英文单词权威词源（Etymology）的检索与解析
 * 2. 具备三级渐进式降级体系：
 *    - Level 1: 本地 46,840 条 Etymonline 离线权威秒级库 (通过后端 /api/etymology 检索)
 *    - Level 2: Wiktionary 在线权威 API 扩展
 *    - Level 3: 词根词缀构词智能推演
 * 3. 供词库查词抽屉 (Lexicon Drawer) 与卡牌研习 (Flashcards) 共享复用
 */
(function() {
  'use strict';

  class EtymologyEngine {
    constructor() {
      this.cache = new Map();
    }

    /**
     * 查询词源核心接口
     * @param {string} word 英文单词
     * @param {boolean} forceOnline 是否强制发起在线全网搜索
     * @returns {Promise<{word: string, found: boolean, etymology: string, level: number, source: string}>}
     */
    async fetchEtymology(word, forceOnline = false) {
      if (!word) return { word: '', found: false, etymology: '单词为空' };
      const cleanWord = word.trim().toLowerCase();
      const cacheKey = `${cleanWord}:${forceOnline ? 'online' : 'offline'}`;

      if (this.cache.has(cacheKey)) {
        return this.cache.get(cacheKey);
      }

      // 0. 优先尝试本地离线 convey 缓存 (0ms)
      if (!forceOnline && window.WORD_CONVEY && window.WORD_CONVEY[cleanWord]) {
        const local = window.WORD_CONVEY[cleanWord];
        const res = {
          word: cleanWord,
          found: true,
          roots: local.roots || '',
          story: local.story || '',
          evolution: local.evolution || '',
          raw_etymology: local.raw_etym || '',
          etymology: local.raw_etym || `${local.roots}\n${local.story}\n${local.evolution}`,
          synonyms: local.synonyms || [],
          zh_def: local.zh_def || '',
          level: 1,
          source: 'Convey Visual Archive (Offline Fast)',
          years: []
        };
        this.cache.set(cacheKey, res);
        return res;
      }

      try {
        const url = `/api/etymology?word=${encodeURIComponent(cleanWord)}${forceOnline ? '&force_online=true' : ''}`;
        const resp = await fetch(url);
        if (!resp.ok) {
          throw new Error(`HTTP ${resp.status}`);
        }
        const data = await resp.json();
        const result = {
          word: cleanWord,
          found: Boolean(data.found && (data.etymology || data.roots)),
          etymology: data.etymology || '',
          roots: data.roots || '',
          story: data.story || '',
          evolution: data.evolution || '',
          raw_etymology: data.raw_etymology || data.etymology || '',
          synonyms: data.synonyms || [],
          zh_def: data.zh_def || '',
          level: data.level || (data.found ? 1 : 0),
          source: data.source || (data.level === 1 ? 'Etymonline Archive' : 'Wiktionary'),
          years: data.years || []
        };

        this.cache.set(cacheKey, result);
        return result;
      } catch (err) {
        console.warn(`[EtymologyEngine] Offline fetch failed for '${cleanWord}', falling back to Wiktionary:`, err);
        // 前端纯离线/跨域降级：尝试直连 Wiktionary API
        if (forceOnline || err.message.includes('HTTP 404') || err.message.includes('Failed to fetch')) {
          return await this._fetchWiktionaryDirect(cleanWord);
        }
        return {
          word: cleanWord,
          found: false,
          etymology: `暂未获取到本地词源记录 (${err.message})`,
          level: 0,
          source: 'Offline Fallback'
        };
      }
    }

    /**
     * 前端直连 Wiktionary 备用通道
     */
    async _fetchWiktionaryDirect(word) {
      try {
        const url = `https://en.wiktionary.org/w/api.php?action=parse&page=${encodeURIComponent(word)}&prop=wikitext&format=json&origin=*`;
        const resp = await fetch(url);
        const data = await resp.json();
        const wikitext = data?.parse?.wikitext?.['*'] || '';
        
        // 匹配 ===Etymology=== 段落
        const etymMatch = wikitext.match(/===Etymology(?:\s*\d+)?===([\s\S]*?)(?=\n===|\n==|$)/i);
        if (etymMatch && etymMatch[1]) {
          const rawEtym = etymMatch[1]
            .replace(/\{\{[^}]+\}\}/g, '')
            .replace(/\[\[(?:[^|\]]*\|)?([^\]]+)\]\]/g, '$1')
            .replace(/'''?/g, '')
            .trim();
          return {
            word,
            found: true,
            etymology: rawEtym,
            level: 2,
            source: 'Wiktionary (Direct Browser API)'
          };
        }
      } catch (e) {
        console.warn('[EtymologyEngine] Wiktionary direct fallback failed:', e);
      }
      return {
        word,
        found: false,
        etymology: '全网与离线库暂未检索到该词的独立词源记录。',
        level: 0,
        source: 'None'
      };
    }

    /**
     * 渲染词源卡片 HTML 模板
     */
    renderEtymologyHtml(data, options = {}) {
      const escape = (str) => String(str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
      if (!data || !data.found) {
        return `
          <div style="background:rgba(239, 68, 68, 0.04); border:1.5px dashed rgba(239, 68, 68, 0.3); border-radius:10px; padding:16px; text-align:center;">
            <div style="font-size:16px; margin-bottom:4px;">🔍</div>
            <div style="font-size:13.5px; font-weight:700; color:var(--text-primary); margin-bottom:4px;">
              本地离线词源库暂未收录「${escape(data?.word || '')}」
            </div>
            <div style="font-size:12px; color:var(--text-secondary); margin-bottom:12px;">
              可发起全网权威在线考据检索：
            </div>
            <button class="btn btn-primary btn-sm" onclick="StoneEtymology.triggerOnlineSearch('${escape(data?.word || '')}', this)">
              🌐 在线检索权威词源 (Wiktionary API)
            </button>
          </div>
        `;
      }

      const badge = data.level === 1
        ? '<span style="background:rgba(34,197,94,0.12); color:#16a34a; border:1px solid rgba(34,197,94,0.3); font-size:11px; padding:2px 8px; border-radius:12px; font-weight:700;">🟢 纯离线秒级库 (Etymonline Archive 4.6万词)</span>'
        : `<span style="background:rgba(59,130,246,0.12); color:#2563eb; border:1px solid rgba(59,130,246,0.3); font-size:11px; padding:2px 8px; border-radius:12px; font-weight:700;">🌐 权威在线扩展 (${escape(data.source)})</span>`;

      const breakdownText = (data.breakdown && data.literal) ? `${data.breakdown} = ${data.literal}` : (data.roots || data.breakdown || '');
      const storyText = data.story || '';
      const chainText = data.chain || data.evolution || '';
      const rawEtymText = data.raw_etymology || data.etymology_raw || data.raw_etym || '';
      const hasConvey = Boolean(breakdownText || storyText || chainText);
      let contentHtml = '';
      if (hasConvey) {
        contentHtml = `
          <div class="stone-convey-card" style="line-height:1.7; font-size:13.5px;">
            ${breakdownText ? `
              <div style="margin-bottom:8px; display:flex; align-items:baseline; gap:8px;">
                <span style="font-size:16px; flex-shrink:0;">🧩</span>
                <div><strong style="color:var(--brand-primary, #4f46e5); font-size:13px;">拆解：</strong><span style="color:var(--text-primary);">${escape(breakdownText)}</span></div>
              </div>
            ` : ''}
            ${storyText ? `
              <div style="margin-bottom:8px; display:flex; align-items:baseline; gap:8px;">
                <span style="font-size:16px; flex-shrink:0;">🎬</span>
                <div><strong style="color:#d97706; font-size:13px;">画面：</strong><span style="color:var(--text-primary);">${escape(storyText)}</span></div>
              </div>
            ` : ''}
            ${chainText ? `
              <div style="margin-bottom:8px; display:flex; align-items:baseline; gap:8px;">
                <span style="font-size:16px; flex-shrink:0;">🔗</span>
                <div><strong style="color:#059669; font-size:13px;">演变：</strong><span style="color:var(--text-primary);">${escape(chainText)}</span></div>
              </div>
            ` : ''}
            ${rawEtymText ? `
              <div style="margin-top:10px; padding-top:8px; border-top:1px dashed var(--paper-border); display:flex; justify-content:flex-end;">
                <button type="button" class="btn btn-link btn-xs" style="font-size:11.5px; color:var(--text-secondary); text-decoration:underline; cursor:pointer; padding:0; background:none; border:none;" onclick="StoneEtymology.toggleRawDetails(this)">
                  <span>查看英文原文 ▸</span>
                </button>
              </div>
              <div class="stone-etym-raw-drawer" style="display:none; margin-top:8px; padding:10px; background:rgba(0,0,0,0.03); border-radius:6px; font-size:12.5px; line-height:1.6; color:var(--text-secondary); font-family:var(--font-serif);">
                ${escape(rawEtymText).split(/\n\n+/).map(p => `<p style="margin-bottom:6px;">${p}</p>`).join('')}
              </div>
            ` : ''}
          </div>
        `;
      } else {
        const paragraphs = (data.etymology || '').split(/\n\n+/).map(p => `<p style="margin-bottom:8px; line-height:1.65; color:var(--text-primary); font-size:13.5px;">${escape(p)}</p>`).join('');
        contentHtml = `<div style="font-family: var(--font-serif); font-size:13.5px;">${paragraphs}</div>`;
      }

      return `
        <div class="stone-etymology-card" style="background:var(--paper-surface-sub); border:1.5px solid var(--paper-border); border-radius:10px; padding:14px; margin-top:10px; text-align:left;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; flex-wrap:wrap; gap:6px;">
            <div style="font-size:12px; font-weight:800; color:var(--brand-primary); text-transform:uppercase; letter-spacing:0.5px;">
              🏛️ 词源考据与历史脉络
            </div>
            ${badge}
          </div>
          ${contentHtml}
        </div>
      `;
    }

    toggleRawDetails(btn) {
      if (!btn) return;
      const card = btn.closest('.stone-convey-card');
      if (!card) return;
      const rawDiv = card.querySelector('.stone-etym-raw-drawer');
      const span = btn.querySelector('span');
      if (!rawDiv) return;
      const isHidden = rawDiv.style.display === 'none' || !rawDiv.style.display;
      rawDiv.style.display = isHidden ? 'block' : 'none';
      if (span) {
        span.textContent = isHidden ? '收起英文原文 ▾' : '查看英文原文 ▸';
      }
    }

    async triggerOnlineSearch(word, btnElement) {
      if (btnElement) {
        btnElement.disabled = true;
        btnElement.textContent = '⏳ 正在全网连线检索...';
      }
      const data = await this.fetchEtymology(word, true);
      const container = btnElement?.closest('.stone-etymology-container') || btnElement?.parentElement;
      if (container) {
        container.innerHTML = this.renderEtymologyHtml(data);
      }
    }
  }

  const engine = new EtymologyEngine();
  window.StoneEtymology = engine;

  // 挂载到词库模块
  if (window.StoneLexicon) {
    window.StoneLexicon.fetchEtymology = (word, forceOnline) => engine.fetchEtymology(word, forceOnline);
    window.StoneLexicon.renderEtymologyHtml = (data, opts) => engine.renderEtymologyHtml(data, opts);
  }

  console.info('[LexiconModule] Etymology sub-engine loaded successfully.');
})();
