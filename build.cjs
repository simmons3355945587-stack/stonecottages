const fs=require('fs'),path=require('path'),crypto=require('crypto');let terser;try{terser=require('terser');}catch(e){}const dir=path.join(__dirname,'frontend');
async function build(){
 const assets={};fs.mkdirSync(path.join(dir,'assets'),{recursive:true});
 function list(d){return fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()&&!['assets','backend'].includes(e.name)?list(path.join(d,e.name)):e.isFile()?[path.join(d,e.name)]:[]);}
 const all=list(dir).filter(f=>/\.(js|css|json)$/.test(f)&&!f.endsWith('novel-data.js')&&!f.endsWith('sync-engine.js')&&!f.endsWith('asset-manifest.json'));
 for(const f of all){let data=fs.readFileSync(f);if(f.endsWith('.js')&&terser){const r=await terser.minify(data.toString(),{compress:false,mangle:false,format:{comments:false}});data=Buffer.from(r.code);}
 const rel=path.relative(dir,f).replaceAll('\\','/'),ext=path.extname(f),name=rel.slice(0,-ext.length).replaceAll('/','-'),hash=crypto.createHash('sha256').update(data).digest('hex').slice(0,12),dest=`assets/${name}.${hash}${ext}`;fs.writeFileSync(path.join(dir,dest),data);assets[rel]='/'+dest;
 }
 for(const entry of ['index.html','cet4/index.html']){let s=fs.readFileSync(path.join(dir,entry+'.template'),'utf8');const prefix=entry.startsWith('cet4/')?'cet4/':'';s=s.replace(/(src|href)="([^" ]+\.(?:js|css))(?:\?[^" ]*)?"/g,(m,attr,url)=>{const k=url.startsWith('/')?url.slice(1):prefix+url;return assets[k]?`${attr}="${assets[k]}"`:m;});s=s.replace('<head>','<head>\n<script>window.STONE_ASSETS='+JSON.stringify(assets).replaceAll('<','\\u003c')+';</script>');fs.writeFileSync(path.join(dir,entry),s);}
 fs.writeFileSync(path.join(dir,'asset-manifest.json'),JSON.stringify(assets,null,2));console.log('Built',Object.keys(assets).length,'versioned assets');
}
build().catch(e=>{console.error(e);process.exit(1);});
