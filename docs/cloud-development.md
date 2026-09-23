# 用手机给小石屋加功能

入口：https://chatgpt.com/codex 。使用 ChatGPT 账号登录，关联 GitHub 仓库 `simmons3355945587-stack/stonecottages`。

这份配置尚需推送到 GitHub、连接 Codex 环境并配置生产发布环境，才会实际生效。普通 ChatGPT 对话不会自动取得服务器权限。

## 一次性配置

1. 先把当前已上线代码和本次配置一起整理成仓库分支，检查差异后合并。旧代码含硬编码凭据，必须从待提交文件中移除；已经公开的凭据必须在供应商后台轮换，删除源码不等于撤销。
2. 在 Codex 为此仓库创建云环境，设置安装脚本为 `bash .codex/setup.sh`。AI 开发阶段不需要生产 API Key、服务器密码或部署凭据。
3. 在 GitHub 建立 `production` 环境，限制到 `main` 分支，设置站长为 required reviewer，并允许站长批准自己的发布。该环境中保存 `STONE_BWH_VEID` 与已轮换的 `STONE_BWH_API_KEY` 两项部署凭据。
4. 在仓库 Variables 新增 `STONE_CLOUD_DEPLOY_ENABLED=true`。未设置前只运行测试，发布被禁用。
5. 先手动运行一次 Actions 的 `Test and publish Stone Cottages`，核对测试和备份，再批准生产发布。尚未完成此步骤时不能宣称自动部署已接通。

## 日常使用

在手机浏览器打开 Codex，选择小石屋环境，描述要增加的功能。示例：

> 给小石屋增加每日学习目标设置，适配手机。保留手动 Mark、账号云进度和英文释义缓存。完成后运行 python deploy/cloud/verify.py，给我改动说明并创建 PR。

查看修改、合并 PR；测试通过后在 GitHub 的 production 发布确认中批准上线。发布脚本自动备份变更文件，只更新与线上不同的文件，并在后端健康检查失败时恢复代码。测试失败不会进入发布。

## 发布范围与限制

- 支持主站前端和 `backend/main.py`。数据库、私有 API 配置、PK 独立后端、Nginx、系统服务和端口配置不在发布包中。
- 新增后端模块、Python 依赖、数据库迁移、PK 服务或服务器配置属于扩展发布范围，先调整发布器及恢复方案。云端 AI 必须说明这类变更，不能声称已自动上线。
- 后端变更会短暂重启 `vocab-backend`；仅改前端不重启。旧哈希资源保留，入口最后替换。
- 自动恢复只恢复代码；数据库在线备份仅用于人工恢复，避免覆盖发布过程中新增的学习进度。破坏性数据库迁移不适用此发布器。
- 完整源码编辑权限意味着 AI 可以修改后端逻辑。通过 GitHub 分支和 production 环境审批控制发布权限；供应商 API Key 不传给云端开发环境。
- 历史公开凭据的撤销需在对应供应商账号里完成。新的生产环境不得继续配置已暴露的旧部署密钥。

官方资料：
- https://learn.chatgpt.com/docs/cloud
- https://learn.chatgpt.com/docs/environments/cloud-environment
- https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments
