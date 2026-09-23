"""Send a tested release through the existing HTTPS hosting transport.

Credentials come only from the protected production environment in Actions.
No shell credentials or AI provider keys are placed in Codex cloud.
"""
from pathlib import Path
import base64
import hashlib
import importlib.util
import io
import json
import os
import re
import secrets
import sys
import tarfile
import urllib.parse
import urllib.request

HERE = Path(__file__).resolve().parent
spec = importlib.util.spec_from_file_location('stone_install', HERE / 'install_release.py')
installer = importlib.util.module_from_spec(spec)
spec.loader.exec_module(installer)

def execute(command):
    values = {'veid': os.environ.get('STONE_BWH_VEID', ''),
              'api_key': os.environ.get('STONE_BWH_API_KEY', ''), 'command': command}
    if not values['veid'] or not values['api_key']:
        raise RuntimeError('Production deployment secrets are missing')
    request = urllib.request.Request('https://api.64clouds.com/v1/basicShell/exec',
                                     data=urllib.parse.urlencode(values).encode())
    try:
        with urllib.request.urlopen(request, timeout=90) as response:
            result = json.load(response)
    except Exception:
        raise RuntimeError('Hosting transport request failed; no credentials logged') from None
    if result.get('error') != 0:
        raise RuntimeError('Hosting transport rejected the command')
    return result.get('message', '')

def remote(code):
    encoded = base64.b64encode(code.encode()).decode()
    return execute('python3 -c "import base64;exec(base64.b64decode(\'' + encoded + '\'))"')

def upload(data, path):
    remote('from pathlib import Path\np=Path(' + repr(path) + ')\np.write_bytes(b\"\")\np.chmod(0o600)')
    for offset in range(0, len(data), 6000):
        chunk = base64.b64encode(data[offset:offset+6000]).decode()
        remote('import base64\nwith open(' + repr(path) + ',"ab") as f:f.write(base64.b64decode(' + repr(chunk) + '))')

def current_main():
    req = urllib.request.Request('https://api.github.com/repos/simmons3355945587-stack/stonecottages/git/ref/heads/main', headers={'User-Agent': 'StoneCottages-Release'})
    with urllib.request.urlopen(req, timeout=15) as response:
        return json.load(response)['object']['sha']

def main():
    archive, revision = Path(sys.argv[1]), sys.argv[2]
    files = installer.read_bundle(archive, revision)
    if current_main() != revision:
        raise RuntimeError('This revision is no longer the main branch head')
    wanted = {name: hashlib.sha256(data).hexdigest() for name, data in files.items()}
    missing = []
    entries = list(wanted.items())
    for offset in range(0, len(entries), 50):
        batch = entries[offset:offset+50]
        code = 'from pathlib import Path\nimport hashlib,json\nmissing=[]\n'
        code += 'for n,h in ' + repr(batch) + ':\n'
        code += ' p=Path("/var/www/vocab")/(n[9:] if n.startswith("frontend/") else n)\n'
        code += ' if not p.is_file() or hashlib.sha256(p.read_bytes()).hexdigest()!=h:missing.append(n)\n'
        code += 'print(json.dumps(missing))'
        missing.extend(json.loads(remote(code)))
    delta = io.BytesIO()
    manifest = {'revision': revision, 'files': {n: wanted[n] for n in missing}}
    with tarfile.open(fileobj=delta, mode='w:gz') as tar:
        for name, data in [('release.json', json.dumps(manifest).encode()), *((n, files[n]) for n in missing)]:
            info = tarfile.TarInfo(name)
            info.size = len(data)
            info.mode = 0o644
            tar.addfile(info, io.BytesIO(data))
    stage = '/var/tmp/stone-cloud-' + secrets.token_hex(12)
    remote('from pathlib import Path\nPath(' + repr(stage) + ').mkdir(mode=0o700)')
    # Keep failed uploads for diagnosis; these contain no credentials.
    for name in ['package.py', 'install_release.py']:
        upload((HERE / name).read_bytes(), stage + '/' + name)
    upload(delta.getvalue(), stage + '/release.tar.gz')
    if current_main() != revision:
        raise RuntimeError('New main revision arrived during upload; release not applied')
    code = 'import subprocess,json\np=subprocess.run(["python3",' + repr(stage + '/install_release.py') + ',' + repr(stage + '/release.tar.gz') + ',' + repr(revision) + '],capture_output=True,text=True)\n'
    code += 'print(p.stdout if p.returncode==0 else json.dumps({"ok":False,"error":"Installation failed; inspect private server stage"}))'
    result = json.loads(remote(code))
    if result.get('ok') is not True:
        raise RuntimeError('Release failed; inspect server status before retrying')
    print(json.dumps(result))

if __name__ == '__main__':
    try:
        main()
    except Exception as error:
        print('Release stopped: ' + str(error), file=sys.stderr)
        sys.exit(1)
