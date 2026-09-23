const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.join(__dirname,'../frontend');
const sample={word:'universe',meanings:[{partOfSpeech:'noun',definitions:[{definition:'All of space and everything in it.',example:'The universe is vast.'}]}]};
function runtime(fetchImpl, extra={}) {
  const c={URL,AbortController,console,setTimeout,clearTimeout,navigator:{},location:{href:'http://local/'},
    document:{querySelectorAll:()=>[],createElement:()=>({}),head:{append(){}}},fetch:fetchImpl,...extra};
  c.window=c;vm.createContext(c);vm.runInContext(fs.readFileSync(path.join(root,'performance-runtime.js'),'utf8'),c);return c;
}
test('array and object dictionary contracts normalize consistently, empty POS is not a definition',()=>{
  const {Stone}=runtime();
  assert.equal(JSON.stringify(Stone.normalizeEnglish([sample])),JSON.stringify(Stone.normalizeEnglish(sample)));
  assert.equal(Stone.normalizeEnglish({meanings:[{partOfSpeech:'verb',definitions:[]}]}),null);
});
test('card and drawer requests for the same normalized word share one request and a synchronous cache',async()=>{
  let calls=0;const {Stone}=runtime(async()=>{calls++;return {ok:true,json:async()=>[sample]};});
  const [a,b]=await Promise.all([Stone.english(' UNIVERSE '),Stone.english('universe')]);
  assert.equal(calls,1);assert.equal(a,b);assert.equal(Stone.peekEnglish('universe'),a);
  await Stone.english('universe');assert.equal(calls,1);
});
test('public preloaded dictionary serves the first lookup without a dictionary API request',async()=>{
  const urls=[];const {Stone}=runtime(async url=>{urls.push(url);return {ok:true,json:async()=>({universe:sample})};},{STONE_ASSETS:{'english-core.json':'/assets/english-core.123.json'}});
  assert.equal((await Stone.english('universe')).word,'universe');assert.deepEqual(urls,['/assets/english-core.123.json']);
});
test('a late public bundle wins even when the online lookup already failed',async()=>{
  const {Stone}=runtime(async url=>{
    if(url.includes('english-core')){await new Promise(r=>setTimeout(r,180));return {ok:true,json:async()=>({universe:sample})};}
    return {ok:false,status:404};
  },{STONE_ASSETS:{'english-core.json':'/assets/english-core.123.json'}});
  assert.equal((await Stone.english('universe')).word,'universe');
});
test('a stalled IndexedDB never blocks a network definition for seconds',async()=>{
  const {Stone}=runtime(async()=>({ok:true,json:async()=>sample}),{indexedDB:{open:()=>({})}});
  const start=performance.now();await Stone.english('universe');assert.ok(performance.now()-start<600);
});
test('failed lookups can be retried and empty API payloads are not treated as definitions',async()=>{
  let calls=0;const {Stone}=runtime(async()=>({ok:++calls>1,json:async()=>sample}));
  await assert.rejects(Stone.english('universe'));await Stone.english('universe');assert.equal(calls,2);
});
function cards(fetchImpl) {
  const elements=new Map();const c={window:{},document:{readyState:'loading',addEventListener(){},getElementById:id=>elements.get(id)||null},
    localStorage:{getItem:()=>null,setItem(){}},console,AbortController,AbortSignal,setTimeout,clearTimeout,performance,fetch:fetchImpl};
  vm.createContext(c);let source=fs.readFileSync(path.join(root,'flashcard.js'),'utf8').replace(/\r\n/g,'\n');
  source=source.replace('  return {\n    resumeCloudSession,','  window.testing={state,fetchEnglishDefOnline,getEnglishDefinition};\n  return {\n    resumeCloudSession,');
  vm.runInContext(source,c);c.window.testing.state.isOpen=true;c.window.testing.state.currentWord='universe';
  return {...c.window.testing,elements,engine:c.window.FlashcardEngine};
}
test('flashcards display dictionary array responses and coalesce duplicate requests',async()=>{
  let calls=0;const c=cards(async()=>{calls++;return {ok:true,json:async()=>[sample]};});
  c.elements.set('fcStdDefEnText',{textContent:''});
  await Promise.all([c.fetchEnglishDefOnline('universe'),c.fetchEnglishDefOnline('universe')]);
  assert.equal(calls,1);assert.match(c.elements.get('fcStdDefEnText').textContent,/All of space/);
});
test('a late definition cannot overwrite the next card',async()=>{
  let resolve;const c=cards(()=>new Promise(r=>resolve=r));
  c.elements.set('fcStdDefEnText',{textContent:'next word'});const request=c.fetchEnglishDefOnline('universe');
  c.state.currentWord='space';resolve({ok:true,json:async()=>sample});await request;
  assert.equal(c.elements.get('fcStdDefEnText').textContent,'next word');
});
test('failure ends the loading state, exposes retry and recovers',async()=>{
  let calls=0;const c=cards(async()=>({ok:++calls>1,json:async()=>sample}));
  c.elements.set('fcStdDefEnText',{textContent:''});c.elements.set('fcEnglishRetry',{hidden:true,style:{}});
  await c.fetchEnglishDefOnline('universe');assert.equal(c.elements.get('fcEnglishRetry').hidden,false);
  assert.match(c.elements.get('fcStdDefEnText').textContent,/重试/);
  await c.engine.retryEnglishDefinition();assert.equal(c.elements.get('fcEnglishRetry').hidden,true);
  assert.match(c.getEnglishDefinition('universe'),/All of space/);
});
test('next word preserves the selected English tab until the drawer is closed',async()=>{
  let open=true;const fetched=[];
  const nodes=new Map();const el=id=>{if(!nodes.has(id))nodes.set(id,{innerHTML:'',classList:{contains:()=>open,add(){open=true}}});return nodes.get(id)};
  const c={stoneLookupSequence:0,currentLookupWord:'universe',currentDrawerDictTab:'en',CORE_STUDY_WORDS:['space'],corrections:{},chineseDict:{space:'空间'},
    appSettings:{dictLanguageMode:'zh',showChinese:true},document:{getElementById:el},Stone:{warmEnglish(){},script:async()=>{}},speakWord(){},escapeHtml:String,getMarkCount:()=>0,
    fetchStoneEnglish:w=>fetched.push('en:'+w),fetchZhDefinition:w=>fetched.push('zh:'+w)};
  const code=fs.readFileSync(path.join(root,'dictionary.js'),'utf8');vm.createContext(c);
  vm.runInContext(code.slice(code.indexOf('async function openWordDetails('),code.indexOf('async function fetchStoneEnglish(')),c);
  await c.openWordDetails('space');assert.equal(c.currentDrawerDictTab,'en');assert.deepEqual(fetched,['en:space']);
  open=false;await c.openWordDetails('space');assert.equal(c.currentDrawerDictTab,'zh');
});
