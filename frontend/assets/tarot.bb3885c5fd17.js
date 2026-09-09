const TACTICAL_TAROT_ARCANA = [
  { name: "The Hermit", skill: "求索之光", desc: "洞悉线索与词根提示，辅助作答灰血减半", icon: "💡", type: "hint", rarity: "SR" },
  { name: "Temperance", skill: "平衡回响", desc: "错词回忆灰血恢复量翻倍 (+4 HP)", icon: "🕊️", type: "temperance", rarity: "SR" },
  { name: "Justice", skill: "天平平衡", desc: "判定成功时立即抚慰恢复 +20 SAN", icon: "⚖️", type: "justice", rarity: "SR" },
  { name: "The Devil", skill: "暗夜豪赌", desc: "主动献祭 15 SAN，当前节点通关金币翻倍", icon: "🔥", type: "devil", rarity: "SR" },
  { name: "Wheel of Fortune", skill: "命运重铸", desc: "舍弃高危情境，无损重抽安全生还题", icon: "🌪️", type: "reroll", rarity: "UR" },
  { name: "Death", skill: "绝境涅槃", desc: "致命伤免死保留 10 HP，携 70% 收益紧急撤退", icon: "🦅", type: "death", rarity: "UR" }
];

function getCardObject(cardRef) {
  if (!cardRef) return null;
  if (typeof cardRef === 'object' && cardRef.word && cardRef.skill) return cardRef;
  const word = typeof cardRef === 'string' ? cardRef : (cardRef.word || 'The Hermit');

  // 1. 优先匹配 6 张核心战术卡牌
  const tacticalMatch = TACTICAL_TAROT_ARCANA.find(t =>
    t.name.toLowerCase() === word.toLowerCase() ||
    t.skill === word ||
    t.type === word ||
    (typeof cardRef === 'object' && (cardRef.arcana === t.name || cardRef.skill === t.skill))
  );
  if (tacticalMatch) {
    return {
      word: (typeof cardRef === 'object' && cardRef.word) ? cardRef.word : tacticalMatch.name,
      arcana: tacticalMatch.name,
      skill: tacticalMatch.skill,
      desc: tacticalMatch.desc,
      icon: tacticalMatch.icon,
      type: tacticalMatch.type,
      rarity: tacticalMatch.rarity
    };
  }

  // 2. 匹配全局 22 大阿尔卡那
  const arcanaList = (typeof tarotArcanaSkills !== 'undefined' && Array.isArray(tarotArcanaSkills))
    ? tarotArcanaSkills
    : TACTICAL_TAROT_ARCANA;
  const arcana = arcanaList[Math.abs(hashString(word)) % arcanaList.length];

  return {
    word: word,
    arcana: arcana.name,
    skill: arcana.skill,
    desc: arcana.desc,
    icon: arcana.icon,
    type: arcana.type,
    rarity: arcana.rarity
  };
}

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

function ensureBattleHand() {
  if (!playerProfile) return;
  if (!Array.isArray(playerProfile.battleHand) || playerProfile.battleHand.length === 0) {
    if (Array.isArray(playerProfile.tarotCardsCollected) && playerProfile.tarotCardsCollected.length > 0) {
      playerProfile.battleHand = playerProfile.tarotCardsCollected.slice(0, 3).map(c => typeof c === 'string' ? c : (c.word || c.arcana));
    } else {
      // 默认出征 3 张核心策略卡
      playerProfile.battleHand = ['The Hermit', 'Temperance', 'The Devil'];
    }
  }
}

