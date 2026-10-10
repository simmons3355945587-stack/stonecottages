const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

function setup(fetchImpl, options={}) {
  const elements = new Map();
  const storage = new Map();
  let marks = 0;
  const context = {
    window: {}, document: {readyState:'loading',addEventListener(){},getElementById(id){return elements.get(id)||null}},
    localStorage:{getItem:k=>storage.get(k),setItem:(k,v)=>storage.set(k,v),removeItem:k=>storage.delete(k)},
    console, AbortController, AbortSignal, crypto:require('node:crypto'), performance, setTimeout, clearTimeout,
    chineseDict:{reunite:'重聚；重新统一'},
    fetch:fetchImpl, escapeHtml:String, addMark(){marks++}, reduceMark(){marks--}, getMarkCount(){return marks}, appSettings:{dictLanguageMode:"zh"},
  };
  Object.assign(context,options);
  vm.createContext(context);
  let code = readFileSync(process.env.FLASHCARD_SOURCE || path.join(__dirname,'..','frontend','flashcard.js'),'utf8').replace(/\r\n/g,'\n');
  code = code.replace('  return {\n    resumeCloudSession,', '  window.__test={state,judgmentGate,verifyLocally,verifyWithJev,applyEvaluationResult,initQueue,renderFinishedState,getStudyScopeKey};\n  return {\n    resumeCloudSession,');
  vm.runInContext(code, context);
  context.window.__test.state.currentWord='reunite';
  context.window.__test.state.isOpen=true;
  context.window.__test.state.queue=['reunite','space'];
  return {...context.window.__test,engine:context.window.FlashcardEngine,elements,storage,marks:()=>marks};
}

