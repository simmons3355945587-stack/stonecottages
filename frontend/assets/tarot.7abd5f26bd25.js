// ==========================================
// 塔罗策略手牌与全息词库图谱系统 (tarot.js)
// 遵循第一性认知原则: 杜绝直接通关挂机作弊，全部分级(SSR/SR/R)与真实爆率(SSR 10%, 10抽保底)
// ==========================================

const TAROT_ROSTER = [
  // === SSR (爆率 10%, 10抽保底, 4张) ===
  {
    name: "The Devil",
    skill: "暗夜贪婪契约",
    desc: "战斗节点与Boss金币掉落 +40%，Boss击败额外双倍金币。",
    cost: "⚠️ 代价: 受到伤害 +25%，商人营地物价上浮 20%",
    category: "被动遗物",
    categoryType: "passive",
    focusCost: 0,
    icon: "🔥",
    type: "devil",
    rarity: "SSR"
  },
  {
    name: "Death",
    skill: "绝境舍弃追猎",
    desc: "放弃当前卡壳生词题安全跳过，不扣除生命与理智。",
    cost: "⚠️ 代价: 消耗 1 专注。该词烙上【死神血印】，下层必定以精英怪再临（双倍血量、双倍赏金）",
    category: "主动战术",
    categoryType: "active",
    focusCost: 1,
    icon: "🦅",
    type: "death",
    rarity: "SSR"
  },
  {
    name: "The Chariot",
    skill: "破釜沉舟冲刺",
    desc: "开启 3 题极速冲刺，连续答对连击+3且连击金币+50%。",
    cost: "⚠️ 代价: 消耗 1 专注。冲刺期间只要答错 1 题即承受双倍创伤并中断冲刺",
    category: "主动战术",
    categoryType: "active",
    focusCost: 1,
    icon: "⚡",
    type: "chariot",
    rarity: "SSR"
  },
  {
    name: "The Moon",
    skill: "幻象理智博弈",
    desc: "全局结算风险倍率 Risk Multiplier +0.5x。",
    cost: "⚠️ 代价: 初始理智 -20 SAN，且干扰项更具迷惑性",
    category: "被动遗物",
    categoryType: "passive",
    focusCost: 0,
    icon: "🌙",
    type: "moon",
    rarity: "SSR"
  },

  // === SR (爆率 30%, 6张) ===
  {
    name: "The Hermit",
    skill: "语言学微光",
    desc: "显露目标词词根/前缀线索，并排除 1 个高危形近干扰项（保留 3 选 1）。",
    cost: "⚠️ 代价: 消耗 1 专注。依靠线索作答本题金币收益 -30%",
    category: "主动战术",
    categoryType: "active",
    focusCost: 1,
    icon: "💡",
    type: "hint",
    rarity: "SR"
  },
  {
    name: "The Magician",
    skill: "专注时流停滞",
    desc: "认知倒计时冻结 6 秒，并触发清晰原音发音重播，助你稳定心智分析词形。",
    cost: "消耗: 1 专注",
    category: "主动战术",
    categoryType: "active",
    focusCost: 1,
    icon: "⏳",
    type: "freeze_time",
    rarity: "SR"
  },
  {
    name: "Strength",
    skill: "认知坚韧护甲",
    desc: "选错时不直接扣减生命，而是将创伤 100% 转化为临时灰血。",
    cost: "⚠️ 代价: 消耗全部专注。该错词将在 3 题后以强化形态再次复现",
    category: "主动战术",
    categoryType: "active",
    focusCost: 999,
    icon: "🔰",
    type: "shield_gray",
    rarity: "SR"
  },
  {
    name: "Temperance",
    skill: "身心平衡抚慰",
    desc: "错词回忆灰血恢复量翻倍 (+4 HP)，并抚慰恢复 +10 SAN。",
    cost: "消耗: 1 专注",
    category: "主动战术",
    categoryType: "active",
    focusCost: 1,
    icon: "🕊️",
    type: "temperance",
    rarity: "SR"
  },
  {
    name: "Wheel of Fortune",
    skill: "顺势逆境轮转",
    desc: "将当前卡壳难题推后 3 题再答，临时置换为一道考纲标准题。",
    cost: "消耗: 1 专注",
    category: "主动战术",
    categoryType: "active",
    focusCost: 1,
    icon: "🌪️",
    type: "reroll",
    rarity: "SR"
  },
  {
    name: "Judgement",
    skill: "悬赏赏金清算",
    desc: "结算时将本次远征最高频错词列为【通缉目标】，下一次出征消灭该词获得双倍经验与金币。",
    cost: "长效生效",
    category: "命运长效",
    categoryType: "destiny",
    focusCost: 0,
    icon: "🎺",
    type: "bounty",
    rarity: "SR"
  },

  // === R (爆率 60%, 6张) ===
  {
    name: "The Sun",
    skill: "晨光免罪庇佑",
    desc: "前 3 题中首次失误免除扣血与掉理智。",
    cost: "⚠️ 代价: 本局全场金币收益 -15%",
    category: "被动遗物",
    categoryType: "passive",
    focusCost: 0,
    icon: "☀️",
    type: "sun_forgive",
    rarity: "R"
  },
  {
    name: "Justice",
    skill: "秩序理智天平",
    desc: "本题判定生还时立即抚慰恢复 +15 SAN 理智值。",
    cost: "消耗: 1 专注",
    category: "主动战术",
    categoryType: "active",
    focusCost: 1,
    icon: "⚖️",
    type: "justice",
    rarity: "R"
  },
  {
    name: "The Star",
    skill: "灵感词性回眸",
    desc: "透视词性与首字母骨架提示 (如 adj. [d...])。",
    cost: "消耗: 1 专注",
    category: "主动战术",
    categoryType: "active",
    focusCost: 1,
    icon: "✨",
    type: "pos_hint",
    rarity: "R"
  },
  {
    name: "The Empress",
    skill: "生机灰血温存",
    desc: "立即将当前全部残留灰血转化为永久生命值 HP。",
    cost: "消耗: 1 专注",
    category: "主动战术",
    categoryType: "active",
    focusCost: 1,
    icon: "💚",
    type: "heal_gray",
    rarity: "R"
  },
  {
    name: "The Fool",
    skill: "初生探索漫步",
    desc: "出征初始专注点 Focus +1。",
    cost: "⚠️ 代价: 商人营地无法享受折价",
    category: "被动遗物",
    categoryType: "passive",
    focusCost: 0,
    icon: "🃏",
    type: "fool_focus",
    rarity: "R"
  },
  {
    name: "The World",
    skill: "万象认知图谱",
    desc: "出征佩戴被动自动触发：每连续答对 3 题自动抚慰恢复 +15 SAN，并将全部灰血固化愈合为永久生命值，额外回复 1 点专注！",
    cost: "⚠️ 自动触发: 保持连击认知大圆满",
    category: "被动遗物",
    categoryType: "passive",
    focusCost: 0,
    icon: "🌍",
    type: "world_auto",
    rarity: "R"
  }
];

