# -*- coding: utf-8 -*-
"""从 cet6_zhenti_cleaned 真题 txt 批量生成模拟考试题库（写作+翻译真题，听读轮换模板）。"""
from __future__ import annotations

import copy
import json
import re
import sys
from pathlib import Path

BASE = Path(__file__).resolve().parent.parent
TXT_DIR = BASE / "cet6_exam_questions_txt_collection" / "cet6_zhenti_cleaned"
ANCHORS = BASE / "分析结果" / "translation_anchors.json"
REF_DB = BASE / "分析结果" / "translation_references.json"
READING_PARSED = BASE / "分析结果" / "reading_parsed.json"
READING_ANS = BASE / "分析结果" / "reading_answers.json"
LISTENING_PARSED = BASE / "分析结果" / "listening_parsed.json"
LISTENING_SCRIPTS = BASE / "分析结果" / "listening_scripts.json"
LISTENING_ANS = BASE / "分析结果" / "listening_answers.json"
GLOSSARY = BASE / "分析结果" / "六级翻译高频500.json"
QUESTIONS = BASE / "模拟考试" / "questions.js"
TEMPLATE_SRC = BASE / "模拟考试" / "questions.backup.js"

CN_NUM = "零一二三四五六七八九十"

# 06_append_exam_papers.py 中人工校订过的参考译文
MANUAL_REFS: dict[str, str] = {
    "2024年12月第一篇": (
        "The successful development of the BeiDou Navigation Satellite System is a major scientific "
        "and technological achievement China has made since reform and opening up. After relentless efforts, "
        "researchers overcame a series of technical challenges, and the BeiDou system finally achieved global "
        "coverage and high-precision positioning, making China one of the few countries in the world that "
        "independently owns a global satellite navigation system. The BeiDou system has been widely applied "
        "in fields such as transportation, disaster relief, weather forecasting and public security. It is "
        "now widely recognized internationally and is beginning to provide high-quality services to more and "
        "more countries and regions."
    ),
    "2024年12月第二篇": (
        "Yangshan Port is an important part of the Shanghai international shipping centre. It is China's first "
        "deep-water port and one of the largest deep-water ports in the world. After nearly 20 years of "
        "development, Yangshan Port has achieved a high degree of automation. The use of digital technology "
        "and artificial intelligence has greatly reduced labour costs and carbon emissions. The independently "
        "developed terminal management system enables remote control of large equipment from hundreds of "
        "kilometres away. Yangshan Port looks busy, yet no manual operation is seen on site, and it can "
        "operate around the clock without interruption. Yangshan Port will continue to develop and make "
        "greater contributions to building Shanghai into a global shipping centre."
    ),
    "2024年12月第三篇": (
        "Travelling in space has long been a dream of the Chinese nation. In 2003, the Shenzhou V spacecraft "
        "was launched successfully, and Yang Liwei became the first Chinese astronaut to enter space. In 2008, "
        "Shenzhou VII was launched, and Zhai Zhigang became the first Chinese astronaut to conduct a spacewalk "
        "in history. In recent years, China's aerospace industry has entered a fast lane of innovative "
        "development, with steady progress in space infrastructure construction, and the Chinese space station "
        "was fully completed in 2022. The rapid development of China's aerospace industry has written a "
        "glorious chapter in the history of the Chinese nation and made great contributions to the progress "
        "of human civilization. In the future, China's steps in exploring space will become steadier and go "
        "farther."
    ),
    "2024年6月第二篇": (
        "China abounds in bamboo and is the earliest country to develop and utilize bamboo resources. Bamboo "
        "is widely distributed in China and rich in varieties. It is highly practical and used in many aspects "
        "of production and daily life, such as making chopsticks, tables and chairs, as well as building "
        "bridges and houses. Chinese people love bamboo. Since ancient times, countless men of letters have "
        "created splendid literary and artistic works with bamboo as the theme. The straight stem of bamboo "
        "symbolizes an upright character. Bamboo has strong vitality and adaptability and can survive tenaciously "
        "no matter how harsh the environment is, thus implying a spirit of perseverance. For thousands of years, "
        "bamboo has been regarded as a symbol of the character of the Chinese nation."
    ),
    "2023年12月第一套": (
        "In China, with the arrival of an aging society, elderly care has received widespread attention. "
        "What people talk about most is what kind of elderly care model should be adopted. Most people "
        "believe that the elderly care model needs to be diversified. Through government guidance and social "
        "participation, more and better elderly care service institutions can be established, community "
        "service centres can be improved, home-based self-care for the elderly can be encouraged, and a "
        "model combining family care with social care can be promoted. As the government and society continue "
        "to increase investment in elderly care services, elderly care facilities are constantly upgraded "
        "and service quality is gradually improved. The lives of the elderly will become more convenient, "
        "comfortable, healthy and happy."
    ),
}


