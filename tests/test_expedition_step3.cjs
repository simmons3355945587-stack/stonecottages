/**
 * test_expedition_step3.cjs
 * ============================================================
 * 统一远征系统第三阶段自动化测试套件 (Step 3 Test Suite)
 * 验证目标：
 * 1. 守关领主 (Node 7) 击破全线大捷状态流转与赏金加成
 * 2. 小石屋出征祭坛与浮动栏断点续战 (Breakpoint Resume) UI 响应
 * 3. 导航与模式汇聚 (switchNavView 'survival' 自动切入远征地图或出征整备)
 * 4. 炉边复盘 ➔ 安全研习深度桥接 (0 HP / 0 SAN 考词巩固)
 * 5. 祭坛战术结算返程 (Abandon & Evacuate) 原子落库
 * ============================================================
 */

const assert = require('assert');
const path = require('path');

// 模拟浏览器 DOM 与全局环境
const mockLocalStorage = {};
global.localStorage = {
  getItem: (k) => mockLocalStorage[k] || null,
  setItem: (k, v) => { mockLocalStorage[k] = String(v); },
  removeItem: (k) => { delete mockLocalStorage[k]; },
  clear: () => { Object.keys(mockLocalStorage).forEach(k => delete mockLocalStorage[k]); }
};

class MockElement {
  constructor(id = '', className = '') {
    this.id = id;
    this.className = className;
    this.classList = {
      _classes: new Set(className.split(' ').filter(Boolean)),
      add: (...c) => c.forEach(x => this.classList._classes.add(x)),
      remove: (...c) => c.forEach(x => this.classList._classes.delete(x)),
      contains: (x) => this.classList._classes.has(x),
      toggle: (x, force) => {
        if (force !== undefined) {
          if (force) this.classList._classes.add(x);
          else this.classList._classes.delete(x);
        } else {
          if (this.classList._classes.has(x)) this.classList._classes.delete(x);
          else this.classList._classes.add(x);
        }
      }
    };
    this.children = [];
    this.style = {};
    this.textContent = '';
    this.innerHTML = '';
    this.value = '';
  }

  querySelector(selector) {
    if (selector.includes('.hotspot-caption')) return this.captionEl;
    if (selector.includes('.pill-icon')) return this.pillIconEl;
    if (selector.includes('.pill-text')) return this.pillTextEl;
    if (selector.includes('button')) return this.buttonEl;
    return null;
  }
}

const mockDocElements = {};
const mockQuerySelectors = {};

global.document = {
  readyState: 'complete',
  getElementById: (id) => {
    if (!mockDocElements[id]) {
      mockDocElements[id] = new MockElement(id);
    }
    return mockDocElements[id];
  },
  querySelector: (sel) => {
    return mockQuerySelectors[sel] || null;
  },
  querySelectorAll: (sel) => {
    if (sel === '.view-section') {
      return Object.keys(mockDocElements).filter(k => k.startsWith('view')).map(k => mockDocElements[k]);
    }
    if (sel === '.nav-item') return [];
    if (sel === '.encounter-opt-btn') return [];
    return [];
  },
  createElement: (tag) => new MockElement('', tag),
  body: new MockElement('body'),
  documentElement: new MockElement('html')
};

global.window = global;
global.showToast = () => {};
global.soundClick = () => {};
global.soundSuccess = () => {};
global.soundFailure = () => {};
global.soundSpell = () => {};
global.soundError = () => {};
global.escapeHtml = (s) => String(s || '');

const ExpeditionEngine = require('../frontend/expedition-engine.js');
const CottageModule = require('../frontend/cottage.js');

