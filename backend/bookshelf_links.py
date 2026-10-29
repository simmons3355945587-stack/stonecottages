# -*- coding: utf-8 -*-
"""
小石屋·藏书阁动态外挂链接引擎 (Bookshelf Dynamic Lore Links)
将《进击的学霸》全本谱系与《核聚体系》从底层人设中解耦，按需动态链接挂载
后续扩展新书只需在此注册新链接节点，绝不污染膨胀底层人设。
"""

BOOKSHELF_LINKS = {
    "jinjidexueba": {
        "id": "link_jinjidexueba",
        "book_name": "卷一·《进击的学霸》（全本235章连载）",
        "triggers": [
            "修远", "阿修", "休园", "占武", "诸葛", "千相", "诸葛道一", 
            "卢标", "木炎", "夏子萱", "李天许", "舒田", "林安谷", 
            "二中", "兰水", "天台", "红砖", "补考", "烈焰", "无尽能源",
            "神相", "皮相", "骨相", "肉相", "玄牝", "人形电脑"
        ],
        "character_lore": {
            "修远": "行道者。兰水二中普通班学生，掉班受辱后在绝望中长出骨头，死磕第一性原理，自强逆袭的半神。",
            "占武": "意志之神。四重演进：皮相(139章)->肉相(158章)->骨相(187章)->神相(219章)。天台红砖写字传灯护道。",
            "诸葛千相": "术数之巅/妖星。极度精通大题变量拆解、阶梯分层战术与局势操控。",
            "林安谷": "真理之神。纯粹理性化身，超脱世俗名利，万物皆数，终极玄牝之门(229-231章)。",
            "卢标": "伪勤奋反面教材。用战术勤奋掩盖战略懒惰，自我感动与网吧沉沦，真硬仗面前现原形。"
        },
        "chronology_atlas": [
            "【高一至暗篇（1-30章）】: 二中分班风波、修远掉班泥泞、卢标网吧放纵与斗牛、木炎耻辱。",
            "【心智初醒篇（31-75章）】: 书房秘密、假思维导图破灭、辩论赛交锋、掌控节奏。",
            "【巨人崛起篇（76-135章）】: 第76章补考战役·巨人崛起（修远首次破茧）、千相分层术、夏子萱与情绪管理。",
            "【战神意志篇（136-180章）】: 占武皮相/肉相、第168-170章操场烈焰演讲（薪火相传、无尽能源！）。",
            "【神相涅槃篇（181-220章）】: 占武骨相、第218-220章绝望天台·占武红砖布道（红砖写字‘放弃凡人身份’‘天地四方大光明’）。",
            "【高考决战篇（221-235章）】: 占武神相、高考决战、林安谷出场·真理之神（229-231章）、大势思维（232章）。"
        ]
    },
    "heju": {
        "id": "link_heju",
        "book_name": "卷二·《核聚认知心法与真实思维体系》（134篇原典）",
        "triggers": [
            "核聚", "真实思维", "思维聚变", "心力脑力", "一千次定律", 
            "此心光明", "刻意练习", "所以然", "相乘律", "不发疯", 
            "一道题研究十页", "自学能力", "满分速成", "肖申克", "降维打击"
        ],
        "core_lore": {
            "真实思维": "想什么就写什么，检验较真，一道题研究十页，知其所以然，拒绝自我欺骗。",
            "思维聚变": "破除思维监狱，从绝望无助回归赤子之心，像多米诺骨牌一样顺推客观因果。",
            "心力脑力定律": "体力为乘数底座（相乘律），切碎大难题产生乐趣，正向蓄养浩然正气。"
        }
    }
}

def resolve_links(query: str) -> str:
    """根据输入动态解析并触发外挂书籍链接"""
    if not query:
        return ""
        
    matched_sections = []
    q_lower = query.lower()
    
    for key, link in BOOKSHELF_LINKS.items():
        hit_triggers = [t for t in link["triggers"] if t.lower() in q_lower]
        if hit_triggers:
            lines = [f"【已动态挂载外挂藏书链接 · {link['book_name']}】"]
            lines.append(f"触发锚点词：{', '.join(hit_triggers)}")
            
            # 针对学霸书挂载人物与编年
            if key == "jinjidexueba":
                # 挂载命中的具体人物谱系
                hit_chars = [c for c in link["character_lore"] if c in query or (c=="修远" and "休园" in query)]
                if hit_chars:
                    lines.append("【相关人物谱系】：")
                    for c in hit_chars:
                        lines.append(f"- {c}：{link['character_lore'][c]}")
                # 挂载宏观编年沙盘
                lines.append("【全景战役编年地图】：")
                for item in link["chronology_atlas"]:
                    lines.append(f"  * {item}")
                    
            elif key == "heju":
                lines.append("【核聚核心心法脉络】：")
                for m, desc in link["core_lore"].items():
                    if any(t in query for t in [m, "核聚", "思维"]):
                        lines.append(f"- {m}：{desc}")
                        
            matched_sections.append("\n".join(lines))
            
    if not matched_sections:
        return ""
        
    return "\n\n" + "\n\n".join(matched_sections) + "\n"
