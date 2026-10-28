/**
 * Our Stone Cottages - Lobby Module (大厅主模块)
 * 职责：
 * 1. 负责大厅主界面、状态栏（体力、金币、理智 SAN）、模式卡片入口渲染
 * 2. 派发导航事件至各独立业务模块，严禁直接侵入业务模块内部实现
 */
(function() {
  'use strict';

  class LobbyModule {
    constructor() {
      this.currentView = 'cottage'; // 'cottage' (大厅) | 'lexicon' | 'expedition' | 'match3' | 'cards' | 'seasons'
      this.init();
    }

    init() {
      this.bindEvents();
      this.renderStatusHeader();
    }

    bindEvents() {
      if (window.StoneEventBus) {
        // 监听用户数据更新，自动刷新大厅顶栏
        window.StoneEventBus.on('USER_PROFILE_UPDATED', (profile) => {
          this.renderStatusHeader(profile);
        });
        window.StoneEventBus.on('REWARD_EARNED', ({ coins }) => {
          this.addCoins(coins);
        });
      }
    }

    /**
     * 大厅导航分发
     */
    navigateTo(targetView, options = {}) {
      console.info(`[LobbyModule] Navigating to: ${targetView}`);
      this.currentView = targetView;

      // 派发全局导航事件
      if (window.StoneEventBus) {
        window.StoneEventBus.emit('NAVIGATE_VIEW', { view: targetView, options });
      }

      // 兼容现有的视图切换函数
      if (typeof window.switchNavView === 'function') {
        window.switchNavView(targetView);
      }
    }

    renderStatusHeader(customProfile) {
      const profile = customProfile || (window.StoneStorage ? window.StoneStorage.getUserProfile() : null);
      if (!profile) return;

      const coinEl = document.getElementById('playerCoinsDisplay');
      if (coinEl) {
        coinEl.textContent = profile.coins ?? 100;
      }
    }

    addCoins(amount) {
      if (!window.StoneStorage) return;
      const profile = window.StoneStorage.getUserProfile();
      profile.coins = (profile.coins || 0) + (amount || 0);
      window.StoneStorage.saveUserProfile(profile);
    }
  }

  window.StoneLobby = new LobbyModule();
  console.info('[LobbyModule] LobbyModule initialized.');
})();
