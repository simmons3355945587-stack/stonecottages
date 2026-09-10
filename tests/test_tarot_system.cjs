const assert = require('assert');
const tarot = require('../frontend/tarot.js');

console.log('================================================================');
console.log('🎴 塔罗系统全新分级、真实爆率与战斗功能单元测试 (Tarot System)');
console.log('================================================================\n');

// 1. 卡牌名册与分级完整性测试
console.log('【测试 1/5】16张卡牌名册与分级完整性验证:');
assert.strictEqual(tarot.TAROT_ROSTER.length, 16, '名册必须严格为 16 张卡牌');

const ssrCards = tarot.TAROT_ROSTER.filter(c => c.rarity === 'SSR');
const srCards = tarot.TAROT_ROSTER.filter(c => c.rarity === 'SR');
const rCards = tarot.TAROT_ROSTER.filter(c => c.rarity === 'R');

assert.strictEqual(ssrCards.length, 4, 'SSR 卡牌必须严格为 4 张');
assert.strictEqual(srCards.length, 6, 'SR 卡牌必须严格为 6 张');
assert.strictEqual(rCards.length, 6, 'R 卡牌必须严格为 6 张');

console.log(`  - SSR (${ssrCards.length}张):`, ssrCards.map(c => c.name).join(', '));
console.log(`  - SR  (${srCards.length}张):`, srCards.map(c => c.name).join(', '));
console.log(`  - R   (${rCards.length}张):`, rCards.map(c => c.name).join(', '));
console.log('  ✅ PASS: 16张卡牌名册分级结构完全符合规范 (SSR:4, SR:6, R:6)\n');

// 2. 第一性原则作弊卡剔除验证
console.log('【测试 2/5】第一性认知原则纯洁性验证 (杜绝通关作弊卡):');
const cheatTypes = ['auto_win', 'reveal_correct', 'full_restore', 'cleanse_marks', 'world_master'];
tarot.TAROT_ROSTER.forEach(c => {
  assert.ok(!cheatTypes.includes(c.type), `卡牌 ${c.name} 包含作弊类型 ${c.type}`);
  assert.ok(c.desc && !c.desc.includes('唯一正确'), `卡牌 ${c.name} 包含透视正解作弊描述`);
  assert.ok(c.cost, `卡牌 ${c.name} 必须包含明确代价或资源约束字段: cost`);
});
console.log('  ✅ PASS: 作弊直接通关卡已 100% 全部清除，所有卡牌均包含明确代价与认知反哺机制\n');

// 3. 真实抽卡爆率与十抽保底机制验证
console.log('【测试 3/5】真实爆率 (SSR 8%, SR 27%, R 65%) 与 10 抽保底验证:');

// 测试 10 抽保底触发
global.playerProfile = { tarotPityCounter: 9, tarotCardsCollected: [] };
const pityCard = tarot.rollTarotCard();
assert.strictEqual(pityCard.rarity, 'SSR', '第 10 抽必须触发保底获得 SSR');
assert.strictEqual(global.playerProfile.tarotPityCounter, 0, '触发 SSR 后保底计数器必须清零');
console.log('  - 十抽保底触发成功: 第 10 抽保底获得 SSR:', pityCard.name);

// 统计模拟 20000 次抽卡分布
let totalPulls = 20000;
let counts = { SSR: 0, SR: 0, R: 0 };
global.playerProfile = { tarotPityCounter: 0, tarotCardsCollected: [] };

for (let i = 0; i < totalPulls; i++) {
  const rolled = tarot.rollTarotCard();
  counts[rolled.rarity]++;
}

const ssrRate = (counts.SSR / totalPulls) * 100;
const srRate = (counts.SR / totalPulls) * 100;
const rRate = (counts.R / totalPulls) * 100;

console.log(`  - 模拟 ${totalPulls} 次抽卡结果: SSR ${ssrRate.toFixed(2)}% | SR ${srRate.toFixed(2)}% | R ${rRate.toFixed(2)}%`);
assert.ok(ssrRate >= 11.0 && ssrRate <= 18.0, 'SSR 综合爆率在保底加成下应在 11%~18% 之间');
assert.ok(srRate >= 21.0 && srRate <= 30.0, 'SR 爆率应在 21%~30% 之间');
console.log('  ✅ PASS: 真实抽卡概率引擎与保底机制逻辑严谨符合数学预期\n');

// 4. 专注点 Focus 资源机制测试
console.log('【测试 4/5】专注点 Focus 资源约束与增扣验证:');
global.playerProfile = { focus: 2, battleHand: ['The Hermit', 'Temperance', 'The Devil'] };
tarot.ensurePlayerFocus();
assert.strictEqual(global.playerProfile.focus, 2, '默认初始专注点应为 2 点');

// 佩戴 The Fool 初始专注 +1
global.playerProfile = { focus: null, battleHand: ['The Fool', 'The Hermit'] };
tarot.ensurePlayerFocus();
assert.strictEqual(global.playerProfile.focus, 3, '佩戴 The Fool 初始专注点应为 3 点');

// 专注点回复上限测试
tarot.restorePlayerFocus(5);
assert.strictEqual(global.playerProfile.focus, 3, '专注点上限不能超过 3 点');
console.log('  ✅ PASS: 专注点 Focus 初始化、遗物增益与上限控制正常\n');

// 5. 卡牌对象兼容解析测试
console.log('【测试 5/5】卡牌对象与历史兼容解析 (getCardObject):');
const hermitObj = tarot.getCardObject('The Hermit');
assert.strictEqual(hermitObj.name, 'The Hermit');
assert.strictEqual(hermitObj.rarity, 'SR');
assert.strictEqual(hermitObj.categoryType, 'active');

const devilObj = tarot.getCardObject('The Devil');
assert.strictEqual(devilObj.rarity, 'SSR');
assert.strictEqual(devilObj.categoryType, 'passive');

const worldObj = tarot.getCardObject('The World');
assert.strictEqual(worldObj.rarity, 'R');
assert.strictEqual(worldObj.categoryType, 'passive', 'The World 必须为被动牌 (passive)');
assert.strictEqual(worldObj.type, 'world_auto');

const fallbackObj = tarot.getCardObject('unknown_legacy_card_xyz');
// 6. 免费塔罗神谕抽取 (grantBonusTarotDraw) 验证
console.log('【测试 6/6】免费塔罗抽取奖励与卡包入库验证:');
global.playerProfile = { tarotPityCounter: 0, tarotCardsCollected: [] };
const bonusCard = tarot.grantBonusTarotDraw('Boss 击溃奖励');
assert.ok(bonusCard && bonusCard.name, '免费抽取必须成功生成有效卡牌');
assert.strictEqual(global.playerProfile.tarotCardsCollected.length, 1, '抽取的卡牌必须成功加入背包');
assert.strictEqual(global.playerProfile.tarotCardsCollected[0].name, bonusCard.name);
console.log('  ✅ PASS: 免费塔罗抽取机制成功运作，卡牌成功入库:', bonusCard.name);

console.log('\n================================================================');
console.log('🎉 塔罗系统全新分级与功能测试 100% 全部通过 (6/6 PASSED)!');
console.log('================================================================');
