"""Build an explicit, credential-free release; never includes a database."""
from pathlib import Path, PurePosixPath
import hashlib
import gzip
import io
import json
import re
import sys
import tarfile

ROOT = Path(__file__).resolve().parents[2]
SECRET = re.compile(rb'(?:apikey_[A-Za-z0-9_]{30,}|(?:sk-|ghp_|github_pat_|AIza|tp-)[A-Za-z0-9_-]{25,}|-----BEGIN (?:OPENSSH |RSA |EC )?PRIVATE KEY-----)')
PUBLIC_EXTENSIONS = {'.html', '.battle', '.js', '.css', '.json', '.png', '.webp', '.jpg', '.jpeg', '.svg', '.ico', '.woff', '.woff2', '.txt', '.xml'}

def permitted(name):
    path = PurePosixPath(name)
    if path.is_absolute() or str(path) != name or any(p.startswith('.') for p in path.parts) or '\\' in name:
        return False
    if name == 'backend/main.py':
        return True
    if not name.startswith('frontend/') or any(p in {'backend', 'node_modules'} for p in path.parts):
        return False
    suffix = path.suffix
    if suffix == '.gz':
        suffix = PurePosixPath(path.stem).suffix
    return suffix in PUBLIC_EXTENSIONS

def collect(root):
    front = root / 'frontend'
    manifest = json.loads((front / 'asset-manifest.json').read_text(encoding='utf-8'))
    files = {'frontend/asset-manifest.json', 'backend/main.py'}
    for path in front.rglob('*'):
        rel = path.relative_to(root).as_posix()
        if path.is_file() and 'assets' not in path.relative_to(front).parts and permitted(rel):
            files.add(rel)
    for value in manifest.values():
        rel = 'frontend/' + value.lstrip('/')
        if not permitted(rel) or not rel.startswith('frontend/assets/'):
            raise ValueError('Invalid asset path')
        files.add(rel)
        if (root / (rel + '.gz')).is_file():
            files.add(rel + '.gz')
    return sorted(files)

def build(root, output, revision):
    if not re.fullmatch('[0-9a-f]{40}', revision):
        raise ValueError('A full commit SHA is required')
    files = {}
    for name in collect(root):
        path = root / name
        if path.is_symlink():
            raise ValueError('Symlinks are not release files')
        data = path.read_bytes()
        if SECRET.search(data):
            raise ValueError('Credential pattern in release file: ' + name)
        files[name] = data
    manifest = {'revision': revision, 'files': {n: hashlib.sha256(d).hexdigest() for n, d in files.items()}}
    for name, data in files.items():
        if name.endswith('.gz') and (name[:-3] not in files or gzip.decompress(data) != files[name[:-3]]):
            raise ValueError('Compressed asset does not match its source')
    output.parent.mkdir(parents=True, exist_ok=True)
    with tarfile.open(output, 'w:gz') as archive:
        for name, data in [('release.json', json.dumps(manifest).encode()), *files.items()]:
            info = tarfile.TarInfo(name)
            info.size = len(data)
            info.mode = 0o644
            archive.addfile(info, io.BytesIO(data))
    print(json.dumps({'revision': revision, 'files': len(files), 'archive_bytes': output.stat().st_size}))

if __name__ == '__main__':
    build(ROOT, Path(sys.argv[1]), sys.argv[2])
