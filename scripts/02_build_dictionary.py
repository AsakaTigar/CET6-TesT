# -*- coding: utf-8 -*-
"""
为前1000高频词构建“我们自己的特别词典”。
词条数据源: dict/book_extracted/CET6_{1,2,3}.json (kajweb/dict 的 CET6 词库)
补充数据源: dict/book/ 其他级别词库(CET4/考研等)用于补齐基础词
输出: 高频词典(JSON结构化 + CSV + Markdown背诵版)
"""
import os, json, glob, zipfile, csv

BASE = r"F:\六级"
DICT = os.path.join(BASE, "dict")
OUT  = os.path.join(BASE, "分析结果")

def parse_entry(d):
    """从一条词库JSON里抽取我们要的字段。"""
    hw = d.get("headWord","").strip()
    c = d.get("content",{}).get("word",{}).get("content",{})
    phon = c.get("ukphone") or c.get("usphone") or c.get("phone") or ""
    # 中文释义(按词性聚合)
    trans = []
    for t in c.get("trans",[]):
        pos = (t.get("pos") or "").strip()
        cn  = (t.get("tranCn") or "").strip()
        if cn:
            trans.append((f"{pos}." if pos else "", cn))
    # 例句(取第一条)
    ex_en = ex_cn = ""
    sents = c.get("sentence",{}).get("sentences",[])
    if sents:
        ex_en = (sents[0].get("sContent") or "").strip()
        ex_cn = (sents[0].get("sCn") or "").strip()
    # 同义词
    synos = []
    for s in c.get("syno",{}).get("synos",[]):
        for h in s.get("hwds",[]):
            w = h.get("w","").strip()
            if w: synos.append(w)
    return {"word":hw, "phonetic":phon, "trans":trans,
            "ex_en":ex_en, "ex_cn":ex_cn, "synonyms":synos[:5]}

# 1) 主词库: CET6_1/2/3
lookup = {}   # lowercase headword -> entry (含来源)
def ingest(path, src):
    n=0
    with open(path, encoding="utf-8") as f:
        for line in f:
            line=line.strip()
            if not line: continue
            try: d=json.loads(line)
            except: continue
            e=parse_entry(d)
            k=e["word"].lower()
            if not k: continue
            if k not in lookup:        # 先到先得(CET6优先)
                e["source"]=src
                lookup[k]=e
                n+=1
    return n

for i in (1,2,3):
    p=os.path.join(DICT,"book_extracted",f"CET6_{i}.json")
    if os.path.exists(p):
        print(f"CET6_{i}: 收录 {ingest(p, f'CET6_{i}')} 词")
print(f"CET6合并词库总词条: {len(lookup)}")

# 2) 补充词库: CET4 + 考研 + 高中 + 初中(给基础高频词逐级兜底)
#    顺序即优先级: CET6已先入, 再 CET4 -> 考研 -> 高中 -> 初中
SUP = {
    "CET4_1":"1521164649209_CET4_1","CET4_2":"1521164635506_CET4_2","CET4_3":"1521164643060_CET4_3",
    "KaoYan_1":"1521164669833_KaoYan_1","KaoYan_2":"1521164654696_KaoYan_2","KaoYan_3":"1521164658897_KaoYan_3",
    "GaoZhong_2":"1521164675301_GaoZhong_2","GaoZhong_3":"1521164679263_GaoZhong_3",
    "ChuZhong_2":"1521164647926_ChuZhong_2","ChuZhong_3":"1521164652700_ChuZhong_3",
    "Level4_1":"1521164647417_Level4_1","Level4_2":"1521164653685_Level4_2",
    "Level8_1":"1521164635290_Level8_1","Level8_2":"1521164663794_Level8_2",
}
sup_dir=os.path.join(DICT,"book_sup")
os.makedirs(sup_dir,exist_ok=True)
for name,zf in SUP.items():
    zp=os.path.join(DICT,"book",zf+".zip")
    if os.path.exists(zp):
        with zipfile.ZipFile(zp) as z: z.extractall(sup_dir)
before=len(lookup)
for name in SUP:
    p=os.path.join(sup_dir,name+".json")
    if os.path.exists(p): ingest(p, name)
