# 🕊️ Vocabulary Survival (折纸塔罗 · 词汇大逃杀)

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License">
  <img src="https://img.shields.io/badge/Python-3.10%2B-brightgreen.svg" alt="Python Version">
  <img src="https://img.shields.io/badge/FastAPI-0.100%2B-009688.svg" alt="FastAPI">
  <img src="https://img.shields.io/badge/Frontend-Vanilla%20JS%20%7C%20CSS3-orange.svg" alt="Frontend">
  <img src="https://img.shields.io/badge/AI%20Engine-Gemini%203.7%20Flash%20%7C%20OpenAI-4285F4.svg" alt="AI Engine">
  <img src="https://img.shields.io/badge/Responsive-Mobile%20Optimized-9cf.svg" alt="Mobile Optimized">
</p>

<p align="center">
  <b>融合「折纸手作美学」与「Roguelike 危机逃杀」的新一代沉浸式英语词汇学习框架</b><br>
  涵盖 RPG 生存抉择、3D 塔罗抽卡圣殿、词根解剖台、糖果色块消消乐与全端漫游同步。
</p>

---

## ✨ 核心特性 (Key Features)

### 🎨 1. 折纸美学与手作质感 (Origami & Papercraft)
- **曜黑暗夜 (Midnight)** 与 **和纸羊皮 (Washi & Kraft)** 全天候双色主题一键无缝切换。
- 基于多边形折角投影与微质感光影设计系统（`--paper-crease`, `--paper-shadow`），赋予实体般的按压回弹与交互反馈。
- **全屏三级断点自适应（≤640px / ≤480px / ≤360px）**，针对手机触屏热区与刘海屏（`viewport-fit=cover`）深度优化。

### 🎮 2. 文字生存战 (Roguelike Vocabulary RPG)
- **大模型动态危机推演**：接入 Google Gemini 3.7 Flash / OpenAI 协议代理，基于当前生词库实时生成危机情境。
- **因果生死抉择**：3 选项对应目标词汇，选对精准生还并叠加连击经验（XP/Combo），选错陷入灾难并扣除生命值（HP/SAN）。
- **离线程序化矩阵**：无网络或未配置 API Key 时，自动无缝降级为内置 6 大离线危机推演模板。

### 🃏 3. 3D 塔罗抽卡圣殿与战术背包 (Tarot Sanctum & Codex)
- **3D 牌阵翻转**：基于 CSS 3D 变换（`transform: rotateY(180deg)`）构建曼陀罗星盘金箔卡牌。
- **17 款大阿卡那战斗原型**：愚者、魔术师、女祭司、皇帝等专属技能（透视正解、SAN盾、生命回响、生词净化）。
- **词汇神技出战**：抽取的真题大阿卡那卡牌可加入战术手牌，在生存战中逆转局势。

### 🧫 4. 赛博词汇解剖台 (Morphology Dissection)
- 前缀/词根/后缀结构化拆解与音标自动发音。
- 标本罐动态归类玩法（⚡ 动作与过程 / 💭 情绪与状态 / 📦 实体与概念），内置词缀启发式猜测与连击奖励算法。

### 🍬 5. 糖果立体消消乐 (Candy Match)
- 45 秒高能倒计时中英双语对撞消除。
- 错选惩罚机制：误选生词自动 Mark +1 并计入错题复习本。

### ☁️ 6. 云端多用户鉴权与战报漫游
- 基于 JWT + SQLite 的轻量级账号系统，密码加盐哈希（`SHA-256 + Salt`）。
- 经验值、生命值、塔罗卡册、Mark 重点生词本跨设备毫秒级同步。
- 零依赖全量数据 JSON 导入与导出备份。

---

## 🏛️ 系统架构 (Architecture)

本项目采用**纯静态前端 + 轻量级 FastAPI 服务**的高内聚低耦合设计：

