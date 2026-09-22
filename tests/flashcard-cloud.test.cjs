const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),crypto=require('node:crypto');
const source=fs.readFileSync(path.join(__dirname,'..','frontend','flashcard.js'),'utf8').split('window.FlashcardEngine =')[0];
const sample={learned:['universe'],stats:{completed:1},session:{queue:['universe','space'],currentIndex:1}};
function server(){
 const db=new Map();let writes=0;
 return {db,get writes(){return writes},fetch:async(url,opt={})=>{
  const id=opt.headers.Authorization;const old=db.get(id)||{revision:0,state:null,mutation_id:null};
  if(opt.method!=='PUT')return {ok:true,json:async()=>JSON.parse(JSON.stringify(old))};
  const req=JSON.parse(opt.body);writes++;
  if(req.mutation_id===old.mutation_id)return {ok:true,json:async()=>({revision:old.revision})};
  if(req.expected_revision!==old.revision)return {ok:false,status:409};
  const next={revision:old.revision+1,state:req.state,mutation_id:req.mutation_id};db.set(id,next);
  return {ok:true,json:async()=>({revision:next.revision})};
 }};
}
function device(server,user='1',storage=new Map()){
 const labels={};const c={authUser:user?{id:user}:null,authToken:user?'token'+user:null,window:{},crypto,AbortSignal,
  document:{getElementById:id=>labels[id]||(labels[id]={textContent:''})},
  localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},
  fetch:server.fetch,setTimeout:()=>1,clearTimeout(){}};
 vm.createContext(c);vm.runInContext(source,c);return {api:c.window.FlashcardCloud,c,storage,labels};
}
const settle=()=>new Promise(r=>setImmediate(r));
test('device B with empty cache loads device A progress from account server',async()=>{
 const s=server(),a=device(s);await a.api.load();a.api.save(sample);await settle();
 const b=device(s);const data=await b.api.load();assert.deepEqual(JSON.parse(JSON.stringify(data)),sample);
 assert.equal(s.writes,1);assert.match(a.labels.fcCloudStatus.textContent,/已同步到云端/);
});
test('an older device is blocked rather than overwriting progress',async()=>{
 const s=server(),a=device(s),b=device(s);await a.api.load();await b.api.load();
 a.api.save(sample);await settle();b.api.save({...sample,stats:{completed:0}});await settle();
 assert.equal(b.api.isBlocked(),true);assert.equal(s.db.get('Bearer token1').state.stats.completed,1);
});
test('offline pending progress survives refresh and is retried on reconnect',async()=>{
 const s=server(),a=device(s);await a.api.load();a.c.fetch=async()=>{throw Error('offline')};
 a.api.save(sample);await settle();assert.match(a.labels.fcCloudStatus.textContent,/尚未同步/);
 const restarted=device(s,'1',a.storage);await restarted.api.load();await settle();
 assert.deepEqual(s.db.get('Bearer token1').state,sample);
});
test('accounts never read another account cached progress',async()=>{
 const s=server(),a=device(s);await a.api.load();a.api.save(sample);await settle();
 const b=device(s,'2',a.storage);assert.equal(await b.api.load(),null);
 assert.notEqual(a.api.storageKey('session'),b.api.storageKey('session'));
});
test('new changes during a write are subsequently uploaded',async()=>{
 const s=server(),a=device(s);await a.api.load();a.api.save(sample);a.api.save({...sample,stats:{completed:2}});await settle();
 assert.equal(s.db.get('Bearer token1').state.stats.completed,2);
});
test('logged out mode never reports cloud success',async()=>{
 const s=server(),a=device(s,null);await a.api.load();a.api.save(sample);await settle();
 assert.equal(s.writes,0);assert.match(a.labels.fcCloudStatus.textContent,/未登录/);
});
