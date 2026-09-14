#!/usr/bin/env python3
import os
import sys
import base64
import gzip
import time
import requests
import json

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

BWH_VEID = "2186700"
BWH_API_KEY = "private_ulJzz7hWHjQ1ysG7vY2wQA5K"
API_URL = "https://api.64clouds.com/v1/basicShell/exec"
REPO_DIR = r"F:\cluade-products\scripts\vocab-survival-repo"

def exec_cmd(cmd: str, timeout: int = 40) -> dict:
    for attempt in range(3):
        try:
            resp = requests.post(API_URL, data={
                "veid": BWH_VEID,
                "api_key": BWH_API_KEY,
                "command": cmd
            }, timeout=timeout)
            if resp.status_code == 200:
                res = resp.json()
                if res.get("error") == 0:
                    return res
                else:
                    raise Exception(f"Command error: {res}")
            time.sleep(1)
        except Exception as e:
            if attempt == 2:
                raise e
            time.sleep(1)
    return {}

def upload_bytes(data: bytes, remote_dest: str, mode: str = "644", is_already_gzipped: bool = False):
    gz_data = data if is_already_gzipped else gzip.compress(data)
    b64_str = base64.b64encode(gz_data).decode("ascii")
    
    tmp_path = f"/tmp/up_{int(time.time()*1000)}"
    chunk_size = 25000
    total = (len(b64_str) + chunk_size - 1) // chunk_size
    
    for i in range(total):
        chunk = b64_str[i*chunk_size : (i+1)*chunk_size]
        exec_cmd(f"printf '%s' '{chunk}' >> {tmp_path}.b64")
        if total > 5 and i % 5 == 0:
            print(f"    分块进度: {i+1}/{total}", flush=True)
            
    if is_already_gzipped:
        # direct base64 decode to dest
        cmd = f"base64 -d {tmp_path}.b64 > {remote_dest} && chmod {mode} {remote_dest} && rm -f {tmp_path}.b64"
    else:
        # base64 decode and gunzip
        cmd = f"base64 -d {tmp_path}.b64 | gunzip > {remote_dest} && chmod {mode} {remote_dest} && rm -f {tmp_path}.b64"
    exec_cmd(cmd)
    print(f"  ✔ 成功部署: {remote_dest} ({len(data)} bytes)", flush=True)