print(f"补充词库后总词条: {len(lookup)} (+{len(lookup)-before})")

# 3) 加载1000词并匹配
with open(os.path.join(OUT,"top1000_wordlist.json"),encoding="utf-8") as f:
    top=json.load(f)

matched=[]; missing=[]
for item in top:
    w=item["word"]; k=w.lower()
    if k in lookup:
        e=dict(lookup[k]); e["rank"]=item["rank"]; e["freq"]=item["freq"]; e["doc_freq"]=item["doc_freq"]
        matched.append(e)
    else:
        missing.append(item)

print(f"\n匹配成功: {len(matched)}/1000   未匹配: {len(missing)}")
print("未匹配示例(前30):", [m["word"] for m in missing[:30]])

# 3b) 人工补全词库未收录的词(复合词/派生词/缩写/还原残留)，保证1000词零空缺
MANUAL = {
 "others":      ("ˈʌðəz",         [("pron.","其他人；别的东西")],                 "Some people like tea; others prefer coffee.","有些人喜欢茶，另一些人则偏爱咖啡。"),
 "specie":      ("ˈspiːʃiːz",     [("n.","物种；种类（species 的词形）")],          "This species is found only in the tropics.","该物种仅见于热带地区。"),
 "cannot":      ("ˈkænɒt",        [("v.","不能；无法")],                            "I cannot agree with you on this point.","在这一点上我无法同意你。"),
 "tech":        ("tek",           [("n.","技术；科技（technology 的缩写）")],        "The tech industry is growing fast.","科技行业发展迅速。"),
 "people's":    ("ˈpiːplz",       [("","人民的；大众的（people 的所有格）")],         "It is the people's right to vote.","投票是人民的权利。"),
 "long-term":   ("ˌlɒŋ ˈtɜːm",    [("adj.","长期的")],                              "We need a long-term plan.","我们需要一个长期计划。"),
 "unfinished":  ("ʌnˈfɪnɪʃt",     [("adj.","未完成的；未结束的")],                   "She left the work unfinished.","她让工作半途而废。"),
 "men":         ("men",           [("n.","男人（man 的复数）；人们")],               "All men are created equal.","人人生而平等。"),
 "email":       ("ˈiːmeɪl",       [("n.","电子邮件"),("v.","发电子邮件")],           "I will email you the details.","我会把细节用邮件发给你。"),
 "telemedicine":("ˌtelɪˈmedɪsɪn", [("n.","远程医疗")],                              "Telemedicine helps patients in remote areas.","远程医疗帮助偏远地区的患者。"),
 "well-being":  ("ˌwel ˈbiːɪŋ",   [("n.","幸福；健康；福祉")],                       "Exercise improves mental well-being.","运动能改善心理健康。"),
 "chimp":       ("tʃɪmp",         [("n.","黑猩猩（chimpanzee 的简称）")],            "The chimp used a stick as a tool.","那只黑猩猩把树枝当作工具。"),
 "technological":("ˌteknəˈlɒdʒɪkl",[("adj.","技术的；科技的")],                      "Technological progress changes our lives.","技术进步改变我们的生活。"),
 "lifelong":    ("ˈlaɪflɒŋ",      [("adj.","终身的；毕生的")],                       "Learning is a lifelong process.","学习是终身的过程。"),
 "grass-fed":   ("ˈɡrɑːs fed",    [("adj.","草饲的；吃草长大的")],                    "Grass-fed beef is considered healthier.","草饲牛肉被认为更健康。"),
 "variability": ("ˌveəriəˈbɪləti",[("n.","可变性；变化性；变异性")],                  "There is great variability in the data.","数据存在很大的变异性。"),
 "one's":       ("wʌnz",          [("","某人的（one 的所有格）")],                    "One should do one's best.","人应当尽其所能。"),
 "pas":         ("pɑː",           [("n.","（法语）舞步；步法")],                      "She practiced a difficult pas.","她练习了一个高难度的舞步。"),
 "socially":    ("ˈsəʊʃəli",      [("adv.","社会上地；社交方面地")],                  "He is socially active.","他社交活跃。"),
 "provider":    ("prəˈvaɪdə",     [("n.","提供者；供应商")],                          "The company is a major service provider.","该公司是主要的服务提供商。"),
 "effectively": ("ɪˈfektɪvli",    [("adv.","有效地；实际上")],                        "We must use resources effectively.","我们必须有效地利用资源。"),
}
still_missing=[]
for m in missing:
    w=m["word"]
    if w in MANUAL:
        ph,tr,en,cn=MANUAL[w]
        matched.append({"word":w,"phonetic":ph,"trans":tr,"ex_en":en,"ex_cn":cn,
                        "synonyms":[],"source":"manual","rank":m["rank"],
                        "freq":m["freq"],"doc_freq":m["doc_freq"]})
    else:
        still_missing.append(m)
