/**
 * Our Stone Cottages - Lexicon Module
 * 职责：词库、生词本、词频等级与词典检索管理
 */
(function() {
  'use strict';

  class LexiconModule {
    constructor() {
      this.markedWords = new Set();
      this.currentFilter = 'all';
      this.init();
    }

    init() {
      if (window.StoneStorage) {
        const saved = window.StoneStorage.getModuleData('lexicon', 'marked_words', []);
        this.markedWords = new Set(Array.isArray(saved) ? saved : []);
      }
      this.bindEvents();
    }

    bindEvents() {
      if (window.StoneEventBus) {
        window.StoneEventBus.on('WORD_MARKED', ({ word }) => {
          this.markWord(word);
        });
        window.StoneEventBus.on('WORD_UNMARKED', ({ word }) => {
          this.unmarkWord(word);
        });
      }
    }

    /**
     * 查词统一接口
     */
    lookupWord(word) {
      if (!word) return null;
      const cleanWord = word.trim().toLowerCase();
      // 优先从全局词典缓存获取
      if (window.chineseDict && window.chineseDict[cleanWord]) {
        return {
          word: cleanWord,
          definition: window.chineseDict[cleanWord],
          isMarked: this.isMarked(cleanWord)
        };
      }
      if (window.wordsData && window.wordsData[cleanWord]) {
        return {
          word: cleanWord,
          definition: window.wordsData[cleanWord],
          isMarked: this.isMarked(cleanWord)
        };
      }
      return {
        word: cleanWord,
        definition: '暂无本地完整释义',
        isMarked: this.isMarked(cleanWord)
      };
    }

    markWord(word) {
      if (!word) return;
      const clean = word.trim().toLowerCase();
      this.markedWords.add(clean);
      this._saveMarked();
    }

    unmarkWord(word) {
      if (!word) return;
      const clean = word.trim().toLowerCase();
      this.markedWords.delete(clean);
      this._saveMarked();
    }

    isMarked(word) {
      if (!word) return false;
      return this.markedWords.has(word.trim().toLowerCase());
    }

    getMarkedWordsList() {
      return Array.from(this.markedWords);
    }

    _saveMarked() {
      if (window.StoneStorage) {
        window.StoneStorage.setModuleData('lexicon', 'marked_words', Array.from(this.markedWords));
      }
    }
  }

  window.StoneLexicon = new LexiconModule();
  console.info('[LexiconModule] LexiconModule initialized.');
})();