def load_glossary() -> list[tuple[str, str, int]]:
    if not GLOSSARY.is_file():
        return []
    items = json.loads(GLOSSARY.read_text(encoding="utf-8"))
    return [(it["cn"], it["en"].split(";")[0].strip(), int(it.get("exam_freq") or 0)) for it in items]


def load_anchors() -> tuple[dict[str, dict], list[dict]]:
    data = json.loads(ANCHORS.read_text(encoding="utf-8"))
    by_id = {it["id"]: it for it in data["items"]}
    return by_id, data["items"]


def load_templates() -> list[dict]:
    src = TEMPLATE_SRC if TEMPLATE_SRC.is_file() else QUESTIONS
    text = src.read_text(encoding="utf-8")
    m = re.search(r"(const EXAMS\s*=\s*)(\[.*?\]\s*)(?:;?\s*\n\s*var EXAM)", text, re.S)
    if not m:
        raise RuntimeError(f"cannot parse EXAMS from {src}")
    exams = json.loads(m.group(2))
    return exams[:8]


def parse_filename(stem: str) -> tuple[int, int, int, str]:
    m = re.match(r"(\d{4})-(\d{2})_(\d{2})$", stem)
    if not m:
        raise ValueError(f"bad filename: {stem}")
    year, month, set_num = int(m.group(1)), int(m.group(2)), int(m.group(3))
    session = f"{year}-{month:02d}"
    return year, month, set_num, session


def anchor_id_candidates(year: int, month: int, set_num: int) -> list[str]:
    cn = CN_NUM[set_num] if set_num < len(CN_NUM) else str(set_num)
    return [
        f"{year}年{month}月第{cn}篇",
        f"{year}年{month}月第{set_num}篇",
        f"{year}年{month}月第{cn}套",
        f"{year}年{month}月第{set_num}套",
        f"{year}年{month}月全{set_num}套",
        f"{year}年{month}月全{cn}套",
    ]


def match_anchor_by_filename(by_id: dict[str, dict], year: int, month: int, set_num: int) -> dict | None:
    for aid in anchor_id_candidates(year, month, set_num):
        if aid in by_id:
            return by_id[aid]
    return None


def match_anchor(cn_text: str, by_id: dict[str, dict], items: list[dict], year: int, month: int, set_num: int) -> dict | None:
    hit = match_anchor_by_filename(by_id, year, month, set_num)
    if hit:
        return hit
    head = re.sub(r"\s+", "", cn_text)[:40]
    best, score = None, 0
    for it in items:
        h2 = re.sub(r"\s+", "", it["cn"])[:40]
        common = sum(1 for a, b in zip(head, h2) if a == b)
        if common > score:
            score, best = common, it
    return best if score >= 20 else None


_WRITING_STOP = re.compile(
    r"(?:"
    r"Part\s*(?:II|I\][\s\[]|ll|1[1l])\b"
    r"|Listening\s+Comprehension"
    r"|Section\s+A\s*\n\s*Directions:\s*In\s+this\s+section,\s*you\s+will\s+hear"
    r"|Questions\s+1\s+to\s+4\s+are\s+based"
    r"|Part\s*III\b"
    r")",
    re.I,
)


def extract_writing(text: str) -> str:
    m = re.search(
        r"Part\s*I[^\n]*\n(?:[^\n]*\n)*?Writing[^\n]*\n(.*?)(?=Part\s*(?:II|III|IV|N)\b|\Z)",
        text,
        re.S | re.I,
    )
    if not m:
        m = re.search(
            r"Writing\s*\(\s*30\s*minutes\s*\)\s*\n(.*?)(?=Part\s*(?:II|III|IV|N)\b|\Z)",
            text,
            re.S | re.I,
        )
    if not m:
        return ""
    block = m.group(1)
    dm = re.search(r"Directions\s*[:：]?\s*(.+)", block, re.S | re.I)
    raw = dm.group(1) if dm else block
    stop = _WRITING_STOP.search(raw)
    if stop:
        raw = raw[: stop.start()]
    raw = re.sub(r"You should copy the sentence given in quotes.*$", "", raw, flags=re.I)
    raw = re.sub(r"\s+", " ", raw).strip()
    if len(raw) > 900:
        raw = raw[:900].rsplit(".", 1)[0] + "." if "." in raw[:900] else raw[:900]
    return raw


