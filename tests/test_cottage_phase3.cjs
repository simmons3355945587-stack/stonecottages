const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('================================================================');
console.log('🏡 小石屋第三阶段：2.5D 石屋出征祭坛与炉边复盘自动化单测套件');
console.log('================================================================\n');

// 构造简易 DOM 模拟环境以供 cottage.js 测试
class MockElement {
  constructor(id = '', tagName = 'div') {
    this.id = id;
    this.tagName = tagName;
    this.className = '';
    this.classList = {
      _classes: new Set(),
      add: (...cls) => cls.forEach(c => this.classList._classes.add(c)),
      remove: (...cls) => cls.forEach(c => this.classList._classes.delete(c)),
      contains: c => this.classList._classes.has(c),
      toggle: (c, force) => {
        if (force !== undefined) {
          if (force) this.classList._classes.add(c);
          else this.classList._classes.delete(c);
          return force;
        }
        if (this.classList._classes.has(c)) {
          this.classList._classes.delete(c);
          return false;
        } else {
          this.classList._classes.add(c);
          return true;
        }
      }
    };
    this.innerHTML = '';
    this.textContent = '';
    this.style = {};
  }
}

const mockDoc = {
  elements: {},
  getElementById(id) {
    if (!this.elements[id]) {
      this.elements[id] = new MockElement(id);
    }
    return this.elements[id];
  },
  createElement(tag) {
    return new MockElement('', tag);
  },
  body: new MockElement('body', 'body')
};

// 加载 cottage.js
const cottageCode = fs.readFileSync(path.join(__dirname, '../frontend/cottage.js'), 'utf8');

const sandbox = {
  document: mockDoc,
  window: {},
  playerProfile: {
    hp: 92,
    grayHp: 4,
    san: 85,
    gold: 140,
    battleHand: ['The Hermit', 'Temperance', 'The Devil']
  },
  getCardObject: (cardName) => {
    const map = {
      'The Hermit': { arcana: 'The Hermit', skill: '求索之光', icon: '💡' },
      'Temperance': { arcana: 'Temperance', skill: '平衡回响', icon: '🕊️' },
      'The Devil': { arcana: 'The Devil', skill: '暗夜豪赌', icon: '🔥' },
      'Justice': { arcana: 'Justice', skill: '天平平衡', icon: '⚖️' }
    };
    return map[cardName] || { arcana: cardName, skill: '神技', icon: '🃏' };
  },
  escapeHtml: str => String(str || ''),
  soundClick: () => {},
  soundSuccess: () => {},
  showToast: () => {},
  ensureBattleHand: () => {},
  setInterval: (fn, ms) => {},
  clearInterval: (id) => {},
  setTimeout: (fn, ms) => {},
  clearTimeout: (id) => {},
  console: console,
  module: { exports: {} }
};

vm.createContext(sandbox);
vm.runInContext(cottageCode, sandbox);

const Cottage = sandbox.module.exports;

// ------------------------------------------------------------
// 测试 1：石屋出征整备祭坛 (Expedition Prep Altar)
// ------------------------------------------------------------
console.log('【测试 1/4】出征整备祭坛内容渲染与属性展示测试:');
const prepModalEl = mockDoc.createElement('div');
Cottage.renderExpeditionPrepContent(prepModalEl);

assert(prepModalEl.innerHTML.includes('出征祭坛 · 探险整备'), '必须包含出征整备祭坛标题');
assert(prepModalEl.innerHTML.includes('锁定词库考纲') || prepModalEl.innerHTML.includes('职场机密与危机周旋'), '必须包含出征词库考纲说明');
assert(prepModalEl.innerHTML.includes('❤️ 92 HP'), '必须展示当前真实 HP');
assert(prepModalEl.innerHTML.includes('🧠 85 SAN'), '必须展示当前真实 SAN');
assert(prepModalEl.innerHTML.includes('🪙 140 Gold'), '必须展示当前随身金币');
assert(prepModalEl.innerHTML.includes('The Hermit'), '手牌槽位必须呈现隐者');
assert(prepModalEl.innerHTML.includes('Temperance'), '手牌槽位必须呈现节制');
assert(prepModalEl.innerHTML.includes('The Devil'), '手牌槽位必须呈现恶魔');
assert(prepModalEl.innerHTML.includes('推门踏上出征'), '必须提供推门出征按钮');
assert(prepModalEl.innerHTML.includes('书架安全研习 (0扣血)'), '必须提供独立安全研习模式入口');

