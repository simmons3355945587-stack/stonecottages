/**
 * Our Stone Cottages - Beta & Ground Promotion Module (地推与测试分支)
 * 职责：
 * 1. 独立管理线下地推活动参数 (Channel ID, 渠道码, 推广员工号)
 * 2. 地推专属快速体验关卡与无网络离线演示模式
 * 3. 避免将地推临时活动逻辑与主系统骨架耦合
 */
(function() {
  'use strict';

  class BetaPromoModule {
    constructor() {
      this.isPromoActive = false;
      this.promoChannel = 'offline_default';
      this.promoConfig = null;
      this.init();
    }

    init() {
      // 检查 URL 中是否有地推渠道参数 (例如 ?promo=booth_a&channel=campus)
      const urlParams = new URLSearchParams(window.location.search);
      const promoParam = urlParams.get('promo') || urlParams.get('channel');
      if (promoParam) {
        this.isPromoActive = true;
        this.promoChannel = promoParam;
        if (window.StoneStorage) {
          window.StoneStorage.setModuleData('beta_promo', 'channel', promoParam);
        }
      } else if (window.StoneStorage) {
        const savedChannel = window.StoneStorage.getModuleData('beta_promo', 'channel', null);
        if (savedChannel) {
          this.isPromoActive = true;
          this.promoChannel = savedChannel;
        }
      }

      this.loadPromoConfig();
    }

    loadPromoConfig() {
      this.promoConfig = {
        channel: this.promoChannel,
        quickTrialWordCount: 5,        // 地推现场快速试玩 5 词体验
        trialRewardCoins: 50,          // 试玩赠送石屋金币
        offlineFallbackEnabled: true   // 离线无网降级
      };

      if (this.isPromoActive && window.StoneEventBus) {
        window.StoneEventBus.emit('BETA_PROMO_TRIGGERED', this.promoConfig);
      }
    }

    getPromoState() {
      return {
        isActive: this.isPromoActive,
        channel: this.promoChannel,
        config: this.promoConfig
      };
    }

    /**
     * 地推现场快速结算上报 (若有网络异步打点，若无网络存入本地缓存)
     */
    recordPromoConversion(userStats) {
      const record = {
        channel: this.promoChannel,
        timestamp: Date.now(),
        stats: userStats
      };

      if (window.StoneStorage) {
        const history = window.StoneStorage.getModuleData('beta_promo', 'conversion_history', []);
        history.push(record);
        window.StoneStorage.setModuleData('beta_promo', 'conversion_history', history);
      }

      console.info('[BetaPromoModule] Promo conversion recorded locally.');
    }
  }

  window.StoneBetaPromo = new BetaPromoModule();
  console.info('[BetaPromoModule] BetaPromoModule initialized.');
})();