const TACTICAL_TAROT_ARCANA = TAROT_ROSTER;

function getCardObject(cardRef) {
  if (!cardRef) return null;
  if (typeof cardRef === 'object' && cardRef.name && cardRef.skill && cardRef.rarity) {
    const match = TAROT_ROSTER.find(t => t.name === cardRef.name || t.skill === cardRef.skill);
    if (match) {
      return { ...match, word: cardRef.word || match.name };
    }
    return cardRef;
  }
  const word = typeof cardRef === 'string' ? cardRef : (cardRef.word || cardRef.name || 'The Hermit');

  // 1. 从 16 张标准卡牌中精确匹配
  const tacticalMatch = TAROT_ROSTER.find(t =>
    t.name.toLowerCase() === word.toLowerCase() ||
    t.skill === word ||
    t.type === word ||
    (typeof cardRef === 'object' && (cardRef.arcana === t.name || cardRef.skill === t.skill || cardRef.name === t.name))
  );
  if (tacticalMatch) {
    return {
      ...tacticalMatch,
      word: (typeof cardRef === 'object' && cardRef.word) ? cardRef.word : tacticalMatch.name,
      arcana: tacticalMatch.name
    };
  }

  // 2. 备用哈希映射
  const arcana = TAROT_ROSTER[Math.abs(hashString(word)) % TAROT_ROSTER.length];
  return {
    ...arcana,
    word: word,
    arcana: arcana.name
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

// 抽卡概率引擎: SSR 8% (10抽保底), SR 27%, R 65% (降低基础爆率，提高稀有成就感)
function rollTarotCard() {
  if (typeof playerProfile === 'undefined' || !playerProfile) {
    return { ...TAROT_ROSTER[0] };
  }
  if (typeof playerProfile.tarotPityCounter !== 'number') {
    playerProfile.tarotPityCounter = 0;
  }
  playerProfile.tarotPityCounter++;

  let selectedRarity = 'R';
  if (playerProfile.tarotPityCounter >= 10) {
    selectedRarity = 'SSR';
    playerProfile.tarotPityCounter = 0;
  } else {
    const roll = Math.random();
    if (roll < 0.08) {
      selectedRarity = 'SSR';
      playerProfile.tarotPityCounter = 0;
    } else if (roll < 0.35) {
      selectedRarity = 'SR';
    } else {
      selectedRarity = 'R';
    }
  }

  const pool = TAROT_ROSTER.filter(c => c.rarity === selectedRarity);
  const picked = pool[Math.floor(Math.random() * pool.length)];
  return { ...picked };
}

// 专注点 Focus 系统
function ensurePlayerFocus() {
  if (typeof playerProfile === 'undefined' || !playerProfile) return;
  const maxFocus = 3;
  if (playerProfile.focus === undefined || playerProfile.focus === null) {
    const hand = playerProfile.battleHand || [];
    const hasFool = hand.some(h => {
      const o = getCardObject(h);
      return o && o.name === 'The Fool';
    });
    playerProfile.focus = hasFool ? 3 : 2;
  }
  playerProfile.focus = Math.max(0, Math.min(maxFocus, playerProfile.focus));
}

function restorePlayerFocus(amount = 1) {
  if (typeof playerProfile === 'undefined' || !playerProfile) return;
  ensurePlayerFocus();
  playerProfile.focus = Math.min(3, (playerProfile.focus || 0) + amount);
  renderBattleHand();
}

function ensureBattleHand() {
  if (typeof playerProfile === 'undefined' || !playerProfile) return;
  if (!Array.isArray(playerProfile.battleHand) || playerProfile.battleHand.length === 0) {
    if (Array.isArray(playerProfile.tarotCardsCollected) && playerProfile.tarotCardsCollected.length > 0) {
      playerProfile.battleHand = playerProfile.tarotCardsCollected.slice(0, 3).map(c => typeof c === 'string' ? c : (c.name || c.word || c.arcana));
    } else {
      playerProfile.battleHand = ['The Hermit', 'Temperance', 'Justice'];
    }
  }
}

function renderBattleHand() {
  ensurePlayerFocus();
  ensureBattleHand();
  if (typeof document === 'undefined') return;
  const dock = document.getElementById('battleHandDeck');
  if (!dock) return;
  dock.innerHTML = '';

  // 1. 专注点指示器 Focus Indicator
  const focusVal = (playerProfile && playerProfile.focus !== undefined) ? playerProfile.focus : 2;
  const focusDots = '●'.repeat(focusVal) + '○'.repeat(Math.max(0, 3 - focusVal));
  const focusDiv = document.createElement('div');
  focusDiv.className = 'focus-indicator';
  focusDiv.title = '专注点 Focus：施放主动战术塔罗牌消耗专注。每答对题目恢复 1 点。';
  focusDiv.style.cssText = 'display:inline-flex; align-items:center; gap:4px; background:rgba(59,130,246,0.12); border:1px solid rgba(59,130,246,0.35); padding:3px 9px; border-radius:12px; font-size:11px; font-weight:800; color:var(--brand-primary); margin-right:4px;';
  focusDiv.innerHTML = `⚡ 专注 <span style="letter-spacing:2px; font-size:13px; margin-left:2px; color:var(--brand-primary);">${focusDots}</span> <span style="font-size:10px; opacity:0.8;">(${focusVal}/3)</span>`;
  dock.appendChild(focusDiv);

  const handCards = (playerProfile.battleHand || []).map(getCardObject).filter(Boolean);
  if (handCards.length === 0) {
    const emptyDiv = document.createElement('div');
    emptyDiv.style.cssText = 'font-size:11px; color:var(--text-secondary); padding:4px 8px;';
    emptyDiv.innerText = '未装配手牌 (点击战术整备装配)';
    dock.appendChild(emptyDiv);
  } else {
    handCards.slice(0, 3).forEach((card, idx) => {
      const btn = document.createElement('button');
      const rarityLower = (card.rarity || 'r').toLowerCase();
      btn.className = `battle-card-btn rarity-${rarityLower}`;
      btn.id = `battleCardBtn_${idx}`;

      const isPassive = card.categoryType === 'passive' || card.categoryType === 'destiny';
      const isAutoTrigger = card.name === 'The World' || card.type === 'world_auto';
      const costBadge = isAutoTrigger
        ? `<span class="tarot-category-badge category-passive" style="font-size:8.5px; background:rgba(16,185,129,0.15); color:var(--brand-success); border-color:rgba(16,185,129,0.35);">自动触发</span>`
        : (isPassive
          ? `<span class="tarot-category-badge category-${card.categoryType}" style="font-size:8.5px;">被动生效</span>`
          : `<span class="tarot-category-badge category-${card.categoryType}" style="font-size:8.5px;">⚡ ${card.focusCost === 999 ? '全部' : card.focusCost}</span>`);

      btn.innerHTML = `
        <div style="display:flex; align-items:center; justify-content:space-between; width:100%; margin-bottom:2px;">
          <span class="tarot-rarity-badge badge-${rarityLower}">★ ${card.rarity} ★</span>
          ${costBadge}
        </div>
        <div style="display:flex; align-items:center; gap:4px; justify-content:center;">
          <span style="font-size:14px;">${card.icon}</span>
          <span class="battle-card-skill" style="font-weight:800; font-size:11.5px;">${escapeHtml(card.skill)}</span>
        </div>
      `;
      btn.title = `【${card.rarity}】${card.name || card.arcana} · ${card.skill}\n${card.desc}\n${card.cost || ''}`;
      if (isPassive) {
        btn.onclick = () => {
          showToast(`ℹ️【${card.skill}】属于${card.category}${isAutoTrigger ? '（自动触发）' : ''}，出征期间持续生效，满足条件自动触发，无需主动点击。`);
        };
      } else {
        btn.onclick = () => castBattleCard(card, btn, idx);
      }
      dock.appendChild(btn);
    });
  }

  const editBtn = document.createElement('button');
  editBtn.className = 'btn btn-secondary';
  editBtn.style.cssText = 'font-size:11px; padding:5px 10px; margin-left:6px; align-self:center; white-space:nowrap; border-radius:6px;';
  editBtn.innerHTML = '🎴 战术整备';
  editBtn.onclick = () => openDeckSelectorModal();
  dock.appendChild(editBtn);
}

function castBattleCard(card, btn, idx) {
  if (!card) return;
  ensurePlayerFocus();

  // 1. 被动遗物 / 命运长效拦截
  if (card.categoryType === 'passive' || card.categoryType === 'destiny') {
    soundClick();
    showToast(`ℹ️【${card.name || card.arcana} · ${card.skill}】属于${card.category}，出征期间持续生效，无需主动施放。`);
    return;
  }

  // 2. 专注点 Focus 资源消耗检查
  const currentFocus = (playerProfile && playerProfile.focus !== undefined) ? playerProfile.focus : 2;
  const neededFocus = card.focusCost === 999 ? 1 : (card.focusCost || 1);
  if (currentFocus < neededFocus) {
    soundFailure();
    showToast(`⚠️ 专注点不足！施放【${card.skill}】需要 ${card.focusCost === 999 ? '全部专注 (至少1点)' : card.focusCost + ' 点专注'}（当前仅有 ${currentFocus} 点）。答对题目可积攒专注！`);
    return;
  }

  // 3. 扣除专注点
  if (card.focusCost === 999) {
    playerProfile.focus = 0;
  } else {
    playerProfile.focus -= card.focusCost;
  }

  soundSpell();
  btn.classList.add('cast-glow');
  setTimeout(() => btn.classList.remove('cast-glow'), 600);

  if (!playerProfile.expedition) playerProfile.expedition = {};
  if (!playerProfile.expedition.buffs) playerProfile.expedition.buffs = {};
  const buffs = playerProfile.expedition.buffs;

  const t = card.type;
  const name = card.name || card.arcana;

  // 1. The Hermit (语言学微光)
  if (t === 'hint' || name === 'The Hermit') {
    buffs.usedHintThisQuestion = true;
    buffs.hermitPenalty = 0.30;
    let currentWord = '';
    let hintClue = '';
    if (typeof survivalData !== 'undefined' && survivalData && Array.isArray(survivalData.options)) {
      const correctOpt = survivalData.options.find(o => o.isCorrect);
      if (correctOpt) currentWord = correctOpt.word;
    }
    const lexGraph = (typeof window !== 'undefined' && window.STONE_LEXICAL_GRAPH) ? window.STONE_LEXICAL_GRAPH : null;
    if (lexGraph && lexGraph[currentWord] && lexGraph[currentWord].morphology) {
      hintClue = lexGraph[currentWord].morphology;
    } else if (currentWord) {
      hintClue = `前缀/词根形态 [${currentWord.slice(0, 3)}...] · 长度 ${currentWord.length} 字母`;
    }
    const optButtons = document.querySelectorAll('.choice-btn');
    if (typeof survivalData !== 'undefined' && survivalData && Array.isArray(survivalData.options)) {
      for (let i = 0; i < survivalData.options.length; i++) {
        if (!survivalData.options[i].isCorrect && optButtons[i] && optButtons[i].style.opacity !== '0.25' && !optButtons[i].disabled) {
          optButtons[i].style.opacity = '0.25';
          optButtons[i].disabled = true;
          optButtons[i].innerHTML += ` <span style="font-size:10px; color:var(--text-muted);">[已排除]</span>`;
          break;
        }
      }
    }
    showToast(`💡【语言学微光】已显现：${hintClue || '词根形态指引'}！已剔除 1 个干扰项（提示后收益 -30%）。`);
    const banner = document.getElementById('tacticalHintBanner');
    if (banner) {
      banner.style.display = 'block';
      banner.innerHTML = `💡 <strong>语言学微光线索</strong>：${escapeHtml(hintClue || '核心词根指引')}（已排除 1 个高危干扰，本题金币折减 30%）。`;
    }
  }
  // 2. The Magician (专注时流停滞)
  else if (t === 'freeze_time' || name === 'The Magician') {
    if (typeof freezeCountdownTimer === 'function') {
      freezeCountdownTimer(6000);
    } else if (typeof countdownTimerRemaining !== 'undefined') {
      countdownTimerRemaining += 6;
    }
    let currentWord = '';
    if (typeof survivalData !== 'undefined' && survivalData && Array.isArray(survivalData.options)) {
      const correctOpt = survivalData.options.find(o => o.isCorrect);
      if (correctOpt) currentWord = correctOpt.word;
    }
    if (currentWord && typeof speakWord === 'function') {
      speakWord(currentWord);
    }
    showToast(`⏳ 释放【专注时流停滞】！作答倒计时冻结 6 秒，原音发音重播，助你从容辨析！`);
  }
  // 3. Strength (认知坚韧护甲)
  else if (t === 'shield_gray' || name === 'Strength') {
    buffs.strengthShield = true;
    showToast(`🔰 释放【认知坚韧护甲】！本题若失误，创伤将 100% 转化为临时灰血（错词将在 3 题后强化再考）！`);
  }
  // 4. Temperance (身心平衡抚慰)
  else if (t === 'temperance' || name === 'Temperance') {
    buffs.doubleRecallHeal = true;
    if (typeof GrayHealthEngine !== 'undefined') {
      GrayHealthEngine.changeSan(playerProfile, 10, '节制平衡抚慰');
    } else {
      playerProfile.san = Math.min(100, (playerProfile.san || 100) + 10);
    }
    showToast(`🕊️ 释放【身心平衡抚慰】！理智 +10 SAN，下一次错词回忆灰血恢复翻倍 (+4 HP)！`);
  }
  // 5. Wheel of Fortune (顺势逆境轮转)
  else if (t === 'reroll' || name === 'Wheel of Fortune') {
    showToast(`🌪️ 释放【顺势逆境轮转】！当前卡壳难题已推后 3 题，正在置换标准考纲题...`);
    if (typeof deferCurrentQuestion === 'function') {
      deferCurrentQuestion(3);
    } else if (typeof launchSurvivalGame === 'function') {
      launchSurvivalGame();
    }
  }
  // 6. Justice (秩序理智天平)
  else if (t === 'justice' || name === 'Justice') {
    buffs.justiceSanBonus = true;
    showToast(`⚖️ 释放【秩序理智天平】！本题判定生还时将抚慰恢复 +15 SAN！`);
  }
  // 7. The Star (灵感词性回眸)
  else if (t === 'pos_hint' || name === 'The Star') {
    let currentWord = '';
    if (typeof survivalData !== 'undefined' && survivalData && Array.isArray(survivalData.options)) {
      const correctOpt = survivalData.options.find(o => o.isCorrect);
      if (correctOpt) currentWord = correctOpt.word;
    }
    const pos = (currentWord && typeof wordTierDict !== 'undefined' && wordTierDict[currentWord]) ? wordTierDict[currentWord].pos || '词性' : '词性';
    const skeleton = currentWord ? `${currentWord[0]}...${currentWord.slice(-1)} (${currentWord.length} 字母)` : '骨架线索';
    showToast(`✨【灵感词性回眸】：词性 [${pos}]，形态结构 [${skeleton}]！`);
    const banner = document.getElementById('tacticalHintBanner');
    if (banner) {
      banner.style.display = 'block';
      banner.innerHTML = `✨ <strong>灵感词性回眸</strong>：词性 <code>${escapeHtml(pos)}</code>，形态骨架 <code>${escapeHtml(skeleton)}</code>。`;
    }
  }
  // 8. The Empress (生机灰血温存)
  else if (t === 'heal_gray' || name === 'The Empress') {
    const gray = playerProfile.grayHealth || 0;
    if (gray <= 0) {
      showToast(`💚【生机灰血温存】已激活，但当前无残留灰血。`);
    } else {
      playerProfile.hp = Math.min(100, (playerProfile.hp || 100) + gray);
      playerProfile.grayHealth = 0;
      showToast(`💚 释放【生机灰血温存】！已将 ${gray} 点临时灰血全部固化为永久生命值 HP！`);
    }
  }
  // 9. Death (绝境舍弃追猎)
  else if (t === 'death' || name === 'Death') {
    let currentWord = '';
    if (typeof survivalData !== 'undefined' && survivalData && Array.isArray(survivalData.options)) {
      const correctOpt = survivalData.options.find(o => o.isCorrect);
      if (correctOpt) currentWord = correctOpt.word;
    }
    if (currentWord) {
      if (!playerProfile.bloodBrandedWords) playerProfile.bloodBrandedWords = [];
      if (!playerProfile.bloodBrandedWords.includes(currentWord)) {
        playerProfile.bloodBrandedWords.push(currentWord);
      }
    }
    showToast(`🦅【绝境舍弃追猎】断臂求生！生词 [${currentWord || '当前词'}] 已烙上【死神血印】，下层将作为双倍赏金精英再临！`);
    if (typeof nextQuestionOrNode === 'function') {
      nextQuestionOrNode(false, true);
    } else if (typeof launchSurvivalGame === 'function') {
      launchSurvivalGame();
    }
  }
  // 10. The Chariot (破釜沉舟冲刺)
  else if (t === 'chariot' || name === 'The Chariot') {
    buffs.chariotRush = { remaining: 3, mistakeFails: true };
    showToast(`⚡ 释放【破釜沉舟冲刺】！开启 3 题冲刺！连击+3且连击金币+50%，若答错承受双倍创伤！`);
  }

  btn.disabled = true;
  btn.style.opacity = '0.4';
  updateBadges();
  renderBattleHand();
  saveToStorage(STORAGE_KEYS.PROFILE, playerProfile);
  triggerCloudSync();
}

let activeDeckTab = 'ALL';

function openDeckSelectorModal() {
  soundClick();
  let m = document.getElementById('deckSelectorModal');
  if (!m) {
    m = document.createElement('div');
    m.id = 'deckSelectorModal';
    m.className = 'modal-backdrop';
    m.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.65); backdrop-filter:blur(4px); z-index:9999; display:flex; align-items:center; justify-content:center; padding:12px;';
    document.body.appendChild(m);
  }
  renderDeckSelectorContent(m);
  m.style.display = 'flex';
  m.style.opacity = '1';
}

function closeDeckSelectorModal() {
  soundClick();
  const m = document.getElementById('deckSelectorModal');
  if (m) {
    m.style.display = 'none';
  }
}

function filterDeckTab(tab) {
  activeDeckTab = tab;
  soundClick();
  const m = document.getElementById('deckSelectorModal');
  if (m) renderDeckSelectorContent(m);
}

function renderDeckSelectorContent(modalEl) {
  ensureBattleHand();
  const hand = (playerProfile.battleHand || []).map(getCardObject).filter(Boolean);

  const slotsHtml = [0, 1, 2].map(slotIdx => {
    const c = hand[slotIdx];
    if (c) {
      const rarityLower = (c.rarity || 'r').toLowerCase();
      return `
        <div class="deck-slot-card rarity-${rarityLower}" style="background:var(--paper-surface-sub); border:1.5px solid var(--brand-primary); border-radius:var(--radius-md); padding:8px 10px; text-align:center; position:relative;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
            <span class="tarot-rarity-badge badge-${rarityLower}">★ ${c.rarity} ★</span>
            <span class="tarot-category-badge category-${c.categoryType}">${c.category}</span>
          </div>
          <div style="font-size:22px; margin:2px 0;">${c.icon}</div>
          <div style="font-weight:800; font-size:12.5px; color:var(--text-primary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${escapeHtml(c.name || c.arcana)}</div>
          <div style="font-size:11px; color:var(--brand-primary); font-weight:700;">${escapeHtml(c.skill)}</div>
          <button class="btn btn-secondary" style="font-size:10px; padding:2px 8px; margin-top:6px;" onclick="removeBattleCardSlot(${slotIdx})">卸下</button>
        </div>
      `;
    } else {
      return `
        <div style="background:var(--paper-surface-sub); border:1.5px dashed var(--paper-border); border-radius:var(--radius-md); padding:10px; text-align:center; opacity:0.65;">
          <div style="font-size:10px; color:var(--text-secondary);">手牌位 ${slotIdx + 1}</div>
          <div style="font-size:20px; margin:4px 0;">➕</div>
          <div style="font-size:11.5px; color:var(--text-secondary);">空置槽位</div>
          <div style="font-size:9.5px; color:var(--text-secondary); margin-top:4px;">点击下方卡牌装配</div>
        </div>
      `;
    }
  }).join('');

  // 过滤卡牌池
  let displayPool = TAROT_ROSTER;
  if (activeDeckTab === 'SSR') displayPool = TAROT_ROSTER.filter(c => c.rarity === 'SSR');
  else if (activeDeckTab === 'SR') displayPool = TAROT_ROSTER.filter(c => c.rarity === 'SR');
  else if (activeDeckTab === 'R') displayPool = TAROT_ROSTER.filter(c => c.rarity === 'R');

  const poolHtml = displayPool.map(c => {
    const isEquipped = hand.some(h => (h.name === c.name || h.arcana === c.name || h.skill === c.skill));
    const rarityLower = (c.rarity || 'r').toLowerCase();
    return `
      <div class="deck-pool-card rarity-${rarityLower}" style="background:var(--paper-surface); border:1.5px solid ${isEquipped ? 'var(--brand-primary)' : 'var(--paper-border)'}; border-radius:var(--radius-sm); padding:9px 12px; display:flex; justify-content:space-between; align-items:center; gap:8px;">
        <div style="display:flex; align-items:center; gap:10px; flex:1;">
          <span style="font-size:24px;">${c.icon}</span>
          <div style="flex:1;">
            <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
              <span class="tarot-rarity-badge badge-${rarityLower}">★ ${c.rarity} ★</span>
              <span class="tarot-category-badge category-${c.categoryType}">${c.category}</span>
              <span style="font-weight:800; font-size:13px; color:var(--text-primary);">${escapeHtml(c.name)} · ${escapeHtml(c.skill)}</span>
            </div>
            <div style="font-size:11px; color:var(--text-secondary); line-height:1.35; margin-top:2px;">${escapeHtml(c.desc)}</div>
            <div class="tarot-cost-pill">${escapeHtml(c.cost)}</div>
          </div>
        </div>
        <button class="btn ${isEquipped ? 'btn-secondary' : 'btn-primary'}" style="font-size:11px; padding:5px 10px; white-space:nowrap; border-radius:6px;" onclick="toggleEquipCard('${escapeHtml(c.name)}')">
          ${isEquipped ? '已装配' : '装配出征'}
        </button>
      </div>
    `;
  }).join('');

  modalEl.innerHTML = `
    <div style="background:var(--paper-surface); border:1.5px solid var(--paper-border); border-radius:var(--radius-lg); max-width:680px; width:100%; max-height:90vh; overflow-y:auto; padding:18px 20px; box-shadow:0 12px 36px rgba(0,0,0,0.5);">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1.5px solid var(--paper-border); padding-bottom:10px;">
        <div>
          <div style="font-size:16px; font-weight:900; color:var(--text-primary);">🎴 战术手牌整备 (Battle Hand · 3/3)</div>
          <div style="font-size:11.5px; color:var(--text-secondary); margin-top:2px;">自由装配 3 张塔罗策略卡，主动战术消耗专注，被动遗物常驻增益</div>
        </div>
        <button class="btn btn-secondary" style="font-size:11px; padding:3px 9px;" onclick="closeDeckSelectorModal()">✕ 关闭</button>
      </div>

      <!-- 当前 3 槽手牌 -->
      <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:8px; margin-bottom:14px;">
        ${slotsHtml}
      </div>

      <!-- 快捷预设按钮 -->
      <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:12px; align-items:center;">
        <span style="font-size:11px; color:var(--text-secondary); font-weight:700;">⚡ 战术构筑预设:</span>
        <button class="btn btn-secondary" style="font-size:10.5px; padding:3px 8px;" onclick="applyDeckPreset(['The Devil', 'The Chariot', 'Death'])">🔥 极速豪赌 (恶魔+死神+战车)</button>
        <button class="btn btn-secondary" style="font-size:10.5px; padding:3px 8px;" onclick="applyDeckPreset(['The Hermit', 'The Star', 'The Magician'])">💡 语言学者 (隐者+星辰+魔术师)</button>
        <button class="btn btn-secondary" style="font-size:10.5px; padding:3px 8px;" onclick="applyDeckPreset(['Strength', 'Temperance', 'The Empress'])">🛡️ 灰血守护 (力量+节制+女皇)</button>
      </div>

      <!-- 分级筛选标签 -->
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
        <span style="font-size:12px; font-weight:800; color:var(--text-primary);">📚 战术卡牌全名册 (16张完整战术体系)</span>
        <div style="display:flex; gap:4px;">
          <button class="btn ${activeDeckTab === 'ALL' ? 'btn-primary' : 'btn-secondary'}" style="font-size:10px; padding:2px 7px;" onclick="filterDeckTab('ALL')">全部 (16)</button>
          <button class="btn ${activeDeckTab === 'SSR' ? 'btn-primary' : 'btn-secondary'}" style="font-size:10px; padding:2px 7px; color:#f59e0b;" onclick="filterDeckTab('SSR')">★ SSR (4)</button>
          <button class="btn ${activeDeckTab === 'SR' ? 'btn-primary' : 'btn-secondary'}" style="font-size:10px; padding:2px 7px; color:#a855f7;" onclick="filterDeckTab('SR')">★ SR (6)</button>
          <button class="btn ${activeDeckTab === 'R' ? 'btn-primary' : 'btn-secondary'}" style="font-size:10px; padding:2px 7px; color:#38bdf8;" onclick="filterDeckTab('R')">★ R (6)</button>
        </div>
      </div>

      <!-- 可用卡牌库列表 -->
      <div style="display:grid; gap:8px; max-height:280px; overflow-y:auto; padding-right:4px;">
        ${poolHtml}
      </div>

      <div style="margin-top:14px; text-align:right;">
        <button class="btn btn-primary" style="padding:6px 22px; font-size:13px; font-weight:800;" onclick="closeDeckSelectorModal()">✅ 确认手牌出征</button>
      </div>
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
    return obj && (obj.name === cardName || obj.arcana === cardName || obj.skill === cardName);
  });

  if (matchIdx !== -1) {
    hand.splice(matchIdx, 1);
    showToast(`已卸下 [${cardName}]`);
  } else {
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
  if (badge) badge.textContent = `${cards.length} 张`;

  if (!grid) return;
  if (cards.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--text-secondary);">你的卡牌背包空空如也。前往【塔罗圣殿】抽卡解锁战斗手牌！</div>`;
  } else {
    grid.innerHTML = cards.map(c => {
      const rarityLower = (c.rarity || 'r').toLowerCase();
      const cnWord = (typeof chineseDict !== 'undefined' && chineseDict[c.word])
        ? chineseDict[c.word].replace(/\(考纲词汇\)|（考纲词汇）/g, '').trim()
        : '';
      return `
        <div class="codex-card rarity-${rarityLower}">
          <div style="display:flex; justify-content:space-between; align-items:center; width:100%; margin-bottom:4px;">
            <span class="tarot-rarity-badge badge-${rarityLower}">★ ${c.rarity} ★</span>
            <span class="tarot-category-badge category-${c.categoryType}">${c.category}</span>
          </div>
          <div class="codex-card-arcana">${escapeHtml(c.name || c.arcana)}</div>
          <div class="codex-card-word">${escapeHtml(c.word || c.name)}</div>
          <div class="codex-card-cn">${escapeHtml(cnWord)}</div>
          <div class="codex-skill-box">
            <div class="codex-skill-title">${c.icon} ${escapeHtml(c.skill)}</div>
            <div class="codex-skill-desc">${escapeHtml(c.desc)}</div>
            <div class="tarot-cost-pill">${escapeHtml(c.cost)}</div>
          </div>
          <button class="btn btn-secondary" style="width:100%; margin-top:8px; font-size:10.5px; padding:3px;" onclick="openWordDetails('${escapeHtml(c.word || c.name)}')">📖 查阅纯英释义</button>
        </div>
      `;
    }).join('');
  }

  m.style.display = 'block';
  setTimeout(() => m.style.opacity = '1', 10);
}

