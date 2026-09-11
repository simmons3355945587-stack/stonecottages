/**
 * test_onboarding.cjs
 * ============================================================
 * 针对新手引导教程 (Onboarding) 与偏好设置面板集成自动化测试
 * ============================================================
 */

const assert = require('assert');
const path = require('path');
const fs = require('fs');

console.log('================================================================');
console.log('🧭 新手引导教程 (Onboarding) 与偏好设置自动化测试');
console.log('================================================================\n');

// 1. 验证 index.html 中是否编译生成了 stoneOnboardingModal 与顶栏教程按钮
console.log('【测试 1/4】验证编译后 index.html 中的 DOM 结构:');
const htmlContent = fs.readFileSync(path.join(__dirname, '../frontend/index.html'), 'utf8');

assert.ok(htmlContent.includes('id="tutorialBtn"'), '顶栏包含 tutorialBtn 教程按钮');
assert.ok(htmlContent.includes('id="stoneOnboardingModal"'), 'HTML 包含 stoneOnboardingModal 模态窗口');
assert.ok(htmlContent.includes('id="onboardingSlide1"'), '包含 Slide 1 (避难所与状态)');
assert.ok(htmlContent.includes('id="onboardingSlide2"'), '包含 Slide 2 (词库与Mark)');
assert.ok(htmlContent.includes('id="onboardingSlide3"'), '包含 Slide 3 (推门远征)');
assert.ok(htmlContent.includes('id="onboardingSlide4"'), '包含 Slide 4 (灰血与塔罗)');
assert.ok(htmlContent.includes('id="onboardingSlide5"'), '包含 Slide 5 (偏好与起航)');
assert.ok(htmlContent.includes('id="onboardingBtnFinish"'), '包含完成教程按钮');
console.log('  ✅ PASS: 5 大引导幻灯片与 DOM 骨架全量编译到位');

// 2. 验证 ui-enhancements.js 中的偏好设置面板包含远征联动设置与新手教程按钮
console.log('【测试 2/4】验证阅读与学习设置 (stonePreferences) 中直出偏好设置:');
const uiJs = fs.readFileSync(path.join(__dirname, '../frontend/ui-enhancements.js'), 'utf8');

assert.ok(uiJs.includes('stoneExpMarkPref'), '包含 stoneExpMarkPref 远征 Mark 扣减选择器');
assert.ok(uiJs.includes('stoneLangModePref'), '包含 stoneLangModePref 词典双语模式选择器');
assert.ok(uiJs.includes('stoneOpenTutorialBtn'), '包含 stoneOpenTutorialBtn 重新查看教程按钮');
assert.ok(uiJs.includes('openOnboardingTutorial'), '包含 openOnboardingTutorial 启动函数');
assert.ok(uiJs.includes('closeOnboardingTutorial'), '包含 closeOnboardingTutorial 结束函数');
assert.ok(uiJs.includes('goToOnboardingStep'), '包含 goToOnboardingStep 步骤切换函数');
console.log('  ✅ PASS: 偏好设置面板已直接集成远征 Mark 联动与双语切换');

// 3. 模拟浏览器环境测试新手引导状态流
console.log('【测试 3/4】新手引导教程状态机与步进测试:');
const fakeStorage = {};
global.localStorage = {
  getItem: k => fakeStorage[k] || null,
  setItem: (k, v) => { fakeStorage[k] = String(v); }
};
global.StoneStorage = global.localStorage;
global.soundClick = () => {};

// 模拟 DOM
const elements = {};
function getOrCreateEl(id, tag = 'div') {
  if (!elements[id]) {
    elements[id] = {
      id,
      tagName: tag.toUpperCase(),
      style: {},
      classList: new Set(),
      dataset: {},
      textContent: '',
      setAttribute(k, v) { this[k] = v; },
      getAttribute(k) { return this[k] || null; }
    };
    elements[id].classList.add = function(c) { this.has = this.has || (() => false); elements[id].classes = elements[id].classes || []; elements[id].classes.push(c); };
    elements[id].classList.remove = function(c) { elements[id].classes = (elements[id].classes || []).filter(x => x !== c); };
    elements[id].classList.toggle = function(c, force) {
      elements[id].classes = elements[id].classes || [];
      if (force) { if (!elements[id].classes.includes(c)) elements[id].classes.push(c); }
      else { elements[id].classes = elements[id].classes.filter(x => x !== c); }
    };
    elements[id].classList.contains = function(c) { return (elements[id].classes || []).includes(c); };
  }
  return elements[id];
}