def chinese_ratio(text: str) -> float:
    if not text:
        return 0.0
    cn = len(re.findall(r"[\u4e00-\u9fff]", text))
    return cn / max(len(text), 1)


def clean_translation_cn(raw: str) -> str:
    cn = re.sub(r"\s+#\s*20\d{2}年\s*$", "", raw)
    cn = re.sub(r"^(?:我的翻译|翻译范文)\s*", "", cn)
    cn = re.sub(r"(?:我的翻译|翻译范文)\s*", "", cn)
    cn = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", cn)
    cn = re.sub(r"([\u4e00-\u9fff])\s+(?=[\u4e00-\u9fff])", r"\1", cn)
    cn = re.sub(r"\s+", " ", cn).strip()
    return cn


def extract_translation_cn(text: str) -> str:
    m = re.search(
        r"Part\s*(?:IV|I|N)\s*Translation[^\n]*\n(.*?)\Z",
        text,
        re.S | re.I,
    )
    if not m:
        m = re.search(
            r"Translation\s*\(\s*30\s*minutes\s*\)[^\n]*\n(.*?)\Z",
            text,
            re.S | re.I,
        )
    if not m:
        return ""
    lines: list[str] = []
    for line in m.group(1).splitlines():
        s = line.strip()
        if not s:
            continue
        if re.match(r"^(Directions|For this part|You should write|You should copy)", s, re.I):
            continue
        if re.search(r"[\u4e00-\u9fff]", s):
            lines.append(s)
    return clean_translation_cn(" ".join(lines))


def load_ref_db() -> dict[str, str]:
    if not REF_DB.is_file():
        return {}
    data = json.loads(REF_DB.read_text(encoding="utf-8"))
    return dict(data.get("by_session") or {})


def session_key(year: int, month: int, set_num: int) -> str:
    return f"{year}-{month:02d}_{set_num:02d}"


def load_backup_refs() -> list[tuple[str, str]]:
    src = TEMPLATE_SRC if TEMPLATE_SRC.is_file() else QUESTIONS
    text = src.read_text(encoding="utf-8")
    m = re.search(r"(const EXAMS\s*=\s*)(\[.*?\]\s*)(?:;?\s*\n\s*var EXAM)", text, re.S)
    if not m:
        return []
    try:
        exams = json.loads(m.group(2))
    except json.JSONDecodeError:
        return []
    out: list[tuple[str, str]] = []
    for e in exams:
        tr = e.get("translation") or {}
        cn = re.sub(r"\s+", "", tr.get("text", ""))[:36]
        ref = tr.get("reference", "")
        if cn and ref and not ref.startswith("（"):
            out.append((cn, ref))
    return out


def lookup_reference(
    cn: str,
    anchor: dict | None,
    backup_refs: list[tuple[str, str]],
    ref_db: dict[str, str],
    year: int,
    month: int,
    set_num: int,
) -> str:
    sk = session_key(year, month, set_num)
    if sk in ref_db and ref_db[sk] and not ref_db[sk].startswith("（"):
        return ref_db[sk]
    aid = (anchor or {}).get("id", "")
    if aid in MANUAL_REFS:
        return MANUAL_REFS[aid]
    if anchor and anchor.get("ref_en"):
        ref = normalize_ref(anchor["ref_en"])
        if ref:
            return ref
    head = re.sub(r"\s+", "", cn)[:36]
    for prefix, ref in backup_refs:
        if head.startswith(prefix[:20]) or prefix.startswith(head[:20]):
            return ref
    return "（本题暂无官方英文参考译文，请对照关键词句自行核对。）"


def normalize_ref(raw: str | None) -> str:
    if not raw:
        return ""
    s = re.sub(r"\s+", " ", raw).strip()
    # 修复 ref_en 里缺空格粘连
    s = re.sub(r"([a-z])([A-Z])", r"\1 \2", s)
    s = re.sub(r"([.!?])([A-Z])", r"\1 \2", s)
    return s