function renderBattleHand() {
  ensureBattleHand();
  const dock = document.getElementById('battleHandDeck');
  if (!dock) return;
  dock.innerHTML = '';

  const handCards = (playerProfile.battleHand || []).map(getCardObject).filter(Boolean);
  if (handCards.length === 0) {
    dock.innerHTML = `<div style="font-size:12px; color:var(--text-secondary); padding:8px;">未装备卡牌。点击【🎴 调配手牌】配置 3 张战术卡！</div>`;
    return;
  }

  handCards.slice(0, 3).forEach((card, idx) => {
    const btn = document.createElement('button');
    btn.className = 'battle-card-btn';
    btn.id = `battleCardBtn_${idx}`;
    btn.innerHTML = `
      <span class="battle-card-rarity">★ ${card.rarity} ★</span>
      <span style="font-size:16px;">${card.icon}</span>
      <span class="battle-card-word">${escapeHtml(card.arcana || card.word)}</span>
      <span class="battle-card-skill">${escapeHtml(card.skill)}</span>
    `;
    btn.title = `${card.arcana} · ${card.skill}: ${card.desc}`;
    btn.onclick = () => castBattleCard(card, btn, idx);
    dock.appendChild(btn);
  });

  const editBtn = document.createElement('button');
  editBtn.className = 'btn btn-secondary';
  editBtn.style.cssText = 'font-size:11px; padding:6px 10px; margin-left:6px; align-self:center; white-space:nowrap;';
  editBtn.innerHTML = '🎴 战术整备';
  editBtn.onclick = () => openDeckSelectorModal();
  dock.appendChild(editBtn);
}