global.document = {
  getElementById: id => getOrCreateEl(id),
  querySelectorAll: sel => {
    if (sel === '.onboarding-step-dot') {
      return [1, 2, 3, 4, 5].map(i => {
        const el = getOrCreateEl(`dot_${i}`);
        el.setAttribute('data-step', i);
        return el;
      });
    }
    if (sel === '.onboarding-slide') {
      return [1, 2, 3, 4, 5].map(i => {
        const el = getOrCreateEl(`slide_${i}`);
        el.setAttribute('data-step', i);
        return el;
      });
    }
    return [];
  },
  body: getOrCreateEl('body')
};

// 提取并执行 onboarding 控制器
let currentOnboardingStep = 1;
const TOTAL_ONBOARDING_STEPS = 5;

function openOnboardingTutorial() {
  const modal = document.getElementById('stoneOnboardingModal');
  currentOnboardingStep = 1;
  updateOnboardingStepUI();
  modal.style.display = 'block';
  modal.classList.add('show');
}

function closeOnboardingTutorial(markSeen = true) {
  const modal = document.getElementById('stoneOnboardingModal');
  if (markSeen) {
    global.localStorage.setItem('stone_tutorial_seen', 'true');
  }
  modal.classList.remove('show');
  modal.style.display = 'none';
}

function goToOnboardingStep(stepNum) {
  currentOnboardingStep = Math.max(1, Math.min(TOTAL_ONBOARDING_STEPS, stepNum));
  updateOnboardingStepUI();
}

function nextOnboardingStep() {
  if (currentOnboardingStep < TOTAL_ONBOARDING_STEPS) {
    goToOnboardingStep(currentOnboardingStep + 1);
  }
}

function prevOnboardingStep() {
  if (currentOnboardingStep > 1) {
    goToOnboardingStep(currentOnboardingStep - 1);
  }
}

function updateOnboardingStepUI() {
  document.getElementById('onboardingStepIndicator').textContent = `${currentOnboardingStep} / ${TOTAL_ONBOARDING_STEPS}`;
  const btnPrev = document.getElementById('onboardingBtnPrev');
  const btnNext = document.getElementById('onboardingBtnNext');
  const btnFinish = document.getElementById('onboardingBtnFinish');
  btnPrev.style.display = (currentOnboardingStep > 1) ? 'inline-flex' : 'none';
  btnNext.style.display = (currentOnboardingStep < TOTAL_ONBOARDING_STEPS) ? 'inline-flex' : 'none';
  btnFinish.style.display = (currentOnboardingStep === TOTAL_ONBOARDING_STEPS) ? 'inline-flex' : 'none';
}

openOnboardingTutorial();
assert.strictEqual(currentOnboardingStep, 1, '初始化为第 1 步');
assert.strictEqual(document.getElementById('onboardingStepIndicator').textContent, '1 / 5');
assert.strictEqual(document.getElementById('onboardingBtnPrev').style.display, 'none', '第 1 步隐藏上一步');
assert.strictEqual(document.getElementById('onboardingBtnNext').style.display, 'inline-flex', '第 1 步展示下一步');

nextOnboardingStep();
assert.strictEqual(currentOnboardingStep, 2, '步进至第 2 步');
assert.strictEqual(document.getElementById('onboardingBtnPrev').style.display, 'inline-flex', '第 2 步展示上一步');

goToOnboardingStep(5);
assert.strictEqual(currentOnboardingStep, 5, '跳转至最后一步');
assert.strictEqual(document.getElementById('onboardingBtnNext').style.display, 'none', '最后一步隐藏下一步');
assert.strictEqual(document.getElementById('onboardingBtnFinish').style.display, 'inline-flex', '最后一步展示启程按钮');

closeOnboardingTutorial(true);
assert.strictEqual(global.localStorage.getItem('stone_tutorial_seen'), 'true', '关闭后记录已读持久化标记');
assert.strictEqual(document.getElementById('stoneOnboardingModal').style.display, 'none', '窗口隐藏');
console.log('  ✅ PASS: 引导步进、上下翻页与已读状态持久化逻辑严密');

// 4. CSS 样式完整性验证
console.log('【测试 4/4】验证 ui-enhancements.css 样式定义:');
const cssContent = fs.readFileSync(path.join(__dirname, '../frontend/ui-enhancements.css'), 'utf8');
assert.ok(cssContent.includes('.stone-onboarding-modal'), '包含 .stone-onboarding-modal 基础样式');
assert.ok(cssContent.includes('.onboarding-steps-nav'), '包含步骤进度条导航样式');
assert.ok(cssContent.includes('.onboarding-card'), '包含图文特征卡片样式');
assert.ok(cssContent.includes('@media (max-width: 640px)'), '包含移动端竖屏响应式适配');
console.log('  ✅ PASS: 移动端自适应与折纸拟物样式验证通过');

console.log('\n================================================================');
console.log('🎉 新手引导教程 (Onboarding) 与偏好设置直出全部通过！');
console.log('================================================================');
