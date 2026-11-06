#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
小石屋 (Our Stone Cottages) - 词源三段式与 OCR 释义批量预处理脚本
引擎: Google Gemini 3.8 Flash (内置默认) + ECDICT 权威开源词库清洗
作者: Antigravity Agentic Engine
"""

import os
import sys
import re
import csv
import json
import sqlite3
import argparse
import time
import urllib.request
import urllib.error
from typing import Dict, List, Any, Optional, Tuple

# 确保 Windows 终端 UTF-8 编码安全
if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
        sys.stderr.reconfigure(encoding='utf-8', errors='replace')
    except Exception:
        pass

# 路径常量默认值
DEFAULT_REPO_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
DEFAULT_ECDICT_PATH = r"F:\cluade-products\data\ecdict.csv"
DEFAULT_ETYM_DB_PATH = r"F:\cluade-products\data\etymology.db"
DEFAULT_WORDS_DATA_PATH = os.path.join(DEFAULT_REPO_DIR, "frontend", "words-data.js")
DEFAULT_CONVEY_JS_PATH = os.path.join(DEFAULT_REPO_DIR, "frontend", "modules", "lexicon", "word-convey.js")

# 严谨的 Gemini 3.8 Flash 提示词（严禁自由驰骋，严谨结构化提炼）
GEMINI_SYSTEM_PROMPT = """你是一位精通英语词源学与词汇教学的专家。
请根据用户提供的【单词】、【残缺OCR中文】和【原始英文词源(Etymonline)】，清洗并输出纯 JSON 格式数据。

