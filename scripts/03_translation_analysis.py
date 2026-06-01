# -*- coding: utf-8 -*-
"""
六级翻译高频主题分析(中译英)。
数据源: CET6-Resources/历年翻译汇总.md (2016-2025 历年翻译真题, 46篇中文 + 部分参考译文)
产出:
  A. 中文主题高频词(jieba分词+词频, 配标准英译)
  B. 真题给出的中英对照术语(括号对)
  C. 参考译文中的高频英文词与词组(n-gram)
"""
import os, re, json, csv
from collections import Counter
import jieba

BASE = r"F:\六级"
SRC  = os.path.join(BASE, "CET6-Resources", "历年翻译汇总.md")
OUT  = os.path.join(BASE, "分析结果")
jieba.setLogLevel(20)

txt = open(SRC, encoding="utf-8").read()

# 1) 按 ##### 标题分篇
blocks = re.split(r"\n#{2,5}\s*", txt)
passages = []
for b in blocks:
    b = b.strip()
    if len(b) < 20: continue
    if not re.search(r"[\u4e00-\u9fff]", b): continue
    # 跳过纯年份大标题(如 "2024年")
    if re.fullmatch(r"\d{4}\s*年?", b): continue
    passages.append(b)
print(f"有效翻译篇目: {len(passages)}")

# 2) 分离中文原文与英文参考译文
#    一篇里: 中文句子 + (可选)"参考译文："后的英文
cn_all, en_all = [], []
for p in passages:
    # 去掉"参考译文/参考答案"之后的英文部分单独收集
    m = re.split(r"参考(?:译文|答案)\s*[:：]?", p)
    cn_part = m[0]
    en_part = m[1] if len(m) > 1 else ""
    # 中文原文里混入的英文(括号注释)也分别处理
    cn_all.append(cn_part)
    if en_part:
        en_all.append(en_part)
    # 若无显式参考译文标记，但段内英文很多，也算译文
    elif len(re.findall(r"[A-Za-z]{3,}", cn_part)) > 25:
        en_all.append(cn_part)

cn_text = "\n".join(cn_all)
en_text = "\n".join(en_all)
print(f"含参考译文篇目: {len(en_all)}")

# 3) 中文停用词(虚词/标点/无主题意义词)
CN_STOP = set("的 了 和 与 在 是 也 都 就 而 及 或 等 这 那 其 之 中 上 下 为 以 于 对 "
    "有 被 把 让 使 从 向 到 个 们 着 过 地 得 一 一个 一些 一种 一直 不 不仅 不但 "
    "并 并且 而且 但 但是 因为 所以 因此 如 如今 如果 虽然 然后 还 还是 又 已 已经 "
    "可以 可 能 会 要 将 没 没有 很 更 最 非常 十分 逐渐 不断 越来越 许多 很多 多 少 "
    "他 她 它 他们 她们 它们 我 我们 你 你们 自己 这些 那些 这种 这样 那样 此 该 "
    "进行 成为 实现 通过 由于 对于 关于 各种 各 每 所 所有 以及 之一 方面 时 年 月 "
    "日 世纪 起 来 去 出 入 即 则 乃 至 由 给 例如 比如 包括 拥有 具有 作为 表示 "
    "之后 之前 之间 当 大 小 新 老 高 低 长 短 好 主要 重要 不同 相关 相同 一系列 "
    "使得 它的 他的 她的 我的 你的 人们 同时 其中 其他 这一 那一 一项 一套 部分 ".split())

# 4) jieba 分词 + 词频(只保留名词性主题词: 长度>=2的中文词)
words = [w for w in jieba.cut(cn_text) if re.fullmatch(r"[\u4e00-\u9fff]{2,}", w)]
freq = Counter(w for w in words if w not in CN_STOP)
print(f"\n=== 中文主题高频词 Top 50 ===")
for i,(w,c) in enumerate(freq.most_common(50),1):
    print(f"{i:3d}. {w}  {c}", end="    ")
    if i%4==0: print()
print()

# 暂存供下一步配英译
with open(os.path.join(OUT,"_cn_theme_freq.json"),"w",encoding="utf-8") as f:
    json.dump(freq.most_common(400), f, ensure_ascii=False)

# 5) 括号中英对照术语(真题给出的标准译法)，精确化提取
pairs = {}
for cn, en in re.findall(r"([\u4e00-\u9fff]{2,10})\s*[（(]\s*([A-Za-z][A-Za-z \-'.,&]{1,40})\s*[)）]", txt):
    # 中文取最后2-6字(避免把整句抓进来)
    cn = cn[-6:] if len(cn) > 6 else cn
    en = re.sub(r"\s+", " ", en).strip()
    if cn not in pairs:
        pairs[cn] = en
print(f"\n真题括号术语对: {len(pairs)}")
with open(os.path.join(OUT,"_bracket_pairs.json"),"w",encoding="utf-8") as f:
    json.dump(pairs, f, ensure_ascii=False)

# 6) 参考译文英文高频词 + 高频词组(2/3-gram)
from nltk.corpus import stopwords
EN_STOP = set(stopwords.words("english"))
en_low = en_text.lower()
en_tokens = re.findall(r"[a-z]+(?:'[a-z]+)?", en_low)
en_words = Counter(t for t in en_tokens if t not in EN_STOP and len(t)>=3)
# n-gram(跨标点不连)
sents = re.split(r"[.,;:!?()\n]", en_low)
bigram, trigram = Counter(), Counter()
for s in sents:
    ts = re.findall(r"[a-z]+(?:'[a-z]+)?", s)
    for i in range(len(ts)-1):
        bigram[(ts[i],ts[i+1])] += 1
    for i in range(len(ts)-2):
        trigram[(ts[i],ts[i+1],ts[i+2])] += 1
print(f"\n参考译文英文独立词: {len(en_words)}")
with open(os.path.join(OUT,"_en_trans_freq.json"),"w",encoding="utf-8") as f:
    json.dump({"words":en_words.most_common(200),
               "bigram":[(" ".join(k),v) for k,v in bigram.most_common(120)],
               "trigram":[(" ".join(k),v) for k,v in trigram.most_common(80)]},
              f, ensure_ascii=False)
print("中间结果已保存。")
