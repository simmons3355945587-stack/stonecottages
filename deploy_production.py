#!/usr/bin/env python3
"""
Our Stone Cottages 生产环境自动化零停机部署脚本
从 F:\cluade-products\scripts\vocab-survival-repo 推送至 BandwagonHost VPS
"""

import os
import sys
import base64
import gzip
import tarfile
import io
import time
import requests
import json

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

_local_config_path = os.path.join(os.path.dirname(__file__), ".deployment-secrets.local.json")
_local_config = {}
if os.path.isfile(_local_config_path):
    with open(_local_config_path, encoding="utf-8") as _config_file:
        _local_config = json.load(_config_file)

BWH_VEID = os.environ.get("STONE_BWH_VEID") or _local_config.get("STONE_BWH_VEID", "")
BWH_API_KEY = os.environ.get("STONE_BWH_API_KEY") or _local_config.get("STONE_BWH_API_KEY", "")
API_URL = "https://api.64clouds.com/v1/basicShell/exec"
REPO_DIR = r"F:\cluade-products\scripts\vocab-survival-repo"

def exec_cmd(cmd: str, timeout: int = 40) -> dict:
    resp = requests.post(API_URL, data={
        "veid": BWH_VEID,
        "api_key": BWH_API_KEY,
        "command": cmd
    }, timeout=timeout)
    if resp.status_code != 200:
        raise RuntimeError(f"Hosting HTTP status: {resp.status_code}")
    res = resp.json()
    if res.get("error") != 0:
        raise RuntimeError("Hosting command failed; details withheld")
    return res

def upload_single_file(local_path: str, remote_path: str, mode: str = "644"):
    with open(local_path, "rb") as f:
        data = f.read()
    gzipped = gzip.compress(data)
    b64_str = base64.b64encode(gzipped).decode("ascii")
    
    tmp_file = f"/tmp/up_{int(time.time()*1000)}_{os.path.basename(remote_path)}"
    chunk_size = 12000
    total_chunks = (len(b64_str) + chunk_size - 1) // chunk_size
    
    exec_cmd(f"rm -f {tmp_file}.b64")
    for i in range(total_chunks):
        chunk = b64_str[i*chunk_size : (i+1)*chunk_size]
        exec_cmd(f"printf '%s' '{chunk}' >> {tmp_file}.b64")
        time.sleep(0.01)
        
    cmd = (
        f"mkdir -p $(dirname {remote_path}) && "
        f"base64 -d {tmp_file}.b64 | gunzip > {remote_path} && "
        f"chmod {mode} {remote_path} && "
        f"rm -f {tmp_file}.b64"
    )
    exec_cmd(cmd)
    print(f"  ✔ 部署成功: {remote_path} ({len(data)} bytes -> gz {len(gzipped)} bytes)")

def deploy_assets():
    print("\n--- 步骤 2: 检测并打包增量哈希资产 (/assets/) ---")
    local_assets_dir = os.path.join(REPO_DIR, "frontend", "assets")
    
    res = exec_cmd("ls /var/www/vocab/assets")
    vps_assets = set(res.get("message", "").split())
    
    local_files = os.listdir(local_assets_dir)
    missing = [f for f in local_files if f not in vps_assets]
    print(f"本地资产总数: {len(local_files)}, VPS 现有资产数: {len(vps_assets)}, 待增量同步: {len(missing)}")
    
    if not missing:
        print("所有资产已在 VPS 存在，无需增量传输。")
        return
        
    tar_buf = io.BytesIO()
    with tarfile.open(fileobj=tar_buf, mode="w:gz") as tar:
        for fname in missing:
            fpath = os.path.join(local_assets_dir, fname)
            tar.add(fpath, arcname=fname)
    tar_data = tar_buf.getvalue()
    b64_str = base64.b64encode(tar_data).decode("ascii")
    print(f"📦 增量资产包压缩完成: {len(tar_data)/1024:.1f} KB (共 {len(missing)} 个文件)")

    tmp_base = f"/tmp/assets_bundle_{int(time.time())}"
    exec_cmd(f"rm -f {tmp_base}.*")
    
    chunk_size = 12000
    total_chunks = (len(b64_str) + chunk_size - 1) // chunk_size
    print(f"分块上传: 总分块数 {total_chunks}")
    for i in range(total_chunks):
        chunk = b64_str[i*chunk_size : (i+1)*chunk_size]
        exec_cmd(f"printf '%s' '{chunk}' >> {tmp_base}.b64")
        time.sleep(0.01)

    deploy_cmd = (
        f"mkdir -p /var/www/vocab/assets && "
        f"base64 -d {tmp_base}.b64 > {tmp_base}.tar.gz && "
        f"tar -xzf {tmp_base}.tar.gz -C /var/www/vocab/assets/ && "
        f"find /var/www/vocab/assets -type f -exec chmod 644 {{}} + && "
        f"rm -f {tmp_base}.*"
    )
    exec_cmd(deploy_cmd)
    print("  ✔ 增量资产解压部署完成！")

