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

app = FastAPI(title="Vocabulary Survival & Admin Portal Cloud Gateway", version="3.4")

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
        cur.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            salt TEXT NOT NULL,
            password_hash TEXT NOT NULL,
            role TEXT DEFAULT 'user',
            can_use_quota INTEGER DEFAULT 0,
            custom_api_key TEXT DEFAULT '',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        ''')
        
        # Check column existence for migration
        cur.execute("PRAGMA table_info(profiles)")
        p_cols = [r["name"] if isinstance(r, sqlite3.Row) else r[1] for r in cur.fetchall()]
        if "novel_progress_json" not in p_cols:
            try: cur.execute("ALTER TABLE profiles ADD COLUMN novel_progress_json TEXT DEFAULT '{}'")
            except Exception: pass
        if "novel_saves_json" not in p_cols:
            try: cur.execute("ALTER TABLE profiles ADD COLUMN novel_saves_json TEXT DEFAULT '[]'")
            except Exception: pass

        cur.execute("PRAGMA table_info(users)")
        cols = [r["name"] if isinstance(r, sqlite3.Row) else r[1] for r in cur.fetchall()]
        if "can_use_quota" not in cols:
            try: cur.execute("ALTER TABLE users ADD COLUMN can_use_quota INTEGER DEFAULT 0")
            except Exception: pass

        # Profiles table
        cur.execute('''
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
            novel_progress_json TEXT DEFAULT '{}',
            novel_saves_json TEXT DEFAULT '[]',
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        )
        ''')
        
        # Dict cache table (EN)
        cur.execute('''
        CREATE TABLE IF NOT EXISTS dict_cache (
            word TEXT PRIMARY KEY,
            data_json TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        ''')
        
        # Dict cache table (ZH)
        cur.execute('''
        CREATE TABLE IF NOT EXISTS dict_cache_zh (
            word TEXT PRIMARY KEY,
            data_json TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        ''')
        
        # Server security config table
        cur.execute('''
        CREATE TABLE IF NOT EXISTS server_config (
            key TEXT PRIMARY KEY,
            value TEXT NOT NULL
        )
        ''')
        
        # Active IP bindings (1 IP = 1 Active User Account)
        cur.execute('''
        CREATE TABLE IF NOT EXISTS active_ip_sessions (
            ip TEXT PRIMARY KEY,
            user_id INTEGER NOT NULL,
            username TEXT NOT NULL,
            last_active TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        )
        ''')
        
        # 预置默认配置
        cur.execute("INSERT OR IGNORE INTO server_config (key, value) VALUES ('ai_access_mode', 'whitelist')")
        cur.execute("INSERT OR IGNORE INTO server_config (key, value) VALUES ('mimo_key', 'tp-caizyosz42fllfy4vymkxfo9yaqy392ed5nsatp59zz3hwns')")
        cur.execute("INSERT OR IGNORE INTO server_config (key, value) VALUES ('ai_driver_mode', 'auto')")
        
        # 强制修正主管理员账号角色与额度权限 (林允安 / 允安 / id=1 永不丢权)
        cur.execute("UPDATE users SET role = 'admin', can_use_quota = 1 WHERE username IN ('林允安', '允安', 'admin', 'Admin', 'AdminTest') OR id = 1")
        conn.commit()

try:
    init_db()
except Exception as e:
    print(f"DB init warning: {e}")

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
        user_id = int(payload.get("sub", 0))
        with get_db() as conn:
            cur = conn.cursor()
            cur.execute("SELECT id, username, role, can_use_quota, custom_api_key FROM users WHERE id = ?", (user_id,))
            row = cur.fetchone()
            if row:
                actual_role = row["role"]
                uname = row["username"]
                can_use_quota = bool(row["can_use_quota"])
                if uname in ["允安", "林允安", "AdminTest", "admin", "Admin"] or user_id == 1:
                    actual_role = "admin"
                    can_use_quota = True
                    if row["role"] != "admin" or row["can_use_quota"] != 1:
                        cur.execute("UPDATE users SET role = 'admin', can_use_quota = 1 WHERE id = ?", (user_id,))
                        conn.commit()
                return {
                    "sub": str(row["id"]),
                    "username": uname,
                    "role": actual_role,
                    "is_admin": (actual_role == "admin"),
                    "can_use_quota": can_use_quota,
                    "custom_api_key": row["custom_api_key"] or ""
                }
        return payload
    except Exception as e:
        raise HTTPException(status_code=401, detail=f"登录令牌失效: {str(e)}")

def require_admin(user: dict = Depends(get_current_user)):
    with get_db() as conn:
        cur = conn.cursor()
        user_id = int(user.get("sub", 0))
        cur.execute("SELECT role, username FROM users WHERE id = ?", (user_id,))
        row = cur.fetchone()
        if not row:
            raise HTTPException(status_code=403, detail="用户不存在")
        if row["role"] != "admin" and row["username"] not in ["允安", "林允安", "admin", "Admin", "AdminTest"] and user_id != 1:
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
    novelProgress: Optional[Dict[str, Any]] = {}
    novelSaves: Optional[List[Any]] = []

class ServerConfigReq(BaseModel):
    gemini_key: Optional[str] = None
    mimo_key: Optional[str] = None
    ai_access_mode: Optional[str] = None
    ai_driver_mode: Optional[str] = None

class AIScenarioReq(BaseModel):
    system_prompt: str
    user_prompt: str

class UserResetPwdReq(BaseModel):
    new_password: Optional[str] = "030522"

class ToggleQuotaReq(BaseModel):
    enabled: Optional[bool] = None

@app.get("/api/health")
def health():
    return {
        "status": "ok",
        "app": "ourstonecottages Gateway",
        "version": "3.4",
        "timestamp": int(time.time())
    }

def fetch_fallback_ee(w: str):
    """Fallback English-English dictionary using Youdao EE (WordNet/Oxford)"""
    url = f"https://dict.youdao.com/jsonapi?q={urllib.parse.quote(w)}"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
    with urllib.request.urlopen(req, timeout=5) as resp:
        d = json.loads(resp.read().decode("utf-8"))

    phone = ""
    simple = d.get("simple", {}).get("word", [])
    if simple and isinstance(simple, list):
        phone = simple[0].get("usphone") or simple[0].get("ukphone") or simple[0].get("phone") or ""
    if not phone and "ec" in d:
        ec_word = d.get("ec", {}).get("word", [])
        if ec_word and isinstance(ec_word, list):
            phone = ec_word[0].get("usphone") or ec_word[0].get("ukphone") or ""

    ee = d.get("ee", {}).get("word", {})
    trs = ee.get("trs", [])
    if not trs:
        return None

    meanings = []
    for tr in trs:
        pos = tr.get("pos", "definition")
        items = tr.get("tr", [])
        defs = []
        for it in items:
            defn = it.get("l", {}).get("i", "")
            exam = ""
            exam_obj = it.get("exam", {}).get("i", {}).get("f", {}).get("l", [])
            if exam_obj and isinstance(exam_obj, list) and len(exam_obj) > 0:
                exam = exam_obj[0].get("i", "")
            if defn:
                defs.append({"definition": defn, "example": exam})
        if defs:
            meanings.append({"partOfSpeech": pos, "definitions": defs})

    if not meanings:
        return None

    return {
        "word": w,
        "phonetic": f"/{phone}/" if phone else "",
        "meanings": meanings,
        "source": "youdao_ee"
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
                cached = json.loads(row["data_json"])
                if cached:
                    return cached
            except Exception:
                pass

    # 1. Primary: Free Dictionary API (api.dictionaryapi.dev)
    try:
        url = f"https://api.dictionaryapi.dev/api/v2/entries/en/{urllib.parse.quote(w)}"
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=4) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            if data and (isinstance(data, list) or isinstance(data, dict)):
                with get_db() as conn:
                    conn.execute("INSERT OR REPLACE INTO dict_cache (word, data_json) VALUES (?, ?)", (w, json.dumps(data, ensure_ascii=False)))
                    conn.commit()
                return data
    except Exception:
        pass

    # 2. Fallback: Youdao EE High-Availability English-English definitions
    try:
        fb = fetch_fallback_ee(w)
        if fb:
            with get_db() as conn:
                conn.execute("INSERT OR REPLACE INTO dict_cache (word, data_json) VALUES (?, ?)", (w, json.dumps(fb, ensure_ascii=False)))
                conn.commit()
            return fb
    except Exception:
        pass

    raise HTTPException(status_code=404, detail=f"Word '{w}' not found in dictionary")

@app.get("/api/dict-zh/{word}")
def get_dict_zh_entry(word: str):
    w = word.strip().lower()
    with get_db() as conn:
        cur = conn.cursor()
        cur.execute("SELECT data_json FROM dict_cache_zh WHERE word = ?", (w,))
        row = cur.fetchone()
        if row and row["data_json"]:
            try:
                return json.loads(row["data_json"])
            except Exception:
                pass

    # Query Youdao Dict API
    url = f"https://dict.youdao.com/jsonapi?q={urllib.parse.quote(w)}"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
        with urllib.request.urlopen(req, timeout=6) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            ec = data.get("ec", {})
            word_list = ec.get("word", [])
            trs_list = []
            phonetic_us = ""
            phonetic_uk = ""
            if word_list:
                w_info = word_list[0]
                phonetic_us = w_info.get("usphone", "")
                phonetic_uk = w_info.get("ukphone", "")
                for tr in w_info.get("trs", []):
                    tran = tr.get("tr", [{}])[0].get("l", {}).get("i", [""])[0]
                    if tran:
                        trs_list.append(tran)

            if not trs_list:
                web_trans = data.get("web_trans", {}).get("web-translation", [])
                for wt in web_trans:
                    trans = [t.get("value", "") for t in wt.get("trans", []) if t.get("value")]
                    if trans:
                        trs_list.append(", ".join(trans))

            res = {
                "word": w,
                "phonetic_us": phonetic_us,
                "phonetic_uk": phonetic_uk,
                "definitions": trs_list
            }

            with get_db() as conn:
                conn.execute("INSERT OR REPLACE INTO dict_cache_zh (word, data_json) VALUES (?, ?)", (w, json.dumps(res, ensure_ascii=False)))
                conn.commit()

            return res
    except Exception:
        return {
            "word": w,
            "phonetic_us": "",
            "phonetic_uk": "",
            "definitions": []
        }

@app.post("/api/register")
def register(req: RegisterReq, request: Request):
    client_ip = get_client_ip(request)
    uname = req.username.strip()
    pwd = req.password.strip()
    if len(uname) < 2 or len(pwd) < 4:
        raise HTTPException(status_code=400, detail="用户名至少 2 位，密码至少 4 位")
    
    with get_db() as conn:
        cur = conn.cursor()
        
        is_admin_uname = uname in ["允安", "林允安", "admin", "Admin", "AdminTest"]
        if not is_admin_uname:
            cur.execute("SELECT username FROM active_ip_sessions WHERE ip = ?", (client_ip,))
            ip_row = cur.fetchone()
            if ip_row and ip_row["username"] != uname:
                raise HTTPException(
                    status_code=400,
                    detail=f"安全限制：当前 IP 已注册账号 [{ip_row['username']}]，每个 IP 仅限一个账号。如忘记密码请联系站长重置：3355945587@qq.com"
                )

        cur.execute("SELECT COUNT(*) FROM users")
        user_count = cur.fetchone()[0]
        role = "admin" if (user_count == 0 or is_admin_uname) else "user"
        can_use_quota = 1 if role == "admin" else 0
        
        salt = secrets.token_hex(16)
        pwd_hash = hash_password(pwd, salt)
        try:
            cur.execute("INSERT INTO users (username, salt, password_hash, role, can_use_quota, custom_api_key) VALUES (?, ?, ?, ?, ?, ?)",
                        (uname, salt, pwd_hash, role, can_use_quota, req.custom_api_key or ""))
            user_id = cur.lastrowid
            cur.execute("INSERT OR IGNORE INTO profiles (user_id, hp, san, level, xp, combo, won_rounds) VALUES (?, 100, 100, 1, 100, 1, 0)", (user_id,))
            cur.execute("INSERT OR REPLACE INTO active_ip_sessions (ip, user_id, username, last_active) VALUES (?, ?, ?, CURRENT_TIMESTAMP)",
                        (client_ip, user_id, uname))
            conn.commit()
        except sqlite3.IntegrityError:
            raise HTTPException(status_code=400, detail=f"用户名 [{uname}] 已被占用，请更换")

    token = create_token(user_id, uname, role)
    return {
        "status": "success",
        "token": token,
        "user": {
            "id": user_id,
            "username": uname,
            "role": role,
            "is_admin": (role == "admin"),
            "can_use_quota": bool(can_use_quota),
            "custom_api_key": req.custom_api_key or ""
        }
    }

@app.post("/api/login")
def login(req: LoginReq, request: Request):
    client_ip = get_client_ip(request)
    uname = req.username.strip()
    pwd = req.password.strip()

    with get_db() as conn:
        cur = conn.cursor()
        cur.execute("SELECT id, username, salt, password_hash, role, can_use_quota, custom_api_key FROM users WHERE username = ?", (uname,))
        row = cur.fetchone()
        if not row:
            raise HTTPException(status_code=400, detail="用户名或密码错误")

        calc_hash = hash_password(pwd, row["salt"])
        if calc_hash != row["password_hash"]:
            raise HTTPException(status_code=400, detail="用户名或密码错误")

        user_id = row["id"]
        actual_role = row["role"]
        can_use_quota = bool(row["can_use_quota"])
        if uname in ["允安", "林允安", "admin", "Admin", "AdminTest"] or user_id == 1:
            actual_role = "admin"
            can_use_quota = True
            if row["role"] != "admin" or row["can_use_quota"] != 1:
                cur.execute("UPDATE users SET role = 'admin', can_use_quota = 1 WHERE id = ?", (user_id,))

        cur.execute("INSERT OR REPLACE INTO active_ip_sessions (ip, user_id, username, last_active) VALUES (?, ?, ?, CURRENT_TIMESTAMP)",
                    (client_ip, user_id, uname))
        conn.commit()

    token = create_token(user_id, uname, actual_role)
    return {
        "status": "success",
        "token": token,
        "user": {
            "id": user_id,
            "username": uname,
            "role": actual_role,
            "is_admin": (actual_role == "admin"),
            "can_use_quota": can_use_quota,
            "custom_api_key": row["custom_api_key"] or ""
        }
    }

@app.get("/api/profile")
def get_profile(user: dict = Depends(get_current_user)):
    user_id = int(user["sub"])
    with get_db() as conn:
        cur = conn.cursor()
        cur.execute("SELECT hp, san, level, xp, combo, won_rounds, gacha_cards, marks_json, custom_words_json, novel_progress_json, novel_saves_json FROM profiles WHERE user_id = ?", (user_id,))
        p = cur.fetchone()
        if not p:
            cur.execute("INSERT OR IGNORE INTO profiles (user_id, hp, san, level, xp, combo, won_rounds) VALUES (?, 100, 100, 1, 100, 1, 0)", (user_id,))
            conn.commit()
            return {
                "hp": 100, "san": 100, "level": 1, "xp": 100, "combo": 1, "wonRounds": 0,
                "gachaCards": [], "marks": {}, "customWords": [], "novelProgress": {}, "novelSaves": [],
                "user": user
            }

        return {
            "hp": p["hp"],
            "san": p["san"],
            "level": p["level"],
            "xp": p["xp"],
            "combo": p["combo"],
            "wonRounds": p["won_rounds"],
            "gachaCards": json.loads(p["gacha_cards"] or "[]"),
            "marks": json.loads(p["marks_json"] or "{}"),
            "customWords": json.loads(p["custom_words_json"] or "[]"),
            "novelProgress": json.loads(p["novel_progress_json"] or "{}"),
            "novelSaves": json.loads(p["novel_saves_json"] or "[]"),
            "user": user
        }

@app.post("/api/sync")
def sync_profile(req: ProfileSyncReq, user: dict = Depends(get_current_user)):
    user_id = int(user["sub"])
    with get_db() as conn:
        cur = conn.cursor()
        cur.execute('''
        INSERT INTO profiles (user_id, hp, san, level, xp, combo, won_rounds, gacha_cards, marks_json, custom_words_json, novel_progress_json, novel_saves_json, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
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
            novel_progress_json=excluded.novel_progress_json,
            novel_saves_json=excluded.novel_saves_json,
            updated_at=CURRENT_TIMESTAMP
        ''', (
            user_id,
            req.hp,
            req.san,
            req.level,
            req.xp,
            req.combo,
            req.wonRounds,
            json.dumps(req.gachaCards, ensure_ascii=False),
            json.dumps(req.marks, ensure_ascii=False),
            json.dumps(req.customWords, ensure_ascii=False),
            json.dumps(req.novelProgress, ensure_ascii=False),
            json.dumps(req.novelSaves, ensure_ascii=False)
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
                "server_mimo_key_set": bool(configs.get("mimo_key", "tp-caizyosz42fllfy4vymkxfo9yaqy392ed5nsatp59zz3hwns")),
                "ai_access_mode": configs.get("ai_access_mode", "whitelist"),
                "ai_driver_mode": configs.get("ai_driver_mode", "auto")
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

    try:
        stat = os.statvfs('/')
        disk_total_gb = round((stat.f_blocks * stat.f_frsize) / (1024**3), 2)
        disk_free_gb = round((stat.f_bavail * stat.f_frsize) / (1024**3), 2)
        disk_used_gb = round(disk_total_gb - disk_free_gb, 2)
        disk_percent = round((disk_used_gb / max(0.1, disk_total_gb)) * 100, 1)
    except Exception:
        disk_total_gb, disk_used_gb, disk_percent = 40.0, 5.0, 12.5

    return {
        "status": "success",
        "server": {
            "uptime_sec": int(time.time()),
            "memory": {"used_mb": mem_used_mb, "total_mb": mem_total_mb, "percent": mem_percent},
            "disk": {"used_gb": disk_used_gb, "total_gb": disk_total_gb, "percent": disk_percent}
        }
    }

@app.get("/api/admin/users")
def admin_list_users(admin: dict = Depends(require_admin)):
    with get_db() as conn:
        cur = conn.cursor()
        cur.execute('''
        SELECT 
            u.id, u.username, u.role, u.can_use_quota, u.custom_api_key, u.created_at,
            p.level, p.xp, p.won_rounds, p.gacha_cards, p.marks_json,
            s.ip AS bound_ip, s.last_active
        FROM users u
        LEFT JOIN profiles p ON u.id = p.user_id
        LEFT JOIN active_ip_sessions s ON u.id = s.user_id
        ORDER BY u.id ASC
        ''')
        rows = cur.fetchall()
        user_list = []
        for r in rows:
            cards_count = 0
            marks_count = 0
            try:
                if r["gacha_cards"]: cards_count = len(json.loads(r["gacha_cards"]))
                if r["marks_json"]: marks_count = len(json.loads(r["marks_json"]))
            except Exception: pass

            user_list.append({
                "id": r["id"],
                "username": r["username"],
                "role": r["role"],
                "is_admin": (r["role"] == "admin"),
                "can_use_quota": bool(r["can_use_quota"]),
                "has_custom_key": bool(r["custom_api_key"]),
                "level": r["level"] or 1,
                "xp": r["xp"] or 0,
                "cards_count": cards_count,
                "marks_count": marks_count,
                "bound_ip": r["bound_ip"] or "未绑定",
                "last_active": r["last_active"] or r["created_at"]
            })
    return {"status": "success", "users": user_list}

@app.post("/api/admin/users/{user_id}/toggle-quota")
def admin_toggle_quota(user_id: int, req: ToggleQuotaReq, admin: dict = Depends(require_admin)):
    with get_db() as conn:
        cur = conn.cursor()
        cur.execute("SELECT username, role, can_use_quota FROM users WHERE id = ?", (user_id,))
        row = cur.fetchone()
        if not row:
            raise HTTPException(status_code=404, detail="目标用户不存在")
            
        uname = row["username"]
        if req.enabled is not None:
            new_val = 1 if req.enabled else 0
        else:
            new_val = 0 if row["can_use_quota"] else 1
            
        cur.execute("UPDATE users SET can_use_quota = ? WHERE id = ?", (new_val, user_id))
        conn.commit()
        
    action_text = "已开启站长共享额度权限" if new_val == 1 else "已收回站长共享额度权限"
    return {
        "status": "success",
        "user_id": user_id,
        "username": uname,
        "can_use_quota": bool(new_val),
        "message": f"用户 [{uname}] {action_text}"
    }

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
        if uname in ["允安", "林允安", "admin", "Admin", "AdminTest"] or user_id == 1:
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
        if req.mimo_key is not None:
            conn.execute("INSERT OR REPLACE INTO server_config (key, value) VALUES ('mimo_key', ?)", (req.mimo_key.strip(),))
        if req.ai_access_mode:
            conn.execute("INSERT OR REPLACE INTO server_config (key, value) VALUES ('ai_access_mode', ?)", (req.ai_access_mode.strip(),))
        if req.ai_driver_mode:
            conn.execute("INSERT OR REPLACE INTO server_config (key, value) VALUES ('ai_driver_mode', ?)", (req.ai_driver_mode.strip(),))
        conn.commit()
    return {"status": "success", "message": "服务端 AI 双通道配置已更新"}

# ==========================================
# 🤖 AI 双通道驱动引擎 (Gemini / MiMo v2.5)
# ==========================================
def call_ai_scenario(system_prompt: str, user_prompt: str, configs: dict) -> str:
    gemini_key = (configs.get("gemini_key") or "").strip()
    mimo_key = (configs.get("mimo_key") or "tp-caizyosz42fllfy4vymkxfo9yaqy392ed5nsatp59zz3hwns").strip()
    driver_mode = (configs.get("ai_driver_mode") or "auto").strip()

    if (driver_mode in ["gemini", "auto"]) and gemini_key:
        try:
            url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.7-flash:generateContent?key={urllib.parse.quote(gemini_key)}"
            payload = {
                "contents": [{"role": "user", "parts": [{"text": f"{system_prompt}\n\n{user_prompt}"}]}],
                "generationConfig": {"temperature": 0.7, "responseMimeType": "application/json"}
            }
            data_bytes = json.dumps(payload).encode("utf-8")
            api_req = urllib.request.Request(url, data=data_bytes, headers={"Content-Type": "application/json"})
            with urllib.request.urlopen(api_req, timeout=12) as resp:
                data = json.loads(resp.read().decode("utf-8"))
                text = data["candidates"][0]["content"]["parts"][0]["text"].strip()
                if text:
                    return text
        except Exception as eg:
            if driver_mode == "gemini":
                raise eg

    if mimo_key:
        url = "https://token-plan-cn.xiaomimimo.com/v1/chat/completions"
        payload = {
            "model": "mimo-v2.5",
            "messages": [
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt}
            ],
            "temperature": 0.7
        }
        data_bytes = json.dumps(payload).encode("utf-8")
        api_req = urllib.request.Request(
            url,
            data=data_bytes,
            headers={
                "Content-Type": "application/json",
                "Authorization": f"Bearer {mimo_key}",
                "User-Agent": "Mozilla/5.0"
            }
        )
        with urllib.request.urlopen(api_req, timeout=20) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            text = data["choices"][0]["message"]["content"].strip()
            if text:
                return text

    raise ValueError("未配置有效的 AI 密钥或所有 AI 通道均响应异常")

@app.post("/api/admin/test-ai")
def admin_test_ai(admin: dict = Depends(require_admin)):
    with get_db() as conn:
        cur = conn.cursor()
        cur.execute("SELECT key, value FROM server_config")
        configs = {r["key"]: r["value"] for r in cur.fetchall()}

    start_time = time.time()
    try:
        reply = call_ai_scenario("Reply with 'HEALTH_OK' in one word.", "Ping test.", configs)
        elapsed = round((time.time() - start_time) * 1000, 1)
        return {"status": "success", "latency_ms": elapsed, "reply": reply[:100]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"AI 服务端双通道测试失败: {str(e)}")

@app.post("/api/ai/scenario")
def ai_scenario_proxy(req: AIScenarioReq, user: dict = Depends(get_current_user)):
    with get_db() as conn:
        cur = conn.cursor()
        cur.execute("SELECT key, value FROM server_config")
        configs = {r["key"]: r["value"] for r in cur.fetchall()}

    access_mode = configs.get("ai_access_mode", "whitelist")
    is_admin = bool(user.get("is_admin", False) or user.get("role") == "admin")
    can_use_quota = bool(user.get("can_use_quota", False)) or is_admin

    if access_mode == "admin_only" and not is_admin:
        raise HTTPException(status_code=403, detail="AI 生成当前处于管理员独占模式。请联系站长开启。")

    if (access_mode in ["whitelist", "authorized_only"]) and not can_use_quota:
        raise HTTPException(status_code=403, detail="当前账号尚未获得站长 AI 额度授权。请联系站长在后台为您开启使用额度权限。")

    try:
        raw_result = call_ai_scenario(req.system_prompt, req.user_prompt, configs)
        cleaned = raw_result.strip().replace("```json", "").replace("```JSON", "").replace("```", "").strip()
        return {"status": "success", "result": cleaned}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"AI 剧情生成失败: {str(e)}")
