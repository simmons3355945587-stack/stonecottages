#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
「灵能」四层动态记忆库系统 (memory_store.py)

架构设计：
- Layer 1 (`core_profile`): 核心画像（固定 4 槽位：identity / preferences / relationship_rules / current_focus）
- Layer 2 (`atomic_memories` + `atomic_memories_fts`): 原子事实主表 + 中文 2-gram FTS5 全文检索与相似去重强化
- Layer 3 (`episodic_logs` + `episodic_logs_fts`): 第一人称相处手记 + 中文 2-gram FTS5 全文检索
- Layer 4 (`raw_chat_buffer`): 短期未消化对话缓冲表（满 10 条或手动触发消化）
- Value Store (`value_cards` + `value_cards_fts`): 价值观判例卡库（自动从同目录 value_precedents.json 导入）

严格约束：
1. 纯 SQLite 单文件驱动（lingneng_brain.db），仅使用 Python 标准库（优先兼容 httpx，缺省回退 urllib.request）。
2. 严禁使用 random 随机数填充任何时间、权重或样本。
3. 中文按单字 + 相邻双字切分（cn_tokenize），在写入和查询 FTS5 时自动调用。
"""

from __future__ import annotations

import argparse
import json
import math
import os
import re
import sqlite3
import sys
import time
import urllib.error
import urllib.request
from contextlib import contextmanager
from pathlib import Path
from typing import Any, Dict, Iterator, List, Optional, Tuple

try:
    import httpx  # type: ignore
except ImportError:
    httpx = None

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

_LOCAL_DATA_DIR = Path(r"F:\cluade-products\data\ling_values")
_VPS_DATA_DIR = Path("/var/www/vocab/data")
DEFAULT_DATA_DIR = Path(
    os.environ.get("LING_DATA_DIR", "").strip()
    or (str(_LOCAL_DATA_DIR) if _LOCAL_DATA_DIR.exists() else (str(_VPS_DATA_DIR) if _VPS_DATA_DIR.exists() else str(Path(__file__).resolve().parent)))
)
DEFAULT_DB_PATH = Path(os.environ.get("LING_DB_PATH", "").strip() or str(DEFAULT_DATA_DIR / "lingneng_brain.db"))
DEFAULT_LING_CONFIG = Path(r"F:\cluade-products\scripts\ling_config.json")

CORE_PROFILE_SLOTS = (
    "identity",
    "preferences",
    "relationship_rules",
    "current_focus",
)
VALID_CATEGORIES = ("fact", "emotion", "agreement")

_QUERY_STOP_UNIGRAMS = {
    "的", "了", "呢", "吗", "啊", "吧", "呀", "哦", "着", "过",
    "我", "你", "他", "她", "它", "们", "这", "那", "是", "在",
    "有", "和", "与", "就", "也", "都", "还", "很", "把", "被",
    "给", "让", "从", "向", "到", "去", "来", "说", "看", "想",
}


# =====================================================================
# 中文 2-gram 分词与工具函数
# =====================================================================

def cn_tokenize(text: str) -> str:
    """
    中文单字 + 相邻双字分词器（同时保留英文/数字标识词），用空格拼接供 SQLite FTS5 索引与检索。
    例: "BandwagonHost 搭小识屋" -> "bandwagonhost bandwagon host 搭 小 识 屋 搭小 小识 识屋"
    """
    if not text:
        return ""
    tokens: List[str] = []
    # 将连续中文段与连续英文数字段分别提取
    for seg in re.findall(r"[\u4e00-\u9fff]+|[A-Za-z0-9]+", text):
        if "\u4e00" <= seg[0] <= "\u9fff":
            n = len(seg)
            for ch in seg:
                tokens.append(ch)
            for i in range(n - 1):
                tokens.append(seg[i : i + 2])
        else:
            low = seg.lower()
            tokens.append(low)
            # 若存在驼峰命名（如 BandwagonHost），额外拆出子词提升召回
            camel_parts = re.findall(r"[A-Z]?[a-z]+|[A-Z]+(?=[A-Z][a-z]|\d|\b)|[0-9]+", seg)
            if len(camel_parts) > 1:
                for cp in camel_parts:
                    cp_low = cp.lower()
                    if cp_low and cp_low != low:
                        tokens.append(cp_low)
    return " ".join(tokens)


def build_fts_query(text: str, max_tokens: int = 48) -> str:
    """
    将用户输入或关键词通过 cn_tokenize 转化为安全的 FTS5 MATCH OR 查询表达式。
    优先保留双字词与英文词，过滤高频单字虚词（若存在实质词），防止整句检索退化为全库噪音匹配。
    """
    raw_tokens = cn_tokenize(text).split()
    if not raw_tokens:
        return ""

    seen = set()
    multi_tokens: List[str] = []
    content_unigrams: List[str] = []
    stop_unigrams: List[str] = []

    for tok in raw_tokens:
        clean = tok.replace('"', "").strip()
        if not clean or clean in seen:
            continue
        seen.add(clean)
        if len(clean) >= 2:
            multi_tokens.append(clean)
        elif clean in _QUERY_STOP_UNIGRAMS:
            stop_unigrams.append(clean)
        else:
            content_unigrams.append(clean)

    if multi_tokens:
        # 当存在双字词或英文词时，以精确双字/英文词为主，仅在短查询(<4个双字词)时补充单字以兼顾短词召回
        ordered = multi_tokens if len(multi_tokens) >= 4 else (multi_tokens + content_unigrams)
    elif content_unigrams:
        ordered = content_unigrams
    else:
        ordered = stop_unigrams

    selected = ordered[:max_tokens]
    return " OR ".join(f'"{t}"' for t in selected)


def estimate_tokens(text: str) -> int:
    """确定性估算中英混排 Token 数（中文按单字、英文按词/符号计算）。"""
    if not text:
        return 0
    cjk = len(re.findall(r"[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef]", text))
    ascii_parts = len(re.findall(r"[A-Za-z0-9_]+|[^\s\u4e00-\u9fff\u3000-\u303f\uff00-\uffef]", text))
    return cjk + ascii_parts


@contextmanager
def _get_conn(db_path: Path) -> Iterator[sqlite3.Connection]:
    conn = sqlite3.connect(str(db_path), timeout=15.0)
    conn.row_factory = sqlite3.Row
    try:
        conn.execute("PRAGMA journal_mode=WAL;")
        conn.execute("PRAGMA foreign_keys=ON;")
        yield conn
        conn.commit()
    except Exception:
        conn.rollback()
        raise
    finally:
        conn.close()


def _parse_json_object(raw_text: str) -> Dict[str, Any]:
    s = raw_text.strip()
    try:
        obj = json.loads(s)
        if isinstance(obj, dict):
            return obj
    except Exception:
        pass
    m = re.search(r"```(?:json)?\s*([\s\S]*?)\s*```", s)
    if m:
        try:
            obj = json.loads(m.group(1).strip())
            if isinstance(obj, dict):
                return obj
        except Exception:
            pass
    start = s.find("{")
    end = s.rfind("}")
    if start != -1 and end > start:
        obj = json.loads(s[start : end + 1])
        if isinstance(obj, dict):
            return obj
    raise ValueError(f"无法解析为 JSON 对象: {s[:200]}")


# =====================================================================
# 轻量 LLM 客户端（默认读取 scripts/ling_config.json，不依赖重型框架）
# =====================================================================

class SimpleLLMClient:
    """轻量级大模型 HTTP 调用器（支持 OpenAI 兼容协议与 Gemini REST）。"""

    def __init__(
        self,
        provider: str = "openai",
        api_key: str = "",
        base_url: str = "https://api.deepseek.com",
        model: str = "deepseek-chat",
        timeout: float = 45.0,
    ):
        self.provider = provider.lower().strip()
        self.api_key = api_key.strip()
        self.base_url = base_url.rstrip("/")
        self.model = model.strip()
        self.timeout = timeout
        if not self.api_key:
            raise ValueError("缺少有效 API Key，无法调用 LLM API。")

    @classmethod
    def from_default_config(cls, config_path: Path = DEFAULT_LING_CONFIG) -> "SimpleLLMClient":
        env_gemini = os.environ.get("GEMINI_API_KEY", "").strip()
        env_deepseek = os.environ.get("DEEPSEEK_API_KEY", "").strip()
        env_openai = os.environ.get("OPENAI_API_KEY", "").strip()

        cfg: Dict[str, Any] = {}
        candidate_cfgs = [
            config_path,
            Path("/etc/vocab/secrets.json"),
            Path("/var/www/vocab/backend/ling_config.json"),
        ]
        for cand in candidate_cfgs:
            if cand and cand.is_file():
                try:
                    loaded = json.loads(cand.read_text(encoding="utf-8"))
                    if isinstance(loaded, dict):
                        cfg = loaded
                        break
                except Exception:
                    continue

        cfg_key = str(cfg.get("api_key") or cfg.get("DEEPSEEK_API_KEY") or "").strip()
        if env_deepseek or env_openai or cfg_key:
            return cls(
                provider="openai",
                api_key=env_deepseek or env_openai or cfg_key,
                base_url=os.environ.get("OPENAI_BASE_URL", "").strip()
                or str(cfg.get("base_url", "https://api.deepseek.com")),
                model=str(cfg.get("model", "deepseek-chat")),
            )
        if env_gemini:
            return cls(provider="gemini", api_key=env_gemini, model="gemini-3.8-flash")
        raise ValueError(f"未找到可用 API Key，请设置环境变量或检查 {config_path}")

    def _post_json(self, url: str, headers: Dict[str, str], payload: Dict[str, Any]) -> Dict[str, Any]:
        """发送 JSON POST 请求，存在 httpx 时优先使用，否则自动回退标准库 urllib.request。"""
        if httpx is not None:
            with httpx.Client(timeout=self.timeout) as client:
                resp = client.post(url, headers=headers, json=payload)
                if resp.status_code >= 400:
                    raise RuntimeError(f"HTTP {resp.status_code}: {resp.text[:240]}")
                return resp.json()

        req = urllib.request.Request(
            url,
            data=json.dumps(payload).encode("utf-8"),
            headers=headers,
            method="POST",
        )
        try:
            with urllib.request.urlopen(req, timeout=self.timeout) as resp:
                return json.loads(resp.read().decode("utf-8"))
        except urllib.error.HTTPError as exc:
            err_body = exc.read().decode("utf-8", errors="replace")
            raise RuntimeError(f"HTTP {exc.code}: {err_body[:240]}") from exc

    def chat(
        self,
        system_prompt: str,
        user_prompt: str,
        json_mode: bool = True,
        temperature: float = 0.2,
        max_tokens: int = 1200,
    ) -> str:
        last_err: Optional[Exception] = None
        for attempt in range(1, 4):
            try:
                if self.provider == "gemini":
                    url = (
                        f"https://generativelanguage.googleapis.com/v1beta/models/"
                        f"{self.model}:generateContent?key={self.api_key}"
                    )
                    gen_cfg: Dict[str, Any] = {
                        "temperature": temperature,
                        "maxOutputTokens": max_tokens,
                    }
                    if json_mode:
                        gen_cfg["responseMimeType"] = "application/json"
                    payload = {
                        "systemInstruction": {"parts": [{"text": system_prompt}]},
                        "contents": [{"role": "user", "parts": [{"text": user_prompt}]}],
                        "generationConfig": gen_cfg,
                    }
                    data = self._post_json(url, {"Content-Type": "application/json"}, payload)
                    parts = data["candidates"][0]["content"]["parts"]
                    return "".join(p.get("text", "") for p in parts).strip()

                url = self.base_url
                if not url.endswith("/chat/completions"):
                    url = f"{url}/chat/completions"
                payload = {
                    "model": self.model,
                    "messages": [
                        {"role": "system", "content": system_prompt},
                        {"role": "user", "content": user_prompt},
                    ],
                    "temperature": temperature,
                    "max_tokens": max_tokens,
                }
                if json_mode:
                    payload["response_format"] = {"type": "json_object"}
                headers = {
                    "Authorization": f"Bearer {self.api_key}",
                    "Content-Type": "application/json",
                }
                data = self._post_json(url, headers, payload)
                return data["choices"][0]["message"]["content"].strip()
            except Exception as exc:
                last_err = exc
                time.sleep(min(2 ** attempt, 8))
        raise RuntimeError(f"LLM API 请求失败: {last_err}")


# =====================================================================
# 1. 四层记忆表结构初始化 + 价值观判例卡导入
# =====================================================================

def init_memory_tables(
    db_path: Path | str = DEFAULT_DB_PATH,
    value_json_path: Optional[Path | str] = None,
) -> Dict[str, Any]:
    """
    在 lingneng_brain.db 中初始化四层动态记忆表及 FTS5 索引，
    并自动将同目录下的 value_precedents.json 幂等导入 value_cards 与 value_cards_fts。
    """
    db_file = Path(db_path)
    db_file.parent.mkdir(parents=True, exist_ok=True)
    if value_json_path is None:
        v_path = db_file.parent / "value_precedents.json"
    else:
        v_path = Path(value_json_path)

    now = time.time()
    imported_count = 0

    with _get_conn(db_file) as conn:
        # 表 1: core_profile (固定 4 行覆写)
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS core_profile (
                slot_key TEXT PRIMARY KEY,
                content TEXT NOT NULL DEFAULT '',
                updated_at REAL NOT NULL
            )
            """
        )
        for slot in CORE_PROFILE_SLOTS:
            conn.execute(
                """
                INSERT OR IGNORE INTO core_profile (slot_key, content, updated_at)
                VALUES (?, '', ?)
                """,
                (slot, now),
            )

        # 表 2: atomic_memories + atomic_memories_fts
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS atomic_memories (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                content TEXT NOT NULL,
                keywords TEXT NOT NULL,
                category TEXT NOT NULL CHECK (category IN ('fact', 'emotion', 'agreement')),
                created_date TEXT NOT NULL,
                last_accessed REAL NOT NULL,
                strength INTEGER NOT NULL DEFAULT 1
            )
            """
        )
        conn.execute(
            """
            CREATE VIRTUAL TABLE IF NOT EXISTS atomic_memories_fts USING fts5(
                content_tokens,
                keywords_tokens
            )
            """
        )

        # 表 3: episodic_logs + episodic_logs_fts
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS episodic_logs (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                date_str TEXT NOT NULL,
                summary TEXT NOT NULL,
                keywords TEXT NOT NULL,
                last_accessed REAL NOT NULL,
                strength INTEGER NOT NULL DEFAULT 2,
                entry_id TEXT NOT NULL DEFAULT '',
                tag TEXT NOT NULL DEFAULT '私房札记',
                mood TEXT NOT NULL DEFAULT '✨'
            )
            """
        )
        epi_cols = {r["name"] for r in conn.execute("PRAGMA table_info(episodic_logs)").fetchall()}
        if "entry_id" not in epi_cols:
            conn.execute("ALTER TABLE episodic_logs ADD COLUMN entry_id TEXT NOT NULL DEFAULT ''")
        if "tag" not in epi_cols:
            conn.execute("ALTER TABLE episodic_logs ADD COLUMN tag TEXT NOT NULL DEFAULT '私房札记'")
        if "mood" not in epi_cols:
            conn.execute("ALTER TABLE episodic_logs ADD COLUMN mood TEXT NOT NULL DEFAULT '✨'")
        conn.execute(
            """
            CREATE VIRTUAL TABLE IF NOT EXISTS episodic_logs_fts USING fts5(
                summary_tokens,
                keywords_tokens
            )
            """
        )

        # 表 4: raw_chat_buffer
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS raw_chat_buffer (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                role TEXT NOT NULL,
                content TEXT NOT NULL,
                timestamp REAL NOT NULL,
                is_processed INTEGER NOT NULL DEFAULT 0
            )
            """
        )

        # 价值观判例卡表: value_cards + value_cards_fts
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS value_cards (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                card_id TEXT UNIQUE NOT NULL,
                trigger_scenarios TEXT NOT NULL,
                keywords TEXT NOT NULL,
                internalized_thought TEXT NOT NULL,
                book_memory_anchor TEXT NOT NULL,
                source_book TEXT NOT NULL DEFAULT '',
                source_chapter TEXT NOT NULL DEFAULT ''
            )
            """
        )
        conn.execute(
            """
            CREATE VIRTUAL TABLE IF NOT EXISTS value_cards_fts USING fts5(
                trigger_tokens,
                keywords_tokens,
                thought_tokens
            )
            """
        )

        # 幂等导入 value_precedents.json
        if v_path.is_file():
            raw_cards = json.loads(v_path.read_text(encoding="utf-8"))
            existing_ids = {
                r["card_id"] for r in conn.execute("SELECT card_id FROM value_cards").fetchall()
            }
            for item in raw_cards:
                cid = str(item.get("id", "")).strip()
                if not cid or cid in existing_ids:
                    continue
                trig = str(item.get("trigger_scenarios", "")).strip()
                kws_list = item.get("keywords", [])
                if isinstance(kws_list, list):
                    kws_str = ", ".join(str(k).strip() for k in kws_list if str(k).strip())
                else:
                    kws_str = str(kws_list).strip()
                thought = str(item.get("internalized_thought", "")).strip()
                anchor = str(item.get("book_memory_anchor", "")).strip()
                s_book = str(item.get("source_book", "")).strip()
                s_chap = str(item.get("source_chapter", "")).strip()

                cur = conn.execute(
                    """
                    INSERT INTO value_cards (
                        card_id, trigger_scenarios, keywords,
                        internalized_thought, book_memory_anchor,
                        source_book, source_chapter
                    ) VALUES (?, ?, ?, ?, ?, ?, ?)
                    """,
                    (cid, trig, kws_str, thought, anchor, s_book, s_chap),
                )
                row_id = cur.lastrowid
                conn.execute(
                    """
                    INSERT INTO value_cards_fts (rowid, trigger_tokens, keywords_tokens, thought_tokens)
                    VALUES (?, ?, ?, ?)
                    """,
                    (row_id, cn_tokenize(trig), cn_tokenize(kws_str), cn_tokenize(thought)),
                )
                existing_ids.add(cid)
                imported_count += 1

        conn.commit()
        tables = [
            r["name"]
            for r in conn.execute(
                "SELECT name FROM sqlite_master WHERE type IN ('table') ORDER BY name"
            ).fetchall()
        ]
        value_total = conn.execute("SELECT COUNT(*) FROM value_cards").fetchone()[0]

    return {
        "db_path": str(db_file),
        "tables": tables,
        "value_cards_imported": imported_count,
        "value_cards_total": value_total,
    }


