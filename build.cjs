const fs = require('node:fs'), path = require('node:path'), crypto = require('node:crypto'), zlib = require('node:zlib');
let terser; try { terser = require('terser'); } catch {}
const dir = path.join(__dirname, 'frontend');
function list(d) {
  return fs.readdirSync(d, { withFileTypes: true }).flatMap(e =>
    e.isDirectory() && !['assets', 'backend'].includes(e.name) ? list(path.join(d,e.name)) : e.isFile() ? [path.join(d,e.name)] : []);
}
async function build() {
  const assets = {};
  fs.mkdirSync(path.join(dir,'assets'), {recursive:true});
  const all = list(dir).filter(f => /\.(js|css|json)$/.test(f) && !['novel-data.js','sync-engine.js','asset-manifest.json'].includes(path.basename(f)));
  for (const name of ['cottage-interior','cottage-exterior','bull-book','bull-banner'])
    for (const ext of ['png','webp']) all.push(path.join(dir,'assets',`${name}.${ext}`));
  for (const f of all.sort()) {
    let data = fs.readFileSync(f);
    if (f.endsWith('lexical-graph.js')) {
      const { STONE_LEXICAL_GRAPH } = require(f);
      data = Buffer.from('window.STONE_LEXICAL_GRAPH=' + JSON.stringify(STONE_LEXICAL_GRAPH) + ';');
    } else if (f.endsWith('.json')) data = Buffer.from(JSON.stringify(JSON.parse(data)));
    else if (f.endsWith('.js') && terser) {
      const result = await terser.minify(data.toString(), {compress:false,mangle:false,format:{comments:false}});
      data = Buffer.from(result.code);
    }
    const rel = path.relative(dir,f).replaceAll('\\','/'), ext = path.extname(f);
    const name = rel.slice(0,-ext.length).replaceAll('/','-');
    const hash = crypto.createHash('sha256').update(data).digest('hex').slice(0,12);
    const dest = `assets/${name}.${hash}${ext}`;
    fs.writeFileSync(path.join(dir,dest),data);
    if (/\.(js|css|json)$/.test(f)) fs.writeFileSync(path.join(dir,dest+'.gz'),zlib.gzipSync(data,{level:9}));
    assets[rel] = '/' + dest;
  }
  for (const entry of ['index.html','cet4/index.html','tri-match.battle']) {
    const template = path.join(dir,entry+'.template');
    if (!fs.existsSync(template)) continue;
    const prefix = entry.startsWith('cet4/') ? 'cet4/' : '';
    let html = fs.readFileSync(template,'utf8');
    html = html.replace(/(src|href|srcset)="([^" ]+\.(?:js|css|png|webp))(?:\?[^" ]*)?"/g,(m,attr,url) => {
      const key = url.startsWith('/') ? url.slice(1) : prefix+url;
      return assets[key] ? `${attr}="${assets[key]}"` : m;
    });
    html = html.replace('<head>', '<head>\n<script>window.STONE_ASSETS='+JSON.stringify(assets).replaceAll('<','\\u003c')+';</script>');
    fs.writeFileSync(path.join(dir,entry),html);
  }
  fs.writeFileSync(path.join(dir,'asset-manifest.json'),JSON.stringify(assets,null,2));
  console.log(`Built ${Object.keys(assets).length} versioned assets with precompressed text; JS minifier ${terser?'enabled':'unavailable (source retained)'}`);
}
build().catch(e => { console.error(e); process.exitCode=1; });
