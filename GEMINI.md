# 小石屋 (Our Stone Cottages) 项目专属核心规则 (GEMINI.md)

本项目遵守以下最高优先级架构与安全规则，所有 AI 编程助手在此目录下工作必须严格遵守：

## 1. 模块物理拆分与微内核原则
- **微内核基座 (`frontend/core/`)**：`event-bus.js` 负责事件总线，`storage-adapter.js` 负责隔离缓存。
- **业务模块 (`frontend/modules/`)**：7 大独立业务模块（lobby 大厅, lexicon 词库, expedition 远征, match3 消消乐, cards 卡牌, seasons 四季精英, beta-promo 地推）。
- **解耦修改原则**：任何业务功能修改仅修改对应模块内部内容，不碰微内核骨架，严禁私自侵入其他模块的私有 DOM 与私有状态。
- **词源系统**：收归于词库模块（`modules/lexicon/etymology.js`），闪卡背词界面仅采用轻量内嵌折叠条（`🏛️ [词源脉络] ▸ 展开`），严禁增设打乱刷词节奏的突兀大按钮。

## 2. 用户数据绝对隔离红线（Zero-Leakage）
- **严禁用户数据上传 GitHub**：用户真实数据、密码散列、打卡进度、JWT Secret 必须留在 VPS 生产环境（`/var/www/vocab/backend/`），严禁进入 Git 索引或推送到远程仓库。
- **客户端缓存隔离**：必须通过 `StoneStorage.get(module, key)` 与 `StoneStorage.set(module, key, val)` 进行模块化命名空间隔离，防止交叉污染。

## 3. 语义化版本管理与回退节点（SemVer & Rollback）
- 严格遵循语义化版本规范：`vX.Y.Z`（大版本.功能版本.修复版本）。
- 每次更新或修复必须打 Git Tag，确保历史随时可回退。
- 历史核心 Tag：`v1.0.0`（模块化解耦）、`v1.1.0`（词源系统落户）、`v1.1.1`（折叠词源UI与部署管道修复）。

## 4. 构建与部署流水线纪律
- 前端修改必须执行 `node build.cjs` 验证打包。
- 部署统一通过 `python deploy_production.py` 增量同步 `/assets/` 指纹包与模块源码，杜绝单点热更导致 404 挂起。

详细设计与各模块通信规范详见：`ARCHITECTURE_RULES.md`