def build_points(cn: str, glossary: list[tuple[str, str, int]], limit: int = 8) -> list[str]:
    hits: list[tuple[int, str, str]] = []
    for word, en, freq in glossary:
        if len(word) < 2:
            continue
        if word in cn:
            hits.append((freq, word, en))
    hits.sort(key=lambda x: (-len(x[1]), -x[0]))
    seen: set[str] = set()
    points: list[str] = []
    for _, word, en in hits:
        if word in seen:
            continue
        seen.add(word)
        points.append(f"{word} → {en}")
        if len(points) >= limit:
            break
    if len(points) < 4:
        for m in re.finditer(r"[\u4e00-\u9fff]{2,6}", cn):
            w = m.group(0)
            if w not in seen:
                seen.add(w)
                points.append(f"{w} → （请查阅词典）")
            if len(points) >= limit:
                break
    return points


def extract_lead(directions: str) -> str:
    m = re.search(r'begins with the sentence ["\u201c\u201d](.+?)["\u201c\u201d]', directions, re.I)
    if m:
        return m.group(1).strip()
    m = re.search(r"write a short essay on ([^.]+)", directions, re.I)
    if m:
        return f"Nowadays, {m.group(1).strip()} has become a topic worth serious discussion."
    return "Nowadays, this topic has become increasingly important in our daily life."


def build_writing_model(lead: str) -> str:
    return (
        f"{lead} This trend reflects broader social changes that deserve careful discussion.\n\n"
        "On the one hand, the development brings tangible benefits to individuals and society, "
        "offering new opportunities for growth and cooperation. On the other hand, it also poses "
        "challenges that require thoughtful policies and responsible behaviour from all of us.\n\n"
        "From my perspective, what matters most is how we respond. By staying informed, adapting "
        "with an open mind, and acting with long-term vision, we can turn this trend into lasting "
        "progress rather than short-lived excitement."
    )


def remap(obj, old: str, new: str):
    if isinstance(obj, dict):
        return {k: remap(v, old, new) for k, v in obj.items()}
    if isinstance(obj, list):
        return [remap(v, old, new) for v in obj]
    if isinstance(obj, str):
        return obj.replace(old, new)
    return obj


def load_json_db(path: Path) -> dict:
    if not path.is_file():
        return {}
    return json.loads(path.read_text(encoding="utf-8")).get("by_session", {})


def answer_index(answers_list: list, num: int, default: int = 0) -> int:
    for row in answers_list:
        if int(row.get("num", -1)) == num:
            return int(row.get("answer", default))
    return default


def apply_real_reading(paper: dict, sk: str, pid: int, parsed: dict, answers: dict) -> bool:
    data = parsed.get(sk)
    if not data:
        paper.setdefault("reading", {})["_source"] = "template"
        return False
    ans = answers.get(sk, {})
    rd = paper["reading"]
    applied = False
    if data.get("sectionA") and data["sectionA"].get("passage"):
        sa = data["sectionA"]
        rd["sectionA"]["passage"] = sa["passage"]
        rd["sectionA"]["blanks"] = sa.get("blanks", rd["sectionA"].get("blanks", []))
        if sa.get("bank"):
            rd["sectionA"]["bank"] = sa["bank"]
        if ans.get("sectionA"):
            rd["sectionA"]["answers"] = ans["sectionA"]
        applied = True
    if data.get("sectionC") and data["sectionC"].get("passages"):
        passages = []
        ans_c = ans.get("sectionC") or []
        for pi, pg in enumerate(data["sectionC"]["passages"]):
            qs_out = []
            for q in pg.get("questions", []):
                aidx = answer_index([r for r in ans_c if r.get("_passage", 0) == pi], q["num"], 0)
                qs_out.append({
                    "num": q["num"],
                    "q": q["q"],
                    "options": q["options"],
                    "answer": aidx,
                })
            passages.append({
                "id": f"p{pid}r{pi+1}",
                "source": f"{sk} 真题阅读",
                "text": pg.get("text", ""),
                "questions": qs_out,
            })
        rd["sectionC"]["passages"] = passages
        applied = True
    rd["_source"] = "real" if applied else "template"
    return applied


