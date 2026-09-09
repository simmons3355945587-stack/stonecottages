let stoneLookupSequence=0;
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
      if(currentLookupWord)fetchZhDefinition(corrections[currentLookupWord]||currentLookupWord,chineseDict[currentLookupWord]||'');
    } else {
      tabEn.classList.add('active');
      tabZh.classList.remove('active');
      bodyEn.style.display = 'block';
      bodyZh.style.display = 'none';
      if(currentLookupWord)fetchStoneEnglish(currentLookupWord);
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
        let cn = (chineseDict[w] || '').replace(/\(考纲词汇\)|（考纲词汇）/g, '').trim();
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
  // 不再调用 soundClick()，防止短促提示音干扰单词首音节
  const requestSequence=++stoneLookupSequence;
  const safeWord = word.toLowerCase().trim();
 if(!CORE_STUDY_WORDS.includes(safeWord)){try{await Stone.script('extra-definitions.js');}catch{}}
  if(requestSequence!==stoneLookupSequence)return;
  const lookup = corrections[safeWord] || safeWord;
  currentLookupWord = safeWord;
  speakWord(lookup);

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
          <button class="word-audio-btn" id="dictAudioBtn" style="font-size:20px; color:var(--brand-accent);" onclick="speakWord('${escapeHtml(lookup)}', event, this)" title="[Space] 朗读发音">🔊</button>
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
    <div class="stone-original-mark" style="background: var(--paper-surface-sub); border:1.5px solid var(--paper-border); border-radius:var(--radius-md); padding:14px 16px; display:flex; justify-content:space-between; align-items:center;">
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
  if(currentDrawerDictTab==='zh')fetchZhDefinition(lookup, commonZh);

  if(currentDrawerDictTab==='en')fetchStoneEnglish(safeWord);
}

async function fetchStoneEnglish(safeWord){
  const lookup=corrections[safeWord]||safeWord;
  const cambridgeUrl=`https://dictionary.cambridge.org/dictionary/english/${encodeURIComponent(lookup)}`;
  const collinsUrl=`https://www.collinsdictionary.com/dictionary/english/${encodeURIComponent(lookup)}`;
  const merriamUrl=`https://www.merriam-webster.com/dictionary/${encodeURIComponent(lookup)}`;
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
      const resp = await Stone.dictResponse(apiUrl);
      if(currentLookupWord!==safeWord)return;
      if (resp.ok) {
        const d = await resp.json();
        entry = Array.isArray(d) ? d[0] : d;
        if (entry && (entry.meanings || entry.definitions)) break;
      }
    } catch(e) {}
  }

  if(currentLookupWord!==safeWord)return;
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
    const resp = await Stone.dictResponse(`${API_BASE}/api/dict-zh/${encodeURIComponent(word)}`);
    if((corrections[currentLookupWord]||currentLookupWord)!==word)return;
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
    const resp = await Stone.dictResponse(`https://dict.youdao.com/suggest?num=1&doctype=json&q=${encodeURIComponent(word)}`);
    if((corrections[currentLookupWord]||currentLookupWord)!==word)return;
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

