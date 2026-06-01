# -*- coding: utf-8
"""POE: generate listening TTS scripts -> listening_scripts.json"""
from __future__ import annotations

import json
import sys
from pathlib import Path

from exam_common import BASE, load_poe_key, call_poe, run_pool

INP = BASE / "分析结果" / "listening_parsed.json"
OUT = BASE / "分析结果" / "listening_scripts.json"

SCRIPT_PROMPT = """你是大学英语六级听力命题专家。根据下列听力选择题（无原文），编写一段自然的英文听力脚本（对话或讲座），
使听者能据此作答。格式：对话用 W:/M: 交替；讲座用连贯段落。150-280 英文词。只输出脚本文本，不要解释。"""


def worker(item, lock, stats):
    sk, sec_name, group_idx, questions, key = item
    qblock = "\n".join(
        f"Q{q['num']}. {q['q']}\n" + "\n".join(f"  {chr(65+i)}. {o}" for i, o in enumerate(q["options"]))
        for q in questions
    )
    prompt = f"{SCRIPT_PROMPT}\n\n【section】{sec_name} group {group_idx}\n\n【questions】\n{qblock}"
    script = call_poe(key, prompt)
    with lock:
        store = stats["store"]
        store.setdefault("by_session", {}).setdefault(sk, {})
        store["by_session"][sk].setdefault(sec_name, [])
        while len(store["by_session"][sk][sec_name]) <= group_idx:
            store["by_session"][sk][sec_name].append("")
        store["by_session"][sk][sec_name][group_idx] = script
        stats["done"] += 1
        print(f"  OK [{stats['done']}/{stats['total']}] {sk} {sec_name}[{group_idx}]")
        OUT.write_text(json.dumps(store, ensure_ascii=False, indent=2), encoding="utf-8")


def main() -> int:
    if not INP.is_file():
        print("Run 12_parse_listening_from_txt.py first", file=sys.stderr)
        return 1
    parsed = json.loads(INP.read_text(encoding="utf-8"))
    store: dict = {"by_session": {}}
    if OUT.is_file():
        store = json.loads(OUT.read_text(encoding="utf-8"))
        store.setdefault("by_session", {})
    key = load_poe_key()
    if not key:
        print("ERROR no POE key", file=sys.stderr)
        return 1
    todo = []
    for sk, data in parsed.get("by_session", {}).items():
        for sec in ("sectionA", "sectionB", "sectionC"):
            qs = data.get(sec) or []
            if not qs:
                continue
            if sec == "sectionA":
                chunks = [qs[:4], qs[4:8]] if len(qs) >= 8 else [qs]
            elif sec == "sectionB":
                chunks = [qs[:3], qs[3:7]] if len(qs) >= 6 else [qs]
            else:
                chunks = [qs[:4], qs[4:8], qs[8:]] if len(qs) >= 12 else [qs]
            for gi, chunk in enumerate(chunks):
                if not chunk:
                    continue
                existing = store.get("by_session", {}).get(sk, {}).get(sec, [])
                if gi < len(existing) and existing[gi] and len(existing[gi]) > 80:
                    continue
                todo.append((sk, sec, gi, chunk, key))
    print(f"listening scripts todo: {len(todo)}")
    if not todo:
        print(f"OK all done -> {OUT}")
        return 0
    stats = run_pool(todo, worker, max_workers=3, extra={"store": store})
    OUT.write_text(json.dumps(store, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"-> {OUT}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