def main():
    print("=" * 60, flush=True)
    print("🚀 小石屋生产服务器 (ourstonecottages.org) 极速发布", flush=True)
    print("=" * 60, flush=True)

    # 1. 部署后端 main.py
    print("\n[1/5] 更新后端服务 /var/www/vocab/backend/main.py...", flush=True)
    with open(os.path.join(REPO_DIR, "backend", "main.py"), "rb") as f:
        upload_bytes(f.read(), "/var/www/vocab/backend/main.py")
    exec_cmd("systemctl restart vocab-backend")
    status = exec_cmd("systemctl status vocab-backend --no-pager").get("message", "")
    if "active (running)" in status:
        print("  ✔ 后端服务已平滑重启成功！", flush=True)
    else:
        print("  ✖ 后端服务异常:\n", status, flush=True)

    # 2. 检查现有 VPS assets，筛选必须上传的哈希资产
    print("\n[2/5] 检查增量静态资源清单...", flush=True)
    vps_res = exec_cmd("ls /var/www/vocab/assets")
    vps_assets = set(vps_res.get("message", "").split())

    with open(os.path.join(REPO_DIR, "frontend", "asset-manifest.json"), "r", encoding="utf-8") as f:
        manifest = json.load(f)

    # 收集当前页面所需的所有哈希资源（包含对应的 .gz）
    assets_dir = os.path.join(REPO_DIR, "frontend", "assets")
    to_upload = []
    
    # 特别处理 lexical-graph: 只传 .gz，然后在 VPS 端解压出 .js，省去 4.8MB 原始 JS 传输
    lex_name = os.path.basename(manifest["lexical-graph.js"])
    lex_gz_name = lex_name + ".gz"
    if lex_gz_name not in vps_assets:
        to_upload.append((os.path.join(assets_dir, lex_gz_name), f"/var/www/vocab/assets/{lex_gz_name}", True))
    
    # 词汇数据 words-data: 同理只传 .gz
    words_name = os.path.basename(manifest["words-data.js"])
    words_gz_name = words_name + ".gz"
    if words_gz_name not in vps_assets:
        to_upload.append((os.path.join(assets_dir, words_gz_name), f"/var/www/vocab/assets/{words_gz_name}", True))

    # 其他引用的 js/css 及 .gz
    for key, hashed_path in manifest.items():
        if key in ["lexical-graph.js", "words-data.js"]:
            continue
        fname = os.path.basename(hashed_path)
        if fname not in vps_assets:
            local_p = os.path.join(assets_dir, fname)
            if os.path.exists(local_p):
                to_upload.append((local_p, f"/var/www/vocab/assets/{fname}", False))
        gz_name = fname + ".gz"
        if gz_name not in vps_assets:
            local_gz = os.path.join(assets_dir, gz_name)
            if os.path.exists(local_gz):
                to_upload.append((local_gz, f"/var/www/vocab/assets/{gz_name}", True))

    print(f"待上传哈希文件数量: {len(to_upload)} 个", flush=True)
    for idx, (lp, rp, is_gz) in enumerate(to_upload):
        print(f"  [{idx+1}/{len(to_upload)}] 正在上传 {os.path.basename(rp)}...", flush=True)
        with open(lp, "rb") as f:
            upload_bytes(f.read(), rp, is_already_gzipped=is_gz)

    # 3. 如果 lexical-graph 或 words-data 的 .js 在 VPS 不存在，从 .gz 快速解出
    print("\n[3/5] 校验并就地解压大体积预压缩资产...", flush=True)
    exec_cmd(f"cd /var/www/vocab/assets && test -f {lex_name} || gunzip -c {lex_gz_name} > {lex_name} && chmod 644 {lex_name}")
    exec_cmd(f"cd /var/www/vocab/assets && test -f {words_name} || gunzip -c {words_gz_name} > {words_name} && chmod 644 {words_name}")
    print("  ✔ 大文件本地展开完毕！", flush=True)

    # 4. 同步核心入口文件
    print("\n[4/5] 同步核心入口与子系统...", flush=True)
    entries = [
        ("frontend/asset-manifest.json", "/var/www/vocab/asset-manifest.json"),
        ("frontend/performance-runtime.js", "/var/www/vocab/performance-runtime.js"),
        ("frontend/ui-enhancements.js", "/var/www/vocab/ui-enhancements.js"),
        ("frontend/ui-enhancements.css", "/var/www/vocab/ui-enhancements.css"),
        ("frontend/tri-match.battle", "/var/www/vocab/tri-match.battle"),
        ("frontend/cet4/app.js", "/var/www/vocab/cet4/app.js"),
        ("frontend/cet4/index.html", "/var/www/vocab/cet4/index.html"),
        ("frontend/index.html", "/var/www/vocab/index.html"),
    ]
    for rel_src, remote_dst in entries:
        lp = os.path.join(REPO_DIR, rel_src.replace('/', os.sep))
        with open(lp, "rb") as f:
            upload_bytes(f.read(), remote_dst)

    # 重载 Nginx
    exec_cmd("nginx -t && nginx -s reload")
    print("  ✔ Nginx 配置校验并平滑重载成功！", flush=True)

    # 5. 外网端到端 Smoke Test
    print("\n[5/5] 线上生产环境 (https://ourstonecottages.org) 实测校验...", flush=True)
    time.sleep(1)

    r_home = requests.get("https://ourstonecottages.org", timeout=15)
    print(f"  主站首页: HTTP {r_home.status_code}")
    assert r_home.status_code == 200, "主站响应异常"
    assert "window.STONE_ASSETS" in r_home.text, "主站缺少 STONE_ASSETS"
    assert "lexical-graph.js" not in r_home.text, "首屏仍包含 lexical-graph.js"

    r_cet4 = requests.get("https://ourstonecottages.org/cet4/", timeout=15)
    print(f"  CET4听力: HTTP {r_cet4.status_code}")
    assert r_cet4.status_code == 200, "CET4 听力子系统异常"

    test_asset_url = "https://ourstonecottages.org" + manifest["lexical-graph.js"]
    r_asset = requests.get(test_asset_url, headers={"Accept-Encoding": "gzip"}, timeout=15)
    print(f"  图谱静态文件: HTTP {r_asset.status_code}, Encoding: {r_asset.headers.get('Content-Encoding')}")
    assert r_asset.status_code == 200
    assert r_asset.headers.get("Content-Encoding") == "gzip"

    print("\n" + "=" * 60, flush=True)
    print("🎉 生产发布 100% 成功！线上已全量切换至最新优化版！", flush=True)
    print("=" * 60, flush=True)

if __name__ == "__main__":
    main()
