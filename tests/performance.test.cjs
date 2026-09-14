const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),zlib=require('node:zlib'),crypto=require('node:crypto');
const root=path.join(__dirname,'..','frontend');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'asset-manifest.json')));
const source=fs.readFileSync(path.join(root,'performance-runtime.js'),'utf8');
function runtime({fetchImpl,blockedStorage=false,closedDb=false,staticName}={}) {
  const storage=new Map(), appended=[], requests=[];
  const current={src:'http://local/runtime.js'};
  const staticScript={src:'http://local/assets/static.123.js',listeners:{},addEventListener(n,f){this.listeners[n]=f;}};
  const context={URL,AbortController,setTimeout,clearTimeout,console:{warn(){},error(){}},location:{href:'http://local/'},navigator:{},
    document:{currentScript:current,querySelectorAll:()=>staticName?[current,staticScript]:[current],
      createElement:()=>({remove(){this.removed=true;}}),head:{append(el){appended.push(el);}}},
    fetch:async (...args)=>{requests.push(args);return fetchImpl?fetchImpl(...args):{ok:true,json:async()=>({word:'test'})};}};
  context.window=context;
  if(blockedStorage) Object.defineProperty(context,'localStorage',{get(){throw new Error('denied');}});
  else context.localStorage={getItem:k=>storage.get(k)??null,setItem:(k,v)=>storage.set(k,String(v)),removeItem:k=>storage.delete(k)};
  if(staticName)context.STONE_ASSETS={[staticName]:'/assets/static.123.js'};
  if(closedDb)context.indexedDB={open(){const r={result:{transaction(){throw new Error('closed');},close(){}}};queueMicrotask(()=>r.onsuccess());return r;}};
  vm.createContext(context);vm.runInContext(source,context);
  return {context,appended,requests,staticScript};
}
test('homepage defers scripts and excludes the graph; listening stays independent',()=>{
  for(const name of ['index.html','cet4/index.html']){
    const html=fs.readFileSync(path.join(root,name),'utf8');
    const scripts=[...html.matchAll(/<script\b([^>]*)src="([^"]+)"/g)];
    assert.ok(scripts.length>0);
    for(const [,attrs,url] of scripts){assert.match(attrs,/\bdefer\b/);assert.doesNotMatch(url,/lexical-graph/);}
  }
});
test('all generated hashes and gzip companions are exact and graph content is lossless',()=>{
  for(const url of Object.values(manifest)){
    const file=path.join(root,url),bytes=fs.readFileSync(file);
    assert.ok(url.includes(crypto.createHash('sha256').update(bytes).digest('hex').slice(0,12)));
    if(/\.(js|json|css)$/.test(file)) assert.deepEqual(zlib.gunzipSync(fs.readFileSync(file+'.gz')),bytes);
  }
  const ctx={window:{}};vm.createContext(ctx);vm.runInContext(fs.readFileSync(path.join(root,manifest['lexical-graph.js']),'utf8'),ctx);
  assert.equal(JSON.stringify(ctx.window.STONE_LEXICAL_GRAPH),JSON.stringify(require(path.join(root,'lexical-graph.js')).STONE_LEXICAL_GRAPH));
});
test('concurrent dynamic scripts execute once, slash aliases share the same request',async()=>{
  const {context:c,appended}=runtime();
  const a=c.Stone.script('tarot.js'),b=c.Stone.script('/tarot.js');
  assert.equal(a,b);assert.equal(appended.length,1);appended[0].onload();await a;
  await c.Stone.script('tarot.js');assert.equal(appended.length,1);
});
test('parser scripts are reused by the lazy loader',async()=>{
  const {context:c,appended,staticScript}=runtime({staticName:'extra-definitions.js'});
  const done=c.Stone.script('extra-definitions.js');assert.equal(appended.length,0);
  staticScript.listeners.load();await done;
});
test('failed versioned scripts can retry without loading a different release',async()=>{
  const {context:c,appended}=runtime();c.STONE_ASSETS={'a.js':'/assets/a.abcdef123456.js'};
  const first=c.Stone.script('a.js');appended[0].onerror();await assert.rejects(first);
  const second=c.Stone.script('a.js');assert.equal(appended[1].src,appended[0].src);appended[1].onload();await second;
});
test('JSON requests coalesce, failed requests are evicted for retry',async()=>{
  let calls=0;const {context:c,requests}=runtime({fetchImpl:async()=>({ok:++calls>1,status:503,json:async()=>({ok:1})})});
  await Promise.all([assert.rejects(c.Stone.json('exam.json')),assert.rejects(c.Stone.json('exam.json'))]);
  assert.equal(requests.length,1);assert.equal((await c.Stone.json('exam.json')).ok,1);assert.equal(requests.length,2);
});
test('denied localStorage does not break startup and remains usable within the page',()=>{
  const {context:c}=runtime({blockedStorage:true});c.StoneStorage.setItem('vocab_test','ok');
  assert.equal(c.StoneStorage.getItem('vocab_test'),'ok');c.StoneStorage.removeItem('vocab_test');assert.equal(c.StoneStorage.getItem('vocab_test'),null);
});
test('closed dictionary cache cannot prevent a successful network lookup',async()=>{
  const {context:c,requests}=runtime({closedDb:true});const r=await c.Stone.dictResponse('/api/dict/test');
  assert.equal((await r.json()).word,'test');assert.equal(requests.length,1);
});
test('expedition local restore keeps the seeded map and learning profile',async()=>{
  const saved=new Map();const store={getItem:k=>saved.get(k)||null,setItem:(k,v)=>saved.set(k,v),removeItem:k=>saved.delete(k)};
  function engine(){const c={console,localStorage:store,window:{StoneStorage:store},module:{exports:{}}};vm.createContext(c);vm.runInContext(fs.readFileSync(path.join(root,'expedition-engine.js'),'utf8'),c);return c.module.exports;}
  const e=engine();await e.init();const session=await e.startExpedition({hp:88,san:90},12345,{wordSource:'core'});
  const restored=await engine().init();assert.equal(restored.restored,true);assert.equal(restored.session.hp,88);
  assert.equal(JSON.stringify(restored.session.nodes),JSON.stringify(session.nodes));assert.equal(restored.session.seed,12345);
});
test('listening: a late exam response cannot overwrite a newer selection',async()=>{
  const js=fs.readFileSync(path.join(root,'cet4/app.js'),'utf8');
  const fn=js.slice(js.indexOf('  async function loadExam('),js.indexOf('  function setupMobileTabs('));
  const pending={};
  const el=()=>({textContent:'',style:{}});
  const c={console,Stone:{json:key=>new Promise(resolve=>pending[key]=resolve)},examLoadSequence:0,
    manifest:['a','b'].map(id=>({id,name:id,stats:{pre:1,body:1,question:1},json_file:id+'.json'})),
    audioPlayer:{pause(){},load(){}},currentExamName:el(),currentExamStats:el(),quizOverview:el(),quizFeedback:el(),
    cancelPendingReplay(){},renderTranscriptList(){},showStartHero(){},drawWaveformVisual(){},updateScoreHUD(){}};
  vm.createContext(c);vm.runInContext(fn,c);
  const a=c.loadExam('a'),b=c.loadExam('b');
  pending['cet4/b.json']({id:'b',audio:'b.mp3',segments:[{sec:'body'}]});await b;
  pending['cet4/a.json']({id:'a',audio:'a.mp3',segments:[{sec:'body'}]});await a;
  assert.equal(c.currentExam.id,'b');assert.equal(c.audioPlayer.src,'b.mp3');assert.equal(c.currentExamName.textContent,'b');
});
test('battle: repeated clicks reuse a connecting socket and retry backs off',()=>{
  const html=fs.readFileSync(path.join(root,'tri-match.battle.template'),'utf8');
  const setup=html.slice(html.indexOf('    let ws = null;'),html.indexOf('    let myClientId'));
  const fn=html.slice(html.indexOf('    function initWebSocket()'),html.indexOf('    function doCreateRoomAsLin()'));
  const sockets=[],delays=[];
  class Socket {static OPEN=1;static CONNECTING=0;constructor(){this.readyState=0;sockets.push(this);}close(){this.readyState=3;}}
  const c={WebSocket:Socket,navigator:{onLine:true},console:{log(){}},window:{addEventListener(){},location:{protocol:'http:',hostname:'localhost',host:'localhost'}},
    document:{getElementById:()=>null},setTimeout:(fn,delay)=>{delays.push(delay);return delays.length;},clearTimeout(){},myClientId:'test',isLin:true,handleWsMessage(){}};
  vm.createContext(c);vm.runInContext(setup+fn,c);c.initWebSocket();c.initWebSocket();assert.equal(sockets.length,1);
  sockets[0].onclose();sockets[0].onclose();assert.ok(delays[1]>delays[0]);
  c.navigator.onLine=false;c.initWebSocket();assert.equal(sockets.length,1);
});
test('match: exiting clears the timer so later navigation cannot abort it again',()=>{
  const js=fs.readFileSync(path.join(root,'match.js'),'utf8');
  const c={console,matchTimerInterval:42,soundClick(){},clearInterval(id){assert.equal(id,42);},document:{getElementById:()=>null},showToast(){}};
  vm.createContext(c);vm.runInContext(js,c);c.abortMatchGame();assert.equal(c.matchTimerInterval,null);
});