async function handleOnlineSearchAndAdd(rawWord) {
  if (!rawWord || !rawWord.trim()) return;
  const safeWord = rawWord.trim().toLowerCase();

  const modal = document.getElementById('onlineAddModal');
  if (!modal) return;
  modal.style.display = 'flex';

  document.getElementById('onlineModalWordText').textContent = safeWord;
  document.getElementById('onlineModalPhonetic').textContent = '正在连接权威词典...';
  const defInput = document.getElementById('onlineModalDefInput');
  defInput.value = '';
  defInput.placeholder = '正在连线词典获取地道中文释义...';
  const enBox = document.getElementById('onlineModalEnMeaningBox');
  enBox.style.display = 'none';
  enBox.innerHTML = '';
  const confirmBtn = document.getElementById('onlineModalConfirmBtn');
  if (confirmBtn) confirmBtn.disabled = true;

  // 自动播放真人发音
  speakWord(safeWord);

  let zhDef = '';
  let phonetic = '';
  let enMeaning = '';

  // 1. 优先调用有道词典 Suggest 接口 (快速获取简明权威中文释义)
  try {
    const resp = await fetch(`https://dict.youdao.com/suggest?num=1&doctype=json&q=${encodeURIComponent(safeWord)}`);
    if (resp.ok) {
      const data = await resp.json();
      const entries = data?.data?.entries || [];
      if (entries.length > 0 && entries[0].explain) {
        zhDef = entries[0].explain.trim();
      }
    }
  } catch(e) {
    console.warn("Youdao suggest lookup error:", e);
  }

  // 2. 尝试本地后端代理接口 (若有)
  if (!zhDef && API_BASE) {
    try {
      const resp = await fetch(`${API_BASE}/api/dict-zh/${encodeURIComponent(safeWord)}`);
      if (resp.ok) {
        const data = await resp.json();
        if (data && data.definitions && data.definitions.length > 0) {
          zhDef = data.definitions.join('; ');
          if (data.phonetic_us) phonetic = `/${data.phonetic_us}/`;
        }
      }
    } catch(e) {}
  }

  // 3. 尝试 Free Dictionary API (获取音标与英文释义，3秒限时)
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);
    const resp = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(safeWord)}`, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (resp.ok) {
      const data = await resp.json();
      const entry = Array.isArray(data) ? data[0] : data;
      if (entry) {
        if (!phonetic && (entry.phonetic || (entry.phonetics && entry.phonetics[0] && entry.phonetics[0].text))) {
          phonetic = entry.phonetic || entry.phonetics[0].text;
        }
        if (entry.meanings && entry.meanings[0] && entry.meanings[0].definitions && entry.meanings[0].definitions[0]) {
          const pos = entry.meanings[0].partOfSpeech || '';
          const d = entry.meanings[0].definitions[0].definition || '';
          enMeaning = `${pos ? `(${pos}) ` : ''}${d}`;
        }
      }
    }
  } catch(e) {}

  pendingOnlineWordData = {
    word: safeWord,
    zh: zhDef,
    phonetic: phonetic,
    enMeaning: enMeaning
  };

  document.getElementById('onlineModalPhonetic').textContent = phonetic || '/在线发音可用/';
  defInput.value = zhDef;
  defInput.placeholder = '请输入该词中文释义 (支持自由修改)...';
  if (confirmBtn) confirmBtn.disabled = false;

  if (enMeaning) {
    enBox.style.display = 'block';
    enBox.innerHTML = `<strong>📖 英文权威释义：</strong>${escapeHtml(enMeaning)}`;
  }
}

function closeOnlineAddModal(e) {
  const modal = document.getElementById('onlineAddModal');
  if (modal) modal.style.display = 'none';
  pendingOnlineWordData = null;
}

function confirmAddOnlineWord() {
  if (!pendingOnlineWordData) return;
  const word = pendingOnlineWordData.word;
  const defInput = document.getElementById('onlineModalDefInput');
  const zh = (defInput ? defInput.value.trim() : '') || pendingOnlineWordData.zh || '暂无释义';
  const shouldMark = document.getElementById('onlineModalMarkCheckbox') ? document.getElementById('onlineModalMarkCheckbox').checked : true;

  // 1. 持久化自定义中文释义
  customChineseDict[word] = zh;
  chineseDict[word] = zh;
  saveToStorage(STORAGE_KEYS.CUSTOM_CHINESE, customChineseDict);

  // 2. 存入自定义生词库与当前词库
  if (!customWords.includes(word)) {
    customWords.unshift(word);
    saveToStorage(STORAGE_KEYS.CUSTOM_WORDS, customWords);
  }
  if (!words.includes(word)) {
    words.unshift(word);
    saveToStorage(STORAGE_KEYS.WORDS, words);
  }

  // 3. 增加 Mark 标记数
  if (shouldMark) {
    marks[word] = (marks[word] || 0) + 1;
    saveToStorage(STORAGE_KEYS.MARKS, marks);
  }

  // 4. 同步至云端用户账号
  triggerCloudSync();

  // 5. 刷新视图并打开详情
  closeOnlineAddModal();
  updateBadges();
  renderWords(word);
  showToast(`✨ 生词「${word}」已成功录入词库并同步至账号 (★ Mark: ${marks[word] || 0})！`);
  openWordDetails(word);
}