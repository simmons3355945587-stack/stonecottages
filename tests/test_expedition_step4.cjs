const assert = require('assert');

console.log('================================================================');
console.log('🗺️ 统一远征模式第四阶段全场景单元测试 (Step 4 Test Suite)');
console.log('================================================================\n');

// 模拟本地存储环境
const mockStorage = {};
global.StoneStorage = {
  getItem: k => mockStorage[k] || null,
  setItem: (k, v) => { mockStorage[k] = String(v); },
  removeItem: k => { delete mockStorage[k]; }
};
global.localStorage = global.StoneStorage;

const ExpeditionEngine = require('../frontend/expedition-engine.js');
const Cottage = require('../frontend/cottage.js');

async function runStep4Tests() {
  // ------------------------------------------------------------
  // 测试 1：风语哨站 (听力节点) 生成与属性考查
  // ------------------------------------------------------------
  console.log('【测试 1/5】风语哨站 (Listening Outpost) 拓扑与音频考点检验:');
  const profile = {
    hp: 100,
    grayHp: 0,
    san: 100,
    gold: 150,
    battleHand: ['The Magician', 'The Hermit', 'Death', 'Justice']
  };

  const session = await ExpeditionEngine.startExpedition(profile, 88888);
  const listeningNode = session.nodes.find(n => n.id === 3);
  assert(listeningNode, '节点 3 必须存在');
  assert.strictEqual(listeningNode.type, 'listening', '节点 3 类型必须为 listening');
  assert.strictEqual(listeningNode.isListening, true, '节点 3 必须标记 isListening 为 true');
  assert.strictEqual(listeningNode.rewardGold, 30, '听力哨站必须给予丰厚金币');

  // 解锁并踏入听力哨站
  listeningNode.status = 'available';
  const entry = await ExpeditionEngine.enterNode(3, [{
    word: 'resilience',
    phonetic: '/rɪˈzɪliəns/',
    translation: '韧性；复原力',
    story: 'Her mental resilience carried her through the winter.',
    options: ['韧性；复原力', '易碎脆弱', '粗暴对待', '漠不关心'],
    correctIndex: 0
  }]);

  assert.strictEqual(entry.encounter.isListening, true, '听力哨站遭遇必须标记 isListening: true');
  assert.strictEqual(entry.encounter.word, 'resilience', '考点单词必须固化为 resilience');
  console.log('  ✅ PASS: 风语听力哨站成功生成，音频考点与高额赏金机制完备');

  // ------------------------------------------------------------
  // 测试 2：遭遇战内战术塔罗即时施放 (50/50 排除、线索、复活金牌)
  // ------------------------------------------------------------
  console.log('\n【测试 2/5】遭遇战战术塔罗即时施放与干扰排除测试:');
  // 施放魔术师：排除 2 个错误项
  const tarotRes1 = await ExpeditionEngine.castTacticalTarot('The Magician');
  assert.strictEqual(tarotRes1.success, true, '魔术师施放必须成功');
  assert.strictEqual(tarotRes1.action, 'eliminate_wrong', '动作类型必须为 eliminate_wrong');
  assert.strictEqual(tarotRes1.eliminatedIndices.length, 2, '必须排除 2 个错误选项索引');
  assert(!tarotRes1.eliminatedIndices.includes(entry.encounter.correctIndex), '排除项绝对不能包含正确选项');
  assert(!session.battleHand.includes('The Magician'), '施放后魔术师卡牌必须从当前手牌扣除');

  // 施放隐者：求索线索
  const tarotRes2 = await ExpeditionEngine.castTacticalTarot('The Hermit');
  assert.strictEqual(tarotRes2.success, true, '隐者施放必须成功');
  assert.strictEqual(tarotRes2.action, 'hint', '动作类型必须为 hint');
  assert(entry.encounter.hintText.includes('韧性'), '隐者线索必须包含考点中文释义提示');

  // 施放死神：赋予免死金牌
  const tarotRes3 = await ExpeditionEngine.castTacticalTarot('Death');
  assert.strictEqual(tarotRes3.success, true, '死神牌施放必须成功');
  assert.strictEqual(session.hasReviveBuff, true, '必须获得免死涅槃状态');
  console.log('  ✅ PASS: 遭遇战塔罗即时出牌机制成立，50/50 排除、线索浮现与手牌消耗 100% 正确');

  // ------------------------------------------------------------
  // 测试 3：死神免死金牌涅槃生效测试
  // ------------------------------------------------------------
  console.log('\n【测试 3/5】死神【绝境涅槃】免死金牌触发测试:');
  session.hp = 5; // 设置濒死血量
  // 故意答错
  const wrongIdx = (entry.encounter.correctIndex + 1) % 4;
  const answerRes = await ExpeditionEngine.submitAnswer(wrongIdx);
  assert.strictEqual(answerRes.deathSaved, true, '受致命伤时死神牌必须触发救场涅槃');
  assert.strictEqual(session.hp, 30, '涅槃后生命值必须重置回 30 HP');
  assert.strictEqual(session.hasReviveBuff, false, '免死金牌消耗后必须失效');
  assert.strictEqual(session.status, 'in_progress', '涅槃后远征状态保持进行中');
  console.log('  ✅ PASS: 濒死致命伤判定触发死神涅槃，生命成功保底且继续推进');

  // ------------------------------------------------------------
  // 测试 4：荒原绝境迷失 (Collapse) 搜救惩罚与战利品结算
  // ------------------------------------------------------------
  console.log('\n【测试 4/5】荒原绝境迷失惩罚与战力结算测试:');
  // 踏入节点 5
  session.nodes.find(n => n.id === 5).status = 'available';
  await ExpeditionEngine.enterNode(5);
  session.hp = 4;
  // 此时无死神牌，再次故意答错使生命归零
  const wrongIdx2 = (session.activeEncounter.correctIndex + 1) % 4;
  const collapseRes = await ExpeditionEngine.submitAnswer(wrongIdx2);
  assert.strictEqual(collapseRes.defeated, true, '生命彻底耗尽判定绝境迷失');
  assert.strictEqual(session.status, 'defeated', '会话状态标记为 defeated');

  session.goldEarned = 100; // 假设收集了 100 Gold
  session.xpEarned = 160;
  const summary = await ExpeditionEngine.conclude('defeated');
  assert.strictEqual(summary.outcomeType, 'defeated', '结算类型为 defeated');
  assert.strictEqual(summary.finalGold, 50, '迷失惩罚必须扣减 50% 携带金币');
  assert.strictEqual(summary.finalXp, 160, '已获得经验必须 100% 完整保留');
  console.log('  ✅ PASS: 荒原迷失惩罚机制严密，扣除 50% 临时金币但经验与学习成果完整留存');

  // ------------------------------------------------------------
  // 测试 5：石屋书桌【荒原探险手记 (Expedition Chronicles)】档案存取与桥接
  // ------------------------------------------------------------
  console.log('\n【测试 5/5】石屋书桌荒原探险手记与错词直通车测试:');
  const chronicles = ExpeditionEngine.getChronicles();
  assert(chronicles.stats.totalRuns >= 1, '总出征次数必须累积记录');
  assert(chronicles.stats.collapses >= 1, '迷失记录必须计入统计看板');
  assert(chronicles.history.length >= 1, '历次远征战报卷轴必须持久化存储');
  assert.strictEqual(chronicles.history[0].outcomeType, 'defeated');
  assert.strictEqual(chronicles.history[0].goldEarned, 50);

  // 模拟石屋书桌手记切换 Tab 与错词研习
  let navViewTarget = '';
  global.switchNavView = async (v) => { navViewTarget = v; };
  let toastMsg = '';
  global.showToast = (msg) => { toastMsg = msg; };
  global.window = global;
  global.document = {
    getElementById: (id) => ({
      classList: { add: () => {}, remove: () => {} },
      style: {},
      value: '',
      textContent: ''
    })
  };

  await Cottage.startSafeStudyWithErrors(['resilience']);
  assert.strictEqual(navViewTarget, 'words', '必须直通小石屋书架生词库');
  assert(toastMsg.includes('安全研习绝不扣除 HP 与 SAN'), '必须给予 0 HP / 0 SAN 纯安全研习承诺');
  console.log('  ✅ PASS: 石屋书桌出征手记档案原子入库，错词安全研习桥接 100% 无缝');

  console.log('\n================================================================');
  console.log('🎉 统一远征模式第四阶段全部 5 项深度测试 100% 全部通过 (5/5 PASSED)!');
  console.log('================================================================\n');
  process.exit(0);
}

runStep4Tests().catch(err => {
  console.error('❌ Step 4 Tests Failed:', err);
  process.exit(1);
});