test('confidence gate rejects all low, missing, malformed values in either direction',()=>{
  const {judgmentGate}=setup();
  for(const confidence of [0,.5,.8999,undefined,null,'0.95',NaN,Infinity,1.01,-1]) {
    for(const correct of [true,false]) assert.equal(judgmentGate({confidence,correct},'重聚').verdict,'UNCERTAIN');
  }
  for(const confidence of [.9,1]) {
    assert.equal(judgmentGate({confidence,correct:true},'重聚').verdict,'ACCEPT');
    assert.equal(judgmentGate({confidence,correct:false},'重聚').verdict,'REJECT');
  }
  assert.equal(judgmentGate({confidence:1},'重聚').verdict,'UNCERTAIN');
  assert.equal(judgmentGate({confidence:1,correct:false},'').verdict,'UNCERTAIN');
});
test('uncertain causes no learning or mark mutations',()=>{
  const h=setup();
  h.applyEvaluationResult({correct:false,confidence:.82},'重新联合',['v'],'重聚；重新统一');
  assert.equal(h.state.todayStats.completed,0);
  assert.equal(h.state.todayStats.wrong,0);
  assert.equal(h.state.learnedWords.size,0);
  assert.equal(h.marks(),0);
});
test('rendering the result again and duplicate submission cannot commit twice',()=>{
  const h=setup(); const result={correct:false,confidence:.95};
  h.applyEvaluationResult(result,'错误',[],'重聚');
  h.applyEvaluationResult(result,'错误',[],'重聚',true);
  h.applyEvaluationResult(result,'错误',[],'重聚');
  assert.equal(h.state.todayStats.completed,1);
  assert.equal(h.state.todayStats.wrong,1);
  assert.equal(h.marks(),1);
});
test('explicit unknown shows reference without automatically adding Mark',()=>{
  const h=setup();
  h.applyEvaluationResult({correct:false,confidence:0,source:'unknown_giveup',isUnknown:true},'?',[],'重聚');
  assert.equal(h.marks(),0);
});
test('confident rejection automatically adds exactly one Mark',()=>{
  const h=setup();
  h.applyEvaluationResult({correct:false,confidence:1},'错误',[],'重聚');
  h.applyEvaluationResult({correct:false,confidence:1},'错误',[],'重聚');
  assert.equal(h.marks(),1);
  assert.equal(h.state.todayStats.wrong,1);
});
test('local exact matching does not accept negations or substrings',()=>{
  const {verifyLocally}=setup();
  assert.equal(verifyLocally('reunite','重聚',['v'],'重聚；重新统一').correct,true);
  for(const input of ['不重聚','统一','重新联合']) assert.equal(verifyLocally('reunite',input,['v'],'重聚；重新统一'),null);
  assert.equal(verifyLocally('reunite','重聚',['n'],'v. 重聚'),null);
});
test('missing reference POS is not sent as a grading dimension; no correct inferred from confidence',async()=>{
  let body;
  const h=setup(async(url,options)=>{body=JSON.parse(options.body);return {ok:true,json:async()=>({confidence:.99})}});
  const result=await h.verifyWithJev('reunite','重新联合',['v'],'重聚；重新统一');
  assert.equal(body.user_selected_pos,'未指定');
  assert.equal(result.verdict,'UNCERTAIN');
});
test('network failure in submit does not count as incorrect',async()=>{
  const h=setup(async()=>{throw Error('offline')});
  h.elements.set('fcInput',{value:'重新联合'});
  await h.engine.submitAnswer();
  assert.equal(h.state.lastResult.verdict,'UNCERTAIN');
  assert.equal(h.marks(),0);
});
test('closing during a pending request prevents committing its late result',async()=>{
  let resolve;
  const h=setup(()=>new Promise(r=>{resolve=r}));
  h.elements.set('fcInput',{value:'重新联合'});
  const pending=h.engine.submitAnswer();
  h.engine.close();
  resolve({ok:true,json:async()=>({correct:false,confidence:.99,probability_correct:.01,verdict:'REJECT',contract_version:2})});
  await pending;
  assert.equal(h.state.todayStats.completed,0);
  assert.equal(h.marks(),0);
});
test('uncertain display is neutral and missing POS is not fabricated',()=>{
  const h=setup();
  const panel={style:{},innerHTML:''};
  const classes=[];
  h.elements.set('fcResultPanel',panel);
  h.elements.set('flashcardBox',{classList:{remove(){},add(value){classes.push(value)}}});
  h.applyEvaluationResult({correct:false,confidence:.82},'重新联合',['v'],'重聚；重新统一');
  assert.match(panel.innerHTML,/暂不判定（不计对错）/);
  assert.match(panel.innerHTML,/暂无标注（词性不参与判定）/);
  assert.deepEqual(classes,[]);
});
test('server probability contract supports both confident directions and abstains between',async()=>{
  for (const [probability,verdict,correct] of [[.05,'REJECT',false],[.1,'REJECT',false],[.6,'UNCERTAIN',null],[.89,'UNCERTAIN',null],[.9,'ACCEPT',true],[.99,'ACCEPT',true]]) {
    const h=setup(async()=>({ok:true,json:async()=>({contract_version:2,probability_correct:probability,verdict,correct})}));
    const result=await h.verifyWithJev('reunite','重新联合',['v'],'重聚；重新统一');
    assert.equal(result.verdict,verdict);
    assert.equal(result.correct,correct);
  }
});
test('contradictory server contract cannot commit',async()=>{
  const h=setup(async()=>({ok:true,json:async()=>({contract_version:2,probability_correct:.6,verdict:'REJECT',correct:false,confidence:.99})}));
  assert.equal((await h.verifyWithJev('reunite','重新联合',[],'重聚')).verdict,'UNCERTAIN');
});
test('manual plus adds once, undo removes only this addition and can add again',()=>{
  const h=setup();
  h.engine.addCurrentMark();
  h.engine.addCurrentMark();
  assert.equal(h.marks(),1);
  assert.equal(h.state.todayStats.completed,0);
  h.engine.undoCurrentMark();
  h.engine.undoCurrentMark();
  assert.equal(h.marks(),0);
  h.engine.addCurrentMark();
  assert.equal(h.marks(),1);
});
test('manual choice survives verdict, language switch, retry, close and resume',()=>{
  const h=setup();
  h.engine.addCurrentMark();
  h.applyEvaluationResult({correct:false,confidence:.99},'香蕉',[],'重聚');
  h.engine.toggleLanguageMode();
  h.engine.retryCurrent();
  h.engine.addCurrentMark();
  assert.equal(h.marks(),1);
  h.engine.close();
  h.engine.open();
  h.engine.addCurrentMark();
  assert.equal(h.marks(),1);
  h.engine.undoCurrentMark();
  assert.equal(h.marks(),0);
});
test('correct review answers preserve a manual Mark',()=>{
  const h=setup();
  h.state.mode='review';
  h.engine.addCurrentMark();
  h.applyEvaluationResult({correct:true,confidence:1},'重聚',[],'重聚');
  assert.equal(h.marks(),1);
  assert.equal(h.state.todayStats.correct,1);
});
test('uncertain answers may be explicitly marked without changing verdict or statistics',()=>{
  const h=setup();
  h.applyEvaluationResult({correct:false,confidence:.7},'重新联合',[],'重聚');
  h.engine.addCurrentMark();
  assert.equal(h.marks(),1);
  assert.equal(h.state.lastResult.verdict,'UNCERTAIN');
  assert.equal(h.state.todayStats.completed,0);
});
test('a rejected answer is automatically marked and exposes the normal next action',()=>{
  const h=setup();
  const panel={style:{},innerHTML:''};
  h.elements.set('fcResultPanel',panel);
  h.applyEvaluationResult({correct:false,confidence:1},'香蕉',[],'重聚');
  assert.match(panel.innerHTML,/下一个 \(Enter\)/);
  h.engine.nextWord();
  assert.equal(h.marks(),1);
});
test('existing marks are preserved when undoing the current manual addition',()=>{
  const h=setup();
  h.engine.addCurrentMark();
  // Simulate returning in a fresh card session: the mark is now historical.
  h.state.manualMarkBaselines.clear();
  h.engine.addCurrentMark();
  assert.equal(h.marks(),2);
  h.engine.undoCurrentMark();
  h.engine.undoCurrentMark();
  assert.equal(h.marks(),1);
});
test('controls update without submitting or clearing the typed answer',()=>{
  const h=setup();
  const input={value:'重新联合'};
  const add={disabled:false,textContent:''},undo={hidden:true,style:{}},status={textContent:''};
  h.elements.set('fcInput',input);
  h.elements.set('fcMarkAdd',add);
  h.elements.set('fcMarkUndo',undo);
  h.elements.set('fcMarkStatus',status);
  h.engine.addCurrentMark();
  assert.equal(input.value,'重新联合');
  assert.equal(h.state.isAnswered,false);
  assert.equal(add.disabled,true);
  assert.equal(undo.hidden,false);
  assert.match(status.textContent,/已手动加入/);
  h.engine.undoCurrentMark();
  assert.equal(add.disabled,false);
  assert.equal(undo.hidden,true);
});
test('fresh device restores an answered card without recounting it',async()=>{
  const d=new Date();const date=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  const data={learned:['space'],sequence:{},stats:{date,completed:3,correct:2,wrong:1,target:100},session:{date:'2020-01-01',mode:'study',targetCount:100,queue:['space','reunite'],currentIndex:1,isOpen:true,isAnswered:true,lastResult:{correct:false,confidence:1},userInput:'香蕉',selectedPos:['v'],manualMarkBaselines:[],queuePolicyVersion:2,studyScopeKey:'default:all:2:space:reunite',studyStartIndex:0}};
  const h=setup(async(url)=>({ok:true,json:async()=>url.includes('/api/dict')?{meanings:[]}:{revision:4,state:data,mutation_id:'a'}}),{
    authUser:{id:1},authToken:'test-token',requestAnimationFrame:fn=>fn(),setTimeout:()=>1,
  });
  h.elements.set('flashcardModal',{innerHTML:'',style:{},classList:{add(){}}});
  h.elements.set('fcResultPanel',{innerHTML:'',style:{}});
  h.elements.set('fcInput',{value:''});
  await h.engine.open();
  assert.equal(h.state.currentIndex,1);
  assert.equal(h.state.currentWord,'reunite');
  assert.equal(h.state.isAnswered,true);
  assert.equal(h.state.todayStats.completed,3);
  assert.equal(h.state.todayStats.wrong,1);
  assert.equal(h.elements.get('fcInput').value,'香蕉');
  assert.equal(h.state.learnedWords.has('space'),true);
});

