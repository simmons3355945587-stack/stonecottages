function getCardObject(cardRef) {
  if (!cardRef) return null;
  if (typeof cardRef === 'object' && cardRef.word && cardRef.skill) return cardRef;
  const word = typeof cardRef === 'string' ? cardRef : (cardRef.word || 'rescue');
  const arcana = tarotArcanaSkills[Math.abs(hashString(word)) % tarotArcanaSkills.length];
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

function renderBattleHand() {
  const dock = document.getElementById('battleHandDeck');
  if (!dock) return;
  dock.innerHTML = '';

  const cards = (playerProfile.tarotCardsCollected || []).map(getCardObject).filter(Boolean);
  if (cards.length === 0) {
    dock.innerHTML = `<div style="font-size:12px; color:var(--text-secondary); padding:8px;">未装备卡牌。去【塔罗圣殿】消耗 50 Gold 抽卡，解锁战斗神技！</div>`;
    return;
  }

  // Display top 4 cards in battle hand
  cards.slice(0, 4).forEach((card, idx) => {
    const btn = document.createElement('button');
    btn.className = 'battle-card-btn';
    btn.innerHTML = `
      <span class="battle-card-rarity">★ ${card.rarity} ★</span>
      <span style="font-size:16px;">${card.icon}</span>
      <span class="battle-card-word">${escapeHtml(card.word)}</span>
      <span class="battle-card-skill">${escapeHtml(card.skill)}</span>
    `;
    btn.onclick = () => castBattleCard(card, btn, idx);
    dock.appendChild(btn);
  });
}

function castBattleCard(card, btn, idx) {
  soundSpell();
  btn.classList.add('cast-glow');
  setTimeout(() => btn.classList.remove('cast-glow'), 600);

  const t = card.type;
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
    if (survivalData && survivalData.options) {
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
    if (survivalData && survivalData.options) {
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
  } else if (t === 'reroll') {
    showToast(`🌪️ 释放【${card.skill}】！正在重新抽取安全生还危机...`);
    launchSurvivalGame();
  } else if (t === 'combo_boost') {
    playerProfile.combo += 2;
    battleXPBoostActive = true;
    showToast(`⚡ 释放【${card.skill}】！连击 Combo +2，战胜经验翻倍！`);
  } else if (t === 'full_restore') {
    playerProfile.hp = 100;
    playerProfile.san = 100;
    playerProfile.xp += 100;
    showToast(`☀️ 黎明荣耀！全状态恢复并获得 100 XP！`);
  } else if (t === 'auto_win') {
    if (survivalData && survivalData.options) {
      const correctOpt = survivalData.options.find(o => o.isCorrect) || survivalData.options[0];
      handleSurvivalChoice(correctOpt, 0);
      showToast(`👑 绝对支配！直接判定全胜生还！`);
    }
  } else {
    playerProfile.hp = Math.min(100, playerProfile.hp + 25);
    playerProfile.xp += 30;
    showToast(`🃏 释放【${card.skill}】！HP +25, XP +30！`);
  }

  updateBadges();
  triggerCloudSync();
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