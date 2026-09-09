const fs=require('fs'),vm=require('vm'),assert=require('assert');
const src=fs.readFileSync(require('path').join(__dirname,'../frontend/cet4/app.js'),'utf8');
const begin=src.indexOf("    // Enter is the safe default.");const end=src.indexOf('    // 4.',begin);
let handler,submitted=[];const ctx={quizInput:{value:'turn',addEventListener:(name,fn)=>handler=fn},window:{StoneUI:{spaceSubmit:false}},currentMode:'blank',submitCurrentAnswer:t=>submitted.push(t)};
vm.runInNewContext(src.slice(begin,end),ctx);
function send(key,extra={}){let prevented=false;handler({key,code:key===' '?'Space':key,preventDefault:()=>prevented=true,...extra});return prevented;}
assert.equal(send(' '),false);assert.deepEqual(submitted,[]);
assert.equal(send('Enter',{isComposing:true}),false);assert.deepEqual(submitted,[]);
assert.equal(send('Enter',{repeat:true}),false);assert.deepEqual(submitted,[]);
assert.equal(send('Enter'),true);assert.deepEqual(submitted,['enter']);
ctx.window.StoneUI.spaceSubmit=true;send(' ');assert.deepEqual(submitted,['enter','space']);
ctx.currentMode='liaison';assert.equal(send(' '),false);ctx.quizInput.value='turn out';assert.equal(send(' '),true);
assert.equal(send('Enter',{ctrlKey:true}),false);
console.log('PASS: Enter submission, default spaces preserved, opt-in Space, two-word answer, IME/repeat/modifier guards');