test('pressing Enter after answer advances to the next card, Space pronounces, Esc closes', () => {
  let spoken = null;
  const h = setup(undefined, {
    speakWord: w => { spoken = w; },
    requestAnimationFrame: fn => fn(),
    setTimeout: fn => { if (typeof fn === 'function') fn(); return 1; }
  });
  h.state.queue = ['reunite', 'space'];
  h.state.currentIndex = 0;
  h.state.currentWord = 'reunite';
  h.state.isOpen = true;
  h.state.isAnswered = true;
  h.state.answeredAt = Date.now() - 200;

  let prevented = false, stopped = false;
  h.engine.handleFlashcardKeydown({
    key: 'Enter',
    preventDefault() { prevented = true; },
    stopPropagation() { stopped = true; }
  });
  assert.equal(prevented, true);
  assert.equal(stopped, true);
  assert.equal(h.state.currentIndex, 1);
  assert.equal(h.state.currentWord, 'space');
  assert.equal(h.state.isAnswered, false);

  let spacePrevented = false;
  h.engine.handleFlashcardKeydown({
    code: 'Space',
    key: ' ',
    preventDefault() { spacePrevented = true; }
  });
  assert.equal(spacePrevented, true);
  assert.equal(spoken, 'space');

  let escPrevented = false;
  h.engine.handleFlashcardKeydown({
    key: 'Escape',
    preventDefault() { escPrevented = true; }
  });
  assert.equal(escPrevented, true);
  assert.equal(h.state.isOpen, false);
});

