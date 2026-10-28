# 小石屋 (Our Stone Cottages) 架构规范与版本控制开发手册

> **核心原则**：模块物理拆分、结构永久固化、缓存隔离治理、数据严禁上库、版本严格可回退。

---

## 一、 模块拆分与职责矩阵 (Module Hierarchy)

系统采用“微内核 (Core) + 独立业务插件模块 (Modules)”的分离架构。各模块独立存在于 `frontend/modules/` 目录下，相互之间**严禁直接引用私有变量或跨模块直接操纵 DOM**。

| 模块名称 | 所在路径 | 核心职责 | 依赖与通信方式 |
| :--- | :--- | :--- | :--- |
| **微内核 (Core)** | `frontend/core/` | 基础发布订阅事件总线 (`event-bus.js`) 与用户状态/隔离缓存层 (`storage-adapter.js`) | 底层基座，不含业务逻辑 |
| **1. 大厅模块 (Lobby)** | `frontend/modules/lobby/` | 主界面渲染、顶栏状态（金币/体力/SAN值）、各模块路由分发 | 监听 `USER_PROFILE_UPDATED`，派发 `NAVIGATE_VIEW` |
| **2. 词库模块 (Lexicon)** | `frontend/modules/lexicon/` | 单词中英双解、词根词缀、生词标记 (Mark)、CET4考纲题库 | 派发 `WORD_MARKED` / `WORD_UNMARKED` |
| **3. 远征模块 (Expedition)** | `frontend/modules/expedition/` | 远征探险地图、随机节点遭遇、理智/血量扣除、结算掉落 | 对接 `ExpeditionEngine`，派发 `EXPEDITION_EVENT` |
| **4. 消消乐模块 (Match3)** | `frontend/modules/match3/` | 语境消歧三段匹配与糖果消消乐对战引擎、连击计分、PK 竞技 | 派发 `MATCH3_GAME_START` / `MATCH3_GAME_OVER` |
| **5. 卡牌模块 (Cards)** | `frontend/modules/cards/` | 闪卡复习记忆卡槽、22 张塔罗大阿卡那技能遗物卡与战术装备 | 派发 `CARD_EQUIPPED` / `CARD_UNEQUIPPED` |
| **6. 四季精英 (Seasons)** | `frontend/modules/seasons/` | 春/夏/秋/冬四季轮替环境加成、精英怪 Boss 战强化词缀 | 派发 `SEASON_ROTATED` / `ELITE_ENCOUNTER_ACTIVE` |
| **7. Beta 地推分支 (Beta-Promo)** | `frontend/modules/beta-promo/` | 线下地推展台专属体验、渠道统计打点、现场离线试玩 | 可独立插拔，通过 URL 参数 `?promo=...` 自动唤起 |

### 🛠️ 模块修改纪律
- **只改内容，不碰骨架**：每次新增关卡、玩法或内容时，**只允许在对应 `modules/<module_name>/` 目录下新增或编辑文件**。
- **严禁向 `frontend/app.js` 塞入私有逻辑**：`app.js` 仅保留应用挂载与兼容引导代码。

---

## 二、 用户数据与缓存隔离红线 (Data Isolation)

```
       [用户真实数据 (VPS 独占)]
                 │
                 │ (严格隔离，禁止直接入库)
                 ▼
       ┌────────────────────────┐
       │   BandwagonHost VPS    │  --> 存储: /var/www/vocab/backend/vocab.db
       │  (SQLite 数据库+密码哈希)│  --> 凭证: /etc/vocab/secrets.json
       └────────────────────────┘
                 ▲
                 │ (HTTPS API / JWT 验证)
                 ▼
       ┌────────────────────────┐
       │ 客户端各模块独立缓存    │  --> 规则: 各模块独立键名 (stone:mod:<module>:*)
       │ (StoneModuleStorage)   │  --> 互不干扰，禁止全局无序 localStorage 污染
       └────────────────────────┘
```

1. **绝对禁止上传 GitHub 的内容**：
   - 真实用户密码散列、用户账号列表、作答历史记录。
   - 包含服务器凭据的文件（`.deployment-secrets.local.json`、JWT 私钥）。
   - 数据库实体文件（`*.db`、`*.sqlite`）。
2. **模块缓存隔离机制**：
   - 各模块读取与保存缓存必须通过 `window.StoneStorage.setModuleData(moduleName, key, value)`。
   - 禁止在模块内直接无规则调用 `localStorage.setItem`，防止不同模块之间发生键名碰撞或被意外清空。

---

## 三、 版本管理与回退基准工作流 (SemVer & Rollback)

为了确保每次上线或修改都有坚实的回退点可寻，必须严格执行以下语义化版本规范：

### 1. 版本号命名约定
* **大版本 (Major) `v1.0.0`, `v2.0.0`**：系统架构重构、全新主模块引入、核心数据库接口升级。
* **功能小版本 (Minor) `v1.1.0`, `v1.2.0`**：某个模块新增功能（如消消乐增加多人联机房、词库新增四级词汇集）。
* **补丁版本 (Patch) `v1.1.1`, `v1.1.2`**：日常 UI 样式微调、文案润色、Bug 快速修复。

### 2. 标准更新与回退发布三步法

#### 第一步：修改前创建安全基准点 (Tag)
在进行任何修改前，先打一个预检标签，确保旧代码万无一失：
```bash
git tag -a v1.0.0-pre -m "v1.0.0 修改前安全基准快照"
```

#### 第二步：在独立模块中完成修改与验证
```bash
# 验证测试套件
python tests/database_test.py
node --test tests/performance.test.cjs
node --test tests/flashcard.test.cjs
```

#### 第三步：构建、提交并推送发布版本号
```bash
# 编译最新静态产物
node build.cjs

# 提交并打正式 Release Tag
git add .
git commit -m "feat(cards): 升级塔罗牌主动战术结算"
git tag -a v1.1.0 -m "Release v1.1.0: 完成卡牌模块升级"
git push origin main --tags
```

#### 🚨 紧急回退流程 (一键回滚)
若新版本在线上或测试中发现异常，无需慌张，直接回滚至指定 Tag：
```bash
# 回退到上一个稳定版本
git checkout v1.0.0
# 推送部署
python deploy_production.py
```
