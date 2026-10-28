async function openAdminConsole() {
  soundClick();
  authToken = loadFromStorage(STORAGE_KEYS.TOKEN, null);
  authUser = loadFromStorage(STORAGE_KEYS.AUTH, null);
  if (!authToken || !authUser) {
    showToast("👑 站长后台：请先登录管理员账号 (林允安)");
    openAuthModal();
    return;
  }

  const modal = document.getElementById('adminModal');
  const body = document.getElementById('adminModalBody');
  modal.style.display = 'block';
  setTimeout(() => modal.style.opacity = '1', 10);
  body.innerHTML = '<div style="padding:40px; text-align:center; color:var(--text-secondary);">正在加载管理后台与用户数据库...</div>';

  try {
    const [ovResp, usrResp] = await Promise.all([
      fetch(`${API_BASE}/api/admin/overview`, { headers: { 'Authorization': 'Bearer ' + authToken } }),
      fetch(`${API_BASE}/api/admin/users`, { headers: { 'Authorization': 'Bearer ' + authToken } })
    ]);

    if (!ovResp.ok || !usrResp.ok) {
      throw new Error("权限不足，只有 Admin 管理员可以访问后台");
    }

    const ovData = await ovResp.json();
    const usrData = await usrResp.json();

    const stats = ovData.stats;
    const users = usrData.users;

    body.innerHTML = `
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap:10px; margin-bottom:20px;">
        <div class="admin-stat-card">
          <div style="font-size:11px; color:var(--text-secondary);">注册总用户</div>
          <div style="font-size:24px; font-weight:900; color:var(--brand-primary);">${stats.total_users} 人</div>
        </div>
        <div class="admin-stat-card">
          <div style="font-size:11px; color:var(--text-secondary);">全英离线词库</div>
          <div style="font-size:24px; font-weight:900; color:var(--brand-success);">${stats.cached_words} 词</div>
        </div>
        <div class="admin-stat-card">
          <div style="font-size:11px; color:var(--text-secondary);">累计收集卡牌</div>
          <div style="font-size:24px; font-weight:900; color:var(--tarot-gold);">${stats.total_cards_drawn} 张</div>
        </div>
        <div class="admin-stat-card">
          <div style="font-size:11px; color:var(--text-secondary);">生词总标记数</div>
          <div style="font-size:24px; font-weight:900; color:var(--brand-danger);">${stats.total_marks} 次</div>
        </div>
      </div>

      <div style="background:var(--paper-surface-sub); border:1.5px solid var(--paper-border); border-radius:var(--radius-md); padding:16px; margin-bottom:20px;">
        <div style="font-size:15px; font-weight:800; color:var(--text-primary); margin-bottom:4px;">🛡️ Gemini API 额度防盗刷安全金库</div>
        <div style="font-size:12px; color:var(--text-secondary); margin-bottom:12px;">Key 保存在 VPS 后端数据库中，前端无法窥探。访客走 0 成本离线矩阵，杜绝被盗刷！</div>
        <div class="form-group" style="margin-bottom:10px;">
          <label class="form-label" style="font-size:12px;">服务端 Gemini API Key</label>
          <input type="password" id="adminCfgGeminiKey" class="form-input" placeholder="${stats.server_gemini_key_set ? '●●●●●●●● (已配置并受保护)' : '请输入 Google AI Studio 密钥'}" />
        </div>
        <div class="form-group" style="margin-bottom:12px;">
          <label class="form-label" style="font-size:12px;">云端 AI 调用权限模式</label>
          <select id="adminCfgAiMode" class="form-input">
            <option value="whitelist" ${stats.ai_access_mode === 'whitelist' ? 'selected' : ''}>🎯 授权白名单模式（推荐 · 仅 Admin 及已单独授权额度用户可用）</option>
            <option value="admin_only" ${stats.ai_access_mode === 'admin_only' ? 'selected' : ''}>🔒 仅限管理员独占（普通用户走 0 成本离线矩阵）</option>
            <option value="all_users" ${stats.ai_access_mode === 'all_users' ? 'selected' : ''}>🌐 开放给全部注册登录用户</option>
          </select>
        </div>
        <button class="btn btn-primary" style="width:100%;" onclick="saveAdminAiConfig()">💾 保存服务端 AI 安全配置</button>
      </div>

      <!-- ⚡ 用户额度授权快捷操作卡 (手机/PC 直观醒目大卡片) -->
      <div style="background:var(--paper-surface-sub); border:2px solid var(--brand-primary); border-radius:var(--radius-md); padding:16px; margin-bottom:20px; box-shadow:var(--paper-shadow);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; flex-wrap:wrap; gap:6px;">
          <div style="font-size:15px; font-weight:900; color:var(--brand-primary); display:flex; align-items:center; gap:6px;">
            <span>⚡ 用户 AI 额度授权开关</span>
            <span class="origami-chip" style="background:var(--brand-primary); color:#fff; font-size:11px;">核心控制区</span>
          </div>
          <span style="font-size:11px; color:var(--text-secondary);">点击即可一键开启/收回指定用户的站长额度</span>
        </div>

        <div style="display:flex; flex-direction:column; gap:10px;">
          ${users.map(u => `
            <div style="background:var(--paper-surface); border:1.5px solid var(--paper-border); border-radius:var(--radius-sm); padding:12px 14px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
              <div style="display:flex; align-items:center; gap:10px;">
                <span style="font-size:22px;">${u.role === 'admin' ? '👑' : (u.can_use_quota ? '⚡' : '👤')}</span>
                <div>
                  <div style="font-size:14px; font-weight:800; color:var(--text-primary); display:flex; align-items:center; gap:6px;">
                    <span>${escapeHtml(u.username)}</span>
                    ${u.role === 'admin' ? '<span class="admin-role-badge admin" style="font-size:10px;">Admin 主号</span>' : '<span class="admin-role-badge user" style="font-size:10px;">User</span>'}
                  </div>
                  <div style="font-size:11px; color:var(--text-secondary); margin-top:2px;">
                    ID: #${u.id} · 等级: LV.${u.level} · IP: ${u.bound_ip || '-'}
                  </div>
                </div>
              </div>

              <div>
                ${u.role === 'admin' ? 
                  '<span style="background:rgba(16,185,129,0.15); color:var(--brand-success); padding:4px 12px; border-radius:12px; font-size:12px; font-weight:800; border:1px solid var(--brand-success);">👑 永久完全特权</span>' : 
                  (u.can_use_quota ? 
                    `<button class="btn btn-primary" style="background:var(--brand-success); border-color:var(--brand-success); font-size:12px; padding:6px 14px; font-weight:800;" onclick="toggleUserQuota(${u.id}, false, '${escapeHtml(u.username)}')" title="点击收回该用户的额度使用权">⚡ 已授权额度 (点击收回)</button>` : 
                    `<button class="btn btn-secondary" style="font-size:12px; padding:6px 14px; color:var(--text-secondary); font-weight:700; border-color:var(--paper-border);" onclick="toggleUserQuota(${u.id}, true, '${escapeHtml(u.username)}')" title="点击开通该用户的额度使用权">🔒 未开通额度 (点击一键授权)</button>`
                  )
                }
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div style="background:var(--paper-surface-sub); border:1.5px solid var(--paper-border); border-radius:var(--radius-md); padding:16px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <span style="font-size:15px; font-weight:800; color:var(--text-primary);">👥 注册用户与战况清单 (${users.length})</span>
          <button class="btn btn-secondary" style="font-size:11px; padding:4px 10px;" onclick="openAdminConsole()">🔄 刷新列表</button>
        </div>
        <div style="overflow-x:auto;">
          <table class="admin-table">
            <thead>
              <tr>
                <th>ID</th><th>用户名</th><th>角色</th><th>额度权限</th><th>等级/XP</th><th>卡牌</th><th>标记生词</th><th>绑定IP</th><th>站长操作</th>
              </tr>
            </thead>
            <tbody>
              ${users.map(u => `
                <tr>
                  <td>#${u.id}</td>
                  <td style="font-weight:700;">${escapeHtml(u.username)}</td>
                  <td>${u.role === 'admin' ? '<span class="admin-role-badge admin">👑 Admin</span>' : '<span class="admin-role-badge user">👤 User</span>'}</td>
                  <td>
                    ${u.role === 'admin' ? 
                      '<span style="color:var(--brand-success); font-weight:800; font-size:11px;">⚡ 管理员特权</span>' : 
                      (u.can_use_quota ? 
                        `<button class="btn btn-primary" style="font-size:10px; padding:2px 8px; background:var(--brand-success); border-color:var(--brand-success);" onclick="toggleUserQuota(${u.id}, false, '${escapeHtml(u.username)}')" title="点击收回额度">⚡ 已授权 (点击收回)</button>` : 
                        `<button class="btn btn-secondary" style="font-size:10px; padding:2px 8px; color:var(--text-secondary);" onclick="toggleUserQuota(${u.id}, true, '${escapeHtml(u.username)}')" title="点击开通额度">🔒 未开通 (点击授权)</button>`
                      )
                    }
                  </td>
                  <td>LV.${u.level} (${u.xp} XP)</td>
                  <td style="color:var(--tarot-gold); font-weight:700;">${u.cards_count} 张</td>
                  <td style="color:var(--brand-danger); font-weight:700;">${u.marks_count} 词</td>
                  <td style="font-size:11px; font-family:var(--font-mono); color:var(--brand-cyan);">${u.bound_ip || '-'}</td>
                  <td>
                    ${u.role !== 'admin' ? `
                      <button class="btn btn-secondary" style="font-size:10px; padding:2px 6px;" onclick="resetUserPassword(${u.id}, '${escapeHtml(u.username)}')">🔑 密码</button>
                      <button class="btn btn-secondary" style="font-size:10px; padding:2px 6px; color:var(--brand-danger);" onclick="deleteUser(${u.id}, '${escapeHtml(u.username)}')">🗑️ 删除</button>
                    ` : '<span style="font-size:10px; color:var(--text-secondary);">主管理员</span>'}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  } catch(e) {
    body.innerHTML = `<div style="padding:40px; text-align:center; color:var(--brand-danger);">${escapeHtml(e.message)}</div>`;
  }
}

async function saveAdminAiConfig() {
  const key = document.getElementById('adminCfgGeminiKey').value.trim();
  const mode = document.getElementById('adminCfgAiMode').value;
  authToken = loadFromStorage(STORAGE_KEYS.TOKEN, null);

  try {
    const resp = await fetch(`${API_BASE}/api/admin/save-config`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + authToken
      },
      body: JSON.stringify({ gemini_key: key, ai_access_mode: mode })
    });
    if (resp.ok) {
      showToast("💾 服务端 AI 安全配置已保存！");
      openAdminConsole();
    } else {
      throw new Error("保存失败");
    }
  } catch(e) {
    showToast("❌ 保存失败：" + e.message);
  }
}

function closeAdminModal() {
  const modal = document.getElementById('adminModal');
  modal.style.opacity = '0';
  setTimeout(() => modal.style.display = 'none', 200);
}

async function deleteUser(userId, username) {
  if (!confirm(`确定要彻底删除用户 [${username}] (ID: #${userId}) 及其所有档案记录吗？此操作不可逆！`)) return;
  authToken = loadFromStorage(STORAGE_KEYS.TOKEN, null);
  try {
    const resp = await fetch(`${API_BASE}/api/admin/users/${userId}`, {
      method: 'DELETE',
      headers: { 'Authorization': 'Bearer ' + authToken }
    });
    const data = await resp.json();
    if (!resp.ok) throw new Error(data.detail || "删除失败");
    showToast(`🗑️ ${data.message}`);
    openAdminConsole();
  } catch(e) {
    showToast(`❌ ${e.message}`);
  }
}

async function resetUserPassword(userId, username) {
  const newPwd = prompt(`请输入为用户 [${username}] 重置的新密码（默认 030522）：`, "030522");
  if (newPwd === null) return;
  authToken = loadFromStorage(STORAGE_KEYS.TOKEN, null);
  try {
    const resp = await fetch(`${API_BASE}/api/admin/users/${userId}/reset-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + authToken
      },
      body: JSON.stringify({ new_password: newPwd.trim() || "030522" })
    });
    const data = await resp.json();
    if (!resp.ok) throw new Error(data.detail || "重置失败");
    showToast(`🔑 ${data.message}`);
    openAdminConsole();
  } catch(e) {
    showToast(`❌ ${e.message}`);
  }
}

async function toggleUserQuota(userId, enable, username) {
  soundClick();
  authToken = loadFromStorage(STORAGE_KEYS.TOKEN, null);
  try {
    const resp = await fetch(`${API_BASE}/api/admin/users/${userId}/toggle-quota`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + authToken
      },
      body: JSON.stringify({ enabled: enable })
    });
    const data = await resp.json();
    if (!resp.ok) throw new Error(data.detail || "操作失败");
    showToast(`⚡ ${data.message}`);
    openAdminConsole();
  } catch(e) {
    showToast(`❌ ${e.message}`);
  }
}