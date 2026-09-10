/**
 * expedition-engine.js
 * ============================================================
 * 小石屋统一远征核心状态机与事件结算引擎 (Unified Expedition Engine)
 * 
 * 核心职责：
 * 1. 基于确定性随机种子生成 6~8 节点分支拓扑图 (Node Graph)
 * 2. 状态机单向流转 (IDLE -> MAP_VIEW -> PREVIEWING -> IN_ENCOUNTER -> RESOLVING -> DEBRIEFING)
 * 3. 题目固化与防刷新刷题机制 (Encounter Lock)
 * 4. 事件溯源驱动与幂等去重 (Event Deduplication)
 * 5. 存储分层与事务持久化 (IndexedDB + StoneStorage)
 * ============================================================
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ExpeditionEngine = factory();
  }
}(typeof self !== 'undefined' ? self : this, function() {
  'use strict';

  // ------------------------------------------------------------
  // 1. 确定性伪随机数生成器 (Mulberry32 PRNG)
  // ------------------------------------------------------------
  function createPrng(seed) {
    let s = Math.floor(Math.abs(Number(seed) || 123456789));
    if (s === 0) s = 123456789;
    return function() {
      s |= 0; s = s + 0x6D2B79F5 | 0;
      let t = Math.imul(s ^ s >>> 15, 1 | s);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  // ------------------------------------------------------------
  // 2. 存储分层适配器 (IndexedDB + 本地后备)
  // ------------------------------------------------------------
  const DB_NAME = 'stone-expedition-v1';
  const STORE_SESSION = 'active_session';
  const STORE_EVENTS = 'event_log';

  class StorageAdapter {
    constructor() {
      this.db = null;
      this.initPromise = this._initDb();
    }

    async _initDb() {
      if (typeof indexedDB === 'undefined') return null;
      return new Promise((resolve) => {
        try {
          const req = indexedDB.open(DB_NAME, 1);
          req.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(STORE_SESSION)) {
              db.createObjectStore(STORE_SESSION, { keyPath: 'key' });
            }
            if (!db.objectStoreNames.contains(STORE_EVENTS)) {
              db.createObjectStore(STORE_EVENTS, { keyPath: 'eventId' });
            }
          };
          req.onsuccess = (e) => {
            this.db = e.target.result;
            resolve(this.db);
          };
          req.onerror = () => resolve(null);
        } catch (err) {
          resolve(null);
        }
      });
    }

    async saveSession(session) {
      // 1. 本地同步快速持久化 (防崩溃)
      try {
        const jsonStr = JSON.stringify(session);
        if (typeof window !== 'undefined' && window.StoneStorage) {
          window.StoneStorage.setItem('stone_active_expedition', jsonStr);
        } else if (typeof localStorage !== 'undefined' && typeof localStorage.setItem === 'function') {
          localStorage.setItem('stone_active_expedition', jsonStr);
        }
      } catch (e) {
        if (typeof console !== 'undefined') console.warn('[ExpeditionStorage] Local fallback save failed:', e);
      }

      // 2. IndexedDB 原子持久化
      const db = await this.initPromise;
      if (!db) return;
      return new Promise((resolve) => {
        try {
          const tx = db.transaction([STORE_SESSION], 'readwrite');
          tx.objectStore(STORE_SESSION).put({ key: 'current', session, updatedAt: Date.now() });
          tx.oncomplete = () => resolve(true);
          tx.onerror = () => resolve(false);
        } catch (err) {
          resolve(false);
        }
      });
    }

    async loadSession() {
      // 优先从 IndexedDB 读取
      const db = await this.initPromise;
      if (db) {
        try {
          const result = await new Promise((resolve) => {
            const tx = db.transaction([STORE_SESSION], 'readonly');
            const req = tx.objectStore(STORE_SESSION).get('current');
            req.onsuccess = () => resolve(req.result ? req.result.session : null);
            req.onerror = () => resolve(null);
          });
          if (result) return result;
        } catch (err) {
          if (typeof console !== 'undefined') console.warn('[ExpeditionStorage] IndexedDB read failed, trying local fallback');
        }
      }

      // 后备从 Storage 读取
      try {
        let raw = null;
        if (typeof window !== 'undefined' && window.StoneStorage) {
          raw = window.StoneStorage.getItem('stone_active_expedition');
        } else if (typeof localStorage !== 'undefined' && typeof localStorage.getItem === 'function') {
          raw = localStorage.getItem('stone_active_expedition');
        }
        if (raw) return JSON.parse(raw);
      } catch (e) {
        if (typeof console !== 'undefined') console.warn('[ExpeditionStorage] Local fallback load failed:', e);
      }
      return null;
    }

    async clearSession() {
      try {
        if (typeof window !== 'undefined' && window.StoneStorage) {
          window.StoneStorage.removeItem('stone_active_expedition');
        } else if (typeof localStorage !== 'undefined' && typeof localStorage.removeItem === 'function') {
          localStorage.removeItem('stone_active_expedition');
        }
      } catch (e) {}

      const db = await this.initPromise;
      if (!db) return;
      return new Promise((resolve) => {
        try {
          const tx = db.transaction([STORE_SESSION], 'readwrite');
          tx.objectStore(STORE_SESSION).delete('current');
          tx.oncomplete = () => resolve(true);
          tx.onerror = () => resolve(false);
        } catch (err) {
          resolve(false);
        }
      });
    }
  }

  const storage = new StorageAdapter();

  // ------------------------------------------------------------
  // 3. 远征分支拓扑图生成器 (6~8 节点固定模板)
  // ------------------------------------------------------------
  function generateExpeditionGraph(seed) {
    const rng = createPrng(seed);

    const mistSanCost = 10;
    const towerSanCost = 15;
    const bonusGoldBranch = rng() > 0.5 ? 15 : 20;

    const nodes = [
      {
        id: 1,
        step: 1,
        type: 'normal',
        name: '林缘哨所',
        icon: '🌲',
        sanCost: 0,
        rewardGold: 20,
        rewardXp: 30,
        pollutionType: 'none',
        desc: '踏出石屋的第一处荒原哨卡。微风穿林，常规词义与初级语境判断，0 SAN 损耗。',
        status: 'available', // available | cleared | locked
        nextNodes: [2, 3],
        coords: { x: 12, y: 50 }
      },
      {
        id: 2,
        step: 2,
        type: 'polluted',
        name: '迷雾溪谷',
        icon: '🌫️',
        sanCost: mistSanCost,
        rewardGold: 35 + bonusGoldBranch,
        rewardXp: 50,
        pollutionType: 'synonym_confusion',
        desc: `溪谷低语蔓延。消耗 ${mistSanCost} SAN，注入近义词干扰项，成功突围可获额外高额流通金币！`,
        status: 'locked',
        nextNodes: [4],
        coords: { x: 30, y: 25 }
      },
      {
        id: 3,
        step: 2,
        type: 'listening',
        name: '风语哨站',
        icon: '🎧',
        sanCost: 0,
        rewardGold: 30,
        rewardXp: 40,
        pollutionType: 'none',
        isListening: true,
        desc: '荒原风声呼啸的窃听哨站。戴上耳机辨听原声单词发音与语境，挑战听力答对可斩获高额赏金！',
        status: 'locked',
        nextNodes: [4],
        coords: { x: 30, y: 75 }
      },
      {
        id: 4,
        step: 3,
        type: 'camp',
        name: '废弃营火',
        icon: '⛺',
        sanCost: 0,
        rewardGold: 10,
        rewardXp: 25,
        pollutionType: 'none',
        desc: '背风岩壁下的营火避难所。可驻足休整调息，错词回忆自愈灰血，温火抚慰心神恢复 +15 SAN。',
        status: 'locked',
        nextNodes: [5, 6],
        coords: { x: 50, y: 50 }
      },
      {
        id: 5,
        step: 4,
        type: 'event',
        name: '破败石塔',
        icon: '🏛️',
        sanCost: 0,
        rewardGold: 45,
        rewardXp: 60,
        pollutionType: 'time_pressure',
        desc: '断壁残垣散发诡异微光。古老异象浮现：可献祭理智唤醒塔罗神能，或搜寻炼金秘药自愈灰血，亦可静默绕行。',
        status: 'locked',
        nextNodes: [7],
        coords: { x: 70, y: 25 }
      },
      {
        id: 6,
        step: 4,
        type: 'outpost',
        name: '远征前哨',
        icon: '🛡️',
        sanCost: 0,
        rewardGold: 30,
        rewardXp: 40,
        pollutionType: 'none',
        canEvacuate: true,
        desc: '前线安全哨所。提供补给整备，并可在此选择【见好就收安全撤退】全额带回战利品。',
        status: 'locked',
        nextNodes: [7],
        coords: { x: 70, y: 75 }
      },
      {
        id: 7,
        step: 5,
        type: 'gatekeeper',
        name: '荒原领主',
        icon: '👑',
        sanCost: 0,
        rewardGold: 70,
        rewardXp: 120,
        pollutionType: 'comprehensive',
        desc: '最后的封锁防线！对本轮接触的高频核心考点进行综合长句辨析，突破斩获远征大捷奖赏！',
        status: 'locked',
        nextNodes: [],
        coords: { x: 90, y: 50 }
      }
    ];

    return nodes;
  }

  // ------------------------------------------------------------
  // 4. 统一远征状态机引擎 (ExpeditionEngine)
  // ------------------------------------------------------------
  let currentSession = null;

  const ExpeditionEngine = {
    STATES: {
      IDLE: 'IDLE',
      MAP_VIEW: 'MAP_VIEW',
      PREVIEWING: 'PREVIEWING',
      IN_ENCOUNTER: 'IN_ENCOUNTER',
      AT_CAMP: 'AT_CAMP',
      RESOLVING: 'RESOLVING',
      DEBRIEFING: 'DEBRIEFING'
    },

    async init() {
      const saved = await storage.loadSession();
      if (saved && saved.status === 'in_progress') {
        currentSession = saved;
        return { restored: true, session: currentSession };
      }
      return { restored: false, session: null };
    },

    getSession() {
      return currentSession;
    },

    async startExpedition(playerProfile, customSeed = null, options = {}) {
      if (!playerProfile) throw new Error('playerProfile is required');

      const seed = customSeed || Date.now();
      const nodes = generateExpeditionGraph(seed);
      const opts = (options && typeof options === 'object') ? options : {};

      currentSession = {
        sessionId: `exp_${seed}`,
        seed: seed,
        state: this.STATES.MAP_VIEW,
        status: 'in_progress',
        startTime: Date.now(),
        currentNodeId: null,
        clearedNodeIds: [],
        nodes: nodes,
        config: {
          wordSource: opts.wordSource || 'core',
          markedOnly: !!opts.markedOnly
        },
        
        hp: playerProfile.hp !== undefined ? playerProfile.hp : 100,
        grayHp: playerProfile.grayHp || 0,
        san: playerProfile.san !== undefined ? playerProfile.san : 100,
        goldEarned: 0,
        xpEarned: 0,
        healedGrayHp: 0,
        battleHand: (Array.isArray(playerProfile.battleHand) && playerProfile.battleHand.length > 0)
          ? [...playerProfile.battleHand]
          : ['The Magician', 'The Hermit', 'Death'],

        routeTrail: [],
        sanLog: [],
        recentErrors: [],
        completedRecalls: [],

        activeEncounter: null,
        processedEvents: []
      };

      await storage.saveSession(currentSession);
      return currentSession;
    },

    previewNode(nodeId) {
      if (!currentSession) throw new Error('No active expedition');
      const node = currentSession.nodes.find(n => n.id === nodeId);
      if (!node) throw new Error(`Node ${nodeId} not found`);
      if (node.status === 'locked') {
        return { canEnter: false, reason: 'locked', node };
      }

      currentSession.state = this.STATES.PREVIEWING;
      return { canEnter: true, node };
    },

    async enterNode(nodeId, candidateQuestions = []) {
      if (!currentSession) throw new Error('No active expedition');
      const node = currentSession.nodes.find(n => n.id === nodeId);
      if (!node || node.status === 'locked') {
        throw new Error('Cannot enter a locked or non-existent node');
      }

      // 若已有未结算题目，严格恢复同一道题和选项顺序 (防刷新作弊)
      if (currentSession.activeEncounter && currentSession.activeEncounter.nodeId === nodeId && !currentSession.activeEncounter.resolved) {
        currentSession.currentNodeId = nodeId;
        currentSession.state = node.type === 'camp' ? this.STATES.AT_CAMP : this.STATES.IN_ENCOUNTER;
        await storage.saveSession(currentSession);
        return { resumed: true, encounter: currentSession.activeEncounter, node };
      }

      if (node.sanCost > 0) {
        this._applySanChange(-node.sanCost, `踏入【${node.name}】`);
      }

      currentSession.currentNodeId = nodeId;

      if (node.type === 'camp') {
        currentSession.state = this.STATES.AT_CAMP;
        currentSession.activeEncounter = null;
        await storage.saveSession(currentSession);
        return { resumed: false, encounter: null, node };
      }

      if (node.type === 'event') {
        currentSession.state = this.STATES.IN_ENCOUNTER;
        currentSession.activeEncounter = {
          nodeId: nodeId,
          type: 'event',
          eventId: `event_${nodeId}`,
          title: '破败石塔 · 古老异象抉择',
          story: '断壁残垣间回荡着远古的低语，中央石台上悬浮着一枚闪烁幽光的塔罗星核，台脚散落着古代探险者留下的炼金药剂瓶。狂风在石缝中呼啸，你的选择将直接改写后续生存命运。',
          story_cn: '你踏入古塔深处，面对未知的诱惑与生还的权衡，请慎重作出抉择。',
          choices: [
            {
              id: 'relic_sacrifice',
              title: '🔥 汲取古塔残响',
              sanCost: 15,
              gainGold: 45,
              gainTarot: 'The Star',
              desc: '献祭 15 点 SAN 强行共鸣星核：斩获 +45 Gold 并直接觉醒战术神牌【The Star (希望闪耀)】！'
            },
            {
              id: 'search_remedy',
              title: '🧪 搜寻药剂遗骸',
              sanCost: 0,
              gainHp: 15,
              desc: '清理台脚搜寻古代凝胶：自愈当前全部灰血结痂，并额外恢复 +15 点生命 HP。'
            },
            {
              id: 'bypass',
              title: '🚶 静默绕行避险',
              sanCost: 0,
              desc: '保持绝对克制与戒备，不触碰任何未知异象，0 损耗直接安全穿行。'
            }
          ],
          pollutionType: node.pollutionType || 'none',
          resolved: false
        };
        await storage.saveSession(currentSession);
        return { resumed: false, encounter: currentSession.activeEncounter, node };
      }

      const encounterRng = createPrng(currentSession.seed + nodeId * 7919);
      let questionData = null;
      if (candidateQuestions && candidateQuestions.length > 0) {
        const qIdx = Math.floor(encounterRng() * candidateQuestions.length);
        questionData = candidateQuestions[qIdx];
      } else {
        questionData = {
          word: 'contingency',
          phonetic: '/kənˈtɪndʒənsi/',
          translation: '突发事件；紧急预案',
          story: 'The executive drafted a secret contingency protocol before signing the acquisition.',
          story_cn: '该高管在签署收购案前，拟定了一份绝密的应急预案。',
          options: ['突发事件；预案', '虚假繁荣', '毫无根据的猜测', '持续的争执'],
          correctIndex: 0
        };
      }

      const shuffledOptions = questionData.options.map((text, idx) => ({ text, isCorrect: idx === (questionData.correctIndex || 0) }));
      for (let i = shuffledOptions.length - 1; i > 0; i--) {
        const j = Math.floor(encounterRng() * (i + 1));
        const temp = shuffledOptions[i];
        shuffledOptions[i] = shuffledOptions[j];
        shuffledOptions[j] = temp;
      }
      const newCorrectIndex = shuffledOptions.findIndex(o => o.isCorrect);

      currentSession.activeEncounter = {
        nodeId: nodeId,
        word: questionData.word || 'contingency',
        phonetic: questionData.phonetic || '',
        translation: questionData.translation || '',
        story: questionData.story || '',
        story_cn: questionData.story_cn || '',
        options: shuffledOptions.map(o => o.text),
        correctIndex: newCorrectIndex,
        pollutionType: node.pollutionType || 'none',
        challengeType: questionData.challengeType || 'standard',
        challengeTier: questionData.challengeTier || 'clear',
        distractorMeta: questionData.distractorMeta || null,
        metaNotes: questionData.metaNotes || '',
        promptType: questionData.promptType || 'word_to_zh',
        clozeSentence: questionData.clozeSentence || null,
        clozeTranslation: questionData.clozeTranslation || null,
        type: node.type || 'normal',
        isListening: node.type === 'listening',
        eliminatedIndices: [],
        hintText: null,
        resolved: false
      };

      currentSession.state = this.STATES.IN_ENCOUNTER;
      await storage.saveSession(currentSession);

      return { resumed: false, encounter: currentSession.activeEncounter, node };
    },

    async submitAnswer(selectedIndex, usedHint = false) {
      if (!currentSession || !currentSession.activeEncounter) {
        throw new Error('No active encounter to submit');
      }
      const encounter = currentSession.activeEncounter;
      if (encounter.resolved) {
        throw new Error('This encounter has already been resolved');
      }

      const eventId = `evt_${currentSession.currentNodeId}_${Date.now()}`;
      if (currentSession.processedEvents.includes(eventId)) {
        return { duplicate: true };
      }

      const node = currentSession.nodes.find(n => n.id === currentSession.currentNodeId);
      const isCorrect = selectedIndex === encounter.correctIndex;
      encounter.resolved = true;
      currentSession.processedEvents.push(eventId);

      let deltaHp = 0;
      let deltaGrayHp = 0;
      let gainedGold = 0;
      let gainedXp = 0;

      if (isCorrect) {
        gainedGold = node.rewardGold || 20;
        gainedXp = node.rewardXp || 30;
        currentSession.goldEarned += gainedGold;
        currentSession.xpEarned += gainedXp;

        if (currentSession.grayHp > 0) {
          const healAmount = Math.min(2, currentSession.grayHp);
          currentSession.hp = Math.min(100, currentSession.hp + healAmount);
          currentSession.grayHp -= healAmount;
          currentSession.healedGrayHp += healAmount;
          deltaHp += healAmount;
          deltaGrayHp -= healAmount;
        }
      } else {
        const damage = 8;
        const grayGenerated = 4;
        currentSession.hp = Math.max(0, currentSession.hp - damage);
        currentSession.grayHp += grayGenerated;
        deltaHp = -damage;
        deltaGrayHp = grayGenerated;

        currentSession.recentErrors.push({
          word: encounter.word,
          translation: encounter.translation,
          nodeId: currentSession.currentNodeId
        });
      }

      let defeated = false;
      let deathSaved = false;
      if (currentSession.hp <= 0 || currentSession.san <= 0) {
        if (currentSession.hasReviveBuff || currentSession.battleHand.includes('Death') || currentSession.battleHand.includes('The Death')) {
          deathSaved = true;
          currentSession.hp = 30;
          currentSession.grayHp = 0;
          currentSession.hasReviveBuff = false;
          const deathIdx = currentSession.battleHand.findIndex(c => c === 'Death' || c === 'The Death');
          if (deathIdx !== -1) currentSession.battleHand.splice(deathIdx, 1);
          this._applySanChange(-10, '死神牌绝境涅槃');
        } else {
          defeated = true;
          currentSession.status = 'defeated';
        }
      }

      if (!defeated) {
        node.status = 'cleared';
        currentSession.clearedNodeIds.push(node.id);
        currentSession.routeTrail.push({
          id: node.id,
          name: node.name,
          icon: node.icon,
          sanCost: node.sanCost,
          goldBonus: gainedGold
        });

        (node.nextNodes || []).forEach(nextId => {
          const target = currentSession.nodes.find(n => n.id === nextId);
          if (target && target.status === 'locked') {
            target.status = 'available';
          }
        });

        const isFinalGatekeeper = node.type === 'gatekeeper' || (node.nextNodes && node.nextNodes.length === 0);
        if (isFinalGatekeeper && isCorrect) {
          currentSession.status = 'completed';
          currentSession.state = this.STATES.DEBRIEFING;
        }
      }

      currentSession.state = (defeated || currentSession.status === 'completed') ? this.STATES.DEBRIEFING : this.STATES.RESOLVING;
      await storage.saveSession(currentSession);

      return {
        isCorrect,
        deltaHp,
        deltaGrayHp,
        gainedGold,
        gainedXp,
        currentHp: currentSession.hp,
        currentGrayHp: currentSession.grayHp,
        currentSan: currentSession.san,
        deathSaved,
        defeated,
        isGrandTriumph: node.type === 'gatekeeper' && isCorrect,
        encounter
      };
    },

    async resolveAnomalyChoice(choiceId) {
      if (!currentSession || !currentSession.activeEncounter) {
        throw new Error('No active anomaly encounter to resolve');
      }
      const encounter = currentSession.activeEncounter;
      if (encounter.type !== 'event' || encounter.resolved) {
        throw new Error('Invalid or already resolved anomaly event');
      }

      const node = currentSession.nodes.find(n => n.id === currentSession.currentNodeId);
      encounter.resolved = true;
      const eventId = `evt_event_${currentSession.currentNodeId}_${choiceId}_${Date.now()}`;
      currentSession.processedEvents.push(eventId);

      let sanDelta = 0;
      let gainedGold = 0;
      let healedGrayHp = 0;
      let healedHp = 0;
      let gainedTarot = null;
      let message = '';

      if (choiceId === 'relic_sacrifice') {
        this._applySanChange(-15, '汲取破败石塔残响');
        currentSession.goldEarned += 45;
        sanDelta = -15;
        gainedGold = 45;

        const candidateCards = ['The Star', 'Justice', 'Temperance'];
        const cardToAdd = candidateCards.find(c => !currentSession.battleHand.includes(c)) || 'The Star';
        if (!currentSession.battleHand.includes(cardToAdd)) {
          currentSession.battleHand.push(cardToAdd);
          gainedTarot = cardToAdd;
        }
        message = `🔥 献祭 15 SAN 成功唤醒星核！斩获 +45 Gold，觉醒神技【${gainedTarot || '塔罗共鸣'}】！`;
      } else if (choiceId === 'search_remedy') {
        healedGrayHp = currentSession.grayHp;
        currentSession.healedGrayHp += healedGrayHp;
        currentSession.grayHp = 0;
        const prevHp = currentSession.hp;
        currentSession.hp = Math.min(100, currentSession.hp + healedGrayHp + 15);
        healedHp = currentSession.hp - prevHp;
        message = `🧪 发现古代炼金凝胶！自愈 ${healedGrayHp} 灰血，额外愈合 +${healedHp} HP！`;
      } else {
        // bypass
        message = '🚶 你保持克制与机警，静默绕过了石塔异象，未受丝毫侵蚀。';
      }

      node.status = 'cleared';
      currentSession.clearedNodeIds.push(node.id);
      currentSession.routeTrail.push({
        id: node.id,
        name: node.name,
        icon: node.icon,
        sanCost: Math.abs(sanDelta),
        goldBonus: gainedGold
      });

      (node.nextNodes || []).forEach(nextId => {
        const target = currentSession.nodes.find(n => n.id === nextId);
        if (target && target.status === 'locked') {
          target.status = 'available';
        }
      });

      currentSession.state = this.STATES.RESOLVING;
      await storage.saveSession(currentSession);

      return {
        choiceId,
        sanDelta,
        gainedGold,
        healedGrayHp,
        healedHp,
        gainedTarot,
        message,
        currentHp: currentSession.hp,
        currentGrayHp: currentSession.grayHp,
        currentSan: currentSession.san,
        battleHand: [...currentSession.battleHand],
        encounter
      };
    },

    async campRest(deepRecall = false) {
      if (!currentSession || currentSession.state !== this.STATES.AT_CAMP) {
        throw new Error('Not at camp');
      }
      const node = currentSession.nodes.find(n => n.id === currentSession.currentNodeId);

      const healedHp = currentSession.grayHp;
      currentSession.hp = Math.min(100, currentSession.hp + healedHp);
      currentSession.healedGrayHp += healedHp;
      currentSession.grayHp = 0;

      const sanRecovered = deepRecall ? 25 : 15;
      const reason = deepRecall ? '营火围炉温故深度调息' : '营火温暖休整';
      this._applySanChange(sanRecovered, reason);

      if (deepRecall && currentSession.recentErrors.length > 0) {
        currentSession.completedRecalls.push(...currentSession.recentErrors);
        currentSession.recentErrors = [];
      }

      node.status = 'cleared';
      currentSession.clearedNodeIds.push(node.id);
      currentSession.routeTrail.push({
        id: node.id,
        name: node.name,
        icon: node.icon,
        sanCost: 0,
        goldBonus: 0
      });

      (node.nextNodes || []).forEach(nextId => {
        const target = currentSession.nodes.find(n => n.id === nextId);
        if (target && target.status === 'locked') {
          target.status = 'available';
        }
      });

      currentSession.state = this.STATES.MAP_VIEW;
      await storage.saveSession(currentSession);

      return {
        healedHp,
        sanRecovered,
        deepRecall,
        currentHp: currentSession.hp,
        currentSan: currentSession.san
      };
    },

    async castTacticalTarot(cardName) {
      if (!currentSession) throw new Error('No active expedition');
      if (!currentSession.battleHand.includes(cardName)) {
        return { success: false, reason: 'not_in_hand' };
      }

      let effect = '';
      let action = 'buff';
      let eliminatedIndices = [];
      let hintText = '';

      if (['The Magician', 'The Chariot', 'The Tower', 'The Fool'].includes(cardName)) {
        if (currentSession.activeEncounter && !currentSession.activeEncounter.resolved) {
          const enc = currentSession.activeEncounter;
          if (!enc.eliminatedIndices) enc.eliminatedIndices = [];
          const wrongIndices = [0, 1, 2, 3].filter(idx => idx !== enc.correctIndex && !enc.eliminatedIndices.includes(idx));
          eliminatedIndices = wrongIndices.slice(0, 2);
          enc.eliminatedIndices.push(...eliminatedIndices);
        }
        action = 'eliminate_wrong';
        effect = '真理破阵！已排除 2 个致命干扰选项';
      } else if (cardName === 'The Hermit') {
        if (currentSession.activeEncounter) {
          hintText = `【求索线索】该考点释义关联“${currentSession.activeEncounter.translation || '语境核心'}”，注意段落前后语意关联！`;
          currentSession.activeEncounter.hintText = hintText;
        }
        action = 'hint';
        effect = '求索之光照耀，考点释义与逻辑线索已浮现';
      } else if (cardName === 'Justice') {
        this._applySanChange(20, '正义天平抚慰');
        action = 'heal_san';
        effect = '理智抚慰 +20 SAN';
      } else if (cardName === 'Temperance' || cardName === 'The High Priestess') {
        this._applySanChange(25, '心智抚慰');
        currentSession.hp = Math.min(100, currentSession.hp + 20);
        currentSession.temperanceBuff = true;
        action = 'heal_dual';
        effect = '心智抚慰 +25 SAN，自愈 +20 HP！';
      } else if (cardName === 'The Empress') {
        currentSession.hp = Math.min(100, currentSession.hp + 30);
        action = 'heal_hp';
        effect = '生命滋养，立即恢复 +30 HP！';
      } else if (cardName === 'Death' || cardName === 'The Death') {
        currentSession.hasReviveBuff = true;
        action = 'revive_buff';
        effect = '绝境涅槃！已赋予致命伤免死金牌！';
      } else if (cardName === 'The Star') {
        this._applySanChange(15, '希望之星');
        currentSession.starBuff = true;
        action = 'star_buff';
        effect = '希望闪耀，+15 SAN 并冻结迷雾倒计时压迫！';
      } else if (cardName === 'The Devil') {
        this._applySanChange(-15, '恶魔暗夜献祭');
        currentSession.devilBuff = true;
        action = 'devil_buff';
        effect = '献祭 15 SAN，本节点金币翻倍';
      } else {
        this._applySanChange(15, '塔罗神能祝福');
        action = 'buff';
        effect = `激活【${cardName}】神秘加护，获得微光祝福！`;
      }

      // 消耗手牌
      const cardIdx = currentSession.battleHand.indexOf(cardName);
      if (cardIdx !== -1) {
        currentSession.battleHand.splice(cardIdx, 1);
      }
      if (!currentSession.usedCards) currentSession.usedCards = [];
      currentSession.usedCards.push(cardName);

      await storage.saveSession(currentSession);
      return {
        success: true,
        cardName,
        effect,
        action,
        eliminatedIndices,
        hintText,
        currentSan: currentSession.san,
        currentHp: currentSession.hp,
        battleHand: [...currentSession.battleHand]
      };
    },

    _applySanChange(delta, reason) {
      const prevSan = currentSession.san;
      const newSan = Math.max(0, Math.min(100, prevSan + delta));
      currentSession.san = newSan;
      currentSession.sanLog.push({
        beat: currentSession.currentNodeId || 1,
        reason: reason,
        delta: delta,
        san: newSan,
        timestamp: Date.now()
      });
    },

    async evacuate() {
      if (!currentSession) throw new Error('No active expedition');
      currentSession.status = 'evacuated';
      currentSession.state = this.STATES.DEBRIEFING;
      return await this.conclude('evacuated');
    },

    async conclude(outcomeType = 'completed') {
      if (!currentSession) throw new Error('No active expedition');

      const isVictory = outcomeType === 'completed';
      const isEvac = outcomeType === 'evacuated';
      const isDefeated = outcomeType === 'defeated';

      if (isVictory) {
        currentSession.goldEarned += 50;
        currentSession.xpEarned += 100;
      } else if (isDefeated) {
        // 荒原绝境迷失惩罚：损失 50% 携带金币，但经验与掌握词汇 100% 保留
        currentSession.goldEarned = Math.floor(currentSession.goldEarned * 0.5);
      }

      const summary = {
        sessionId: currentSession.sessionId,
        outcomeType: outcomeType,
        beatsCleared: currentSession.clearedNodeIds.length,
        totalBeats: currentSession.nodes.length,
        finalGold: currentSession.goldEarned,
        finalXp: currentSession.xpEarned,
        healedGrayHp: currentSession.healedGrayHp,
        finalHp: currentSession.hp,
        finalSan: currentSession.san,
        config: currentSession.config || { wordSource: 'core', markedOnly: false },
        routeHistory: [...currentSession.routeTrail],
        sanLog: [...currentSession.sanLog],
        recentErrors: [...currentSession.recentErrors],
        message: isVictory ? '远征大捷！成功突围荒原全线！' : (isEvac ? '见好就收！战利品全数携带归来。' : '荒原绝境迷失，搜救犬已平安护送回石屋。')
      };

      // 写入石屋永久出征手记与统计档案
      let history = [];
      let chroniclesStats = { totalRuns: 0, victories: 0, evacuations: 0, collapses: 0, totalGoldEarned: 0 };
      try {
        const histRaw = (typeof StoneStorage !== 'undefined' ? StoneStorage.getItem('stone_expedition_history') : null) || (typeof localStorage !== 'undefined' ? localStorage.getItem('stone_expedition_history') : null);
        if (histRaw) history = JSON.parse(histRaw);
        const statsRaw = (typeof StoneStorage !== 'undefined' ? StoneStorage.getItem('stone_expedition_stats') : null) || (typeof localStorage !== 'undefined' ? localStorage.getItem('stone_expedition_stats') : null);
        if (statsRaw) chroniclesStats = JSON.parse(statsRaw);
      } catch (e) {}

      chroniclesStats.totalRuns = (chroniclesStats.totalRuns || 0) + 1;
      if (isVictory) chroniclesStats.victories = (chroniclesStats.victories || 0) + 1;
      else if (isEvac) chroniclesStats.evacuations = (chroniclesStats.evacuations || 0) + 1;
      else if (isDefeated) chroniclesStats.collapses = (chroniclesStats.collapses || 0) + 1;
      chroniclesStats.totalGoldEarned = (chroniclesStats.totalGoldEarned || 0) + currentSession.goldEarned;

      const historyEntry = {
        sessionId: currentSession.sessionId,
        date: new Date().toISOString(),
        outcomeType: outcomeType,
        beatsCleared: currentSession.clearedNodeIds.length,
        totalBeats: currentSession.nodes.length,
        goldEarned: currentSession.goldEarned,
        xpEarned: currentSession.xpEarned,
        config: currentSession.config || { wordSource: 'core', markedOnly: false },
        recentErrors: [...currentSession.recentErrors],
        summaryMsg: isVictory ? '领主击溃 · 远征全线大捷' : (isEvac ? '战术撤退 · 满载平安归来' : '风雪迷失 · 搜救平安复苏')
      };
      history.unshift(historyEntry);
      if (history.length > 20) history = history.slice(0, 20);

      try {
        const saveHistStr = JSON.stringify(history);
        const saveStatsStr = JSON.stringify(chroniclesStats);
        if (typeof StoneStorage !== 'undefined') {
          StoneStorage.setItem('stone_expedition_history', saveHistStr);
          StoneStorage.setItem('stone_expedition_stats', saveStatsStr);
        }
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('stone_expedition_history', saveHistStr);
          localStorage.setItem('stone_expedition_stats', saveStatsStr);
        }
      } catch (e) {}

      await storage.clearSession();
      currentSession = null;

      return summary;
    },

    /**
     * 读取石屋书桌出征手记与统计档案
     */
    getChronicles() {
      let history = [];
      let stats = { totalRuns: 0, victories: 0, evacuations: 0, collapses: 0, totalGoldEarned: 0 };
      try {
        const histRaw = (typeof StoneStorage !== 'undefined' ? StoneStorage.getItem('stone_expedition_history') : null) || (typeof localStorage !== 'undefined' ? localStorage.getItem('stone_expedition_history') : null);
        if (histRaw) history = JSON.parse(histRaw);
        const statsRaw = (typeof StoneStorage !== 'undefined' ? StoneStorage.getItem('stone_expedition_stats') : null) || (typeof localStorage !== 'undefined' ? localStorage.getItem('stone_expedition_stats') : null);
        if (statsRaw) stats = JSON.parse(statsRaw);
      } catch (e) {}
      return { stats, history };
    }
  };

  return ExpeditionEngine;
}));
