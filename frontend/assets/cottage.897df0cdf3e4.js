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

// 4. 小石屋纯本地手记 (Strict Browser-Local Journal)
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

// 挂载到全局
if (typeof window !== 'undefined') {
  window.toggleCottagePerspective = toggleCottagePerspective;
  window.toggleCottageWarmth = toggleCottageWarmth;
  window.toggleCottageHints = toggleCottageHints;
  window.openCottageJournalModal = openCottageJournalModal;
  window.closeCottageJournalModal = closeCottageJournalModal;
  window.onCottageJournalInput = onCottageJournalInput;
  window.exportCottageJournal = exportCottageJournal;
  window.clearCottageJournal = clearCottageJournal;
  window.openCottageAboutModal = openCottageAboutModal;
  window.closeCottageAboutModal = closeCottageAboutModal;
}
