/**
 * Our Stone Cottages - Core Event Bus
 * 职责：解耦各业务模块，提供发布/订阅事件总线。各业务模块之间不得直接调用对方内部方法。
 */
(function() {
  'use strict';

  class EventBus {
    constructor() {
      this.listeners = new Map();
    }

    /**
     * 订阅事件
     * @param {string} eventName 事件名
     * @param {Function} callback 回调函数
     * @returns {Function} 取消订阅函数
     */
    on(eventName, callback) {
      if (!this.listeners.has(eventName)) {
        this.listeners.set(eventName, new Set());
      }
      this.listeners.get(eventName).add(callback);
      return () => this.off(eventName, callback);
    }

    /**
     * 订阅一次
     */
    once(eventName, callback) {
      const wrapper = (payload) => {
        this.off(eventName, wrapper);
        callback(payload);
      };
      return this.on(eventName, wrapper);
    }

    /**
     * 取消订阅
     */
    off(eventName, callback) {
      if (this.listeners.has(eventName)) {
        this.listeners.get(eventName).delete(callback);
      }
    }

    /**
     * 派发事件
     * @param {string} eventName 事件名
     * @param {any} payload 事件负载数据
     */
    emit(eventName, payload) {
      if (this.listeners.has(eventName)) {
        this.listeners.get(eventName).forEach(callback => {
          try {
            callback(payload);
          } catch (err) {
            console.error(`[EventBus] Error in event '${eventName}':`, err);
          }
        });
      }
    }

    /**
     * 清理所有监听器
     */
    clear() {
      this.listeners.clear();
    }
  }

  // 挂载全局单例，保证向后兼容与全局通信
  window.StoneEventBus = window.StoneEventBus || new EventBus();

  // 定义标准事件常量
  window.StoneEvents = {
    NAVIGATE_VIEW: 'NAVIGATE_VIEW',                 // 视图切换
    USER_PROFILE_UPDATED: 'USER_PROFILE_UPDATED',   // 用户状态更新
    WORD_MASTERED: 'WORD_MASTERED',                 // 掌握生词
    WORD_MARKED: 'WORD_MARKED',                     // 标记生词
    MATCH3_GAME_START: 'MATCH3_GAME_START',         // 消消乐启动
    MATCH3_GAME_OVER: 'MATCH3_GAME_OVER',           // 消消乐结算
    EXPEDITION_EVENT: 'EXPEDITION_EVENT',           // 远征事件
    CARD_EQUIPPED: 'CARD_EQUIPPED',                 // 卡牌装备
    SEASON_ROTATED: 'SEASON_ROTATED',               // 四季轮换
    BETA_PROMO_TRIGGERED: 'BETA_PROMO_TRIGGERED'    // 地推事件触发
  };

  console.info('[Core] StoneEventBus initialized.');
})();