function castBattleCard(card, btn, idx) {
  if (!card) return;
  soundSpell();
  btn.classList.add('cast-glow');
  setTimeout(() => btn.classList.remove('cast-glow'), 600);

  const t = card.type;
  const arcana = card.arcana || '';

  // 1. The Hermit (求索之光)
  if (t === 'hint' || arcana === 'The Hermit') {
    if (playerProfile.expedition) {
      if (!playerProfile.expedition.buffs) playerProfile.expedition.buffs = {};
      playerProfile.expedition.buffs.usedHintThisQuestion = true;
    }
    let hintWord = '';
    if (typeof survivalData !== 'undefined' && survivalData && Array.isArray(survivalData.options)) {
      const correctOpt = survivalData.options.find(o => o.isCorrect);
      if (correctOpt) hintWord = correctOpt.word;
    }
    const meaning = (hintWord && typeof chineseDict !== 'undefined') ? (chineseDict[hintWord] || '') : '';
    showToast(`💡【求索之光】启示：目标指向 [${hintWord || '关键词'}] ${meaning ? '· ' + meaning : ''}（提示后灰血愈合折减为 1 HP）`);
    
    const banner = document.getElementById('tacticalHintBanner');
    if (banner) {
      banner.style.display = 'block';
      banner.innerHTML = `💡 <strong>求索之光启示</strong>：考点涉及生词 <code>${escapeHtml(hintWord || '考点词')}</code> ${meaning ? '(' + escapeHtml(meaning) + ')' : ''}。此题若答对灰血恢复折减为 1 HP。`;
    }
    btn.disabled = true;
    btn.style.opacity = '0.5';
    return;
  }

  // 2. Temperance (平衡回响)
  if (t === 'temperance' || arcana === 'Temperance') {
    if (playerProfile.expedition) {
      if (!playerProfile.expedition.buffs) playerProfile.expedition.buffs = {};
      playerProfile.expedition.buffs.doubleRecallHeal = true;
    }
    showToast(`🕊️ 释放【${card.skill}】！下一次错词回忆灰血恢复翻倍 (+4 HP)！`);
    btn.disabled = true;
    btn.style.borderColor = 'var(--brand-success)';
    return;
  }

  // 3. Justice (天平平衡)
  if (t === 'justice' || arcana === 'Justice') {
    if (playerProfile.expedition) {
      if (!playerProfile.expedition.buffs) playerProfile.expedition.buffs = {};
      playerProfile.expedition.buffs.justiceSanBonus = true;
    }
    showToast(`⚖️ 释放【${card.skill}】！本节点答对生还时将抚慰理智恢复 +20 SAN！`);
    btn.disabled = true;
    btn.style.borderColor = 'var(--brand-cyan)';
    return;
  }

  // 4. The Devil (暗夜豪赌)
  if (t === 'devil' || arcana === 'The Devil') {
    if (typeof GrayHealthEngine !== 'undefined') {
      GrayHealthEngine.changeSan(playerProfile, -15, '恶魔暗夜豪赌献祭');
    } else {
      playerProfile.san = Math.max(0, playerProfile.san - 15);
    }
    if (playerProfile.expedition) {
      if (!playerProfile.expedition.buffs) playerProfile.expedition.buffs = {};
      playerProfile.expedition.buffs.doubleGoldNext = true;
    }
    showToast(`🔥 释放【${card.skill}】！献祭 15 SAN，当前节点通关金币翻倍 (2× Gold)！`);
    updateBadges();
    btn.disabled = true;
    btn.style.borderColor = 'var(--brand-danger)';
    return;
  }

  // 5. Wheel of Fortune (命运重铸)
  if (t === 'reroll' || arcana === 'Wheel of Fortune') {
    showToast(`🌪️ 释放【${card.skill}】！舍弃当前高危情境，正在重抽安全局势...`);
    if (typeof launchSurvivalGame === 'function') {
      launchSurvivalGame();
    }
    return;
  }

  // 6. Death (绝境涅槃)
  if (t === 'death' || arcana === 'Death') {
    showToast(`🦅【${card.skill}】已在手牌中守护！受到致命创伤时将自动触发保命护盾并带回 70% 收益紧急撤退。`);
    return;
  }

  // 传统卡牌效果兼容兜底
  if (t === 'heal_hp' || t === 'dual_heal' || t === 'clutch_heal') {
    const addHp = t === 'clutch_heal' ? 50 : (t === 'dual_heal' ? 20 : 35);
    playerProfile.hp = Math.min(100, playerProfile.hp + addHp);
    if (t === 'dual_heal') playerProfile.san = Math.min(100, playerProfile.san + 20);
    showToast(`💚 释放【${card.skill}】！HP +${addHp} 恢复！`);
  } else if (t === 'heal_san') {
    playerProfile.san = Math.min(100, playerProfile.san + 35);
    showToast(`🧠 释放【${card.skill}】！SAN +35 理智恢复！`);
  } else if (t === 'reveal_correct' || t === 'world_master') {
    const optButtons = document.querySelectorAll('.choice-btn');
    if (typeof survivalData !== 'undefined' && survivalData && survivalData.options) {
      survivalData.options.forEach((opt, oIdx) => {
        if (opt.isCorrect && optButtons[oIdx]) {
          optButtons[oIdx].style.borderColor = 'var(--brand-success)';
          optButtons[oIdx].style.boxShadow = '0 0 16px var(--brand-success)';
          optButtons[oIdx].innerHTML += ` <span style="color:var(--brand-success); font-weight:900;">[ 👁️ 生还正解 ]</span>`;
        }
      });
      showToast(`👁️ 释放【${card.skill}】！唯一正解已显形！`);
    }
  } else if (t === 'eliminate_wrong') {
    const optButtons = document.querySelectorAll('.choice-btn');
    if (typeof survivalData !== 'undefined' && survivalData && survivalData.options) {
      for (let oIdx = 0; oIdx < survivalData.options.length; oIdx++) {
        if (!survivalData.options[oIdx].isCorrect && optButtons[oIdx] && optButtons[oIdx].style.opacity !== '0.25') {
          optButtons[oIdx].style.opacity = '0.25';
          optButtons[oIdx].disabled = true;
          showToast(`💥 释放【${card.skill}】！已粉碎 1 个致命陷阱！`);
          break;
        }
      }
    }
  } else if (t === 'shield' || t === 'san_shield') {
    battleShieldActive = true;
    showToast(`🔰 释放【${card.skill}】！坚韧护盾激活，免疫下一次失误伤害！`);
  } else if (t === 'combo_boost') {
    playerProfile.combo += 2;
    battleXPBoostActive = true;
    showToast(`⚡ 释放【${card.skill}】！连击 Combo +2，战胜经验翻倍！`);
  } else if (t === 'full_restore') {
    playerProfile.hp = 100;
    playerProfile.san = 100;
    playerProfile.xp += 100;
    showToast(`☀️ 黎明荣耀！全状态恢复并获得 100 XP！`);
  } else {
    playerProfile.hp = Math.min(100, playerProfile.hp + 25);
    playerProfile.xp += 30;
    showToast(`🃏 释放【${card.skill}】！HP +25, XP +30！`);
  }

  updateBadges();
  triggerCloudSync();
}

function openDeckSelectorModal() {
  soundClick();
  ensureBattleHand();
  let m = document.getElementById('deckSelectorModal');
  if (!m) {
    m = document.createElement('div');
    m.id = 'deckSelectorModal';
    m.className = 'modal-box';
    m.style.cssText = 'max-width: 620px; max-height: 88vh; overflow-y: auto; padding: 22px; z-index: 10000;';
    document.body.appendChild(m);
  }

  renderDeckSelectorContent(m);
  m.style.display = 'block';
  setTimeout(() => m.style.opacity = '1', 10);
  const overlay = document.getElementById('drawerOverlay');
  if (overlay) overlay.classList.add('open');
}

