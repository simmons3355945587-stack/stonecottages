// ==========================================
// Our Stone Cottages - 2.5D Sanctuary & Local Journal Module
// ==========================================

var COTTAGE_STORAGE_KEY = 'cottage-journal';
var cottageJournalTimer = null;
var cottageWarmthState = true;
var cottageHintsState = true;
var isCottageExterior = false;

// 1. 视点切换 (室内 / 室外)
function toggleCottagePerspective(forceInterior = false) {
  if (forceInterior) {
    isCottageExterior = false;
  } else {
    isCottageExterior = !isCottageExterior;
  }

  const baseSource = document.getElementById('cottageBaseSource');
  const baseImg = document.getElementById('cottageBaseImg');
  const interiorLayers = document.getElementById('cottageInteriorLayers');
  const exteriorLayers = document.getElementById('cottageExteriorLayers');
  const locLabel = document.getElementById('cottageLocationLabel');
  const btnPerspText = document.getElementById('cottagePerspectiveText');
  const btnPerspIcon = document.getElementById('cottagePerspectiveIcon');
  const footnote = document.getElementById('cottageSceneFootnote');
  const scene = document.getElementById('cottageScene');

  if (isCottageExterior) {
    if (baseSource) baseSource.srcset = '/assets/cottage-exterior.webp';
    if (baseImg) {
      baseImg.src = '/assets/cottage-exterior.png';
      baseImg.alt = '小石屋灰石外观';
    }
    if (interiorLayers) interiorLayers.style.display = 'none';
    if (exteriorLayers) exteriorLayers.style.display = 'flex';
    if (locLabel) locLabel.textContent = '石阶前 · 屋外';
    if (btnPerspText) btnPerspText.textContent = '回到屋内';
    if (btnPerspIcon) btnPerspIcon.textContent = '🏠';
    if (footnote) footnote.textContent = '小石屋 / 室外外观 · 牛首山花与石阶';
    if (scene) {
      scene.classList.remove('interior');
      scene.classList.add('exterior');
    }
  } else {
    if (baseSource) baseSource.srcset = '/assets/cottage-interior.webp';
    if (baseImg) {
      baseImg.src = '/assets/cottage-interior.png';
      baseImg.alt = '小石屋等轴剖切内景';
    }
    if (interiorLayers) interiorLayers.style.display = 'block';
    if (exteriorLayers) exteriorLayers.style.display = 'none';
    if (locLabel) locLabel.textContent = '炉火旁 · 室内';
    if (btnPerspText) btnPerspText.textContent = '去屋外看看';
    if (btnPerspIcon) btnPerspIcon.textContent = '🌲';
    if (footnote) footnote.textContent = '小石屋 / 室内剖切等轴视角 · 炉边微暖';
    if (scene) {
      scene.classList.remove('exterior');
      scene.classList.add('interior');
    }
  }
  if (typeof soundClick === 'function') soundClick();
}

// 2. 壁炉暖光与理智抚慰
function toggleCottageWarmth() {
  cottageWarmthState = !cottageWarmthState;
  const glow = document.getElementById('cottageFireGlow');
  const btnText = document.getElementById('cottageWarmthText');
  if (glow) {
    glow.style.opacity = cottageWarmthState ? '1' : '0.05';
  }
  if (btnText) {
    btnText.textContent = cottageWarmthState ? '暖光已开启' : '暖光已调暗';
  }
  if (typeof showToast === 'function') {
    showToast(cottageWarmthState ? '🔥 炉边暖光已点亮 · 理智值缓慢恢复' : '🌙 炉火已调至静夜微光');
  }
  if (typeof soundClick === 'function') soundClick();
}

// 3. 互动热点提示开关
function toggleCottageHints() {
  cottageHintsState = !cottageHintsState;
  const scene = document.getElementById('cottageScene');
  const btnText = document.getElementById('cottageHintsText');
  if (scene) {
    scene.classList.toggle('show-hints', cottageHintsState);
  }
  if (btnText) {
    btnText.textContent = cottageHintsState ? '提示已开' : '提示已关';
  }
  if (typeof soundClick === 'function') soundClick();
}

// 4. 小石屋书桌手记与荒原远征编年史
function switchJournalTab(tabName) {
  if (typeof soundClick === 'function') soundClick();
  const tabExpeditionBtn = document.getElementById('btnJournalTabExpedition');
  const tabNotesBtn = document.getElementById('btnJournalTabNotes');
  const viewExpedition = document.getElementById('journalViewExpedition');
  const viewNotes = document.getElementById('journalViewNotes');

  if (tabName === 'expedition') {
    if (tabExpeditionBtn) tabExpeditionBtn.classList.add('active');
    if (tabNotesBtn) tabNotesBtn.classList.remove('active');
    if (viewExpedition) viewExpedition.style.display = 'block';
    if (viewNotes) viewNotes.style.display = 'none';
    renderExpeditionChroniclesView();
  } else {
    if (tabExpeditionBtn) tabExpeditionBtn.classList.remove('active');
    if (tabNotesBtn) tabNotesBtn.classList.add('active');
    if (viewExpedition) viewExpedition.style.display = 'none';
    if (viewNotes) viewNotes.style.display = 'block';
  }
}

