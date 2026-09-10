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

  // ------------------------------------------------------------
  // 测试 10：黑市商人采购黑面包回血与安神茶测试 (Merchant Purchases)
  // ------------------------------------------------------------
  console.log('\n【测试 10/12】黑市商人采购粗硬黑面包与安神茶测试:');
  const session5 = await ExpeditionEngine.startExpedition({ hp: 50, grayHp: 15, san: 40, battleHand: [] }, 998877);
  session5.goldEarned = 100; // 模拟途中赚取 100 G
  const merchantNode = session5.nodes.find(n => n.id === 6);
  assert.strictEqual(merchantNode.type, 'merchant', '节点 6 必须为流浪黑市 merchant 类型');
  merchantNode.status = 'available';
  await ExpeditionEngine.enterNode(6);

  // 购买黑面包
  const breadRes = await ExpeditionEngine.buyMerchantItem('bread');
  assert.strictEqual(breadRes.success, true, '成功采购粗硬黑面包');
  assert.strictEqual(session5.grayHp, 0, '黑面包成功将 15 点灰血全部固化自愈');
  assert.strictEqual(session5.hp, 90, '生命值从 50 + 25基础 + 15灰血 = 90 HP');
  assert.strictEqual(session5.goldEarned, 65, '扣除 35 Gold，剩余 65 G');

  // 购买安神薄荷茶
  const teaRes = await ExpeditionEngine.buyMerchantItem('tea');
  assert.strictEqual(teaRes.success, true, '成功采购安神薄荷茶');
  assert.strictEqual(session5.san, 60, '理智从 40 + 20 = 60 SAN');
  assert.strictEqual(session5.goldEarned, 35, '扣除 30 Gold，剩余 35 G');
  console.log('  ✅ PASS: 黑商采购黑面包与薄荷茶逻辑严密，灰血自愈与理智回复准确');

  // ------------------------------------------------------------
  // 测试 11：无限深度循环 (Endless Multi-Depth Loop) 与 Risk-Reward 倍率测试
  // ------------------------------------------------------------
  console.log('\n【测试 11/12】无限深度循环 (Endless Loop) 与 Risk-Reward 倍率测试:');
  assert.strictEqual(session5.depth, 1, '初始深度为 Depth 1');
  assert.strictEqual(session5.depthMultiplier, 1.0, '初始金币倍率为 1.0x');

  // 挺进更深处 Depth 2
  await ExpeditionEngine.descendToNextDepth();
  assert.strictEqual(session5.depth, 2, '成功挺进至 Depth 2');
  assert.strictEqual(session5.depthMultiplier, 1.35, 'Depth 2 金币倍率应为 1.35x');
  assert.strictEqual(session5.nodes.find(n => n.id === 1).rewardGold, 27, 'Depth 2 哨所金币 20 * 1.35 = 27 G');
  assert.strictEqual(session5.nodes.find(n => n.id === 7).rewardGold, 95, 'Depth 2 领主金币 70 * 1.35 = 95 G');
  assert.strictEqual(session5.nodes.find(n => n.id === 1).status, 'available', 'Depth 2 起始节点自动激活');

  // 挺进更深处 Depth 3
  await ExpeditionEngine.descendToNextDepth();
  assert.strictEqual(session5.depth, 3, '成功挺进至 Depth 3');
  assert.strictEqual(session5.depthMultiplier, 1.70, 'Depth 3 金币倍率应为 1.70x');
  assert.strictEqual(session5.nodes.find(n => n.id === 1).rewardGold, 34, 'Depth 3 哨所金币 20 * 1.70 = 34 G');
  console.log('  ✅ PASS: 无限深度循环顺利演进，节点拓扑重置与 +35%/层 金币倍率数学模型准确');

  // ------------------------------------------------------------
  // 测试 12：The World (世界) 3-combo 自动触发与全局防重复池测试
  // ------------------------------------------------------------
  console.log('\n【测试 12/12】The World 3-combo 自动触发与防重复记忆池测试:');
  const session6 = await ExpeditionEngine.startExpedition({ hp: 70, grayHp: 20, san: 50, battleHand: ['The World'] }, 445566);
  assert.ok(Array.isArray(session6.encounteredWords), '必须维护 encounteredWords 防重复池');
  
  // 连击 1
  await ExpeditionEngine.enterNode(1, candidates);
  assert.ok(session6.encounteredWords.length > 0, '遭遇生词已录入防重复记忆池');
  const ans1 = await ExpeditionEngine.submitAnswer(session6.activeEncounter.correctIndex);
  assert.strictEqual(ans1.isCorrect, true, '题 1 必须答对');
  assert.strictEqual(ans1.worldAutoTriggered, false, '连击 1 不触发 The World');

  // 连击 2
  session6.nodes.find(n => n.id === 2).status = 'available';
  await ExpeditionEngine.enterNode(2, [{ ...candidates[0], word: 'subsequent' }]);
  const ans2 = await ExpeditionEngine.submitAnswer(session6.activeEncounter.correctIndex);
  assert.strictEqual(ans2.isCorrect, true, '题 2 必须答对');
  assert.strictEqual(ans2.worldAutoTriggered, false, '连击 2 不触发 The World');

  // 连击 3: 触发万物和谐
  session6.nodes.find(n => n.id === 3).status = 'available';
  await ExpeditionEngine.enterNode(3, [{ ...candidates[0], word: 'coordinate' }]);
  const ans3 = await ExpeditionEngine.submitAnswer(session6.activeEncounter.correctIndex);
  assert.strictEqual(ans3.isCorrect, true, '题 3 必须答对');
  assert.strictEqual(ans3.worldAutoTriggered, true, '达成 3 连击必须自动触发 The World');
  assert.strictEqual(session6.grayHp, 0, '万物和谐自动固化自愈全部灰血');
  assert.strictEqual(session6.san, 55, '万物和谐在扣减迷雾溪谷10点SAN后回复+15至55 SAN');
  console.log('  ✅ PASS: The World 3-combo 自动触发与防重复记忆池机制完全生效');

  // ------------------------------------------------------------
  // 测试 13：错词计划复现队列 (reviewQueue) 与 3 步间隔调度测试
  // ------------------------------------------------------------
  console.log('\n【测试 13/18】错词计划复现队列 (reviewQueue) 与 3 步间隔调度测试:');
  const session7 = await ExpeditionEngine.startExpedition({ hp: 100, grayHp: 0, san: 100, battleHand: [] }, 778899);
  const wordBank = [
    { word: 'vacant', translation: '空缺的', options: ['空缺的', '繁荣的', '拥挤的', '迅速的'], correctIndex: 0 },
    { word: 'lucid', translation: '清晰的', options: ['清晰的', '混沌的', '狂暴的', '微弱的'], correctIndex: 0 },
    { word: 'subtle', translation: '微妙的', options: ['微妙的', '粗俗的', '激烈的', '宏大的'], correctIndex: 0 },
    { word: 'rigid', translation: '僵硬的', options: ['僵硬的', '柔软的', '飘逸的', '随机的'], correctIndex: 0 }
  ];

  // 节点 1：错做 vacant
  await ExpeditionEngine.enterNode(1, [wordBank[0]]);
  assert.strictEqual(session7.activeEncounter.word, 'vacant');
  const wrongAns = (session7.activeEncounter.correctIndex + 1) % 4;
  await ExpeditionEngine.submitAnswer(wrongAns);
  assert.strictEqual(session7.reviewQueue.length, 1, '错词 vacant 必须压入 reviewQueue');
  assert.strictEqual(session7.reviewQueue[0].word, 'vacant');
  assert.strictEqual(session7.reviewQueue[0].interveningCount, 0, '初始间隔步数为 0');

  // 节点 2：答对 lucid (间隔 +1)
  session7.nodes[1].status = 'available';
  await ExpeditionEngine.enterNode(2, [wordBank[1]]);
  assert.strictEqual(session7.reviewQueue[0].interveningCount, 1, '间隔推进至 1');
  await ExpeditionEngine.submitAnswer(session7.activeEncounter.correctIndex);

  // 节点 3：答对 subtle (间隔 +2)
  session7.nodes[2].status = 'available';
  await ExpeditionEngine.enterNode(3, [wordBank[2]]);
  assert.strictEqual(session7.reviewQueue[0].interveningCount, 2, '间隔推进至 2');
  await ExpeditionEngine.submitAnswer(session7.activeEncounter.correctIndex);

  // 节点 5 (作为战斗哨卡)：间隔达到 3，必须精准调度复现 vacant
  session7.nodes[4].type = 'normal';
  session7.nodes[4].status = 'available';
  const reviewEntry = await ExpeditionEngine.enterNode(5, [wordBank[3]]);
  assert.strictEqual(session7.activeEncounter.word, 'vacant', '间隔达到 3 步，必须优先调度复现错词 vacant');
  assert.strictEqual(session7.activeEncounter.encounterType, 'review', '遭遇类型必须标记为 review 阶段研习');
  assert.strictEqual(session7.activeEncounter.attemptIndex, 2, '尝试次数标记为 2');
  assert.strictEqual(session7.reviewQueue.length, 0, '复现考题已从排队队列中取出');

  const reviewSolve = await ExpeditionEngine.submitAnswer(session7.activeEncounter.correctIndex);
  assert.strictEqual(reviewSolve.isCorrect, true, '复现研习答对通过');
  assert.strictEqual(session7.healedGrayHp >= 4, true, '复现研习闭环成功抚慰自愈灰血结痂');
  assert.strictEqual(reviewSolve.dataLog.encounter_type, 'review', '10字段数据流准确记录为 review');
  console.log('  ✅ PASS: 错词计划复现队列与 3 步认知间隔调度完全符合教育测量学规范');

  // ------------------------------------------------------------
  // 测试 14：SAN 上限侵蚀 (maxSan) 与薄荷茶上限约束测试
  // ------------------------------------------------------------
  console.log('\n【测试 14/18】SAN 上限侵蚀 (maxSan) 与薄荷茶上限约束测试:');
  const session8 = await ExpeditionEngine.startExpedition({ hp: 80, grayHp: 0, san: 100, battleHand: ['The Devil'] }, 123987);
  assert.strictEqual(session8.maxSan, 100, '初始 SAN 上限为 100');
  
  // 施放 The Devil 恶魔契约：侵蚀 10 点 SAN 上限，并扣除 15 当前 SAN
  session8.activeEncounter = { nodeId: 1, resolved: false, correctIndex: 0 };
  await ExpeditionEngine.castTacticalTarot('The Devil');
  assert.strictEqual(session8.maxSan, 90, '恶魔契约使 SAN 上限侵蚀跌落至 90');
  assert.strictEqual(session8.san, 85, '当前 SAN 为 100 - 15 = 85');

  // 黑市饮用薄荷茶 (+20 SAN)，受 90 上限约束，绝不能溢出到 105
  session8.goldEarned = 100;
  session8.nodes[5].status = 'available';
  await ExpeditionEngine.enterNode(6);
  const teaRes14 = await ExpeditionEngine.buyMerchantItem('tea');
  assert.strictEqual(teaRes14.success, true);
  assert.strictEqual(session8.san, 90, '薄荷茶抚慰受 maxSan 90 约束，精准封顶在 90 SAN');
  console.log('  ✅ PASS: 理智天花板侵蚀与补给恢复上限刚性约束验证通过');

  // ------------------------------------------------------------
  // 测试 15：动态黑市阶梯递增定价测试 (Dynamic Merchant Inflation)
  // ------------------------------------------------------------
  console.log('\n【测试 15/18】动态黑市阶梯递增定价测试:');
  assert.strictEqual(ExpeditionEngine.getMerchantPrice('bread', 0), 35, '第 1 次黑面包 35 G');
  assert.strictEqual(ExpeditionEngine.getMerchantPrice('bread', 1), 50, '第 2 次黑面包 50 G');
  assert.strictEqual(ExpeditionEngine.getMerchantPrice('bread', 2), 70, '第 3 次黑面包 70 G');
  assert.strictEqual(ExpeditionEngine.getMerchantPrice('bread', 3), 95, '第 4 次黑面包 95 G');

  assert.strictEqual(ExpeditionEngine.getMerchantPrice('tea', 0), 30, '第 1 次薄荷茶 30 G');
  assert.strictEqual(ExpeditionEngine.getMerchantPrice('tea', 1), 45, '第 2 次薄荷茶 45 G');
  assert.strictEqual(ExpeditionEngine.getMerchantPrice('tea', 2), 60, '第 3 次薄荷茶 60 G');

  assert.strictEqual(ExpeditionEngine.getMerchantPrice('grimoire', 0), 90, '第 1 次残卷 90 G');
  assert.strictEqual(ExpeditionEngine.getMerchantPrice('grimoire', 1), 125, '第 2 次残卷 125 G');

  // 连购 2 次黑面包验证实际扣款
  session8.goldEarned = 200;
  const b1 = await ExpeditionEngine.buyMerchantItem('bread');
  assert.strictEqual(b1.cost, 35, '首次采购黑面包扣 35 G');
  assert.strictEqual(session8.merchantPurchases.bread, 1, '购买计数加 1');

  const b2 = await ExpeditionEngine.buyMerchantItem('bread');
  assert.strictEqual(b2.cost, 50, '二次采购黑面包阶梯涨价至 50 G');
  assert.strictEqual(session8.merchantPurchases.bread, 2, '购买计数加 2');
  console.log('  ✅ PASS: 黑市阶梯通胀定价模型精准生效，杜绝无节制资源囤积');

  // ------------------------------------------------------------
  // 测试 16：标准化辅助等级 (0~6) 与经济/能力解耦测试
  // ------------------------------------------------------------
  console.log('\n【测试 16/18】标准化辅助等级 (0~6) 与经济/能力解耦测试:');
  const session9 = await ExpeditionEngine.startExpedition({ hp: 100, grayHp: 0, san: 100, battleHand: ['The Hermit'] }, 334455);
  await ExpeditionEngine.enterNode(1, wordBank);
  assert.strictEqual(session9.activeEncounter.assistanceLevel, 0, '初始辅助等级为 0');

  // 施放隐士牌 (The Hermit)，标准化赋予 2 级援助 (释义线索)
  const hermitRes = await ExpeditionEngine.castTacticalTarot('The Hermit');
  assert.strictEqual(session9.activeEncounter.assistanceLevel, 2, '隐士牌标准化为 Level 2 援助');
  assert.ok(session9.activeEncounter.hintText.includes('求索线索'), '线索提示文本成功生成');

  // 答对提交：节点基础金币 20 G，解耦为 BaseGold 12 + 浮动挑战奖 8 * (1 - 2*0.15) = 12 + 6 = 18 G
  const hermitSolve = await ExpeditionEngine.submitAnswer(session9.activeEncounter.correctIndex);
  assert.strictEqual(hermitSolve.baseGold, 12, '基础通关保底 12 G 受到绝对保护');
  assert.strictEqual(hermitSolve.challengeBonus, 6, '挑战附加奖按援助系数折减为 6 G');
  assert.strictEqual(hermitSolve.gainedGold, 18, '实得总金币 18 G，绝不粗暴对半腰斩');
  assert.strictEqual(session9.abilityProfile.vocab > 1000, true, '能力模型独立累进增长');

  // 测试 4 级援助 (The Magician) + 选错答题标记顽固错误 (stubborn_error)
  session9.nodes[1].status = 'available';
  session9.battleHand.push('The Magician');
  await ExpeditionEngine.enterNode(2, wordBank);
  await ExpeditionEngine.castTacticalTarot('The Magician');
  assert.strictEqual(session9.activeEncounter.assistanceLevel, 4, '魔术师排障标准化为 Level 4 援助');

  const assistedWrong = (session9.activeEncounter.correctIndex + 1) % 4;
  const assistedWrongRes = await ExpeditionEngine.submitAnswer(assistedWrong);
  assert.strictEqual(assistedWrongRes.dataLog.stubborn_error, true, '使用强力辅助仍答错，标记为 stubborn_error 顽固错误');
  assert.strictEqual(session9.recentErrors[session9.recentErrors.length - 1].stubborn, true, '错词复盘档案中亦完整标记 stubborn');
  console.log('  ✅ PASS: 0~6 级辅助等级标准化、保底金币与学习能力解耦评估验证通过');

  // ------------------------------------------------------------
  // 测试 17：灰血 30% 上限压制 (Gray HP <= 30) 防无限套利测试
  // ------------------------------------------------------------
  console.log('\n【测试 17/18】灰血 30% 上限压制 (Gray HP <= 30) 防无限套利测试:');
  const session10 = await ExpeditionEngine.startExpedition({ hp: 60, grayHp: 28, san: 100, battleHand: [] }, 667788);
  session10.nodes[0].status = 'available';
  await ExpeditionEngine.enterNode(1, wordBank);

  // 在已有 28 点灰血前提下答错 (原本产生 4 点灰血)
  const wrongSettle1 = await ExpeditionEngine.submitAnswer((session10.activeEncounter.correctIndex + 1) % 4);
  assert.strictEqual(session10.grayHp, 30, '灰血严格被压制在 30% MaxHP 上限 (30 点)');
  assert.strictEqual(wrongSettle1.deltaGrayHp, 2, '增量灰血仅补齐至上限 (2 点)');

  // 再次故意答错
  session10.nodes[1].status = 'available';
  await ExpeditionEngine.enterNode(2, wordBank);
  const wrongSettle2 = await ExpeditionEngine.submitAnswer((session10.activeEncounter.correctIndex + 1) % 4);
  assert.strictEqual(session10.grayHp, 30, '再次失误灰血仍被死死锁在 30 点封顶');
  assert.strictEqual(wrongSettle2.deltaGrayHp, 0, '达到上限后不再产生任何额外灰血');
  console.log('  ✅ PASS: 30% 灰血天花板严格封闭无限自愈套利数学漏洞');

  // ------------------------------------------------------------
  // 测试 18：标准 10 字段数据流规范封存与挂起安全测试
  // ------------------------------------------------------------
  console.log('\n【测试 18/18】标准 10 字段数据流规范封存与挂起安全测试:');
  assert.ok(Array.isArray(session10.encounterLogs), '会话必须维护 encounterLogs 数据流');
  const lastLog = session10.encounterLogs[session10.encounterLogs.length - 1];
  const requiredFields = [
    'encounter_id', 'sense_id', 'encounter_type', 'attempt_index',
    'assistance_level', 'ability_tags', 'gray_hp_generated',
    'gray_hp_recovered', 'base_gold', 'challenge_bonus'
  ];
  requiredFields.forEach(field => {
    assert.ok(field in lastLog, `数据流日志必须包含规范字段 [${field}]`);
  });
  assert.strictEqual(typeof lastLog.ability_tags, 'object', 'ability_tags 必须为对象映射');
  console.log('  ✅ PASS: 标准 10 字段全链路数据流规范与挂起安全完全达标');

  console.log('\n================================================================');
  console.log('🎉 统一远征状态机与事件引擎全场景单测 100% 全部通过 (18/18 PASSED)!');
  console.log('================================================================\n');
}

runTests().catch(err => {
  console.error('❌ 测试失败:', err);
  process.exit(1);
});
