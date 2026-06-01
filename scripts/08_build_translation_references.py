# -*- coding: utf-8 -*-
"""为全部 59 套真题翻译生成/补全英文参考译文，写入 translation_references.json。"""
from __future__ import annotations

import json
import os
import re
import sys
import threading
import time
import urllib.error
import urllib.request
from pathlib import Path

BASE = Path(__file__).resolve().parent.parent
EXPORT = BASE / "分析结果" / "_papers_export.json"
OUT = BASE / "分析结果" / "translation_references.json"
POE_KEY_FILE = BASE / "模拟考试" / "poe_key.txt"
POE_URL = "https://api.poe.com/v1/chat/completions"
MODEL = "deepseek-v4-flash-e"
MAX_WORKERS = 3

PROMPT = """你是大学英语六级（CET-6）官方参考答案编写专家。
请将下面的中文翻译真题段落译成标准六级参考译文（汉译英）。

要求：
1. 准确、完整地传达原文全部信息，不遗漏、不增删。
2. 用词正式地道，符合六级考试参考译文风格。
3. 句式自然流畅，适当使用从句与连接词。
4. 保留原文括号内的英文专名（如 Beidou, Yangshan Port）。
5. 只输出英文译文正文，不要标题、不要解释、不要 markdown。"""


def load_poe_key() -> str:
    k = os.environ.get("POE_KEY", "").strip()
    if k:
        return k
    if POE_KEY_FILE.is_file():
        return POE_KEY_FILE.read_text(encoding="utf-8").strip()
    return ""


def session_key(p: dict) -> str:
    sess = p.get("session") or ""
    if sess and p.get("set"):
        return f"{sess}_{int(p['set']):02d}"
    m = re.search(r"(\d{4})年(\d+)月·第(\d+)套", p.get("name", ""))
    if m:
        return f"{m.group(1)}-{int(m.group(2)):02d}_{int(m.group(3)):02d}"
    return f"id_{p['id']}"


def is_good_ref(ref: str) -> bool:
    ref = (ref or "").strip()
    return bool(ref) and not ref.startswith("（") and len(ref) > 80


def call_poe(key: str, cn: str) -> str:
    body = json.dumps(
        {
            "model": MODEL,
            "messages": [{"role": "user", "content": f"{PROMPT}\n\n【中文原文】\n{cn}"}],
            "temperature": 0.1,
        },
        ensure_ascii=False,
    ).encode("utf-8")
    req = urllib.request.Request(
        POE_URL,
        data=body,
        headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json"},
    )
    with urllib.request.urlopen(req, timeout=180) as r:
        data = json.loads(r.read().decode("utf-8"))
    content = data["choices"][0]["message"]["content"].strip()
    content = re.sub(r"^```(?:english|en)?\s*", "", content, flags=re.I)
    content = re.sub(r"\s*```$", "", content)
    return re.sub(r"\s+", " ", content).strip()


def worker(key: str, paper: dict, store: dict, lock: threading.Lock, stats: dict) -> None:
    sk = session_key(paper)
    try:
        ref = call_poe(key, paper["cn"])
        with lock:
            store["by_session"][sk] = ref
            stats["done"] += 1
            print(f"  OK [{stats['done']}/{stats['total']}] {paper['name']}")
            OUT.write_text(json.dumps(store, ensure_ascii=False, indent=2), encoding="utf-8")
    except Exception as e:
        with lock:
            stats["fail"] += 1
            print(f"  FAIL {paper['name']}: {e}", file=sys.stderr)


def main() -> int:
    if not EXPORT.is_file():
        print(f"ERROR run node scripts/_export_papers.js first", file=sys.stderr)
        return 1
    papers = json.loads(EXPORT.read_text(encoding="utf-8"))
    store: dict = {"by_session": {}, "meta": {"model": MODEL, "updated": time.strftime("%Y-%m-%d %H:%M:%S")}}
    if OUT.is_file():
        old = json.loads(OUT.read_text(encoding="utf-8"))
        store["by_session"].update(old.get("by_session") or {})

    # 先收录已有优质参考译文
    for p in papers:
        sk = session_key(p)
        if is_good_ref(p.get("ref", "")):
            store["by_session"][sk] = p["ref"].strip()

    todo = [p for p in papers if not is_good_ref(store["by_session"].get(session_key(p), ""))]
    print(f"已有参考译文: {len(papers) - len(todo)}/{len(papers)}，待生成: {len(todo)}")

    if not todo:
        OUT.write_text(json.dumps(store, ensure_ascii=False, indent=2), encoding="utf-8")
        print(f"OK all refs present -> {OUT}")
        return 0

    poe_key = load_poe_key()
    if not poe_key:
        print("ERROR 未找到 POE_KEY / poe_key.txt，无法批量生成", file=sys.stderr)
        return 1

    lock = threading.Lock()
    stats = {"done": 0, "fail": 0, "total": len(todo)}
    threads: list[threading.Thread] = []
    active = threading.Semaphore(MAX_WORKERS)

    def run_one(paper: dict) -> None:
        with active:
            worker(poe_key, paper, store, lock, stats)

    for p in todo:
        t = threading.Thread(target=run_one, args=(p,), daemon=True)
        threads.append(t)
        t.start()

    for t in threads:
        t.join()

    OUT.write_text(json.dumps(store, ensure_ascii=False, indent=2), encoding="utf-8")
    ok = len(papers) - len([p for p in papers if not is_good_ref(store["by_session"].get(session_key(p), ""))])
    print(f"完成: {ok}/{len(papers)} 套有参考译文 -> {OUT}")
    if stats["fail"]:
        print(f"失败 {stats['fail']} 套，可重新运行本脚本续跑", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
