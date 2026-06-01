# -*- coding: utf-8 -*-
"""Shared helpers for CET6 exam bank build scripts."""
from __future__ import annotations

import json
import os
import re
import threading
import urllib.request
from pathlib import Path

BASE = Path(__file__).resolve().parent.parent
TXT_DIR = BASE / "cet6_exam_questions_txt_collection" / "cet6_zhenti_cleaned"
POE_KEY_FILE = BASE / "模拟考试" / "poe_key.txt"
POE_URL = "https://api.poe.com/v1/chat/completions"
POE_MODEL = "deepseek-v4-flash-e"


def load_poe_key() -> str:
    k = os.environ.get("POE_KEY", "").strip()
    if k:
        return k
    if POE_KEY_FILE.is_file():
        return POE_KEY_FILE.read_text(encoding="utf-8").strip()
    return ""


def session_key_from_stem(stem: str) -> str:
    return stem  # e.g. 2024-12_01


def session_key_from_parts(year: int, month: int, set_num: int) -> str:
    return f"{year}-{month:02d}_{set_num:02d}"


def call_poe(key: str, prompt: str, temperature: float = 0.1) -> str:
    body = json.dumps(
        {
            "model": POE_MODEL,
            "messages": [{"role": "user", "content": prompt}],
            "temperature": temperature,
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
    content = re.sub(r"^```(?:json|english|en)?\s*", "", content, flags=re.I)
    content = re.sub(r"\s*```$", "", content)
    return content.strip()


def parse_json_from_poe(text: str):
    m = re.search(r"\{[\s\S]*\}|\[[\s\S]*\]", text)
    if m:
        return json.loads(m.group(0))
    return json.loads(text)


def run_pool(items, worker_fn, max_workers: int = 3, extra: dict | None = None):
    lock = threading.Lock()
    stats = {"done": 0, "fail": 0, "total": len(items)}
    if extra:
        stats.update(extra)
    sem = threading.Semaphore(max_workers)
    threads = []

    def run(item):
        with sem:
            try:
                worker_fn(item, lock, stats)
            except Exception as e:
                with lock:
                    stats["fail"] += 1
                    print(f"  FAIL {item}: {e}")

    for item in items:
        t = threading.Thread(target=run, args=(item,), daemon=True)
        threads.append(t)
        t.start()
    for t in threads:
        t.join()
    return stats


def extract_part(text: str, part_num: str, next_part: str | None = None) -> str:
    pat = rf"Part\s*{part_num}\b[^\n]*\n(.*?)(?=Part\s*(?:{next_part})\b|\Z)" if next_part else rf"Part\s*{part_num}\b[^\n]*\n(.*)\Z"
    m = re.search(pat, text, re.S | re.I)
    return m.group(1) if m else ""


def split_part3(text: str) -> str:
    m = re.search(
        r"Part\s*III[^\n]*\n(.*?)(?=Part\s*(?:IV|I\b|N\b)\s*[^\n]*\n|\Z)",
        text,
        re.S | re.I,
    )
    if m:
        return m.group(1)
    m = re.search(
        r"Reading\s+Comprehension[^\n]*\n(.*?)(?=Part\s*(?:IV|I\b)\b|\Z)",
        text,
        re.S | re.I,
    )
    return m.group(1) if m else ""


def split_part2(text: str) -> str:
    m = re.search(
        r"Part\s*(?:II|I\][\s\[]|ll|1[1l])[^\n]*\n(.*?)(?=Part\s*III\b|\Z)",
        text,
        re.S | re.I,
    )
    if m:
        return m.group(1)
    m = re.search(
        r"Listening\s+Comprehension[^\n]*\n(.*?)(?=Part\s*III\b|\Z)",
        text,
        re.S | re.I,
    )
    return m.group(1) if m else ""
