function setCandyTierFilter(tier) {
  soundClick();
  currentCandyTier = tier;
  document.querySelectorAll('.candy-tier-filter-bar .tier-pill').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`tierPill_${tier}`);
  if (activeBtn) activeBtn.classList.add('active');
  recentCandyWordsHistory = [];
  generateCandyBoard();
  const labelMap = { 'all': '全部高级词库', 'cet4': 'CET-4 核心词库', 'cet6': 'CET-6 & 考研高阶词库', 'ielts': '雅思托福 & 菁英词库' };
  showToast(`🎯 已切换消消乐词库：${labelMap[tier] || tier}`);
}

function startCandyMatchGame() {
  soundClick();
  const gameBox = document.getElementById('candyMatchGameBox');
  if (gameBox) gameBox.style.display = 'block';
  
  const settleArea = document.getElementById('matchSettlementArea');
  if (settleArea) {
    settleArea.style.display = 'none';
    settleArea.innerHTML = '';
  }
  const grid = document.getElementById('candyGrid');
  if (grid) grid.style.display = 'grid';

  matchRemaining = 45;
  matchScore = 0;
  matchCombo = 1;
  matchWave = 1;
  matchActiveTile = null;

  document.getElementById('matchScoreVal').textContent = matchScore;
  document.getElementById('matchComboVal').textContent = `x${matchCombo}`;
  document.getElementById('matchTimerVal').textContent = `${matchRemaining}s`;
  document.getElementById('matchWaveVal').textContent = `WAVE ${matchWave}`;
  document.getElementById('matchTimerBar').style.width = '100%';

  clearInterval(matchTimerInterval);
  matchTimerInterval = setInterval(() => {
    matchRemaining--;
    const timerVal = document.getElementById('matchTimerVal');
    const timerBar = document.getElementById('matchTimerBar');
    if (timerVal) timerVal.textContent = `${matchRemaining}s`;
    if (timerBar) timerBar.style.width = `${(matchRemaining / 45) * 100}%`;
    if (matchRemaining <= 0) {
      endCandyMatchGame();
    }
  }, 1000);

  generateCandyBoard();
  showToast("🍬 消消乐已开局！45秒极速配对挑战开始！");
}

