# -*- coding: utf-8 -*-
"""Parse Part III reading from cet6_zhenti_cleaned txt -> reading_parsed.json"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

from exam_common import BASE, TXT_DIR, session_key_from_stem, split_part3

OUT = BASE / "分析结果" / "reading_parsed.json"

OPTION_RE = re.compile(
    r"^(\d{1,2})\.\s*(.+?)(?=\n\d{1,2}\.\s|\nQuestions\s+\d+\s+to|\nPassage\s|\Z)",
    re.S | re.M,
)
BANK_LINE = re.compile(r"^([A-Oa-o])[.)]\s*(.+?)\s*$")
BLANK_NUM = re.compile(r"\b(2[6-9]|3[0-5])\b")


def parse_options(block: str) -> list[str]:
    opts: list[str] = []
    for line in block.splitlines():
        line = line.strip()
        m = re.match(r"^([A-D])[.)]\s*(.+)$", line, re.I)
        if m:
            opts.append(m.group(2).strip())
    while len(opts) < 4:
        opts.append("")
    return opts[:4]


def parse_mcq_block(part: str) -> list[dict]:
    questions: list[dict] = []
    chunks = re.split(r"(?=\n\d{1,2}\.\s)", "\n" + part)
    for chunk in chunks:
        m = re.match(r"^(\d{1,2})\.\s*(.+)", chunk.strip(), re.S)
        if not m:
            continue
        num = int(m.group(1))
        body = m.group(2)
        qm = re.match(r"^(.+?)(?=\n[A-D][.)])", body, re.S)
        qtext = (qm.group(1) if qm else body.split("\n")[0]).strip()
        qtext = re.sub(r"\s+", " ", qtext)
        opts = parse_options(body)
        if len([o for o in opts if o]) >= 2:
            questions.append({"num": num, "q": qtext, "options": opts})
    return questions


def find_section_a_passage(part3: str) -> tuple[str, list[int]]:
    m = re.search(
        r"(With the rapid progress|In recent years|When|As|Over|The|China|Many|Some|It\s+is|There\s+is|People|We\s+|If\s+|Although|Since|While|During|After|Before|Because|Despite|Not\s+only|One\s+of|This\s+is|Humanity|Every|Most|Sleep|Horror|An\s+awakening)[^\n]{20,}",
        part3,
        re.I,
    )
    if not m:
        return "", []
    start = m.start()
    chunk = part3[start:]
    end = re.search(r"\n\d{1,2}\.\s+[A-D][.)]|Questions\s+\d+\s+to|\nPassage\s", chunk, re.I)
    passage = chunk[: end.start()] if end else chunk[:2500]
    passage = re.sub(r"\s+", " ", passage).strip()
    blanks = sorted({int(x) for x in BLANK_NUM.findall(passage) if 26 <= int(x) <= 35})
    if len(blanks) < 5:
        return "", []
    return passage, blanks


def find_word_bank(part3: str) -> list[dict]:
    bank: list[dict] = []
    for line in part3.splitlines():
        m = BANK_LINE.match(line.strip())
        if not m:
            continue
        letter = m.group(1).upper()
        word = re.sub(r"\s+", " ", m.group(2)).strip()
        if word and len(word) < 40 and re.match(r"^[A-Za-z\-']", word):
            bank.append({"l": letter, "w": word})
    # dedupe by letter
    seen: set[str] = set()
    out: list[dict] = []
    for b in bank:
        if b["l"] in seen:
            continue
        seen.add(b["l"])
        out.append(b)
    return out if len(out) >= 10 else []


def parse_section_c(part3: str) -> list[dict]:
    passages: list[dict] = []
    blocks = re.split(r"(?=Questions\s+\d+\s+to\s+\d+\s+are\s+based\s+on)", part3, flags=re.I)
    for block in blocks:
        if not re.search(r"Questions\s+\d+\s+to", block, re.I):
            continue
        qs = parse_mcq_block(block)
        if not qs:
            continue
        nums = [q["num"] for q in qs]
        if max(nums) < 46 and min(nums) < 40:
            continue
        pm = re.search(
            r"Questions\s+\d+\s+to\s+\d+\s+are\s+based\s+on\s+(?:the\s+)?(?:following\s+)?(?:passage|conversation|recording)[^.]*\.\s*",
            block,
            re.I,
        )
        text_start = pm.end() if pm else 0
        qpos = re.search(r"\n\d{1,2}\.\s", block[text_start:])
        text = block[text_start : text_start + qpos.start()] if qpos else block[text_start:]
        text = re.sub(r"\s+", " ", text).strip()
        if len(text) < 120:
            continue
        passages.append({"text": text, "questions": qs})
    if not passages:
        qs = [q for q in parse_mcq_block(part3) if q["num"] >= 46]
        if qs:
            passages.append({"text": "(See questions below — passage embedded in exam PDF)", "questions": qs})
    return passages


def parse_file(fp: Path) -> dict | None:
    text = fp.read_text(encoding="utf-8", errors="replace")
    part3 = split_part3(text)
    if not part3 or len(part3) < 200:
        return None
    passage, blanks = find_section_a_passage(part3)
    bank = find_word_bank(part3)
    section_c = parse_section_c(part3)
    if not passage and not section_c:
        return None
    out: dict = {}
    if passage and blanks:
        out["sectionA"] = {"passage": passage, "blanks": blanks, "bank": bank}
    if section_c:
        out["sectionC"] = {"passages": section_c}
    return out or None


def main() -> int:
    if not TXT_DIR.is_dir():
        print(f"ERROR missing {TXT_DIR}", file=sys.stderr)
        return 1
    store: dict = {"by_session": {}, "meta": {"count": 0}}
    ok = 0
    for fp in sorted(TXT_DIR.glob("*.txt")):
        parsed = parse_file(fp)
        if parsed:
            store["by_session"][session_key_from_stem(fp.stem)] = parsed
            ok += 1
    store["meta"]["count"] = ok
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(store, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"OK parsed reading for {ok}/{len(list(TXT_DIR.glob('*.txt')))} -> {OUT}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
