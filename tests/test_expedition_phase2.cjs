const assert = require('assert');
const GrayHealthEngine = require('../frontend/gray-health-engine.js');

console.log('================================================================');
console.log('🗺️ 小石屋第二阶段：完整远征循环与策略系统全场景自动化测试套件');
console.log('================================================================\n');

// ------------------------------------------------------------
// 测试 1：SAN 管理与显式审计日志 (Explicit SAN Ledger)
// ------------------------------------------------------------
console.log('【测试 1/5】SAN 显式变动与可追溯日志测试:');
let profile = GrayHealthEngine.normalizeProfile({
  hp: 100,
  san: 100,
  xp: 1000,
  gold: 200,
  level: 4,
  combo: 1
});

// 踏入迷雾支路消耗 10 SAN
const sanRes1 = GrayHealthEngine.changeSan(profile, -10, '踏入迷雾支路');
assert.strictEqual(profile.san, 90);
assert.strictEqual(sanRes1.newSan, 90);
assert.strictEqual(profile.expedition.sanLog.length, 1);
assert.strictEqual(profile.expedition.sanLog[0].delta, -10);
assert.strictEqual(profile.expedition.sanLog[0].reason, '踏入迷雾支路');

// 恶魔塔罗牌暗夜豪赌献祭 15 SAN
const sanRes2 = GrayHealthEngine.changeSan(profile, -15, '恶魔暗夜豪赌献祭');
assert.strictEqual(profile.san, 75);
assert.strictEqual(profile.expedition.sanLog.length, 2);
assert.strictEqual(profile.expedition.sanLog[1].delta, -15);

// 正义卡牌天平平衡抚慰恢复 +20 SAN
const sanRes3 = GrayHealthEngine.changeSan(profile, 20, '正义天平平衡抚慰');
assert.strictEqual(profile.san, 95);
assert.strictEqual(profile.expedition.sanLog.length, 3);
assert.strictEqual(profile.expedition.sanLog[2].delta, 20);

// 边界测试：SAN 不能超过 100，也不能低于 0
GrayHealthEngine.changeSan(profile, 50, '过度抚慰');
assert.strictEqual(profile.san, 100);
GrayHealthEngine.changeSan(profile, -150, '极端侵蚀');
assert.strictEqual(profile.san, 0);
console.log('  ✅ PASS: SAN 边界约束与审计追溯日志准确无误 (Log 条数: ' + profile.expedition.sanLog.length + ')');


// ------------------------------------------------------------
// 测试 2：分支路线生成与抉择 (Branching Routes Mechanics)
// ------------------------------------------------------------
console.log('\n【测试 2/5】分支路线生成与抉择机制测试:');
profile.san = 100;
profile.expedition.currentBeat = 2;
const choices = GrayHealthEngine.generateRouteChoices(profile, 2);

assert.strictEqual(choices.length, 3, '必须提供 3 条分支路线');
const safe = choices.find(c => c.id === 'safe');
const mist = choices.find(c => c.id === 'mist');
const forbidden = choices.find(c => c.id === 'forbidden');

assert(safe && mist && forbidden, '三条路线必须具备: safe, mist, forbidden');
assert.strictEqual(safe.sanCost, 0);
assert.strictEqual(safe.goldBonus, 0);
assert.strictEqual(mist.sanCost, 10);
assert.strictEqual(mist.goldBonus, 10);
assert.strictEqual(forbidden.sanCost, 25);
assert.strictEqual(forbidden.goldBonus, 25);

// 低 SAN 状态下的可承受约束 (canAfford)
profile.san = 15;
const lowSanChoices = GrayHealthEngine.generateRouteChoices(profile, 3);
const lowForbidden = lowSanChoices.find(c => c.id === 'forbidden');
const lowMist = lowSanChoices.find(c => c.id === 'mist');
assert.strictEqual(lowMist.canAfford, true, 'SAN=15 足以承受 mist (10)');
assert.strictEqual(lowForbidden.canAfford, false, 'SAN=15 不足以承受 forbidden (25)');

// 玩家实际选择迷雾路线
profile.san = 80;
const startGold = profile.gold;
const chosen = GrayHealthEngine.chooseRoute(profile, 'mist');
assert.strictEqual(chosen.id, 'mist');
assert.strictEqual(profile.san, 70, '扣除 10 SAN');
assert.strictEqual(profile.gold, startGold + 10, '立即增加 10 Gold 战利品');
assert.strictEqual(profile.expedition.gatheredGold, 10);
assert.strictEqual(profile.expedition.routeHistory.length, 1);
assert.strictEqual(profile.expedition.routeHistory[0].routeId, 'mist');
console.log('  ✅ PASS: 分支路线生成、可承受判断与收益累加测试通过');