function generateCandyBoard() {
  const grid = document.getElementById('candyGrid');
  if (!grid) return;
  grid.innerHTML = '';
  matchActiveTile = null;

  // 1. 获取有效全词库池（必须有真实中文汉字释义，杜绝纯英占位符与考纲伪释义）
  let validWords = words.filter(w => {
    const raw = chineseDict[w];
    if (!raw || typeof raw !== 'string') return false;
    const cleanZh = raw.replace(/\(考纲词汇\)|（考纲词汇）/g, '').trim();
    if (!cleanZh || cleanZh.toLowerCase() === w.toLowerCase()) return false;
    return /[\u4e00-\u9fa5]/.test(cleanZh);
  });
  
  // 难度等级过滤
  if (currentCandyTier !== 'all' && typeof wordTierDict !== 'undefined') {
    const tiered = validWords.filter(w => (wordTierDict[w] || 'cet4') === currentCandyTier);
    if (tiered.length >= 6) {
      validWords = tiered;
    }
  }
  
  // 如果历史已出现过多，清空历史队列重新循环，确保不重样
  if (recentCandyWordsHistory.length >= validWords.length - 12 || recentCandyWordsHistory.length > 80) {
    recentCandyWordsHistory = [];
  }

  // 2. 候选词过滤：排除最近几轮刚出现过的词汇
  const unpickedWords = validWords.filter(w => !recentCandyWordsHistory.includes(w));
  const candidatePool = unpickedWords.length >= 6 ? unpickedWords : validWords;

  // 3. 错题/标记词温和回顾策略：每轮最多引入 1~2 个标记词，其余 4~5 个必须从全词库中新鲜抽取
  const marked = getMarkedWords().map(m => m[0]).filter(w => {
    const raw = chineseDict[w];
    if (!raw || typeof raw !== 'string') return false;
    const cleanZh = raw.replace(/\(考纲词汇\)|（考纲词汇）/g, '').trim();
    return cleanZh && /[\u4e00-\u9fa5]/.test(cleanZh) && cleanZh.toLowerCase() !== w.toLowerCase() && !recentCandyWordsHistory.includes(w);
  });
  let pool = [];
  
  if (marked.length > 0) {
    const pickMarkedCount = Math.min(2, marked.length);
    const shuffledMarked = [...marked].sort(() => 0.5 - Math.random()).slice(0, pickMarkedCount);
    pool.push(...shuffledMarked);
  }

  // 4. 用全量词库新鲜词填满至 6 个
  const freshWords = candidatePool.filter(w => !pool.includes(w)).sort(() => 0.5 - Math.random());
  while (pool.length < 6 && freshWords.length > 0) {
    pool.push(freshWords.pop());
  }

  // 记录到最近历史中，防止后续连续重复
  pool.forEach(w => {
    recentCandyWordsHistory.push(w);
  });

  const tiles = [];
  // 🎲 随机打乱 12 种独立设计师主题色（中英文色块完全随机，互不相关）
  const colorIndices = Array.from({length: 12}, (_, i) => i).sort(() => 0.5 - Math.random());
  let colorPointer = 0;

  pool.forEach((word) => {
    const rawDef = chineseDict[word] || '';
    const rawCn = rawDef.replace(/\(考纲词汇\)|（考纲词汇）/g, '').trim();
    // 提取最简洁核心释义，去除多余标点和词性前缀
    let cn = rawCn.split(/[,;，；]/)[0].replace(/^[a-z]+\.\s*/i, '').trim();
    if (!cn || !/[\u4e00-\u9fa5]/.test(cn) || cn.toLowerCase() === word.toLowerCase()) {
      cn = rawCn;
    }
    // 严密防御：若依然无有效汉字或释义与原英文相同，杜绝渲染该词块
    if (!cn || !/[\u4e00-\u9fa5]/.test(cn) || cn.toLowerCase() === word.toLowerCase()) {
      return;
    }
    const enColorClass = `color-theme-${colorIndices[colorPointer++ % 12]}`;
    const cnColorClass = `color-theme-${colorIndices[colorPointer++ % 12]}`;

    // 英文词块 (独立随机色)
    tiles.push({
      word: word,
      type: 'en',
      text: word,
      colorClass: enColorClass
    });
    // 中文释义词块 (独立随机色)
    tiles.push({
      word: word,
      type: 'cn',
      text: cn,
      colorClass: cnColorClass
    });
  });

  // 再次随机打乱卡片排布
  tiles.sort(() => 0.5 - Math.random());

  tiles.forEach(t => {
    const el = document.createElement('div');
    el.className = `candy-tile ${t.colorClass}`;
    el.dataset.word = t.word;
    el.dataset.type = t.type;
    el.innerHTML = `
      <span class="tile-lang-badge">${t.type === 'en' ? 'ENGLISH' : 'CHINESE'}</span>
      <span class="tile-word-text">${escapeHtml(t.text)}</span>
    `;
    el.onclick = () => handleCandyTileClick(el);
    grid.appendChild(el);
  });
}