def apply_real_listening(paper: dict, sk: str, pid: int, parsed: dict, scripts: dict, answers: dict) -> bool:
    data = parsed.get(sk)
    if not data:
        paper.setdefault("listening", {})["_source"] = "template"
        return False
    ans_map = {int(r["num"]): int(r["answer"]) for r in answers.get(sk, {}).get("answers", [])}
    scr = scripts.get(sk, {}) or {}

    def get_script(sec: str, idx: int, default: str) -> str:
        arr = scr.get(sec) or []
        if idx < len(arr) and arr[idx] and len(str(arr[idx])) > 40:
            return arr[idx]
        return default
    L = paper["listening"]

    def build_qs(qlist, prefix):
        out = []
        for qi, q in enumerate(qlist):
            out.append({
                "q": q["q"],
                "options": q["options"],
                "answer": ans_map.get(q["num"], 0),
            })
        return out

    def split_chunks(qs, sizes):
        chunks, i = [], 0
        for s in sizes:
            chunks.append(qs[i : i + s])
            i += s
        if i < len(qs):
            chunks.append(qs[i:])
        return [c for c in chunks if c]

    applied = False
    sec_a = data.get("sectionA") or []
    if len(sec_a) >= 4:
        chunks = split_chunks(sec_a, [4, 4])
        convs = []
        for ci, chunk in enumerate(chunks[:2]):
            script = get_script("sectionA", ci, "W: (Listen carefully to the conversation.)\nM: Choose the best answer for each question.")
            convs.append({
                "id": f"p{pid}c{ci+1}",
                "script": script,
                "questions": build_qs(chunk, "c"),
            })
        L["sectionA"]["conversations"] = convs
        applied = True

    sec_b = data.get("sectionB") or []
    if len(sec_b) >= 3:
        chunks = split_chunks(sec_b, [3, 4])
        pss = []
        for pi, chunk in enumerate(chunks[:2]):
            script = get_script("sectionB", pi, "Today I'd like to discuss a topic related to the questions below.")
            pss.append({
                "id": f"p{pid}b{pi+1}",
                "script": script,
                "questions": build_qs(chunk, "b"),
            })
        L["sectionB"]["passages"] = pss
        applied = True

    sec_c = data.get("sectionC") or []
    if "sectionC" not in L:
        L["sectionC"] = {
            "title": "Section C —— 讲座/讲话",
            "directions": "You will hear recordings followed by questions. Click ▶ to play, then choose the best answer.",
            "passages": [],
        }
    if len(sec_c) >= 4:
        chunks = split_chunks(sec_c, [3, 3, 3, 3])
        pss = []
        for pi, chunk in enumerate(chunks[:3]):
            script = get_script("sectionC", pi, "In this lecture, we will explore several ideas connected to the following questions.")
            pss.append({
                "id": f"p{pid}l{pi+1}",
                "script": script,
                "questions": build_qs(chunk, "l"),
            })
        if "sectionC" not in L:
            L["sectionC"] = {
                "title": "Section C —— 讲座/讲话",
                "directions": "You will hear recordings followed by questions. Click ▶ to play, then choose the best answer.",
                "passages": [],
            }
        L["sectionC"]["passages"] = pss
        applied = True

    conf = answers.get(sk, {}).get("_confidence")
    if conf:
        L["_answer_confidence"] = conf
    L["_source"] = "real" if applied else "template"
    return applied


def build_paper(
    paper_id: int,
    year: int,
    month: int,
    set_num: int,
    session: str,
    template: dict,
    tpl_idx: int,
    writing_dirs: str,
    cn: str,
    anchor: dict | None,
    glossary: list[tuple[str, str, int]],
    backup_refs: list[tuple[str, str]],
    ref_db: dict[str, str],
    reading_parsed: dict,
    reading_ans: dict,
    listening_parsed: dict,
    listening_scripts: dict,
    listening_ans: dict,
) -> dict:
    old = f"p{template['id']}"
    new = f"p{paper_id}"
    paper = remap(copy.deepcopy(template), old, new)
    keyword = (anchor or {}).get("keyword") or ""
    theme = f"{keyword} · 真题" if keyword else "六级真题"
    name = f"{year}年{month}月·第{set_num}套"
    paper["id"] = paper_id
    paper["name"] = name
    paper["theme"] = theme
    paper["meta"]["title"] = f"大学英语六级模拟考试（{name}）"
    paper["meta"]["subtitle"] = f"CET-6 Real Paper · {session} Set {set_num}"
    paper["meta"]["year"] = year
    paper["meta"]["session"] = session
    paper["meta"]["set"] = set_num

    lead = extract_lead(writing_dirs)
    w = paper["writing"]
    if writing_dirs:
        w["directions"] = writing_dirs
    w["model"] = build_writing_model(lead)
    w["rubric"] = [
        "切题：紧扣写作题目要求",
        "结构：观点段 + 论证段 + 结论段",
        "论证：至少两个理由或一个具体例子",
        "语言：使用准确、多样的词汇与句型",
        "字数：150–200 词",
    ]

    aid = (anchor or {}).get("id", "")
    ref = lookup_reference(cn, anchor, backup_refs, ref_db, year, month, set_num)

    tr = paper["translation"]
    tr["source"] = f"{year}年{month}月六级真题 第{set_num}套"
    tr["text"] = cn
    tr["reference"] = ref
    tr["points"] = build_points(cn, glossary)
    sk = session_key(year, month, set_num)
    apply_real_reading(paper, sk, paper_id, reading_parsed, reading_ans)
    apply_real_listening(paper, sk, paper_id, listening_parsed, listening_scripts, listening_ans)
    return paper


