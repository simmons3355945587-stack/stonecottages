import os
import json
import sqlite3
import hashlib
import secrets
import time
import urllib.request
import urllib.parse
from typing import Optional, List, Dict, Any
from fastapi import FastAPI, HTTPException, Header, Depends, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import jwt

SECRET_KEY = "antigravity_secret_jwt_key_vocab_game_prod"
DB_PATH = "/var/www/vocab/backend/vocab.db"

app = FastAPI(title="Vocabulary Survival & Admin Portal Cloud Gateway", version="3.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    with get_db() as conn:
        cur = conn.cursor()
        # Users table
        cur.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            salt TEXT NOT NULL,
            password_hash TEXT NOT NULL,
            role TEXT DEFAULT 'user',
            custom_api_key TEXT DEFAULT '',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        """)
        # Profiles table
        cur.execute("""
        CREATE TABLE IF NOT EXISTS profiles (
            user_id INTEGER PRIMARY KEY,
            hp INTEGER DEFAULT 100,
            san INTEGER DEFAULT 100,
            level INTEGER DEFAULT 1,
            xp INTEGER DEFAULT 100,
            combo INTEGER DEFAULT 1,
            won_rounds INTEGER DEFAULT 0,
            gacha_cards TEXT DEFAULT '[]',
            marks_json TEXT DEFAULT '{}',
            custom_words_json TEXT DEFAULT '[]',
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        )
        """)
        # Dict cache table
        cur.execute("""
        CREATE TABLE IF NOT EXISTS dict_cache (
            word TEXT PRIMARY KEY,
            data_json TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        """)
        # Server security config table
        cur.execute("""
        CREATE TABLE IF NOT EXISTS server_config (
            key TEXT PRIMARY KEY,
            value TEXT NOT NULL
        )
        """)
        # Active IP bindings (1 IP = 1 Active User Account)
        cur.execute("""
        CREATE TABLE IF NOT EXISTS active_ip_sessions (
            ip TEXT PRIMARY KEY,
            user_id INTEGER NOT NULL,
            username TEXT NOT NULL,
            last_active TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        )
        """)
        conn.commit()

init_db()

def get_client_ip(request: Request) -> str:
    forwarded = request.headers.get("X-Forwarded-For")
    if forwarded:
        return forwarded.split(",")[0].strip()
    real_ip = request.headers.get("X-Real-IP")
    if real_ip:
        return real_ip.strip()
    return request.client.host if request.client else "127.0.0.1"

def hash_password(password: str, salt: str) -> str:
    return hashlib.sha256((password + salt).encode('utf-8')).hexdigest()

def create_token(user_id: int, username: str, role: str) -> str:
    payload = {
        "sub": str(user_id),
        "username": username,
        "role": role,
        "exp": int(time.time()) + (30 * 86400)
    }
    return jwt.encode(payload, SECRET_KEY, algorithm="HS256")

def get_current_user(authorization: Optional[str] = Header(None)):
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="缺少登录令牌，请重新登录")
    token = authorization.split(" ", 1)[1].strip()
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        return payload
    except Exception as e:
        raise HTTPException(status_code=401, detail=f"登录令牌失效: {str(e)}")

def require_admin(user: dict = Depends(get_current_user)):
    with get_db() as conn:
        cur = conn.cursor()
        cur.execute("SELECT role, username FROM users WHERE id = ?", (int(user.get("sub", 0)),))
        row = cur.fetchone()
        if not row:
            raise HTTPException(status_code=403, detail="用户不存在")
        if row["role"] != "admin":
            raise HTTPException(status_code=403, detail="需要站长 Admin 管理员权限")
    return user

class RegisterReq(BaseModel):
    username: str
    password: str
    custom_api_key: Optional[str] = ""

class LoginReq(BaseModel):
    username: str
    password: str

class ProfileSyncReq(BaseModel):
    hp: Optional[int] = 100
    san: Optional[int] = 100
    level: Optional[int] = 1
    xp: Optional[int] = 100
    combo: Optional[int] = 1
    wonRounds: Optional[int] = 0
    gachaCards: Optional[List[Any]] = []
    marks: Optional[Dict[str, int]] = {}
    customWords: Optional[List[str]] = []

class ServerConfigReq(BaseModel):
    gemini_key: Optional[str] = None
    ai_access_mode: Optional[str] = None

class AIScenarioReq(BaseModel):
    system_prompt: str
    user_prompt: str

class UserResetPwdReq(BaseModel):
    new_password: Optional[str] = "030522"

@app.get("/api/health")
def health():
    return {
        "status": "ok",
        "app": "ourstonecottages Gateway",
        "version": "3.0",
        "timestamp": int(time.time())
    }

@app.get("/api/dict/{word}")
def get_dict_entry(word: str):
    w = word.strip().lower()
    with get_db() as conn:
        cur = conn.cursor()
        cur.execute("SELECT data_json FROM dict_cache WHERE word = ?", (w,))
        row = cur.fetchone()
        if row and row["data_json"]:
            try:
                return json.loads(row["data_json"])
            except Exception:
                pass

    url = f"https://api.dictionaryapi.dev/api/v2/entries/en/{urllib.parse.quote(w)}"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=6) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            with get_db() as conn:
                conn.execute("INSERT OR REPLACE INTO dict_cache (word, data_json) VALUES (?, ?)", (w, json.dumps(data, ensure_ascii=False)))
                conn.commit()
            return data
    except Exception as e:
        raise HTTPException(status_code=404, detail=f"Word '{w}' not found in dictionary: {str(e)}")

@app.post("/api/register")
def register(req: RegisterReq, request: Request):
    client_ip = get_client_ip(request)
    uname = req.username.strip()
    pwd = req.password.strip()
    if len(uname) < 2 or len(pwd) < 4:
        raise HTTPException(status_code=400, detail="用户名至少 2 位，密码至少 4 位")
    
    with get_db() as conn:
        cur = conn.cursor()
        
        # 限制每个 IP 只能注册一个账号
        cur.execute("SELECT username FROM active_ip_sessions WHERE ip = ?", (client_ip,))
        ip_row = cur.fetchone()
        if ip_row and ip_row["username"] != uname:
            raise HTTPException(
                status_code=400,
                detail=f"安全限制：当前 IP 已注册账号 [{ip_row['username']}]，每个 IP 仅限一个账号。如忘记密码请联系站长重置：3355945587@qq.com"
            )

        cur.execute("SELECT COUNT(*) FROM users")
        user_count = cur.fetchone()[0]
        # 只有系统首个注册用户自动成为最高管理员，后续注册一律为普通用户
        role = "admin" if user_count == 0 else "user"
        
        salt = secrets.token_hex(16)
        pwd_hash = hash_password(pwd, salt)
        try:
            cur.execute("INSERT INTO users (username, salt, password_hash, role, custom_api_key) VALUES (?, ?, ?, ?, ?)",
                        (uname, salt, pwd_hash, role, req.custom_api_key or ""))
            user_id = cur.lastrowid
            cur.execute("INSERT INTO profiles (user_id, hp, san, level, xp, combo, won_rounds, gacha_cards, marks_json, custom_words_json) VALUES (?, 100, 100, 1, 100, 1, 0, '[]', '{}', '[]')", (user_id,))
            
            # 记录 IP 绑定
            cur.execute("INSERT OR REPLACE INTO active_ip_sessions (ip, user_id, username, last_active) VALUES (?, ?, ?, CURRENT_TIMESTAMP)", (client_ip, user_id, uname))
            conn.commit()
        except sqlite3.IntegrityError:
            raise HTTPException(status_code=400, detail="用户名已存在，请直接登录。如忘记密码请联系站长：3355945587@qq.com")
            
    token = create_token(user_id, uname, role)
    return {
        "status": "success",
        "token": token,
        "user": {"id": user_id, "username": uname, "role": role, "is_admin": role == "admin"}
    }

@app.post("/api/login")
def login(req: LoginReq, request: Request):
    client_ip = get_client_ip(request)
    uname = req.username.strip()
    pwd = req.password.strip()
    with get_db() as conn:
        cur = conn.cursor()
        cur.execute("SELECT id, username, salt, password_hash, role, custom_api_key FROM users WHERE username = ?", (uname,))
        row = cur.fetchone()
        if not row:
            raise HTTPException(status_code=401, detail="用户不存在。如忘记用户名请联系站长：3355945587@qq.com")
        
        if hash_password(pwd, row["salt"]) != row["password_hash"]:
            raise HTTPException(status_code=401, detail="密码错误。如忘记密码请联系站长重置：3355945587@qq.com")
            
        role = row["role"]

        # 限制每个 IP 只能登录一个账号（管理员除外）
        if role != "admin":
            cur.execute("SELECT user_id, username FROM active_ip_sessions WHERE ip = ?", (client_ip,))
            ip_row = cur.fetchone()
            if ip_row and ip_row["user_id"] != row["id"]:
                raise HTTPException(
                    status_code=403,
                    detail=f"安全限制：当前 IP 已绑定账号 [{ip_row['username']}]，每个 IP 仅允许登录一个账号。如需解绑请联系站长：3355945587@qq.com"
                )

        # 更新 IP 会话绑定
        cur.execute("INSERT OR REPLACE INTO active_ip_sessions (ip, user_id, username, last_active) VALUES (?, ?, ?, CURRENT_TIMESTAMP)", (client_ip, row["id"], row["username"]))
        conn.commit()

        token = create_token(row["id"], row["username"], role)
        return {
            "status": "success",
            "token": token,
            "user": {
                "id": row["id"],
                "username": row["username"],
                "role": role,
                "is_admin": role == "admin",
                "custom_api_key": row["custom_api_key"]
            }
        }

@app.get("/api/me")
def get_me(user: dict = Depends(get_current_user)):
    with get_db() as conn:
        cur = conn.cursor()
        cur.execute("SELECT id, username, role, custom_api_key, created_at FROM users WHERE id = ?", (int(user["sub"]),))
        row = cur.fetchone()
        if not row:
            raise HTTPException(status_code=404, detail="用户不存在")
        role = row["role"]
        return {
            "id": row["id"],
            "username": row["username"],
            "role": role,
            "is_admin": role == "admin",
            "custom_api_key": row["custom_api_key"]
        }

@app.get("/api/profile")
def get_profile(user: dict = Depends(get_current_user)):
    with get_db() as conn:
        cur = conn.cursor()
        cur.execute("SELECT * FROM profiles WHERE user_id = ?", (int(user["sub"]),))
        row = cur.fetchone()
        if not row:
            return {"hp": 100, "san": 100, "level": 1, "xp": 100, "combo": 1, "wonRounds": 0, "gachaCards": [], "marks": {}, "customWords": []}
        return {
            "hp": row["hp"],
            "san": row["san"],
            "level": row["level"],
            "xp": row["xp"],
            "combo": row["combo"],
            "wonRounds": row["won_rounds"],
            "gachaCards": json.loads(row["gacha_cards"] or "[]"),
            "marks": json.loads(row["marks_json"] or "{}"),
            "customWords": json.loads(row["custom_words_json"] or "[]")
        }

@app.post("/api/sync")
def sync_profile(req: ProfileSyncReq, user: dict = Depends(get_current_user)):
    with get_db() as conn:
        cur = conn.cursor()
        cur.execute("""
        INSERT INTO profiles (user_id, hp, san, level, xp, combo, won_rounds, gacha_cards, marks_json, custom_words_json, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
        ON CONFLICT(user_id) DO UPDATE SET
            hp=excluded.hp,
            san=excluded.san,
            level=excluded.level,
            xp=excluded.xp,
            combo=excluded.combo,
            won_rounds=excluded.won_rounds,
            gacha_cards=excluded.gacha_cards,
            marks_json=excluded.marks_json,
            custom_words_json=excluded.custom_words_json,
            updated_at=CURRENT_TIMESTAMP
        """, (
            int(user["sub"]),
            req.hp,
            req.san,
            req.level,
            req.xp,
            req.combo,
            req.wonRounds,
            json.dumps(req.gachaCards, ensure_ascii=False),
            json.dumps(req.marks, ensure_ascii=False),
            json.dumps(req.customWords, ensure_ascii=False)
        ))
        conn.commit()
    return {"status": "synced", "timestamp": int(time.time())}

# ==========================================
# 👑 Admin 控制台专属 API
# ==========================================
@app.get("/api/admin/overview")
def admin_overview(admin: dict = Depends(require_admin)):
    with get_db() as conn:
        cur = conn.cursor()
        cur.execute("SELECT COUNT(*) FROM users")
        total_users = cur.fetchone()[0]

        cur.execute("SELECT COUNT(*) FROM dict_cache")
        cached_words = cur.fetchone()[0]

        cur.execute("SELECT gacha_cards, marks_json FROM profiles")
        all_profiles = cur.fetchall()

        total_cards_drawn = 0
        total_marks = 0
        for p in all_profiles:
            try:
                cards = json.loads(p["gacha_cards"] or "[]")
                total_cards_drawn += len(cards)
                m = json.loads(p["marks_json"] or "{}")
                total_marks += len(m)
            except Exception:
                pass

        cur.execute("SELECT key, value FROM server_config")
        configs = {r["key"]: r["value"] for r in cur.fetchall()}

        return {
            "status": "success",
            "stats": {
                "total_users": total_users,
                "cached_words": cached_words,
                "total_cards_drawn": total_cards_drawn,
                "total_marks": total_marks,
                "server_gemini_key_set": bool(configs.get("gemini_key")),
                "ai_access_mode": configs.get("ai_access_mode", "admin_only")
            }
        }

@app.get("/api/admin/server-health")
def admin_server_health(admin: dict = Depends(require_admin)):
    mem_total_kb, mem_avail_kb = 0, 0
    try:
        with open("/proc/meminfo", "r") as f:
            for line in f:
                if line.startswith("MemTotal:"):
                    mem_total_kb = int(line.split()[1])
                elif line.startswith("MemAvailable:"):
                    mem_avail_kb = int(line.split()[1])
    except Exception:
        pass
    mem_used_mb = round((mem_total_kb - mem_avail_kb) / 1024, 1)
    mem_total_mb = round(mem_total_kb / 1024, 1)
    mem_percent = round(((mem_total_kb - mem_avail_kb) / max(1, mem_total_kb)) * 100, 1)

    stat = os.statvfs('/')
    disk_total_gb = round((stat.f_blocks * stat.f_frsize) / (1024**3), 2)
    disk_free_gb = round((stat.f_bavail * stat.f_frsize) / (1024**3), 2)
    disk_used_gb = round(disk_total_gb - disk_free_gb, 2)
    disk_percent = round((disk_used_gb / max(0.1, disk_total_gb)) * 100, 1)

    try:
        with open("/proc/loadavg", "r") as f:
            load1, load5, load15 = f.read().split()[:3]
    except Exception:
        load1, load5, load15 = "0.0", "0.0", "0.0"

    uptime_str = "0"
    try:
        with open("/proc/uptime", "r") as f:
            sec = float(f.read().split()[0])
            days = int(sec // 86400)
            hours = int((sec % 86400) // 3600)
            mins = int((sec % 3600) // 60)
            uptime_str = f"{days}天 {hours}小时 {mins}分"
    except Exception:
        pass

    db_size_kb = 0
    try:
        db_size_kb = round(os.path.getsize(DB_PATH) / 1024, 1)
    except Exception:
        pass

    return {
        "status": "success",
        "cpu_load": f"{load1}, {load5}, {load15}",
        "ram": {"used_mb": mem_used_mb, "total_mb": mem_total_mb, "percent": mem_percent},
        "disk": {"used_gb": disk_used_gb, "total_gb": disk_total_gb, "percent": disk_percent},
        "uptime": uptime_str,
        "db_size_kb": db_size_kb,
        "os_version": "AlmaLinux 9 (BandwagonHost US-CA)"
    }

@app.get("/api/admin/users")
def admin_user_list(admin: dict = Depends(require_admin)):
    with get_db() as conn:
        cur = conn.cursor()
        cur.execute("""
        SELECT u.id, u.username, u.role, u.created_at,
               p.level, p.xp, p.won_rounds, p.gacha_cards, p.marks_json, p.custom_words_json, p.updated_at,
               ip.ip as bound_ip
        FROM users u
        LEFT JOIN profiles p ON u.id = p.user_id
        LEFT JOIN active_ip_sessions ip ON u.id = ip.user_id
        ORDER BY u.id ASC
        """)
        rows = cur.fetchall()
        users_list = []
        for r in rows:
            cards = json.loads(r["gacha_cards"] or "[]") if r["gacha_cards"] else []
            marks = json.loads(r["marks_json"] or "{}") if r["marks_json"] else {}
            customs = json.loads(r["custom_words_json"] or "[]") if r["custom_words_json"] else []
            users_list.append({
                "id": r["id"],
                "username": r["username"],
                "role": r["role"],
                "created_at": r["created_at"],
                "level": r["level"] or 1,
                "xp": r["xp"] or 0,
                "won_rounds": r["won_rounds"] or 0,
                "cards_count": len(cards),
                "cards_list": cards,
                "marks_count": len(marks),
                "custom_words_count": len(customs),
                "bound_ip": r["bound_ip"] or "-",
                "last_active": r["updated_at"] or r["created_at"]
            })
        return {"users": users_list}

@app.delete("/api/admin/users/{user_id}")
def admin_delete_user(user_id: int, admin: dict = Depends(require_admin)):
    admin_id = int(admin.get("sub", 0))
    if user_id == admin_id:
        raise HTTPException(status_code=400, detail="不能删除当前登录的管理员账号自身")
        
    with get_db() as conn:
        cur = conn.cursor()
        cur.execute("SELECT username FROM users WHERE id = ?", (user_id,))
        row = cur.fetchone()
        if not row:
            raise HTTPException(status_code=404, detail="目标用户不存在")
        uname = row["username"]
        if uname in ["允安", "林允安"]:
            raise HTTPException(status_code=400, detail="不能删除站长核心主账号")
            
        cur.execute("DELETE FROM profiles WHERE user_id = ?", (user_id,))
        cur.execute("DELETE FROM users WHERE id = ?", (user_id,))
        cur.execute("DELETE FROM active_ip_sessions WHERE user_id = ?", (user_id,))
        conn.commit()
        
    return {"status": "success", "message": f"用户 [{uname}] 及档案与 IP 绑定已成功删除"}

@app.post("/api/admin/users/{user_id}/reset-password")
def admin_reset_password(user_id: int, req: Optional[UserResetPwdReq] = None, admin: dict = Depends(require_admin)):
    new_pwd = (req.new_password if req and req.new_password else "030522").strip()
    if len(new_pwd) < 4:
        raise HTTPException(status_code=400, detail="新密码至少需要 4 位字符")
        
    with get_db() as conn:
        cur = conn.cursor()
        cur.execute("SELECT username FROM users WHERE id = ?", (user_id,))
        row = cur.fetchone()
        if not row:
            raise HTTPException(status_code=404, detail="目标用户不存在")
            
        salt = secrets.token_hex(16)
        pwd_hash = hash_password(new_pwd, salt)
        cur.execute("UPDATE users SET salt = ?, password_hash = ? WHERE id = ?", (salt, pwd_hash, user_id))
        cur.execute("DELETE FROM active_ip_sessions WHERE user_id = ?", (user_id,))
        conn.commit()
        
    return {"status": "success", "message": f"用户 [{row['username']}] 的密码已重置为 [{new_pwd}]，IP 绑定已解除"}

@app.post("/api/admin/save-config")
def admin_save_config(req: ServerConfigReq, admin: dict = Depends(require_admin)):
    with get_db() as conn:
        if req.gemini_key is not None:
            conn.execute("INSERT OR REPLACE INTO server_config (key, value) VALUES ('gemini_key', ?)", (req.gemini_key.strip(),))
        if req.ai_access_mode:
            conn.execute("INSERT OR REPLACE INTO server_config (key, value) VALUES ('ai_access_mode', ?)", (req.ai_access_mode.strip(),))
        conn.commit()
    return {"status": "success", "message": "服务端 AI 安全配置已更新"}

@app.post("/api/admin/test-ai")
def admin_test_ai(admin: dict = Depends(require_admin)):
    with get_db() as conn:
        cur = conn.cursor()
        cur.execute("SELECT value FROM server_config WHERE key = 'gemini_key'")
        row = cur.fetchone()
        if not row or not row["value"]:
            raise HTTPException(status_code=400, detail="服务端尚未配置 Gemini API Key")
        gemini_key = row["value"]

    start_time = time.time()
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.7-flash:generateContent?key={urllib.parse.quote(gemini_key)}"
    payload = {
        "contents": [{"role": "user", "parts": [{"text": "Reply with 'HEALTH_OK' in one word."}]}],
        "generationConfig": {"temperature": 0.1}
    }
    try:
        data_bytes = json.dumps(payload).encode("utf-8")
        api_req = urllib.request.Request(url, data=data_bytes, headers={"Content-Type": "application/json"})
        with urllib.request.urlopen(api_req, timeout=10) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            elapsed = round((time.time() - start_time) * 1000, 1)
            reply = data["candidates"][0]["content"]["parts"][0]["text"].strip()
            return {"status": "success", "latency_ms": elapsed, "reply": reply}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Gemini API 测试失败: {str(e)}")

@app.post("/api/ai/scenario")
def ai_scenario_proxy(req: AIScenarioReq, user: dict = Depends(get_current_user)):
    with get_db() as conn:
        cur = conn.cursor()
        cur.execute("SELECT key, value FROM server_config")
        configs = {r["key"]: r["value"] for r in cur.fetchall()}

    gemini_key = configs.get("gemini_key")
    access_mode = configs.get("ai_access_mode", "admin_only")

    if access_mode == "admin_only" and user.get("role") != "admin":
        raise HTTPException(status_code=403, detail="AI 生成仅限管理员。普通用户请使用离线矩阵生成。")

    if not gemini_key:
        raise HTTPException(status_code=400, detail="服务端尚未配置 Gemini API Key")

    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.7-flash:generateContent?key={urllib.parse.quote(gemini_key)}"
    payload = {
        "contents": [{"role": "user", "parts": [{"text": f"{req.system_prompt}\n\n{req.user_prompt}"}]}],
        "generationConfig": {"temperature": 0.7, "responseMimeType": "application/json"}
    }

    try:
        data_bytes = json.dumps(payload).encode("utf-8")
        api_req = urllib.request.Request(url, data=data_bytes, headers={"Content-Type": "application/json"})
        with urllib.request.urlopen(api_req, timeout=12) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            text = data["candidates"][0]["content"]["parts"][0]["text"]
            return {"status": "success", "result": text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Gemini API 调用异常: {str(e)}")