function handleCandyTileClick(el) {
  if (el.classList.contains('pop-match') || el === matchActiveTile) return;
  soundClick();

  if (!matchActiveTile) {
    matchActiveTile = el;
    el.classList.add('selected');
    return;
  }

  const first = matchActiveTile;
  const second = el;
  matchActiveTile = null;
  first.classList.remove('selected');

  // 配对判定
  if (first.dataset.word === second.dataset.word && first.dataset.type !== second.dataset.type) {
    // 配对成功！
    soundSuccess();
    first.classList.add('pop-match');
    second.classList.add('pop-match');

    matchScore += 10 * matchCombo;
    matchCombo++;
    playerProfile.xp += 10;
    saveToStorage(STORAGE_KEYS.PROFILE, playerProfile);
    updateBadges();
    triggerCloudSync();

    const scVal = document.getElementById('matchScoreVal');
    const cbVal = document.getElementById('matchComboVal');
    if (scVal) scVal.textContent = matchScore;
    if (cbVal) cbVal.textContent = `x${matchCombo}`;

    // 检查是否清盘
    setTimeout(() => {
      const remaining = document.querySelectorAll('.candy-tile:not(.pop-match)');
      if (remaining.length === 0) {
        matchWave++;
        const wvVal = document.getElementById('matchWaveVal');
        if (wvVal) wvVal.textContent = `WAVE ${matchWave}`;
        showToast(`🎉 WAVE ${matchWave - 1} 全清！波次奖励 +30 XP`);
        playerProfile.xp += 30;
        generateCandyBoard();
      }
    }, 400);

  } else {
    // ⚠️ 选错惩罚机制：该单词的 Mark 自动 +1 并扣血！
    soundFailure();
    first.classList.add('shake-error');
    second.classList.add('shake-error');

    const wrongW1 = first.dataset.word;
    const wrongW2 = second.dataset.word;

    addMark(wrongW1);
    addMark(wrongW2);

    matchCombo = 1;
    playerProfile.hp = Math.max(0, playerProfile.hp - 5);
    const cbVal = document.getElementById('matchComboVal');
    if (cbVal) cbVal.textContent = `x1`;
    updateBadges();
    triggerCloudSync();

    showToast(`⚠️ 配对错误！[${wrongW1}] 与 [${wrongW2}] Mark +1 惩罚！`);

    setTimeout(() => {
      first.classList.remove('shake-error');
      second.classList.remove('shake-error');
    }, 450);
  }
}

function endCandyMatchGame() {
  clearInterval(matchTimerInterval);
  soundSuccess();
  
  const grid = document.getElementById('candyGrid');
  if (grid) grid.style.display = 'none';
  
  const settleArea = document.getElementById('matchSettlementArea');
  if (settleArea) {
    settleArea.style.display = 'block';
    settleArea.innerHTML = `
      <div style="background:var(--paper-surface-sub); border:2px solid var(--brand-primary); border-radius:var(--radius-lg); padding:22px; text-align:center; animation:fadeIn 0.3s ease-out;">
        <div style="font-size:36px; margin-bottom:8px;">🏁</div>
        <div style="font-size:18px; font-weight:900; color:var(--brand-primary); margin-bottom:4px;">TIME UP · 挑战结算</div>
        <div style="font-size:13px; color:var(--text-secondary); margin-bottom:16px;">45 秒极速配对挑战结束！</div>
        
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:10px; margin-bottom:18px;">
          <div style="background:var(--paper-surface); border:1px solid var(--paper-border); padding:10px; border-radius:var(--radius-sm);">
            <div style="font-size:11px; color:var(--text-secondary);">最终得分</div>
            <div style="font-size:18px; font-weight:800; color:var(--brand-accent);">${matchScore} 分</div>
          </div>
          <div style="background:var(--paper-surface); border:1px solid var(--paper-border); padding:10px; border-radius:var(--radius-sm);">
            <div style="font-size:11px; color:var(--text-secondary);">通关波次</div>
            <div style="font-size:18px; font-weight:800; color:var(--brand-success);">WAVE ${matchWave}</div>
          </div>
          <div style="background:var(--paper-surface); border:1px solid var(--paper-border); padding:10px; border-radius:var(--radius-sm);">
            <div style="font-size:11px; color:var(--text-secondary);">最高连击</div>
            <div style="font-size:18px; font-weight:800; color:var(--brand-primary);">x${matchCombo}</div>
          </div>
        </div>

        <div style="display:flex; gap:10px;">
          <button class="btn btn-primary" style="flex:2; height:42px; font-weight:800;" onclick="startCandyMatchGame()">
            ⚡ 立即再来一局 (Play Again)
          </button>
          <button class="btn btn-secondary" style="flex:1; height:42px;" onclick="abortMatchGame()">
            🚪 退出对局
          </button>
        </div>
      </div>
    `;
  }
}

function abortMatchGame() {
  soundClick();
  clearInterval(matchTimerInterval);
  const gameBox = document.getElementById('candyMatchGameBox');
  if (gameBox) gameBox.style.display = 'none';
  const settleArea = document.getElementById('matchSettlementArea');
  if (settleArea) {
    settleArea.style.display = 'none';
    settleArea.innerHTML = '';
  }
  const grid = document.getElementById('candyGrid');
  if (grid) grid.style.display = 'grid';
  showToast("🚪 已退出消消乐对局");
}