function closeDeckSelectorModal() {
  const m = document.getElementById('deckSelectorModal');
  if (m) {
    m.style.opacity = '0';
    setTimeout(() => m.style.display = 'none', 200);
  }
  const overlay = document.getElementById('drawerOverlay');
  if (overlay) overlay.classList.remove('open');
}

function renderDeckSelectorContent(modalEl) {
  const hand = (playerProfile.battleHand || []).map(getCardObject).filter(Boolean);
  
  // 汇总所有可用卡牌池 (6 张战术卡 + 已抽到卡牌)
  const availablePool = [...TACTICAL_TAROT_ARCANA];
  (playerProfile.tarotCardsCollected || []).forEach(c => {
    const obj = getCardObject(c);
    if (obj && !availablePool.some(p => p.name === obj.arcana || p.skill === obj.skill)) {
      availablePool.push(obj);
    }
  });

  const slotsHtml = [0, 1, 2].map(slotIdx => {
    const c = hand[slotIdx];
    if (c) {
      return `
        <div style="background:var(--paper-surface-sub); border:2px solid var(--brand-primary); border-radius:var(--radius-md); padding:10px 12px; text-align:center;">
          <div style="font-size:10px; color:var(--text-secondary);">手牌位 ${slotIdx + 1}</div>
          <div style="font-size:20px; margin:4px 0;">${c.icon}</div>
          <div style="font-weight:800; font-size:13px; color:var(--text-primary);">${escapeHtml(c.arcana || c.word)}</div>
          <div style="font-size:11px; color:var(--brand-primary); font-weight:700;">${escapeHtml(c.skill)}</div>
          <button class="btn btn-secondary" style="font-size:10px; padding:2px 8px; margin-top:6px;" onclick="removeBattleCardSlot(${slotIdx})">卸下</button>
        </div>
      `;
    } else {
      return `
        <div style="background:var(--paper-surface-sub); border:2px dashed var(--paper-border); border-radius:var(--radius-md); padding:10px 12px; text-align:center; opacity:0.6;">
          <div style="font-size:10px; color:var(--text-secondary);">手牌位 ${slotIdx + 1}</div>
          <div style="font-size:20px; margin:4px 0;">➕</div>
          <div style="font-size:12px; color:var(--text-secondary);">空置槽位</div>
          <div style="font-size:10px; color:var(--text-secondary); margin-top:6px;">点击下方卡牌装配</div>
        </div>
      `;
    }
  }).join('');

  const poolHtml = availablePool.map(c => {
    const isEquipped = hand.some(h => (h.arcana === c.name || h.skill === c.skill));
    return `
      <div style="background:var(--paper-surface); border:1.5px solid ${isEquipped ? 'var(--brand-primary)' : 'var(--paper-border)'}; border-radius:var(--radius-sm); padding:10px; display:flex; justify-content:space-between; align-items:center; gap:8px;">
        <div style="display:flex; align-items:center; gap:10px;">
          <span style="font-size:22px;">${c.icon}</span>
          <div>
            <div style="font-weight:800; font-size:13px; color:var(--text-primary);">${escapeHtml(c.name || c.arcana)} · ${escapeHtml(c.skill)}</div>
            <div style="font-size:11px; color:var(--text-secondary); line-height:1.4;">${escapeHtml(c.desc)}</div>
          </div>
        </div>
        <button class="btn ${isEquipped ? 'btn-secondary' : 'btn-primary'}" style="font-size:11px; padding:4px 10px; white-space:nowrap;" onclick="toggleEquipCard('${escapeHtml(c.name || c.arcana)}')">
          ${isEquipped ? '已装配' : '装配出征'}
        </button>
      </div>
    `;
  }).join('');

  modalEl.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; border-bottom:1.5px solid var(--paper-border); padding-bottom:10px;">
      <div>
        <div style="font-size:16px; font-weight:900; color:var(--text-primary);">🎴 战术手牌整备 (Battle Hand · 3/3)</div>
        <div style="font-size:11.5px; color:var(--text-secondary); margin-top:2px;">远征出征携带 3 张核心策略塔罗牌，关键危机施放逆转战局</div>
      </div>
      <button class="btn btn-secondary" style="font-size:11px; padding:2px 8px;" onclick="closeDeckSelectorModal()">✕ 关闭</button>
    </div>

    <!-- 当前 3 槽手牌 -->
    <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:8px; margin-bottom:16px;">
      ${slotsHtml}
    </div>

    <!-- 快捷预设按钮 -->
    <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:14px;">
      <span style="font-size:11px; color:var(--text-secondary); align-self:center;">⚡ 推荐构筑预设:</span>
      <button class="btn btn-secondary" style="font-size:10.5px; padding:3px 8px;" onclick="applyDeckPreset(['The Hermit', 'Temperance', 'The Devil'])">🔥 贪婪博弈 (隐者+节制+恶魔)</button>
      <button class="btn btn-secondary" style="font-size:10.5px; padding:3px 8px;" onclick="applyDeckPreset(['The Hermit', 'Justice', 'Death'])">🛡️ 稳健生还 (隐者+正义+死神)</button>
      <button class="btn btn-secondary" style="font-size:10.5px; padding:3px 8px;" onclick="applyDeckPreset(['Temperance', 'Wheel of Fortune', 'The Devil'])">🌪️ 逆转奇迹 (节制+命运+恶魔)</button>
    </div>

    <!-- 可用卡牌库 -->
    <div style="font-size:12px; font-weight:800; color:var(--text-primary); margin-bottom:8px;">
      📚 可用战术卡牌库 (点击卡牌直接更换当前手牌)
    </div>
    <div style="display:grid; gap:8px; max-height:260px; overflow-y:auto; padding-right:4px;">
      ${poolHtml}
    </div>

    <div style="margin-top:16px; text-align:right;">
      <button class="btn btn-primary" style="padding:6px 20px; font-size:13px; font-weight:800;" onclick="closeDeckSelectorModal()">✅ 确认手牌出征</button>
    </div>
  `;
}

function removeBattleCardSlot(idx) {
  soundClick();
  if (Array.isArray(playerProfile.battleHand)) {
    playerProfile.battleHand.splice(idx, 1);
    saveToStorage(STORAGE_KEYS.PROFILE, playerProfile);
    renderBattleHand();
    const m = document.getElementById('deckSelectorModal');
    if (m) renderDeckSelectorContent(m);
  }
}

function toggleEquipCard(cardName) {
  soundClick();
  ensureBattleHand();
  const hand = playerProfile.battleHand;
  const matchIdx = hand.findIndex(c => {
    const obj = getCardObject(c);
    return obj && (obj.arcana === cardName || obj.word === cardName || obj.skill === cardName);
  });

  if (matchIdx !== -1) {
    // 已经装备，卸下
    hand.splice(matchIdx, 1);
    showToast(`已卸下 [${cardName}]`);
  } else {
    // 未装备，如果已有 3 张，替换最后一张；否则追加
    if (hand.length >= 3) {
      hand[2] = cardName;
    } else {
      hand.push(cardName);
    }
    showToast(`✨ 已装配出征手牌 [${cardName}]`);
  }

  saveToStorage(STORAGE_KEYS.PROFILE, playerProfile);
  renderBattleHand();
  const m = document.getElementById('deckSelectorModal');
  if (m) renderDeckSelectorContent(m);
}

function applyDeckPreset(presetCards) {
  soundSuccess();
  playerProfile.battleHand = [...presetCards];
  saveToStorage(STORAGE_KEYS.PROFILE, playerProfile);
  renderBattleHand();
  const m = document.getElementById('deckSelectorModal');
  if (m) renderDeckSelectorContent(m);
  showToast('⚡ 推荐战术构筑手牌已成功装配！');
}

function openCodexModal() {
  soundClick();
  const m = document.getElementById('codexModal');
  const grid = document.getElementById('codexGrid');
  const badge = document.getElementById('codexTotalBadge');

  const cards = (playerProfile.tarotCardsCollected || []).map(getCardObject).filter(Boolean);
  badge.textContent = `${cards.length} 张`;

  if (cards.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--text-secondary);">你的卡牌背包空空如也。前往【塔罗圣殿】抽卡解锁战斗手牌！</div>`;
  } else {
    grid.innerHTML = cards.map(c => `
      <div class="codex-card">
        <div class="battle-card-rarity">★ ${c.rarity} ★</div>
        <div class="codex-card-arcana">${escapeHtml(c.arcana)}</div>
        <div class="codex-card-word">${escapeHtml(c.word)}</div>
        <div class="codex-card-cn">${escapeHtml((chineseDict[c.word] || '').replace(/\(考纲词汇\)|（考纲词汇）/g, '').trim())}</div>
        <div class="codex-skill-box">
          <div class="codex-skill-title">${c.icon} ${escapeHtml(c.skill)}</div>
          <div class="codex-skill-desc">${escapeHtml(c.desc)}</div>
        </div>
        <button class="btn btn-secondary" style="width:100%; margin-top:10px; font-size:11px; padding:4px;" onclick="openWordDetails('${escapeHtml(c.word)}')">📖 查阅纯英释义</button>
      </div>
    `).join('');
  }

  m.style.display = 'block';
  setTimeout(() => m.style.opacity = '1', 10);
}

