# -*- coding: utf-8 -*-
"""Extract CET-6 translation passages from 历年翻译汇总.md -> JSON anchors."""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

BASE = Path(r"F:\六级")
SRC = BASE / "CET6-Resources" / "历年翻译汇总.md"
OUT = BASE / "分析结果" / "translation_anchors.json"


def clean_title(raw: str) -> str:
    t = re.sub(r"\*+", "", raw).strip()
    t = re.sub(r"\s+", "", t)
    return t


def keyword(text: str) -> str:
    m = re.search(r"[\u4e00-\u9fff]{2,8}（", text)
    if m:
        return m.group(0).rstrip("（")
    m = re.search(r"[\u4e00-\u9fff]{2,6}", text)
    return m.group(0) if m else ""


def extract_passages(text: str) -> list[dict]:
    parts = re.split(r"\n#{5}\s*", text)
    items: list[dict] = []
    for part in parts:
        part = part.strip()
        if len(part) < 30:
            continue
        if not re.search(r"[\u4e00-\u9fff]", part):
            continue
        lines = part.splitlines()
        title = clean_title(lines[0]) if lines else "unknown"
        body_lines: list[str] = []
        ref_en: list[str] = []
        mode = "cn"
        for line in lines[1:]:
            s = line.strip()
            if not s:
                continue
            if re.match(r"参考(?:译文|答案)\s*[:：]?", s):
                mode = "en"
                tail = re.sub(r"^参考(?:译文|答案)\s*[:：]?", "", s).strip()
                if tail:
                    ref_en.append(tail)
                continue
            if mode == "en":
                ref_en.append(s)
            else:
                body_lines.append(s)
        cn = re.sub(r"\s+", " ", " ".join(body_lines)).strip()
        if len(cn) < 40:
            continue
        year_m = re.search(r"(20\d{2})", title)
        items.append(
            {
                "id": title,
                "year": int(year_m.group(1)) if year_m else None,
                "title": title,
                "keyword": keyword(cn),
                "cn": cn,
                "ref_en": re.sub(r"\s+", " ", " ".join(ref_en)).strip() or None,
            }
        )
    return items


def main() -> int:
    if not SRC.is_file():
        print(f"ERROR missing source: {SRC}", file=sys.stderr)
        return 1
    text = SRC.read_text(encoding="utf-8")
    items = extract_passages(text)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    payload = {
        "source": str(SRC),
        "count": len(items),
        "years": sorted({x["year"] for x in items if x["year"]}),
        "items": items,
    }
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    # stdout: brief summary only (CC-friendly)
    print(f"OK wrote {len(items)} passages -> {OUT}")
    for it in items[:3]:
        print(f"  - {it['title']} [{it['keyword']}] {len(it['cn'])} chars")
    if len(items) > 3:
        print(f"  ... +{len(items) - 3} more")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
