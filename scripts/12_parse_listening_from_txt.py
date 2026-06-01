# -*- coding: utf-8 -*-
"""Parse Part II listening MCQs from txt -> listening_parsed.json"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

from exam_common import BASE, TXT_DIR, session_key_from_stem, split_part2

OUT = BASE / "分析结果" / "listening_parsed.json"


def parse_options(body: str) -> list[str]:
    opts: list[str] = []
    for line in body.splitlines():
        m = re.match(r"^([A-D])[.)]\s*(.+)$", line.strip(), re.I)
        if m:
            opts.append(m.group(2).strip())
    while len(opts) < 4:
        opts.append("")
    return opts[:4]


def parse_questions(part2: str) -> list[dict]:
    questions: list[dict] = []
    chunks = re.split(r"(?=\n\s*\d{1,2}\.\s)", "\n" + part2)
    for chunk in chunks:
        m = re.match(r"^(\d{1,2})\.\s*(.+)", chunk.strip(), re.S)
        if not m:
            continue
        num = int(m.group(1))
        if num < 1 or num > 25:
            continue
        body = m.group(2)
        qm = re.match(r"^(.+?)(?=\n\s*[A-D][.)])", body, re.S)
        qtext = (qm.group(1) if qm else body.split("\n")[0]).strip()
        qtext = re.sub(r"\s+", " ", qtext)
        opts = parse_options(body)
        if len([o for o in opts if o]) >= 2:
            questions.append({"num": num, "q": qtext, "options": opts})
    return questions


def group_sections(questions: list[dict]) -> dict:
    by_num = {q["num"]: q for q in questions}
    def pick(nums):
        return [by_num[n] for n in nums if n in by_num]
    return {
        "sectionA": pick(list(range(1, 9))),
        "sectionB": pick(list(range(9, 16))),
        "sectionC": pick(list(range(16, 26))),
    }


def parse_file(fp: Path) -> dict | None:
    text = fp.read_text(encoding="utf-8", errors="replace")
    part2 = split_part2(text)
    if not part2:
        return None
    qs = parse_questions(part2)
    if len(qs) < 15:
        return None
    grouped = group_sections(qs)
    return grouped


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
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(store, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"OK parsed listening for {ok}/{len(list(TXT_DIR.glob('*.txt')))} -> {OUT}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
