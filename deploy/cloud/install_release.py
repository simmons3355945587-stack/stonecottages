import contextlib
"""Server-side, incremental installation with a code rollback on health failure.

Only frontend files and backend/main.py are released. Databases, API keys,
nginx, systemd, and the independent battle backend are never bundle members.
"""
from pathlib import Path
import hashlib
import importlib.util
import io
import json
import os
import re
import shutil
import sqlite3
import subprocess
import sys
import tarfile
import time
import urllib.request

spec = importlib.util.spec_from_file_location('stone_package', Path(__file__).with_name('package.py'))
package = importlib.util.module_from_spec(spec)
spec.loader.exec_module(package)

MAX_BYTES = 120 * 1024 * 1024

def read_bundle(path, revision):
    if not re.fullmatch('[0-9a-f]{40}', revision):
        raise ValueError('Invalid revision')
    if path.stat().st_size > MAX_BYTES:
        raise ValueError('Release too large')
    files = {}
    size = 0
    with tarfile.open(path, 'r:gz') as archive:
        for member in archive:
            if not member.isfile() or member.name in files:
                raise ValueError('Only unique regular files are accepted')
            if member.name != 'release.json' and not package.permitted(member.name):
                raise ValueError('Forbidden release path')
            size += member.size
            if size > MAX_BYTES or len(files) >= 3000:
                raise ValueError('Release exceeds limit')
            data = archive.extractfile(member).read()
            if package.SECRET.search(data):
                raise ValueError('Credential pattern in release')
            files[member.name] = data
    manifest = json.loads(files.pop('release.json'))
    if manifest.get('revision') != revision or set(manifest.get('files', {})) != set(files):
        raise ValueError('Release manifest mismatch')
    for name, data in files.items():
        if hashlib.sha256(data).hexdigest() != manifest['files'][name]:
            raise ValueError('Release content mismatch')
    if 'backend/main.py' in files:
        compile(files['backend/main.py'], 'main.py', 'exec')
    return files

def destination(root, name):
    if not package.permitted(name):
        raise ValueError('Forbidden destination')
    relative = name[len('frontend/'):] if name.startswith('frontend/') else name
    target = root / relative
    for path in [target, *target.parents]:
        if path == root:
            break
        if path.is_symlink():
            raise ValueError('Symlink destination rejected')
    if not target.resolve().is_relative_to(root.resolve()):
        raise ValueError('Destination outside site')
    return target

def atomic_write(path, data, mode=0o644):
    missing = []
    parent = path.parent
    while not parent.exists():
        missing.append(parent)
        parent = parent.parent
    for directory in reversed(missing):
        directory.mkdir(mode=0o755)
        os.chmod(directory, 0o755)  # The production shell uses umask 077.
    tmp = path.with_name(path.name + '.stone-new')
    if tmp.exists() or tmp.is_symlink():
        raise ValueError('Unexpected temporary file')
    try:
        with open(tmp, 'xb') as handle:
            handle.write(data)
            handle.flush()
            os.fsync(handle.fileno())
        os.chmod(tmp, mode)
        os.replace(tmp, path)
    finally:
        if tmp.exists():
            tmp.unlink()

def restart():
    subprocess.run(['systemctl', 'restart', 'vocab-backend'], check=True,
                   stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=30)

def healthy():
    for attempt in range(15):
        try:
            with urllib.request.urlopen('http://127.0.0.1:8000/api/health', timeout=3) as response:
                if response.status == 200 and json.load(response).get('status') == 'ok':
                    return
        except Exception:
            time.sleep(1)
    raise RuntimeError('Backend health check failed')

def install(files, root, backup, restart_fn=restart, health_fn=healthy):
    targets = {name: destination(root, name) for name in files}
    changed = {n: d for n, d in files.items() if not targets[n].is_file() or targets[n].read_bytes() != d}
    if not changed:
        health_fn()
        return {'changed_files': 0}
    backup.mkdir(parents=True, exist_ok=False, mode=0o700)
    previous = {}
    for name in changed:
        p = targets[name]
        previous[name] = p.exists()
        if p.exists():
            saved = backup / name
            saved.parent.mkdir(parents=True, exist_ok=True, mode=0o700)
            shutil.copy2(p, saved)
    (backup / 'restore.json').write_text(json.dumps(previous))
    # Online SQLite snapshot is for operator recovery only: never overwrite live
    # learner progress automatically, even when a code release is rolled back.
    db = root / 'backend/vocab.db'
    if db.is_file() and 'backend/main.py' in changed:
        with contextlib.closing(sqlite3.connect(str(db))) as source, contextlib.closing(sqlite3.connect(str(backup / 'vocab.db'))) as copy:
            source.backup(copy)
    applied = []
    backend_changed = 'backend/main.py' in changed
    # Hashed assets first; HTML and its manifest switch last.
    names = sorted(changed, key=lambda n: (n.endswith(('.html', '.battle', 'asset-manifest.json')), n))
    try:
        for name in names:
            atomic_write(targets[name], changed[name])
            applied.append(name)
        if backend_changed:
            restart_fn()
        health_fn()
    except Exception:
        for name in reversed(applied):
            if previous[name]:
                saved = backup / name
                atomic_write(targets[name], saved.read_bytes(), saved.stat().st_mode & 0o777)
            else:
                targets[name].unlink()
        if backend_changed:
            restart_fn()
        health_fn()
        raise RuntimeError('Release failed; previous code restored') from None
    return {'changed_files': len(changed), 'backup': str(backup)}

def main():
    import fcntl
    os.umask(0o077)
    archive, revision = Path(sys.argv[1]), sys.argv[2]
    files = read_bundle(archive, revision)
    with open('/var/lock/stone-cloud-release.lock', 'w') as lock:
        fcntl.flock(lock, fcntl.LOCK_EX)
        backup = Path('/var/backups/vocab') / ('cloud-' + time.strftime('%Y%m%d-%H%M%S') + '-' + revision[:12])
        result = install(files, Path('/var/www/vocab'), backup)
        result.update(revision=revision, ok=True)
        print(json.dumps(result))

if __name__ == '__main__':
    main()