async function runStep3Tests() {
  console.log('================================================================');
  console.log('🗺️ 统一远征模式第三阶段全场景自动化单测套件 (Step 3 Suite)');
  console.log('================================================================\n');

  let profile = {
    hp: 100,
    grayHp: 0,
    san: 100,
    gold: 150,
    xp: 200,
    battleHand: ['The Hermit', 'Temperance', 'The Devil']
  };
  global.playerProfile = profile;
  global.ExpeditionEngine = ExpeditionEngine;

  // -------------------------------------------------------------
  // 测试 1: 小石屋祭坛与浮动栏断点续战 (Breakpoint Resume) UI 响应
  // -------------------------------------------------------------
  console.log('【测试 1/5】小石屋断点续玩状态呈现与热点标记随动测试:');
  {
    // 初始化 DOM 结构模拟
    const altarSpot = new MockElement('altarSpot', 'hotspot expedition-spot');
    altarSpot.captionEl = new MockElement('', 'hotspot-caption');
    altarSpot.captionEl.textContent = '出征祭坛';
    mockQuerySelectors['.hotspot.expedition-spot'] = altarSpot;

    const floatPill = new MockElement('floatPill', 'cottage-float-pill');
    floatPill.pillIconEl = new MockElement('', 'pill-icon');
    floatPill.pillTextEl = new MockElement('', 'pill-text');
    floatPill.pillIconEl.textContent = '⚔️';
    floatPill.pillTextEl.textContent = '出征';
    mockQuerySelectors['.cottage-floating-nav button[onclick*="openExpeditionPrepModal"]'] = floatPill;

    const heroCard = new MockElement('expeditionHeroCard');
    heroCard.buttonEl = new MockElement('heroBtn');
    mockDocElements['expeditionHeroCard'] = heroCard;

    // 开启一轮远征并推进 1 节点
    await ExpeditionEngine.startExpedition(profile, 9999);
    await ExpeditionEngine.enterNode(1);
    const enc = ExpeditionEngine.getSession().activeEncounter;
    await ExpeditionEngine.submitAnswer(enc.correctIndex);

    // 触发 UI 刷新
    CottageModule.updateCottageExpeditionUI();

    assert.strictEqual(altarSpot.classList.contains('expedition-in-progress'), true, '祭坛应添加 expedition-in-progress 动效类');
    assert.strictEqual(altarSpot.captionEl.textContent.includes('续战 (第 2 节点)'), true, '祭坛说明应准确提示续战第 2 节点');
    assert.strictEqual(floatPill.pillIconEl.textContent, '🚪', '浮动栏图标应变为续战门扉');
    assert.strictEqual(floatPill.pillTextEl.textContent.includes('续战 (2/7)'), true, '浮动栏文本应提示续战 2/7');

    console.log('  ✅ PASS: 石屋出征祭坛与场景浮动栏断点续战徽章 100% 同步');
  }

  // -------------------------------------------------------------
  // 测试 2: 导航与模式汇聚 (switchNavView 'survival' 统一路由)
  // -------------------------------------------------------------
  console.log('\n【测试 2/5】统一导航汇聚与远征现场恢复测试:');
  {
    // 模拟视图切换容器
    mockDocElements['viewCottage'] = new MockElement('viewCottage');
    mockDocElements['viewWords'] = new MockElement('viewWords');
    mockDocElements['viewSurvival'] = new MockElement('viewSurvival');
    mockDocElements['viewExpeditionMap'] = new MockElement('viewExpeditionMap');

    // 模拟 app.js 中的 switchNavView 路由逻辑
    let routedView = null;
    global.switchNavView = async (viewName) => {
      if (viewName === 'survival') {
        const sess = ExpeditionEngine.getSession();
        if (sess && sess.status === 'in_progress') {
          return global.switchNavView('expedition_map');
        } else {
          routedView = 'cottage_prep';
          return;
        }
      }
      routedView = viewName;
    };

    // 进行中时点击 survival 必须直接恢复 expedition_map 现场
    await global.switchNavView('survival');
    assert.strictEqual(routedView, 'expedition_map', '进行中点击 survival 应无缝恢复 expedition_map');

    console.log('  ✅ PASS: 传统 survival 模式统一汇聚，正在进行中的远征自动直达地图现场');
  }

  // -------------------------------------------------------------
  // 测试 3: 守关领主 (Node 7) 终极突破与全线大捷赏金测试
  // -------------------------------------------------------------
  console.log('\n【测试 3/5】终极守关者 (Node 7) 击破与全线大捷战报流转测试:');
  {
    // 继续推进至 Node 2 (迷雾), Node 4 (营地), Node 5 (石塔), Node 7 (领主)
    await ExpeditionEngine.enterNode(2);
    const enc2 = ExpeditionEngine.getSession().activeEncounter;
    await ExpeditionEngine.submitAnswer(enc2.correctIndex);

    await ExpeditionEngine.enterNode(4);
    await ExpeditionEngine.campRest(false);

    await ExpeditionEngine.enterNode(5);
    await ExpeditionEngine.resolveAnomalyChoice('bypass');

    // 踏入 Node 7 荒原领主
    const node7Res = await ExpeditionEngine.enterNode(7);
    assert.strictEqual(node7Res.node.type, 'gatekeeper', 'Node 7 必须为 gatekeeper 类型');

    const enc7 = ExpeditionEngine.getSession().activeEncounter;
    const ansRes = await ExpeditionEngine.submitAnswer(enc7.correctIndex);

    assert.strictEqual(ansRes.isCorrect, true, '回答应正确');
    assert.strictEqual(ansRes.isGrandTriumph, true, '应标记为 isGrandTriumph 全线大捷');
    assert.strictEqual(ExpeditionEngine.getSession().status, 'completed', '会话状态应自动跃迁为 completed');

    // 终局结算
    const summary = await ExpeditionEngine.conclude('completed');
    assert.strictEqual(summary.outcomeType, 'completed');
    assert.strictEqual(summary.beatsCleared, 5);
    assert.strictEqual(summary.message.includes('远征大捷'), true);
    assert.strictEqual(summary.finalGold > 150, true, '大捷总金币必须包含基础赏金与通关全额特赏');
    assert.strictEqual(summary.finalXp > 250, true, '大捷总经验必须包含通关特赏');

    console.log(`  ✅ PASS: 守关领主终极突破，斩获大捷赏金 🪙 +${summary.finalGold} G / ✦ +${summary.finalXp} XP`);
  }

  // -------------------------------------------------------------
  // 测试 4: 炉边复盘 ➔ 安全研习深度桥接 (0 HP / 0 SAN 考词巩固)
  // -------------------------------------------------------------
  console.log('\n【测试 4/5】炉边复盘错词向安全研习 (0 HP / 0 SAN) 无缝桥接测试:');
  {
    global.marks = {};
    global.addMark = (w) => { global.marks[w] = (global.marks[w] || 0) + 1; };
    global.renderWords = (query) => {};

    const searchInput = new MockElement('searchInput');
    mockDocElements['searchInput'] = searchInput;

    const testErrors = [
      { word: 'contingency', translation: '突发事件；紧急预案' },
      { word: 'scrutiny', translation: '严密审查；仔细监督' }
    ];

    let toastMessage = '';
    global.showToast = (msg) => { toastMessage = msg; };

    await CottageModule.startSafeStudyWithErrors(testErrors);

    assert.strictEqual(global.marks['contingency'], 1, '错词 contingency 应自动加入标记本');
    assert.strictEqual(global.marks['scrutiny'], 1, '错词 scrutiny 应自动加入标记本');
    assert.strictEqual(searchInput.value, 'contingency', '搜索框应预填充首个需复习生词');
    assert.strictEqual(toastMessage.includes('安全研习绝不扣除 HP 与 SAN'), true, '必须弹出安全研习 0 扣除承诺提示');
    assert.strictEqual(profile.hp, 100, '安全研习中 HP 绝不扣除');
    assert.strictEqual(profile.san, 100, '安全研习中 SAN 绝不扣除');

    console.log('  ✅ PASS: 错词安全研习桥接完整生效，保证 0 HP / 0 SAN 纯学习');
  }

  // -------------------------------------------------------------
  // 测试 5: 祭坛战术结算返程 (Abandon & Evacuate) 原子落库
  // -------------------------------------------------------------
  console.log('\n【测试 5/5】出征祭坛中途战术结算返程测试:');
  {
    await ExpeditionEngine.startExpedition(profile, 8888);
    await ExpeditionEngine.enterNode(1);
    const enc = ExpeditionEngine.getSession().activeEncounter;
    await ExpeditionEngine.submitAnswer(enc.correctIndex);

    assert.strictEqual(ExpeditionEngine.getSession().goldEarned, 20);

    await CottageModule.abandonAndEvacuateFromAltar();

    const debriefSummary = global.lastExpeditionSummary;
    assert.strictEqual(ExpeditionEngine.getSession(), null, '远征会话应被清理清空');
    assert.strictEqual(debriefSummary !== null, true, '应直接唤起炉边复盘');
    assert.strictEqual(debriefSummary.outcomeType, 'evacuated');
    assert.strictEqual(debriefSummary.finalGold, 20, '中途已获得的 20 金币应 100% 带回');

    console.log('  ✅ PASS: 祭坛战术结算返程无缝唤起战报并保留全部战利品');
  }

  console.log('\n================================================================');
  console.log('🎉 统一远征模式第三阶段全场景自动化单测 100% 全部通过 (5/5 PASSED)!');
  console.log('================================================================\n');
}

runStep3Tests().then(() => {
  process.exit(0);
}).catch(err => {
  console.error('❌ Step 3 Test Failed:', err);
  process.exit(1);
});