```
vocab-survival/
├── frontend/                     # 前端静态工程 (支持单独脱机使用)
│   ├── index.html                # 视图结构、HUD 状态栏、5大功能模块
│   ├── style.css                 # 折纸设计系统 + 移动端自适应响应式样式
│   ├── words-data.js             # 【纯数据层】CET-4/6真题库、双语字典、塔罗技能
│   └── app.js                    # 【业务逻辑层】游戏引擎、Web Audio、安全过滤、云端漫游
├── backend/                      # 云端后端服务 (可选)
│   ├── main.py                   # FastAPI 接口网关、用户鉴权、战报漫游、词典缓存
│   └── requirements.txt          # Python 依赖清单
├── Dockerfile                    # 容器化镜像构建
├── docker-compose.yml            # Docker 一键编排
├── .env.example                  # 环境变量配置模板
└── README.md                     # 项目说明文档
```

---

## 🚀 快速上手 (Quick Start)

### 方式一：纯前端模式 (零配置·离线畅玩)

本项目前端完全解耦，无需安装任何后端即可直接运行：
1. 下载代码仓库。
2. 双击打开 `frontend/index.html`。
3. 即可在浏览器中体验词库查词、词汇解剖、糖果消消乐、塔罗抽卡及离线大逃杀模式。

---

### 方式二：Docker Compose 一键部署 (推荐)

```bash
# 1. 克隆代码仓库
git clone https://github.com/<your-username>/vocab-survival.git
cd vocab-survival

# 2. 复制配置文件
cp .env.example .env

# 3. 启动容器
docker-compose up -d --build
```

访问 `http://localhost:8000` 即可开始使用。

---

### 方式三：手动配置运行 (Python + FastAPI)

#### 1. 启动后端
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python -m uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

#### 2. Nginx 反向代理配置建议
```nginx
server {
    listen 80;
    server_name your-domain.com;

    root /path/to/vocab-survival/frontend;
    index index.html;

    gzip on;
    gzip_types text/plain text/css application/json application/javascript;

    location /api/ {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## ⚙️ 驱动引擎与 API 配置 (AI Engine Setup)

在网页顶部的 **⚙️ 设置面板** 中可自由配置 AI 驱动通道：

| 驱动模式 | 适用场景 | 说明 |
|---|---|---|
| **Google Gemini Native** | 推荐主力 | 填入个人的 Google AI Studio Key，直连 `gemini-3.7-flash`，秒级响应。 |
| **自定义 OpenAI 代理** | 企业/代理 | 适配标准 OpenAI Chat Completion 格式网关（OneAPI / NewAPI / 自建反代）。 |
| **离线推演矩阵** | 无网/零门槛 | 纯前端程序化状态机演化，无需 API Key 即可畅玩。 |

> 🔒 **隐私保护承诺**：用户填写的个人 API Key 仅保存在浏览器本地 `localStorage`，绝不上传至任何中心化服务器。

---

## 🛡️ 安全与防护规范

- **全量 XSS 消毒过滤**：客户端渲染层严格通过 `escapeHtml()` 转义，防御恶意脚本注入。
- **密码防御策略**：前端强化密码强度限制（≥6位含字母与数字），后端使用 `PBKDF2 / SHA-256 + 16-byte Salt` 加盐散列存储。
- **权限严格隔离**：普通用户战报与错词本严格通过 JWT Token 鉴权隔离，彻底消除越权漏洞。

---

## 📬 交流与支持

- **作者 / 站长**: 林允安 (Yunan Lin)
- **联系邮箱**: [3355945587@qq.com](mailto:3355945587@qq.com)
- **问题反馈**: 欢迎提交 [GitHub Issues](https://github.com/<your-username>/vocab-survival/issues) 或 Pull Requests 贡献词库与新模式！

---

## 📄 开源许可证 (License)

本项目采用 [MIT License](LICENSE) 许可协议，欢迎自由学习、商用改造与二次分发。
