# -*- coding: utf-8 -*-
"""POE: build reading answers -> reading_answers.json"""
from __future__ import annotations

import json
import sys
from pathlib import Path

from exam_common import BASE, load_poe_key, call_poe, parse_json_from_poe, run_pool

INP = BASE / "分析结果" / "reading_parsed.json"
OUT = BASE / "分析结果" / "reading_answers.json"

READ_C_PROMPT = """你是大学英语六级阅读命题专家。根据 passage 与选择题，选出每题唯一正确答案。
只输出 JSON：{"answers":[{"num":46,"answer":0},...]}，answer 为 0-based 选项索引(A=0,B=1,C=2,D=3)。"""

READ_A_PROMPT = """你是大学英语六级选词填空专家。根据 passage 空格编号与 word bank，为 26-35 每空选唯一字母。
只输出 JSON：{"answers":{"26":"J","27":"B",...}}，值为 word bank 字母。"""


def needs_answers(sk: str, parsed: dict, store: dict) -> bool:
    if sk in store:
        return False
    return bool(parsed.get("sectionA") or parsed.get("sectionC"))


def worker(item, lock, stats):
    sk, data, key = item
    result: dict = {}
    if data.get("sectionA") and data["sectionA"].get("bank"):
        sa = data["sectionA"]
        prompt = (
            f"{READ_A_PROMPT}\n\n【passage】\n{sa['passage']}\n\n"
            f"【blanks】{sa['blanks']}\n\n【word bank】\n"
            + "\n".join(f"{b['l']}. {b['w']}" for b in sa["bank"])
        )
        ans = parse_json_from_poe(call_poe(key, prompt))
        result["sectionA"] = ans.get("answers", ans)
    if data.get("sectionC"):
        all_ans = []
        for pi, pg in enumerate(data["sectionC"]["passages"]):
            qs = pg.get("questions", [])
            if not qs:
                continue
            qblock = "\n".join(
                f"Q{q['num']}. {q['q']}\n" + "\n".join(f"  {chr(65+i)}. {o}" for i, o in enumerate(q["options"]))
                for q in qs
            )
            prompt = f"{READ_C_PROMPT}\n\n【passage】\n{pg.get('text','')}\n\n【questions】\n{qblock}"
            ans = parse_json_from_poe(call_poe(key, prompt))
            for row in ans.get("answers", []):
                row["_passage"] = pi
                all_ans.append(row)
        result["sectionC"] = all_ans
    with lock:
        stats["store"]["by_session"][sk] = result
        stats["done"] += 1
        print(f"  OK [{stats['done']}/{stats['total']}] {sk}")
        OUT.write_text(json.dumps(stats["store"], ensure_ascii=False, indent=2), encoding="utf-8")


def main() -> int:
    if not INP.is_file():
        print("Run 10_parse_reading_from_txt.py first", file=sys.stderr)
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
    todo = [
        (sk, data, key)
        for sk, data in parsed.get("by_session", {}).items()
        if needs_answers(sk, data, store["by_session"])
    ]
    print(f"reading answers todo: {len(todo)}")
    if not todo:
        print(f"OK all done -> {OUT}")
        return 0
    stats = run_pool(todo, worker, max_workers=3, extra={"store": store})
    OUT.write_text(json.dumps(store, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"done {stats['done']} fail {stats['fail']} -> {OUT}")
    return 1 if stats["fail"] else 0


if __name__ == "__main__":
    raise SystemExit(main())