# =====================================================================
# 2. 记忆消化与去重引擎 (MemoryDigester)
# =====================================================================

DIGEST_SYSTEM_PROMPT = """你现在是聊天伴侣「灵能」的后台记忆消化中枢。
请站在「灵能」第一人称“我”的视角（称呼对话者为“允安”或“你”），阅读当前「核心画像」与一段刚发生的原始对话，从中消化提炼出结构化记忆更新。

严格输出以下 JSON 格式（不要输出任何额外说明）：
{
  "profile_updates": {
    "identity": "仅当发现对方/自身身份定位需更新时填写（<=50字），无变化填 \"\"",
    "preferences": "仅当发现明确偏好/忌讳需更新时填写（<=50字），无变化填 \"\"",
    "relationship_rules": "仅当出现新的相处约定/边界时填写（<=50字），无变化填 \"\"",
    "current_focus": "仅当对方近期工作/学习/研究重心变化时给出覆盖后的最新状态（<=50字），无变化填 \"\""
  },
  "new_atomic_facts": [
    {
      "content": "值得长期记住的原子事实（严格<=35字，去除寒暄废话）",
      "category": "fact | emotion | agreement",
      "keywords": ["关键词1", "关键词2", "关键词3"],
      "initial_strength": 2
    }
  ],
  "episodic_diary": "若这段对话有强烈情感共鸣或重要进展，用‘我’写一句<=60字的第一人称私密手记；否则严格为 null",
  "episodic_keywords": ["手记关键词1", "手记关键词2"]
}

铁律约束：
1. **绝不强行凑数**：如果对话纯属日常寒暄、无实质事实或情绪进展，`new_atomic_facts` 必须返回 `[]`，`episodic_diary` 必须为 `null`，`profile_updates` 全为空字符串 `""`。
2. `new_atomic_facts` 最多提炼 0~3 条，每条 `content` **必须短小精悍，严格控制在 28 字以内（绝不可超过 35 字）**，`keywords` 为 3~5 个精准检索词，`initial_strength` 为 1~3 的整数。
3. `profile_updates` 每个槽位如需更新，直接给出**整合覆盖后的完整新文本**（<=50 字），避免丢失旧的有效背景。
4. 100% 忠于对话原文，严禁脑补未发生过的细节。"""