def write_questions(exams: list[dict]) -> None:
    body = json.dumps(exams, ensure_ascii=False, indent=1)
    content = f"const EXAMS ={body}\n;\n\nvar EXAM = EXAMS[0];\n"
    QUESTIONS.write_text(content, encoding="utf-8")


def main() -> int:
    if not TXT_DIR.is_dir():
        print(f"ERROR missing {TXT_DIR}", file=sys.stderr)
        return 1
    if not QUESTIONS.is_file():
        print(f"ERROR missing {QUESTIONS}", file=sys.stderr)
        return 1

    by_id, anchor_items = load_anchors()
    glossary = load_glossary()
    backup_refs = load_backup_refs()
    ref_db = load_ref_db()
    reading_parsed = load_json_db(READING_PARSED)
    reading_ans = load_json_db(READING_ANS)
    listening_parsed = load_json_db(LISTENING_PARSED)
    listening_scripts = load_json_db(LISTENING_SCRIPTS)
    listening_ans = load_json_db(LISTENING_ANS)
    templates = load_templates()
    txt_files = sorted(TXT_DIR.glob("*.txt"), key=lambda p: p.stem, reverse=True)

    exams: list[dict] = []
    stats = {"total": 0, "anchor_hit": 0, "ref_ok": 0, "reading_real": 0, "listening_real": 0}

    for i, fp in enumerate(txt_files, start=1):
        year, month, set_num, session = parse_filename(fp.stem)
        raw = fp.read_text(encoding="utf-8", errors="replace")
        writing_dirs = extract_writing(raw)
        cn = extract_translation_cn(raw)
        anchor = match_anchor(cn, by_id, anchor_items, year, month, set_num)
        if chinese_ratio(cn) < 0.25:
            anchor = match_anchor_by_filename(by_id, year, month, set_num) or anchor
            if anchor:
                cn = clean_translation_cn(anchor["cn"])
            else:
                print(f"WARN skip {fp.name}: translation unreadable", file=sys.stderr)
                continue
        elif not cn:
            anchor = match_anchor_by_filename(by_id, year, month, set_num) or anchor
            if anchor:
                cn = clean_translation_cn(anchor["cn"])
            else:
                print(f"WARN skip {fp.name}: no translation", file=sys.stderr)
                continue
        tpl = templates[(i - 1) % len(templates)]
        paper = build_paper(
            i, year, month, set_num, session, tpl, (i - 1) % len(templates),
            writing_dirs, cn, anchor, glossary, backup_refs, ref_db,
            reading_parsed, reading_ans, listening_parsed, listening_scripts, listening_ans,
        )
        exams.append(paper)
        stats["total"] += 1
        if anchor:
            stats["anchor_hit"] += 1
        if not paper["translation"]["reference"].startswith("（"):
            stats["ref_ok"] += 1
        if paper.get("reading", {}).get("_source") == "real":
            stats["reading_real"] += 1
        if paper.get("listening", {}).get("_source") == "real":
            stats["listening_real"] += 1

    write_questions(exams)
    print(f"OK built {stats['total']} papers -> {QUESTIONS}")
    print(f"  anchor matched: {stats['anchor_hit']}/{stats['total']}")
    print(f"  with reference: {stats['ref_ok']}/{stats['total']}")
    print(f"  reading real: {stats['reading_real']}/{stats['total']}")
    print(f"  listening real: {stats['listening_real']}/{stats['total']}")
    print(f"  years: {sorted({e['meta']['year'] for e in exams}, reverse=True)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