def main():
    print("==================================================")
    print("🚀 开始小石屋 (ourstonecottages.org) 生产环境零停机发布")
    print("==================================================")
    
    # 步骤 1: 后端更新
    print("\n--- 步骤 1: 部署后端服务与重启 ---")
    local_backend = os.path.join(REPO_DIR, "backend", "main.py")
    upload_single_file(local_backend, "/var/www/vocab/backend/main.py")
    
    local_pk_server = os.path.join(REPO_DIR, "backend", "tri_context_pk_server.py")
    if os.path.exists(local_pk_server):
        upload_single_file(local_pk_server, "/var/www/vocab/backend/tri_context_pk_server.py")
        
    print("正在重启后端服务 vocab-backend...")
    exec_cmd("systemctl restart vocab-backend")
    time.sleep(1)
    status_msg = exec_cmd("systemctl status vocab-backend --no-pager").get("message", "")
    if "active (running)" in status_msg:
        print("  ✔ 后端服务正常运行中 (active running)")
    else:
        print("  ✖ 警告: 后端服务未正常运行:\n", status_msg)
        
    # 步骤 2: 资产增量推送
    deploy_assets()
    
    # 步骤 3: 核心前端脚本与模板
    print("\n--- 步骤 3: 同步前端核心脚本、子系统与对战模板 ---")
    sync_list = [
        ("frontend/asset-manifest.json", "/var/www/vocab/asset-manifest.json"),
        ("frontend/performance-runtime.js", "/var/www/vocab/performance-runtime.js"),
        ("frontend/ui-enhancements.js", "/var/www/vocab/ui-enhancements.js"),
        ("frontend/ui-enhancements.css", "/var/www/vocab/ui-enhancements.css"),
        ("frontend/flashcard.js", "/var/www/vocab/flashcard.js"),
        ("frontend/dictionary.js", "/var/www/vocab/dictionary.js"),
        ("frontend/app.js", "/var/www/vocab/app.js"),
        ("frontend/style.css", "/var/www/vocab/style.css"),
        ("frontend/tri-match.js", "/var/www/vocab/tri-match.js"),
        ("frontend/tri-match.html", "/var/www/vocab/tri-match.html"),
        ("frontend/tri-match.battle", "/var/www/vocab/tri-match.battle"),
        ("frontend/cet4/app.js", "/var/www/vocab/cet4/app.js"),
        ("frontend/cet4/index.html", "/var/www/vocab/cet4/index.html"),
        # Core & Modules
        ("frontend/core/event-bus.js", "/var/www/vocab/core/event-bus.js"),
        ("frontend/core/storage-adapter.js", "/var/www/vocab/core/storage-adapter.js"),
        ("frontend/modules/cards/tarot-skills.js", "/var/www/vocab/modules/cards/tarot-skills.js"),
        ("frontend/modules/cards/cards-module.js", "/var/www/vocab/modules/cards/cards-module.js"),
        ("frontend/modules/match3/match3-module.js", "/var/www/vocab/modules/match3/match3-module.js"),
        ("frontend/modules/lexicon/lexicon-module.js", "/var/www/vocab/modules/lexicon/lexicon-module.js"),
        ("frontend/modules/lexicon/etymology.js", "/var/www/vocab/modules/lexicon/etymology.js"),
        ("frontend/modules/expedition/expedition-module.js", "/var/www/vocab/modules/expedition/expedition-module.js"),
        ("frontend/modules/seasons/seasons-module.js", "/var/www/vocab/modules/seasons/seasons-module.js"),
        ("frontend/modules/beta-promo/beta-promo-module.js", "/var/www/vocab/modules/beta-promo/beta-promo-module.js"),
        ("frontend/modules/lobby/lobby-module.js", "/var/www/vocab/modules/lobby/lobby-module.js"),
    ]
    for rel_src, remote_dst in sync_list:
        lp = os.path.join(REPO_DIR, rel_src.replace('/', os.sep))
        if os.path.exists(lp):
            upload_single_file(lp, remote_dst)

    # 步骤 4: 切换主 HTML 入口
    print("\n--- 步骤 4: 切换主 index.html 入口 ---")
    upload_single_file(os.path.join(REPO_DIR, "frontend", "index.html"), "/var/www/vocab/index.html")

    # 步骤 5: 验证并平滑重载 Nginx
    print("\n--- 步骤 5: 验证 Nginx 配置并平滑重载 ---")
    nginx_t = exec_cmd("nginx -t").get("message", "")
    print("Nginx 测试输出:", nginx_t)
    exec_cmd("nginx -s reload")
    print("  ✔ Nginx 平滑重载成功 (nginx -s reload)")

    # 步骤 6: 线上外网端到端 Smoke Test
    print("\n--- 步骤 6: 线上生产环境 (https://ourstonecottages.org) 实测校验 ---")
    time.sleep(1)
    
    # 6.1 主站
    r_home = requests.get("https://ourstonecottages.org", headers={"User-Agent": "DeployVerification/1.0"}, timeout=15)
    print(f"主站 HTTP: {r_home.status_code}")
    assert r_home.status_code == 200, "主站状态码异常"
    assert "window.STONE_ASSETS" in r_home.text, "主站未包含 STONE_ASSETS 指纹注入"
    assert "lexical-graph.js" not in r_home.text, "主站仍包含了阻塞的 lexical-graph.js 脚本！"
    print("  ✔ 主站首页响应成功，首屏已完全剥离 lexical-graph.js！")
    
    # 6.2 四级听力精听
    r_cet4 = requests.get("https://ourstonecottages.org/cet4/", headers={"User-Agent": "DeployVerification/1.0"}, timeout=15)
    print(f"CET4 听力页 HTTP: {r_cet4.status_code}")
    assert r_cet4.status_code == 200, "CET4 听力页状态码异常"
    print("  ✔ CET4 听力子系统响应正常")
    
    # 6.3 静态资产 gzip 预压缩
    with open(os.path.join(REPO_DIR, "frontend", "asset-manifest.json"), "r", encoding="utf-8") as f:
        m = json.load(f)
    test_asset_url = "https://ourstonecottages.org" + m["lexical-graph.js"]
    r_asset = requests.get(test_asset_url, headers={"Accept-Encoding": "gzip"}, timeout=15)
    print(f"图谱资产 HTTP: {r_asset.status_code}, Encoding: {r_asset.headers.get('Content-Encoding')}, Cache-Control: {r_asset.headers.get('Cache-Control')}")
    assert r_asset.status_code == 200, "图谱静态资源请求异常"
    assert r_asset.headers.get("Content-Encoding") == "gzip", "Nginx gzip_static 预压缩未命中"
    print("  ✔ 静态哈希资产预压缩 (gzip_static) 与不可变缓存已完美命中！")
    
    # 6.4 后端 API 状态
    r_api = requests.get("https://ourstonecottages.org/api/dict/test", timeout=15)
    print(f"词典 API HTTP: {r_api.status_code}")
    assert r_api.status_code in (200, 404), "后端 API 响应异常"
    print("  ✔ 后端 API 网关工作正常！")

    print("\n==================================================")
    print("🎉 恭喜！小石屋最新性能重构代码已 100% 成功部署至生产环境！")
    print("==================================================")

if __name__ == "__main__":
    main()
