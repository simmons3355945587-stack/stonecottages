/**
 * Our Stone Cottages - Cards Module
 * 职责：卡牌、闪卡学习、塔罗牌库与战术装备槽管理
 */
(function() {
  'use strict';

  class CardsModule {
    constructor() {
      this.skills = window.StoneTarotSkills || [];
      this.equippedCards = [];
      this.init();
    }

    init() {
      // 从隔离缓存读取当前玩家装备的卡牌
      if (window.StoneStorage) {
        this.equippedCards = window.StoneStorage.getModuleData('cards', 'equipped', []);
      }
      this.bindEvents();
    }

    bindEvents() {
      if (window.StoneEventBus) {
        window.StoneEventBus.on('EQUIP_CARD_REQUEST', (card) => {
          this.equipCard(card);
        });
        window.StoneEventBus.on('UNEQUIP_CARD_REQUEST', (index) => {
          this.unequipCard(index);
        });
      }
    }

    getSkills() {
      return window.StoneTarotSkills || this.skills;
    }

    equipCard(card) {
      if (this.equippedCards.length >= 3) {
        console.warn('[CardsModule] Card slots are full (max 3).');
        return false;
      }
      this.equippedCards.push(card);
      if (window.StoneStorage) {
        window.StoneStorage.setModuleData('cards', 'equipped', this.equippedCards);
      }
      if (window.StoneEventBus) {
        window.StoneEventBus.emit('CARD_EQUIPPED', { card, slots: this.equippedCards });
      }
      return true;
    }

    unequipCard(index) {
      if (index >= 0 && index < this.equippedCards.length) {
        const removed = this.equippedCards.splice(index, 1)[0];
        if (window.StoneStorage) {
          window.StoneStorage.setModuleData('cards', 'equipped', this.equippedCards);
        }
        if (window.StoneEventBus) {
          window.StoneEventBus.emit('CARD_UNEQUIPPED', { removed, slots: this.equippedCards });
        }
        return removed;
      }
      return null;
    }

    getEquippedCards() {
      return [...this.equippedCards];
    }
  }

  window.StoneCards = new CardsModule();
  console.info('[CardsModule] CardsModule initialized.');
})();
