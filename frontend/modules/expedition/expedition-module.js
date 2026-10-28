/**
 * Our Stone Cottages - Expedition Module
 * 职责：远征探险流程、地图节点、移动决策与生词副本战
 */
(function() {
  'use strict';

  class ExpeditionModule {
    constructor() {
      this.currentRun = null;
      this.init();
    }

    init() {
      this.bindEvents();
    }

    bindEvents() {
      if (window.StoneEventBus) {
        window.StoneEventBus.on('START_EXPEDITION_REQUEST', (options) => {
          this.startExpedition(options);
        });
        window.StoneEventBus.on('EVACUATE_EXPEDITION_REQUEST', () => {
          this.evacuate();
        });
      }
    }

    startExpedition(options = {}) {
      console.info('[ExpeditionModule] Starting expedition run...', options);
      this.currentRun = {
        nodeIndex: 0,
        san: 100,
        hp: 100,
        loot: [],
        completedNodes: 0
      };

      if (window.StoneEventBus) {
        window.StoneEventBus.emit('EXPEDITION_EVENT', { type: 'RUN_STARTED', data: this.currentRun });
      }

      // 联动底层地图引擎
      if (window.ExpeditionEngine && typeof window.ExpeditionEngine.initSession === 'function') {
        window.ExpeditionEngine.initSession(options);
      }
    }

    evacuate() {
      if (!this.currentRun) return;
      console.info('[ExpeditionModule] Evacuating expedition...');
      const summary = { ...this.currentRun, status: 'evacuated' };
      this.currentRun = null;

      if (window.StoneEventBus) {
        window.StoneEventBus.emit('EXPEDITION_EVENT', { type: 'RUN_EVACUATED', data: summary });
      }
      return summary;
    }

    getActiveRun() {
      return this.currentRun;
    }
  }

  window.StoneExpedition = new ExpeditionModule();
  console.info('[ExpeditionModule] ExpeditionModule initialized.');
})();
