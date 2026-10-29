# 小石屋 (Our Stone Cottages) 架构规范与版本控制开发手册

> **核心原则**：模块物理拆分、骨架与内容解耦、用户数据隔离在 VPS、SemVer 语义化版本严格管理，每次发布保留可回退标签。

---

## 一、 模块分层与职责规范 (Module Hierarchy)

系统采用“微内核基座 (Core) + 业务模块 (Modules)”的分离架构，所有独立模块物理归档于 `frontend/modules/` 目录下，相互之间**严禁直接私自篡改对方模块私有状态或私自侵入其 DOM**。

| 模块名称 | 物理路径 | 核心职责 | 跨模块通信与暴露方式 |
| :--- | :--- | :--- | :--- |
| **微内核基座 (Core)** | `frontend/core/` | 跨模块事件总线 (`event-bus.js`) 与用户状态/隔离缓存适配器 (`storage-adapter.js`) | `window.StoneBus`, `window.StoneStorage` |
| **1. 大厅模块 (Lobby)** | `frontend/modules/lobby/` | 首页大厅状态渲染、角色/体力/SAN值、主模块路由分发导航 | 监听 `USER_PROFILE_UPDATED`，派发 `NAVIGATE_VIEW` |
| **2. 词库模块 (Lexicon)** | `frontend/modules/lexicon/` | 词汇释义、词根词缀、生词本 (Mark)、CET4考卷库、**4.6万权威词源引擎 (`etymology.js`)** | 派发 `WORD_MARKED` / `WORD_UNMARKED`，暴露 `StoneEtymology` 服务 |
| **3. 远征模块 (Expedition)** | `frontend/modules/expedition/` | 远征探险地图、随机节点遭遇、理智/血量扣除、结算掉落 | 对接 `ExpeditionEngine`，派发 `EXPEDITION_EVENT` |
| **4. 消消乐模块 (Match3)** | `frontend/modules/match3/` | 语境消歧三段匹配与糖果消消乐对战引擎、连击计分、PK 竞技 | 派发 `MATCH3_GAME_START` / `MATCH3_GAME_OVER` |
| **5. 卡牌模块 (Cards)** | `frontend/modules/cards/` | 闪卡复习记忆卡槽、22 张塔罗大阿卡那技能遗物卡与战术装备 (`tarot-skills.js`) | 派发 `CARD_EQUIPPED` / `CARD_UNEQUIPPED`，调用词源引擎 |
| **6. 四季精英 (Seasons)** | `frontend/modules/seasons/` | 春/夏/秋/冬四季轮替环境加成、精英怪 Boss 战强化词缀 | 派发 `SEASON_ROTATED` / `ELITE_ENCOUNTER_ACTIVE` |
| **7. Beta 地推分支 (Beta-Promo)** | `frontend/modules/beta-promo/` | 线下地推展台专属体验、渠道统计打点、现场离线试玩 | 可独立插拔，通过 URL 参数 `?promo=...` 自动唤起 |

---

## 二、 词源系统（Etymology）交互与数据规范

1. **架构归属**：正式收归于 **词库模块 (`frontend/modules/lexicon/etymology.js`)**。
2. **三级数据检索链路**：
   - **Level 1 (本地离线秒级库)**：`F:/cluade-products/data/etymology.db`（SQLite 包含 46,840 条 Etymonline 权威历史词源演变）。
   - **Level 2 (在线官方 API 兜底)**：后端 `/api/etymology?word=...` 直连 Wiktionary API 自动补全未收录的罕见衍生词。
   - **Level 3 (前端自愈推演)**：前端提供备用 Wiktionary 直接链路。
3. **前端交互原则（拒绝打扰、沉浸背词）**：
   - **严禁视觉打扰**：卡片标题旁和主要操作区绝不放置高亮、突兀的独立大按钮，不打断高频背词节奏。
   - **轻量内嵌折叠抽屉**：释义底端采用原生折叠条（`🏛️ [词源脉络] ▸ 展开`），默认折叠不占视觉空间；用户主动点击时原地展开考据，支持随时一键收起。
   - **抽屉全局检索**：词典查词抽屉配备专用“🏛️ 词源与故事”Tab，用于深度全篇考据。

---

## 三、 数据隔离与安全红线 (Zero-Leakage Policy)

1. **绝对禁止用户数据上传 GitHub**：
   - 真实用户注册信息、密码散列、学习打卡记录、JWT Secret 必须留在 VPS 生产环境（`/var/www/vocab/backend/`），仅由 SQLite/JSON 在本地读取。
   - 本地与 GitHub 仓库仅保留架构逻辑、静态资源与测试桩代码。
   - `.gitignore` 严格拦截所有 `.db`, `.sqlite`, `.sqlite3`, `.env`, `secrets.json`, `.gz`, `assets/*.js` 等编译哈希与敏感文件。
2. **客户端本地缓存命名空间隔离**：
   - 严禁模块随意读写未经命名的 `localStorage` 键。
   - 必须通过 `StoneStorage.get(moduleName, key)` 与 `StoneStorage.set(moduleName, key, value)` 访问，键名自动添加 `stone_{module}_` 前缀，防止状态互相覆盖。

---

## 四、 语义化版本控制与发布回退纪律 (SemVer & Rollback)

系统采用严格的语义化版本规范：`vX.Y.Z`
- **主版本号 (Major, X)**：架构级重大升级（如：微内核分拆与模块解耦）。
- **次版本号 (Minor, Y)**：功能模块新增或重大功能扩展（如：词源考据系统上线）。
- **修订版本号 (Patch, Z)**：缺陷修复与性能调优（如：部署资产同步修复、折叠UI优化）。

### 已发布版本回退节点 (Git Tags)：
- `backup/full-state-pre-refactor`：重构前的全量原始历史快照。
- `v1.0.0`：微内核物理分拆与 7 大业务模块解耦基线。
- `v1.1.0`：4.6 万权威离线词源系统上线，正式入驻词库模块。
- `v1.1.1`：修复部署构建资产指纹同步流水线，重构闪卡原地内嵌折叠词源 UI，消除按钮卡死。

---

## 五、 构建与自动化部署管线 (CI & Deployment)

1. **构建要求**：
   - 每次前端代码修改完成后，必须执行 `node build.cjs` 验证语法及依赖映射，更新 `asset-manifest.json` 与 `STONE_ASSETS` 指纹。
2. **全量部署要求**：
   - **严禁**直接单文件热更新 `index.html` 而遗漏编译哈希资产。
   - 统一通过 `python deploy_production.py` 执行部署：
     1. 自动比对本地 `frontend/assets/` 与 VPS `/var/www/vocab/assets/`，打包增量哈希资产并解压。
     2. 同步微内核基座与所有业务模块源码。
     3. 平滑重载 Nginx（`nginx -s reload`）。
     4. 自动执行线上健康探针（Smoke Test），验证 HTTP 200 响应。