test('keyboard shortcut + and = adds manual Mark after evaluation, - undos, and Enter advances', () => {
  const h = setup(undefined, {
    requestAnimationFrame: fn => fn(),
    setTimeout: fn => { if (typeof fn === 'function') fn(); return 1; }
  });
  h.state.queue = ['reunite', 'space'];
  h.state.currentIndex = 0;
  h.state.currentWord = 'reunite';
  h.state.isOpen = true;
  h.state.isAnswered = true;
  h.state.answeredAt = Date.now() - 200;

  assert.equal(h.marks(), 0);

  // 1. 按 + 键增加 Mark
  let plusPrevented = false, plusStopped = false;
  h.engine.handleFlashcardKeydown({
    key: '+',
    preventDefault() { plusPrevented = true; },
    stopPropagation() { plusStopped = true; }
  });
  assert.equal(plusPrevented, true);
  assert.equal(plusStopped, true);
  assert.equal(h.marks(), 1);
  assert.equal(h.state.manualMarkBaselines.has('reunite'), true);

  // 2. 再次按 + 键幂等去重（不会重复增加）
  h.engine.handleFlashcardKeydown({
    key: '+',
    preventDefault() {},
    stopPropagation() {}
  });
  assert.equal(h.marks(), 1);

  // 3. 按 - 键撤销本次 Mark
  let minusPrevented = false, minusStopped = false;
  h.engine.handleFlashcardKeydown({
    key: '-',
    preventDefault() { minusPrevented = true; },
    stopPropagation() { minusStopped = true; }
  });
  assert.equal(minusPrevented, true);
  assert.equal(minusStopped, true);
  assert.equal(h.marks(), 0);
  assert.equal(h.state.manualMarkBaselines.has('reunite'), false);

  // 4. 按 = 键（大键盘不按 Shift）再次增加 Mark
  h.engine.handleFlashcardKeydown({
    key: '=',
    code: 'Equal',
    preventDefault() {},
    stopPropagation() {}
  });
  assert.equal(h.marks(), 1);
  assert.equal(h.state.manualMarkBaselines.has('reunite'), true);

  // 5. 增加 Mark 后，点击 Enter 顺利切到下一张
  let enterPrevented = false, enterStopped = false;
  h.engine.handleFlashcardKeydown({
    key: 'Enter',
    preventDefault() { enterPrevented = true; },
    stopPropagation() { enterStopped = true; }
  });
  assert.equal(enterPrevented, true);
  assert.equal(enterStopped, true);
  assert.equal(h.state.currentIndex, 1);
  assert.equal(h.state.currentWord, 'space');
  assert.equal(h.state.isAnswered, false);
  // 上一张卡片增加的 Mark 依然保留在生词库中
  assert.equal(h.marks(), 1);
});

test('POS shortcuts 1~7 toggle part of speech pills, and + marks while the answer input retains focus', () => {
  const fakeInput = { offsetParent: {} };
  const doc = { activeElement: null, readyState: 'loading', addEventListener() {}, getElementById(id) { return id === 'fcInput' ? fakeInput : null; } };
  const h = setup(undefined, {
    document: doc,
    requestAnimationFrame: fn => fn(),
    setTimeout: fn => { if (typeof fn === 'function') fn(); return 1; }
  });
  h.state.queue = ['reunite', 'space'];
  h.state.currentIndex = 0;
  h.state.currentWord = 'reunite';
  h.state.isOpen = true;
  h.state.isAnswered = false;

  // 1. 非打字状态按 1 勾选 'n'，按 2 勾选 'v'
  h.engine.handleFlashcardKeydown({
    key: '1',
    preventDefault() {},
    stopPropagation() {}
  });
  assert.equal(h.state.selectedPos.join(','), 'n');

  h.engine.handleFlashcardKeydown({
    key: '2',
    preventDefault() {},
    stopPropagation() {}
  });
  assert.equal(h.state.selectedPos.join(','), 'n,v');

  // 再次按 1 取消勾选 'n'
  h.engine.handleFlashcardKeydown({
    key: '1',
    preventDefault() {},
    stopPropagation() {}
  });
  assert.equal(h.state.selectedPos.join(','), 'v');

  // 2. 模型暂不判定后，即使焦点仍在输入框，+ 也必须触发 Mark
  doc.activeElement = fakeInput;

  let plusPrevented = false;
  h.engine.handleFlashcardKeydown({
    key: '+',
    preventDefault() { plusPrevented = true; },
    stopPropagation() {}
  });
  assert.equal(plusPrevented, true);
  assert.equal(h.marks(), 1);
});

