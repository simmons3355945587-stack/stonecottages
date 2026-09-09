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
  console.log('\n【测试 6/6】营地休整、战术撤退与终局归档测试:');
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

  console.log('\n================================================================');
  console.log('🎉 统一远征状态机与事件引擎全场景单测 100% 全部通过 (6/6 PASSED)!');
  console.log('================================================================\n');
}

runTests().catch(err => {
  console.error('❌ 测试失败:', err);
  process.exit(1);
});