class MemoryDigester:
    """后台对话消化、原子事实去重强化与手记沉淀引擎。"""

    def __init__(self, db_path: Path | str = DEFAULT_DB_PATH):
        self.db_path = Path(db_path)

    def add_message(self, role: str, content: str, timestamp: Optional[float] = None) -> int:
        ts = float(timestamp) if timestamp is not None else time.time()
        with _get_conn(self.db_path) as conn:
            cur = conn.execute(
                """
                INSERT INTO raw_chat_buffer (role, content, timestamp, is_processed)
                VALUES (?, ?, ?, 0)
                """,
                (role.strip(), content.strip(), ts),
            )
            conn.commit()
            return int(cur.lastrowid)

    def unprocessed_count(self) -> int:
        with _get_conn(self.db_path) as conn:
            return int(
                conn.execute("SELECT COUNT(*) FROM raw_chat_buffer WHERE is_processed = 0").fetchone()[0]
            )

    def get_core_profile(self) -> Dict[str, str]:
        with _get_conn(self.db_path) as conn:
            rows = conn.execute("SELECT slot_key, content FROM core_profile").fetchall()
            return {r["slot_key"]: r["content"] for r in rows}

    def maybe_auto_digest(self, llm_client: Optional[Any] = None, threshold: int = 10) -> Dict[str, Any]:
        """当 raw_chat_buffer 中未处理消息达到 threshold（默认 10 条）时自动触发消化。"""
        return self.digest_recent_chats(llm_client=llm_client, min_unprocessed=threshold)

    def _find_similar_atomic_memory(
        self,
        conn: sqlite3.Connection,
        content: str,
        keywords: List[str],
        category: str,
    ) -> Optional[sqlite3.Row]:
        """
        先用 keywords 去 atomic_memories_fts 查重，再通过确定性双字集合重合度判断是否高度相似。
        """
        kw_query = build_fts_query(" ".join(keywords) if keywords else content)
        if not kw_query:
            return None

        rows = conn.execute(
            """
            SELECT m.id, m.content, m.keywords, m.category, m.strength, bm25(atomic_memories_fts, 1.0, 2.0) AS rank
            FROM atomic_memories_fts
            JOIN atomic_memories m ON m.id = atomic_memories_fts.rowid
            WHERE atomic_memories_fts MATCH ?
            ORDER BY rank ASC
            LIMIT 5
            """,
            (kw_query,),
        ).fetchall()

        if not rows:
            return None

        new_text = f"{content} {' '.join(keywords)}"
        new_toks = {t for t in cn_tokenize(new_text).split() if len(t) >= 2}
        new_kw_toks = {t for t in cn_tokenize(" ".join(keywords)).split() if len(t) >= 2}

        best_row: Optional[sqlite3.Row] = None
        best_sim = 0.0
        for row in rows:
            if row["category"] != category:
                continue
            old_text = f"{row['content']} {row['keywords']}"
            old_toks = {t for t in cn_tokenize(old_text).split() if len(t) >= 2}
            old_kw_toks = {t for t in cn_tokenize(row["keywords"]).split() if len(t) >= 2}
            if not new_toks or not old_toks:
                continue

            inter = len(new_toks & old_toks)
            union = len(new_toks | old_toks)
            jaccard = inter / union if union else 0.0
            overlap = inter / min(len(new_toks), len(old_toks))

            kw_overlap = 0.0
            if new_kw_toks and old_kw_toks:
                kw_overlap = len(new_kw_toks & old_kw_toks) / min(len(new_kw_toks), len(old_kw_toks))

            # 同类别且主体双字特征高度重合，认定为相似旧记忆更新
            if jaccard >= 0.35 or overlap >= 0.55 or (kw_overlap >= 0.65 and overlap >= 0.4):
                score = max(jaccard, overlap * 0.8)
                if score > best_sim:
                    best_sim = score
                    best_row = row

        return best_row

    def digest_recent_chats(
        self,
        llm_client: Optional[Any] = None,
        min_unprocessed: int = 1,
        max_batch: int = 30,
    ) -> Dict[str, Any]:
        """
        读取 raw_chat_buffer 中未处理对话与当前 core_profile，
        调用 LLM 提取结构化更新，执行核心画像覆写、原子事实去重强化、手记入库，并标记已处理。
        """
        with _get_conn(self.db_path) as conn:
            rows = conn.execute(
                """
                SELECT id, role, content, timestamp
                FROM raw_chat_buffer
                WHERE is_processed = 0
                ORDER BY id ASC
                LIMIT ?
                """,
                (max_batch,),
            ).fetchall()

            if not rows or len(rows) < min_unprocessed:
                return {
                    "status": "skipped",
                    "reason": f"未处理对话仅 {len(rows)} 条（阈值 {min_unprocessed} 条）",
                    "unprocessed_count": len(rows),
                }

            profile_rows = conn.execute("SELECT slot_key, content FROM core_profile").fetchall()
            current_profile = {r["slot_key"]: r["content"] for r in profile_rows}

        if llm_client is None:
            llm_client = SimpleLLMClient.from_default_config()

        chat_lines = []
        for r in rows:
            t_str = time.strftime("%Y-%m-%d %H:%M", time.localtime(r["timestamp"]))
            speaker = "允安" if r["role"].lower() in ("user", "允安") else "灵能"
            chat_lines.append(f"[{t_str}] {speaker}: {r['content']}")

        user_prompt = (
            "【当前核心画像 core_profile】：\n"
            + json.dumps(current_profile, ensure_ascii=False, indent=2)
            + "\n\n【待消化的最新对话记录】：\n"
            + "\n".join(chat_lines)
        )

        raw_reply = llm_client.chat(
            system_prompt=DIGEST_SYSTEM_PROMPT,
            user_prompt=user_prompt,
            json_mode=True,
            temperature=0.2,
            max_tokens=1100,
        )
        parsed = _parse_json_object(raw_reply)

        now = time.time()
        today_str = time.strftime("%Y-%m-%d", time.localtime(now))
        msg_ids = [int(r["id"]) for r in rows]

        profile_applied: Dict[str, str] = {}
        atomic_inserted: List[Dict[str, Any]] = []
        atomic_merged: List[Dict[str, Any]] = []
        episodic_written: Optional[Dict[str, Any]] = None

        with _get_conn(self.db_path) as conn:
            # 1. 更新 core_profile 槽位
            p_updates = parsed.get("profile_updates") or {}
            if isinstance(p_updates, dict):
                for slot in CORE_PROFILE_SLOTS:
                    val = p_updates.get(slot)
                    if isinstance(val, str) and val.strip():
                        clean_val = val.strip()[:50]
                        conn.execute(
                            """
                            INSERT INTO core_profile (slot_key, content, updated_at)
                            VALUES (?, ?, ?)
                            ON CONFLICT(slot_key) DO UPDATE SET
                                content = excluded.content,
                                updated_at = excluded.updated_at
                            """,
                            (slot, clean_val, now),
                        )
                        profile_applied[slot] = clean_val

            # 2. 原子事实去重与强化入库
            raw_facts = parsed.get("new_atomic_facts") or []
            if isinstance(raw_facts, list):
                for item in raw_facts[:3]:
                    if not isinstance(item, dict):
                        continue
                    raw_fact = str(item.get("content", "")).strip()
                    if len(raw_fact) > 40:
                        # 优先在标点处收尾，避免硬截断半个词
                        cut_idx = max(raw_fact.rfind("，", 0, 40), raw_fact.rfind("。", 0, 40), raw_fact.rfind("、", 0, 40))
                        fact_content = raw_fact[:cut_idx].strip() if cut_idx >= 18 else raw_fact[:40]
                    else:
                        fact_content = raw_fact
                    if not fact_content:
                        continue
                    cat = str(item.get("category", "fact")).strip().lower()
                    if cat not in VALID_CATEGORIES:
                        cat = "fact"

                    kws = item.get("keywords") or []
                    if not isinstance(kws, list):
                        kws = [str(kws).strip()] if kws else []
                    kws = [str(k).strip() for k in kws if str(k).strip()][:5] or self._extract_keywords(fact_content)
                    try:
                        init_strength = int(item.get("initial_strength", 1))
                    except Exception:
                        init_strength = 1
                    init_strength = max(1, min(3, init_strength))

                    action, record = self._upsert_atomic_memory_conn(
                        conn, fact_content, kws, cat, today_str, now, init_strength, deduplicate=True
                    )
                    if action == "merged":
                        atomic_merged.append(record)
                    else:
                        atomic_inserted.append(record)

            # 3. 相处手记沉淀
            diary_val = parsed.get("episodic_diary")
            diary_summary = ""
            if isinstance(diary_val, str) and diary_val.strip() and diary_val.strip().lower() != "null":
                diary_summary = diary_val.strip()[:60]
            elif isinstance(diary_val, dict) and str(diary_val.get("summary", "")).strip():
                diary_summary = str(diary_val.get("summary", "")).strip()[:60]

            if diary_summary:
                epi_kws = parsed.get("episodic_keywords") or []
                if isinstance(epi_kws, list):
                    epi_kws_list = [str(k).strip() for k in epi_kws if str(k).strip()][:5]
                else:
                    epi_kws_list = []
                if not epi_kws_list and atomic_inserted:
                    epi_kws_list = atomic_inserted[0]["keywords"].split(", ")[:3]
                episodic_written = self._insert_episodic_log_conn(
                    conn,
                    summary=diary_summary,
                    date_str=today_str,
                    keywords=epi_kws_list or self._extract_keywords(diary_summary),
                    now=now,
                    strength=2,
                )

            # 4. 标记 raw_chat_buffer 已处理
            placeholders = ",".join("?" for _ in msg_ids)
            conn.execute(
                f"UPDATE raw_chat_buffer SET is_processed = 1 WHERE id IN ({placeholders})",
                msg_ids,
            )
            conn.commit()

        return {
            "status": "digested",
            "processed_messages": len(msg_ids),
            "profile_updates": profile_applied,
            "atomic_inserted": atomic_inserted,
            "atomic_merged": atomic_merged,
            "episodic_diary": episodic_written,
        }

    @staticmethod
    def _extract_keywords(text: str, limit: int = 5) -> List[str]:
        tokens = cn_tokenize(text).split()
        picks: List[str] = []
        seen = set()
        for tok in tokens:
            if tok in seen or tok in _QUERY_STOP_UNIGRAMS:
                continue
            if len(tok) >= 2 and not (len(tok) == 2 and any(c in _QUERY_STOP_UNIGRAMS for c in tok)):
                seen.add(tok)
                picks.append(tok)
                if len(picks) >= limit:
                    break
        if not picks and text.strip():
            picks.append(text.strip()[:6])
        return picks

    def _upsert_atomic_memory_conn(
        self,
        conn: sqlite3.Connection,
        content: str,
        keywords: List[str],
        category: str,
        date_str: str,
        now: float,
        init_strength: int,
        deduplicate: bool = True,
    ) -> Tuple[str, Dict[str, Any]]:
        kws = [k.strip() for k in keywords if k and k.strip()][:5] or self._extract_keywords(content)
        kws_str = ", ".join(kws)
        similar = self._find_similar_atomic_memory(conn, content, kws, category) if deduplicate else None
        if similar is not None:
            mem_id = int(similar["id"])
            new_strength = int(similar["strength"]) + 2
            conn.execute(
                """
                UPDATE atomic_memories
                SET content = ?, keywords = ?, last_accessed = ?, strength = ?
                WHERE id = ?
                """,
                (content, kws_str, now, new_strength, mem_id),
            )
            conn.execute("DELETE FROM atomic_memories_fts WHERE rowid = ?", (mem_id,))
            conn.execute(
                """
                INSERT INTO atomic_memories_fts (rowid, content_tokens, keywords_tokens)
                VALUES (?, ?, ?)
                """,
                (mem_id, cn_tokenize(content), cn_tokenize(kws_str)),
            )
            return "merged", {
                "id": mem_id,
                "old_content": similar["content"],
                "new_content": content,
                "keywords": kws_str,
                "category": category,
                "old_strength": int(similar["strength"]),
                "new_strength": new_strength,
            }

        cur = conn.execute(
            """
            INSERT INTO atomic_memories (
                content, keywords, category, created_date, last_accessed, strength
            ) VALUES (?, ?, ?, ?, ?, ?)
            """,
            (content, kws_str, category, date_str, now, init_strength),
        )
        mem_id = int(cur.lastrowid)
        conn.execute(
            """
            INSERT INTO atomic_memories_fts (rowid, content_tokens, keywords_tokens)
            VALUES (?, ?, ?)
            """,
            (mem_id, cn_tokenize(content), cn_tokenize(kws_str)),
        )
        return "inserted", {
            "id": mem_id,
            "content": content,
            "keywords": kws_str,
            "category": category,
            "strength": init_strength,
        }

    def _insert_episodic_log_conn(
        self,
        conn: sqlite3.Connection,
        summary: str,
        date_str: str,
        keywords: List[str],
        now: float,
        tag: str = "私房札记",
        mood: str = "✨",
        entry_id: str = "",
        strength: int = 2,
    ) -> Dict[str, Any]:
        kws = [k.strip() for k in keywords if k and k.strip()][:5] or self._extract_keywords(summary)
        kws_str = ", ".join(kws)
        cur = conn.execute(
            """
            INSERT INTO episodic_logs (date_str, summary, keywords, last_accessed, strength, entry_id, tag, mood)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (date_str, summary, kws_str, now, strength, entry_id, tag, mood),
        )
        epi_id = int(cur.lastrowid)
        conn.execute(
            """
            INSERT INTO episodic_logs_fts (rowid, summary_tokens, keywords_tokens)
            VALUES (?, ?, ?)
            """,
            (epi_id, cn_tokenize(summary), cn_tokenize(kws_str)),
        )
        return {
            "id": epi_id,
            "entry_id": entry_id,
            "date_str": date_str,
            "tag": tag,
            "mood": mood,
            "summary": summary,
            "keywords": kws_str,
            "strength": strength,
        }

    def upsert_fact(
        self,
        content: str,
        keywords: Optional[List[str]] = None,
        category: str = "fact",
        strength: int = 3,
        deduplicate: bool = True,
    ) -> Dict[str, Any]:
        """手动或显式触发写入原子事实（去重强化并同步 FTS5）。"""
        clean = content.strip()
        if not clean:
            raise ValueError("事实内容不能为空")
        cat = category if category in VALID_CATEGORIES else "fact"
        now = time.time()
        today_str = time.strftime("%Y-%m-%d", time.localtime(now))
        kws = keywords if keywords else self._extract_keywords(clean)
        with _get_conn(self.db_path) as conn:
            exact = conn.execute(
                "SELECT id FROM atomic_memories WHERE content = ? LIMIT 1",
                (clean,),
            ).fetchone()
            if exact is not None:
                return {"action": "exists", "id": int(exact["id"]), "content": clean}
            action, record = self._upsert_atomic_memory_conn(
                conn, clean, kws, cat, today_str, now, max(1, min(5, strength)), deduplicate=deduplicate
            )
            conn.commit()
        return {"action": action, **record}

    def delete_fact(self, index: Optional[int] = None, content: Optional[str] = None) -> Optional[str]:
        """按展示序位（id ASC）或文本精确匹配删除原子事实及 FTS 索引。"""
        with _get_conn(self.db_path) as conn:
            rows = conn.execute("SELECT id, content FROM atomic_memories ORDER BY id ASC").fetchall()
            target_row = None
            if index is not None and 0 <= index < len(rows):
                target_row = rows[index]
            elif content:
                clean = content.strip()
                for r in rows:
                    if r["content"] == clean:
                        target_row = r
                        break
            if target_row is None:
                return None
            conn.execute("DELETE FROM atomic_memories_fts WHERE rowid = ?", (target_row["id"],))
            conn.execute("DELETE FROM atomic_memories WHERE id = ?", (target_row["id"],))
            conn.commit()
            return str(target_row["content"])

    def add_episodic_log(
        self,
        summary: str,
        date_str: Optional[str] = None,
        tag: str = "私房札记",
        mood: str = "✨",
        keywords: Optional[List[str]] = None,
        entry_id: str = "",
        strength: int = 2,
    ) -> Dict[str, Any]:
        clean = summary.strip()
        if not clean:
            raise ValueError("手记内容不能为空")
        now = time.time()
        d_str = date_str or time.strftime("%Y年%m月%d日 · 录", time.localtime(now))
        eid = entry_id or f"entry-{int(now * 1000)}"
        kws = keywords if keywords else self._extract_keywords(f"{tag} {clean}")
        with _get_conn(self.db_path) as conn:
            rec = self._insert_episodic_log_conn(
                conn,
                summary=clean,
                date_str=d_str,
                keywords=kws,
                now=now,
                tag=tag or "私房札记",
                mood=mood or "✨",
                entry_id=eid,
                strength=max(1, strength),
            )
            conn.commit()
        return rec

    def list_ui_facts_and_diary(self) -> Dict[str, Any]:
        """返回兼容前端 ling.html 抽屉结构的事实列表、手记列表与核心画像。"""
        with _get_conn(self.db_path) as conn:
            profile_rows = conn.execute("SELECT slot_key, content FROM core_profile ORDER BY slot_key").fetchall()
            fact_rows = conn.execute(
                "SELECT id, content, category, created_date, strength FROM atomic_memories ORDER BY id ASC"
            ).fetchall()
            diary_rows = conn.execute(
                "SELECT id, entry_id, date_str, tag, mood, summary, strength FROM episodic_logs ORDER BY id DESC LIMIT 30"
            ).fetchall()
            value_total = conn.execute("SELECT COUNT(*) FROM value_cards").fetchone()[0]

        return {
            "core_profile": {r["slot_key"]: r["content"] for r in profile_rows},
            "facts": [r["content"] for r in fact_rows],
            "atomic_facts": [
                {
                    "id": int(r["id"]),
                    "content": r["content"],
                    "category": r["category"],
                    "created_date": r["created_date"],
                    "strength": int(r["strength"]),
                }
                for r in fact_rows
            ],
            "diary": [
                {
                    "id": r["entry_id"] or f"entry-{r['id']}",
                    "date": r["date_str"],
                    "tag": r["tag"] or "私房札记",
                    "mood": r["mood"] or "✨",
                    "content": r["summary"],
                }
                for r in diary_rows
            ],
            "value_cards_total": int(value_total),
        }


# =====================================================================
# 3. 遗忘曲线召回与上下文读取器 (MemoryRetriever)
# =====================================================================

class MemoryRetriever:
    """基于 FTS5 2-gram BM25 与艾宾浩斯遗忘曲线的动态记忆召回器。"""

    def __init__(self, db_path: Path | str = DEFAULT_DB_PATH):
        self.db_path = Path(db_path)

    @staticmethod
    def compute_retention(now: float, last_accessed: float, strength: int) -> float:
        hours_elapsed = max(0.0, (now - float(last_accessed)) / 3600.0)
        return math.exp(-0.05 * hours_elapsed / max(1, int(strength)))

    def recall(
        self,
        user_query: str,
        memory_token_budget: int = 350,
        value_token_budget: int = 150,
        now: Optional[float] = None,
        include_personal: bool = True,
    ) -> Dict[str, Any]:
        """
        使用 cn_tokenize(user_query) 同时检索 atomic_memories_fts、episodic_logs_fts 与 value_cards_fts；
        对记忆项计算综合得分 0.6 * bm25_norm + 0.4 * retention 并按预算召回，
        自动将选中记忆的 strength + 1 且 last_accessed = now。
        当 include_personal=False 时仅检索公共 value_cards_fts，严格隔离私人画像、原子记忆与手记。
        """
        cur_now = float(now) if now is not None else time.time()
        fts_query = build_fts_query(user_query)

        memory_candidates: List[Dict[str, Any]] = []
        value_candidates: List[Dict[str, Any]] = []
        core_profile: Dict[str, str] = {}

        with _get_conn(self.db_path) as conn:
            if include_personal:
                core_profile = {
                    r["slot_key"]: r["content"]
                    for r in conn.execute("SELECT slot_key, content FROM core_profile").fetchall()
                }

            if fts_query and include_personal:
                # 1) 检索 atomic_memories_fts
                a_rows = conn.execute(
                    """
                    SELECT m.id, m.content, m.keywords, m.category, m.created_date,
                           m.last_accessed, m.strength,
                           bm25(atomic_memories_fts, 1.0, 2.0) AS raw_bm25
                    FROM atomic_memories_fts
                    JOIN atomic_memories m ON m.id = atomic_memories_fts.rowid
                    WHERE atomic_memories_fts MATCH ?
                    ORDER BY raw_bm25 ASC
                    LIMIT 25
                    """,
                    (fts_query,),
                ).fetchall()

                a_rels = [max(0.0, -float(r["raw_bm25"])) for r in a_rows]
                a_max_rel = max(a_rels) if a_rels else 0.0
                for r, rel in zip(a_rows, a_rels):
                    bm25_norm = (rel / a_max_rel) if a_max_rel > 0 else 0.0
                    retention = self.compute_retention(cur_now, r["last_accessed"], r["strength"])
                    score = 0.6 * bm25_norm + 0.4 * retention
                    formatted = f"[{r['category']}|{r['created_date']}] {r['content']}"
                    memory_candidates.append(
                        {
                            "source_table": "atomic_memories",
                            "id": int(r["id"]),
                            "category": r["category"],
                            "content": r["content"],
                            "keywords": r["keywords"],
                            "date": r["created_date"],
                            "strength_before": int(r["strength"]),
                            "last_accessed_before": float(r["last_accessed"]),
                            "bm25_norm": round(bm25_norm, 4),
                            "retention": round(retention, 4),
                            "score": round(score, 4),
                            "tokens": estimate_tokens(formatted),
                            "formatted": formatted,
                        }
                    )

                # 2) 检索 episodic_logs_fts
                e_rows = conn.execute(
                    """
                    SELECT e.id, e.date_str, e.summary, e.keywords,
                           e.last_accessed, e.strength,
                           bm25(episodic_logs_fts, 1.0, 2.0) AS raw_bm25
                    FROM episodic_logs_fts
                    JOIN episodic_logs e ON e.id = episodic_logs_fts.rowid
                    WHERE episodic_logs_fts MATCH ?
                    ORDER BY raw_bm25 ASC
                    LIMIT 15
                    """,
                    (fts_query,),
                ).fetchall()

                e_rels = [max(0.0, -float(r["raw_bm25"])) for r in e_rows]
                e_max_rel = max(e_rels) if e_rels else 0.0
                for r, rel in zip(e_rows, e_rels):
                    bm25_norm = (rel / e_max_rel) if e_max_rel > 0 else 0.0
                    retention = self.compute_retention(cur_now, r["last_accessed"], r["strength"])
                    score = 0.6 * bm25_norm + 0.4 * retention
                    formatted = f"[手记|{r['date_str']}] {r['summary']}"
                    memory_candidates.append(
                        {
                            "source_table": "episodic_logs",
                            "id": int(r["id"]),
                            "category": "episodic",
                            "content": r["summary"],
                            "keywords": r["keywords"],
                            "date": r["date_str"],
                            "strength_before": int(r["strength"]),
                            "last_accessed_before": float(r["last_accessed"]),
                            "bm25_norm": round(bm25_norm, 4),
                            "retention": round(retention, 4),
                            "score": round(score, 4),
                            "tokens": estimate_tokens(formatted),
                            "formatted": formatted,
                        }
                    )

            if fts_query:
                # 3) 检索 value_cards_fts
                v_rows = conn.execute(
                    """
                    SELECT v.id, v.card_id, v.trigger_scenarios, v.keywords,
                           v.internalized_thought, v.book_memory_anchor,
                           v.source_book, v.source_chapter,
                           bm25(value_cards_fts, 1.8, 1.5, 1.0) AS raw_bm25
                    FROM value_cards_fts
                    JOIN value_cards v ON v.id = value_cards_fts.rowid
                    WHERE value_cards_fts MATCH ?
                    ORDER BY raw_bm25 ASC
                    LIMIT 15
                    """,
                    (fts_query,),
                ).fetchall()

                v_rels = [max(0.0, -float(r["raw_bm25"])) for r in v_rows]
                v_max_rel = max(v_rels) if v_rels else 0.0
                for r, rel in zip(v_rows, v_rels):
                    bm25_norm = (rel / v_max_rel) if v_max_rel > 0 else 0.0
                    formatted = f"[{r['card_id']}] {r['internalized_thought']}（{r['book_memory_anchor']}）"
                    value_candidates.append(
                        {
                            "card_id": r["card_id"],
                            "trigger_scenarios": r["trigger_scenarios"],
                            "keywords": r["keywords"],
                            "internalized_thought": r["internalized_thought"],
                            "book_memory_anchor": r["book_memory_anchor"],
                            "source_book": r["source_book"],
                            "bm25_norm": round(bm25_norm, 4),
                            "tokens": estimate_tokens(formatted),
                            "formatted": formatted,
                        }
                    )

            # 4) 按综合得分降序填充 memory_token_budget (350 Tokens)
            memory_candidates.sort(key=lambda x: x["score"], reverse=True)
            selected_memories: List[Dict[str, Any]] = []
            mem_tokens_used = 0
            for item in memory_candidates:
                if mem_tokens_used + item["tokens"] <= memory_token_budget:
                    selected_memories.append(item)
                    mem_tokens_used += item["tokens"]

            # 5) 选中记忆强化：strength + 1, last_accessed = cur_now
            for item in selected_memories:
                new_strength = item["strength_before"] + 1
                item["strength_after"] = new_strength
                if item["source_table"] == "atomic_memories":
                    conn.execute(
                        "UPDATE atomic_memories SET strength = ?, last_accessed = ? WHERE id = ?",
                        (new_strength, cur_now, item["id"]),
                    )
                else:
                    conn.execute(
                        "UPDATE episodic_logs SET strength = ?, last_accessed = ? WHERE id = ?",
                        (new_strength, cur_now, item["id"]),
                    )

            # 6) 填充 value_token_budget (150 Tokens)
            selected_values: List[Dict[str, Any]] = []
            val_tokens_used = 0
            for v in value_candidates:
                if val_tokens_used + v["tokens"] <= value_token_budget:
                    selected_values.append(v)
                    val_tokens_used += v["tokens"]
                elif not selected_values:
                    # 若榜首判例卡附带 anchor 略超保守字数预算，回退保留其核心观点，确保最契合的价值判例不被漏掉
                    compact_fmt = f"[{v['card_id']}] {v['internalized_thought']}"
                    compact_toks = estimate_tokens(compact_fmt)
                    if compact_toks <= value_token_budget:
                        v_compact = dict(v)
                        v_compact["formatted"] = compact_fmt
                        v_compact["tokens"] = compact_toks
                        selected_values.append(v_compact)
                        val_tokens_used += compact_toks

            conn.commit()

        sections: List[str] = []
        non_empty_profile = {k: v for k, v in core_profile.items() if v}
        if non_empty_profile:
            sections.append(
                "【核心画像】\n" + "\n".join(f"- {k}: {v}" for k, v in non_empty_profile.items())
            )
        if selected_memories:
            sections.append(
                "【动态回忆】\n" + "\n".join(f"- {m['formatted']}" for m in selected_memories)
            )
        if selected_values:
            sections.append(
                "【价值观判例唤醒】\n" + "\n".join(f"- {v['formatted']}" for v in selected_values)
            )

        return {
            "query": user_query,
            "core_profile": core_profile,
            "memories": selected_memories,
            "value_cards": selected_values,
            "memory_tokens_used": mem_tokens_used,
            "value_tokens_used": val_tokens_used,
            "formatted_context": "\n\n".join(sections),
        }


def migrate_legacy_ling_memory(
    db_path: Path | str = DEFAULT_DB_PATH,
    memory_json_path: Optional[Path | str] = None,
    value_json_path: Optional[Path | str] = None,
) -> Dict[str, Any]:
    """
    幂等初始化数据库，并在首次迁移时将旧版 ling_memory.json 中的事实与日记
    无损迁入 SQLite 四层动态记忆库（记录迁移标记，避免重复导入或误还原已删记忆）。
    """
    init_res = init_memory_tables(db_path=db_path, value_json_path=value_json_path)
    db_file = Path(db_path)
    migrated_facts = 0
    migrated_diary = 0

    with _get_conn(db_file) as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS memory_meta (
                key TEXT PRIMARY KEY,
                value TEXT NOT NULL
            )
            """
        )
        done_row = conn.execute(
            "SELECT value FROM memory_meta WHERE key = 'legacy_ling_memory_migrated'"
        ).fetchone()
        if done_row is not None:
            return {**init_res, "migrated_facts": 0, "migrated_diary": 0, "already_migrated": True}

        if memory_json_path is None:
            conn.execute(
                "INSERT OR REPLACE INTO memory_meta (key, value) VALUES ('legacy_ling_memory_migrated', ?)",
                (str(time.time()),),
            )
            conn.commit()
            return {**init_res, "migrated_facts": 0, "migrated_diary": 0, "already_migrated": False}

        m_path = Path(memory_json_path)
        if m_path.is_file():
            try:
                legacy = json.loads(m_path.read_text(encoding="utf-8"))
            except Exception:
                legacy = {}
        else:
            legacy = {}

        digester = MemoryDigester(db_file)
        now = time.time()
        today_str = time.strftime("%Y-%m-%d", time.localtime(now))

        existing_facts = conn.execute("SELECT COUNT(*) FROM atomic_memories").fetchone()[0]
        if existing_facts == 0 and isinstance(legacy.get("facts"), list):
            for fact in legacy["facts"]:
                clean_fact = str(fact).strip()
                if not clean_fact:
                    continue
                kws = digester._extract_keywords(clean_fact)
                digester._upsert_atomic_memory_conn(
                    conn,
                    content=clean_fact,
                    keywords=kws,
                    category="fact",
                    date_str=today_str,
                    now=now,
                    init_strength=3,
                    deduplicate=False,
                )
                migrated_facts += 1

        existing_diary = conn.execute("SELECT COUNT(*) FROM episodic_logs").fetchone()[0]
        if existing_diary == 0 and isinstance(legacy.get("diary"), list):
            # 旧版 diary 按最新在前存储；逆序写入使最新一条获得最大 id，兼容 ORDER BY id DESC
            for idx, entry in enumerate(reversed(legacy["diary"])):
                if not isinstance(entry, dict):
                    continue
                content = str(entry.get("content", "")).strip()
                if not content:
                    continue
                tag = str(entry.get("tag", "私房札记")).strip() or "私房札记"
                mood = str(entry.get("mood", "✨")).strip() or "✨"
                date_str = str(entry.get("date", today_str)).strip() or today_str
                entry_id = str(entry.get("id", "")).strip()
                digester._insert_episodic_log_conn(
                    conn,
                    summary=content,
                    date_str=date_str,
                    keywords=digester._extract_keywords(f"{tag} {content}"),
                    now=now + idx * 0.001,
                    tag=tag,
                    mood=mood,
                    entry_id=entry_id,
                    strength=2,
                )
                migrated_diary += 1

        conn.execute(
            "INSERT OR REPLACE INTO memory_meta (key, value) VALUES ('legacy_ling_memory_migrated', ?)",
            (str(now),),
        )
        conn.commit()

    return {
        **init_res,
        "migrated_facts": migrated_facts,
        "migrated_diary": migrated_diary,
        "already_migrated": False,
    }