console.log('  ✅ PASS: 出征祭坛主题、属性、手牌构筑与安全研习入口 100% 渲染完整');

// ------------------------------------------------------------
// 测试 2：石屋炉边复盘茶几 - 欢迎休整状态 (Empty State)
// ------------------------------------------------------------
console.log('\n【测试 2/4】炉边复盘茶几暂无战报时的欢迎休整状态:');
const debriefModalEl = mockDoc.createElement('div');
Cottage.renderCottageDebriefContent(debriefModalEl, null);

assert(debriefModalEl.innerHTML.includes('炉边茶几 · 静憩复盘'));
assert(debriefModalEl.innerHTML.includes('暂无未复盘的远征战报'));
assert(debriefModalEl.innerHTML.includes('前往出征祭坛整备'));
assert(debriefModalEl.innerHTML.includes('书架安全研习'));

console.log('  ✅ PASS: 暂无战报时友好引导前往书架研习或出征祭坛整备');

// ------------------------------------------------------------
// 测试 3：石屋炉边复盘茶几 - 战报结算展示与错词引导
// ------------------------------------------------------------
console.log('\n【测试 3/4】炉边复盘茶几战报呈现与错词安全研习引导:');
const mockSummary = {
  outcomeType: 'evacuated',
  beatsCleared: 3,
  finalGold: 65,
  finalXp: 95,
  healedGrayHp: 4,
  recentErrors: ['untenable', 'precarious'],
  message: '见好就收，全数携带战利品安然返回石屋。'
};

Cottage.renderCottageDebriefContent(debriefModalEl, mockSummary);

assert(debriefModalEl.innerHTML.includes('见好就收 · 炉边小憩'));
assert(debriefModalEl.innerHTML.includes('3 / 5'), '必须显示突破节点 3/5');
assert(debriefModalEl.innerHTML.includes('+65 G'), '必须显示带回金币 65');
assert(debriefModalEl.innerHTML.includes('+95 XP'), '必须显示永久经验 95');
assert(debriefModalEl.innerHTML.includes('+4 HP'), '必须显示愈合灰血 4');
assert(debriefModalEl.innerHTML.includes('untenable'), '必须包含待复盘生词 untenable');
assert(debriefModalEl.innerHTML.includes('precarious'), '必须包含待复盘生词 precarious');
assert(debriefModalEl.innerHTML.includes('前往书架研习错词 (安全研习)'), '有错词时主按钮自动切换为安全研习引导');
assert(debriefModalEl.innerHTML.includes('炉火暖光抚慰中'), '必须呈现壁炉抚慰理智提示');

console.log('  ✅ PASS: 炉边复盘指标、错词星标、安全研习引导与壁炉理智抚慰提示全部吻合');

// ------------------------------------------------------------
// 测试 4：石屋场景随 SAN 清明度氛围随动测试
// ------------------------------------------------------------
console.log('\n【测试 4/4】石屋场景随 SAN 清明度氛围滤镜随动测试:');
const cottageSceneEl = mockDoc.getElementById('cottageScene');
const cottageLocationEl = mockDoc.getElementById('cottageLocationLabel');

// SAN = 90 -> 清明
sandbox.playerProfile.san = 90;
Cottage.updateCottageSanAtmosphere();
assert(cottageSceneEl.classList.contains('san-tier-clear'), 'SAN=90 应当应用 san-tier-clear');
assert.strictEqual(cottageLocationEl.textContent, '炉火旁 · 清明微暖');

// SAN = 65 -> 轻度迷雾
sandbox.playerProfile.san = 65;
Cottage.updateCottageSanAtmosphere();
assert(cottageSceneEl.classList.contains('san-tier-mild'), 'SAN=65 应当应用 san-tier-mild');
assert(cottageLocationEl.textContent.includes('轻度迷雾'));

// SAN = 20 -> 严重侵蚀
sandbox.playerProfile.san = 20;
Cottage.updateCottageSanAtmosphere();
assert(cottageSceneEl.classList.contains('san-tier-heavy'), 'SAN=20 应当应用 san-tier-heavy');
assert(cottageLocationEl.textContent.includes('心神调息'));

console.log('  ✅ PASS: 清明/轻度迷雾/严重侵蚀氛围类名与位置徽章随动完全准确');

console.log('\n================================================================');
console.log('🎉 小石屋第三阶段自动化测试全部圆满通过 (4/4 PASSED)!');
console.log('================================================================');
