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
    const isMasterAdmin = Boolean(authUser.is_admin || authUser.role === 'admin' || ['林允安', '允安'].includes(authUser.username));
    const showAdminParam = new URLSearchParams(window.location.search).get('admin') === '1';

    if (isMasterAdmin) {
      document.getElementById('authRoleBadge').textContent = showAdminParam ? '🛠️ 系统管理员 (Admin Console Active)' : '✨ 探险学员 (Cloud Sync Active)';
    } else if (authUser.can_use_quota) {
      document.getElementById('authRoleBadge').textContent = '⚡ 探险学员 (已开通专属 AI 云端服务)';
    } else {
      document.getElementById('authRoleBadge').textContent = '👤 探险学员 (本地与云端档案同步已开启)';
    }
    document.getElementById('adminLaunchBtn').style.display = (isMasterAdmin && showAdminParam) ? 'block' : 'none';
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

function switchAuthTab(mode) {
  authTabMode = mode;
  document.getElementById('tabAuthLogin').classList.toggle('active', mode === 'login');
  document.getElementById('tabAuthReg').classList.toggle('active', mode === 'reg');
  document.getElementById('authSubmitBtn').textContent = mode === 'login' ? '🔑 立即登录' : '✨ 注册新账号';
}

async function handleAuthSubmit() {
  const u = document.getElementById('authInputUser').value.trim();
  const p = document.getElementById('authInputPass').value.trim();

  if (!u || !p) {
    showToast("⚠️ 请输入用户名和密码");
    return;
  }

  const submitBtn = document.getElementById('authSubmitBtn');
  submitBtn.disabled = true;
  submitBtn.textContent = "⏳ 正在同步云端档案...";

  try {
    const endpoint = authTabMode === 'login' ? '/api/login' : '/api/register';
    const payload = { username: u, password: p };
    
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

    window.location.reload();
    return;
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
  StoneStorage.removeItem(STORAGE_KEYS.TOKEN);
  StoneStorage.removeItem(STORAGE_KEYS.AUTH);
  authToken = null;
  authUser = null;
  updateAuthUI();
  closeAuthModal();
  window.location.reload();
}

function updateAuthUI() {
  const btnName = document.getElementById('userBtnName');
  const adminBadgeBtn = document.getElementById('topAdminBtn');
  const adminLaunchBtn = document.getElementById('adminLaunchBtn');
  authToken = loadFromStorage(STORAGE_KEYS.TOKEN, null);
  authUser = loadFromStorage(STORAGE_KEYS.AUTH, null);

  // 顶部管理后台入口默认从前台彻底隐藏，避免普通访客与学员感知
  if (adminBadgeBtn) {
    adminBadgeBtn.style.display = 'none';
  }
  if (adminLaunchBtn) {
    adminLaunchBtn.style.display = 'none';
  }

  if (authToken && authUser) {
    btnName.textContent = authUser.username;
    const isMasterAdmin = Boolean(authUser.is_admin || authUser.role === 'admin' || ['林允安', '允安'].includes(authUser.username));
    const showAdminParam = new URLSearchParams(window.location.search).get('admin') === '1';

    // 仅在显式带有 ?admin=1 参数且为管理员时才展示入口
    if (adminBadgeBtn && isMasterAdmin && showAdminParam) {
      adminBadgeBtn.style.display = 'inline-flex';
      adminBadgeBtn.textContent = '🛠️ 管理后台';
    }
    if (adminLaunchBtn && isMasterAdmin && showAdminParam) {
      adminLaunchBtn.style.display = 'block';
    }
  } else {
    btnName.textContent = '登录';
  }
}

// 快捷键支持：按下 Ctrl+Alt+A 即可无缝调出管理后台（仅限管理员认证后生效）
window.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.altKey && (e.key === 'a' || e.key === 'A')) {
    e.preventDefault();
    if (typeof openAdminConsole === 'function') {
      openAdminConsole();
    }
  }
});