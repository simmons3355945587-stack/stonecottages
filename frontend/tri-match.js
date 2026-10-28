// tri-match.js: 三段同词·语境消歧多人竞技场前端逻辑

let currentScope = 'cet4_core';
let currentMode = 'solo'; // 'solo' (AI陪练) | 'multi' (联机PK)
let totalRounds = 3;
let currentRoundIndex = 0;
let puzzlesPool = [];
let currentPuzzle = null;

// 计分与状态
let myScore = 0;
let myCombo = 1;
let oppScore = 0;
let currentAssignments = {}; // { p1: meaning_id, p2: meaning_id, ... }
let selectedPassageId = null;
let roundTimerInterval = null;
let roundTimeRemaining = 35;
let roundStartTime = 0;
let isRoundFinished = false;

// AI 陪练模拟器计时器
let aiTimer1 = null;
let aiTimer2 = null;
let aiTimer3 = null;

// WebSocket 连接
let ws = null;
let myClientId = 'user_' + Math.floor(Math.random() * 10000);
let currentRoomCode = null;
let isHost = false;

// 默认离线备选题库 (三段同词·绝无挖空)
const SEED_PUZZLES = [
  {
    puzzle_id: "tri_space_01",
    word: "space",
    learner_level: "CET4",
    passages: [
      {
        passage_id: "p1",
        order: 1,
        source_title: "NASA Exploration (维基百科)",
        source_url: "https://simple.wikipedia.org/wiki/NASA",
        source_type: "wikipedia",
        fk_grade_level: 8.4,
        oov_ratio: 3.8,
        highlighted_paragraph: "The National Aeronautics and <mark class=\"target-word\">Space</mark> Administration (NASA) deals with <mark class=\"target-word\">space</mark> exploration. Four astronauts from NASA are in <mark class=\"target-word\">space</mark> as of 2025's second quarter. Three of those are supposed to come back to Earth in July.",
        sense_in_context: "n. 太空 / 宇宙空间",
        clue_words: ["NASA", "astronauts", "Earth", "exploration"],
        explanation: "文中与宇航员(astronauts)、NASA、地球(Earth)并列，指代地外宇宙空间。"
      },
      {
        passage_id: "p2",
        order: 2,
        source_title: "Architectural Digest (卫报报道)",
        source_url: "https://simple.wikipedia.org/wiki/Beverly_Hills",
        source_type: "news",
        fk_grade_level: 7.9,
        oov_ratio: 2.9,
        highlighted_paragraph: "However the houses are large, spacious, and fancy. The architects focused on creating an open living <mark class=\"target-word\">space</mark> that connects the kitchen with the backyard patio, maximizing natural light.",
        sense_in_context: "n. 居住活动空间 / 场地",
        clue_words: ["houses", "living space", "kitchen", "patio"],
        explanation: "与 living、houses 连用（living space），指住宅生活与活动的物理空间。"
      },
      {
        passage_id: "p3",
        order: 3,
        source_title: "Keyboard Layout Manual (日常对白)",
        source_url: "https://tatoeba.org",
        source_type: "spoken",
        fk_grade_level: 6.5,
        oov_ratio: 1.5,
        highlighted_paragraph: "When typing on a standard keyboard, press the long horizontal bar at the bottom to insert a blank <mark class=\"target-word\">space</mark> between two words. Without this <mark class=\"target-word\">space</mark>, words would blend together.",
        sense_in_context: "n. 空格 / 文字间隙",
        clue_words: ["keyboard", "insert", "between two words", "typing"],
        explanation: "在键盘打字输入语境下，指单词与单词之间的空白间隙（空格键）。"
      }
    ],
    options: [
      { meaning_id: "m_p1", text: "n. 太空 / 宇宙空间" },
      { meaning_id: "m_p2", text: "n. 居住活动空间 / 场地" },
      { meaning_id: "m_p3", text: "n. 空格 / 文字间隙" }
    ],
    correct_mapping: { "p1": "m_p1", "p2": "m_p2", "p3": "m_p3" }
  },
  {
    puzzle_id: "tri_develop_02",
    word: "develop",
    learner_level: "CET4",
    passages: [
      {
        passage_id: "p1",
        order: 1,
        source_title: "Tech Industry News (国际科技时评)",
        source_url: "https://news.google.com",
        source_type: "news",
        fk_grade_level: 8.5,
        oov_ratio: 3.2,
        highlighted_paragraph: "Software engineering teams around the world continue to <mark class=\"target-word\">develop</mark> open-source artificial intelligence models that can run locally on personal computers without cloud servers.",
        sense_in_context: "v. 研发 / 开发 (软件或技术)",
        clue_words: ["software engineering", "models", "open-source"],
        explanation: "与软件工程(software engineering)、AI模型搭配，指技术与产品的研发开发。"
      },
      {
        passage_id: "p2",
        order: 2,
        source_title: "Health & Medicine (健康百科)",
        source_url: "https://simple.wikipedia.org/wiki/Medicine",
        source_type: "wikipedia",
        fk_grade_level: 7.8,
        oov_ratio: 2.5,
        highlighted_paragraph: "Doctors warn that people who do not get enough sleep each night are much more likely to <mark class=\"target-word\">develop</mark> chronic health problems and seasonal infections over time.",
        sense_in_context: "v. 患上 / 形成 (疾病或隐患)",
        clue_words: ["doctors", "health problems", "infections"],
        explanation: "与 health problems、infections 搭配，指身体逐渐患上某种疾病或出现病症。"
      },
      {
        passage_id: "p3",
        order: 3,
        source_title: "Photography Guide (摄影暗房指南)",
        source_url: "https://simple.wikipedia.org/wiki/Photography",
        source_type: "wikipedia",
        fk_grade_level: 8.0,
        oov_ratio: 3.0,
        highlighted_paragraph: "Before digital cameras became popular, photographers had to <mark class=\"target-word\">develop</mark> their photographic film using special liquid chemicals inside a completely dark room.",
        sense_in_context: "v. 冲洗 (胶卷或底片)",
        clue_words: ["photographers", "film", "chemicals", "dark room"],
        explanation: "与胶卷(film)、暗房(dark room)连用，指传统摄影术中的冲洗底片与相片。"
      }
    ],
    options: [
      { meaning_id: "m_p1", text: "v. 研发 / 开发 (技术与模型)" },
      { meaning_id: "m_p2", text: "v. 患上 / 染上 (病症与隐患)" },
      { meaning_id: "m_p3", text: "v. 冲洗 (胶卷与照片)" }
    ],
    correct_mapping: { "p1": "m_p1", "p2": "m_p2", "p3": "m_p3" }
  },
  {
    puzzle_id: "tri_tight_03",
    word: "tight",
    learner_level: "CET4",
    passages: [
      {
        passage_id: "p1",
        order: 1,
        source_title: "Consumer Budget (路透社财经)",
        source_url: "https://news.google.com",
        source_type: "news",
        fk_grade_level: 7.4,
        oov_ratio: 2.0,
        highlighted_paragraph: "Due to rising grocery prices and higher utility bills, many working households are now living on a very <mark class=\"target-word\">tight</mark> budget and cutting non-essential spending.",
        sense_in_context: "adj. 紧巴的 / 拮据的 (预算或资金)",
        clue_words: ["budget", "bills", "spending", "cutting"],
        explanation: "与 budget 连用（tight budget），指资金拮据、预算紧张。"
      },
      {
        passage_id: "p2",
        order: 2,
        source_title: "Athletic Running Shoes (运动指南)",
        source_url: "https://simple.wikipedia.org/wiki/Running",
        source_type: "wikipedia",
        fk_grade_level: 6.8,
        oov_ratio: 1.8,
        highlighted_paragraph: "Running shoes should fit comfortably around the heel, but if they are too <mark class=\"target-word\">tight</mark> across the toes, they can cause painful blisters during long training sessions.",
        sense_in_context: "adj. 紧绷挤勒的 (鞋帽与衣物)",
        clue_words: ["running shoes", "fit", "toes", "blisters"],
        explanation: "形容跑鞋穿在脚趾部位太紧、挤脚挤勒。"
      },
      {
        passage_id: "p3",
        order: 3,
        source_title: "Project Management Rules (项目会议)",
        source_url: "https://tatoeba.org",
        source_type: "spoken",
        fk_grade_level: 7.1,
        oov_ratio: 2.1,
        highlighted_paragraph: "Our engineering team is working on a <mark class=\"target-word\">tight</mark> schedule this month to finish the core product update before the annual national conference begins.",
        sense_in_context: "adj. 紧凑紧迫的 (日程或时间)",
        clue_words: ["schedule", "finish", "conference", "deadline"],
        explanation: "与 schedule 搭配（tight schedule），指时间紧迫、日程排得密不透风。"
      }
    ],
    options: [
      { meaning_id: "m_p1", text: "adj. 拮据紧巴的 (预算或资金)" },
      { meaning_id: "m_p2", text: "adj. 紧绷挤勒的 (鞋帽与衣物)" },
      { meaning_id: "m_p3", text: "adj. 紧迫紧凑的 (时间与日程)" }
    ],
    correct_mapping: { "p1": "m_p1", "p2": "m_p2", "p3": "m_p3" }
  }
];

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  loadPuzzles();
});