function closeCodexModal() {
  const m = document.getElementById('codexModal');
  if (m) {
    m.style.opacity = '0';
    setTimeout(() => m.style.display = 'none', 200);
  }
}

let tarotSlotCards = [];

function renderTarotDeck(forceUnrevealed = false) {
  const spread = document.getElementById('tarotSpread');
  if (!spread) return;
  spread.innerHTML = '';

  const pity = (playerProfile && playerProfile.tarotPityCounter !== undefined) ? playerProfile.tarotPityCounter : 0;
  
  // 顶部爆率与保底状态展示
  let header = document.getElementById('tarotGachaHeader');
  if (!header) {
    header = document.createElement('div');
    header.id = 'tarotGachaHeader';
    header.style.cssText = 'grid-column:1/-1; text-align:center; margin-bottom:12px; font-size:12px; color:var(--text-secondary); background:var(--paper-surface-sub); border:1px solid var(--paper-border); padding:6px 12px; border-radius:12px;';
    spread.parentNode.insertBefore(header, spread);
  }
  header.innerHTML = `
    <span>🎲 <strong>圣殿真实爆率</strong>: <span style="color:#f59e0b; font-weight:800;">SSR 8%</span> (十抽保底: <strong>${pity}/10</strong>) · <span style="color:#a855f7; font-weight:800;">SR 27%</span> · <span style="color:#38bdf8; font-weight:800;">R 65%</span></span>
  `;

  // 预生成 4 个牌位
  tarotSlotCards = [0, 1, 2, 3].map(() => rollTarotCard());

  tarotSlotCards.forEach((card, idx) => {
    const rarityLower = (card.rarity || 'r').toLowerCase();
    const scene = document.createElement('div');
    scene.className = 'tarot-card-scene';
    scene.innerHTML = `
      <div class="tarot-card rarity-${rarityLower}" id="tarotCard_${idx}">
        <div class="tarot-card-face tarot-back">
          <div class="tarot-back-mandala">✦</div>
          <div class="tarot-back-tip">TAROT SANCTUARY</div>
          <div style="font-size:10px; color:var(--tarot-gold); opacity:0.8; margin-top:4px;">50 Gold 翻开命运</div>
        </div>
        <div class="tarot-card-face tarot-front">
          <div style="display:flex; justify-content:space-between; align-items:center; width:100%; margin-bottom:4px;">
            <span class="tarot-rarity-badge badge-${rarityLower}">★ ${card.rarity} ★</span>
            <span class="tarot-category-badge category-${card.categoryType}">${card.category}</span>
          </div>
          <div class="tarot-arcana-name">${escapeHtml(card.name)}</div>
          <div class="tarot-meaning" style="font-size:12px; color:var(--brand-primary); font-weight:800; margin:4px 0;">${card.icon} ${escapeHtml(card.skill)}</div>
          <div style="font-size:10px; color:var(--text-secondary); line-height:1.3; margin-bottom:4px;">${escapeHtml(card.desc)}</div>
          <div class="tarot-cost-pill">${escapeHtml(card.cost)}</div>
        </div>
      </div>
    `;
    scene.onclick = () => flipTarotCard(idx, card);
    spread.appendChild(scene);
  });
}

