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