function selectScope(scope, el) {
  currentScope = scope;
  document.querySelectorAll('.scope-item').forEach(i => i.classList.remove('active'));
  if (el) el.classList.add('active');
}

function switchMode(mode) {
  currentMode = mode;
  document.getElementById('tabSolo').classList.toggle('active', mode === 'solo');
  document.getElementById('tabMulti').classList.toggle('active', mode === 'multi');
  document.getElementById('multiControls').style.display = mode === 'multi' ? 'block' : 'none';
  const startBtn = document.getElementById('btnStartGame');
  if (mode === 'multi') {
    startBtn.style.display = 'none';
    initWebSocket();
  } else {
    startBtn.style.display = 'flex';
  }
}

function setRounds(r, el) {
  totalRounds = r;
  document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');
}

async function loadPuzzles() {
  try {
    const res = await fetch('/api/puzzles');
    if (res.ok) {
      const data = await res.json();
      if (data.puzzles && data.puzzles.length > 0) {
        puzzlesPool = data.puzzles;
        return;
      }
    }
  } catch (e) {
    console.log("使用内置优质种子题库");
  }
  puzzlesPool = [...SEED_PUZZLES];
}

// 播放发音
function speakCurrentWord() {
  if (!currentPuzzle || !currentPuzzle.word) return;
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(currentPuzzle.word);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }
}

