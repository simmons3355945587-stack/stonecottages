/**
 * Our Stone Cottages - Match3 & Tri-Match Module
 * 职责：三消语境消歧匹配、糖果消除玩法引擎与结算管理
 */
(function() {
  'use strict';

  class Match3Module {
    constructor() {
      this.activeGame = null;
      this.highScore = 0;
      this.init();
    }

    init() {
      if (window.StoneStorage) {
        this.highScore = window.StoneStorage.getModuleData('match3', 'high_score', 0);
      }
      this.bindEvents();
    }

    bindEvents() {
      if (window.StoneEventBus) {
        window.StoneEventBus.on('START_MATCH3_REQUEST', (options) => {
          this.startGame(options);
        });
        window.StoneEventBus.on('ABORT_MATCH3_REQUEST', () => {
          this.abortGame();
        });
      }
    }

    /**
     * 启动消消乐游戏
     */
    startGame(options = {}) {
      const mode = options.mode || 'tri_context'; // 'tri_context' | 'candy'
      console.info(`[Match3Module] Starting match game in mode: ${mode}`);
      this.activeGame = {
        mode,
        startTime: Date.now(),
        score: 0,
        combo: 1,
        tier: options.tier || 'all'
      };

      if (window.StoneEventBus) {
        window.StoneEventBus.emit('MATCH3_GAME_START', this.activeGame);
      }

      // 如果页面上有 tri-match.html 独立跳转或内嵌容器，按需唤起
      if (mode === 'tri_context' && typeof window.openTriMatchArena === 'function') {
        window.openTriMatchArena(options);
      }
    }

    /**
     * 游戏结算
     */
    finishGame(result = {}) {
      if (!this.activeGame) return;
      const finalScore = result.score || this.activeGame.score || 0;
      const isNewHigh = finalScore > this.highScore;
      if (isNewHigh) {
        this.highScore = finalScore;
        if (window.StoneStorage) {
          window.StoneStorage.setModuleData('match3', 'high_score', this.highScore);
        }
      }

      const summary = {
        ...this.activeGame,
        finalScore,
        isNewHigh,
        durationSeconds: Math.floor((Date.now() - this.activeGame.startTime) / 1000)
      };

      this.activeGame = null;

      if (window.StoneEventBus) {
        window.StoneEventBus.emit('MATCH3_GAME_OVER', summary);
        // 如果有奖励，可通知用户状态层
        if (finalScore > 0) {
          window.StoneEventBus.emit('REWARD_EARNED', { coins: Math.floor(finalScore / 10), source: 'match3' });
        }
      }

      return summary;
    }

    abortGame() {
      if (this.activeGame) {
        console.info('[Match3Module] Match game aborted.');
        this.activeGame = null;
        if (window.StoneEventBus) {
          window.StoneEventBus.emit('MATCH3_GAME_ABORTED');
        }
      }
    }

    getHighScore() {
      return this.highScore;
    }
  }

  window.StoneMatch3 = new Match3Module();
  console.info('[Match3Module] Match3Module initialized.');
})();
