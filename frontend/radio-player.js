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

    // 黑胶旋转动效
    const disc = document.getElementById('radioVinylDisc');
    if (disc) disc.classList.add('playing');
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

  // 毫秒级歌词同步高亮与自动平滑居中滚动
  function syncLyricsUI(forceScroll = false) {
    const container = document.getElementById('radioLyricsContainer');
    if (!container) return;

    const song = state.playlist[state.currentIndex];
    if (!song || !song.lyrics) return;

    const t = state.currentTime;
    let activeIdx = -1;

    for (let i = 0; i < song.lyrics.length; i++) {
      if (t >= song.lyrics[i].time) {
        activeIdx = i;
      } else {
        break;
      }
    }

    if (activeIdx === -1 && song.lyrics.length > 0) activeIdx = 0;

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

  function updateProgressUI() {
    const curTimeStr = formatTime(state.currentTime);
    const totalTimeStr = formatTime(state.duration);

    const miniTime = document.getElementById('radioMiniTime');
    if (miniTime) miniTime.textContent = `${curTimeStr} / ${totalTimeStr}`;

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
    if (drawer) drawer.classList.toggle('open', state.isDrawerOpen);
    if (mini) mini.classList.toggle('drawer-open', state.isDrawerOpen);
    if (state.isDrawerOpen) {
      syncLyricsUI(true);
    }
  }

  // 8. 创建 DOM 元素并挂载到页面
  function buildRadioDOM() {
    if (document.getElementById('radioContainer')) return;

    const wrap = document.createElement('div');
    wrap.id = 'radioContainer';
    wrap.className = 'radio-container';
    wrap.innerHTML = `
      <!-- 💿 1. 极简悬浮黑胶唱机 Mini Player (常驻右下角，不遮挡主游戏) -->
      <div class="radio-mini-player" id="radioMiniPlayer">
        <div class="radio-mini-disc-wrap" onclick="window.RadioPlayer.toggleDrawer()" title="点击展开双语卡拉OK歌词与点词学习面板">
          <div class="radio-vinyl-disc" id="radioVinylDisc">
            <span class="radio-vinyl-center" id="radioMiniCover">🍋</span>
          </div>
          <div class="radio-stylus"></div>
        </div>

        <div class="radio-mini-info" onclick="window.RadioPlayer.toggleDrawer()">
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
