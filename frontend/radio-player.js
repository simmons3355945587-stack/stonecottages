// 📻 English Radio & Karaoke Bilingual Player (词汇生存战专属双语学歌播放器)
// 集成：极简悬浮黑胶机 + 卡拉OK双语歌词毫秒级滚动 + 单词点击查意与Mark生词本联动 + 智能音频兜底引擎

(function() {
  'use strict';

  // 1. 播放器状态管理
  const state = {
    playlist: typeof RADIO_PLAYLIST !== 'undefined' ? RADIO_PLAYLIST : [],
    currentIndex: 0,
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    playbackMode: 'loop', // 'loop' | 'single' | 'random'
    isDrawerOpen: false,
    useSynthBgm: false,
    synthTimer: null,
    audioEl: null,
    audioCtx: null
  };

  // 2. 初始化播放器音频元素
  function initAudio() {
    state.audioEl = new Audio();
    state.audioEl.preload = 'auto';
    state.audioEl.volume = 1.0;

    state.audioEl.addEventListener('timeupdate', () => {
      if (!state.useSynthBgm) {
        state.currentTime = state.audioEl.currentTime;
        state.duration = state.audioEl.duration || (state.playlist[state.currentIndex]?.duration || 180);
        updateProgressUI();
        syncLyricsUI();
      }
    });

    state.audioEl.addEventListener('loadedmetadata', () => {
      state.duration = state.audioEl.duration;
      updateProgressUI();
    });

    state.audioEl.addEventListener('ended', () => {
      handleSongEnded();
    });

    state.audioEl.addEventListener('error', (e) => {
      console.error("Radio audio load error:", e, state.audioEl.error);
      if (typeof showToast === 'function') {
        showToast("⚠️ 原声音频加载稍慢，正在重试连接...");
      }
    });
  }

  // 3. Web Audio API 纯音乐 Lofi 柔和和弦伴奏合成引擎 (离线/防盗链兜底)
  function startSynthBgm() {
    state.useSynthBgm = true;
    try {
      if (!state.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        state.audioCtx = new AudioContext();
      }
      if (state.audioCtx.state === 'suspended') {
        state.audioCtx.resume();
      }
    } catch(e) {
      console.warn("Web Audio context init error:", e);
    }

    clearInterval(state.synthTimer);
    const song = state.playlist[state.currentIndex];
    state.duration = song?.duration || 180;

    // 经典轻柔 Lofi 和弦频率 (Cmaj7 - Am7 - Dm7 - G7 舒缓治愈循环)
    const chords = [
      [261.63, 329.63, 392.00, 493.88], // Cmaj7
      [220.00, 261.63, 329.63, 392.00], // Am7
      [293.66, 349.23, 440.00, 523.25], // Dm7
      [196.00, 246.94, 293.66, 349.23]  // G7
    ];
    let chordIdx = 0;

    function playChord() {
      if (!state.isPlaying || !state.useSynthBgm || !state.audioCtx) return;
      const notes = chords[chordIdx % chords.length];
      chordIdx++;
      const now = state.audioCtx.currentTime;

      notes.forEach((freq, i) => {
        const osc = state.audioCtx.createOscillator();
        const gain = state.audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.035, now + 0.15 + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

        osc.connect(gain);
        gain.connect(state.audioCtx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + 2.0);
      });
    }

    playChord();
    state.synthTimer = setInterval(() => {
      if (state.isPlaying) {
        state.currentTime += 0.25;
        if (Math.floor(state.currentTime * 4) % 8 === 0) {
          playChord();
        }
        if (state.currentTime >= state.duration) {
          handleSongEnded();
        } else {
          updateProgressUI();
          syncLyricsUI();
        }
      }
    }, 250);
  }

  function stopSynthBgm() {
    clearInterval(state.synthTimer);
    state.useSynthBgm = false;
  }

  // 4. 核心切歌与播放控制
  function loadSong(index, autoPlay = true) {
    if (!state.playlist || state.playlist.length === 0) return;
    if (index < 0) index = state.playlist.length - 1;
    if (index >= state.playlist.length) index = 0;

    state.currentIndex = index;
    const song = state.playlist[index];
    state.currentTime = 0;
    state.duration = song.duration || 180;
    stopSynthBgm();

    if (state.audioEl) {
      state.audioEl.src = song.src;
      state.audioEl.load();
    }

    renderCurrentSongInfo();
    renderLyricsList();
    updateProgressUI();

    if (autoPlay) {
      playSong();
    }
  }

  function playSong() {
    state.isPlaying = true;
    updatePlayPauseBtnUI();
    const song = state.playlist[state.currentIndex];

    // 播放真实原声人声音频
    if (state.audioEl) {
      state.audioEl.volume = 1.0;
      const playPromise = state.audioEl.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          console.log("Audio playing with real vocal:", song.title);
        }).catch(err => {
          console.warn("Audio play prevented (requires user gesture):", err);
          if (typeof showToast === 'function') {
            showToast("🎵 点击任意处或播放按钮即可启动英文歌声");
          }
        });
      }
    }

    // 黑胶旋转动效与状态标记
    const disc = document.getElementById('radioVinylDisc');
    if (disc) disc.classList.add('playing');
    const miniPlayer = document.getElementById('radioMiniPlayer');
    if (miniPlayer) miniPlayer.classList.add('playing');
    const badge = document.getElementById('radioDiscBadge');
    if (badge) badge.textContent = '🎵';
  }

  function pauseSong() {
    state.isPlaying = false;
    updatePlayPauseBtnUI();
    if (state.audioEl) {
      state.audioEl.pause();
    }
    stopSynthBgm();

    const disc = document.getElementById('radioVinylDisc');
    if (disc) disc.classList.remove('playing');
    const miniPlayer = document.getElementById('radioMiniPlayer');
    if (miniPlayer) miniPlayer.classList.remove('playing');
    const badge = document.getElementById('radioDiscBadge');
    if (badge) badge.textContent = '⏸️';
  }

  function togglePlayPause() {
    if (state.isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  }

  function prevSong() {
    loadSong(state.currentIndex - 1, state.isPlaying);
  }

  function nextSong() {
    loadSong(state.currentIndex + 1, state.isPlaying);
  }

  function handleSongEnded() {
    if (state.playbackMode === 'single') {
      loadSong(state.currentIndex, true);
    } else if (state.playbackMode === 'random') {
      const nextIdx = Math.floor(Math.random() * state.playlist.length);
      loadSong(nextIdx, true);
    } else {
      loadSong(state.currentIndex + 1, true);
    }
  }

  function seekSong(timePercent) {
    const target = state.duration * timePercent;
    state.currentTime = target;
    if (state.audioEl && !state.useSynthBgm) {
      state.audioEl.currentTime = target;
    }
    updateProgressUI();
    syncLyricsUI(true);
  }

  // 5. 歌词渲染与单词点击点查交互 (精髓功能)
  function renderLyricsList() {
    const container = document.getElementById('radioLyricsContainer');
    if (!container) return;
    container.innerHTML = '';

    const song = state.playlist[state.currentIndex];
    if (!song || !song.lyrics || song.lyrics.length === 0) {
      container.innerHTML = '<div class="lyrics-empty">🎵 纯音乐或当前暂无歌词</div>';
      return;
    }

    // 🎵 渲染前奏专属绑定卡片 (Prelude & Instrumental Intro Card)
    const introDuration = song.introDuration || (song.lyrics[0] ? song.lyrics[0].time : 0);
    const introCard = document.createElement('div');
    introCard.className = 'radio-intro-card active';
    introCard.id = 'radioIntroCard';
    introCard.innerHTML = `
      <div class="radio-intro-waves">
        <span class="wave-bar bar1"></span>
        <span class="wave-bar bar2"></span>
        <span class="wave-bar bar3"></span>
        <span class="wave-bar bar4"></span>
        <span class="wave-bar bar5"></span>
      </div>
      <div class="radio-intro-main">
        <div class="radio-intro-badge-row">
          <span class="intro-status-pill">🎵 纯音乐前奏播放中 (Intro)</span>
          <span class="intro-countdown-tag">人声歌唱即将在 <b id="radioIntroCountdown">${Math.ceil(introDuration)}</b> 秒后进入</span>
        </div>
        <div class="radio-intro-desc">
          前奏乐器旋律欣赏中 · 律动磨耳朵
        </div>
      </div>
      <button class="radio-skip-intro-btn" onclick="window.RadioPlayer.skipIntro()" title="跳过前奏，直接跳转至第 1 句歌词开始处">
        ⏭️ 跳过前奏
      </button>
    `;
    container.appendChild(introCard);

    song.lyrics.forEach((line, idx) => {
      const lineEl = document.createElement('div');
      lineEl.className = 'lyrics-line';
      lineEl.dataset.index = idx;
      lineEl.dataset.time = line.time;

      // 英文句：将每个单词切分成可点击的 token
      const enRow = document.createElement('div');
      enRow.className = 'lyrics-en-row';
      
      const tokens = line.en.split(/(\s+|[.,!?'"~:;]+)/);
      tokens.forEach(tok => {
        if (!tok) return;
        const cleanWord = tok.replace(/[^a-zA-Z]/g, '').toLowerCase();
        if (cleanWord.length > 0 && /^[a-zA-Z]+$/.test(cleanWord)) {
          const span = document.createElement('span');
          span.className = 'radio-word-token';
          span.textContent = tok;
          span.onclick = (e) => {
            e.stopPropagation();
            handleWordClick(cleanWord, e.target);
          };
          enRow.appendChild(span);
        } else {
          const textSpan = document.createElement('span');
          textSpan.textContent = tok;
          enRow.appendChild(textSpan);
        }
      });

      // 中文句
      const cnRow = document.createElement('div');
      cnRow.className = 'lyrics-cn-row';
      cnRow.textContent = line.cn || '';

      lineEl.appendChild(enRow);
      lineEl.appendChild(cnRow);

      // 点击整行直接跳转到该时间点播放
      lineEl.onclick = () => {
        state.currentTime = line.time;
        if (state.audioEl && !state.useSynthBgm) {
          state.audioEl.currentTime = line.time;
        }
        syncLyricsUI(true);
        if (!state.isPlaying) playSong();
      };

      container.appendChild(lineEl);
    });
  }

  // 毫秒级歌词同步高亮与自动平滑居中滚动 (含前奏UI强绑定状态机)
  function syncLyricsUI(forceScroll = false) {
    const container = document.getElementById('radioLyricsContainer');
    if (!container) return;

    const song = state.playlist[state.currentIndex];
    if (!song || !song.lyrics || song.lyrics.length === 0) return;

    const t = state.currentTime;
    const introDuration = song.introDuration || (song.lyrics[0]?.time || 0);
    const isIntro = t < (introDuration - 0.05);

    const introCard = document.getElementById('radioIntroCard');
    const countdownEl = document.getElementById('radioIntroCountdown');

    if (isIntro) {
      // 🎵 1. 前奏播放阶段：前奏卡高亮跳动，倒计时递减
      if (introCard) {
        introCard.classList.add('active');
        introCard.classList.remove('passed');
        if (countdownEl) {
          const remain = Math.max(0, Math.ceil(introDuration - t));
          countdownEl.textContent = remain;
        }
      }
      // 严防死守：前奏期绝不高亮第一句歌词！彻底清除所有行 active
      const lines = container.querySelectorAll('.lyrics-line');
      lines.forEach(l => l.classList.remove('active'));

      if (forceScroll) {
        container.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    // 🎵 2. 人声歌唱阶段：前奏卡自然折叠收起
    if (introCard) {
      introCard.classList.remove('active');
      introCard.classList.add('passed');
    }

    // 精准定位当前人声所在句
    let activeIdx = 0;
    for (let i = 0; i < song.lyrics.length; i++) {
      if (t >= song.lyrics[i].time) {
        activeIdx = i;
      } else {
        break;
      }
    }

    const lines = container.querySelectorAll('.lyrics-line');
    lines.forEach((l, i) => {
      if (i === activeIdx) {
        if (!l.classList.contains('active') || forceScroll) {
          l.classList.add('active');
          // 平滑居中滚动
          const containerHeight = container.clientHeight;
          const lineTop = l.offsetTop - container.offsetTop;
          const targetScroll = lineTop - containerHeight / 2 + l.clientHeight / 2;
          container.scrollTo({ top: Math.max(0, targetScroll), behavior: 'smooth' });
        }
      } else {
        l.classList.remove('active');
      }
    });
  }

  // 6. 单词点击弹窗查意与生词本 Mark 联动
  function handleWordClick(word, targetEl) {
    // 优先从全局 chineseDict 查询，若无则查询内置释义
    const dict = typeof chineseDict !== 'undefined' ? chineseDict : {};
    let def = dict[word] || dict[word.toLowerCase()];
    
    // 如果没有，在常见四级小词中匹配前缀或原形
    if (!def) {
      if (word.endsWith('ing')) def = dict[word.slice(0, -3)] || dict[word.slice(0, -4)];
      if (word.endsWith('ed')) def = dict[word.slice(0, -2)] || dict[word.slice(0, -1)];
      if (word.endsWith('s')) def = dict[word.slice(0, -1)];
    }
    if (!def) def = "日常高频四六级核心词汇";

    // 检查是否已被加入生词本
    const marks = typeof getMarkedWords === 'function' ? getMarkedWords().map(m => m[0].toLowerCase()) : [];
    const isMarked = marks.includes(word.toLowerCase());

    const popover = document.getElementById('radioWordPopover');
    if (!popover) return;

    const popWord = document.getElementById('popWordTitle');
    const popDef = document.getElementById('popWordDef');
    const popMarkBtn = document.getElementById('popWordMarkBtn');
    const popPhonetic = document.getElementById('popWordPhonetic');

    if (popWord) popWord.textContent = word;
    if (popPhonetic) popPhonetic.textContent = `/${word}/`;
    if (popDef) popDef.textContent = def;

    if (popMarkBtn) {
      popMarkBtn.innerHTML = isMarked ? '★ 已在生词本' : '⭐ 收藏到生词本 (Mark)';
      popMarkBtn.className = isMarked ? 'btn btn-accent' : 'btn btn-primary';
      popMarkBtn.onclick = (e) => {
        e.stopPropagation();
        if (typeof toggleMarkWord === 'function') {
          toggleMarkWord(word.toLowerCase());
          const nowMarked = getMarkedWords().map(m => m[0].toLowerCase()).includes(word.toLowerCase());
          popMarkBtn.innerHTML = nowMarked ? '★ 已在生词本' : '⭐ 收藏到生词本 (Mark)';
          popMarkBtn.className = nowMarked ? 'btn btn-accent' : 'btn btn-primary';
          if (typeof showToast === 'function') {
            showToast(nowMarked ? `⭐ 单词 "${word}" 已成功收录至生词本！` : `已从生词本移除 "${word}"`);
          }
        }
      };
    }

    // 朗读发音
    const speakBtn = document.getElementById('popWordSpeakBtn');
    if (speakBtn) {
      speakBtn.onclick = (e) => {
        e.stopPropagation();
        if ('speechSynthesis' in window) {
          const ut = new SpeechSynthesisUtterance(word);
          ut.lang = 'en-US';
          window.speechSynthesis.speak(ut);
        }
      };
    }

    // 定位弹出气泡
    const rect = targetEl.getBoundingClientRect();
    popover.style.display = 'block';
    
    // 计算位置 (防出界)
    const popWidth = 260;
    let left = rect.left + rect.width / 2 - popWidth / 2;
    if (left < 10) left = 10;
    if (left + popWidth > window.innerWidth - 10) left = window.innerWidth - popWidth - 10;
    
    let top = rect.top - 140;
    if (top < 70) {
      top = rect.bottom + 8; // 若上方空间不足则弹在下方
    }

    popover.style.left = `${left}px`;
    popover.style.top = `${top}px`;
  }

  function closeWordPopover() {
    const popover = document.getElementById('radioWordPopover');
    if (popover) popover.style.display = 'none';
  }

  // 7. UI 更新与渲染
  function formatTime(sec) {
    if (!sec || isNaN(sec)) return "00:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  }

  function skipIntro() {
    const song = state.playlist[state.currentIndex];
    if (!song) return;
    const targetTime = song.introDuration || (song.lyrics[0]?.time || 0);
    state.currentTime = targetTime;
    if (state.audioEl && !state.useSynthBgm) {
      state.audioEl.currentTime = targetTime;
    }
    syncLyricsUI(true);
    if (!state.isPlaying) {
      playSong();
    }
    if (typeof showToast === 'function') {
      showToast(`⏩ 已跳过前奏，直接进入歌词起唱点！`);
    }
  }

  function updateProgressUI() {
    const song = state.playlist[state.currentIndex];
    const curTimeStr = formatTime(state.currentTime);
    const totalTimeStr = formatTime(state.duration);

    const miniTime = document.getElementById('radioMiniTime');
    if (miniTime) {
      const introDuration = song?.introDuration || 0;
      if (introDuration > 0 && state.currentTime < (introDuration - 0.05)) {
        const remain = Math.max(0, Math.ceil(introDuration - state.currentTime));
        miniTime.textContent = `${curTimeStr} / ${totalTimeStr} (前奏 ${remain}s)`;
      } else {
        miniTime.textContent = `${curTimeStr} / ${totalTimeStr}`;
      }
    }

    const drawerCur = document.getElementById('radioDrawerCurrentTime');
    if (drawerCur) drawerCur.textContent = curTimeStr;

    const drawerTotal = document.getElementById('radioDrawerTotalTime');
    if (drawerTotal) drawerTotal.textContent = totalTimeStr;

    const pct = state.duration > 0 ? (state.currentTime / state.duration) * 100 : 0;
    const progressFill = document.getElementById('radioProgressFill');
    if (progressFill) progressFill.style.width = `${pct}%`;

    const miniProgressFill = document.getElementById('radioMiniProgressFill');
    if (miniProgressFill) miniProgressFill.style.width = `${pct}%`;
  }

  function renderCurrentSongInfo() {
    const song = state.playlist[state.currentIndex];
    if (!song) return;

    // Mini 栏
    const miniTitle = document.getElementById('radioMiniTitle');
    if (miniTitle) miniTitle.textContent = `${song.title} - ${song.artist}`;

    const miniCover = document.getElementById('radioMiniCover');
    if (miniCover) miniCover.textContent = song.cover || '🎵';

    // 抽屉栏
    const drawerTitle = document.getElementById('radioDrawerSongTitle');
    if (drawerTitle) drawerTitle.textContent = song.title;

    const drawerArtist = document.getElementById('radioDrawerSongArtist');
    if (drawerArtist) drawerArtist.textContent = `${song.artist} · ${song.album}`;

    const drawerCover = document.getElementById('radioDrawerCover');
    if (drawerCover) drawerCover.textContent = song.cover || '🎵';

    const drawerTag = document.getElementById('radioDrawerSongTag');
    if (drawerTag) drawerTag.textContent = song.tag || 'CET-4 精选';

    // 选歌下拉单
    const selector = document.getElementById('radioSongSelect');
    if (selector) {
      selector.value = state.currentIndex;
    }
  }

  function updatePlayPauseBtnUI() {
    const miniBtn = document.getElementById('radioMiniPlayBtn');
    if (miniBtn) miniBtn.innerHTML = state.isPlaying ? '⏸️' : '▶️';

    const drawerBtn = document.getElementById('radioDrawerPlayBtn');
    if (drawerBtn) drawerBtn.innerHTML = state.isPlaying ? '⏸️' : '▶️';
  }

  function toggleDrawer(force) {
    state.isDrawerOpen = force !== undefined ? force : !state.isDrawerOpen;
    const drawer = document.getElementById('radioKaraokeDrawer');
    const mini = document.getElementById('radioMiniPlayer');
    const backdrop = document.getElementById('radioDrawerBackdrop');
    if (drawer) drawer.classList.toggle('open', state.isDrawerOpen);
    if (mini) mini.classList.toggle('drawer-open', state.isDrawerOpen);
    if (backdrop) backdrop.classList.toggle('open', state.isDrawerOpen);
    if (state.isDrawerOpen) {
      syncLyricsUI(true);
    }
  }

  // 7.5 可移动黑胶唱片浮窗拖拽与智能贴边吸附引擎
  function initDraggableVinyl() {
    const el = document.getElementById('radioMiniPlayer');
    if (!el) return;

    let isDragging = false;
    let startX = 0, startY = 0;
    let initialLeft = 0, initialTop = 0;
    let hasMoved = false;

    // 读取持久化记忆位置
    try {
      const saved = localStorage.getItem('vocab_radio_vinyl_pos');
      if (saved) {
        const pos = JSON.parse(saved);
        if (typeof pos.top === 'number' && typeof pos.left === 'number') {
          const discW = el.offsetWidth || 56;
          const discH = el.offsetHeight || 56;
          const maxLeft = window.innerWidth - discW - 8;
          const maxTop = window.innerHeight - discH - 70;
          const clampedLeft = Math.max(8, Math.min(maxLeft, pos.left));
          const clampedTop = Math.max(60, Math.min(maxTop, pos.top));
          el.style.left = `${clampedLeft}px`;
          el.style.top = `${clampedTop}px`;
          el.style.right = 'auto';
          el.style.bottom = 'auto';
        }
      }
    } catch(e) {}

    function getCoords(e) {
      if (e.touches && e.touches.length > 0) {
        return { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
      return { x: e.clientX, y: e.clientY };
    }

    function onPointerDown(e) {
      if (e.target.closest('button') || e.target.closest('select')) return;

      const pt = getCoords(e);
      startX = pt.x;
      startY = pt.y;
      hasMoved = false;
      isDragging = true;

      const rect = el.getBoundingClientRect();
      initialLeft = rect.left;
      initialTop = rect.top;

      el.style.transition = 'none';
      el.classList.add('dragging');

      window.addEventListener('mousemove', onPointerMove, { passive: false });
      window.addEventListener('mouseup', onPointerUp);
      window.addEventListener('touchmove', onPointerMove, { passive: false });
      window.addEventListener('touchend', onPointerUp);
    }

    function onPointerMove(e) {
      if (!isDragging) return;
      const pt = getCoords(e);
      const dx = pt.x - startX;
      const dy = pt.y - startY;

      if (!hasMoved && (Math.abs(dx) > 5 || Math.abs(dy) > 5)) {
        hasMoved = true;
      }

      if (hasMoved) {
        if (e.cancelable) e.preventDefault();

        let newLeft = initialLeft + dx;
        let newTop = initialTop + dy;

        const discW = el.offsetWidth || 56;
        const discH = el.offsetHeight || 56;

        const minLeft = 6;
        const maxLeft = window.innerWidth - discW - 6;
        const minTop = 60;
        const maxTop = window.innerHeight - discH - 70;

        newLeft = Math.max(minLeft, Math.min(maxLeft, newLeft));
        newTop = Math.max(minTop, Math.min(maxTop, newTop));

        el.style.left = `${newLeft}px`;
        el.style.top = `${newTop}px`;
        el.style.right = 'auto';
        el.style.bottom = 'auto';
      }
    }

    function onPointerUp(e) {
      if (!isDragging) return;
      isDragging = false;
      el.classList.remove('dragging');

      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);

      if (hasMoved) {
        // 智能贴边吸附
        const rect = el.getBoundingClientRect();
        const discW = rect.width;
        const isMobile = window.innerWidth <= 640;

        el.style.transition = 'left 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), top 0.3s ease';

        let finalLeft;
        if (isMobile) {
          if (rect.left + discW / 2 < window.innerWidth / 2) {
            finalLeft = 12; // 吸附左边缘
          } else {
            finalLeft = window.innerWidth - discW - 12; // 吸附右边缘
          }
        } else {
          finalLeft = Math.max(12, Math.min(window.innerWidth - discW - 12, rect.left));
        }

        el.style.left = `${finalLeft}px`;

        try {
          localStorage.setItem('vocab_radio_vinyl_pos', JSON.stringify({
            left: finalLeft,
            top: rect.top
          }));
        } catch(err){}
      }
    }

    // 点击事件（未发生拖拽时展开抽屉）
    el.addEventListener('click', (e) => {
      if (hasMoved) {
        e.stopPropagation();
        e.preventDefault();
        hasMoved = false;
        return;
      }
      if (e.target.closest('button') || e.target.closest('select')) return;
      toggleDrawer();
    });

    el.addEventListener('mousedown', onPointerDown);
    el.addEventListener('touchstart', onPointerDown, { passive: false });

    window.addEventListener('resize', () => {
      const rect = el.getBoundingClientRect();
      const discW = rect.width;
      const discH = rect.height;
      if (rect.right > window.innerWidth || rect.bottom > window.innerHeight) {
        const clampedLeft = Math.max(12, Math.min(window.innerWidth - discW - 12, rect.left));
        const clampedTop = Math.max(60, Math.min(window.innerHeight - discH - 72, rect.top));
        el.style.left = `${clampedLeft}px`;
        el.style.top = `${clampedTop}px`;
      }
    });
  }

  // 8. 创建 DOM 元素并挂载到页面
  function buildRadioDOM() {
    if (document.getElementById('radioContainer')) return;

    const wrap = document.createElement('div');
    wrap.id = 'radioContainer';
    wrap.className = 'radio-container';
    wrap.innerHTML = `
      <!-- 💿 1. 可自由拖拽移动的黑胶唱机模型 Mini Player (手机端为极简悬浮黑胶球，电脑端为胶囊条) -->
      <div class="radio-mini-player" id="radioMiniPlayer" title="按住可随意拖拽移动位置，点击展开双语歌词与控制">
        <div class="radio-mini-disc-wrap" id="radioMiniDiscWrap">
          <div class="radio-vinyl-disc" id="radioVinylDisc">
            <div class="radio-vinyl-grooves"></div>
            <span class="radio-vinyl-center" id="radioMiniCover">🍋</span>
          </div>
          <div class="radio-stylus" id="radioStylus"></div>
          <div class="radio-disc-badge" id="radioDiscBadge" title="播放状态">🎵</div>
        </div>

        <div class="radio-mini-info">
          <div class="radio-mini-title-wrap">
            <span class="radio-mini-title" id="radioMiniTitle">Lemon Tree - Fools Garden</span>
          </div>
          <div class="radio-mini-meta">
            <span class="radio-badge">📻 英文电台</span>
            <span id="radioMiniTime" style="font-family: var(--font-mono); font-size: 11px;">00:00 / 03:18</span>
          </div>
        </div>

        <div class="radio-mini-controls">
          <button class="radio-ctrl-btn" onclick="window.RadioPlayer.prev()" title="上一首">⏮️</button>
          <button class="radio-ctrl-btn radio-play-btn" id="radioMiniPlayBtn" onclick="window.RadioPlayer.togglePlay()" title="播放/暂停">▶️</button>
          <button class="radio-ctrl-btn" onclick="window.RadioPlayer.next()" title="下一首">⏭️</button>
          <button class="radio-ctrl-btn radio-expand-btn" onclick="window.RadioPlayer.toggleDrawer()" title="展开歌词与学习卡">📜 歌词</button>
        </div>

        <div class="radio-mini-progress-bar" onclick="window.RadioPlayer.handleProgressBarClick(event)">
          <div class="radio-mini-progress-fill" id="radioMiniProgressFill"></div>
        </div>
      </div>

      <!-- 📜 2. 沉浸式双语卡拉OK歌词抽屉 Karaoke Drawer -->
      <div class="radio-karaoke-drawer" id="radioKaraokeDrawer">
        <!-- 抽屉头部 -->
        <div class="radio-drawer-header">
          <div class="radio-drawer-header-left">
            <div class="radio-drawer-cover-box" id="radioDrawerCover">🍋</div>
            <div>
              <div class="radio-drawer-title-row">
                <span class="radio-drawer-title" id="radioDrawerSongTitle">Lemon Tree</span>
                <span class="radio-tag-pill" id="radioDrawerSongTag">🟢 四级听力经典</span>
              </div>
              <div class="radio-drawer-artist" id="radioDrawerSongArtist">Fools Garden · Dish of the Day</div>
            </div>
          </div>

          <div class="radio-drawer-header-right">
            <!-- 快速选歌下拉框 -->
            <select class="radio-song-select" id="radioSongSelect" onchange="window.RadioPlayer.selectSong(this.value)">
              ${state.playlist.map((s, idx) => `<option value="${idx}">🎵 ${s.title} (${s.artist})</option>`).join('')}
            </select>
            <button class="radio-close-btn" onclick="window.RadioPlayer.toggleDrawer(false)" title="收起歌词面板">✕</button>
          </div>
        </div>

        <!-- 歌词学习功能指引条 -->
        <div class="radio-tips-banner">
          <span>💡 <strong>双语沉浸提示</strong>：点击歌词中任意英文单词可即时查询释义并一键加入生词本（Mark）；点击整行可直接跳转！</span>
        </div>

        <!-- 毫秒级双语歌词滚动容器 -->
        <div class="radio-lyrics-wrap" id="radioLyricsContainer"></div>

        <!-- 抽屉底部播放控制栏 -->
        <div class="radio-drawer-footer">
          <div class="radio-progress-row">
            <span class="time-lbl" id="radioDrawerCurrentTime">00:00</span>
            <div class="radio-progress-track" onclick="window.RadioPlayer.handleProgressBarClick(event)">
              <div class="radio-progress-fill" id="radioProgressFill"></div>
            </div>
            <span class="time-lbl" id="radioDrawerTotalTime">03:18</span>
          </div>

          <div class="radio-footer-actions">
            <div class="radio-mode-btns">
              <button class="btn-subtle active" id="radioModeBtn" onclick="window.RadioPlayer.toggleMode()" title="循环模式">🔁 列表循环</button>
            </div>
            <div class="radio-main-btns">
              <button class="radio-circle-btn" onclick="window.RadioPlayer.prev()" title="上一首">⏮️</button>
              <button class="radio-circle-btn radio-circle-play" id="radioDrawerPlayBtn" onclick="window.RadioPlayer.togglePlay()" title="播放/暂停">▶️</button>
              <button class="radio-circle-btn" onclick="window.RadioPlayer.next()" title="下一首">⏭️</button>
            </div>
            <div style="width: 80px; text-align: right;">
              <button class="btn-subtle" onclick="window.RadioPlayer.toggleDrawer(false)">收起 ▼</button>
            </div>
          </div>
        </div>
      </div>

      <!-- 🔍 3. 歌词单词点查浮窗 Word Popover -->
      <div class="radio-word-popover" id="radioWordPopover" style="display: none;">
        <div class="pop-header">
          <div>
            <div class="pop-word" id="popWordTitle">word</div>
            <div class="pop-phonetic" id="popWordPhonetic">/wɜːd/</div>
          </div>
          <button class="pop-speak-btn" id="popWordSpeakBtn" title="发音朗读">🔊 朗读</button>
        </div>
        <div class="pop-def" id="popWordDef">中文释义加载中...</div>
        <div class="pop-footer">
          <button class="btn btn-primary" id="popWordMarkBtn" style="font-size: 11px; padding: 4px 10px; width: 100%;">⭐ 收藏到生词本 (Mark)</button>
        </div>
      </div>
    `;

    document.body.appendChild(wrap);
    initDraggableVinyl();

    // 点击空白处关闭点查浮窗
    document.addEventListener('click', (e) => {
      const pop = document.getElementById('radioWordPopover');
      if (pop && pop.style.display === 'block' && !pop.contains(e.target) && !e.target.classList.contains('radio-word-token')) {
        closeWordPopover();
      }
    });
  }

  // 9. 对外暴露全局调用接口
  window.RadioPlayer = {
    init: function() {
      initAudio();
      buildRadioDOM();
      loadSong(0, false); // 默认加载第一首 Lemon Tree
    },
    togglePlay: togglePlayPause,
    play: playSong,
    pause: pauseSong,
    prev: prevSong,
    next: nextSong,
    selectSong: function(idx) {
      loadSong(parseInt(idx, 10), state.isPlaying);
    },
    toggleDrawer: toggleDrawer,
    skipIntro: skipIntro,
    toggleMode: function() {
      const modes = ['loop', 'single', 'random'];
      const labels = { 'loop': '🔁 列表循环', 'single': '🔂 单曲循环', 'random': '🔀 随机播放' };
      const curIdx = modes.indexOf(state.playbackMode);
      state.playbackMode = modes[(curIdx + 1) % modes.length];
      const btn = document.getElementById('radioModeBtn');
      if (btn) btn.textContent = labels[state.playbackMode];
      if (typeof showToast === 'function') {
        showToast(`已切换为：${labels[state.playbackMode]}`);
      }
    },
    handleProgressBarClick: function(e) {
      const track = e.currentTarget;
      const rect = track.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = Math.max(0, Math.min(1, clickX / rect.width));
      seekSong(pct);
    }
  };

  // 页面加载完成后自启动初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.RadioPlayer.init);
  } else {
    window.RadioPlayer.init();
  }
})();
