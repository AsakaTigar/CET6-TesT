# CET6-TesT · 六级备考一体化工具

基于近十年大学英语六级（CET-6）真题语料，从**数据分析**到**模拟考试**的完整备考工具链：统计高频词、自建专属词典、提取翻译高频主题词句，并提供一套可本地运行、支持 AI 智能评分的在线模拟答题系统。

---

## ✨ 功能总览

| 模块 | 说明 |
|------|------|
| 📊 高频词统计 | 统计近十年六级真题出现频率最高的 **前 1000 个英文单词** |
| 📖 专属词典 | 为这 1000 词从多部词库匹配释义，生成自己的**学习版词典**（CSV / JSON / 背诵版 MD / Anki） |
| 🀄 翻译高频 | 统计 **500 个**高频翻译主题词 / 词组 / 句式，按主题归类 |
| 📝 模拟考试 | 完整模拟答题系统：**写作 · 听力 · 阅读 · 翻译**，含 **59 套**真题卷（2016–2025） |
| 🤖 AI 评分 | 接入 POE，**GPT-5.5 + DeepSeek-v4 双模型**按官方 15 分制评分取平均，离线时自动启发式回退 |

---

## 📁 目录结构

```
六级/
├── scripts/                  # 分析 & 题库流水线
│   ├── 01_word_frequency.py            # 真题分词 → 词形还原 → 高频前1000词
│   ├── 02_build_dictionary.py          # 1000词 ↔ 多词库匹配 → 自建词典
│   ├── 03_translation_analysis.py      # jieba 中文分词 → 翻译高频统计
│   ├── 04_translation_glossary.py      # 生成500主题词句表
│   ├── 05_extract_translation_anchors.py  # 提取历年翻译真题原文
│   ├── 06_append_exam_papers.py        # ⚠️ 已废弃，请用 07
│   ├── 07_build_exam_bank.py           # 从 txt + 答案库合并 59 套 questions.js
│   ├── 08_build_translation_references.py  # POE 生成英文参考译文
│   ├── 09_validate_exam_bank.js        # 校验题库质量，输出 JSON 报告
│   ├── 10_parse_reading_from_txt.py    # 解析 Part III 阅读
│   ├── 11_build_reading_answers.py     # POE 生成阅读答案
│   ├── 12_parse_listening_from_txt.py  # 解析 Part II 听力 MCQ
│   ├── 13_generate_listening_scripts.py  # POE 生成听力 TTS 朗读脚本
│   ├── 14_build_listening_answers.py   # POE 推断听力答案（标注低置信）
│   ├── rebuild_exam_bank.ps1           # 快速重建：07 + 校验
│   └── rebuild_all.ps1                 # 完整流水线：10→11→12→13→14→07→09
├── 分析结果/                  # 分析 & 中间产物
│   ├── translation_references.json     # 59 套英文参考译文
│   ├── reading_parsed.json / reading_answers.json
│   ├── listening_parsed.json / listening_answers.json / listening_scripts.json
│   └── _exam_validation.json           # 09 校验报告
├── cet6_exam_questions_txt_collection/ # 本地真题 txt（gitignore）
│   └── cet6_zhenti_cleaned/            # 59 套清洗后 txt
└── 模拟考试/                  # 模拟答题系统
    ├── index.html                  # 前端（年份筛选 · 黑夜模式 · 进度保存）
    ├── questions.js                # 题库（59 套，由 07 生成）
    ├── questions.backup.js         # 8 套高质量听读模板（fallback）
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

### 3. 重建题库

**快速重建**（已有解析/答案 JSON，仅重新合并）：

```powershell
powershell -File scripts/rebuild_exam_bank.ps1
```

**完整流水线**（解析 txt → POE 答案/脚本 → 合并 → 校验）：

```powershell
powershell -File scripts/rebuild_all.ps1
# 跳过 POE（仅解析 + 合并，适合无 key 环境）：
powershell -File scripts/rebuild_all.ps1 -SkipPoe
```

**新考季 SOP**（新增一套 txt 后）：

1. 将 txt 放入 `cet6_exam_questions_txt_collection/cet6_zhenti_cleaned/`
2. 若缺英文参考译文：`powershell -File scripts/rebuild_all.ps1 -TranslationsOnly`
3. 或跑完整流水线：`powershell -File scripts/rebuild_all.ps1`
4. 确认 `分析结果/_exam_validation.json` 中 `errors = 0`
5. 提交 `questions.js` 与相关 JSON

### 4. 重新运行词频分析流水线（可选）

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

- [YinsinSirius/CET6-Resources](https://github.com/YinsinSirius/CET6-Resources) — 六级真题与历年翻译汇总（听力原声 MP3 需 LFS 拉取）
- [kajweb/dict](https://github.com/kajweb/dict) — 多套词库 JSON（CET4/6、考研、专四专八等）
- [AndrewYuZhenYu/cet6_exam_questions_txt_collection](https://github.com/AndrewYuZhenYu/cet6_exam_questions_txt_collection) — 六级真题 txt 合集

```bash
git clone https://github.com/YinsinSirius/CET6-Resources.git
git clone https://github.com/kajweb/dict.git
git clone https://github.com/AndrewYuZhenYu/cet6_exam_questions_txt_collection.git
```

---

## 📝 题库内容说明

| 板块 | 来源 | 覆盖率（当前） |
|------|------|----------------|
| 写作 | 真题 txt Part I | 59/59 |
| 翻译 | 真题 txt + anchors 校订 | 59/59，含英文参考译文 |
| 阅读 | 真题 txt Part III（Section A/C） | ~48/59 真题；其余用 8 套模板 fallback |
| 听力 | 真题 txt Part II MCQ + POE TTS 脚本 | ~33/59 真题；其余用模板 fallback |

- 听力官方答案不在 txt 中；`listening_answers.json` 由 POE 推断，UI 标注 **「AI 推断答案」**（`_confidence: low`）。
- 部分 2019/2021 txt 编码损坏，解析失败卷在 `_exam_validation.json` 的 warnings 中标记。

---

## 🔒 关于密钥安全

`server.py` **不含任何硬编码密钥**，key 仅从环境变量或本地 `poe_key.txt` 读取，且后者已被 `.gitignore` 排除，不会进入仓库。前端只与本机代理通信，POE key 始终留在服务器端；静态文件采用白名单，`server.py` 本身无法被下载。

---

## 📌 说明

- 本项目仅用于个人备考学习。