function closeCodexModal() {
  const m = document.getElementById('codexModal');
  m.style.opacity = '0';
  setTimeout(() => m.style.display = 'none', 200);
}

function renderTarotDeck(forceUnrevealed = false) {
  const spread = document.getElementById('tarotSpread');
  if (!spread) return;
  spread.innerHTML = '';
  
  // 选取候选词：若 forceUnrevealed 为 true，优先选取未抽到的卡牌
  let pool = [...words];
  if (forceUnrevealed) {
    const uncollected = words.filter(w => !(playerProfile.tarotCardsCollected || []).some(c => (typeof c === 'string' ? c : c.word) === w));
    if (uncollected.length >= 4) {
      pool = uncollected;
    }
  }

  tarotSlotWords = [...pool].sort(() => 0.5 - Math.random()).slice(0, 4);

  tarotSlotWords.forEach((word, idx) => {
    const arcana = tarotArcanaSkills[Math.abs(hashString(word)) % tarotArcanaSkills.length];
    const isCollected = !forceUnrevealed && (playerProfile.tarotCardsCollected || []).some(c => (typeof c === 'string' ? c : c.word) === word);

    const scene = document.createElement('div');
    scene.className = 'tarot-card-scene';
    scene.innerHTML = `
      <div class="tarot-card ${isCollected ? 'flipped' : ''}" id="tarotCard_${idx}">
        <div class="tarot-card-face tarot-back">
          <div class="tarot-back-mandala">✦</div>
          <div class="tarot-back-tip">TAROT ARCANA</div>
          <div style="font-size:10px; color:var(--tarot-gold); opacity:0.8; margin-top:4px;">50 Gold 翻牌激活技能</div>
        </div>
        <div class="tarot-card-face tarot-front">
          <div class="tarot-numeral">NO.${idx + 1}</div>
          <div class="tarot-arcana-name">${escapeHtml(arcana.name)}</div>
          <div class="tarot-word">${escapeHtml(word)}</div>
          <div class="tarot-meaning" style="font-size:12px; color:var(--brand-cyan); font-weight:800;">${arcana.icon} ${escapeHtml(arcana.skill)}</div>
          <div class="tarot-rarity">★ ${escapeHtml(arcana.rarity)} ★</div>
        </div>
      </div>
    `;
    scene.onclick = () => flipTarotCard(idx, word, arcana);
    spread.appendChild(scene);
  });
}

