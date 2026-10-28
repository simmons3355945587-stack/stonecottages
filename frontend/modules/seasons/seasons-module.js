/**
 * Our Stone Cottages - Seasons & Elite Module (四季精英模块)
 * 职责：
 * 1. 四季轮换 (春·生机/夏·焦灼/秋·丰收/冬·严寒) 环境加成与掉落倍率
 * 2. 精英怪 (Elite Boss) 战词库词缀、强化词复现与通关赏金
 */
(function() {
  'use strict';

  const SEASONS_CONFIG = {
    spring: {
      id: 'spring',
      name: '春·生机 (Verdant Spring)',
      icon: '🌱',
      buffDesc: '生词复苏率提升，灰血转化恢复 +15%',
      coinMultiplier: 1.0,
      eliteBonusRate: 0.1
    },
    summer: {
      id: 'summer',
      name: '夏·焦灼 (Scorching Summer)',
      icon: '☀️',
      buffDesc: '答题倒计时加速 15%，连击金币收益 +30%',
      coinMultiplier: 1.3,
      eliteBonusRate: 0.2
    },
    autumn: {
      id: 'autumn',
      name: '秋·丰收 (Golden Harvest)',
      icon: '🍁',
      buffDesc: '全节点掉落收益翻倍，通关宝箱额外抽卡一次',
      coinMultiplier: 1.5,
      eliteBonusRate: 0.15
    },
    winter: {
      id: 'winter',
      name: '冬·严寒 (Frosty Winter)',
      icon: '❄️',
      buffDesc: '理智消耗 +20%，击败精英怪直接解锁全词缀',
      coinMultiplier: 1.2,
      eliteBonusRate: 0.25
    }
  };

  class SeasonsModule {
    constructor() {
      this.currentSeasonId = 'spring';
      this.eliteEncounterActive = false;
      this.init();
    }

    init() {
      if (window.StoneStorage) {
        this.currentSeasonId = window.StoneStorage.getModuleData('seasons', 'current_season', 'autumn');
      }
      this.bindEvents();
    }

    bindEvents() {
      if (window.StoneEventBus) {
        window.StoneEventBus.on('TRIGGER_ELITE_ENCOUNTER', (data) => {
          this.triggerElite(data);
        });
      }
    }

    getCurrentSeason() {
      return SEASONS_CONFIG[this.currentSeasonId] || SEASONS_CONFIG.autumn;
    }

    setSeason(seasonId) {
      if (SEASONS_CONFIG[seasonId]) {
        this.currentSeasonId = seasonId;
        if (window.StoneStorage) {
          window.StoneStorage.setModuleData('seasons', 'current_season', seasonId);
        }
        if (window.StoneEventBus) {
          window.StoneEventBus.emit('SEASON_ROTATED', this.getCurrentSeason());
        }
        return true;
      }
      return false;
    }

    triggerElite(encounterData = {}) {
      this.eliteEncounterActive = true;
      const season = this.getCurrentSeason();
      const elitePayload = {
        name: encounterData.name || '狂暴语境守卫者',
        hp: (encounterData.hp || 100) * (1 + season.eliteBonusRate),
        rewardMultiplier: season.coinMultiplier * 1.5,
        seasonAffix: season.name
      };

      if (window.StoneEventBus) {
        window.StoneEventBus.emit('ELITE_ENCOUNTER_ACTIVE', elitePayload);
      }
      return elitePayload;
    }
  }

  window.StoneSeasons = new SeasonsModule();
  console.info('[SeasonsModule] Seasons & Elite Module initialized.');
})();
