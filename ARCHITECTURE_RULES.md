# 小石屋 (Our Stone Cottages) 架构规范与版本控制开发手册

> **核心原则**：模块物理拆分、结构永久固化、缓存隔离治理、数据严禁上库、版本严格可回退。

---

## 一、 模块拆分与职责矩阵 (Module Hierarchy)

系统采用“微内核 (Core) + 独立业务插件模块 (Modules)”的分离架构。各模块独立存在于 `frontend/modules/` 目录下，相互之间**严禁直接引用私有变量或跨模块直接操纵 DOM**。

| 模块名称 | 所在路径 | 核心职责 | 依赖与通信方式 |
| :--- | :--- | :--- | :--- |
| **微内核 (Core)** | `frontend/core/` | 基础发布订阅事件总线 (`event-bus.js`) 与用户状态/隔离缓存层 (`storage-adapter.js`) | 底层基座，不含业务逻辑 |
| **1. 大厅模块 (Lobby)** | `frontend/modules/lobby/` | 主界面渲染、顶栏状态（金币/体力/SAN值）、各模块路由分发 | 监听 `USER_PROFILE_UPDATED`，派发 `NAVIGATE_VIEW` |
| **2. 词库模块 (Lexicon)** | `frontend/modules/lexicon/` | 单词中英双解、词根词缀、生词标记 (Mark)、CET4考纲题库、**4.6万词权威词源考据子引擎 (`etymology.js`)** | 派发 `WORD_MARKED` / `WORD_UNMARKED`，对外暴露 `StoneEtymology` 供卡牌与抽屉调用 |
| **3. 远征模块 (Expedition)** | `frontend/modules/expedition/` | 远征探险地图、随机节点遭遇、理智/血量扣除、结算掉落 | 对接 `ExpeditionEngine`，派发 `EXPEDITION_EVENT` |
| **4. 消消乐模块 (Match3)** | `frontend/modules/match3/` | 语境消歧三段匹配与糖果消消乐对战引擎、连击计分、PK 竞技 | 派发 `MATCH3_GAME_START` / `MATCH3_GAME_OVER` |
| **5. 卡牌模块 (Cards)** | `frontend/modules/cards/` | 闪卡复习记忆卡槽、22 张塔罗大阿卡那技能遗物卡与战术装备，卡片集成【💡 词源考据】 | 派发 `CARD_EQUIPPED` / `CARD_UNEQUIPPED`，调用词库词源引擎 |
| **6. 四季精英 (Seasons)** | `frontend/modules/seasons/` | 春/夏/秋/冬四季轮替环境加成、精英怪 Boss 战强化词缀 | 派发 `SEASON_ROTATED` / `ELITE_ENCOUNTER_ACTIVE` |
| **7. Beta 地推分支 (Beta-Promo)** | `frontend/modules/beta-promo/` | 线下地推展台专属体验、渠道统计打点、现场离线试玩 | 可独立插拔，通过 URL 参数 `?promo=...` 自动唤起 |

### 🏛️ 词源（Etymology）专属架构规范
* **归属**：明确收归于 **词库模块 (`modules/lexicon/etymology.js`)**。
* **数据底座**：
  * **Level 1 (本地离线秒级库)**：`F:/cluade-products/data/etymology.db`（SQLite 包含 46,840 条 Etymonline 官方历史词源）。
  * **Level 2 (在线权威官方 API 降级)**：后端 `/api/etymology` 直连 Wiktionary API 补充未收录词汇。
  * **Level 3 (构词推演)**：前端提供直连 Wiktionary 备用通道。
* **各端接入**：
  * **查词抽屉**：点击“🏛️ 词源与故事”Tab 直接发起离线/在线检索。
  * **闪卡卡片 (Flashcard)**：正面单词旁配备 `💡 词源` 胶囊按钮；判定结果面板参考释义区配备 `💡 查阅「word」词源故事与演变` 按钮。
