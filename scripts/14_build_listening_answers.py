# -*- coding: utf-8
"""POE: infer listening answers -> listening_answers.json (confidence: low)"""
from __future__ import annotations

import json
import sys
from pathlib import Path

from exam_common import BASE, load_poe_key, call_poe, parse_json_from_poe, run_pool

INP = BASE / "分析结果" / "listening_parsed.json"
OUT = BASE / "分析结果" / "listening_answers.json"

ANS_PROMPT = """你是六级听力专家。仅有题干与选项、无录音时，推断最可能正确答案。
只输出 JSON：{"answers":[{"num":1,"answer":0},...]}，answer 为 0-based 索引。标注推断性质，尽量选最合理项。"""


def worker(item, lock, stats):
    sk, questions, key = item
    qblock = "\n".join(
        f"Q{q['num']}. {q['q']}\n" + "\n".join(f"  {chr(65+i)}. {o}" for i, o in enumerate(q["options"]))
        for q in questions
    )
    prompt = f"{ANS_PROMPT}\n\n【questions】\n{qblock}"
    ans = parse_json_from_poe(call_poe(key, prompt))
    with lock:
        store = stats["store"]
        store.setdefault("by_session", {})[sk] = {
            "answers": ans.get("answers", []),
            "_confidence": "low",
        }
        stats["done"] += 1
        print(f"  OK [{stats['done']}/{stats['total']}] {sk}")
        OUT.write_text(json.dumps(store, ensure_ascii=False, indent=2), encoding="utf-8")


def main() -> int:
    if not INP.is_file():
        print("Run 12 first", file=sys.stderr)
        return 1
    parsed = json.loads(INP.read_text(encoding="utf-8"))
    store: dict = {"by_session": {}, "meta": {"_confidence": "low"}}
    if OUT.is_file():
        store = json.loads(OUT.read_text(encoding="utf-8"))
        store.setdefault("by_session", {})
    key = load_poe_key()
    if not key:
        print("ERROR no POE key", file=sys.stderr)
        return 1
    todo = [
        (sk, (data.get("sectionA") or []) + (data.get("sectionB") or []) + (data.get("sectionC") or []), key)
        for sk, data in parsed.get("by_session", {}).items()
        if sk not in store["by_session"]
    ]
    print(f"listening answers todo: {len(todo)}")
    if not todo:
        print(f"OK -> {OUT}")
        return 0
    stats = run_pool(todo, worker, max_workers=3, extra={"store": store})
    OUT.write_text(json.dumps(store, ensure_ascii=False, indent=2), encoding="utf-8")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
