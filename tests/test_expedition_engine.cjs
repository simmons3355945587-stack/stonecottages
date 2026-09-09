const assert = require('assert');
const path = require('path');
const fs = require('fs');

console.log('================================================================');
console.log('🗺️ 统一远征状态机与事件引擎全场景单元测试 (Expedition Engine)');
console.log('================================================================\n');

// 模拟简易 Storage
const mockStorageData = {};
global.StoneStorage = {
  getItem: k => mockStorageData[k] || null,
  setItem: (k, v) => { mockStorageData[k] = String(v); },
  removeItem: k => { delete mockStorageData[k]; }
};

const ExpeditionEngine = require('../frontend/expedition-engine.js');

async function runTests() {
  // ------------------------------------------------------------
  // 测试 1：确定性随机种子生成 (Seed Determinism)
  // ------------------------------------------------------------
  console.log('【测试 1/6】确定性随机种子与节点拓扑测试:');
  const profile = { hp: 100, grayHp: 0, san: 100, gold: 120, battleHand: ['Justice', 'The Devil', 'Temperance'] };
  
  const seed = 20260909;
  const session1 = await ExpeditionEngine.startExpedition(profile, seed);
  assert.strictEqual(session1.nodes.length, 7, '必须生成 7 个节点拓扑');
  assert.strictEqual(session1.nodes[0].status, 'available', '第 1 节点必须为可用状态');
  assert.strictEqual(session1.nodes[1].status, 'locked', '后续节点初始必须锁定');
  assert.strictEqual(session1.nodes[1].sanCost, 10, '迷雾溪谷入场必须消耗 10 SAN');
  console.log('  ✅ PASS: 随机种子固定拓扑生成准确，节点状态与 SAN 代价符合规范');

  // ------------------------------------------------------------
  // 测试 2：节点前瞻与锁定拦截 (Node Preview & Lock Enforcement)
  // ------------------------------------------------------------
  console.log('\n【测试 2/6】节点前瞻与锁定拦截测试:');
  const preview1 = ExpeditionEngine.previewNode(1);
  assert.strictEqual(preview1.canEnter, true, '可用节点前瞻必须允许入场');

  const previewLocked = ExpeditionEngine.previewNode(2);
  assert.strictEqual(previewLocked.canEnter, false, '未解锁节点前瞻必须拦截入场');
  console.log('  ✅ PASS: 节点前瞻权限与非法跃迁拦截正常');

  // ------------------------------------------------------------
  // 测试 3：题目固化与防刷新作弊 (Question Lock & Anti-Refresh)
  // ------------------------------------------------------------
  console.log('\n【测试 3/6】题目固化与防刷新作弊测试:');
  const candidates = [
    { word: 'contingency', translation: '预案', story: 'Story A', options: ['预案', '虚假', '争执', '猜测'], correctIndex: 0 },
    { word: 'discrepancy', translation: '差异', story: 'Story B', options: ['差异', '协议', '联盟', '阻碍'], correctIndex: 0 }
  ];

  const firstEntry = await ExpeditionEngine.enterNode(1, candidates);
  assert.strictEqual(firstEntry.resumed, false, '首次踏入为全新派题');
  const lockedWord = firstEntry.encounter.word;
  const lockedOptions = [...firstEntry.encounter.options];
  const lockedCorrect = firstEntry.encounter.correctIndex;

  // 模拟用户刷新页面：重新调用 enterNode(1)
  const refreshEntry = await ExpeditionEngine.enterNode(1, candidates);
  assert.strictEqual(refreshEntry.resumed, true, '刷新后必须标记为恢复现场');
  assert.strictEqual(refreshEntry.encounter.word, lockedWord, '刷新后考题单词绝不能变');
  assert.deepStrictEqual(refreshEntry.encounter.options, lockedOptions, '刷新后选项排列顺序绝不能变');
  assert.strictEqual(refreshEntry.encounter.correctIndex, lockedCorrect, '正确答案索引保持完全一致');
  console.log('  ✅ PASS: 防刷新刷题机制完全生效，重载 100% 恢复原题与打乱顺序');

  // ------------------------------------------------------------
  // 测试 4：事件驱动答题结算与幂等防重 (Answer Settle & Idempotency)
  // ------------------------------------------------------------
  console.log('\n【测试 4/6】事件结算与幂等去重测试:');
  const settleResult = await ExpeditionEngine.submitAnswer(lockedCorrect);
  assert.strictEqual(settleResult.isCorrect, true, '正确提交必须判定胜利');
  assert.strictEqual(settleResult.gainedGold, 20, '哨卡胜利获得 20 Gold');
  assert.strictEqual(session1.clearedNodeIds.includes(1), true, '节点 1 必须标记为已通关');
  assert.strictEqual(session1.nodes[1].status, 'available', '节点 2 (迷雾溪谷) 必须已解锁');
  assert.strictEqual(session1.nodes[2].status, 'available', '节点 3 (猎人旧径) 必须已解锁');

  // 模拟重复提交 (重复点击或网络重放)
  const dupResult = await ExpeditionEngine.submitAnswer(lockedCorrect).catch(e => e.message);
  assert(dupResult === 'This encounter has already been resolved', '已结算遭遇必须拦截重复提交');
  console.log('  ✅ PASS: 答题结算顺利推进节点，幂等防护完全阻断重复领奖');

  // ------------------------------------------------------------
  // 测试 5：污染支路 SAN 代价扣除与答错灰血转化 (San Cost & Gray HP)
  // ------------------------------------------------------------
  console.log('\n【测试 5/6】污染支路入场代价与错词灰血转化测试:');
  const prevSan = session1.san;
  const entryNode2 = await ExpeditionEngine.enterNode(2, candidates);
  assert.strictEqual(session1.san, prevSan - 10, '踏入迷雾溪谷必须前置扣除 10 SAN');
  assert.strictEqual(session1.sanLog.length > 0, true, 'SAN 扣除必须留有审计日志');

  // 故意提交错误答案 (选一个不是 correctIndex 的)
  const wrongIndex = (entryNode2.encounter.correctIndex + 1) % 4;
  const wrongSettle = await ExpeditionEngine.submitAnswer(wrongIndex);
  assert.strictEqual(wrongSettle.isCorrect, false, '选错选项判定失败');
  assert.strictEqual(wrongSettle.deltaHp, -8, '失误扣除 8 HP');
  assert.strictEqual(wrongSettle.deltaGrayHp, 4, '失误产生 4 点自愈灰血');
  assert.strictEqual(session1.recentErrors.length, 1, '错词必须登记入待复盘清单');
  console.log('  ✅ PASS: 污染路线前置扣 SAN 成立，答错转化灰血机制运作正常');

  // ------------------------------------------------------------
  // 测试 6：营地休整、战术撤退与原子归档 (Camp Rest & Evacuation)
  // ------------------------------------------------------------
  console.log('\n【测试 6/9】营地休整、战术撤退与终局归档测试:');
  // 踏入营地 (节点 4)
  session1.nodes[3].status = 'available'; // 临时设置可用以测试
  await ExpeditionEngine.enterNode(4);
  const campResult = await ExpeditionEngine.campRest();
  assert.strictEqual(campResult.healedHp, 4, '营地休整自愈全部 4 点灰血');
  assert.strictEqual(campResult.sanRecovered, 15, '营地休整恢复 15 点 SAN');

  // 战术撤退
  const summary = await ExpeditionEngine.evacuate();
  assert.strictEqual(summary.outcomeType, 'evacuated', '结算类型为战术撤退');
  assert.strictEqual(summary.recentErrors.length, 1, '错词记录完整封存保留');
  assert.strictEqual(ExpeditionEngine.getSession(), null, '归档后当前活跃会话必须已清空');
  console.log('  ✅ PASS: 营地休整抚慰灰血与 SAN，战术撤退原子归档顺利完成');

  // ------------------------------------------------------------
  // 测试 7：破败石塔古老异象交互抉择 (Anomaly Event Choices)
  // ------------------------------------------------------------
  console.log('\n【测试 7/9】破败石塔古老异象抉择交互测试:');
  const session2 = await ExpeditionEngine.startExpedition(profile, 998877);
  // 直接解锁并踏入节点 5 (破败石塔)
  const nodeTower = session2.nodes.find(n => n.id === 5);
  nodeTower.status = 'available';
  const towerEntry = await ExpeditionEngine.enterNode(5);
  assert.strictEqual(towerEntry.encounter.type, 'event', '节点 5 必须呈现古老异象遭遇');
  assert.strictEqual(towerEntry.encounter.choices.length, 3, '必须提供 3 种不同风险与收益的战术抉择');

  const prevTowerSan = session2.san;
  const prevTowerGold = session2.goldEarned;
  const choiceRes = await ExpeditionEngine.resolveAnomalyChoice('relic_sacrifice');
  assert.strictEqual(choiceRes.sanDelta, -15, '献祭古塔残响扣除 15 SAN');
  assert.strictEqual(choiceRes.gainedGold, 45, '献祭古塔残响斩获 45 Gold');
  assert.strictEqual(session2.san, prevTowerSan - 15, 'SAN 准确同步扣除');
  assert.strictEqual(session2.goldEarned, prevTowerGold + 45, '金币准确增加');
  assert.strictEqual(nodeTower.status, 'cleared', '抉择后节点 5 标记为已突破');
  assert.strictEqual(session2.nodes.find(n => n.id === 7).status, 'available', '领主关卡 7 成功解锁');
  console.log('  ✅ PASS: 异象抉择事件处理严密，献祭代价、收益与后续路线解锁 100% 正确');

  // ------------------------------------------------------------
  // 测试 8：营火温故深度调息与错词愈合 (Camp Rest Deep Recall)
  // ------------------------------------------------------------
  console.log('\n【测试 8/9】营火温故深度调息与错词闭环测试:');
  const session3 = await ExpeditionEngine.startExpedition({ hp: 80, grayHp: 10, san: 60, battleHand: ['Justice'] }, 554433);
  session3.recentErrors.push({ word: 'insufferable', translation: '难以忍受的', nodeId: 1 });
  const campNode = session3.nodes.find(n => n.id === 4);
  campNode.status = 'available';
  await ExpeditionEngine.enterNode(4);

  const deepRestRes = await ExpeditionEngine.campRest(true);
  assert.strictEqual(deepRestRes.deepRecall, true, '标记为深度温故调息');
  assert.strictEqual(deepRestRes.healedHp, 10, '全部 10 点灰血自愈结痂');
  assert.strictEqual(deepRestRes.sanRecovered, 25, '深度温故调息抚慰 +25 点 SAN');
  assert.strictEqual(session3.grayHp, 0, '灰血清空');
  assert.strictEqual(session3.recentErrors.length, 0, '错词已移入完成温故清单');
  assert.strictEqual(session3.completedRecalls.length, 1, '温故档案准确记录');
  console.log('  ✅ PASS: 营火温故深度调息赋予 +25 SAN 强效抚慰，错词自愈闭环完整');

  // ------------------------------------------------------------
  // 测试 9：倒计时心流压制超时结算测试 (Timeout Penalty)
  // ------------------------------------------------------------
  console.log('\n【测试 9/9】倒计时心流压制超时惩罚测试:');
  const session4 = await ExpeditionEngine.startExpedition({ hp: 100, grayHp: 0, san: 100, battleHand: [] }, 112233);
  await ExpeditionEngine.enterNode(1, candidates);
  const timeoutRes = await ExpeditionEngine.submitAnswer(-1); // 超时未作答
  assert.strictEqual(timeoutRes.isCorrect, false, '倒计时超时判定为未通过');
  assert.strictEqual(timeoutRes.deltaHp, -8, '超时受到 8 点反噬扣血');
  assert.strictEqual(timeoutRes.deltaGrayHp, 4, '超时产生 4 点自愈灰血');
  console.log('  ✅ PASS: 倒计时心流超时判定严谨，生命受损转化为灰血等待后续自愈');

  console.log('\n================================================================');
  console.log('🎉 统一远征状态机与事件引擎全场景单测 100% 全部通过 (9/9 PASSED)!');
  console.log('================================================================\n');
}

runTests().catch(err => {
  console.error('❌ 测试失败:', err);
  process.exit(1);
});
