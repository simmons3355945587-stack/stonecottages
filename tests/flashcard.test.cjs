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
    localStorage:{getItem:k=>storage.get(k),setItem:(k,v)=>storage.set(k,v)},
    console, AbortController, AbortSignal, crypto:require('node:crypto'), performance, setTimeout, clearTimeout,
    chineseDict:{reunite:'重聚；重新统一'},
    fetch:fetchImpl, escapeHtml:String, addMark(){marks++}, reduceMark(){marks--}, getMarkCount(){return marks}, appSettings:{dictLanguageMode:"zh"},
  };
  Object.assign(context,options);
  vm.createContext(context);
  let code = readFileSync(process.env.FLASHCARD_SOURCE || path.join(__dirname,'..','frontend','flashcard.js'),'utf8').replace(/\r\n/g,'\n');
  code = code.replace('  return {\n    resumeCloudSession,', '  window.__test={state,judgmentGate,verifyLocally,verifyWithJev,applyEvaluationResult};\n  return {\n    resumeCloudSession,');
  vm.runInContext(code, context);
  context.window.__test.state.currentWord='reunite';
  context.window.__test.state.isOpen=true;
  context.window.__test.state.queue=['reunite','space'];
  return {...context.window.__test,engine:context.window.FlashcardEngine,elements,marks:()=>marks};
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
  assert.equal(h.marks(),0);
});
test('explicit unknown shows reference without automatically adding Mark',()=>{
  const h=setup();
  h.applyEvaluationResult({correct:false,confidence:0,source:'unknown_giveup',isUnknown:true},'?',[],'重聚');
  assert.equal(h.marks(),0);
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
test('leaving unmarked does not add Mark and exposes a clear next action',()=>{
  const h=setup();
  const panel={style:{},innerHTML:''};
  h.elements.set('fcResultPanel',panel);
  h.applyEvaluationResult({correct:false,confidence:1},'香蕉',[],'重聚');
  assert.match(panel.innerHTML,/不加 Mark，下一词/);
  h.engine.nextWord();
  assert.equal(h.marks(),0);
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
  const data={learned:['space'],stats:{date,completed:3,correct:2,wrong:1,target:100},session:{date:'2020-01-01',mode:'study',targetCount:100,queue:['space','reunite'],currentIndex:1,isOpen:true,isAnswered:true,lastResult:{correct:false,confidence:1},userInput:'香蕉',selectedPos:['v'],manualMarkBaselines:[]}};
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