function renderExpeditionChroniclesView() {
  const container = document.getElementById('chroniclesScrollContainer');
  if (!container) return;

  const data = (typeof ExpeditionEngine !== 'undefined' && typeof ExpeditionEngine.getChronicles === 'function')
    ? ExpeditionEngine.getChronicles()
    : { stats: { totalRuns: 0, victories: 0, evacuations: 0, collapses: 0, totalGoldEarned: 0 }, history: [] };

  const stats = data.stats || {};
  const history = data.history || [];

  const runEl = document.getElementById('chroniclesTotalRuns');
  const vicEl = document.getElementById('chroniclesVictories');
  const evacEl = document.getElementById('chroniclesEvacuations');
  const goldEl = document.getElementById('chroniclesTotalGold');

  if (runEl) runEl.textContent = `${stats.totalRuns || 0} 次`;
  if (vicEl) vicEl.textContent = `${stats.victories || 0} 次`;
  if (evacEl) evacEl.textContent = `${stats.evacuations || 0} 次`;
  if (goldEl) goldEl.textContent = `+${stats.totalGoldEarned || 0} G`;

  if (history.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:30px 10px; color:var(--text-secondary);">
        <div style="font-size:36px; margin-bottom:8px;">📜</div>
        <div style="font-weight:700; font-size:14px; color:var(--text-primary); margin-bottom:4px;">荒原手记暂无出征记录</div>
        <div style="font-size:12px;">前往石屋出征祭坛推门踏上荒原，你的每一次涉险与凯旋都将铭刻于此。</div>
      </div>
    `;
    return;
  }

  container.innerHTML = history.map((item, idx) => {
    const isVic = item.outcomeType === 'completed';
    const isEvac = item.outcomeType === 'evacuated';
    const isDef = item.outcomeType === 'defeated';
    const badgeColor = isVic ? 'var(--brand-accent)' : (isEvac ? 'var(--brand-success)' : '#64748b');
    const badgeText = isVic ? '👑 领主大捷' : (isEvac ? '⛺ 战术撤退' : '❄️ 绝境迷失');
    const errors = Array.isArray(item.recentErrors) ? item.recentErrors : [];
    const dateStr = item.date ? new Date(item.date).toLocaleDateString() + ' ' + new Date(item.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '近期远征';

    return `
      <div class="chronicle-card" style="background:var(--paper-surface-sub); border:1px solid var(--paper-border); border-radius:var(--radius-md); padding:12px 14px; margin-bottom:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="font-size:11.5px; font-weight:800; background:rgba(0,0,0,0.06); color:${badgeColor}; border:1px solid ${badgeColor}; padding:2px 8px; border-radius:12px;">
              ${badgeText}
            </span>
            <span style="font-size:12px; font-weight:700; color:var(--text-primary);">
              突破 ${item.beatsCleared || 0} / ${item.totalBeats || 7} 节点
            </span>
          </div>
          <span style="font-size:11px; color:var(--text-secondary); font-family:var(--font-mono);">
            ${dateStr}
          </span>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px; margin-bottom:${errors.length > 0 ? '8px' : '0'};">
          <span style="color:var(--text-secondary);">${typeof escapeHtml === 'function' ? escapeHtml(item.summaryMsg || '') : (item.summaryMsg || '')}</span>
          <span style="font-weight:700; color:var(--brand-accent);">
            +${item.goldEarned || 0} Gold · +${item.xpEarned || 0} XP
          </span>
        </div>

        ${errors.length > 0 ? `
          <div style="border-top:1px dashed var(--paper-border); padding-top:8px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
            <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
              <span style="font-size:11px; color:var(--brand-danger); font-weight:700;">待复盘生词:</span>
              ${errors.map(err => `
                <span style="background:var(--paper-surface); border:1px solid var(--paper-border); border-radius:4px; padding:1px 6px; font-size:11px; color:var(--text-primary);">
                  ${typeof escapeHtml === 'function' ? escapeHtml(typeof err === 'string' ? err : err.word) : (typeof err === 'string' ? err : err.word)}
                </span>
              `).join('')}
            </div>
            <button type="button" class="btn btn-secondary btn-xs" style="font-size:11px; padding:2px 8px;" onclick="closeCottageJournalModal(); startSafeStudyWithErrors(${JSON.stringify(errors.map(e => typeof e === 'string' ? e : e.word)).replace(/"/g, '&quot;')})">
              📚 书架研习 (0扣血)
            </button>
          </div>
        ` : ''}
      </div>
    `;
  }).join('');
}

function openCottageJournalModal() {
  if (typeof soundClick === 'function') soundClick();
  const modal = document.getElementById('cottageJournalModal');
  const overlay = document.getElementById('drawerOverlay');
  const textarea = document.getElementById('cottageJournalText');
  const charCount = document.getElementById('cottageJournalCharCount');
  const saveTime = document.getElementById('cottageJournalSaveTime');

  if (textarea) {
    let saved = '';
    try {
      saved = localStorage.getItem(COTTAGE_STORAGE_KEY) || '';
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    textarea.value = saved;
    if (charCount) charCount.textContent = `${saved.length} 字`;
    if (saveTime) saveTime.textContent = saved ? '已读取本地存档' : '尚未保存新内容';
  }

  switchJournalTab('expedition');

  if (modal) {
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('show'), 10);
  }
  if (overlay) overlay.classList.add('open');
}

function closeCottageJournalModal() {
  if (typeof soundClick === 'function') soundClick();
  const modal = document.getElementById('cottageJournalModal');
  const overlay = document.getElementById('drawerOverlay');
  const textarea = document.getElementById('cottageJournalText');
  if (textarea) {
    try {
      localStorage.setItem(COTTAGE_STORAGE_KEY, textarea.value);
    } catch (e) {}
  }
  if (modal) {
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 200);
  }
  if (overlay) overlay.classList.remove('open');
}

function onCottageJournalInput(text) {
  const charCount = document.getElementById('cottageJournalCharCount');
  const saveStatus = document.getElementById('cottageJournalSaveStatus');
  const saveTime = document.getElementById('cottageJournalSaveTime');
  if (charCount) charCount.textContent = `${text.length} 字`;
  if (saveStatus) {
    saveStatus.textContent = '... 正在保存';
    saveStatus.style.color = 'var(--brand-accent)';
  }

  clearTimeout(cottageJournalTimer);
  cottageJournalTimer = setTimeout(() => {
    try {
      localStorage.setItem(COTTAGE_STORAGE_KEY, text);
      if (saveStatus) {
        saveStatus.textContent = '● 已自动保存在本机 (0主机缓存)';
        saveStatus.style.color = 'var(--brand-success)';
      }
      if (saveTime) {
        saveTime.textContent = '保存于 ' + new Date().toLocaleTimeString();
      }
    } catch (err) {
      if (saveStatus) {
        saveStatus.textContent = '⚠️ 本地保存受阻，请导出备份';
        saveStatus.style.color = 'var(--brand-danger)';
      }
    }
  }, 300);
}

// 纯客户端导出：0 字节经过网络，0 字节占用主机
function exportCottageJournal(format = 'md') {
  if (typeof soundClick === 'function') soundClick();
  let text = '';
  try {
    text = localStorage.getItem(COTTAGE_STORAGE_KEY) || '';
  } catch (e) {}

  if (!text.trim()) {
    if (typeof showToast === 'function') showToast('手记暂无内容，请先写下些许文字再导出');
    return;
  }

  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10);
  const timeStr = now.toLocaleTimeString();
  let fileContent = '';
  let mimeType = 'text/plain;charset=utf-8';
  let ext = format === 'md' ? 'md' : 'txt';

  if (format === 'md') {
    mimeType = 'text/markdown;charset=utf-8';
    fileContent = `# 小石屋手记 (Our Stone Cottages Journal)

` +
      `- 记录时间：${dateStr} ${timeStr}
` +
      `- 字数统计：${text.length} 字
` +
      `- 存储说明：本文件由小石屋浏览器本地导出，未上传任何云端服务器。

` +
      `---

` +
      `${text}
`;
  } else {
    fileContent = `【小石屋手记】
导出时间：${dateStr} ${timeStr}
总字数：${text.length} 字
--------------------

${text}
`;
  }

  const blob = new Blob([fileContent], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `小石屋手记_${dateStr}.${ext}`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);

  if (typeof showToast === 'function') {
    showToast(`📥 手记已成功导出至本机 (${ext.toUpperCase()})`);
  }
}

function clearCottageJournal() {
  if (typeof soundClick === 'function') soundClick();
  const current = localStorage.getItem(COTTAGE_STORAGE_KEY) || '';
  if (!current.trim()) {
    if (typeof showToast === 'function') showToast('当前手记已经是空的');
    return;
  }
  if (!confirm('确定要清空本机手记内容吗？建议在清空前点击“导出 Markdown”进行备份。')) {
    return;
  }
  try {
    localStorage.removeItem(COTTAGE_STORAGE_KEY);
  } catch (e) {}
  const textarea = document.getElementById('cottageJournalText');
  if (textarea) textarea.value = '';
  const charCount = document.getElementById('cottageJournalCharCount');
  if (charCount) charCount.textContent = '0 字';
  const saveStatus = document.getElementById('cottageJournalSaveStatus');
  if (saveStatus) {
    saveStatus.textContent = '● 已清空';
    saveStatus.style.color = 'var(--text-secondary)';
  }
  if (typeof showToast === 'function') showToast('🗑️ 本机手记已清空');
}

// 5. 关于小石屋模态框
function openCottageAboutModal() {
  if (typeof soundClick === 'function') soundClick();
  const modal = document.getElementById('cottageAboutModal');
  const overlay = document.getElementById('drawerOverlay');
  if (modal) {
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('show'), 10);
  }
  if (overlay) overlay.classList.add('open');
}

function closeCottageAboutModal() {
  if (typeof soundClick === 'function') soundClick();
  const modal = document.getElementById('cottageAboutModal');
  const overlay = document.getElementById('drawerOverlay');
  if (modal) {
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 200);
  }
  if (overlay) overlay.classList.remove('open');
}

// 6. 炉边理智抚慰被动心跳 (在石屋停留且开启暖光时，每 25 秒小幅抚慰理智值 SAN +1，不超过 100)
setInterval(() => {
  try {
    const isCottageActive = document.getElementById('viewCottage')?.classList.contains('active');
    if (isCottageActive && cottageWarmthState && typeof playerProfile !== 'undefined' && playerProfile) {
      if (playerProfile.san < 100) {
        playerProfile.san = Math.min(100, playerProfile.san + 1);
        if (typeof updateBadges === 'function') updateBadges();
      }
    }
  } catch (e) {}
}, 25000);

// 7. 手机端智能自动横屏与方向管理
var COTTAGE_ORIENTATION_KEY = 'cottage-orientation-pref';
var cottageOrientationPref = 'auto';
try {
  cottageOrientationPref = localStorage.getItem(COTTAGE_ORIENTATION_KEY) || 'auto';
} catch (e) {}

function initCottageOrientation() {
  if (cottageOrientationPref === 'portrait') {
    document.body.classList.add('cottage-portrait-mode');
  } else {
    document.body.classList.remove('cottage-portrait-mode');
  }
  updateCottageOrientationUI();
}

function toggleCottageOrientation() {
  const isPortraitNow = document.body.classList.toggle('cottage-portrait-mode');
  cottageOrientationPref = isPortraitNow ? 'portrait' : 'auto';
  try {
    localStorage.setItem(COTTAGE_ORIENTATION_KEY, cottageOrientationPref);
  } catch (e) {}
  updateCottageOrientationUI();
  if (typeof soundClick === 'function') soundClick();
  if (typeof showToast === 'function') {
    showToast(isPortraitNow ? '📱 已切换为竖屏模式' : '🔄 已开启智能横屏模式 · 放大 2.2 倍');
  }
}

function updateCottageOrientationUI() {
  const isPortrait = document.body.classList.contains('cottage-portrait-mode');
  const btnText = document.getElementById('cottageOrientationText');
  const btnIcon = document.getElementById('cottageOrientationIcon');
  const btn = document.getElementById('btnCottageOrientation');
  if (btnText) {
    btnText.textContent = isPortrait ? '竖屏' : '横屏';
  }
  if (btnIcon) {
    btnIcon.textContent = isPortrait ? '📱' : '🔄';
  }
  if (btn) {
    btn.title = isPortrait ? '当前为竖屏浏览，点击切换为横屏放大' : '当前为智能横屏，点击切换为竖屏';
  }
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCottageOrientation);
  } else {
    initCottageOrientation();
  }
}

// ==========================================
// 8. 石屋出征整备祭坛 (Expedition Prep Altar)
// ==========================================
var currentExpeditionScope = (typeof loadFromStorage === 'function')
  ? loadFromStorage('vocab_expedition_scope', { wordSource: 'core', markedOnly: false })
  : { wordSource: 'core', markedOnly: false };

function getExpeditionScopeMarkedCount(sourceKey) {
  const rawWords = (typeof getSourceRawWords === 'function') ? getSourceRawWords(sourceKey) : [];
  const marksMap = (typeof marks !== 'undefined' && marks) ? marks : {};
  return rawWords.filter(w => (marksMap[w.toLowerCase()] || 0) > 0).length;
}

function setExpeditionPrepScope(sourceKey) {
  if (typeof soundClick === 'function') soundClick();
  currentExpeditionScope.wordSource = sourceKey;
  if (typeof saveToStorage === 'function') {
    saveToStorage('vocab_expedition_scope', currentExpeditionScope);
  }
  if (typeof document !== 'undefined') {
    const modal = document.getElementById('expeditionPrepModal');
    if (modal) renderExpeditionPrepContent(modal);
  }
}

function toggleExpeditionPrepMarkedOnly(checked) {
  if (typeof soundClick === 'function') soundClick();
  currentExpeditionScope.markedOnly = !!checked;
  if (typeof saveToStorage === 'function') {
    saveToStorage('vocab_expedition_scope', currentExpeditionScope);
  }
  if (typeof document !== 'undefined') {
    const modal = document.getElementById('expeditionPrepModal');
    if (modal) renderExpeditionPrepContent(modal);
  }
}

function openExpeditionPrepModal() {
  if (typeof soundClick === 'function') soundClick();
  if (typeof ensureBattleHand === 'function') ensureBattleHand();
  
  let modal = document.getElementById('expeditionPrepModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'expeditionPrepModal';
    modal.className = 'modal-box';
    modal.style.cssText = 'max-width: 620px; max-height: 88vh; overflow-y: auto; padding: 22px; z-index: 10000;';
    document.body.appendChild(modal);
  }

  renderExpeditionPrepContent(modal);
  modal.style.display = 'block';
  setTimeout(() => modal.style.opacity = '1', 10);
  const overlay = document.getElementById('drawerOverlay');
  if (overlay) overlay.classList.add('open');
}

function closeExpeditionPrepModal() {
  const modal = document.getElementById('expeditionPrepModal');
  if (modal) {
    modal.style.opacity = '0';
    setTimeout(() => modal.style.display = 'none', 200);
  }
  const overlay = document.getElementById('drawerOverlay');
  if (overlay) overlay.classList.remove('open');
}

function renderExpeditionPrepContent(modalEl) {
  const profile = (typeof playerProfile !== 'undefined' && playerProfile) ? playerProfile : { hp: 100, san: 100, gold: 100, battleHand: [] };
  if (!Array.isArray(profile.battleHand) || profile.battleHand.length === 0) {
    profile.battleHand = ['The Magician', 'The Hermit', 'Death'];
    if (typeof playerProfile !== 'undefined' && playerProfile) {
      playerProfile.battleHand = [...profile.battleHand];
    }
  }
  const handCards = (profile.battleHand || []).map(c => typeof getCardObject === 'function' ? getCardObject(c) : null).filter(Boolean);
  const session = (typeof ExpeditionEngine !== 'undefined' && ExpeditionEngine.getSession()) ? ExpeditionEngine.getSession() : null;
  const inProgress = session && session.status === 'in_progress';
  
  const handSlotsHtml = [0, 1, 2].map(slotIdx => {
    const c = handCards[slotIdx];
    if (c) {
      return `
        <div style="background:var(--paper-surface-sub); border:1.5px solid var(--brand-primary); border-radius:var(--radius-md); padding:8px 10px; text-align:center;">
          <div style="font-size:9.5px; color:var(--text-secondary);">槽位 ${slotIdx + 1}</div>
          <div style="font-size:18px; margin:2px 0;">${c.icon}</div>
          <div style="font-weight:800; font-size:12px; color:var(--text-primary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${escapeHtml(c.arcana || c.word)}</div>
          <div style="font-size:10.5px; color:var(--brand-primary); font-weight:700;">${escapeHtml(c.skill)}</div>
        </div>
      `;
    } else {
      return `
        <div style="background:var(--paper-surface-sub); border:1.5px dashed var(--paper-border); border-radius:var(--radius-md); padding:8px 10px; text-align:center; opacity:0.6;">
          <div style="font-size:9.5px; color:var(--text-secondary);">槽位 ${slotIdx + 1}</div>
          <div style="font-size:18px; margin:2px 0;">➕</div>
          <div style="font-size:11px; color:var(--text-secondary);">空置</div>
        </div>
      `;
    }
  }).join('');

  const sourceLabels = {
    core: '📖 核心背诵 (480词)',
    novel_ihopethisfindsyouwell: '📚 职场原著 (49词)',
    trade_business: '💼 外贸函电 (147词)',
    all: '🌐 全部总库 (全量)'
  };
  const shortSourceLabels = {
    core: '核心背诵',
    novel_ihopethisfindsyouwell: '职场原著',
    trade_business: '外贸函电',
    all: '全部词库'
  };

  const currSource = (currentExpeditionScope && currentExpeditionScope.wordSource) ? currentExpeditionScope.wordSource : 'core';
  const markedOnly = !!(currentExpeditionScope && currentExpeditionScope.markedOnly);
  const scopeMarkedCount = getExpeditionScopeMarkedCount(currSource);
  const totalMarked = (typeof getMarkedWords === 'function') ? getMarkedWords().length : 0;

  modalEl.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1.5px solid var(--paper-border); padding-bottom:12px; margin-bottom:14px;">
      <div style="display:flex; align-items:center; gap:10px;">
        <span style="font-size:26px;">⚔️</span>
        <div>
          <div style="font-weight:900; font-size:17px; color:var(--text-primary);">出征祭坛 · 探险整备 (Expedition Altar)</div>
          <div style="font-size:11.5px; color:var(--text-secondary); margin-top:2px;">锁定词库考纲与策略手牌，推门踏上荒原挑战</div>
        </div>
      </div>
      <button class="btn btn-secondary" style="font-size:11px; padding:2px 8px;" onclick="closeExpeditionPrepModal()">✕ 关闭</button>
    </div>

    <!-- 0. 未完成远征断点提示 (断点续玩高亮) -->
    ${inProgress ? `
      <div style="background: rgba(99, 102, 241, 0.08); border: 1.5px solid var(--brand-primary); border-radius: var(--radius-md); padding: 12px 14px; margin-bottom: 14px; display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap;">
        <div>
          <div style="font-weight: 800; font-size: 13.5px; color: var(--brand-primary); display: flex; align-items: center; gap: 6px;">
            <span>🚪</span> <span>检测到未完成的远征断点！</span>
          </div>
          <div style="font-size: 11.5px; color: var(--text-secondary); margin-top: 3px;">
            当前进度：已突破 ${(session.clearedNodeIds || []).length} / ${(session.nodes || []).length} 节点 · 随身收益 🪙 +${session.goldEarned || 0} G / ✦ +${session.xpEarned || 0} XP
          </div>
        </div>
        <button class="btn btn-secondary btn-sm" style="font-size: 11px; padding: 4px 10px; color: var(--brand-accent); border-color: var(--brand-accent); font-weight: 700;" onclick="abandonAndEvacuateFromAltar()">
          ⛺ 战术结算返程
        </button>
      </div>
    ` : ''}

    <!-- 1. 远征考纲与词库范围设置 (选取词库范围并可勾选只挑战 mark 词) -->
    ${inProgress ? `
      <div style="background:var(--paper-surface-sub); border:1.5px solid var(--brand-primary); border-radius:var(--radius-md); padding:12px 14px; margin-bottom:14px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
          <span style="font-size:11px; font-weight:800; color:var(--brand-primary);">🔒 本轮远征已锁定考纲</span>
          <span class="origami-chip" style="background:var(--brand-primary); color:#fff; font-size:10px; padding:2px 8px; border-radius:10px;">
            ${shortSourceLabels[(session.config && session.config.wordSource) || 'core'] || '核心背诵'} ${session.config && session.config.markedOnly ? '· ★ Mark生词' : ''}
          </span>
        </div>
        <div style="font-size:13.5px; font-weight:800; color:var(--text-primary); margin-bottom:3px;">
          ${sourceLabels[(session.config && session.config.wordSource) || 'core'] || '核心背诵'} ${session.config && session.config.markedOnly ? '· ⭐ 仅挑战生词本' : '· 🌲 全库探索'}
        </div>
        <div style="font-size:11.5px; color:var(--text-secondary); line-height:1.5;">
          远征推进中（第 ${(session.clearedNodeIds || []).length + 1} 节点），单词考纲范围已固化锁定。中途可随时【战术结算返程】或通关后开启新范围。
        </div>
      </div>
    ` : `
      <div style="background:var(--paper-surface-sub); border:1.5px solid var(--paper-border); border-radius:var(--radius-md); padding:14px; margin-bottom:14px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <div style="display:flex; align-items:center; gap:6px;">
            <span style="font-size:16px;">🎯</span>
            <span style="font-size:13px; font-weight:800; color:var(--text-primary);">出征考纲与词库范围</span>
          </div>
          <span class="origami-chip" style="background:var(--brand-accent); color:#fff; font-size:10px; padding:2px 8px; border-radius:10px;">
            7 节点分支拓扑
          </span>
        </div>

        <!-- 词库范围单选按钮组 (4格) -->
        <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:8px; margin-bottom:10px;">
          <button type="button" class="btn ${currSource === 'core' ? 'btn-primary' : 'btn-secondary'}" style="height:36px; font-size:11.5px; font-weight:700; display:flex; align-items:center; justify-content:center; gap:4px; padding:0 6px;" onclick="setExpeditionPrepScope('core')">
            📖 核心背诵 (480词)
          </button>
          <button type="button" class="btn ${currSource === 'novel_ihopethisfindsyouwell' ? 'btn-primary' : 'btn-secondary'}" style="height:36px; font-size:11.5px; font-weight:700; display:flex; align-items:center; justify-content:center; gap:4px; padding:0 6px;" onclick="setExpeditionPrepScope('novel_ihopethisfindsyouwell')">
            📚 职场原著 (49词)
          </button>
          <button type="button" class="btn ${currSource === 'trade_business' ? 'btn-primary' : 'btn-secondary'}" style="height:36px; font-size:11.5px; font-weight:700; display:flex; align-items:center; justify-content:center; gap:4px; padding:0 6px;" onclick="setExpeditionPrepScope('trade_business')">
            💼 外贸函电 (147词)
          </button>
          <button type="button" class="btn ${currSource === 'all' ? 'btn-primary' : 'btn-secondary'}" style="height:36px; font-size:11.5px; font-weight:700; display:flex; align-items:center; justify-content:center; gap:4px; padding:0 6px;" onclick="setExpeditionPrepScope('all')">
            🌐 全部总库 (全量)
          </button>
        </div>

        <!-- 勾选只挑战 mark 词 -->
        <div style="background:var(--paper-surface); border:1.5px solid ${markedOnly ? 'var(--brand-accent)' : 'var(--paper-border)'}; border-radius:var(--radius-sm); padding:8px 12px; display:flex; align-items:center; justify-content:space-between; gap:10px;">
          <label style="display:flex; align-items:center; gap:8px; cursor:pointer; font-size:12px; font-weight:800; color:var(--text-primary); margin:0; user-select:none;">
            <input type="checkbox" id="chkExpeditionMarkedOnly" ${markedOnly ? 'checked' : ''} onchange="toggleExpeditionPrepMarkedOnly(this.checked)" style="width:16px; height:16px; accent-color:var(--brand-accent); cursor:pointer;">
            <span>⭐ 仅挑战生词本 (只出 Mark 重点词)</span>
          </label>
          <span style="font-size:11px; font-weight:800; color:${scopeMarkedCount > 0 ? 'var(--brand-accent)' : 'var(--text-secondary)'};">
            ${scopeMarkedCount > 0 ? `该范围已标 ${scopeMarkedCount} 词` : '该库暂无标记'}
          </span>
        </div>

        <!-- 动态说明 -->
        <div style="font-size:11px; color:var(--text-secondary); margin-top:6px; line-height:1.5;">
          ${markedOnly ? (
            scopeMarkedCount > 0
              ? `🎯 <strong style="color:var(--brand-accent);">重点突击模式</strong>：推门出征将严格从这 <strong>${scopeMarkedCount} 个 Mark 生词</strong> 中抽选考题，集中消除盲区！`
              : `⚠️ <strong style="color:var(--brand-danger);">提示</strong>：所选词库暂无 Mark 标记（全局生词本共 ${totalMarked} 词）。出征时将尝试使用全局标记词或全量词库。`
          ) : `🌲 <strong style="color:var(--brand-primary);">全量探索模式</strong>：推门出征将在所选词库全量词汇中随机生成关卡考题。`}
        </div>
      </div>
    `}

    <!-- 2. 探险者当前属性 -->
    <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:8px; margin-bottom:14px;">
      <div style="background:var(--paper-surface); border:1px solid var(--paper-border); border-radius:var(--radius-sm); padding:8px; text-align:center;">
        <div style="font-size:10px; color:var(--text-secondary);">生命状态</div>
        <div style="font-size:14px; font-weight:900; color:var(--brand-danger);">❤️ ${profile.hp} HP</div>
      </div>
      <div style="background:var(--paper-surface); border:1px solid var(--paper-border); border-radius:var(--radius-sm); padding:8px; text-align:center;">
        <div style="font-size:10px; color:var(--text-secondary);">心智清明</div>
        <div style="font-size:14px; font-weight:900; color:var(--brand-primary);">🧠 ${profile.san} SAN</div>
      </div>
      <div style="background:var(--paper-surface); border:1px solid var(--paper-border); border-radius:var(--radius-sm); padding:8px; text-align:center;">
        <div style="font-size:10px; color:var(--text-secondary);">随身金币</div>
        <div style="font-size:14px; font-weight:900; color:var(--brand-accent);">🪙 ${profile.gold || 0} Gold</div>
      </div>
    </div>

    <!-- 3. 携带策略手牌 -->
    <div style="margin-bottom:14px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <span style="font-size:12px; font-weight:800; color:var(--text-primary);">🎴 携带策略手牌 (3/3)</span>
        <button class="btn btn-secondary" style="font-size:10.5px; padding:2px 8px;" onclick="closeExpeditionPrepModal(); openDeckSelectorModal();">🔄 调整构筑背包</button>
      </div>
      <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:8px;">
        ${handSlotsHtml}
      </div>
    </div>

    <!-- 4. 路线前瞻提示 -->
    <div style="background:rgba(99, 102, 241, 0.05); border:1px dashed rgba(99, 102, 241, 0.25); border-radius:var(--radius-sm); padding:10px 12px; font-size:11.5px; color:var(--text-secondary); line-height:1.6; margin-bottom:16px;">
      💡 <strong>路线抉择提示</strong>：第 1 节点安全启程；后续节点可自由抉择 🌲安全小径 (0 SAN) / 🌫️迷雾支路 (-10 SAN) / 🏛️禁忌遗迹 (-15 SAN)；中途随时可【见好就收安全撤退】100% 携带收益归来。
    </div>

    <!-- 5. 行动按钮 -->
    <div style="display:flex; gap:10px; flex-wrap:wrap;">
      <button class="btn btn-primary" style="flex:2; height:44px; font-size:13.5px; font-weight:800;" onclick="startExpeditionFromAltar()">
        ${inProgress ? `🚪 继续未竟的远征 (第 ${(session.clearedNodeIds || []).length + 1} 节点) ➔` : '🚪 推门踏上出征 ➔'}
      </button>
      <button class="btn btn-secondary" style="flex:1; height:44px; font-size:12px;" onclick="closeExpeditionPrepModal(); startSafeStudyWithErrors([]);">
        📚 书架安全研习 (0扣血)
      </button>
    </div>
  `;
}

async function startExpeditionFromAltar() {
  if (typeof soundClick === 'function') soundClick();
  closeExpeditionPrepModal();
  const profile = (typeof playerProfile !== 'undefined' && playerProfile) ? playerProfile : { hp: 100, san: 100, gold: 100 };
  if (!Array.isArray(profile.battleHand) || profile.battleHand.length === 0) {
    profile.battleHand = ['The Magician', 'The Hermit', 'Death'];
    if (typeof playerProfile !== 'undefined' && playerProfile) {
      playerProfile.battleHand = [...profile.battleHand];
    }
  }
  if (typeof ExpeditionEngine !== 'undefined') {
    if (!ExpeditionEngine.getSession()) {
      const scope = (typeof currentExpeditionScope !== 'undefined' && currentExpeditionScope)
        ? { ...currentExpeditionScope }
        : { wordSource: 'core', markedOnly: false };

      if (scope.markedOnly) {
        const rawWords = (typeof getSourceRawWords === 'function') ? getSourceRawWords(scope.wordSource) : [];
        const marksMap = (typeof marks !== 'undefined' && marks) ? marks : {};
        const countInScope = rawWords.filter(w => (marksMap[w.toLowerCase()] || 0) > 0).length;
        const totalCount = Object.values(marksMap).filter(c => c > 0).length;
        if (countInScope === 0 && totalCount === 0) {
          if (typeof showToast === 'function') showToast('⚠️ 生词本暂无标记单词！已自动以所选词库全库开启');
          scope.markedOnly = false;
        }
      }

      await ExpeditionEngine.startExpedition(profile, null, {
        wordSource: scope.wordSource,
        markedOnly: scope.markedOnly
      });
    }
  }
  if (typeof switchNavView === 'function') {
    switchNavView('expedition_map');
  }
}

async function abandonAndEvacuateFromAltar() {
  if (typeof soundClick === 'function') soundClick();
  closeExpeditionPrepModal();
  if (typeof ExpeditionEngine !== 'undefined' && ExpeditionEngine.getSession()) {
    const summary = await ExpeditionEngine.evacuate();
    if (typeof ExpeditionMap !== 'undefined' && typeof ExpeditionMap.handleConcludeSummary === 'function') {
      ExpeditionMap.handleConcludeSummary(summary);
    } else {
      openCottageDebriefModal(summary);
    }
  }
}

// ==========================================
// 9. 石屋炉边复盘茶几 (Cottage Hearthside Debrief)
// ==========================================
var lastExpeditionSummary = null;

function openCottageDebriefModal(summary) {
  if (typeof soundClick === 'function') soundClick();
  const debriefData = summary || lastExpeditionSummary;
  lastExpeditionSummary = debriefData;
  if (typeof window !== 'undefined') window.lastExpeditionSummary = debriefData;

  let modal = document.getElementById('cottageDebriefModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'cottageDebriefModal';
    modal.className = 'modal-box';
    modal.style.cssText = 'max-width: 620px; max-height: 88vh; overflow-y: auto; padding: 22px; z-index: 10000;';
    document.body.appendChild(modal);
  }

  renderCottageDebriefContent(modal, debriefData);
  modal.style.display = 'block';
  setTimeout(() => modal.style.opacity = '1', 10);
  const overlay = document.getElementById('drawerOverlay');
  if (overlay) overlay.classList.add('open');
}

function closeCottageDebriefModal() {
  const modal = document.getElementById('cottageDebriefModal');
  if (modal) {
    modal.style.opacity = '0';
    setTimeout(() => modal.style.display = 'none', 200);
  }
  const overlay = document.getElementById('drawerOverlay');
  if (overlay) overlay.classList.remove('open');
}

function renderCottageDebriefContent(modalEl, summary) {
  const profile = (typeof playerProfile !== 'undefined' && playerProfile) ? playerProfile : { hp: 100, san: 100, gold: 100 };
  
  if (!summary) {
    // 尚无战报时的欢迎休整状态
    modalEl.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1.5px solid var(--paper-border); padding-bottom:12px; margin-bottom:16px;">
        <div style="display:flex; align-items:center; gap:10px;">
          <span style="font-size:26px;">🕊️</span>
          <div>
            <div style="font-weight:900; font-size:17px; color:var(--text-primary);">炉边茶几 · 静憩复盘</div>
            <div style="font-size:11.5px; color:var(--text-secondary); margin-top:2px;">小石屋避难所 · 炉火微温</div>
          </div>
        </div>
        <button class="btn btn-secondary" style="font-size:11px; padding:2px 8px;" onclick="closeCottageDebriefModal()">✕ 收起</button>
      </div>

      <div style="text-align:center; padding:24px 16px; color:var(--text-secondary); line-height:1.7;">
        <div style="font-size:36px; margin-bottom:10px;">☕</div>
        <div style="font-size:14px; font-weight:700; color:var(--text-primary); margin-bottom:6px;">暂无未复盘的远征战报</div>
        <div style="font-size:12px;">你当前安然身处小石屋中。可以前往书架进行【安全研习】，或前往【出征祭坛】开启新一轮 5 节点职场探险！</div>
      </div>

      <div style="display:flex; gap:10px; margin-top:16px;">
        <button class="btn btn-primary" style="flex:2; height:42px; font-size:13px; font-weight:800;" onclick="closeCottageDebriefModal(); openExpeditionPrepModal();">
          ⚔️ 前往出征祭坛整备
        </button>
        <button class="btn btn-secondary" style="flex:1; height:42px; font-size:12px;" onclick="closeCottageDebriefModal(); switchNavView('words');">
          📚 书架安全研习
        </button>
      </div>
    `;
    return;
  }

  const outcomeType = summary.outcomeType || 'completed';
  const isVictory = outcomeType === 'completed';
  const isEvac = outcomeType === 'evacuated';
  const isDeathSaved = outcomeType === 'death_evacuated';
  
  let icon = isVictory ? '🏆' : (isEvac ? '⛺' : (isDeathSaved ? '🦅' : '💀'));
  let badgeColor = isVictory ? 'var(--brand-success)' : (isEvac ? 'var(--brand-accent)' : (isDeathSaved ? '#8b5cf6' : 'var(--brand-danger)'));
  let title = isVictory ? '远征大捷 · 炉边庆功' : (isEvac ? '见好就收 · 炉边小憩' : (isDeathSaved ? '绝境涅槃 · 炉边还生' : '远征受挫 · 炉边调息'));

  const recentErrors = summary.recentErrors || [];

  modalEl.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1.5px solid var(--paper-border); padding-bottom:12px; margin-bottom:16px;">
      <div style="display:flex; align-items:center; gap:10px;">
        <span style="font-size:28px;">${icon}</span>
        <div>
          <div style="font-weight:900; font-size:17px; color:${badgeColor};">${title}</div>
          <div style="font-size:11.5px; color:var(--text-secondary); margin-top:2px;">${escapeHtml(summary.message || '已安然回到小石屋避难所')}</div>
        </div>
      </div>
      <button class="btn btn-secondary" style="font-size:11px; padding:2px 8px;" onclick="closeCottageDebriefModal()">✕ 收起</button>
    </div>

    <!-- 核心结算指标 -->
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)); gap:8px; margin-bottom:14px;">
      <div style="background:var(--paper-surface-sub); border:1px solid var(--paper-border); border-radius:var(--radius-sm); padding:8px; text-align:center;">
        <div style="font-size:10px; color:var(--text-secondary);">突破节点</div>
        <div style="font-size:16px; font-weight:800; color:var(--text-primary);">${summary.beatsCleared || 1} / 5</div>
      </div>
      <div style="background:var(--paper-surface-sub); border:1px solid var(--paper-border); border-radius:var(--radius-sm); padding:8px; text-align:center;">
        <div style="font-size:10px; color:var(--text-secondary);">带回金币</div>
        <div style="font-size:16px; font-weight:800; color:var(--brand-accent);">+${summary.finalGold || 0} G</div>
      </div>
      <div style="background:var(--paper-surface-sub); border:1px solid var(--paper-border); border-radius:var(--radius-sm); padding:8px; text-align:center;">
        <div style="font-size:10px; color:var(--text-secondary);">永久经验</div>
        <div style="font-size:16px; font-weight:800; color:var(--brand-cyan);">+${summary.finalXp || 0} XP</div>
      </div>
      <div style="background:var(--paper-surface-sub); border:1px solid var(--paper-border); border-radius:var(--radius-sm); padding:8px; text-align:center;">
        <div style="font-size:10px; color:var(--text-secondary);">自愈灰血</div>
        <div style="font-size:16px; font-weight:800; color:var(--brand-success);">+${summary.healedGrayHp || 0} HP</div>
      </div>
    </div>

    <!-- 壁炉暖光抚慰理智提示 -->
    <div style="background:rgba(245, 158, 11, 0.08); border-left:3.5px solid var(--brand-accent); border-radius:var(--radius-sm); padding:10px 12px; font-size:12px; color:var(--text-primary); margin-bottom:14px; line-height:1.6;">
      🔥 <strong>炉火暖光抚慰中</strong>：壁炉暖火常开，在石屋停留每 25 秒抚慰心神理智 (+1 SAN)。
    </div>

    <!-- 待巩固错词列表 -->
    ${recentErrors.length > 0 ? `
      <div style="background:rgba(239, 68, 68, 0.05); border:1px solid rgba(239, 68, 68, 0.2); border-radius:var(--radius-md); padding:12px; margin-bottom:14px;">
        <div style="font-size:11.5px; font-weight:800; color:var(--brand-danger); margin-bottom:6px;">
          📝 本轮待复盘巩固生词 (${recentErrors.length} 词 · 永久学习证据已保留):
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:6px;">
          ${recentErrors.map(w => {
            const wordStr = (typeof w === 'string') ? w : (w.word || w.name || String(w));
            return `<span class="badge" style="background:var(--paper-surface); border:1px solid var(--brand-danger); color:var(--brand-danger); cursor:pointer;" onclick="openWordDetails('${escapeHtml(wordStr)}')">${escapeHtml(wordStr)} 🔍</span>`;
          }).join('')}
        </div>
      </div>
    ` : ''}

    <!-- 操作按钮 -->
    <div style="display:flex; gap:8px; flex-wrap:wrap;">
      ${recentErrors.length > 0 ? `
        <button class="btn btn-primary" style="flex:2; height:42px; font-size:13px; font-weight:800;" onclick="startSafeStudyWithErrors(lastExpeditionSummary ? lastExpeditionSummary.recentErrors : [])">
          📚 前往书架研习错词 (安全研习)
        </button>
      ` : `
        <button class="btn btn-primary" style="flex:2; height:42px; font-size:13px; font-weight:800;" onclick="closeCottageDebriefModal(); openExpeditionPrepModal();">
          ⚔️ 再次出征祭坛整备
        </button>
      `}
      <button class="btn btn-secondary" style="flex:1; height:42px; font-size:12px;" onclick="closeCottageDebriefModal()">
        🏡 留步石屋静养
      </button>
    </div>
  `;
}

// 10. 安全研习直达与错词载入 (0 HP / 0 SAN 损耗保证)
function startSafeStudyWithErrors(errorWords) {
  if (typeof soundClick === 'function') soundClick();
  closeCottageDebriefModal();
  const words = Array.isArray(errorWords)
    ? errorWords.map(w => typeof w === 'string' ? w : (w.word || w.name || String(w))).filter(Boolean)
    : [];

  const navFn = (typeof switchNavView === 'function') ? switchNavView : (typeof window !== 'undefined' ? window.switchNavView : null);
  if (typeof navFn === 'function') {
    return navFn('words').then(() => {
      if (words.length > 0) {
        const markFn = (typeof addMark === 'function') ? addMark : (typeof window !== 'undefined' ? window.addMark : null);
        if (typeof markFn === 'function') {
          words.forEach(w => markFn(w));
        }
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
          searchInput.value = words[0] || '';
          const rwFn = (typeof renderWords === 'function') ? renderWords : (typeof window !== 'undefined' ? window.renderWords : null);
          if (typeof rwFn === 'function') {
            rwFn(searchInput.value);
          }
        }
        const toastFn = (typeof showToast === 'function') ? showToast : (typeof window !== 'undefined' ? window.showToast : null);
        if (typeof toastFn === 'function') {
          toastFn(`📖 已载入本次远征 ${words.length} 个重点生词，在小石屋书架进行安全研习绝不扣除 HP 与 SAN！`);
        }
      } else {
        const toastFn = (typeof showToast === 'function') ? showToast : (typeof window !== 'undefined' ? window.showToast : null);
        if (typeof toastFn === 'function') {
          toastFn('📖 当前处于小石屋书架安全研习模式，0 扣血 0 损耗！');
        }
      }
    });
  }
}

// 11. 石屋断点续玩高亮状态随动 (Breakpoint Resume Sync)
function updateCottageExpeditionUI() {
  const session = (typeof ExpeditionEngine !== 'undefined' && ExpeditionEngine.getSession()) ? ExpeditionEngine.getSession() : null;
  const inProgress = session && session.status === 'in_progress';
  
  // 1. 石屋内出征祭坛热点徽章
  const altarSpot = document.querySelector('.hotspot.expedition-spot');
  const altarCaption = altarSpot ? altarSpot.querySelector('.hotspot-caption') : null;
  if (altarCaption) {
    if (inProgress) {
      const nextStep = (session.clearedNodeIds || []).length + 1;
      altarCaption.textContent = `🚪 续战 (第 ${nextStep} 节点)`;
      altarSpot.classList.add('expedition-in-progress');
    } else {
      altarCaption.textContent = '出征祭坛';
      altarSpot.classList.remove('expedition-in-progress');
    }
  }

  // 2. 石屋微控浮动栏中的出征药丸按钮
  const floatPill = document.querySelector('.cottage-floating-nav button[onclick*="openExpeditionPrepModal"]');
  if (floatPill) {
    const pillIcon = floatPill.querySelector('.pill-icon');
    const pillText = floatPill.querySelector('.pill-text');
    if (inProgress) {
      if (pillIcon) pillIcon.textContent = '🚪';
      if (pillText) pillText.textContent = `续战 (${(session.clearedNodeIds || []).length + 1}/7)`;
      floatPill.classList.add('expedition-pill-active');
    } else {
      if (pillIcon) pillIcon.textContent = '⚔️';
      if (pillText) pillText.textContent = '出征';
      floatPill.classList.remove('expedition-pill-active');
    }
  }

  // 3. 词库主页的推门远征 Hero 卡片
  const heroCard = document.getElementById('expeditionHeroCard');
  if (heroCard) {
    const heroBtn = heroCard.querySelector('button');
    if (heroBtn) {
      if (inProgress) {
        heroBtn.innerHTML = `<span>🚪 继续远征 (${(session.clearedNodeIds || []).length}/7)</span> <span>▶</span>`;
        heroBtn.style.background = 'linear-gradient(135deg, var(--brand-accent), #f59e0b)';
      } else {
        heroBtn.innerHTML = `<span>推门出征</span> <span>▶</span>`;
        heroBtn.style.background = '';
      }
    }
  }
}

// ==========================================
// 12. 石屋理智值 SAN 环境氛围随动
// ==========================================
function updateCottageSanAtmosphere() {
  const scene = document.getElementById('cottageScene');
  const locLabel = document.getElementById('cottageLocationLabel');
  if (!scene || typeof playerProfile === 'undefined' || !playerProfile) return;

  const san = playerProfile.san !== undefined ? playerProfile.san : 100;
  scene.classList.remove('san-tier-clear', 'san-tier-mild', 'san-tier-heavy');

  if (san >= 80) {
    scene.classList.add('san-tier-clear');
    if (locLabel && !isCottageExterior) locLabel.textContent = '炉火旁 · 清明微暖';
  } else if (san >= 50) {
    scene.classList.add('san-tier-mild');
    if (locLabel && !isCottageExterior) locLabel.textContent = `炉火旁 · 轻度迷雾 (SAN ${san})`;
  } else {
    scene.classList.add('san-tier-heavy');
    if (locLabel && !isCottageExterior) locLabel.textContent = `炉火旁 · 心神调息 (SAN ${san})`;
  }
}

// 挂载到全局
if (typeof window !== 'undefined') {
  window.toggleCottagePerspective = toggleCottagePerspective;
  window.toggleCottageWarmth = toggleCottageWarmth;
  window.toggleCottageHints = toggleCottageHints;
  window.toggleCottageOrientation = toggleCottageOrientation;
  window.initCottageOrientation = initCottageOrientation;
  window.openCottageJournalModal = openCottageJournalModal;
  window.closeCottageJournalModal = closeCottageJournalModal;
  window.switchJournalTab = switchJournalTab;
  window.renderExpeditionChroniclesView = renderExpeditionChroniclesView;
  window.onCottageJournalInput = onCottageJournalInput;
  window.exportCottageJournal = exportCottageJournal;
  window.clearCottageJournal = clearCottageJournal;
  window.openCottageAboutModal = openCottageAboutModal;
  window.closeCottageAboutModal = closeCottageAboutModal;
  window.openExpeditionPrepModal = openExpeditionPrepModal;
  window.closeExpeditionPrepModal = closeExpeditionPrepModal;
  window.renderExpeditionPrepContent = renderExpeditionPrepContent;
  window.setExpeditionPrepScope = setExpeditionPrepScope;
  window.toggleExpeditionPrepMarkedOnly = toggleExpeditionPrepMarkedOnly;
  window.startExpeditionFromAltar = startExpeditionFromAltar;
  window.abandonAndEvacuateFromAltar = abandonAndEvacuateFromAltar;
  window.openCottageDebriefModal = openCottageDebriefModal;
  window.closeCottageDebriefModal = closeCottageDebriefModal;
  window.renderCottageDebriefContent = renderCottageDebriefContent;
  window.startSafeStudyWithErrors = startSafeStudyWithErrors;
  window.updateCottageExpeditionUI = updateCottageExpeditionUI;
  window.updateCottageSanAtmosphere = updateCottageSanAtmosphere;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    toggleCottagePerspective,
    toggleCottageWarmth,
    toggleCottageHints,
    openCottageJournalModal,
    closeCottageJournalModal,
    switchJournalTab,
    renderExpeditionChroniclesView,
    openExpeditionPrepModal,
    closeExpeditionPrepModal,
    renderExpeditionPrepContent,
    setExpeditionPrepScope,
    toggleExpeditionPrepMarkedOnly,
    startExpeditionFromAltar,
    abandonAndEvacuateFromAltar,
    openCottageDebriefModal,
    closeCottageDebriefModal,
    renderCottageDebriefContent,
    startSafeStudyWithErrors,
    updateCottageExpeditionUI,
    updateCottageSanAtmosphere
  };
}

