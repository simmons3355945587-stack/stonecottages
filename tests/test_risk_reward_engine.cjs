const path = require('path');
const RiskRewardEngine = require('../frontend/risk-reward-engine.js');

console.log("==================================================");
console.log("🚀 RiskRewardEngine 算法规范与数学模型 自动化严格单元测试");
console.log("==================================================\n");

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✅ PASS: ${message}`);
    passed++;
  } else {
    console.error(`  ❌ FAIL: ${message}`);
    failed++;
    throw new Error(`断言失败: ${message}`);
  }
}

// ----------------------------------------------------
// 测试 1: B12 官方文档黄金基准算例完全复现
// ----------------------------------------------------
console.log("【测试 1/6】文档 B12 官方黄金基准算例对齐测试:");
const profileB12 = {
  theta_long: 0.70,
  theta_session: 0.30,
  answer_count: 120
};
const itemB12 = {
  target_word: 'vacant',
  base_difficulty: 0.20,
  distractor_difficulty: 0.35,
  context_difficulty: 0.10,
  mode_difficulty: 0.0,
  empirical_offset: -0.05,
  base_gold: 20
};

const resultB12 = RiskRewardEngine.evaluateQuestion(profileB12, itemB12);

assert(Math.abs(resultB12.theta_effective - 0.64) < 1e-4, `theta_effective 预期 0.64, 实际 ${resultB12.theta_effective}`);
assert(Math.abs(resultB12.d_actual - 0.60) < 1e-4, `d_actual 预期 0.60, 实际 ${resultB12.d_actual}`);
assert(Math.abs(resultB12.p_correct - 0.51) < 0.005, `p_correct 预期 ~0.51, 实际 ${resultB12.p_correct.toFixed(4)}`);
assert(resultB12.m_challenge === 1.50, `m_challenge 预期 1.50, 实际 ${resultB12.m_challenge}`);
assert(resultB12.confidence === 0.85, `confidence 预期 0.85 (120题区间), 实际 ${resultB12.confidence}`);
assert(Math.abs(resultB12.m_final - 1.425) < 1e-4, `m_final 预期 1.425, 实际 ${resultB12.m_final}`);
assert(Math.abs(resultB12.final_reward - 28.5) < 1e-4, `final_reward 预期 28.5 Gold, 实际 ${resultB12.final_reward}`);

// ----------------------------------------------------
// 测试 2: A6 分段倍率表区间全覆盖测试 (单峰钟形心流曲线)
// ----------------------------------------------------
console.log("\n【测试 2/6】A6 分段倍率区间覆盖测试 (单峰心流惩罚虐菜与盲猜):");
const tierCases = [
  { p: 0.95, expectedM: 0.80, tag: 'easy' },
  { p: 0.85, expectedM: 1.00, tag: 'light' },
  { p: 0.72, expectedM: 1.30, tag: 'optimal' },
  { p: 0.58, expectedM: 1.50, tag: 'peak' },
  { p: 0.42, expectedM: 1.35, tag: 'boundary' },
  { p: 0.20, expectedM: 1.00, tag: 'out_of_bounds' }
];

tierCases.forEach(tc => {
  const tier = RiskRewardEngine.getChallengeTier(tc.p);
  assert(tier.multiplier === tc.expectedM && tier.tag === tc.tag, `胜率 p=${tc.p} -> 倍率 ${tier.multiplier}× (预期 ${tc.expectedM}×, 标签: ${tier.label})`);
});

// ----------------------------------------------------
// 测试 3: A7 置信度收缩平滑测试
// ----------------------------------------------------
console.log("\n【测试 3/6】A7 置信度阻尼收缩阶梯测试 (冷启动保护):");
const confCases = [
  { count: 5,   expectedConf: 0.20 },
  { count: 19,  expectedConf: 0.20 },
  { count: 20,  expectedConf: 0.45 },
  { count: 49,  expectedConf: 0.45 },
  { count: 50,  expectedConf: 0.70 },
  { count: 99,  expectedConf: 0.70 },
  { count: 100, expectedConf: 0.85 },
  { count: 199, expectedConf: 0.85 },
  { count: 200, expectedConf: 1.00 },
  { count: 500, expectedConf: 1.00 }
];

confCases.forEach(cc => {
  const c = RiskRewardEngine.getConfidence(cc.count);
  assert(c === cc.expectedConf, `答题数 ${cc.count} -> 置信度 ${c} (预期 ${cc.expectedConf})`);
});

// 验证新手期 0.20 置信度下，1.50× 峰值被平滑收缩到 1.10×
const dampedEarly = RiskRewardEngine.calculateFinalMultiplier(1.50, 0.20);
assert(Math.abs(dampedEarly - 1.10) < 1e-4, `冷启动 1.50× 峰值应收缩至 1.10×, 实际: ${dampedEarly}`);

// ----------------------------------------------------
// 测试 4: A8 & A9 在线能力与题目经验偏移更新测试
// ----------------------------------------------------
console.log("\n【测试 4/6】A8 & A9 在线双层能力与题目经验难度更新测试:");
const currentProfile = {
  theta_long: 0.50,
  theta_session: 0.50,
  answer_count: 50
};
const currentItem = {
  empirical_offset: 0.0
};
// 假设胜率 p = 0.51，答对 (y = 1) -> residual = 0.49
const updateWin = RiskRewardEngine.updateState(currentProfile, currentItem, true, { p_correct: 0.51 });
assert(updateWin.profile_update.theta_long > currentProfile.theta_long, `答对后长期能力提升 (旧 0.50 -> 新 ${updateWin.profile_update.theta_long})`);
assert(updateWin.profile_update.theta_session > updateWin.profile_update.theta_long, `本局状态敏感度高于长期能力 (session=${updateWin.profile_update.theta_session} > long=${updateWin.profile_update.theta_long})`);
assert(updateWin.item_update.empirical_offset < 0.0, `玩家答对后，题目经验难度被调低 (新偏移: ${updateWin.item_update.empirical_offset})`);
assert(updateWin.profile_update.answer_count === 51, `答题计数器自增 (预期 51, 实际 ${updateWin.profile_update.answer_count})`);

// 假设胜率 p = 0.51，答错 (y = 0) -> residual = -0.51
const updateLose = RiskRewardEngine.updateState(currentProfile, currentItem, false, { p_correct: 0.51 });
assert(updateLose.profile_update.theta_long < currentProfile.theta_long, `答错后能力适度微降 (新 long=${updateLose.profile_update.theta_long})`);
assert(updateLose.item_update.empirical_offset > 0.0, `玩家答错后，题目经验难度被调高 (新偏移: ${updateLose.item_update.empirical_offset})`);

// ----------------------------------------------------
// 测试 5: A10 SAN 污染度对题目干扰项难度的映射
// ----------------------------------------------------
console.log("\n【测试 5/6】A10 SAN 污染度映射测试 (SAN 仅改变干扰度，不直接给钱):");
assert(RiskRewardEngine.getSanDistractorDifficulty(100) === 0.0, 'SAN=100 (清醒) -> 干扰难度 +0.0');
assert(RiskRewardEngine.getSanDistractorDifficulty(60) === 0.15, 'SAN=60 (微晕) -> 干扰难度 +0.15');
assert(RiskRewardEngine.getSanDistractorDifficulty(35) === 0.25, 'SAN=35 (错乱) -> 干扰难度 +0.25');
assert(RiskRewardEngine.getSanDistractorDifficulty(10) === 0.35, 'SAN=10 (谵妄) -> 干扰难度 +0.35 (极难混淆项)');

// ----------------------------------------------------
// 测试 6: A11 自适应安全护栏测试
// ----------------------------------------------------
console.log("\n【测试 6/6】A11 自适应安全护栏测试 (防止越级与连续暴毙):");
const railEasy = RiskRewardEngine.checkSafetyRails(0.88);
assert(railEasy.allowHarder === true && railEasy.fallback === false, `p=0.88 允许提升难度`);

const railOptimal = RiskRewardEngine.checkSafetyRails(0.68);
assert(railOptimal.allowHarder === false && railOptimal.fallback === false, `p=0.68 保持心流状态`);

const railFallback = RiskRewardEngine.checkSafetyRails(0.28);
assert(railFallback.fallback === true, `p=0.28 触发自适应护栏降级 (fallback = true)`);

console.log("\n==================================================");
console.log(`🎉 全部 ${passed} 项算法断言 100% 通过！文档规范零误差实现！`);
console.log("==================================================");
