# -*- coding: utf-8 -*-
"""
小石屋·藏书阁轻量级高速检索引擎 (Bookshelf Instant RAG v2)
具备稀有情节关键词加权（IDF）与自然召回
"""

import os
import json
import re

try:
    import bookshelf_links
except ImportError:
    from . import bookshelf_links

INDEX_FILE = os.path.join(os.path.dirname(__file__), "bookshelf_index.json")

# 稀有度与高权情节词典
HIGH_WEIGHT_TERMS = {
    "天台": 40,
    "布道": 40,
    "演讲": 35,
    "红砖": 40,
    "字条": 35,
    "无尽能源": 45,
    "战斗之火": 45,
    "库房": 35,
    "舒田": 25,
    "占武": 20,
    "李天许": 25,
    "林安谷": 30,
    "诸葛千相": 30,
    "诸葛道一": 30,
    "卢标": 30,
    "卢修": 30,
    "真实思维": 35,
    "心力脑力": 35,
    "进步本": 35,
    "所学不丢": 35,
    "为学日益": 40,
    "思维聚变": 35,
    "法医解剖": 40,
    "外甥": 30
}

def search_bookshelf(query: str, max_chars: int = 1800) -> str:
    if not os.path.exists(INDEX_FILE):
        return ""
        
    try:
        with open(INDEX_FILE, "r", encoding="utf-8") as f:
            data = json.load(f)
    except Exception:
        return ""
        
    novel_chapters = data.get("novel", [])
    heju_articles = data.get("heju", [])
    
    # 纠错
    normalized_query = query.replace("休园", "修远").replace("占武天台", "天台 占武")
    
    # 提取查询词并打分
    query_terms = {}
    for term, weight in HIGH_WEIGHT_TERMS.items():
        if term in normalized_query:
            query_terms[term] = weight
            
    # 补充通用词
    words = re.findall(r'[\u4e00-\u9fa5]{2,4}', normalized_query)
    stop_words = {"记得", "知道", "什么", "怎么", "那个", "这个", "觉得", "一下", "不是", "还是", "现在", "我们", "可以", "老是", "刚才", "还记"}
    for w in words:
        if w not in stop_words and w not in query_terms:
            query_terms[w] = 5 if w != "修远" else 2 # 修远每章都有，基础分降为2
            
    if not query_terms:
        return ""
        
    hits = []
    
    # 1. 检索小说
    for ch in novel_chapters:
        score = 0
        t = ch.get("title", "")
        cont = ch.get("content", "")
        for term, weight in query_terms.items():
            if term in t:
                score += weight * 3
            cnt = cont.count(term)
            score += cnt * weight
        if score > 0:
            hits.append((score, "小说《进击的学霸》", t, cont))
            
    # 2. 检索核聚
    for art in heju_articles:
        score = 0
        t = art.get("title", "")
        cont = art.get("content", "")
        for term, weight in query_terms.items():
            if term in t:
                score += weight * 3
            cnt = cont.count(term)
            score += cnt * weight
        if score > 0:
            hits.append((score, "核聚原典", t, cont))
            
    hits.sort(key=lambda x: x[0], reverse=True)
    
    link_context = ""
    try:
        link_context = bookshelf_links.resolve_links(query)
    except Exception as e:
        print(f"[RAG] resolve_links error: {e}")

    if not hits or hits[0][0] < 10:
        return link_context.strip()
        
    snippets = []
    for score, source, title, cont in hits[:2]:
        idx = -1
        # 寻找最高权重的词
        for term in sorted(query_terms.keys(), key=lambda k: query_terms[k], reverse=True):
            idx = cont.find(term)
            if idx != -1:
                break
        if idx == -1: idx = 0
        start = max(0, idx - 100)
        end = min(len(cont), idx + 500)
        snip = cont[start:end].replace('\n', ' ').strip()
        snippets.append(f"【{source} · {title}】\n……{snip}……")
        
    passage_text = "\n\n".join(snippets)
    if link_context:
        return (link_context + "\n\n【精选章节细节原句】：\n" + passage_text).strip()
    return passage_text