function flipTarotCard(idx, word, arcana) {
  const card = document.getElementById(`tarotCard_${idx}`);
  if (!card) return;
  if (card.classList.contains('flipped')) {
    openWordDetails(word);
    return;
  }

  const cost = (typeof GrayHealthEngine !== 'undefined') ? GrayHealthEngine.CONFIG.TAROT_DRAW_GOLD_COST : 50;
  if ((playerProfile.gold || 0) < cost) {
    soundFailure();
    showToast(`⚠️ 翻牌需要 ${cost} Gold (当前拥有: ${playerProfile.gold || 0} Gold)。远征生还可赚取金币！`);
    return;
  }

  playerProfile.gold -= cost;
  if (!playerProfile.tarotCardsCollected) playerProfile.tarotCardsCollected = [];
  
  const cardObj = {
    word: word,
    arcana: arcana.name,
    skill: arcana.skill,
    desc: arcana.desc,
    icon: arcana.icon,
    type: arcana.type,
    rarity: arcana.rarity
  };

  if (!playerProfile.tarotCardsCollected.some(c => (typeof c === 'string' ? c : c.word) === word)) {
    playerProfile.tarotCardsCollected.push(cardObj);
  }

  saveToStorage(STORAGE_KEYS.PROFILE, playerProfile);
  updateBadges();
  renderProfileView();
  renderBattleHand();
  triggerCloudSync();

  soundSuccess();
  card.classList.add('flipped');
  speakWord(word);

  showToast(`✨ 抽到神卡：[${word}] · ${arcana.name} (${arcana.skill})！`);
}