function flipTarotCard(idx, wordOrCard, arcana) {
  const cardEl = (typeof document !== 'undefined') ? document.getElementById(`tarotCard_${idx}`) : null;
  if (cardEl && cardEl.classList && typeof cardEl.classList.contains === 'function' && cardEl.classList.contains('flipped')) {
    if (typeof openDeckSelectorModal === 'function') openDeckSelectorModal();
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

  // 获取真实抽卡结果
  const rolledCard = rollTarotCard();
  if (Array.isArray(tarotSlotCards)) {
    tarotSlotCards[idx] = rolledCard;
  }

  // 更新正面展示
  if (cardEl) {
    const rarityLower = (rolledCard.rarity || 'r').toLowerCase();
    if (cardEl.classList && typeof cardEl.classList.add === 'function') {
      cardEl.classList.add('flipped');
    }
    cardEl.className = `tarot-card flipped rarity-${rarityLower}`;
    const frontEl = (typeof cardEl.querySelector === 'function') ? cardEl.querySelector('.tarot-front') : null;
    if (frontEl) {
      frontEl.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; width:100%; margin-bottom:4px;">
          <span class="tarot-rarity-badge badge-${rarityLower}">★ ${rolledCard.rarity} ★</span>
          <span class="tarot-category-badge category-${rolledCard.categoryType}">${rolledCard.category}</span>
        </div>
        <div class="tarot-arcana-name">${escapeHtml(rolledCard.name)}</div>
        <div class="tarot-meaning" style="font-size:12.5px; color:var(--brand-primary); font-weight:800; margin:4px 0;">${rolledCard.icon} ${escapeHtml(rolledCard.skill)}</div>
        <div style="font-size:10px; color:var(--text-secondary); line-height:1.3; margin-bottom:4px;">${escapeHtml(rolledCard.desc)}</div>
        <div class="tarot-cost-pill">${escapeHtml(rolledCard.cost)}</div>
      `;
    }
  }

  // 存入背包
  if (!playerProfile.tarotCardsCollected.some(c => (typeof c === 'string' ? c : (c.name || c.arcana)) === rolledCard.name)) {
    playerProfile.tarotCardsCollected.push({ ...rolledCard });
  }

  saveToStorage(STORAGE_KEYS.PROFILE, playerProfile);
  updateBadges();
  renderBattleHand();
  triggerCloudSync();

  // 更新保底展示
  const header = document.getElementById('tarotGachaHeader');
  if (header) {
    const pity = playerProfile.tarotPityCounter || 0;
    header.innerHTML = `
      <span>🎲 <strong>圣殿真实爆率</strong>: <span style="color:#f59e0b; font-weight:800;">SSR 8%</span> (十抽保底: <strong>${pity}/10</strong>) · <span style="color:#a855f7; font-weight:800;">SR 27%</span> · <span style="color:#38bdf8; font-weight:800;">R 65%</span></span>
    `;
  }

  soundSuccess();
  showToast(`✨ 抽到 ${rolledCard.rarity} 塔罗牌：【${rolledCard.name}】· ${rolledCard.skill}！`);
}

/**
 * 免费获得一张塔罗卡牌（用于击溃 Boss 掉落奖励、商人残卷赠送、成就奖励等）
 */
function grantBonusTarotDraw(sourceReason = 'Boss 击溃秘宝') {
  if (typeof playerProfile === 'undefined' || !playerProfile) return null;
  if (!playerProfile.tarotCardsCollected) playerProfile.tarotCardsCollected = [];

  const rolledCard = rollTarotCard();
  const alreadyHas = playerProfile.tarotCardsCollected.some(c => (typeof c === 'string' ? c : (c.name || c.arcana)) === rolledCard.name);
  if (!alreadyHas) {
    playerProfile.tarotCardsCollected.push({ ...rolledCard });
  }

  if (typeof saveToStorage === 'function' && typeof STORAGE_KEYS !== 'undefined') {
    saveToStorage(STORAGE_KEYS.PROFILE, playerProfile);
  }
  if (typeof updateBadges === 'function') updateBadges();
  if (typeof renderBattleHand === 'function') renderBattleHand();
  if (typeof triggerCloudSync === 'function') triggerCloudSync();

  if (typeof soundSuccess === 'function') soundSuccess();
  if (typeof showToast === 'function') {
    showToast(`🎁【${sourceReason}】觉醒 ${rolledCard.rarity} 塔罗牌：【${rolledCard.name}】· ${rolledCard.skill}！已收入背包`);
  }
  return rolledCard;
}

function reshuffleTarotDeck() {
  soundClick();
  renderTarotDeck(true);
  soundSuccess();
  showToast("🔮 塔罗法阵已重置！4 张全新未翻开命运卡牌已就位");
}

function renderProfileView() {
  const dashBody = document.getElementById('learningDashboardBody');
  const grid = document.getElementById('achievementGrid');
  if (!dashBody && !grid) return;

  const esc = (typeof escapeHtml === 'function') ? escapeHtml : (str => String(str || '').replace(/[&<>"']/g, ''));
  const profile = (typeof playerProfile !== 'undefined' && playerProfile) ? playerProfile : {};
  const activeWords = (typeof getActiveWordList === 'function') ? getActiveWordList() : (typeof words !== 'undefined' && Array.isArray(words) ? words : []);
  const totalWords = activeWords.length || 3837;

  const markedEntries = (typeof getMarkedWords === 'function')
    ? getMarkedWords()
    : (typeof marks !== 'undefined' && marks ? Object.entries(marks).filter(([k, v]) => v > 0) : []);
  const markedCount = markedEntries.length;
  const markedWordNames = markedEntries.map(([w]) => (typeof w === 'string' ? w.toLowerCase().trim() : ''));

  // 1. 估算核心考纲词掌握进度
  const masteredEstimate = Math.min(
    Math.max(0, totalWords - markedCount),
    (profile.wonRounds || 0) * 3 + Math.floor((profile.xp || 0) / 45)
  );
  const masteredPercent = Math.min(100, Math.round((masteredEstimate / totalWords) * 100));
  const reviewPercent = Math.min(100, Math.round((markedCount / totalWords) * 100));
  const unseenPercent = Math.max(0, 100 - masteredPercent - reviewPercent);

  // 2. SAN 认知抗压状态与实战阶梯判定
  const sanVal = (profile.san !== undefined) ? profile.san : 100;
  let sanTierName = "清明稳态 (Clear Mind)";
  let sanTierDesc = "标准核心词考查 · 基础语境与中文干扰选项";
  let sanBadgeBg = "rgba(16, 185, 129, 0.15)";
  let sanBadgeColor = "var(--brand-success)";

  if (sanVal <= 25) {
    sanTierName = "狂乱深渊 (Delirious Tier IV)";
    sanTierDesc = "极端语义同义词 4 选 1 · 认知阻抗极值挑战";
    sanBadgeBg = "rgba(239, 68, 68, 0.15)";
    sanBadgeColor = "var(--brand-danger)";
  } else if (sanVal <= 60) {
    sanTierName = "重度污染 (Heavy Tier III)";
    sanTierDesc = "真题语境挖空 (Cloze) + 4 个高危纯英近义词四选一";
    sanBadgeBg = "rgba(245, 158, 11, 0.15)";
    sanBadgeColor = "var(--brand-accent)";
  } else if (sanVal <= 80) {
    sanTierName = "轻度迷雾 (Mild Tier II)";
    sanTierDesc = "真题语境挖空 (Cloze) + 4 个纯英形近词四选一 (拼写混淆陷阱)";
    sanBadgeBg = "rgba(99, 102, 241, 0.15)";
    sanBadgeColor = "var(--brand-primary)";
  }

  // 3. 基于全量相似词图谱 (STONE_LEXICAL_GRAPH) 的形近高危混淆雷达
  const lexGraph = (typeof window !== 'undefined' && window.STONE_LEXICAL_GRAPH)
    ? window.STONE_LEXICAL_GRAPH
    : ((typeof STONE_LEXICAL_GRAPH !== 'undefined') ? STONE_LEXICAL_GRAPH : null);
  let confusableCardsHtml = '';
  if (lexGraph) {
    const candidateWords = (markedWordNames.length > 0)
      ? markedWordNames.filter(w => lexGraph[w])
      : ['space', 'access', 'station', 'board', 'form'];

    const displayWords = (candidateWords.length >= 2)
      ? candidateWords.slice(0, 4)
      : Object.keys(lexGraph).slice(0, 4);

    const confCards = displayWords.map(w => {
      const entry = lexGraph[w];
      if (!entry) return '';
      const confusables = (entry.form_confusables || []).map(f => f.word).filter(Boolean);
      const confStr = confusables.slice(0, 3).join(' / ');
      const note = entry.distinction_note ? entry.distinction_note.slice(0, 45) + '...' : (entry.zh || '');
      return `
        <div class="confusable-radar-item" style="background: var(--paper-surface-sub); border: 1px solid var(--paper-border); border-radius: var(--radius-sm); padding: 8px 10px; display: flex; flex-direction: column; justify-content: space-between; gap: 4px;">
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <strong style="font-size: 13.5px; color: var(--brand-primary); font-family: var(--font-mono);">${esc(w)}</strong>
            <span style="font-size: 10px; color: var(--brand-danger); background: rgba(239,68,68,0.1); padding: 1px 6px; border-radius: 6px; font-weight: 700;">形近陷阱</span>
          </div>
          <div style="font-size: 11px; color: var(--text-secondary); line-height: 1.3;">
            <span style="color: var(--text-primary); font-weight: 600;">混淆群:</span> ${esc(confStr || '无')}
          </div>
          <div style="font-size: 10.5px; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${esc(entry.distinction_note || '')}">
            💡 ${esc(note)}
          </div>
          <button class="btn btn-secondary btn-sm" onclick="openWordDetails('${esc(w)}')" style="font-size: 10.5px; padding: 2px 6px; align-self: flex-start; margin-top: 2px;">
            查阅辨析 ↗
          </button>
        </div>
      `;
    }).filter(Boolean).join('');

    confusableCardsHtml = `
      <div style="margin-top: 14px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <span style="font-size: 12px; font-weight: 800; color: var(--text-secondary); display: flex; align-items: center; gap: 4px;">
            ⚠️ 词谱形近高危混淆警示 (Lexical Confusion Radar)
          </span>
          <span style="font-size: 11px; color: var(--text-muted);">
            ${markedWordNames.length > 0 ? '优先匹配错题生词本' : '考纲经典形近榜'}
          </span>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 8px;">
          ${confCards}
        </div>
      </div>
    `;
  }

  // 渲染学情主面板
  if (dashBody) {
    dashBody.innerHTML = `
      <!-- 1. 核心词库掌握率进度条 -->
      <div style="background: var(--paper-surface-sub); border: 1px solid var(--paper-border); border-radius: var(--radius-sm); padding: 12px 14px; margin-bottom: 12px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <div>
            <span style="font-size: 13px; font-weight: 800; color: var(--text-primary);">核心考纲词库掌握全景</span>
            <span style="font-size: 11px; color: var(--text-secondary); margin-left: 6px;">(当前词库共 ${totalWords} 词)</span>
          </div>
          <div style="font-size: 16px; font-weight: 900; color: var(--brand-success); font-family: var(--font-mono);">
            ${masteredPercent}% <span style="font-size: 11px; color: var(--text-secondary); font-weight: 600;">已攻克</span>
          </div>
        </div>

        <div style="height: 10px; width: 100%; background: var(--paper-border); border-radius: 6px; overflow: hidden; display: flex; margin-bottom: 8px;">
          <div style="width: ${masteredPercent}%; background: var(--brand-success);" title="已掌握 (${masteredEstimate} 词)"></div>
          <div style="width: ${reviewPercent}%; background: var(--brand-danger);" title="需重点复习 (${markedCount} 词)"></div>
          <div style="width: ${unseenPercent}%; background: rgba(148, 163, 184, 0.4);" title="待探索 (${totalWords - masteredEstimate - markedCount} 词)"></div>
        </div>

        <div style="display: flex; justify-content: space-between; font-size: 11.5px; color: var(--text-secondary); flex-wrap: wrap; gap: 8px;">
          <span style="display: flex; align-items: center; gap: 4px;">
            <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: var(--brand-success);"></span>
            <span>已熟练掌握: <strong style="color: var(--text-primary);">${masteredEstimate}</strong> 词</span>
          </span>
          <span style="display: flex; align-items: center; gap: 4px;">
            <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: var(--brand-danger);"></span>
            <span>错题待复习: <strong style="color: var(--brand-danger);">${markedCount}</strong> 词</span>
          </span>
          <span style="display: flex; align-items: center; gap: 4px;">
            <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: rgba(148, 163, 184, 0.7);"></span>
            <span>待探索考点: <strong style="color: var(--text-primary);">${Math.max(0, totalWords - masteredEstimate - markedCount)}</strong> 词</span>
          </span>
        </div>
      </div>

      <!-- 2. SAN 认知抗压状态 -->
      <div style="background: var(--paper-surface-sub); border: 1px solid var(--paper-border); border-radius: var(--radius-sm); padding: 10px 14px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 24px;">🧠</span>
          <div>
            <div style="font-size: 13px; font-weight: 800; color: var(--text-primary);">
              SAN 心智清明度: <strong style="color: var(--brand-primary);">${sanVal}</strong> / 100
            </div>
            <div style="font-size: 11.5px; color: var(--text-secondary); margin-top: 2px;">
              当前实战阶段: ${sanTierDesc}
            </div>
          </div>
        </div>
        <div style="background: ${sanBadgeBg}; color: ${sanBadgeColor}; padding: 4px 10px; border-radius: 12px; font-size: 11.5px; font-weight: 800;">
          ${sanTierName}
        </div>
      </div>

      <!-- 3. 形近高危混淆雷达 -->
      ${confusableCardsHtml}
    `;
  }

  // 渲染生涯四维勋章
  if (grid) {
    const cardsCount = (profile.tarotCardsCollected || []).length;
    grid.innerHTML = `
      <div style="background:var(--paper-surface-sub); padding:10px 12px; border-radius:var(--radius-sm); border:1px solid var(--paper-border);">
        <div style="font-size:11px; color:var(--text-secondary);">Survivor Level (等级)</div>
        <div style="font-size:18px; font-weight:800; color:var(--brand-primary);">LV.${profile.level || 1}</div>
      </div>
      <div style="background:var(--paper-surface-sub); padding:10px 12px; border-radius:var(--radius-sm); border:1px solid var(--paper-border);">
        <div style="font-size:11px; color:var(--text-secondary);">Available Gold (随身金币)</div>
        <div style="font-size:18px; font-weight:800; color:var(--brand-accent);">${profile.gold || 0} G</div>
      </div>
      <div style="background:var(--paper-surface-sub); padding:10px 12px; border-radius:var(--radius-sm); border:1px solid var(--paper-border);">
        <div style="font-size:11px; color:var(--text-secondary);">Experience (永久经验值)</div>
        <div style="font-size:18px; font-weight:800; color:var(--brand-cyan);">${profile.xp || 0} XP</div>
      </div>
      <div style="background:var(--paper-surface-sub); padding:10px 12px; border-radius:var(--radius-sm); border:1px solid var(--paper-border);">
        <div style="font-size:11px; color:var(--text-secondary);">Collected Cards (已解锁卡牌)</div>
        <div style="font-size:18px; font-weight:800; color:var(--tarot-gold);">${cardsCount} 张</div>
      </div>
    `;
  }
}

if (typeof window !== 'undefined') {
  window.TAROT_ROSTER = TAROT_ROSTER;
  window.TACTICAL_TAROT_ARCANA = TACTICAL_TAROT_ARCANA;
  window.getCardObject = getCardObject;
  window.rollTarotCard = rollTarotCard;
  window.ensurePlayerFocus = ensurePlayerFocus;
  window.restorePlayerFocus = restorePlayerFocus;
  window.ensureBattleHand = ensureBattleHand;
  window.renderBattleHand = renderBattleHand;
  window.castBattleCard = castBattleCard;
  window.openDeckSelectorModal = openDeckSelectorModal;
  window.closeDeckSelectorModal = closeDeckSelectorModal;
  window.filterDeckTab = filterDeckTab;
  window.removeBattleCardSlot = removeBattleCardSlot;
  window.toggleEquipCard = toggleEquipCard;
  window.applyDeckPreset = applyDeckPreset;
  window.openCodexModal = openCodexModal;
  window.closeCodexModal = closeCodexModal;
  window.renderTarotDeck = renderTarotDeck;
  window.flipTarotCard = flipTarotCard;
  window.grantBonusTarotDraw = grantBonusTarotDraw;
  window.reshuffleTarotDeck = reshuffleTarotDeck;
  window.renderProfileView = renderProfileView;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    TAROT_ROSTER,
    TACTICAL_TAROT_ARCANA,
    getCardObject,
    rollTarotCard,
    grantBonusTarotDraw,
    ensurePlayerFocus,
    restorePlayerFocus,
    ensureBattleHand,
    renderBattleHand,
    castBattleCard
  };
}
