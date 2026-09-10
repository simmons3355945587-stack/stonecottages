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
    timerInterval: null,
    remainingSeconds: 15,

    startEncounterTimer(seconds = 15) {
      this.clearEncounterTimer();
      this.remainingSeconds = seconds;
      const totalMs = seconds * 1000;
      const startTime = Date.now();

      this.timerInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const leftMs = Math.max(0, totalMs - elapsed);
        const leftSec = Math.ceil(leftMs / 1000);
        const pct = Math.max(0, (leftMs / totalMs) * 100);

        const currentText = document.getElementById('countdownSecs');
        const currentBar = document.getElementById('countdownProgressBar');
        if (currentText) currentText.textContent = leftSec;
        if (currentBar) currentBar.style.width = `${pct}%`;

        if (leftMs <= 0) {
          this.clearEncounterTimer();
          this.handleTimeout();
        }
      }, 100);
    },

    clearEncounterTimer() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
    },

    async handleTimeout() {
      if (typeof soundFailure === 'function') soundFailure();
      await this.submitOption(-1);
    },

    /**
     * 辅助提取 3 个不重复的中文释义作为题目干扰项
     */
    _collectDistractors(targetWord, correctZh, wordPool = []) {
      const distractors = [];
      const cDict = (typeof chineseDict !== 'undefined') ? chineseDict : {};

      const candidates = (Array.isArray(wordPool) && wordPool.length > 0) ? wordPool : Object.keys(cDict);
      for (let i = 0; i < candidates.length && distractors.length < 3; i++) {
        const otherWord = candidates[(i * 11 + 3) % candidates.length];
        if (!otherWord || otherWord.toLowerCase() === targetWord.toLowerCase()) continue;
        let otherZh = cDict[otherWord] || cDict[otherWord.toLowerCase()];
        if (otherZh) {
          otherZh = String(otherZh).replace(/\(考纲词汇\)|（考纲词汇）/g, '').trim();
          if (otherZh && otherZh !== correctZh && !distractors.includes(otherZh)) {
            distractors.push(otherZh);
          }
        }
      }

      const fallbackPool = [
        '突发事件；紧急预案',
        '虚假繁荣；短暂欢愉',
        '毫无根据的猜测与怀疑',
        '持续的争端；利益分歧',
        '严密审查；仔细监督',
        '临界门槛；承受极限',
        '普遍共识；一致意见',
        '犹豫迟疑；犹豫不决'
      ];
      for (let f of fallbackPool) {
        if (distractors.length >= 3) break;
        if (f !== correctZh && !distractors.includes(f)) {
          distractors.push(f);
        }
      }

      return distractors;
    },

    /**
     * 动态加载小说章节及词库考题 (严格按照本轮锁定的词库范围与 Mark 过滤)
     */
    async getCandidateQuestionsForNode(nodeId, node) {
      const candidates = [];
      const session = (typeof ExpeditionEngine !== 'undefined') ? ExpeditionEngine.getSession() : null;
      const config = (session && session.config) ? session.config : {};
      const wordSource = config.wordSource || 'core';
      const markedOnly = !!config.markedOnly;

      // 1. 获取目标词库的原始生词列表
      let rawWords = [];
      if (typeof getSourceRawWords === 'function') {
        rawWords = getSourceRawWords(wordSource);
      }
      if (!Array.isArray(rawWords) || rawWords.length === 0) {
        if (wordSource === 'core' && typeof CORE_STUDY_WORDS !== 'undefined') rawWords = CORE_STUDY_WORDS;
        else if (wordSource === 'novel_ihopethisfindsyouwell' && typeof NOVEL_EXTRACTED_WORDS !== 'undefined') rawWords = NOVEL_EXTRACTED_WORDS;
        else if (wordSource === 'trade_business' && typeof TRADE_BUSINESS_WORDS !== 'undefined') rawWords = TRADE_BUSINESS_WORDS;
        else if (typeof defaultWords !== 'undefined' && Array.isArray(defaultWords)) rawWords = defaultWords;
        else rawWords = ['space', 'universe', 'unite', 'reunite', 'union', 'diverse', 'convert'];
      }

      // 2. 若勾选“只挑战 mark 词”，过滤出生词本重点标记词
      if (markedOnly) {
        const marksMap = (typeof marks !== 'undefined' && marks) ? marks : {};
        let filtered = rawWords.filter(w => (marksMap[w.toLowerCase()] || 0) > 0);
        if (filtered.length === 0) {
          // 若所选当前词库中无 mark 词，回退至全局所有的 mark 词
          const allMarked = Object.entries(marksMap).filter(([_, c]) => c > 0).map(([w]) => w);
          if (allMarked.length > 0) {
            filtered = allMarked;
          } else {
            // 全局也无 mark 词时保底全库
            filtered = rawWords;
          }
        }
        rawWords = filtered;
      }

      // 3. 若为原著模式且未勾选只挑战 mark 词，且有原著章节 beats，优先结合原著沉浸考题
      if (wordSource === 'novel_ihopethisfindsyouwell' && !markedOnly && typeof Stone !== 'undefined' && typeof Stone.chapter === 'function') {
        const chId = (typeof currentNovelChapter !== 'undefined' && currentNovelChapter) ? currentNovelChapter : 1;
        let chapterData = null;
        try {
          chapterData = await Stone.chapter(chId);
        } catch (e) {
          console.warn('[ExpeditionMap] Failed to load chapter data:', e);
        }
        if (chapterData && Array.isArray(chapterData.beats) && chapterData.beats.length > 0) {
          const beats = chapterData.beats;
          const beatOffset = Math.max(0, ((nodeId - 1) * 3) % beats.length);
          const selectedBeats = beats.slice(beatOffset, beatOffset + 3);
          if (selectedBeats.length === 0) selectedBeats.push(beats[0]);

          for (const beat of selectedBeats) {
            const targetWord = beat.targetWord;
            let correctZh = (typeof chineseDict !== 'undefined' && (chineseDict[targetWord] || chineseDict[targetWord.toLowerCase()]))
              ? (chineseDict[targetWord] || chineseDict[targetWord.toLowerCase()])
              : (beat.options && beat.options[0] ? beat.options[0].action_cn : '目标考点释义');
            correctZh = String(correctZh).replace(/\(考纲词汇\)|（考纲词汇）/g, '').trim();

            const distractors = this._collectDistractors(targetWord, correctZh, beats.map(b => b.targetWord));
            candidates.push({
              word: targetWord,
              phonetic: (typeof extraDefinitions !== 'undefined' && extraDefinitions[targetWord]?.phonetic) || '',
              translation: correctZh,
              story: beat.story,
              story_cn: beat.story_cn,
              options: [correctZh, distractors[0], distractors[1], distractors[2]],
              correctIndex: 0
            });
          }
          if (candidates.length > 0) return candidates;
        }
      }

      // 4. 通用词库模式（核心背诵 / 外贸 / 全部总库 / 仅挑战 Mark 词）
      const poolLen = rawWords.length;
      const stepOffset = Math.max(0, ((nodeId - 1) * 3) % poolLen);
      const selectedWords = [];
      for (let i = 0; i < Math.min(3, poolLen); i++) {
        const w = rawWords[(stepOffset + i) % poolLen];
        if (w && !selectedWords.includes(w)) selectedWords.push(w);
      }
      if (selectedWords.length === 0 && poolLen > 0) selectedWords.push(rawWords[0]);

      for (const targetWord of selectedWords) {
        let correctZh = (typeof chineseDict !== 'undefined' && (chineseDict[targetWord] || chineseDict[targetWord.toLowerCase()]))
          ? (chineseDict[targetWord] || chineseDict[targetWord.toLowerCase()])
          : '核心考点释义';
        correctZh = String(correctZh).replace(/\(考纲词汇\)|（考纲词汇）/g, '').trim();

        const distractors = this._collectDistractors(targetWord, correctZh, rawWords);

        const storyEn = node.isListening
          ? `[TRANSMISSION INTERCEPT] Listen carefully to the audio transmission. Decipher the key term [${targetWord}] to maintain clear tactical comms.`
          : `[TACTICAL CHALLENGE] The hostile frontier perimeter is heavily locked down. Identify the true operational meaning of [${targetWord}] to disarm the barrier.`;

        const storyCn = node.isListening
          ? `【截获荒原加密电波】戴上耳机仔细辨听原声单词发音，准确识别考点词汇【${targetWord}】以破解破译无线电加密！`
          : `【遭遇荒原封锁防线】当前区域已被重度封锁，唯有精准洞悉核心考点【${targetWord}】的汉语释义，方能排除险境继续前行！`;

        candidates.push({
          word: targetWord,
          phonetic: (typeof extraDefinitions !== 'undefined' && extraDefinitions[targetWord]?.phonetic) || '',
          translation: correctZh,
          story: storyEn,
          story_cn: storyCn,
          options: [correctZh, distractors[0], distractors[1], distractors[2]],
          correctIndex: 0
        });
      }

      return candidates;
    },

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

      const scopeValEl = document.getElementById('expeditionScopeVal');
      if (scopeValEl) {
        const cfg = session.config || {};
        const sNames = { core: '核心背诵', novel_ihopethisfindsyouwell: '职场原著', trade_business: '外贸函电', all: '全部词库' };
        const sName = sNames[cfg.wordSource] || '核心背诵';
        scopeValEl.textContent = `${sName}${cfg.markedOnly ? ' · ★Mark词' : ''}`;
      }

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

      const session = (typeof ExpeditionEngine !== 'undefined') ? ExpeditionEngine.getSession() : null;
      const isPolluted = node.type === 'polluted' || node.sanCost > 0;
      const isCamp = node.type === 'camp';
      const isGatekeeper = node.type === 'gatekeeper';

      modal.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1.5px solid var(--paper-border); padding-bottom:12px; margin-bottom:14px;">
          <div style="display:flex; align-items:center; gap:10px;">
            <span style="font-size:32px;">${node.icon}</span>
            <div>
              <div style="font-weight:900; font-size:17px; color:var(--text-primary);">${escapeHtml(node.name)}</div>
              <div style="font-size:11.5px; color:var(--text-secondary); margin-top:2px;">
                第 ${node.step} 阶段 · ${isPolluted ? '高危污染支路' : (isCamp ? '安全避难营地' : (isGatekeeper ? '终极守关大决战' : '常规推进哨卡'))}
                ${session && session.config ? ` · <span style="color:var(--brand-primary); font-weight:700;">${session.config.wordSource === 'novel_ihopethisfindsyouwell' ? '职场原著' : (session.config.wordSource === 'trade_business' ? '外贸函电' : (session.config.wordSource === 'all' ? '全部词库' : '核心背诵'))}${session.config.markedOnly ? ' (★Mark生词)' : ''}</span>` : ''}
              </div>
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
      const session = ExpeditionEngine.getSession();
      const node = session ? session.nodes.find(n => n.id === nodeId) : null;
      const candidates = node ? await this.getCandidateQuestionsForNode(nodeId, node) : [];
      const res = await ExpeditionEngine.enterNode(nodeId, candidates);
      this.renderMap();

      if (res.node.type === 'camp') {
        this.openCampModal(res.node);
      } else if (res.encounter && res.encounter.type === 'event') {
        this.openAnomalyModal(res.encounter, res.node);
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
      const errors = (session && Array.isArray(session.recentErrors)) ? session.recentErrors : [];
      const hasErrors = errors.length > 0;

      let errorRecallHtml = '';
      if (hasErrors) {
        errorRecallHtml = `
          <div style="background:rgba(239, 68, 68, 0.06); border:1px solid rgba(239, 68, 68, 0.25); border-radius:var(--radius-md); padding:12px; margin-bottom:16px; text-align:left;">
            <div style="font-size:12px; font-weight:800; color:var(--brand-danger); margin-bottom:6px;">
              🔥 战线错词待温故清单 (${errors.length} 词)：
            </div>
            <div style="display:flex; flex-wrap:wrap; gap:6px;">
              ${errors.map(err => `
                <span style="background:var(--paper-surface); border:1px solid var(--paper-border); border-radius:4px; padding:2px 8px; font-size:11.5px; color:var(--text-primary);">
                  <strong>${escapeHtml(err.word)}</strong>: ${escapeHtml(err.translation)}
                </span>
              `).join('')}
            </div>
          </div>
        `;
      }

      modal.innerHTML = `
        <div style="font-size:42px; margin-bottom:10px;">⛺</div>
        <div style="font-weight:900; font-size:18px; color:var(--text-primary); margin-bottom:6px;">背风岩壁 · 营火微暖</div>
        <div style="font-size:13px; color:var(--text-secondary); max-width:380px; margin:0 auto 18px; line-height:1.6;">
          你在荒原深处寻得了一处未熄灭的避难营火。温火能抚慰受蚀的心智，并促使灰血快速自愈结痂。
        </div>

        ${errorRecallHtml}

        <div style="background:var(--paper-surface-sub); border:1px solid var(--paper-border); border-radius:var(--radius-md); padding:14px; margin-bottom:20px; text-align:left;">
          <div style="font-size:12.5px; font-weight:700; color:var(--text-primary); margin-bottom:6px;">🔥 营地休整效果：</div>
          <div style="font-size:12px; color:var(--brand-success); margin-bottom:4px;">✓ 自愈全部尚未愈合的灰血 (+${grayHp} HP)</div>
          <div style="font-size:12px; color:var(--brand-accent);">
            ✓ 炉火暖意抚慰心神清明 (${hasErrors ? '静默休整 +15 SAN / 围炉温故深度调息 +25 SAN' : '+15 SAN'})
          </div>
        </div>

        <div style="display:flex; flex-direction:column; gap:10px;">
          ${hasErrors ? `
            <button class="btn btn-primary" style="height:44px; font-size:13.5px; font-weight:800;" onclick="ExpeditionMap.executeCampRest(true)">
              🔥 围炉温故调息 (+自愈全部灰血 · +25 SAN 深度抚慰) ➔
            </button>
            <button class="btn btn-secondary" style="height:38px; font-size:12px;" onclick="ExpeditionMap.executeCampRest(false)">
              🏕️ 静默烤火休整 (+自愈全部灰血 · +15 SAN)
            </button>
          ` : `
            <button class="btn btn-primary" style="width:100%; height:44px; font-size:14px; font-weight:800;" onclick="ExpeditionMap.executeCampRest(false)">
              🏕️ 调息休整，整装前行 ➔
            </button>
          `}
        </div>
      `;

      modal.style.display = 'block';
      setTimeout(() => modal.style.opacity = '1', 10);
      const overlay = document.getElementById('drawerOverlay');
      if (overlay) overlay.classList.add('open');
    },

    async executeCampRest(deepRecall = false) {
      if (typeof soundSuccess === 'function') soundSuccess();
      const res = await ExpeditionEngine.campRest(deepRecall);
      const modal = document.getElementById('expeditionCampModal');
      if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => modal.style.display = 'none', 200);
      }
      const overlay = document.getElementById('drawerOverlay');
      if (overlay) overlay.classList.remove('open');

      if (typeof showToast === 'function') {
        const modeText = res.deepRecall ? '围炉温故深度调息' : '营火休整';
        showToast(`🏕️ ${modeText}完毕：自愈 +${res.healedHp} HP · 恢复 +${res.sanRecovered} SAN！`);
      }
      this.renderMap();
    },

    /**
     * 展开破败石塔古老异象模态框
     */
    openAnomalyModal(encounter, node) {
      let modal = document.getElementById('expeditionAnomalyModal');
      if (!modal) {
        modal = document.createElement('div');
        modal.id = 'expeditionAnomalyModal';
        modal.className = 'modal-box';
        modal.style.cssText = 'max-width: 560px; max-height: 90vh; overflow-y: auto; padding: 24px; z-index: 10000;';
        document.body.appendChild(modal);
      }

      const choicesHtml = (encounter.choices || []).map((c) => {
        const isSacrifice = c.sanCost > 0;
        const isHeal = c.gainHp > 0;
        const cardBorder = isSacrifice ? 'rgba(239, 68, 68, 0.4)' : (isHeal ? 'rgba(16, 185, 129, 0.4)' : 'var(--paper-border)');
        const cardBg = isSacrifice ? 'rgba(239, 68, 68, 0.05)' : (isHeal ? 'rgba(16, 185, 129, 0.05)' : 'var(--paper-surface-sub)');
        return `
          <div class="anomaly-choice-card" 
               style="background:${cardBg}; border:1.5px solid ${cardBorder}; border-radius:var(--radius-md); padding:14px 16px; margin-bottom:12px; cursor:pointer; transition:all 0.2s ease;"
               onclick="ExpeditionMap.submitAnomalyChoice('${escapeHtml(c.id)}')">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
              <div style="font-weight:900; font-size:14.5px; color:var(--text-primary);">${escapeHtml(c.title)}</div>
              <span style="font-size:11.5px; font-weight:800; color:${isSacrifice ? 'var(--brand-danger)' : (isHeal ? 'var(--brand-success)' : 'var(--text-secondary)')};">
                ${c.sanCost > 0 ? `-${c.sanCost} SAN` : (isHeal ? `+${c.gainHp} HP` : '0 消耗')}
              </span>
            </div>
            <div style="font-size:12.5px; color:var(--text-secondary); line-height:1.5;">
              ${escapeHtml(c.desc)}
            </div>
          </div>
        `;
      }).join('');

      modal.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1.5px solid var(--paper-border); padding-bottom:12px; margin-bottom:14px;">
          <div style="display:flex; align-items:center; gap:10px;">
            <span style="font-size:32px;">${node.icon}</span>
            <div>
              <div style="font-weight:900; font-size:17px; color:var(--text-primary);">${escapeHtml(encounter.title || node.name)}</div>
              <div style="font-size:11.5px; color:var(--brand-accent); margin-top:2px;">🏛️ 远古异象交互 · 战略抉择</div>
            </div>
          </div>
        </div>

        <div style="background:var(--paper-surface-sub); border:1px solid var(--paper-border); border-radius:var(--radius-md); padding:14px; margin-bottom:16px;">
          <div style="font-size:13.5px; color:var(--text-primary); line-height:1.6; margin-bottom:6px;">
            ${escapeHtml(encounter.story)}
          </div>
          <div style="font-size:12px; color:var(--text-secondary); line-height:1.5;">
            ${escapeHtml(encounter.story_cn)}
          </div>
        </div>

        <div style="font-size:12.5px; font-weight:800; color:var(--text-primary); margin-bottom:10px;">
          ⚖️ 权衡代价与收益，选择你的行动路线：
        </div>

        <div id="anomalyChoicesContainer">
          ${choicesHtml}
        </div>

        <div id="anomalyResolutionArea" style="display:none; margin-top:14px;"></div>
      `;

      modal.style.display = 'block';
      setTimeout(() => modal.style.opacity = '1', 10);
      const overlay = document.getElementById('drawerOverlay');
      if (overlay) overlay.classList.add('open');
    },

    async submitAnomalyChoice(choiceId) {
      const res = await ExpeditionEngine.resolveAnomalyChoice(choiceId);
      if (choiceId === 'relic_sacrifice') {
        if (typeof soundSpell === 'function') soundSpell();
      } else {
        if (typeof soundSuccess === 'function') soundSuccess();
      }

      this.updateHud(ExpeditionEngine.getSession());
      this.renderBattleHand(ExpeditionEngine.getSession());

      const choicesContainer = document.getElementById('anomalyChoicesContainer');
      if (choicesContainer) choicesContainer.style.display = 'none';

      const resArea = document.getElementById('anomalyResolutionArea');
      if (resArea) {
        resArea.style.display = 'block';
        resArea.innerHTML = `
          <div style="background:rgba(16, 185, 129, 0.08); border:1.5px solid var(--brand-success); border-radius:var(--radius-md); padding:14px 16px; margin-bottom:16px;">
            <div style="font-weight:800; font-size:14.5px; color:var(--brand-success); margin-bottom:6px;">
              ${escapeHtml(res.message)}
            </div>
            <div style="font-size:12px; color:var(--text-secondary);">
              异象消弭，古塔防线已破。前哨与最终决战通道已向你敞开！
            </div>
          </div>
          <button class="btn btn-primary" style="width:100%; height:44px; font-size:14px; font-weight:800;" onclick="ExpeditionMap.continueFromAnomaly()">
            ➔ 突破古塔，返回地图继续前进
          </button>
        `;
      }
    },

    continueFromAnomaly() {
      const modal = document.getElementById('expeditionAnomalyModal');
      if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => modal.style.display = 'none', 200);
      }
      const overlay = document.getElementById('drawerOverlay');
      if (overlay) overlay.classList.remove('open');
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

      const isPolluted = node.type === 'polluted' || encounter.pollutionType === 'synonym_confusion';
      const isBoss = node.type === 'gatekeeper';
      const isListening = node.type === 'listening' || encounter.isListening;
      const hasTimer = isPolluted || encounter.pollutionType === 'time_pressure';

      const listeningHtml = isListening ? `
        <div class="expedition-listening-banner" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.12), rgba(147, 51, 234, 0.08)); border: 1.5px solid rgba(59, 130, 246, 0.35); border-radius: var(--radius-md); padding: 12px 16px; margin-bottom: 14px; display: flex; align-items: center; justify-content: space-between; gap: 12px;">
          <div style="display:flex; align-items:center; gap:10px;">
            <span style="font-size:24px;">🎧</span>
            <div>
              <div style="font-weight:900; font-size:14px; color:var(--brand-primary);">风语窃听哨站 · 音频考点辨析</div>
              <div style="font-size:11px; color:var(--text-secondary); margin-top:2px;">荒原狂风呼啸，戴上耳机辨听原声，击破获得双倍高额金币！</div>
            </div>
          </div>
          <button type="button" class="btn btn-primary listening-audio-btn" onclick="ExpeditionMap.playEncounterAudio()" style="font-weight:800; font-size:12.5px; padding:6px 14px; display:inline-flex; align-items:center; gap:6px; flex-shrink:0;">
            🔊 辨听原声发音
          </button>
        </div>
      ` : '';

      const bannerHtml = isBoss ? `
        <div class="expedition-boss-banner">
          <span style="font-size:26px;">👑</span>
          <div>
            <div style="font-weight:900; font-size:15px; color:#f59e0b;">荒原领主 · 终极防线封锁</div>
            <div style="font-size:11px; color:var(--text-secondary); margin-top:2px;">对本轮接触的核心考点进行综合语境研判，突破斩获全线大捷！</div>
          </div>
        </div>
      ` : (isPolluted ? `
        <div class="expedition-mist-banner">
          <span style="font-size:20px;">🌫️</span>
          <div>
            <strong>【迷雾异象压制】</strong> 溪谷低语蔓延侵蚀，注入近义词高频干扰项，请仔细辨析！
          </div>
        </div>
      ` : '');

      const timerHtml = hasTimer ? `
        <div class="expedition-countdown-container" id="expeditionTimerContainer">
          <div class="countdown-label-row">
            <span>⏱️ 异象压制倒计时</span>
            <span><span id="countdownSecs">15</span>s</span>
          </div>
          <div class="countdown-track">
            <div class="countdown-bar" id="countdownProgressBar" style="width: 100%;"></div>
          </div>
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

        ${listeningHtml}
        ${bannerHtml}
        ${timerHtml}

        <!-- 剧情与原著语境 -->
        <div style="background:var(--paper-surface-sub); border:1px solid var(--paper-border); border-radius:var(--radius-md); padding:12px 14px; margin-bottom:14px; max-height:120px; overflow-y:auto;">
          <div style="font-size:13.5px; font-weight:700; color:var(--text-primary); line-height:1.6; margin-bottom:6px;">
            "${escapeHtml(encounter.story || '')}"
          </div>
          <div style="font-size:12px; color:var(--text-secondary); line-height:1.5;">
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

        <!-- 遭遇战战术塔罗即时施放栏 -->
        <div class="encounter-tarot-dock" id="encounterTarotDock" style="background: var(--paper-surface-sub); border: 1.5px dashed var(--paper-border); border-radius: var(--radius-md); padding: 10px 14px; margin-bottom: 14px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <span style="font-size:11.5px; font-weight:800; color:var(--text-secondary);">🎴 战术塔罗即时施放 (点击出牌翻盘)：</span>
            <span style="font-size:10.5px; color:var(--brand-accent);">每场消耗</span>
          </div>
          <div class="encounter-tarot-cards-row" id="encounterTarotCardsRow" style="display:flex; gap:8px; flex-wrap:wrap;">
            ${this.getEncounterTarotCardsHtml()}
          </div>
        </div>

        <div id="encounterHintBox" style="display:none; margin-bottom:14px;"></div>

        <!-- 遭遇战底部状态与继续按钮 -->
        <div id="encounterResolutionArea" style="display:none; margin-top:14px;"></div>
      `;

      modal.style.display = 'block';
      setTimeout(() => modal.style.opacity = '1', 10);
      const overlay = document.getElementById('drawerOverlay');
      if (overlay) overlay.classList.add('open');

      if (hasTimer) {
        this.startEncounterTimer(15);
      }
    },

    /**
     * 渲染遭遇战内可用的塔罗手牌 HTML
     */
    getEncounterTarotCardsHtml() {
      const session = (typeof ExpeditionEngine !== 'undefined') ? ExpeditionEngine.getSession() : null;
      const hand = (session && Array.isArray(session.battleHand)) ? session.battleHand : [];
      if (hand.length === 0) {
        return '<span style="font-size:11.5px; color:var(--text-muted);">（当前无随身战术手牌）</span>';
      }
      return hand.map(cardName => {
        const info = (typeof getCardObject === 'function') ? getCardObject(cardName) : { arcana: cardName, skill: '战术神技', icon: '🃏' };
        return `
          <button type="button" class="battle-card-btn" onclick="ExpeditionMap.castEncounterTarot('${escapeHtml(cardName)}')" title="${escapeHtml(cardName)}: ${escapeHtml(info.skill || '')}">
            <span class="card-icon">${info.icon || '🃏'}</span>
            <span class="card-name">${escapeHtml(cardName)}</span>
          </button>
        `;
      }).join('');
    },

    /**
     * 播放听力考点单词原声
     */
    playEncounterAudio() {
      if (typeof soundClick === 'function') soundClick();
      const session = (typeof ExpeditionEngine !== 'undefined') ? ExpeditionEngine.getSession() : null;
      const enc = session ? session.activeEncounter : null;
      if (enc && enc.word) {
        if (typeof speakWord === 'function') {
          speakWord(enc.word);
        } else if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
          const u = new SpeechSynthesisUtterance(enc.word);
          u.lang = 'en-US';
          window.speechSynthesis.speak(u);
        }
      }
    },

    /**
     * 遭遇战内施放战术塔罗牌
     */
    async castEncounterTarot(cardName) {
      if (typeof soundClick === 'function') soundClick();
      const res = await ExpeditionEngine.castTacticalTarot(cardName);
      if (!res.success) {
        if (typeof showToast === 'function') showToast('⚠️ 无法施放该卡牌');
        return;
      }

      if (res.action === 'eliminate_wrong' && Array.isArray(res.eliminatedIndices)) {
        res.eliminatedIndices.forEach(idx => {
          const optBtn = document.getElementById(`encounterOpt_${idx}`);
          if (optBtn) {
            optBtn.classList.add('option-eliminated');
            optBtn.disabled = true;
          }
        });
        if (typeof showToast === 'function') showToast(`🎴【${cardName}】：真理破阵！已排除 2 个致命干扰项！`);
      } else if (res.action === 'hint') {
        const hintEl = document.getElementById('encounterHintBox');
        if (hintEl) {
          hintEl.style.display = 'block';
          hintEl.innerHTML = `<div style="background:rgba(245, 158, 11, 0.1); border:1px solid rgba(245, 158, 11, 0.35); border-radius:var(--radius-md); padding:10px 14px; font-size:12.5px; color:var(--text-primary); text-align:left;">💡 <strong>求索之光</strong>：${escapeHtml(res.hintText || res.effect)}</div>`;
        }
        if (typeof showToast === 'function') showToast(`🎴【${cardName}】：考点核心线索已浮现！`);
      } else {
        if (typeof showToast === 'function') showToast(`🎴【${cardName}】：${res.effect}`);
      }

      // 更新手牌 UI 和 HUD
      const tarotRow = document.getElementById('encounterTarotCardsRow');
      if (tarotRow) {
        tarotRow.innerHTML = this.getEncounterTarotCardsHtml();
      }
      this.updateHud(ExpeditionEngine.getSession());
      this.renderBattleHand(ExpeditionEngine.getSession());
    },

    /**
     * 玩家提交选项答案
     */
    async submitOption(selectedIdx) {
      this.clearEncounterTimer();

      // 禁用所有选项按钮防止重复点击
      const btns = document.querySelectorAll('.encounter-opt-btn');
      btns.forEach(b => b.disabled = true);

      const res = await ExpeditionEngine.submitAnswer(selectedIdx);
      if (res.duplicate) return;

      const encounter = res.encounter;
      const correctBtn = document.getElementById(`encounterOpt_${encounter.correctIndex}`);
      const selectedBtn = selectedIdx >= 0 ? document.getElementById(`encounterOpt_${selectedIdx}`) : null;

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
        const isTimeout = selectedIdx === -1;
        resArea.style.display = 'block';

        if (res.defeated) {
          if (typeof soundFailure === 'function') soundFailure();
          resArea.innerHTML = `
            <div class="expedition-collapse-banner" style="background: linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.98)); border: 2px solid #64748b; border-radius: var(--radius-md); padding: 18px; margin-bottom: 16px; text-align: center; box-shadow: 0 4px 24px rgba(0, 0, 0, 0.45); color: #f8fafc;">
              <div style="font-size: 38px; margin-bottom: 6px;">❄️🐕</div>
              <div style="font-weight: 900; font-size: 17px; color: #f59e0b; margin-bottom: 4px;">荒原绝境迷失 · 搜救归来</div>
              <div style="font-size: 13px; color: #cbd5e1; line-height: 1.6; margin-bottom: 10px;">
                你在荒原冰雪与迷雾中力竭倒下……但小石屋壁炉的微温唤来了搜救犬，已将你平安护送回避难所。<br>
                <strong>本次临时战利金币折损 50%</strong>，已牢牢掌握的词汇与经验已永久记录！
              </div>
            </div>

            <button class="btn btn-primary" style="width:100%; height:46px; font-size:15px; font-weight:900; background: linear-gradient(135deg, #475569, #334155); border: 1px solid #64748b;" onclick="ExpeditionMap.continueFromEncounter()">
              🏡 回到小石屋壁炉旁苏醒 ➔
            </button>
          `;
        } else if (res.isGrandTriumph) {
          if (typeof soundSuccess === 'function') soundSuccess();
          resArea.innerHTML = `
            <div class="expedition-grand-triumph-banner" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(239, 68, 68, 0.15)); border: 2px solid var(--brand-accent); border-radius: var(--radius-md); padding: 18px; margin-bottom: 16px; text-align: center; box-shadow: 0 4px 24px rgba(245, 158, 11, 0.35);">
              <div style="font-size: 38px; margin-bottom: 6px; animation: bounce 1s infinite alternate ease-in-out;">👑🏆✨</div>
              <div style="font-weight: 900; font-size: 18px; color: #f59e0b; margin-bottom: 4px;">远征全线大捷 · 荒原领主终极突破！</div>
              <div style="font-size: 13px; color: var(--text-primary); margin-bottom: 8px;">
                突破全部防线！斩获领主击破重赏 <strong>+${res.gainedGold} G · +${res.gainedXp} XP</strong> 与全胜通关特赏！
              </div>
              <div style="font-size: 12px; color: var(--text-secondary);">
                核心辨析考点：<strong>${escapeHtml(encounter.word)}</strong> ${escapeHtml(encounter.translation)}
              </div>
            </div>

            <button class="btn btn-primary" style="width:100%; height:46px; font-size:15px; font-weight:900; background: linear-gradient(135deg, #f59e0b, #ef4444); border:none; box-shadow: 0 4px 16px rgba(245, 158, 11, 0.4);" onclick="ExpeditionMap.continueFromEncounter()">
              🏆 凯旋归来 · 炉边茶几庆功复盘 ➔
            </button>
          `;
        } else {
          resArea.innerHTML = `
            <div style="background:${res.isCorrect ? 'rgba(16, 185, 129, 0.08)' : 'rgba(239, 68, 68, 0.08)'}; border:1px solid ${res.isCorrect ? 'var(--brand-success)' : 'var(--brand-danger)'}; border-radius:var(--radius-md); padding:12px 14px; margin-bottom:14px;">
              <div style="font-weight:800; font-size:14px; color:${res.isCorrect ? 'var(--brand-success)' : 'var(--brand-danger)'}; margin-bottom:4px;">
                ${res.isCorrect ? '🎯 突破防线！正确命中考点' : (isTimeout ? '⏱️ 倒计时耗尽！受到迷雾侵蚀反噬' : '⚠️ 遭遇挫折！生命受损转化为自愈灰血')}
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
        setTimeout(() => {
          resArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 50);
      }
    },

    /**
     * 答题完成后关闭模态框返回地图
     */
    continueFromEncounter() {
      this.clearEncounterTimer();
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
          if (typeof updateCottageExpeditionUI === 'function') {
            updateCottageExpeditionUI();
          }
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