// 开始对战
function startBattle(puzzles = null) {
  if (puzzles && puzzles.length > 0) {
    puzzlesPool = puzzles;
  }
  document.getElementById('lobbyView').style.display = 'none';
  document.getElementById('battleArenaView').style.display = 'block';

  currentRoundIndex = 0;
  myScore = 0;
  oppScore = 0;
  myCombo = 1;
  updateScoreUI();

  loadRound(currentRoundIndex);
}

// 加载指定轮次
function loadRound(idx) {
  isRoundFinished = false;
  currentAssignments = {};
  selectedPassageId = null;

  currentPuzzle = puzzlesPool[idx % puzzlesPool.length];
  document.getElementById('currentWordText').textContent = currentPuzzle.word;

  renderPassages(currentPuzzle.passages);
  renderOptions(currentPuzzle.options);

  // 启动 35 秒倒计时
  clearInterval(roundTimerInterval);
  roundTimeRemaining = 35;
  roundStartTime = Date.now();
  const timerBar = document.getElementById('battleTimerBar');
  timerBar.style.width = '100%';

  roundTimerInterval = setInterval(() => {
    roundTimeRemaining--;
    timerBar.style.width = `${(roundTimeRemaining / 35) * 100}%`;
    if (roundTimeRemaining <= 0) {
      clearInterval(roundTimerInterval);
      handleRoundTimeout();
    }
  }, 1000);

  // 启动 AI 陪练模拟器 (单人模式下)
  if (currentMode === 'solo') {
    startAISimulation();
  }
}