matched.sort(key=lambda e:e["rank"])
print(f"人工补全 {len(missing)-len(still_missing)} 词 -> 最终覆盖 {len(matched)}/1000")
if still_missing:
    print("仍缺:", [m['word'] for m in still_missing])
missing=still_missing

# 暂存中间结果
with open(os.path.join(OUT,"_dict_matched.json"),"w",encoding="utf-8") as f:
    json.dump({"matched":matched,"missing":missing}, f, ensure_ascii=False)

# ============ 生成最终词典 ============
def fmt_trans(tr):
    """词性聚合的中文释义 -> 单行字符串"""
    return "  ".join(f"{p}{c}" if p else c for p,c in tr)

# 1) 结构化 JSON 词典
with open(os.path.join(OUT,"六级高频1000词典.json"),"w",encoding="utf-8") as f:
    json.dump(matched, f, ensure_ascii=False, indent=1)

# 2) CSV 词典(Excel/Anki 可用)
with open(os.path.join(OUT,"六级高频1000词典.csv"),"w",newline="",encoding="utf-8-sig") as f:
    w=csv.writer(f)
    w.writerow(["排名","单词","频次","出现卷数","音标","释义","同义词","例句(英)","例句(中)","词库来源"])
    for e in matched:
        w.writerow([e["rank"], e["word"], e["freq"], e["doc_freq"],
                    f"/{e['phonetic']}/" if e["phonetic"] else "",
                    fmt_trans(e["trans"]), " / ".join(e["synonyms"]),
                    e["ex_en"], e["ex_cn"], e["source"]])

# 3) Markdown 背诵版(分10个List，每100词一组)
md=["# 六级高频前1000词 · 自定义词典\n",
    "> 数据源：近10年(2016–2025)六级真题词频统计 + kajweb/dict 词库\n",
    "> 按真题出现频次降序排列，每100词为一个List。\n"]
for gi in range(10):
    grp=matched[gi*100:(gi+1)*100]
    md.append(f"\n## List {gi+1}　（第 {gi*100+1}–{gi*100+len(grp)} 词）\n")
    md.append("| # | 单词 | 音标 | 释义 | 频次 |")
    md.append("|---|------|------|------|------|")
    for e in grp:
        ph=f"/{e['phonetic']}/" if e["phonetic"] else "—"
        tr=fmt_trans(e["trans"]).replace("|","/") or "—"
        md.append(f"| {e['rank']} | **{e['word']}** | {ph} | {tr} | {e['freq']} |")
with open(os.path.join(OUT,"六级高频1000词典_背诵版.md"),"w",encoding="utf-8") as f:
    f.write("\n".join(md))

# 4) Anki 导入版(制表符分隔: 正面=单词, 背面=音标+释义+例句)
with open(os.path.join(OUT,"六级高频1000词_Anki.txt"),"w",encoding="utf-8") as f:
    for e in matched:
        front=e["word"]
        back_parts=[]
        if e["phonetic"]: back_parts.append(f"/{e['phonetic']}/")
        back_parts.append(fmt_trans(e["trans"]))
        if e["ex_en"]: back_parts.append(f"例: {e['ex_en']} {e['ex_cn']}")
        back="<br>".join(back_parts)
        f.write(f"{front}\t{back}\n")

withex=sum(1 for e in matched if e["ex_en"])
print(f"\n=== 词典生成完成 ===")
print(f"  总词条: {len(matched)}  含例句: {withex}  含音标: {sum(1 for e in matched if e['phonetic'])}")
print(f"  输出: 六级高频1000词典.{{json,csv}} / _背诵版.md / _Anki.txt")