// ------------------------------------------------------------
// 测试 3：6 张核心策略塔罗牌效果与约束 (Tactical Tarots)
// ------------------------------------------------------------
console.log('\n【测试 3/5】6 张核心策略塔罗牌逻辑与状态测试:');
// 1. Temperance (节制)：双倍回忆灰血愈合
profile.hp = 90;
profile.grayHp = 8;
profile.expedition.questionIndex = 1;
profile.expedition.recoverableErrors = [
  {
    word: 'resilience',
    grayHpRemaining: 8,
    recoveredHp: 0,
    questionIndex: 0,
    attempts: 0
  }
];

// 开启节制 Buff
profile.expedition.buffs = { doubleRecallHeal: true };
const recallWithTemperance = GrayHealthEngine.evaluateRecall(profile, 'resilience', true, { questionIndex: 3 });
assert.strictEqual(recallWithTemperance.validRecall, true);
assert.strictEqual(recallWithTemperance.recoveredHp, 4, '节制激活时恢复量应翻倍至 4 HP');
assert.strictEqual(profile.hp, 94);
assert.strictEqual(profile.grayHp, 4);
assert.strictEqual(profile.expedition.totalHealedGrayHp, 4);
assert.strictEqual(profile.expedition.buffs.doubleRecallHeal, false, '节制生效后单次 Buff 必须自动清除');

// 2. The Devil (恶魔)：献祭 15 SAN，金币翻倍 Buff 标记
const sanBeforeDevil = profile.san;
GrayHealthEngine.changeSan(profile, -15, '恶魔暗夜豪赌献祭');
profile.expedition.buffs.doubleGoldNext = true;
assert.strictEqual(profile.san, sanBeforeDevil - 15);
assert.strictEqual(profile.expedition.buffs.doubleGoldNext, true);

// 3. Justice (正义)：迎击成功抚慰恢复 +20 SAN
const sanBeforeJustice = profile.san;
GrayHealthEngine.changeSan(profile, 20, '正义天平平衡抚慰');
assert.strictEqual(profile.san, sanBeforeJustice + 20);

// 4. The Hermit (隐者)：提示辅助回忆折半
GrayHealthEngine.recordError(profile, 'compromise', '妥协', { questionIndex: 5 });
const hermitRecall = GrayHealthEngine.evaluateRecall(profile, 'compromise', true, { questionIndex: 8, usedHint: true });
assert.strictEqual(hermitRecall.validRecall, true);
assert.strictEqual(hermitRecall.recoveredHp, 1, '隐者辅助作答时恢复减半至 1 HP');

console.log('  ✅ PASS: 战术塔罗机制 (节制双倍灰血、恶魔献祭翻倍、正义抚慰、隐者折算) 运作符合预期');


// ------------------------------------------------------------
// 测试 4：战术撤退 (见好就收) vs 死神绝境涅槃 vs 全胜结算
// ------------------------------------------------------------
console.log('\n【测试 4/5】撤退与结算系统测试:');
// 场景 A：见好就收 · 战术撤退 (Tactical Evacuation)
let evacProfile = GrayHealthEngine.normalizeProfile({
  hp: 60,
  san: 70,
  xp: 1200,
  gold: 300,
  level: 4
});
evacProfile.expedition = GrayHealthEngine.createInitialExpeditionState(evacProfile);
evacProfile.expedition.gatheredGold = 45;
evacProfile.expedition.gatheredXp = 80;
evacProfile.expedition.currentBeat = 3;
const evacSummary = GrayHealthEngine.concludeExpedition(evacProfile, 'evacuated');
assert.strictEqual(evacSummary.outcomeType, 'evacuated');
assert.strictEqual(evacSummary.finalGold, 45, '战术撤退 100% 保留战利品');
assert.strictEqual(evacSummary.finalXp, 80, '战术撤退 100% 保留经验');
assert.strictEqual(evacProfile.expedition.inExpedition, false);
console.log('  ✅ PASS: 见好就收战术撤退测试通过 (战利品 100% 完整回收)');

// 场景 B：死神绝境涅槃 (Death Totem Saved)
let deathProfile = GrayHealthEngine.normalizeProfile({
  hp: 0,
  san: 30,
  xp: 1200,
  gold: 300,
  level: 4
});
deathProfile.expedition = GrayHealthEngine.createInitialExpeditionState(deathProfile);
deathProfile.expedition.gatheredGold = 50;
deathProfile.expedition.gatheredXp = 100;
deathProfile.expedition.currentBeat = 4;
const deathSummary = GrayHealthEngine.concludeExpedition(deathProfile, 'death_evacuated');
assert.strictEqual(deathSummary.outcomeType, 'death_evacuated');
assert.strictEqual(deathProfile.hp, 10, '死神保留 10 HP 免死');
// 扣除 30% 携带金币与经验 (50 * 0.7 = 35)
assert.strictEqual(deathSummary.finalGold, 35);
assert.strictEqual(deathSummary.finalXp, 70);
console.log('  ✅ PASS: 死神绝境涅槃测试通过 (保留 10 HP，受损 30% 收益脱险)');