// 渲染 3 张真实语料卡片 (绝对不挖空)
function renderPassages(passages) {
  const container = document.getElementById('triPassagesList');
  container.innerHTML = '';

  passages.forEach(p => {
    const card = document.createElement('div');
    card.className = 'passage-card';
    card.id = `card_${p.passage_id}`;
    card.onclick = () => onPassageCardClicked(p.passage_id);

    const sourceIcon = p.source_type === 'wikipedia' ? '🏛️ 维基百科' : (p.source_type === 'news' ? '📰 权威媒体' : '💬 地道口语');

    card.innerHTML = `
      <div class="passage-meta-bar">
        <span class="passage-source">${sourceIcon} · ${p.source_title}</span>
        <span class="passage-difficulty">Grade ${p.fk_grade_level} · 生词率 ${p.oov_ratio}%</span>
      </div>
      <div class="passage-body">
        ${p.highlighted_paragraph}
      </div>
      <div class="passage-slot" id="slot_${p.passage_id}">
        <span class="slot-placeholder" id="slotText_${p.passage_id}">👉 点击此处选中段落，再点选下方释义进行配对</span>
        <span class="slot-badge" style="font-size: 11px; opacity: 0.7;">段落 #${p.order}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

// 渲染 3 个释义选项
function renderOptions(options) {
  const grid = document.getElementById('meaningOptionsGrid');
  grid.innerHTML = '';

  // 打乱选项顺序
  const shuffled = [...options].sort(() => 0.5 - Math.random());

  shuffled.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'meaning-btn';
    btn.id = `btn_${opt.meaning_id}`;
    btn.onclick = () => onMeaningOptionClicked(opt.meaning_id);

    const labelLetter = String.fromCharCode(65 + idx); // A, B, C
    btn.innerHTML = `
      <span class="meaning-tag">${labelLetter}</span>
      <span>${opt.text}</span>
    `;
    grid.appendChild(btn);
  });
}

// 选中段落卡片
function onPassageCardClicked(passageId) {
  if (isRoundFinished) return;
  selectedPassageId = passageId;

  document.querySelectorAll('.passage-card').forEach(c => c.classList.remove('selected'));
  const targetCard = document.getElementById(`card_${passageId}`);
  if (targetCard) targetCard.classList.add('selected');
}

// 点击释义选项
function onMeaningOptionClicked(meaningId) {
  if (isRoundFinished) return;

  // 如果尚未明确选定段落，自动寻找第一个尚未配对的段落
  if (!selectedPassageId) {
    const unassigned = currentPuzzle.passages.find(p => !currentAssignments[p.passage_id]);
    if (unassigned) {
      selectedPassageId = unassigned.passage_id;
      onPassageCardClicked(selectedPassageId);
    }
  }

  if (!selectedPassageId) return;

  // 绑定释义到当前段落
  const opt = currentPuzzle.options.find(o => o.meaning_id === meaningId);
  if (!opt) return;

  // 检查是否已被其他段落占用，若占用先释放
  for (let pid in currentAssignments) {
    if (currentAssignments[pid] === meaningId) {
      delete currentAssignments[pid];
      resetSlotUI(pid);
    }
  }

  currentAssignments[selectedPassageId] = meaningId;

  // 更新插槽 UI
  const slot = document.getElementById(`slot_${selectedPassageId}`);
  const slotText = document.getElementById(`slotText_${selectedPassageId}`);
  if (slot && slotText) {
    slot.classList.add('filled');
    slotText.innerHTML = `✅ 已匹配释义：<strong style="color: var(--arena-success);">${opt.text}</strong> (点击可更换)`;
  }

  // 标记该选项已被使用
  updateMeaningButtonsState();

  // 自动将选定焦点移动到下一个尚未分配的段落
  const nextUnassigned = currentPuzzle.passages.find(p => !currentAssignments[p.passage_id]);
  if (nextUnassigned) {
    onPassageCardClicked(nextUnassigned.passage_id);
  } else {
    selectedPassageId = null;
    document.querySelectorAll('.passage-card').forEach(c => c.classList.remove('selected'));
    // 全部 3 段均已选定释义，执行提交核验
    validateAllMatches();
  }
}

function resetSlotUI(passageId) {
  const slot = document.getElementById(`slot_${passageId}`);
  const slotText = document.getElementById(`slotText_${passageId}`);
  if (slot && slotText) {
    slot.classList.remove('filled');
    slotText.innerHTML = `👉 点击此处选中段落，再点选下方释义进行配对`;
  }
}

function updateMeaningButtonsState() {
  const usedMeanings = Object.values(currentAssignments);
  currentPuzzle.options.forEach(opt => {
    const btn = document.getElementById(`btn_${opt.meaning_id}`);
    if (btn) {
      if (usedMeanings.includes(opt.meaning_id)) {
        btn.classList.add('used');
      } else {
        btn.classList.remove('used');
      }
    }
  });
}

// 校验 3 段配对结果
function validateAllMatches() {
  let allCorrect = true;
  for (let pid in currentPuzzle.correct_mapping) {
    if (currentAssignments[pid] !== currentPuzzle.correct_mapping[pid]) {
      allCorrect = false;
      break;
    }
  }

  if (allCorrect) {
    // 全对成功！
    clearInterval(roundTimerInterval);
    isRoundFinished = true;

    const timeSpent = ((Date.now() - roundStartTime) / 1000).toFixed(1);
    const speedBonus = Math.max(10, Math.floor((35 - timeSpent) * 4));
    const roundScore = 300 * myCombo + speedBonus;
    myScore += roundScore;
    myCombo++;

    updateScoreUI();

    // 联机广播当轮完成
    if (ws && currentMode === 'multi' && currentRoomCode) {
      ws.send(JSON.stringify({
        action: 'round_finished',
        room_id: currentRoomCode,
        time_spent: timeSpent,
        score: myScore
      }));
    }

    // 显示语境线索复盘弹窗
    setTimeout(() => {
      showInsightsModal(true, timeSpent, roundScore);
    }, 600);

  } else {
    // 存在错误，轻微震颤并重置
    myCombo = 1;
    updateScoreUI();

    document.querySelectorAll('.passage-slot').forEach(s => {
      s.style.borderColor = 'var(--arena-danger)';
    });

    setTimeout(() => {
      document.querySelectorAll('.passage-slot').forEach(s => {
        s.style.borderColor = '';
      });
      // 提示重试
      alert("❌ 释义配对有误！请仔细阅读上下文线索后重新配对。");
      currentAssignments = {};
      currentPuzzle.passages.forEach(p => resetSlotUI(p.passage_id));
      updateMeaningButtonsState();
    }, 800);
  }
}

function handleRoundTimeout() {
  if (isRoundFinished) return;
  isRoundFinished = true;
  myCombo = 1;
  updateScoreUI();
  showInsightsModal(false, 35, 0);
}

// 赛后线索复盘弹窗
function showInsightsModal(isWin, timeSpent, pointsWon) {
  const modal = document.getElementById('insightsModal');
  const title = document.getElementById('roundResultTitle');
  const sub = document.getElementById('roundResultSubtitle');
  const emoji = document.getElementById('roundResultEmoji');
  const list = document.getElementById('insightsList');

  if (isWin) {
    emoji.textContent = "🏆";
    title.textContent = `消歧配对成功！+${pointsWon} 分`;
    sub.textContent = `用时 ${timeSpent}s · 连击 COMBO x${myCombo}`;
  } else {
    emoji.textContent = "⏰";
    title.textContent = "时间耗尽！";
    sub.textContent = "仔细查看下方语境线索，汲取灵感。";
  }

  list.innerHTML = '';
  currentPuzzle.passages.forEach(p => {
    const item = document.createElement('div');
    item.className = 'insights-item';
    const cluesHtml = (p.clue_words || []).map(c => `<span class="clue-chip">🔑 ${c}</span>`).join(' ');

    item.innerHTML = `
      <div style="font-weight: 800; font-size: 14px; margin-bottom: 6px; color: var(--arena-primary);">
        段落 #${p.order} (${p.source_title}) ➔ 【${p.sense_in_context}】
      </div>
      <div style="margin-bottom: 8px;">
        ${cluesHtml}
      </div>
      <div style="font-size: 13px; color: var(--text-sub); line-height: 1.5;">
        ${p.explanation || '上下文核心线索支撑此项释义。'}
      </div>
    `;
    list.appendChild(item);
  });

  modal.style.display = 'flex';
}

function nextRoundAction() {
  document.getElementById('insightsModal').style.display = 'none';
  currentRoundIndex++;
  if (currentRoundIndex < totalRounds) {
    loadRound(currentRoundIndex);
  } else {
    alert(`🎉 恭喜完成全部 ${totalRounds} 词对战！\n你的最终总分: ${myScore} 分！`);
    document.getElementById('battleArenaView').style.display = 'none';
    document.getElementById('lobbyView').style.display = 'block';
  }
}

function updateScoreUI() {
  document.getElementById('myScoreVal').textContent = myScore;
  document.getElementById('oppScoreVal').textContent = oppScore;
  document.getElementById('comboBadge').textContent = `COMBO x${myCombo}`;
}

// AI 虚拟学友陪练模拟器 (解决一个人学无聊)
function startAISimulation() {
  clearTimeout(aiTimer1);
  clearTimeout(aiTimer2);
  clearTimeout(aiTimer3);

  // 模拟对手在 5~8 秒完成第一段
  aiTimer1 = setTimeout(() => {
    if (!isRoundFinished) {
      oppScore += 100;
      updateScoreUI();
    }
  }, Math.random() * 3000 + 5000);

  // 模拟对手在 10~14 秒完成第二段
  aiTimer2 = setTimeout(() => {
    if (!isRoundFinished) {
      oppScore += 110;
      updateScoreUI();
    }
  }, Math.random() * 4000 + 10000);

  // 模拟对手在 16~21 秒完成第三段
  aiTimer3 = setTimeout(() => {
    if (!isRoundFinished) {
      oppScore += 130;
      updateScoreUI();
    }
  }, Math.random() * 5000 + 16000);
}

// ================= WebSocket 多人联机体系 =================
function initWebSocket() {
  if (ws && ws.readyState === WebSocket.OPEN) return;
  const host = window.location.hostname || 'localhost';
  const wsUrl = `ws://${host}:8088/ws/${myClientId}`;

  try {
    ws = new WebSocket(wsUrl);

    ws.onopen = () => {
      document.getElementById('roomStatusText').textContent = "🟢 已直连联机竞技服务，可自建房或输入房间码加入";
    };

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      handleServerEvent(msg);
    };

    ws.onerror = () => {
      document.getElementById('roomStatusText').textContent = "⚠️ 未连接到联机服务，可使用单人 AI 陪练模式畅玩";
    };
  } catch (e) {
    console.log("WS error:", e);
  }
}

function createRoomAction() {
  if (!ws || ws.readyState !== WebSocket.OPEN) {
    initWebSocket();
    setTimeout(createRoomAction, 500);
    return;
  }
  isHost = true;
  ws.send(JSON.stringify({
    action: 'create_room',
    name: '房主',
    scope: currentScope,
    rounds: totalRounds
  }));
}

function joinRoomAction() {
  const code = document.getElementById('inputRoomCode').value.trim();
  if (!code) {
    alert("请输入4位房间码！");
    return;
  }
  if (!ws || ws.readyState !== WebSocket.OPEN) {
    initWebSocket();
    setTimeout(joinRoomAction, 500);
    return;
  }
  isHost = false;
  currentRoomCode = code;
  ws.send(JSON.stringify({
    action: 'join_room',
    room_id: code,
    name: '学友' + Math.floor(Math.random() * 100)
  }));
}

function handleServerEvent(msg) {
  if (msg.event === 'room_created') {
    currentRoomCode = msg.room_id;
    document.getElementById('roomStatusText').innerHTML = `👑 房间创建成功！房间码：<strong style="font-size: 18px; color: var(--arena-accent);">${msg.room_id}</strong> (好友输入即可联机)`;
    document.getElementById('btnStartGame').style.display = 'flex';
    document.getElementById('btnStartGame').textContent = '所有成员就绪 · 房主发车开战！';
    document.getElementById('btnStartGame').onclick = () => {
      ws.send(JSON.stringify({ action: 'start_game', room_id: currentRoomCode }));
    };
  } else if (msg.event === 'room_joined') {
    document.getElementById('roomStatusText').innerHTML = `✅ 已进入房间 <strong style="color: var(--arena-primary);">${msg.room_id}</strong>，等待房主发车...`;
  } else if (msg.event === 'game_started') {
    startBattle([msg.puzzle]);
  } else if (msg.event === 'opponent_progress') {
    if (msg.client_id !== myClientId) {
      oppScore = msg.score;
      document.getElementById('opponentNameLabel').textContent = msg.player_name;
      updateScoreUI();
    }
  }
}
