# CET6-TesT · 六级备考一体化工具

基于近十年大学英语六级（CET-6）真题语料，从**数据分析**到**模拟考试**的完整备考工具链：统计高频词、自建专属词典、提取翻译高频主题词句，并提供一套可本地运行、支持 AI 智能评分的在线模拟答题系统。

---

## ✨ 功能总览

| 模块 | 说明 |
|------|------|
| 📊 高频词统计 | 统计近十年六级真题出现频率最高的 **前 1000 个英文单词** |
| 📖 专属词典 | 为这 1000 词从多部词库匹配释义，生成自己的**学习版词典**（CSV / JSON / 背诵版 MD / Anki） |
| 🀄 翻译高频 | 统计 **500 个**高频翻译主题词 / 词组 / 句式，按主题归类 |
| 📝 模拟考试 | 完整模拟答题系统：**写作 · 听力 · 阅读 · 翻译**，含 8 套真题改编卷 |
| 🤖 AI 评分 | 接入 POE，**GPT-5.5 + DeepSeek-v4 双模型**按官方 15 分制评分取平均，离线时自动启发式回退 |

---

## 📁 目录结构

```
六级/
├── scripts/                  # 分析流水线（按编号顺序执行）
│   ├── 01_word_frequency.py        # 真题分词 → 词形还原 → 高频前1000词
│   ├── 02_build_dictionary.py      # 1000词 ↔ 多词库匹配 → 自建词典
│   ├── 03_translation_analysis.py  # jieba 中文分词 → 翻译高频统计
│   ├── 04_translation_glossary.py  # 生成500主题词句表
│   ├── 05_extract_translation_anchors.py  # 提取历年翻译真题原文
│   └── 06_append_exam_papers.py    # 批量生成模拟卷
├── 分析结果/                  # 所有分析产物
│   ├── 六级高频前1000词_学习版.csv
│   ├── 六级高频1000词典.{json,csv}
│   ├── 六级高频1000词典_背诵版.md
│   ├── 六级高频1000词_Anki.txt
│   └── 六级翻译高频500_主题词句.{csv,md}
└── 模拟考试/                  # 模拟答题系统
    ├── index.html                  # 前端（答题界面 + 黑夜模式 + 进度保存）
    ├── questions.js                # 题库（8 套卷）
    ├── dict_words.js               # 拼写校验词库
    ├── server.py                   # 本地评分代理（保护 API key）
    └── start-server.{bat,ps1}      # 一键启动
```

---

## 🚀 快速开始

### 1. 模拟考试系统

```bash
cd 模拟考试
# 方式一：双击 start-server.bat（Windows）
# 方式二：命令行
python server.py
```

浏览器访问 `http://127.0.0.1:8765/index.html`，局域网内其他设备用 `http://<本机IP>:8765/index.html`。

### 2. 开启 AI 智能评分（可选）

写作与翻译可调用 POE 双模型按六级官方 15 分制评分。配置 key（**二选一**）：

```bash
# 方式一：环境变量
set POE_KEY=你的POE_API_KEY        # Windows
export POE_KEY=你的POE_API_KEY     # macOS/Linux

# 方式二：在 模拟考试/ 目录放 poe_key.txt（仅一行 key，已被 .gitignore 排除）
```

> 未配置 key 时系统自动使用**离线启发式评分**，仍可正常答题。

### 3. 重新运行分析流水线（可选）

需先准备数据源（见下），然后按编号执行：

```bash
set PYTHONUTF8=1                   # Windows 下避免 GBK 编码问题
python scripts/01_word_frequency.py
python scripts/02_build_dictionary.py
python scripts/03_translation_analysis.py
python scripts/04_translation_glossary.py
```

---

## 📦 数据来源

本仓库**不包含**以下第三方语料/词库（体积较大，请自行克隆到项目根目录）。感谢这些开源项目：

- [YinsinSirius/CET6-Resources](https://github.com/YinsinSirius/CET6-Resources) — 六级真题与历年翻译汇总
- [kajweb/dict](https://github.com/kajweb/dict) — 多套词库 JSON（CET4/6、考研、专四专八等）
- [AndrewYuZhenYu/cet6_exam_questions_txt_collection](https://github.com/AndrewYuZhenYu/cet6_exam_questions_txt_collection) — 六级真题 txt 合集

```bash
git clone https://github.com/YinsinSirius/CET6-Resources.git
git clone https://github.com/kajweb/dict.git
git clone https://github.com/AndrewYuZhenYu/cet6_exam_questions_txt_collection.git
```

---

## 🔒 关于密钥安全

`server.py` **不含任何硬编码密钥**，key 仅从环境变量或本地 `poe_key.txt` 读取，且后者已被 `.gitignore` 排除，不会进入仓库。前端只与本机代理通信，POE key 始终留在服务器端；静态文件采用白名单，`server.py` 本身无法被下载。

---

## 📌 说明

- 题库翻译均取自**真实历年六级真题原文** + 校订参考译文；听力 / 选词填空 / 部分阅读为 CET-6 难度自编，答案由命题保证正确。
- 本项目仅用于个人备考学习。