test('new-word groups follow vocabulary numbering instead of learned or Mark status',()=>{
  const full=Array.from({length:250},(_,i)=>`word${i+1}`);
  const h=setup(undefined,{getActiveWordList:()=>full,getMarkedWords:()=>[]});
  h.initQueue();
  assert.equal(h.state.studyStartIndex,0);
  assert.equal(h.state.queue[0],'word1');
  assert.equal(h.state.queue.at(-1),'word100');
  h.state.currentIndex=h.state.queue.length;
  h.renderFinishedState();
  h.initQueue();
  assert.equal(h.state.studyStartIndex,100);
  assert.equal(h.state.queue[0],'word101');
  assert.equal(h.state.queue.at(-1),'word200');
  h.state.currentIndex=h.state.queue.length;
  h.renderFinishedState();
  h.initQueue();
  assert.equal(h.state.studyStartIndex,200);
  assert.equal(h.state.queue[0],'word201');
  assert.equal(h.state.queue.at(-1),'word250');
});

test('legacy repeated first group migrates to 101 when the first hundred contains prior learning or Mark data',()=>{
  const full=Array.from({length:250},(_,i)=>`word${i+1}`);
  const h=setup(undefined,{getActiveWordList:()=>full,getMarkedWords:()=>[['word20',2]]});
  h.state.learnedWords.add('word99');
  h.initQueue();
  assert.equal(h.state.studyStartIndex,100);
  assert.equal(h.state.queue[0],'word101');
});

test('group selection: can choose any group (1-100, 101-200, 201-250) and switch groups freely',()=>{
  const full=Array.from({length:250},(_,i)=>`word${i+1}`);
  const h=setup(undefined,{getActiveWordList:()=>full,getMarkedWords:()=>[]});
  h.initQueue();
  assert.equal(h.state.studyStartIndex,0);

  // 1. 获取所有分组列表
  const groups=h.engine.getStudyGroups();
  assert.equal(groups.length,3);
  assert.equal(groups[0].label,'第 1 组 (1-100)');
  assert.equal(groups[1].label,'第 2 组 (101-200)');
  assert.equal(groups[2].label,'第 3 组 (201-250)');

  // 2. 选择第 2 组 (101-200)
  h.engine.setStudyGroup(100);
  assert.equal(h.state.studyStartIndex,100);
  assert.equal(h.state.queue[0],'word101');
  assert.equal(h.state.queue.at(-1),'word200');

  // 3. 选择第 3 组 (201-250)
  h.engine.setStudyGroup(200);
  assert.equal(h.state.studyStartIndex,200);
  assert.equal(h.state.queue[0],'word201');
  assert.equal(h.state.queue.at(-1),'word250');

  // 4. 自由返回第 1 组 (1-100)
  h.engine.setStudyGroup(0);
  assert.equal(h.state.studyStartIndex,0);
  assert.equal(h.state.queue[0],'word1');
  assert.equal(h.state.queue.at(-1),'word100');

  // 5. open() 直接支持指定分组 startIndex
  h.engine.open('study', 100, 100);
  assert.equal(h.state.studyStartIndex,100);
  assert.equal(h.state.queue[0],'word101');
});

test('review queue contains only marked words and never pads with ordinary vocabulary',()=>{
  const h=setup(undefined,{
    getActiveWordList:()=>['ordinary1','ordinary2','ordinary3'],
    getMarkedWords:()=>[['draft',2],['reverse',1]]
  });
  h.state.mode='review';
  h.initQueue();
  assert.deepEqual(Array.from(h.state.queue),['draft','reverse']);
});
