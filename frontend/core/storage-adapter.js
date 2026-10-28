/**
 * Our Stone Cottages - Core Storage Adapter
 * 职责：用户数据隔离与各模块独立缓存管理
 * 设计规则：
 * 1. 继承/对接底层 StoneStorage（已实现用户/Guest多租户隔离与离线降级）
 * 2. 为各独立业务模块提供严格隔离的子命名空间 (stone:mod:<moduleName>:<key>)
 * 3. 敏感数据（Token/密码）严格隔离，用户真数据只存在 VPS 后端
 */
(function() {
  'use strict';

  class ModuleStorageAdapter {
    constructor() {
      this.prefix = 'stone:mod:';
      this.memoryCache = new Map();
    }

    _getRawStorage() {
      return window.StoneStorage || window.localStorage;
    }

    _getModuleKey(moduleName, key) {
      return `${this.prefix}${moduleName}:${key}`;
    }

    /**
     * 写入模块专用缓存
     * @param {string} moduleName 模块名 (lobby, match3, cards, expedition, lexicon, seasons, beta_promo)
     * @param {string} key 键名
     * @param {any} value 值 (自动 JSON 序列化)
     */
    setModuleData(moduleName, key, value) {
      const fullKey = this._getModuleKey(moduleName, key);
      try {
        const serialized = JSON.stringify(value);
        const store = this._getRawStorage();
        if (store && typeof store.setItem === 'function') {
          store.setItem(fullKey, serialized);
        }
        this.memoryCache.set(fullKey, value);
        return true;
      } catch (err) {
        console.warn(`[ModuleStorageAdapter] Failed to save key '${fullKey}':`, err);
        this.memoryCache.set(fullKey, value);
        return false;
      }
    }

    /**
     * 获取模块专用缓存
     * @param {string} moduleName 模块名
     * @param {string} key 键名
     * @param {any} defaultValue 默认值
     */
    getModuleData(moduleName, key, defaultValue = null) {
      const fullKey = this._getModuleKey(moduleName, key);
      if (this.memoryCache.has(fullKey)) {
        return this.memoryCache.get(fullKey);
      }
      try {
        const store = this._getRawStorage();
        if (!store || typeof store.getItem !== 'function') return defaultValue;
        const raw = store.getItem(fullKey);
        if (raw === null || raw === undefined) {
          return defaultValue;
        }
        const parsed = JSON.parse(raw);
        this.memoryCache.set(fullKey, parsed);
        return parsed;
      } catch (err) {
        console.warn(`[ModuleStorageAdapter] Fallback to default for '${fullKey}':`, err);
        return defaultValue;
      }
    }

    /**
     * 清理指定模块的全部缓存
     */
    clearModuleData(moduleName) {
      const prefix = `${this.prefix}${moduleName}:`;
      try {
        const store = this._getRawStorage();
        if (store && typeof store.removeItem === 'function') {
          for (let i = 0; i < localStorage.length; i++) {
            const k = localStorage.key(i);
            if (k && k.startsWith(prefix)) {
              store.removeItem(k);
              this.memoryCache.delete(k);
            }
          }
        }
      } catch (err) {
        console.error(`[ModuleStorageAdapter] Error clearing module '${moduleName}':`, err);
      }
    }

    /**
     * 规范化访问用户档案（统一上下文，各模块共享）
     */
    getUserProfile() {
      return this.getModuleData('user', 'profile', {
        id: 'guest',
        username: 'Guest Explorer',
        coins: 100,
        san: 100,
        hp: 100,
        unlockedWords: 0,
        masteredWords: 0,
        equippedCards: []
      });
    }

    saveUserProfile(profile) {
      const ok = this.setModuleData('user', 'profile', profile);
      if (window.StoneEventBus) {
        window.StoneEventBus.emit('USER_PROFILE_UPDATED', profile);
      }
      return ok;
    }
  }

  const adapter = new ModuleStorageAdapter();
  window.StoneModuleStorage = adapter;

  // 扩展或注入到 window.StoneStorage
  if (window.StoneStorage && typeof window.StoneStorage === 'object') {
    window.StoneStorage.module = adapter;
    window.StoneStorage.setModuleData = (m, k, v) => adapter.setModuleData(m, k, v);
    window.StoneStorage.getModuleData = (m, k, d) => adapter.getModuleData(m, k, d);
    window.StoneStorage.getUserProfile = () => adapter.getUserProfile();
    window.StoneStorage.saveUserProfile = (p) => adapter.saveUserProfile(p);
  } else {
    window.StoneStorage = adapter;
  }

  console.info('[Core] Enhanced StorageAdapter initialized.');
})();
