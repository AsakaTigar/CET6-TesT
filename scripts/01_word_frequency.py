# -*- coding: utf-8 -*-
"""
统计近10年(2016-2025)六级真题英文词频，导出前1000高频词。
数据源: cet6_exam_questions_txt_collection/cet6_zhenti_cleaned/ (59篇已清洗真题)
方法: 正则分词 -> 小写 -> 去停用词 -> WordNet词形还原(动词+名词) -> 统计词频与文档频率
"""
import os, re, csv, json, glob
from collections import Counter, defaultdict
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer

BASE = r"F:\六级"
SRC  = os.path.join(BASE, "cet6_exam_questions_txt_collection", "cet6_zhenti_cleaned")
OUT  = os.path.join(BASE, "分析结果")
os.makedirs(OUT, exist_ok=True)

lem = WordNetLemmatizer()
STOP = set(stopwords.words("english"))

# 考试机械性套话(出现在每套卷的指令里，非学习词汇)。透明可逆，单独列出。
# 这些词在“Directions / Questions X to Y are based on ... mark the corresponding
# letter on Answer Sheet 1 with a single line through the centre”等每卷重复的
# 指令文本里高频出现，会人为拉高排名，故在“学习版”榜单中剔除(完整榜单仍保留)。
EXAM_STOP = {
    # 区块/题型指令
    "directions","direction","section","sections","part","parts",
    "passage","passages","conversation","conversations",
    "recording","recordings","question","questions","sheet","centre","center",
    "marked","mark","choice","choices","letter","letters","statement","statements",
    "paragraph","paragraphs","blank","blanks","correspond","corresponding",
    "identified","identify","comprehension","translation","minute","minutes",
    # 听力/作答指令动词与套话
    "spoken","heard","hear","choose","answer","answers","base","single","line",
    # 选项基数词(four choices / two long conversations 等)
    "four","two","three",
    # 单字母选项 a/b/c/d 已被 len>=3 过滤
}

WORD_RE = re.compile(r"[a-zA-Z]+(?:[-'][a-zA-Z]+)*")

def lemma(w):
    # 动词还原(-ed/-ing/三单) -> 名词还原(复数) -> 形容词还原(比较级/最高级 higher->high)
    return lem.lemmatize(lem.lemmatize(lem.lemmatize(w, "v"), "n"), "a")

# 提取噪声/无学习价值词(连字/罗马数字标记/缩写残片)，从学习版剔除
JUNK = {"ffi","ff","fl","iii","ii","iv","vi","vii","viii","ix","xi","xii",
        "etc","www","http","https","com","org","html"}

files = sorted(glob.glob(os.path.join(SRC, "*.txt")))
print(f"真题文件数: {len(files)}")

total = Counter()        # 词形还原后总词频
docfreq = Counter()      # 文档频率(出现在多少套卷中)
raw_total = Counter()    # 还原前原始词频(参考)
lower_seen = set()       # 曾以全小写形态出现过的词形(用于识别专有名词)

for fp in files:
    with open(fp, encoding="utf-8") as f:
        text = f.read()
    # 保留大小写做专有名词判定: 一个词若从不以小写出现(总是首字母大写)，判为专有名词
    for m in WORD_RE.findall(text):
        if m.islower():
            lower_seen.add(lemma(m))
    toks = WORD_RE.findall(text.lower())
    seen = set()
    for t in toks:
        raw_total[t] += 1
        if t in STOP or len(t) < 3:
            continue
        lm = lemma(t)
        if lm in STOP or len(lm) < 3:
            continue
        total[lm] += 1
        seen.add(lm)
    for lm in seen:
        docfreq[lm] += 1

print(f"还原后去停用词的独立词数: {len(total)}")

# 完整原始频率(全透明，不删套话)
with open(os.path.join(OUT, "词频_完整_全部词.csv"), "w", newline="", encoding="utf-8-sig") as f:
    w = csv.writer(f)
    w.writerow(["rank","word","frequency","doc_freq(共59卷)"])
    for i,(word,c) in enumerate(total.most_common(),1):
        w.writerow([i, word, c, docfreq[word]])

# 学习版: 去考试套话 + 去提取噪声 + 去专有名词(从不以小写出现的词，如 York/California)
def is_proper(word):
    return word not in lower_seen
clean = [(word,c) for word,c in total.most_common()
         if word not in EXAM_STOP and word not in JUNK and not is_proper(word)]
print("\n=== 去套话后 Top 40 ===")
for i,(word,c) in enumerate(clean[:40],1):
    print(f"{i:3d}. {word:<16} {c:5d}  (出现于{docfreq[word]}/59卷)")

# 保存供检视
with open(os.path.join(OUT, "_top1200_clean_preview.json"), "w", encoding="utf-8") as f:
    json.dump([{"word":w,"freq":c,"doc":docfreq[w]} for w,c in clean[:1200]], f, ensure_ascii=False)
print(f"\n去套话后可用词数: {len(clean)}")

# === 主交付物: 学习版前1000高频词 ===
top1000 = clean[:1000]
with open(os.path.join(OUT, "六级高频前1000词_学习版.csv"), "w", newline="", encoding="utf-8-sig") as f:
    w = csv.writer(f)
    w.writerow(["rank","word","frequency","doc_freq(共59卷)"])
    for i,(word,c) in enumerate(top1000,1):
        w.writerow([i, word, c, docfreq[word]])

# 纯词表(供后续词典匹配使用)
with open(os.path.join(OUT, "top1000_wordlist.json"), "w", encoding="utf-8") as f:
    json.dump([{"rank":i,"word":w,"freq":c,"doc_freq":docfreq[w]}
               for i,(w,c) in enumerate(top1000,1)], f, ensure_ascii=False, indent=1)
print(f"已导出前1000词 -> 六级高频前1000词_学习版.csv (覆盖频率范围 {top1000[0][1]} ~ {top1000[-1][1]})")
