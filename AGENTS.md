# 小石屋 (Our Stone Cottages) 项目专属核心规范 (AGENTS.md)

> 本文档为小石屋项目唯一权威架构、业务约束与工程纪律规范，所有在此代码库（`F:\cluade-products\scripts\vocab-survival-repo\`）工作的 AI 编程助手必须严格遵守。全局身份与通用环境偏好参见全局 `~/.gemini/config/GEMINI.md`。

---

## 一、 微内核分层与模块解耦铁律

系统采用“微内核基座 (Core) + 独立业务模块 (Modules)”的分离架构，所有独立模块物理归档于 `frontend/modules/` 目录下。相互之间**严禁直接私自篡改对方模块私有状态或侵入其私有 DOM**。

| 模块名称 | 物理路径 | 核心职责 | 跨模块通信与暴露方式 |
| :--- | :--- | :--- | :--- |
| **微内核基座 (Core)** | `frontend/core/` | 跨模块事件总线 (`event-bus.js`) 与用户状态隔离适配器 (`storage-adapter.js`) | `window.StoneBus`, `window.StoneStorage` |
| **1. 大厅模块 (Lobby)** | `frontend/modules/lobby/` | 首页大厅状态渲染、角色/体力/SAN值、主模块路由分发导航 | 监听 `USER_PROFILE_UPDATED`，派发 `NAVIGATE_VIEW` |
| **2. 词库模块 (Lexicon)** | `frontend/modules/lexicon/` | 词汇释义、生词本 (Mark)、CET4考卷库、**4.6万权威词源引擎 (`etymology.js`)** | 派发 `WORD_MARKED` / `WORD_UNMARKED`，暴露 `StoneEtymology` 服务 |
| **3. 远征模块 (Expedition)** | `frontend/modules/expedition/` | 远征探险地图、随机节点遭遇、理智/血量扣除、结算掉落 | 对接 `ExpeditionEngine`，派发 `EXPEDITION_EVENT` |
| **4. 消消乐模块 (Match3)** | `frontend/modules/match3/` | 语境消歧三段匹配与糖果消消乐对战引擎、连击计分、PK 竞技 | 派发 `MATCH3_GAME_START` / `MATCH3_GAME_OVER` |
| **5. 卡牌模块 (Cards)** | `frontend/modules/cards/` | 闪卡复习记忆卡槽、22 张塔罗大阿卡那技能遗物卡与战术装备 (`tarot-skills.js`) | 派发 `CARD_EQUIPPED` / `CARD_UNEQUIPPED`，调用词源引擎 |
| **6. 四季精英 (Seasons)** | `frontend/modules/seasons/` | 春/夏/秋/冬四季轮替环境加成、精英怪 Boss 战强化词缀 | 派发 `SEASON_ROTATED` / `ELITE_ENCOUNTER_ACTIVE` |
| **7. Beta 地推分支 (Beta-Promo)** | `frontend/modules/beta-promo/` | 线下地推展台专属体验、渠道统计打点、现场离线试玩 | 可独立插拔，通过 URL 参数 `?promo=...` 自动唤起 |

### 词源系统（Etymology）规范
1. **架构归属**：正式收归于 **词库模块 (`frontend/modules/lexicon/etymology.js`)**。
2. **三级检索体系**：
   - **Level 1 (离线秒级库)**：VPS `/var/www/vocab/data/etymology.db`（SQLite 46,840 词 Etymonline 权威历史演变）；
   - **Level 2 (在线官方 API)**：后端 `/api/etymology?word=...` 在离线库未命中时自动连线 Wiktionary 补全；
   - **Level 3 (前端直连兜底)**：前端提供备用 Wiktionary 直接链路。
3. **交互规范**：
   - 查词抽屉配备专用「🏛️ 权威词源」Tab；卡片正面提供轻量快捷入口，判题对比页保留原地折叠展开条，不打断高频背词节奏。

---

## 二、 用户数据绝对隔离红线（Zero-Leakage Policy）

1. **严禁用户数据上传 GitHub**：
   - 真实用户注册信息、密码散列、学习打卡记录、JWT Secret 必须留在 VPS 生产环境（`/var/www/vocab/data/` 与 `/var/www/vocab/backend/`），仅由 SQLite/JSON 在服务端读取。
   - 本地与 GitHub 仓库仅保留架构逻辑、静态资产与测试桩代码。
   - `.gitignore` 严格拦截所有 `.db`, `.sqlite`, `.sqlite3`, `.env`, `secrets.json`, `.gz` 等敏感文件。
2. **客户端本地缓存隔离**：
   - 严禁模块随意读写全局未经命名的 `localStorage` 键；
   - 必须通过 `StoneStorage.get(moduleName, key)` 与 `StoneStorage.set(moduleName, key, value)` 访问，自动添加 `stone_{module}_` 命名空间前缀。

---

## 三、 构建、测试与自动化部署纪律

1. **静态资产构建**：
   - 修改前端代码后，必须执行 `node build.cjs` 验证语法及依赖映射，生成最新版本化哈希资产并更新 `asset-manifest.json` 与 `STONE_ASSETS` 指纹。
2. **本地测试验证**：
   - 提交前主动运行回归测试：`node --test tests/flashcard.test.cjs` 与 `node --test tests/dictionary-fast.test.cjs`，确保 100% 通过，不交未经自测的代码。
3. **全量生产部署**：
   - 统一通过 `python deploy_production.py` 执行零停机原子发布：
     1. 打包并同步增量哈希资产至 VPS `/var/www/vocab/assets/`；
     2. 同步微内核基座、业务模块源码与后端脚本；
     3. 平滑重载 Nginx（`nginx -s reload`）；
     4. 执行端到端线上健康探针（Smoke Test），验证主站与词源 API 均为 HTTP 200。
