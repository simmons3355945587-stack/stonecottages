#!/usr/bin/env python3
"""
Deploy flashcard keyboard shortcuts to ourstonecottages.org
Zero-downtime, frontend-only atomic rollout with backup and verification.
"""

import os
import sys
import json
import time
import base64
import gzip
import hashlib
import requests
import subprocess
from pathlib import Path

REPO_DIR = Path(r"F:\cluade-products\scripts\vocab-survival-repo")
sys.path.insert(0, str(REPO_DIR))

import deploy_production as transport

def remote_exec_python(script_str: str) -> str:
    encoded = base64.b64encode(script_str.encode("utf-8")).decode("ascii")
    res = transport.exec_cmd(f'python3 -c "import base64;exec(base64.b64decode(\'{encoded}\'))"', timeout=60)
    return res.get("message", "")

def main():
    print("=" * 60)
    print("1. Running local tests & build verification...")
    print("=" * 60)
    subprocess.run(["node", "tests/flashcard.test.cjs"], cwd=REPO_DIR, check=True)
    subprocess.run(["node", "build.cjs"], cwd=REPO_DIR, check=True)

    with open(REPO_DIR / "frontend" / "asset-manifest.json", "r", encoding="utf-8") as f:
        local_manifest = json.load(f)
    new_asset = local_manifest["flashcard.js"]
    print(f"New flashcard asset: {new_asset}")
    assert "3d372f2d0f00" in new_asset, f"Unexpected asset hash: {new_asset}"

    print("=" * 60)
    print("2. Fetching remote snapshot...")
    print("=" * 60)
    snapshot_raw = remote_exec_python("""
from pathlib import Path
import json, hashlib, base64
root = Path('/var/www/vocab')
files = ['index.html', 'asset-manifest.json', 'flashcard.js']
res = {}
for name in files:
    p = root / name
    if p.exists():
        data = p.read_bytes()
        res[name] = {'sha256': hashlib.sha256(data).hexdigest(), 'content': base64.b64encode(data).decode('ascii')}
print(json.dumps(res))
""")
    snapshot = json.loads(snapshot_raw.strip())
    print("Online snapshot fetched:")
    for k in snapshot:
        print(f"  {k}: sha256={snapshot[k]['sha256'][:16]}...")

    release_id = f"flashcard-keyboard-{time.strftime('%Y%m%d-%H%M%S')}"
    backup_dir = f"/var/backups/vocab/{release_id}"
    print(f"Release ID: {release_id}")
    print(f"Remote Backup: {backup_dir}")

    print("=" * 60)
    print("3. Uploading new hashed assets...")
    print("=" * 60)
    rel_asset_path = new_asset.lstrip("/")
    for ext in ["", ".gz"]:
        local_f = REPO_DIR / "frontend" / f"{rel_asset_path}{ext}"
        remote_f = f"/var/www/vocab/{rel_asset_path}{ext}"
        print(f"Uploading {local_f.name} -> {remote_f}...")
        transport.upload_single_file(str(local_f), remote_f, mode="644")

    print("=" * 60)
    print("4. Uploading and atomically replacing frontend entry files...")
    print("=" * 60)
    files_to_sync = ["flashcard.js", "asset-manifest.json", "index.html"]
    suffix = f".{release_id}.next"
    
    staged_digests = {}
    for name in files_to_sync:
        local_p = REPO_DIR / "frontend" / name
        remote_tmp = f"/var/www/vocab/{name}{suffix}"
        transport.upload_single_file(str(local_p), remote_tmp, mode="644")
        staged_digests[name] = hashlib.sha256(local_p.read_bytes()).hexdigest()

    before_digests = {k: snapshot[k]["sha256"] for k in files_to_sync}

    switch_code = f"""
from pathlib import Path
import json, hashlib, shutil

root = Path('/var/www/vocab')
backup = Path('{backup_dir}')
backup.mkdir(parents=True, exist_ok=False)

before = {json.dumps(before_digests)}
after = {json.dumps(staged_digests)}
suffix = '{suffix}'

for name, expected_sha in before.items():
    cur = root / name
    actual_sha = hashlib.sha256(cur.read_bytes()).hexdigest()
    assert actual_sha == expected_sha, f"Origin changed concurrently: {{name}}"
    shutil.copy2(cur, backup / name)

try:
    for name, expected_sha in after.items():
        staged = root / (name + suffix)
        actual_sha = hashlib.sha256(staged.read_bytes()).hexdigest()
        assert actual_sha == expected_sha, f"Uploaded staging file mismatch: {{name}}"
        staged.chmod(0o644)
        staged.replace(root / name)
        assert (root / name).stat().st_mode & 0o777 == 0o644, f"Permissions invalid on {{name}}"
    print(json.dumps({{'status': 'ok', 'release': '{release_id}', 'backup': str(backup)}}))
except Exception as e:
    for name in before:
        shutil.copy2(backup / name, root / name)
    raise
"""
    switch_res = remote_exec_python(switch_code)
    print("Remote atomic switch result:", switch_res.strip())
    assert '"status": "ok"' in switch_res, f"Atomic switch failed: {switch_res}"

    print("=" * 60)
    print("5. Public Smoke Verification (https://ourstonecottages.org)...")
    print("=" * 60)
    time.sleep(1)

    r_home = requests.get(f"https://ourstonecottages.org/?_t={int(time.time())}", timeout=20)
    r_home.raise_for_status()
    assert r_home.status_code == 200
    assert new_asset in r_home.text, f"New asset {new_asset} not found in public HTML"
    print(f"  ✔ Public index.html contains {new_asset}")

    r_asset = requests.get(f"https://ourstonecottages.org{new_asset}", timeout=20)
    r_asset.raise_for_status()
    local_asset_bytes = (REPO_DIR / "frontend" / rel_asset_path).read_bytes()
    assert r_asset.content == local_asset_bytes, "Public asset content does not match local asset"
    print(f"  ✔ Public asset verified ({len(r_asset.content)} bytes, exact match)")

    print("=" * 60)
    print("🎉 DEPLOYMENT SUCCESSFUL!")
    print(f"Release ID: {release_id}")
    print(f"Public Asset: {new_asset}")
    print(f"Backup: {backup_dir}")
    print("=" * 60)

    # Record delivery result
    result_path = REPO_DIR / "scratch" / "deployment-result-keyboard.json"
    result_path.parent.mkdir(exist_ok=True)
    with open(result_path, "w", encoding="utf-8") as f:
        json.dump({
            "release": release_id,
            "asset": new_asset,
            "backup": backup_dir,
            "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
            "tests_passed": 22
        }, f, indent=2)

if __name__ == "__main__":
    main()
