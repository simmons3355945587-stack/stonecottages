// Local-only static preview. Never proxies to the production site.
const http=require('node:http'), fs=require('node:fs'), path=require('node:path');
const root=path.resolve(process.env.PREVIEW_ROOT || path.join(__dirname,'frontend'));
const port=Number(process.env.PORT || 4173);
const types={'.html':'text/html; charset=utf-8','.battle':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.webp':'image/webp','.png':'image/png','.mp3':'audio/mpeg'};
http.createServer((req,res)=>{
  let pathname;
  try { pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname); } catch { res.writeHead(400).end();return; }
  if(pathname.startsWith('/api/')) { res.writeHead(503,{'Content-Type':'application/json'}).end(JSON.stringify({detail:'本地静态预览未连接账号服务'}));return; }
  if(pathname==='/pk'||pathname==='/.battle') pathname='/tri-match.battle';
  if(pathname.endsWith('/')) pathname+='index.html';
  const file=path.resolve(root,'.'+pathname);
  if(!file.startsWith(root+path.sep)) {res.writeHead(403).end();return;}
  if(!fs.existsSync(file)||!fs.statSync(file).isFile()) {res.writeHead(404).end();return;}
  const hashed=/\.[a-f0-9]{12}\./.test(file);
  const gzip=!req.headers.range && /\bgzip\b/.test(req.headers['accept-encoding']||'')&&fs.existsSync(file+'.gz');
  const target=gzip?file+'.gz':file, size=fs.statSync(target).size;
  const headers={'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':hashed?'public, max-age=31536000, immutable':'no-cache','Vary':'Accept-Encoding','Accept-Ranges':'bytes'};
  if(gzip) headers['Content-Encoding']='gzip';
  let start=0,end=size-1,status=200;
  if(req.headers.range) {
    const m=/^bytes=(\d+)-(\d*)$/.exec(req.headers.range);
    if(!m || Number(m[1])>=size){res.writeHead(416,{'Content-Range':`bytes */${size}`}).end();return;}
    start=Number(m[1]);end=m[2]?Math.min(Number(m[2]),size-1):size-1;
    if(end<start){res.writeHead(416).end();return;}
    status=206;headers['Content-Range']=`bytes ${start}-${end}/${size}`;
  }
  headers['Content-Length']=end-start+1;
  res.writeHead(status,headers);
  if(req.method==='HEAD')res.end();else fs.createReadStream(target,{start,end}).pipe(res);
}).listen(port,'127.0.0.1',()=>console.log(`Local preview: http://localhost:${port}`));
