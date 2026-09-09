/**
 * expedition-map.js
 * ============================================================
 * 2.5D 石屋外分支远征地图渲染器与交互控制器 (Expedition Map UI)
 * ============================================================
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ExpeditionMap = factory();
  }
}(typeof self !== 'undefined' ? self : this, function() {
  'use strict';

  function escapeHtml(str) {
    return String(str || '').replace(/[&<>"']/g, m => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[m]));
  }

  const ExpeditionMap = {
    /**
     * 渲染远征地图全景
     */
    renderMap() {
      const session = typeof ExpeditionEngine !== 'undefined' ? ExpeditionEngine.getSession() : null;
      if (!session) {
        // 若当前无远征，引导前往出征祭坛开启
        const canvas = document.getElementById('expeditionMapCanvas');
        if (canvas) {
          canvas.innerHTML = `
            <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; text-align:center; padding:40px;">
              <div style="font-size:48px; margin-bottom:12px;">🌲</div>
              <div style="font-size:18px; font-weight:900; color:var(--text-primary); margin-bottom:6px;">石屋外一片寂静</div>
              <div style="font-size:13px; color:var(--text-secondary); max-width:380px; margin-bottom:20px;">
                你当前安然处于小石屋避难所中。请先推门前往出征祭坛，调配塔罗手牌并踏上荒原。
              </div>
              <button class="btn btn-primary" onclick="switchNavView('cottage').then(() => openExpeditionPrepModal())" style="padding:10px 24px; font-size:14px; font-weight:800;">
                ⚔️ 前往出征祭坛整备
              </button>
            </div>
          `;
        }
        return;
      }

      this.updateHud(session);
      this.drawTopologicalCanvas(session);
      this.renderBattleHand(session);
    },

    /**
     * 更新顶部冒险 HUD 指标
     */
    updateHud(session) {
      const hpEl = document.getElementById('expeditionHpVal');
      const hpFill = document.getElementById('expeditionHpFill');
      const grayFill = document.getElementById('expeditionGrayHpFill');
      const sanEl = document.getElementById('expeditionSanVal');
      const sanFill = document.getElementById('expeditionSanFill');
      const goldEl = document.getElementById('expeditionGoldVal');
      const stepEl = document.getElementById('expeditionStepVal');

      const hp = session.hp !== undefined ? session.hp : 100;
      const grayHp = session.grayHp || 0;
      const san = session.san !== undefined ? session.san : 100;
      const gold = session.goldEarned || 0;
      const clearedCount = (session.clearedNodeIds || []).length;
      const totalCount = (session.nodes || []).length;

      if (hpEl) hpEl.textContent = `${hp} / 100`;
      if (hpFill) hpFill.style.width = `${Math.min(100, Math.max(0, hp))}%`;
      if (grayFill) grayFill.style.width = `${Math.min(100 - hp, Math.max(0, grayHp))}%`;

      if (sanEl) sanEl.textContent = `${san} / 100`;
      if (sanFill) {
        sanFill.style.width = `${Math.min(100, Math.max(0, san))}%`;
        sanFill.style.background = san < 50 ? 'var(--brand-danger)' : (san < 80 ? 'var(--brand-accent)' : 'var(--brand-primary)');
      }

      if (goldEl) goldEl.textContent = `+${gold} G`;
      if (stepEl) stepEl.textContent = `${clearedCount} / ${totalCount} 节点`;

      // 同步石屋全局属性
      if (typeof playerProfile !== 'undefined' && playerProfile) {
        playerProfile.hp = hp;
        playerProfile.grayHp = grayHp;
        playerProfile.san = san;
      }
    },

    /**
     * 绘制 2.5D 拓扑沙盘画布与连线
     */
    drawTopologicalCanvas(session) {
      const container = document.getElementById('expeditionMapCanvas');
      if (!container) return;

      const nodes = session.nodes || [];
      const nodeMap = {};
      nodes.forEach(n => nodeMap[n.id] = n);

      // 1. 构造 SVG 连线
      let svgLines = '';
      nodes.forEach(source => {
        (source.nextNodes || []).forEach(targetId => {
          const target = nodeMap[targetId];
          if (target) {
            const isClearedPath = session.clearedNodeIds.includes(source.id) && session.clearedNodeIds.includes(target.id);
            const isAvailablePath = session.clearedNodeIds.includes(source.id) && target.status === 'available';
            const strokeColor = isClearedPath ? 'var(--brand-success)' : (isAvailablePath ? 'var(--brand-primary)' : 'rgba(156, 163, 175, 0.4)');
            const strokeDash = isClearedPath ? 'none' : '4,4';
            const strokeWidth = isClearedPath ? '3' : (isAvailablePath ? '2.5' : '1.5');

            svgLines += `
              <line x1="${source.coords.x}%" y1="${source.coords.y}%" 
                    x2="${target.coords.x}%" y2="${target.coords.y}%" 
                    stroke="${strokeColor}" stroke-width="${strokeWidth}" 
                    stroke-dasharray="${strokeDash}" />
            `;
          }
        });
      });

      // 2. 构造 7 个节点地标徽章
      let nodeHtml = '';
      nodes.forEach(n => {
        const isCleared = session.clearedNodeIds.includes(n.id);
        const isCurrent = session.currentNodeId === n.id && !isCleared;
        const isAvailable = n.status === 'available';
        const isLocked = n.status === 'locked';

        let stateClass = isCleared ? 'node-cleared' : (isCurrent ? 'node-current' : (isAvailable ? 'node-available' : 'node-locked'));
        let sanTag = n.sanCost > 0 ? `<span class="node-san-badge">-${n.sanCost} SAN</span>` : '';
        let typeBadge = n.type === 'polluted' ? '🌫️ 污染' : (n.type === 'camp' ? '⛺ 营地' : (n.type === 'gatekeeper' ? '👑 守关' : (n.type === 'safe' ? '🏹 安全' : '🌲 哨卡')));

        nodeHtml += `
          <div class="expedition-node-token ${stateClass}" 
               style="left:${n.coords.x}%; top:${n.coords.y}%;"
               onclick="ExpeditionMap.handleNodeClick(${n.id})"
               title="${escapeHtml(n.name)} (${typeBadge})">
            <div class="node-avatar">
              <span class="node-icon">${isCleared ? '✓' : n.icon}</span>
              ${sanTag}
            </div>
            <div class="node-caption">
              <span class="node-title">${escapeHtml(n.name)}</span>
              <span class="node-type-label">${typeBadge}</span>
            </div>
          </div>
        `;
      });

      container.innerHTML = `
        <div class="expedition-topological-board">
          <svg class="expedition-svg-paths" width="100%" height="100%">
            ${svgLines}
          </svg>
          <div class="expedition-nodes-layer">
            ${nodeHtml}
          </div>
        </div>
      `;
    },

    /**
     * 渲染随身战术手牌栏
     */
    renderBattleHand(session) {
      const dock = document.getElementById('expeditionHandDock');
      if (!dock) return;

      const hand = session.battleHand || ['The Hermit', 'Temperance', 'The Devil'];
      dock.innerHTML = hand.map(cardName => {
        const info = (typeof getCardObject === 'function') ? getCardObject(cardName) : { arcana: cardName, skill: '战术神技', icon: '🃏' };
        return `
          <button class="battle-card-btn" onclick="ExpeditionMap.castTarot('${escapeHtml(cardName)}')" title="${escapeHtml(cardName)}: ${escapeHtml(info.skill || '')}">
            <span class="card-icon">${info.icon || '🃏'}</span>
            <span class="card-name">${escapeHtml(cardName)}</span>
          </button>
        `;
      }).join('');
    },

    /**
     * 玩家点击节点地标
     */
    handleNodeClick(nodeId) {
      if (typeof soundClick === 'function') soundClick();
      const res = ExpeditionEngine.previewNode(nodeId);
      if (!res.canEnter) {
        if (typeof showToast === 'function') showToast('⚠️ 该节点尚未解锁，请先突破前方防线！');
        return;
      }
      this.openNodePreview(res.node);
    },

    /**
     * 打开节点前瞻情报面板
     */
    openNodePreview(node) {
      let modal = document.getElementById('nodePreviewModal');
      if (!modal) {
        modal = document.createElement('div');
        modal.id = 'nodePreviewModal';
        modal.className = 'modal-box';
        modal.style.cssText = 'max-width: 520px; padding: 22px; z-index: 10000;';
        document.body.appendChild(modal);
      }

      const isPolluted = node.type === 'polluted' || node.sanCost > 0;
      const isCamp = node.type === 'camp';
      const isGatekeeper = node.type === 'gatekeeper';

      modal.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1.5px solid var(--paper-border); padding-bottom:12px; margin-bottom:14px;">
          <div style="display:flex; align-items:center; gap:10px;">
            <span style="font-size:32px;">${node.icon}</span>
            <div>
              <div style="font-weight:900; font-size:17px; color:var(--text-primary);">${escapeHtml(node.name)}</div>
              <div style="font-size:11.5px; color:var(--text-secondary); margin-top:2px;">第 ${node.step} 阶段 · ${isPolluted ? '高危污染支路' : (isCamp ? '安全避难营地' : (isGatekeeper ? '终极守关大决战' : '常规推进哨卡'))}</div>
            </div>
          </div>
          <button class="btn btn-secondary" style="font-size:11px; padding:2px 8px;" onclick="ExpeditionMap.closeNodePreview()">✕</button>
        </div>

        <!-- 节点背景描述 -->
        <div style="background:var(--paper-surface-sub); border:1px solid var(--paper-border); border-radius:var(--radius-md); padding:12px 14px; font-size:13px; color:var(--text-primary); line-height:1.6; margin-bottom:14px;">
          ${escapeHtml(node.desc)}
        </div>

        <!-- 代价与收益明细 (事前明示) -->
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-bottom:16px;">
          <div style="background:${isPolluted ? 'rgba(239, 68, 68, 0.08)' : 'rgba(16, 185, 129, 0.08)'}; border:1px solid ${isPolluted ? 'rgba(239, 68, 68, 0.3)' : 'rgba(16, 185, 129, 0.3)'}; border-radius:var(--radius-sm); padding:10px; text-align:center;">
            <div style="font-size:10.5px; color:var(--text-secondary);">心智清明代价</div>
            <div style="font-size:16px; font-weight:800; color:${isPolluted ? 'var(--brand-danger)' : 'var(--brand-success)'}; margin-top:2px;">
              ${node.sanCost > 0 ? `-${node.sanCost} SAN` : '0 消耗 (清明稳健)'}
            </div>
          </div>
          <div style="background:rgba(245, 158, 11, 0.08); border:1px solid rgba(245, 158, 11, 0.3); border-radius:var(--radius-sm); padding:10px; text-align:center;">
            <div style="font-size:10.5px; color:var(--text-secondary);">突破战利预估</div>
            <div style="font-size:16px; font-weight:800; color:var(--brand-accent); margin-top:2px;">
              +${node.rewardGold} G / +${node.rewardXp} XP
            </div>
          </div>
        </div>

        <!-- 确认行动按钮 -->
        <div style="display:flex; gap:10px;">
          <button class="btn btn-primary" style="flex:2; height:44px; font-size:14px; font-weight:800;" onclick="ExpeditionMap.confirmEnterNode(${node.id})">
            ⚔️ 确认踏入前进 ➔
          </button>
          <button class="btn btn-secondary" style="flex:1; height:44px; font-size:12px;" onclick="ExpeditionMap.closeNodePreview()">
            ✕ 另选他路
          </button>
        </div>
      `;

      modal.style.display = 'block';
      setTimeout(() => modal.style.opacity = '1', 10);
      const overlay = document.getElementById('drawerOverlay');
      if (overlay) overlay.classList.add('open');
    },

    closeNodePreview() {
      const modal = document.getElementById('nodePreviewModal');
      if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => modal.style.display = 'none', 200);
      }
      const overlay = document.getElementById('drawerOverlay');
      if (overlay) overlay.classList.remove('open');
    },

    /**
     * 确认踏入节点，拉起遭遇挑战
     */
    async confirmEnterNode(nodeId) {
      this.closeNodePreview();
      const res = await ExpeditionEngine.enterNode(nodeId);
      this.renderMap();

      if (res.node.type === 'camp') {
        this.openCampModal(res.node);
      } else {
        this.openEncounterModal(res.encounter, res.node);
      }
    },

    /**
     * 展开营地休整模态框
     */
    openCampModal(node) {
      let modal = document.getElementById('expeditionCampModal');
      if (!modal) {
        modal = document.createElement('div');
        modal.id = 'expeditionCampModal';
        modal.className = 'modal-box';
        modal.style.cssText = 'max-width: 520px; padding: 24px; z-index: 10000; text-align:center;';
        document.body.appendChild(modal);
      }

      const session = ExpeditionEngine.getSession();
      const grayHp = session ? session.grayHp : 0;

      modal.innerHTML = `
        <div style="font-size:42px; margin-bottom:10px;">⛺</div>
        <div style="font-weight:900; font-size:18px; color:var(--text-primary); margin-bottom:6px;">背风岩壁 · 营火微暖</div>
        <div style="font-size:13px; color:var(--text-secondary); max-width:380px; margin:0 auto 18px; line-height:1.6;">
          你在荒原深处寻得了一处未熄灭的避难营火。温火能抚慰受蚀的心智，并促使灰血快速自愈结痂。
        </div>

        <div style="background:var(--paper-surface-sub); border:1px solid var(--paper-border); border-radius:var(--radius-md); padding:14px; margin-bottom:20px; text-align:left;">
          <div style="font-size:12.5px; font-weight:700; color:var(--text-primary); margin-bottom:6px;">🔥 营地休整效果：</div>
          <div style="font-size:12px; color:var(--brand-success); margin-bottom:4px;">✓ 自愈全部尚未愈合的灰血 (+${grayHp} HP)</div>
          <div style="font-size:12px; color:var(--brand-accent);">✓ 炉火暖意抚慰心神清明 (+15 SAN)</div>
        </div>

        <button class="btn btn-primary" style="width:100%; height:44px; font-size:14px; font-weight:800;" onclick="ExpeditionMap.executeCampRest()">
          🏕️ 调息休整，整装前行 ➔
        </button>
      `;

      modal.style.display = 'block';
      setTimeout(() => modal.style.opacity = '1', 10);
      const overlay = document.getElementById('drawerOverlay');
      if (overlay) overlay.classList.add('open');
    },

    async executeCampRest() {
      if (typeof soundSuccess === 'function') soundSuccess();
      const res = await ExpeditionEngine.campRest();
      const modal = document.getElementById('expeditionCampModal');
      if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => modal.style.display = 'none', 200);
      }
      const overlay = document.getElementById('drawerOverlay');
      if (overlay) overlay.classList.remove('open');

      if (typeof showToast === 'function') {
        showToast(`🏕️ 营地休整完毕：自愈 +${res.healedHp} HP · 恢复 +${res.sanRecovered} SAN！`);
      }
      this.renderMap();
    },

    /**
     * 展开答题遭遇模态框
     */
    openEncounterModal(encounter, node) {
      let modal = document.getElementById('expeditionEncounterModal');
      if (!modal) {
        modal = document.createElement('div');
        modal.id = 'expeditionEncounterModal';
        modal.className = 'modal-box';
        modal.style.cssText = 'max-width: 620px; max-height: 90vh; overflow-y: auto; padding: 22px; z-index: 10000;';
        document.body.appendChild(modal);
      }

      const pollutionNotice = node.sanCost > 0 ? `
        <div style="background:rgba(239, 68, 68, 0.08); border-left:3.5px solid var(--brand-danger); border-radius:var(--radius-sm); padding:8px 12px; font-size:11.5px; color:var(--brand-danger); margin-bottom:12px;">
          🌫️ <strong>异象污染干扰中</strong>：词义近义混淆已激活，请仔细辨析语境核心考点！
        </div>
      ` : '';

      modal.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1.5px solid var(--paper-border); padding-bottom:12px; margin-bottom:14px;">
          <div style="display:flex; align-items:center; gap:10px;">
            <span style="font-size:26px;">${node.icon}</span>
            <div>
              <div style="font-weight:900; font-size:16.5px; color:var(--text-primary);">${escapeHtml(node.name)} · 突破遭遇</div>
              <div style="font-size:11.5px; color:var(--text-secondary); margin-top:2px;">考点锁定中 · 答错转化灰血，沉着作答</div>
            </div>
          </div>
        </div>

        ${pollutionNotice}

        <!-- 剧情与原著语境 -->
        <div style="background:var(--paper-surface-sub); border:1px solid var(--paper-border); border-radius:var(--radius-md); padding:14px 16px; margin-bottom:16px;">
          <div style="font-size:14px; font-weight:700; color:var(--text-primary); line-height:1.7; margin-bottom:6px;">
            "${escapeHtml(encounter.story || '')}"
          </div>
          <div style="font-size:12px; color:var(--text-secondary); line-height:1.6;">
            ${escapeHtml(encounter.story_cn || '')}
          </div>
        </div>

        <!-- 考点单词主展示 -->
        <div style="text-align:center; margin-bottom:16px;">
          <span style="font-family:var(--font-serif); font-size:24px; font-weight:900; color:var(--brand-primary); letter-spacing:0.5px;">
            ${escapeHtml(encounter.word)}
          </span>
          <span style="font-size:13px; color:var(--text-secondary); margin-left:8px; font-family:var(--font-mono);">
            ${escapeHtml(encounter.phonetic || '')}
          </span>
        </div>

        <!-- 4 选项网格 -->
        <div id="encounterOptionsGrid" style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-bottom:16px;">
          ${encounter.options.map((optText, idx) => `
            <button class="btn btn-secondary encounter-opt-btn" 
                    id="encounterOpt_${idx}"
                    style="min-height:50px; text-align:left; padding:10px 14px; font-size:13px; line-height:1.4; border-radius:var(--radius-md);" 
                    onclick="ExpeditionMap.submitOption(${idx})">
              <span style="font-weight:800; color:var(--brand-primary); margin-right:6px;">${String.fromCharCode(65 + idx)}.</span>
              ${escapeHtml(optText)}
            </button>
          `).join('')}
        </div>

        <!-- 遭遇战底部状态与继续按钮 -->
        <div id="encounterResolutionArea" style="display:none; margin-top:14px;"></div>
      `;

      modal.style.display = 'block';
      setTimeout(() => modal.style.opacity = '1', 10);
      const overlay = document.getElementById('drawerOverlay');
      if (overlay) overlay.classList.add('open');
    },

    /**
     * 玩家提交选项答案
     */
    async submitOption(selectedIdx) {
      // 禁用所有选项按钮防止重复点击
      const btns = document.querySelectorAll('.encounter-opt-btn');
      btns.forEach(b => b.disabled = true);

      const res = await ExpeditionEngine.submitAnswer(selectedIdx);
      if (res.duplicate) return;

      const encounter = res.encounter;
      const correctBtn = document.getElementById(`encounterOpt_${encounter.correctIndex}`);
      const selectedBtn = document.getElementById(`encounterOpt_${selectedIdx}`);

      if (correctBtn) {
        correctBtn.style.background = 'rgba(16, 185, 129, 0.15)';
        correctBtn.style.borderColor = 'var(--brand-success)';
        correctBtn.style.color = 'var(--brand-success)';
        correctBtn.style.fontWeight = '800';
      }

      if (!res.isCorrect && selectedBtn) {
        selectedBtn.style.background = 'rgba(239, 68, 68, 0.15)';
        selectedBtn.style.borderColor = 'var(--brand-danger)';
        selectedBtn.style.color = 'var(--brand-danger)';
      }

      if (res.isCorrect) {
        if (typeof soundSuccess === 'function') soundSuccess();
      } else {
        if (typeof soundError === 'function') soundError();
      }

      // 更新 HUD
      this.updateHud(ExpeditionEngine.getSession());

      // 展开战后继续行动面板
      const resArea = document.getElementById('encounterResolutionArea');
      if (resArea) {
        resArea.style.display = 'block';
        resArea.innerHTML = `
          <div style="background:${res.isCorrect ? 'rgba(16, 185, 129, 0.08)' : 'rgba(239, 68, 68, 0.08)'}; border:1px solid ${res.isCorrect ? 'var(--brand-success)' : 'var(--brand-danger)'}; border-radius:var(--radius-md); padding:12px 14px; margin-bottom:14px;">
            <div style="font-weight:800; font-size:14px; color:${res.isCorrect ? 'var(--brand-success)' : 'var(--brand-danger)'}; margin-bottom:4px;">
              ${res.isCorrect ? '🎯 突破防线！正确命中考点' : '⚠️ 遭遇挫折！生命受损转化为自愈灰血'}
            </div>
            <div style="font-size:12px; color:var(--text-secondary);">
              释义：<strong>${escapeHtml(encounter.word)}</strong> ${escapeHtml(encounter.translation)}
            </div>
            <div style="font-size:11.5px; margin-top:6px; color:${res.isCorrect ? 'var(--brand-success)' : 'var(--brand-accent)'};">
              ${res.isCorrect ? `+${res.gainedGold} Gold · +${res.gainedXp} XP` : '已记入学习档案，可在营地回忆愈合或归来研习'}
            </div>
          </div>

          <button class="btn btn-primary" style="width:100%; height:44px; font-size:14px; font-weight:800;" onclick="ExpeditionMap.continueFromEncounter()">
            ➔ 突破当前封锁，返回地图继续前进
          </button>
        `;
      }
    },

    /**
     * 答题完成后关闭模态框返回地图
     */
    continueFromEncounter() {
      const modal = document.getElementById('expeditionEncounterModal');
      if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => modal.style.display = 'none', 200);
      }
      const overlay = document.getElementById('drawerOverlay');
      if (overlay) overlay.classList.remove('open');

      const session = ExpeditionEngine.getSession();
      if (session && session.status === 'in_progress') {
        this.renderMap();
      } else {
        // 远征结束（通关或力竭）
        this.finishExpedition();
      }
    },

    /**
     * 施放战术塔罗牌
     */
    async castTarot(cardName) {
      if (typeof soundClick === 'function') soundClick();
      const res = await ExpeditionEngine.castTacticalTarot(cardName);
      if (res.success) {
        if (typeof showToast === 'function') showToast(`🎴 释放【${cardName}】：${res.effect}`);
        this.updateHud(ExpeditionEngine.getSession());
      } else {
        if (typeof showToast === 'function') showToast('⚠️ 无法施放该卡牌');
      }
    },

    /**
     * 地图顶部【见好就收安全撤退】
     */
    async evacuateFromMap() {
      if (typeof soundClick === 'function') soundClick();
      if (!confirm('确定要在此时【见好就收安全撤退】吗？\n你将 100% 携带当前已赚取的所有金币、经验与已愈合的生命值安全返回小石屋。')) {
        return;
      }
      const summary = await ExpeditionEngine.evacuate();
      this.handleConcludeSummary(summary);
    },

    /**
     * 终局结束处理
     */
    async finishExpedition() {
      const session = ExpeditionEngine.getSession();
      const outcome = session ? session.status : 'completed';
      const summary = await ExpeditionEngine.conclude(outcome);
      this.handleConcludeSummary(summary);
    },

    /**
     * 结算并平滑切回小石屋壁炉复盘
     */
    handleConcludeSummary(summary) {
      if (typeof soundSuccess === 'function') soundSuccess();
      // 同步永久收益到玩家全局 profile
      if (typeof playerProfile !== 'undefined' && playerProfile) {
        playerProfile.gold = (playerProfile.gold || 0) + (summary.finalGold || 0);
        playerProfile.xp = (playerProfile.xp || 0) + (summary.finalXp || 0);
        playerProfile.hp = summary.finalHp || 100;
        playerProfile.san = summary.finalSan || 100;
        playerProfile.grayHp = 0;
        if (typeof saveToStorage === 'function' && typeof STORAGE_KEYS !== 'undefined') {
          saveToStorage(STORAGE_KEYS.PROFILE, playerProfile);
        }
      }

      if (typeof window !== 'undefined') {
        window.lastExpeditionSummary = summary;
      }

      // 切回石屋大厅并唤起炉边复盘浮窗
      if (typeof switchNavView === 'function') {
        switchNavView('cottage').then(() => {
          setTimeout(() => {
            if (typeof openCottageDebriefModal === 'function') {
              openCottageDebriefModal(summary);
            }
          }, 300);
        });
      }
    }
  };

  return ExpeditionMap;
}));