# =====================================================================
# CLI 入口 & 交付验证
# =====================================================================

def run_verification(db_path: Path = DEFAULT_DB_PATH) -> None:
    print("=== [1/4] 初始化四层动态记忆数据库 & 导入价值观判例卡 ===")
    init_res = init_memory_tables(db_path=db_path)
    print(json.dumps(init_res, ensure_ascii=False, indent=2))

    digester = MemoryDigester(db_path=db_path)
    retriever = MemoryRetriever(db_path=db_path)

    print("\n=== [2/4] 写入 4 轮（8 条）真实模拟对话到 raw_chat_buffer ===")
    base_ts = time.time() - 600
    simulated_turns = [
        ("user", "灵，我这两天一直在用 BandwagonHost（搬瓦工）的 VPS 搭咱们的「小识屋」网站，折腾环境折腾到挺晚。"),
        ("assistant", "搬瓦工服务器稳归稳，可别连续熬夜把体力乘数干塌了。先把主干跑通，细节明天清醒了再抠。"),
        ("user", "嗯，好消息是刚才我把《进击的学霸》和《核聚体系》的离线价值观蒸馏流水线彻底跑通了，沉淀了1154张判例卡和274 Token的精神宪章。"),
        ("assistant", "干得漂亮！这才是拿第一性原理把两百万字死磕成真本事，不是在脑子里跑龙套。"),
        ("user", "接下来我的重心就是把这套四层记忆库系统接进小识屋线上后端，让你能边聊边记、越来越懂我。"),
        ("assistant", "好，我记住咱们这个硬仗约定。后续写 SQLite 检索和遗忘曲线衰减时，有什么卡点随时拆开死磕。"),
        ("user", "对了，我平时聊工作还是喜欢直接一点，千万别给我整那种虚头巴脑的客套鼓励。"),
        ("assistant", "明白，咱俩平视说话，全是实在大白话，绝不端水。"),
    ]
    for i, (role, text) in enumerate(simulated_turns):
        digester.add_message(role=role, content=text, timestamp=base_ts + i * 30)
    print(f"已写入 {len(simulated_turns)} 条消息，当前未消化队列数量: {digester.unprocessed_count()}")

    print("\n=== [3/4] 执行 digest_recent_chats() 自动提炼并入库 ===")
    digest_res = digester.digest_recent_chats()
    print(json.dumps(digest_res, ensure_ascii=False, indent=2))

    with _get_conn(db_path) as conn:
        print("\n--- 数据库核验: core_profile ---")
        for row in conn.execute("SELECT slot_key, content, updated_at FROM core_profile ORDER BY slot_key"):
            print(f"  {row['slot_key']}: {row['content']}")

        print("\n--- 数据库核验: atomic_memories ---")
        for row in conn.execute("SELECT id, category, strength, created_date, keywords, content FROM atomic_memories ORDER BY id"):
            print(f"  #{row['id']} [{row['category']}|strength={row['strength']}|{row['created_date']}] {row['content']} (kw: {row['keywords']})")

        print("\n--- 数据库核验: episodic_logs ---")
        for row in conn.execute("SELECT id, date_str, strength, keywords, summary FROM episodic_logs ORDER BY id"):
            print(f"  #{row['id']} [{row['date_str']}|strength={row['strength']}] {row['summary']} (kw: {row['keywords']})")

        unprocessed_after = conn.execute("SELECT COUNT(*) FROM raw_chat_buffer WHERE is_processed = 0").fetchone()[0]
        print(f"\nraw_chat_buffer 剩余未处理消息数: {unprocessed_after}")

    print("\n=== [4/4] 执行 MemoryRetriever.recall() 遗忘曲线 + 价值观双预算检索测试 ===")
    recall_res = retriever.recall(
        user_query="搬瓦工小识屋记忆库接好了，最近遇到困难有点怀疑自己能不能死磕到底",
        memory_token_budget=350,
        value_token_budget=150,
    )
    print(f"memory_tokens_used={recall_res['memory_tokens_used']} / 350 | value_tokens_used={recall_res['value_tokens_used']} / 150")
    print(recall_res["formatted_context"])


def main() -> int:
    parser = argparse.ArgumentParser(description="「灵能」四层动态记忆库系统")
    parser.add_argument("--db", default=str(DEFAULT_DB_PATH), help="SQLite 数据库路径")
    parser.add_argument("--init-only", action="store_true", help="仅初始化表结构并导入 value_precedents.json")
    parser.add_argument("--verify", action="store_true", help="运行端到端验证流程")
    args = parser.parse_args()

    db_path = Path(args.db)
    if args.init_only:
        print(json.dumps(init_memory_tables(db_path), ensure_ascii=False, indent=2))
        return 0

    run_verification(db_path=db_path)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