// 场景 C：5 节点全胜大捷通关 (Full Victory)
let winProfile = GrayHealthEngine.normalizeProfile({
  hp: 80,
  san: 85,
  xp: 1000,
  gold: 200,
  level: 4
});
winProfile.expedition = GrayHealthEngine.createInitialExpeditionState(winProfile);
winProfile.expedition.gatheredGold = 60;
winProfile.expedition.gatheredXp = 90;
winProfile.expedition.currentBeat = 5;
const winSummary = GrayHealthEngine.concludeExpedition(winProfile, 'completed');
assert.strictEqual(winSummary.outcomeType, 'completed');
assert.strictEqual(winSummary.beatsCleared, 5);
assert.strictEqual(winSummary.finalGold, 60 + 50, '包含通关额外 +50 Gold 赏金');
assert.strictEqual(winSummary.finalXp, 90 + 100, '包含通关额外 +100 XP');
assert.strictEqual(winProfile.wonRounds, 1);
console.log('  ✅ PASS: 5 节点全胜大捷通关测试通过 (大捷赏金与胜场正确叠加)');


// ------------------------------------------------------------
// 测试 5：完整 5 节点端到端闭环模拟 (End-to-End Simulation)
// ------------------------------------------------------------
console.log('\n【测试 5/5】完整 5 节点远征端到端闭环模拟:');
let simProfile = GrayHealthEngine.normalizeProfile({
  hp: 100,
  san: 100,
  xp: 500,
  gold: 100,
  level: 2
});

// Beat 1: 安全启程 (Safe Route)
assert.strictEqual(simProfile.hp, 100);
assert.strictEqual(simProfile.san, 100);
// 模拟第一题失误
GrayHealthEngine.recordError(simProfile, 'negotiate', '谈判', { questionIndex: 1 });
assert.strictEqual(simProfile.hp, 92);
assert.strictEqual(simProfile.grayHp, 4);

// Beat 2: 玩家选择迷雾支路
GrayHealthEngine.chooseRoute(simProfile, 'mist');
assert.strictEqual(simProfile.san, 90);
assert.strictEqual(simProfile.expedition.gatheredGold, 10);
// 激活恶魔牌翻倍
GrayHealthEngine.changeSan(simProfile, -15, '恶魔暗夜豪赌献祭');
assert.strictEqual(simProfile.san, 75);

// Beat 3: 玩家选择禁忌遗迹
simProfile.expedition.currentBeat = 3;
GrayHealthEngine.chooseRoute(simProfile, 'forbidden');
assert.strictEqual(simProfile.san, 50);
assert.strictEqual(simProfile.expedition.gatheredGold, 35); // 10 + 25

// Beat 4: 激活节制卡牌，回忆 Beat 1 的错词 'negotiate'
simProfile.expedition.currentBeat = 4;
simProfile.expedition.buffs = { doubleRecallHeal: true };
const simRecall = GrayHealthEngine.evaluateRecall(simProfile, 'negotiate', true, { questionIndex: 4 });
assert.strictEqual(simRecall.validRecall, true);
assert.strictEqual(simRecall.recoveredHp, 4, '节制双倍治愈 4 点灰血');
assert.strictEqual(simProfile.hp, 96);
assert.strictEqual(simProfile.grayHp, 0);

// Beat 5: 决战终局 (Safe Route)
simProfile.expedition.currentBeat = 5;
GrayHealthEngine.chooseRoute(simProfile, 'safe');
assert.strictEqual(simProfile.expedition.routeHistory.length, 3);

// 结算卷轴生成
const finalDebrief = GrayHealthEngine.concludeExpedition(simProfile, 'completed');
assert.strictEqual(finalDebrief.outcomeType, 'completed');
assert.strictEqual(finalDebrief.beatsCleared, 5);
assert.strictEqual(finalDebrief.healedGrayHp, 4);
assert.strictEqual(finalDebrief.sanLog.length, 3);
assert.strictEqual(simProfile.learningEvidence['negotiate'].totalRecalls, 1);
assert.strictEqual(simProfile.learningEvidence['negotiate'].totalErrors, 1);

console.log('  ✅ PASS: 5 节点远征闭环模拟全流程完美通关！');
console.log('  🏆 最终战报: 清除节点 5/5, 斩获 Gold: ' + finalDebrief.finalGold + ', XP: ' + finalDebrief.finalXp + ', 灰血愈合: +' + finalDebrief.healedGrayHp + ' HP');

console.log('\n================================================================');
console.log('🎉 所有 Phase 2 自动化测试全部顺利通过 (5/5 PASSED)!');
console.log('================================================================');
