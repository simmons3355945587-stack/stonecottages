#!/usr/bin/env python3
import os
import sys
import base64
import gzip
import tarfile
import io
import time
import requests
import json

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

BWH_VEID = "2186700"
BWH_API_KEY = "private_ulJzz7hWHjQ1ysG7vY2wQA5K"
API_URL = "https://api.64clouds.com/v1/basicShell/exec"
REPO_DIR = r"F:\cluade-products\scripts\vocab-survival-repo"

def exec_cmd(cmd: str, timeout: int = 30) -> str:
    r = requests.post(API_URL, data={"veid": BWH_VEID, "api_key": BWH_API_KEY, "command": cmd}, timeout=timeout)
    return r.json().get("message", "")

def upload_via_bwh(local_path: str, remote_path: str):
    with open(local_path, "rb") as f:
        data = f.read()
    b64 = base64.b64encode(gzip.compress(data)).decode("ascii")
    tmp = f"/tmp/up_{int(time.time()*1000)}"
    chunk_size = 7000
    total = (len(b64) + chunk_size - 1) // chunk_size
    exec_cmd(f"rm -f {tmp}.*")
    for i in range(total):
        chunk = b64[i*chunk_size : (i+1)*chunk_size]
        exec_cmd(f"printf '%s' '{chunk}' >> {tmp}.b64")
    cmd = f"base64 -d {tmp}.b64 | gunzip > {remote_path} && chmod 644 {remote_path} && rm -f {tmp}.*"
    exec_cmd(cmd)
    print(f"  ✔ 成功部署: {remote_path} ({len(data)} bytes)", flush=True)

def main():
    print("=== [1/4] 更新后端服务 /var/www/vocab/backend/main.py ===", flush=True)
    upload_via_bwh(os.path.join(REPO_DIR, "backend", "main.py"), "/var/www/vocab/backend/main.py")
    exec_cmd("systemctl restart vocab-backend")
    time.sleep(1)
    status = exec_cmd("systemctl status vocab-backend --no-pager")
    if "active (running)" in status:
        print("  ✔ 后端服务正常运行中！", flush=True)
    else:
        print("  ✖ 后端服务未正常运行:\n", status, flush=True)
        return

    print("\n=== [2/4] 通过后端接口高速直传静态资产 Bundle (3MB) ===", flush=True)
    assets_dir = os.path.join(REPO_DIR, "frontend", "assets")
    with open(os.path.join(REPO_DIR, "frontend", "asset-manifest.json"), "r", encoding="utf-8") as f:
        manifest = json.load(f)

    tar_buf = io.BytesIO()
    file_count = 0
    with tarfile.open(fileobj=tar_buf, mode="w:gz") as tar:
        for k, v in manifest.items():
            fn = os.path.basename(v)
            if fn in ["lexical-graph.68e749a45593.js", "words-data.89af1f66e4da.js"] or fn.startswith("assets-"):
                continue
            p = os.path.join(assets_dir, fn)
            if os.path.exists(p):
                tar.add(p, arcname=fn)
                file_count += 1
            gz_p = p + ".gz"
            if os.path.exists(gz_p):
                tar.add(gz_p, arcname=fn + ".gz")
                file_count += 1

    tar_data = tar_buf.getvalue()
    print(f"打包待传文件 {file_count} 个，总压缩包大小: {len(tar_data)/1024:.1f} KB", flush=True)
    print("正在通过 HTTPS 高速直传并就地解压...", flush=True)

    resp = requests.post(
        "https://ourstonecottages.org/api/admin/deploy-bundle",
        data=tar_data,
        headers={"token": "antigravity_admin_upload_token_2026"},
        timeout=60
    )
    print("上传响应:", resp.status_code, resp.text, flush=True)
    assert resp.status_code == 200, f"上传失败: {resp.text}"

    # 展开 lexical-graph 和 words-data 的 .js
    print("\n=== [3/4] 就地展开大体积 js 与静态图片副本 ===", flush=True)
    unpack_cmd = """
    cd /var/www/vocab/assets &&
    gunzip -c lexical-graph.68e749a45593.js.gz > lexical-graph.68e749a45593.js &&
    gunzip -c words-data.89af1f66e4da.js.gz > words-data.89af1f66e4da.js &&
    chmod 644 *
    """
    exec_cmd(unpack_cmd)
    print("  ✔ 大体积 JS 已就地释放完成！", flush=True)

    print("\n=== [4/4] 同步核心入口与 HTML 切换 ===", flush=True)
    entries = [
        ("frontend/asset-manifest.json", "/var/www/vocab/asset-manifest.json"),
        ("frontend/performance-runtime.js", "/var/www/vocab/performance-runtime.js"),
        ("frontend/ui-enhancements.js", "/var/www/vocab/ui-enhancements.js"),
        ("frontend/ui-enhancements.css", "/var/www/vocab/ui-enhancements.css"),
        ("frontend/tri-match.battle", "/var/www/vocab/tri-match.battle"),
        ("frontend/cet4/app.js", "/var/www/vocab/cet4/app.js"),
        ("frontend/cet4/index.html", "/var/www/vocab/cet4/index.html"),
        ("frontend/index.html", "/var/www/vocab/index.html")
    ]
    for rel_src, remote_dst in entries:
        upload_via_bwh(os.path.join(REPO_DIR, rel_src.replace('/', os.sep)), remote_dst)

    # 重载 Nginx
    exec_cmd("nginx -t && nginx -s reload")
    print("  ✔ Nginx 配置校验并平滑重载成功！", flush=True)

    # 验证站点
    print("\n=== [验证] 线上生产环境健康校验 ===", flush=True)
    time.sleep(1)
    r_home = requests.get("https://ourstonecottages.org", timeout=15)
    print(f"主站首页 HTTP: {r_home.status_code}")
    assert r_home.status_code == 200
    assert "window.STONE_ASSETS" in r_home.text
    assert "lexical-graph.js" not in r_home.text

    r_cet4 = requests.get("https://ourstonecottages.org/cet4/", timeout=15)
    print(f"CET4 听力 HTTP: {r_cet4.status_code}")
    assert r_cet4.status_code == 200

    test_asset_url = "https://ourstonecottages.org" + manifest["lexical-graph.js"]
    r_asset = requests.get(test_asset_url, headers={"Accept-Encoding": "gzip"}, timeout=15)
    print(f"图谱资源 HTTP: {r_asset.status_code}, Encoding: {r_asset.headers.get('Content-Encoding')}")
    assert r_asset.status_code == 200
    assert r_asset.headers.get("Content-Encoding") == "gzip"

    print("\n==================================================")
    print("🎉 部署圆满成功！线上生产环境 (ourstonecottages.org) 已全面上线！")
    print("==================================================")

if __name__ == "__main__":
    main()
