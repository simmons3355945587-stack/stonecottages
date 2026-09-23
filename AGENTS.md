# 小石屋主站开发入口

- 本仓库是 ourstonecottages.org 正式源码。先读 `F:\cluade-products\memory\ourstonecottages-deployment.md` 和 `game-html-vocab.md`。
- 前端 `frontend/`，后端 `backend/main.py`；构建 `node build.cjs`。不要混淆 scripts/vocab-survival 的历史副本或 data 下的原型。
- 已有部署传输：deploy_production.py / fast_deploy.py。先检查脚本、工作区改动和线上基线；优先限定本次变更，避免全量覆盖其他任务。
- 测试：`node --test tests/performance.test.cjs tests/flashcard.test.cjs`；`python tests/jev_judgment_test.py`。
- 发布前保留备份，先上传新哈希资产再切换入口，核对在线资源哈希和接口契约；凭据不输出、不复制进记忆。
- JEV Noul 是 P(correct)：>=0.90 ACCEPT，<=0.10 REJECT，其余 UNCERTAIN。判定把握是 max(p,1-p)，不是原始 p。模型不确定不能加错词、写掌握或影响正式统计。
- 单词卡片 Mark 完全手动：答错、“我不清楚”、暂不判定均不自动添加，答对不自动减少。用户点击 ＋加入 Mark 才 +1，可撤销本次添加；历史 Mark 保留。
- 在称缺源码或缺部署入口前，先检查上述记忆、scripts/ 和相关历史任务；找不到不能概括成没有权限。

- 卡片进度必须按登录账号存入服务器 /api/flashcards/progress；本地仅作离线缓存。每次作答和换词保存，加载前先恢复云端，保留版本冲突保护；不得再改成本机独占存储。云同步测试：tests/flashcard-cloud.test.cjs 与 tests/flashcard_cloud_test.py。

- 2026-09-23：供应商密钥仅限服务器私有配置/受保护数据库，不得放入前端或构建资产。TypeSafe 服务端请求必须带网站 User-Agent，默认 Python 标识会被供应商返回 403。JEV 需登录并遵循额度授权。旧密钥公开后的撤销动作尚需用户在供应商控制台完成，详见部署记忆。
- 英英释义共享 Stone.english / peekEnglish / prefetchEnglish；支持数组和对象，441 词预载包为公开词典内容。保持 Mark 手动、云进度按账号；登录过期不抹掉账号归属。新增回归 tests/dictionary-fast.test.cjs、tests/dictionary_security_test.py。
- 发布静态文件必须显式 chmod 644；basicShell 的默认 umask 会创建 600 文件，导致 Nginx 403。私有密钥维持 600、备份目录 700。


## Codex 云端开发
- 云端不存在本机 F: 盘，项目事实以本仓库及 docs/cloud-development.md 为准；不要因本机记忆路径不可用而中止任务。
- 安装：bash .codex/setup.sh。构建与回归：python deploy/cloud/verify.py。不要把线上密钥、数据库或部署凭据加入仓库或云端环境。
- 完成代码后创建 PR 并说明验证结果；生产发布由 main 的 GitHub Actions 与 production 环境审批完成。测试通过不等于已上线。
- 发布器只覆盖主站 frontend 和 backend/main.py；PK 服务、额外后端模块、依赖或数据库迁移需扩展发布流程，不能悄悄漏发。
- 不运行旧全量部署脚本，不覆盖服务器 Nginx/443、私有配置或用户数据库。

## 2026-09-23 云端接入准备状态
- 已准备 .codex/setup.sh、.github/workflows/cloud.yml、deploy/cloud/ 发布器及 docs/cloud-development.md。
- 73 项现有回归通过；8 项发布边界/恢复测试在生产服务器的临时隔离目录中通过，未执行真实生产发布。
- 配置已写入本地正式仓库，尚未提交或推送、未关联用户 Codex 云环境、未配置 GitHub production 环境，自动发布未启用。
- 旧部署凭据改为环境变量或 Git 忽略的 .deployment-secrets.local.json；不得将该私有文件提交。公开历史中的凭据仍需供应商侧轮换，不能把本地源码移除表述成密钥已失效。
