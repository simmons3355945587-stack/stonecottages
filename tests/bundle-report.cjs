const fs=require('node:fs'),path=require('node:path'),zlib=require('node:zlib');
const original=process.argv[2];
if(!original)throw new Error('Pass the original frontend directory');
const optimized=path.join(__dirname,'..','frontend');
function entry(dir,name){
 const html=fs.readFileSync(path.join(dir,name),'utf8');
 const urls=[...html.matchAll(/<(?:script|link)\b[^>]*(?:src|href)="([^"?]+\.(?:js|css))/g)].map(m=>m[1]);
 const unique=[...new Set(urls)];let raw=0,gzip=0;
 const files=unique.map(url=>{const file=path.resolve(dir,url.startsWith('/')?'.'+url:path.join(path.dirname(name),url));const b=fs.readFileSync(file);raw+=b.length;gzip+=zlib.gzipSync(b,{level:6}).length;return {url,bytes:b.length};});
 return {requests:files.length,rawBytes:raw,gzipEstimatedBytes:gzip,htmlBytes:Buffer.byteLength(html),files};
}
const report={method:'Static entry JavaScript/CSS byte counts. Gzip level 6 applied equally to both versions; not network timing, excludes images/audio/API.',home:{before:entry(original,'index.html'),after:entry(optimized,'index.html')},listening:{before:entry(original,'cet4/index.html'),after:entry(optimized,'cet4/index.html')}};
const mf=JSON.parse(fs.readFileSync(path.join(optimized,'asset-manifest.json')));
const graph=fs.readFileSync(path.join(optimized,mf['lexical-graph.js']));
report.graph={sourceBytes:fs.statSync(path.join(original,'lexical-graph.js')).size,compactBytes:graph.length,gzipBytes:zlib.gzipSync(graph,{level:9}).length,entryCount:Object.keys(require(path.join(original,'lexical-graph.js')).STONE_LEXICAL_GRAPH).length};
console.log(JSON.stringify(report,null,2));