function reshuffleTarotDeck() {
  soundClick();
  renderTarotDeck(true);
  soundSuccess();
  showToast("🔮 塔罗法阵已重置！4 张全新未翻开命运卡牌已就位");
}

function renderProfileView() {
  const grid = document.getElementById('achievementGrid');
  if (!grid) return;
  const cardsCount = (playerProfile.tarotCardsCollected || []).length;
  grid.innerHTML = `
    <div style="background:var(--paper-surface-sub); padding:12px; border-radius:var(--radius-sm); border:1px solid var(--paper-border);">
      <div style="font-size:11px; color:var(--text-secondary);">Survivor Level (等级)</div>
      <div style="font-size:20px; font-weight:800; color:var(--brand-primary);">LV.${playerProfile.level}</div>
    </div>
    <div style="background:var(--paper-surface-sub); padding:12px; border-radius:var(--radius-sm); border:1px solid var(--paper-border);">
      <div style="font-size:11px; color:var(--text-secondary);">Available Gold (随身金币)</div>
      <div style="font-size:20px; font-weight:800; color:var(--brand-accent);">${playerProfile.gold || 0} Gold</div>
    </div>
    <div style="background:var(--paper-surface-sub); padding:12px; border-radius:var(--radius-sm); border:1px solid var(--paper-border);">
      <div style="font-size:11px; color:var(--text-secondary);">Experience (永久经验值)</div>
      <div style="font-size:20px; font-weight:800; color:var(--brand-cyan);">${playerProfile.xp} XP</div>
    </div>
    <div style="background:var(--paper-surface-sub); padding:12px; border-radius:var(--radius-sm); border:1px solid var(--paper-border);">
      <div style="font-size:11px; color:var(--text-secondary);">Collected Cards (已解锁卡牌)</div>
      <div style="font-size:20px; font-weight:800; color:var(--tarot-gold);">${cardsCount} 张</div>
    </div>
    <div style="background:var(--paper-surface-sub); padding:12px; border-radius:var(--radius-sm); border:1px solid var(--paper-border); grid-column: 1 / -1;">
      <div style="font-size:11px; color:var(--text-secondary);">Marked Words (重点生词本)</div>
      <div style="font-size:20px; font-weight:800; color:var(--brand-danger);">${getMarkedWords().length} 词</div>
    </div>
  `;
}

if (typeof window !== 'undefined') {
  window.TACTICAL_TAROT_ARCANA = TACTICAL_TAROT_ARCANA;
  window.getCardObject = getCardObject;
  window.ensureBattleHand = ensureBattleHand;
  window.renderBattleHand = renderBattleHand;
  window.castBattleCard = castBattleCard;
  window.openDeckSelectorModal = openDeckSelectorModal;
  window.closeDeckSelectorModal = closeDeckSelectorModal;
  window.removeBattleCardSlot = removeBattleCardSlot;
  window.toggleEquipCard = toggleEquipCard;
  window.applyDeckPreset = applyDeckPreset;
  window.openCodexModal = openCodexModal;
  window.closeCodexModal = closeCodexModal;
  window.renderTarotDeck = renderTarotDeck;
  window.flipTarotCard = flipTarotCard;
  window.reshuffleTarotDeck = reshuffleTarotDeck;
  window.renderProfileView = renderProfileView;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    TACTICAL_TAROT_ARCANA,
    getCardObject,
    ensureBattleHand,
    renderBattleHand,
    castBattleCard
  };
}