要求：
1. 严禁脱离原始英文词源凭空捏造！必须基于原始词源提取核心逻辑，剔除年代(如mid-14c.)、语法术语(如nominative, past participle)等噪音。
2. 输出 JSON 结构必须严格如下：
{
  "cn_fixed": "修复截断问题后的完整、地道中文考纲释义（包含词性）",
  "synonyms": ["用于背单词判对错的2-4个最核心中文近义词，如：野心, 雄心, 抱负"],
  "etymology": {
    "breakdown": "词根词缀拆解，格式如：prefix- (含义) + root (含义)。若无明显词缀则写明源语言核心词",
    "literal": "字面本义（控制在6个字以内，如：到处走动 / 共同在路上护送）",
    "story": "用一句生动、有画面感的大白话（35字以内）讲清楚字面本义是怎么来的",
    "chain": "用箭头连接语义演变链条（最多3步），格式：本义 → 引申过渡义 → 现代核心义"
  }
}"""

# 常用英文前缀与词根语义映射表（离线规则引擎）
AFFIX_MAP = {
    "ambi": ("ambi- (到处，周围)", "到处走动"),
    "ante": ("ante- (前，先前)", "在前方"),
    "anti": ("anti- (反对，对抗)", "相对立"),
    "auto": ("auto- (自己，自动)", "自身运转"),
    "bene": ("bene- (善，好)", "心怀善意"),
    "bi": ("bi- (二，双)", "成双成对"),
    "circum": ("circum- (环绕，周围)", "环绕一周"),
    "co": ("co- / com- (共同，一起)", "聚在一起"),
    "com": ("com- (共同，完全)", "完全结合"),
    "con": ("con- (共同，完全)", "汇聚一体"),
    "contra": ("contra- (相反，对立)", "背道而驰"),
    "contro": ("contro- (相反，对立)", "针锋相对"),
    "counter": ("counter- (相对，反对)", "逆向而行"),
    "de": ("de- (向下，离开，去除)", "向下脱离"),
    "dis": ("dis- (分离，相反，否定)", "四散分开"),
    "di": ("di- (分开，二)", "分向两边"),
    "e": ("e- / ex- (向外，出)", "由内向外"),
    "ex": ("ex- (向外，离开)", "脱壳而出"),
    "extra": ("extra- (超出，额外)", "超出界限"),
    "fore": ("fore- (前，预先)", "走在前面"),
    "il": ("il- / im- / in- (不，向内)", "没有、不"),
    "im": ("im- (向内，不)", "深入内部"),
    "in": ("in- (向内，不，进入)", "融入其中"),
    "inter": ("inter- (在…之间，相互)", "彼此穿插"),
    "intra": ("intra- (在…内部)", "居于内部"),
    "intro": ("intro- (向内，入内)", "深入探究"),
    "mis": ("mis- (错误，坏)", "走入偏途"),
    "mono": ("mono- (单一，独)", "形单影只"),
    "multi": ("multi- (多，许多)", "繁杂众多"),
    "non": ("non- (非，不)", "完全不属于"),
    "over": ("over- (过度，在上)", "高高凌驾"),
    "per": ("per- (贯穿，彻底)", "自始至终"),
    "post": ("post- (后，随后)", "跟在后方"),
    "pre": ("pre- (前，预先)", "提前准备"),
    "pro": ("pro- (向前，拥护)", "大步向前"),
    "re": ("re- (再次，向后，回)", "原路返回"),
    "sub": ("sub- (在下，次级)", "伏于下方"),
    "super": ("super- (在…之上，超级)", "超越寻常"),
    "syn": ("syn- / sym- (共同，协同)", "同心协力"),
    "trans": ("trans- (穿过，跨越)", "横跨彼岸"),
    "tri": ("tri- (三)", "三足鼎立"),
    "un": ("un- (不，相反，解开)", "解开束缚"),
    "under": ("under- (在…之下)", "隐于其下"),
    "uni": ("uni- (一，合一)", "合为一体"),
}


class ECDICTManager:
    """负责加载和检索 ECDICT 词典"""
    def __init__(self, csv_path: str):
        self.csv_path = csv_path
        self.dict_data: Dict[str, Dict[str, str]] = {}
        self.is_loaded = False

    def load(self, target_words: Optional[set] = None):
        if not os.path.exists(self.csv_path):
            print(f"[ECDICT] 警告: 未找到 ECDICT 词库文件: {self.csv_path}")
            return
        print(f"[ECDICT] 正在读取开源词库: {self.csv_path}...")
        start_t = time.time()
        count = 0
        with open(self.csv_path, 'r', encoding='utf-8', errors='ignore') as f:
            reader = csv.DictReader(f)
            for row in reader:
                w = row.get('word', '').strip().lower()
                if not w:
                    continue
                if target_words is not None and w not in target_words:
                    continue
                self.dict_data[w] = {
                    'phonetic': row.get('phonetic', ''),
                    'definition': row.get('definition', ''),
                    'translation': row.get('translation', ''),
                    'pos': row.get('pos', '')
                }
                count += 1
        self.is_loaded = True
        print(f"[ECDICT] 加载完毕: 匹配目标词汇 {count} 条，耗时 {time.time() - start_t:.2f}s")

    def get_info(self, word: str) -> Optional[Dict[str, str]]:
        return self.dict_data.get(word.strip().lower())

    def extract_synonyms(self, word: str, translation: str, target_count: int = 4) -> List[str]:
        """从 ECDICT 的 translation 中提取 2~4 个核心近义词"""
        if not translation:
            return []
        
        text = re.sub(r'\[[^\]]*\]', '', translation)
        text = re.sub(r'（[^）]*）|\([^)]*\)', '', text)
        text = re.sub(r'\b(n|v|vt|vi|adj|adv|prep|conj|pron|art|num|int)\.', '', text)
        
        parts = re.split(r'[\r\n；;，,、/\\|]+', text)
        synonyms: List[str] = []
        seen = set()

        stop_words = {'网络', '医', '法', '人名', '计', '化', '经', '机', '物', '商', '语', '建', '电', '体'}
        for p in parts:
            p_clean = p.strip()
            if not p_clean or len(p_clean) > 8 or len(p_clean) < 1:
                continue
            if p_clean in stop_words or any(c in p_clean for c in '0123456789abcdefghijklmnopqrstuvwxyz'):
                continue
            if p_clean not in seen:
                seen.add(p_clean)
                synonyms.append(p_clean)
                if len(synonyms) >= target_count:
                    break
        return synonyms


class EtymologyDBManager:
    """负责 SQLite 中 etymology 原生库与 etymology_convey 新库的高性能管理"""
    def __init__(self, db_path: str):
        self.db_path = db_path
        self._init_db()
        self.conn = sqlite3.connect(self.db_path)
        self.raw_etym_cache = {}
        self.convey_cache = {}
        self._preload()

    def _init_db(self):
        os.makedirs(os.path.dirname(os.path.abspath(self.db_path)), exist_ok=True)
        with sqlite3.connect(self.db_path) as conn:
            cur = conn.cursor()
            cur.execute("""
                CREATE TABLE IF NOT EXISTS etymology_convey (
                    word TEXT PRIMARY KEY,
                    roots TEXT,
                    story TEXT,
                    evolution TEXT,
                    raw_etym TEXT,
                    synonyms TEXT,
                    zh_def TEXT,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            """)
            conn.commit()

    def _preload(self):
        """一次性预热全量已有记录至内存，避免数千次磁盘 I/O"""
        cur = self.conn.cursor()
        try:
            cur.execute("SELECT word, roots, story, evolution, raw_etym, synonyms, zh_def FROM etymology_convey")
            for row in cur.fetchall():
                w, roots, story, evolution, raw_etym, syns_raw, zh_def = row
                self.convey_cache[w] = {
                    'word': w,
                    'roots': roots,
                    'story': story,
                    'evolution': evolution,
                    'raw_etym': raw_etym,
                    'synonyms': json.loads(syns_raw) if syns_raw else [],
                    'zh_def': zh_def
                }
        except Exception:
            pass

    def get_raw_etymology(self, word: str) -> str:
        clean_word = word.strip().lower()
        if clean_word in self.raw_etym_cache:
            return self.raw_etym_cache[clean_word]
        cur = self.conn.cursor()
        cur.execute("SELECT etym_text FROM etymology WHERE word = ? OR word LIKE ?", (clean_word, clean_word + ' (%'))
        rows = cur.fetchall()
        text = "\n\n".join(r[0] for r in rows if r[0]) if rows else ""
        self.raw_etym_cache[clean_word] = text
        return text

    def get_convey_record(self, word: str) -> Optional[Dict[str, Any]]:
        clean_word = word.strip().lower()
        return self.convey_cache.get(clean_word)

    def save_convey_record(self, word: str, roots: str, story: str, evolution: str, raw_etym: str, synonyms: List[str], zh_def: str):
        clean_word = word.strip().lower()
        syns_json = json.dumps(synonyms, ensure_ascii=False)
        cur = self.conn.cursor()
        cur.execute("""
            INSERT INTO etymology_convey (word, roots, story, evolution, raw_etym, synonyms, zh_def, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
            ON CONFLICT(word) DO UPDATE SET
                roots=excluded.roots,
                story=excluded.story,
                evolution=excluded.evolution,
                raw_etym=excluded.raw_etym,
                synonyms=excluded.synonyms,
                zh_def=excluded.zh_def,
                updated_at=CURRENT_TIMESTAMP
        """, (clean_word, roots, story, evolution, raw_etym, syns_json, zh_def))
        self.conn.commit()
        self.convey_cache[clean_word] = {
            'word': clean_word,
            'roots': roots,
            'story': story,
            'evolution': evolution,
            'raw_etym': raw_etym,
            'synonyms': synonyms,
            'zh_def': zh_def
        }

    def close(self):
        if self.conn:
            self.conn.close()


class GeminiEtymologyCleaner:
    """通过 Gemini 3.8 Flash 批量清洗与重塑三段式视觉卡片"""
    def __init__(self, api_key: str = "", model: str = "gemini-3.8-flash"):
        self.api_key = api_key or os.environ.get("GEMINI_API_KEY", "").strip()
        self.model = model

    def clean_word(self, word: str, ocr_cn: str, raw_etymology: str) -> Optional[Dict[str, Any]]:
        """调用 Gemini 3.8 Flash 提炼单词数据"""
        if not self.api_key:
            return None

        user_content = f"单词: {word}\n残缺OCR中文: {ocr_cn}\n原始词源: {raw_etymology}"
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{self.model}:generateContent?key={self.api_key}"
        
        payload = {
            "contents": [
                {
                    "role": "user",
                    "parts": [
                        {"text": f"{GEMINI_SYSTEM_PROMPT}\n\n{user_content}"}
                    ]
                }
            ],
            "generationConfig": {
                "temperature": 0.2,
                "responseMimeType": "application/json"
            }
        }

        try:
            req = urllib.request.Request(
                url,
                data=json.dumps(payload).encode('utf-8'),
                headers={"Content-Type": "application/json"}
            )
            with urllib.request.urlopen(req, timeout=20) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                text = data["candidates"][0]["content"]["parts"][0]["text"].strip()
                result = json.loads(text)
                
                etym = result.get("etymology", {})
                breakdown = etym.get("breakdown", "").strip()
                literal = etym.get("literal", "").strip()
                story = etym.get("story", "").strip()
                chain = etym.get("chain", "").strip()
                
                roots = f"{breakdown} = {literal}" if breakdown and literal else (breakdown or literal)
                return {
                    'word': word,
                    'cn_fixed': result.get("cn_fixed", ocr_cn).strip(),
                    'synonyms': result.get("synonyms", []),
                    'breakdown': breakdown,
                    'literal': literal,
                    'roots': roots,
                    'story': story,
                    'chain': chain,
                    'evolution': chain,
                    'raw_etym': raw_etymology
                }
        except Exception as e:
            print(f"[Gemini 3.8 Flash] 调用失败 ({word}): {e}", file=sys.stderr)
            return None


class RuleBasedConveyGenerator:
    """离线规则智能构词与语义提炼兜底生成器（复刻 convey 视觉排版）"""
    @staticmethod
    def generate(word: str, raw_etym: str, zh_def: str, candidate_syns: List[str]) -> Dict[str, Any]:
        clean_word = word.lower().strip()
        
        # 1. 尝试匹配前缀
        matched_prefix = None
        for pfx, (tag, literal_pfx) in sorted(AFFIX_MAP.items(), key=lambda x: -len(x[0])):
            if clean_word.startswith(pfx) and len(clean_word) > len(pfx) + 2:
                matched_prefix = (tag, literal_pfx, clean_word[len(pfx):])
                break

        # 2. 核心释义短语
        core_meanings = candidate_syns[:3] if candidate_syns else [zh_def[:15]]
        core_repr = "、".join(core_meanings) if core_meanings else clean_word

        if matched_prefix:
            tag, literal_pfx, rest = matched_prefix
            breakdown = f"{tag} + {rest} (词根主体)"
            literal = f"{literal_pfx}"
            story = f"前缀「{literal_pfx}」赋予词干鲜明动作感，积淀为「{core_repr}」的直观场景。"
            chain = f"{literal_pfx} ➡️ 语境意象引申 ➡️ {core_repr}"
        else:
            origin_match = re.search(r'from (?:Old French|Latin|Greek|Proto-Germanic|Anglo-French) ([a-zA-Z*]+)', raw_etym or '')
            origin_word = origin_match.group(1) if origin_match else clean_word
            breakdown = f"源自古代词根 {origin_word}"
            literal = "词源核心本义"
            story = f"源于古代语境中的「{origin_word}」，演变积淀为现代核心表达。"
            chain = f"原始词根意象 ➡️ 历史语境深化 ➡️ {core_repr}"

        roots = f"{breakdown} = {literal}"
        return {
            'word': word,
            'cn_fixed': zh_def,
            'synonyms': candidate_syns[:4],
            'breakdown': breakdown,
            'literal': literal,
            'roots': roots,
            'story': story,
            'chain': chain,
            'evolution': chain,
            'raw_etym': raw_etym
        }


def extract_words_from_js(js_path: str) -> Tuple[Dict[str, Any], str]:
    """从 frontend/words-data.js 中提取 WORD_UNIT_META 对象及原文件头部"""
    if not os.path.exists(js_path):
        raise FileNotFoundError(f"未找到 words-data.js: {js_path}")
    
    with open(js_path, 'r', encoding='utf-8') as f:
        content = f.read()

    marker = "const WORD_UNIT_META = "
    start_pos = content.find(marker)
    if start_pos == -1:
        raise ValueError(f"无法在 {js_path} 中找到 WORD_UNIT_META 变量定义")

    brace_start = content.find("{", start_pos)
    depth = 0
    end_pos = -1
    for i in range(brace_start, len(content)):
        c = content[i]
        if c == '{':
            depth += 1
        elif c == '}':
            depth -= 1
            if depth == 0:
                end_pos = i + 1
                break

    if end_pos == -1:
        raise ValueError("无法解析 WORD_UNIT_META JSON 对象边界")

    json_str = content[brace_start:end_pos]
    data = json.loads(json_str)
    return data, content


def main():
    parser = argparse.ArgumentParser(description="小石屋词源三段式与 OCR 释义批量预处理脚本 (Gemini 3.8 Flash)")
    parser.add_argument("--api-key", type=str, default=os.environ.get("GEMINI_API_KEY", ""), help="Gemini API 密钥")
    parser.add_argument("--model", type=str, default="gemini-3.8-flash", help="Gemini 模型名称 (默认 gemini-3.8-flash)")
    parser.add_argument("--ecdict", type=str, default=DEFAULT_ECDICT_PATH, help="ECDICT CSV 路径")
    parser.add_argument("--db", type=str, default=DEFAULT_ETYM_DB_PATH, help="词源 SQLite 数据库路径")
    parser.add_argument("--words-js", type=str, default=DEFAULT_WORDS_DATA_PATH, help="words-data.js 路径")
    parser.add_argument("--out-convey", type=str, default=DEFAULT_CONVEY_JS_PATH, help="输出 word-convey.js 路径")
    parser.add_argument("--limit", type=int, default=0, help="处理词数上限 (0 为全量)")
    parser.add_argument("--force-api", action="store_true", help="强制重新调用 API 覆盖既有 convey 数据")
    parser.add_argument("--dry-run", action="store_true", help="试运行模式，不写真实文件与库")
    args = parser.parse_args()

    print("==================================================")
    print(" 小石屋 (Our Stone Cottages) 预处理脚本")
    print(f" 引擎: Gemini 3.8 Flash ({args.model}) + ECDICT 词典")
    print("==================================================")
    print(f"[*] 词库文件: {args.words_js}")
    print(f"[*] ECDICT: {args.ecdict}")
    print(f"[*] 数据库: {args.db}")
    print(f"[*] API 模式: {'已启用 Gemini (' + args.model + ')' if args.api_key else '离线规则 + 开源词库清洗模式'}")

    meta_dict, original_file_content = extract_words_from_js(args.words_js)
    all_words = list(meta_dict.keys())
    print(f"[+] 成功载入词书单词数: {len(all_words)} 词")

    ecdict = ECDICTManager(args.ecdict)
    ecdict.load(set(w.lower() for w in all_words))

    db_mgr = EtymologyDBManager(args.db)
    gemini_cleaner = GeminiEtymologyCleaner(args.api_key, args.model) if args.api_key else None

    target_words = all_words[:args.limit] if args.limit > 0 else all_words
    updated_count = 0
    ocr_fixed_count = 0
    convey_generated = 0
    synonyms_map = {}
    convey_map = {}

    print(f"\n[+] 开始批量跑批 (共 {len(target_words)} 词)...")
    start_time = time.time()

    for idx, word in enumerate(target_words, start=1):
        clean_w = word.strip().lower()
        word_meta = meta_dict.get(word, {})
        old_def = word_meta.get("definition", "").strip()

        ec_info = ecdict.get_info(clean_w)
        standard_zh = old_def
        synonyms = word_meta.get("synonyms", [])

        if ec_info and ec_info.get("translation"):
            translation = ec_info["translation"]
            needs_fix = (
                not old_def
                or old_def.endswith("...")
                or old_def.endswith("，")
                or len(old_def) <= 3
                or "扶考" in old_def
                or "宽微" in old_def
            )
            if needs_fix:
                clean_lines = [l.strip() for l in translation.splitlines() if l.strip() and not l.startswith('[')]
                formatted_def = "；".join(clean_lines) if clean_lines else translation
                standard_zh = formatted_def
                ocr_fixed_count += 1

            if not synonyms or len(synonyms) < 3:
                synonyms = ecdict.extract_synonyms(clean_w, translation, target_count=4)

        if not synonyms:
            synonyms = [p.strip() for p in re.split(r'[；;，,、\s]+', standard_zh) if len(p.strip()) >= 2][:4]

        meta_dict[word]["definition"] = standard_zh
        meta_dict[word]["synonyms"] = synonyms
        synonyms_map[clean_w] = synonyms

        raw_etym = db_mgr.get_raw_etymology(clean_w)
        existing_convey = db_mgr.get_convey_record(clean_w)

        convey_record = None
        if existing_convey and not args.force_api:
            convey_record = existing_convey
        elif gemini_cleaner and (not existing_convey or args.force_api):
            gemini_res = gemini_cleaner.clean_word(clean_w, standard_zh, raw_etym)
            if gemini_res:
                convey_record = {
                    'roots': gemini_res['roots'],
                    'breakdown': gemini_res.get('breakdown', ''),
                    'literal': gemini_res.get('literal', ''),
                    'story': gemini_res['story'],
                    'evolution': gemini_res['evolution'],
                    'chain': gemini_res['chain'],
                    'synonyms': gemini_res.get('synonyms', synonyms),
                    'zh_def': gemini_res.get('cn_fixed', standard_zh),
                    'raw_etym': raw_etym
                }
                convey_generated += 1
                if not args.dry_run:
                    db_mgr.save_convey_record(
                        clean_w,
                        convey_record['roots'],
                        convey_record['story'],
                        convey_record['evolution'],
                        raw_etym,
                        convey_record['synonyms'],
                        convey_record['zh_def']
                    )

        if not convey_record:
            rule_res = RuleBasedConveyGenerator.generate(clean_w, raw_etym, standard_zh, synonyms)
            convey_record = {
                'roots': rule_res['roots'],
                'breakdown': rule_res['breakdown'],
                'literal': rule_res['literal'],
                'story': rule_res['story'],
                'evolution': rule_res['evolution'],
                'chain': rule_res['chain'],
                'synonyms': rule_res['synonyms'],
                'zh_def': standard_zh,
                'raw_etym': raw_etym
            }
            if not args.dry_run:
                db_mgr.save_convey_record(
                    clean_w,
                    convey_record['roots'],
                    convey_record['story'],
                    convey_record['evolution'],
                    raw_etym,
                    convey_record['synonyms'],
                    standard_zh
                )

        convey_map[clean_w] = convey_record
        updated_count += 1

        if idx % 500 == 0 or idx == len(target_words):
            print(f"  -> 已处理进度: {idx}/{len(target_words)} (OCR修补: {ocr_fixed_count}, 耗时: {time.time() - start_time:.1f}s)")

    print(f"\n[OK] 跑批完成! 总词数: {updated_count}, OCR修正: {ocr_fixed_count}, Gemini重塑: {convey_generated}")

    if args.dry_run:
        print("[!] 试运行模式，跳过写回前端静态文件。")
        db_mgr.close()
        return

    os.makedirs(os.path.dirname(os.path.abspath(args.out_convey)), exist_ok=True)
    convey_js_content = (
        "/**\n"
        " * Our Stone Cottages - Lexicon Convey Cards & Synonyms Registry (Gemini 3.8 Flash)\n"
        f" * 自动生成于: {time.strftime('%Y-%m-%d %H:%M:%S')}\n"
        " */\n"
        "(function() {\n"
        "  'use strict';\n\n"
        f"  window.WORD_SYNONYMS = {json.dumps(synonyms_map, ensure_ascii=False)};\n\n"
        f"  window.WORD_CONVEY = {json.dumps(convey_map, ensure_ascii=False)};\n\n"
        "  console.info('[LexiconModule] Convey 3-stage visual cards & synonyms registry ready.');\n"
        "})();\n"
    )
    with open(args.out_convey, 'w', encoding='utf-8') as f:
        f.write(convey_js_content)
    print(f"[+] 前端直连三段式与近义词库已生成: {args.out_convey} ({os.path.getsize(args.out_convey) / 1024:.1f} KB)")

    marker = "const WORD_UNIT_META = "
    start_pos = original_file_content.find(marker)
    brace_start = original_file_content.find("{", start_pos)
    depth = 0
    end_pos = -1
    for i in range(brace_start, len(original_file_content)):
        c = original_file_content[i]
        if c == '{':
            depth += 1
        elif c == '}':
            depth -= 1
            if depth == 0:
                end_pos = i + 1
                break

    new_meta_json = json.dumps(meta_dict, ensure_ascii=False, indent=2)
    updated_file_content = original_file_content[:brace_start] + new_meta_json + original_file_content[end_pos:]

    with open(args.words_js, 'w', encoding='utf-8') as f:
        f.write(updated_file_content)
    print(f"[+] 词库源文件已更新: {args.words_js}")
    db_mgr.close()


if __name__ == "__main__":
    main()
