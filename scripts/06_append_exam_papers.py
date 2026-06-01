# -*- coding: utf-8 -*-
"""Append exam papers 4-8 to questions.js using real translation anchors (offline, no CC API)."""
from __future__ import annotations

import copy
import json
import re
import sys
from pathlib import Path

ROOT = Path(r"F:\六级\模拟考试")
QUESTIONS = ROOT / "questions.js"
ANCHORS = Path(r"F:\六级\分析结果\translation_anchors.json")

# Real CET-6 translation passages (cn from anchors; reference = standard exam-style EN)
NEW_PAPERS = [
    {
        "id": 4,
        "name": "第四套",
        "theme": "科技创新 · 北斗导航",
        "anchor_id": "2024年12月第一篇",
        "source": "2024年12月六级真题 真实题目",
        "writing_lead": "Nowadays, scientific and technological innovation is playing an increasingly vital role in national development.",
        "reference": (
            "The successful development of the BeiDou Navigation Satellite System is a major scientific "
            "and technological achievement China has made since reform and opening up. After relentless efforts, "
            "researchers overcame a series of technical challenges, and the BeiDou system finally achieved global "
            "coverage and high-precision positioning, making China one of the few countries in the world that "
            "independently owns a global satellite navigation system. The BeiDou system has been widely applied "
            "in fields such as transportation, disaster relief, weather forecasting and public security. It is "
            "now widely recognized internationally and is beginning to provide high-quality services to more and "
            "more countries and regions."
        ),
        "points": [
            "重大科技成就 → a major scientific and technological achievement",
            "改革开放以来 → since reform and opening up",
            "攻克技术难题 → overcome technical challenges",
            "全球覆盖 → global coverage",
            "高精度定位 → high-precision positioning",
            "广泛应用于 → be widely applied in",
            "灾害救援 → disaster relief",
            "得到广泛认可 → be widely recognized",
        ],
    },
    {
        "id": 5,
        "name": "第五套",
        "theme": "智慧港口 · 洋山港",
        "anchor_id": "2024年12月第二篇",
        "source": "2024年12月六级真题 真实题目",
        "writing_lead": "Nowadays, automation and digital technology are transforming traditional industries at an unprecedented pace.",
        "reference": (
            "Yangshan Port is an important part of the Shanghai international shipping centre. It is China's first "
            "deep-water port and one of the largest deep-water ports in the world. After nearly 20 years of "
            "development, Yangshan Port has achieved a high degree of automation. The use of digital technology "
            "and artificial intelligence has greatly reduced labour costs and carbon emissions. The independently "
            "developed terminal management system enables remote control of large equipment from hundreds of "
            "kilometres away. Yangshan Port looks busy, yet no manual operation is seen on site, and it can "
            "operate around the clock without interruption. Yangshan Port will continue to develop and make "
            "greater contributions to building Shanghai into a global shipping centre."
        ),
        "points": [
            "深水港 → deep-water port",
            "高度自动化 → a high degree of automation",
            "用工成本 → labour costs",
            "碳排放 → carbon emissions",
            "远程操控 → remote control",
            "24小时不间断运作 → operate around the clock without interruption",
            "航运中心 → shipping centre",
        ],
    },
    {
        "id": 6,
        "name": "第六套",
        "theme": "航天强国 · 空间站",
        "anchor_id": "2024年12月第三篇",
        "source": "2024年12月六级真题 真实题目",
        "writing_lead": "Nowadays, space exploration has become a symbol of a nation's comprehensive strength and innovative capacity.",
        "reference": (
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
        "points": [
            "遨游太空 → travelling in space",
            "宇航员 → astronaut",
            "太空行走 → spacewalk",
            "快车道 → a fast lane",
            "空间站 → space station",
            "人类文明进步 → the progress of human civilization",
            "迈得更稳、更远 → become steadier and go farther",
        ],
    },
    {
        "id": 7,
        "name": "第七套",
        "theme": "竹文化 · 民族品格",
        "anchor_id": "2024年6月第二篇",
        "source": "2024年6月六级真题 真实题目",
        "writing_lead": "Nowadays, traditional cultural symbols are being reinterpreted to inspire modern values and national identity.",
        "reference": (
            "China abounds in bamboo and is the earliest country to develop and utilize bamboo resources. Bamboo "
            "is widely distributed in China and rich in varieties. It is highly practical and used in many aspects "
            "of production and daily life, such as making chopsticks, tables and chairs, as well as building "
            "bridges and houses. Chinese people love bamboo. Since ancient times, countless men of letters have "
            "created splendid literary and artistic works with bamboo as the theme. The straight stem of bamboo "
            "symbolizes an upright character. Bamboo has strong vitality and adaptability and can survive tenaciously "
            "no matter how harsh the environment is, thus implying a spirit of perseverance. For thousands of years, "
            "bamboo has been regarded as a symbol of the character of the Chinese nation."
        ),
        "points": [
            "盛产竹子 → abounds in bamboo",
            "分布广泛 → widely distributed",
            "实用性强 → highly practical",
            "文人 → men of letters",
            "象征正直 → symbolize an upright character",
            "坚韧不拔 → perseverance",
            "民族品格 → the character of the Chinese nation",
        ],
    },
    {
        "id": 8,
        "name": "第八套",
        "theme": "社会民生 · 养老模式",
        "anchor_id": "2023年12月第一套",
        "source": "2023年12月六级真题 真实题目",
        "writing_lead": "Nowadays, addressing the challenges of an aging society has become a pressing issue for many countries.",
        "reference": (
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
        "points": [
            "老龄化社会 → an aging society",
            "养老模式 → elderly care model",
            "多元化 → diversified",
            "政府引导 → government guidance",
            "居家养老 → home-based care",
            "社区服务中心 → community service centres",
            "服务质量 → service quality",
        ],
    },
]


def load_anchors() -> dict[str, dict]:
    data = json.loads(ANCHORS.read_text(encoding="utf-8"))
    return {item["id"]: item for item in data["items"]}


def remap(obj, old: str, new: str):
    if isinstance(obj, dict):
        return {k: remap(v, old, new) for k, v in obj.items()}
    if isinstance(obj, list):
        return [remap(v, old, new) for v in obj]
    if isinstance(obj, str):
        return obj.replace(old, new)
    return obj


def build_paper(template: dict, spec: dict, anchor: dict) -> dict:
    pid = spec["id"]
    old = "p3"
    new = f"p{pid}"
    paper = remap(copy.deepcopy(template), old, new)
    paper["id"] = pid
    paper["name"] = spec["name"]
    paper["theme"] = spec["theme"]
    paper["meta"]["title"] = f"大学英语六级模拟考试（{spec['name']}）"
    paper["meta"]["subtitle"] = f"CET-6 Simulated Test · Paper {pid}"

    lead = spec["writing_lead"]
    w = paper["writing"]
    w["directions"] = (
        f'For this part, you are allowed 30 minutes to write an essay that begins with the sentence '
        f'"{lead}" You can make comments, cite examples or use your personal experiences. '
        f"You should write at least 150 words but no more than 200 words."
    )
    w["model"] = (
        f"{lead} This trend reflects broader social changes that deserve careful discussion.\n\n"
        "On the one hand, the development brings tangible benefits to individuals and society, "
        "offering new opportunities for growth and cooperation. On the other hand, it also poses "
        "challenges that require thoughtful policies and responsible behaviour from all of us.\n\n"
        "From my perspective, what matters most is how we respond. By staying informed, adapting "
        "with an open mind, and acting with long-term vision, we can turn this trend into lasting "
        "progress rather than short-lived excitement."
    )

    cn = re.sub(r"\s+#\s*20\d{2}年\s*$", "", anchor["cn"]).strip()
    cn = re.sub(r"\s+", " ", cn)
    tr = paper["translation"]
    tr["source"] = spec["source"]
    tr["text"] = cn
    tr["reference"] = spec["reference"]
    tr["points"] = spec["points"]
    return paper


def main() -> int:
    if not QUESTIONS.is_file():
        print(f"ERROR missing {QUESTIONS}", file=sys.stderr)
        return 1
    anchors = load_anchors()
    text = QUESTIONS.read_text(encoding="utf-8")
    m = re.search(r"(const EXAMS = )(\[.*?\n\])(;\s*\n\s*var EXAM)", text, re.S)
    if not m:
        print("ERROR cannot parse EXAMS array", file=sys.stderr)
        return 1
    exams = json.loads(m.group(2))
    existing = {e["id"] for e in exams}
    template = next(e for e in exams if e["id"] == 3)

    added = []
    for spec in NEW_PAPERS:
        if spec["id"] in existing:
            print(f"skip paper {spec['id']} (exists)")
            continue
        anchor = anchors.get(spec["anchor_id"])
        if not anchor:
            print(f"ERROR missing anchor {spec['anchor_id']}", file=sys.stderr)
            return 1
        exams.append(build_paper(template, spec, anchor))
        added.append(spec["id"])

    if not added:
        print(f"OK already have {len(exams)} papers, nothing to add")
        return 0

    header = text[: m.start(2)]
    footer = text[m.end(2) :]
    body = json.dumps(exams, ensure_ascii=False, indent=1)
    # match original 2-space indent inside array
    body = body.replace("\n ", "\n ")
    new_text = header + body + footer
    QUESTIONS.write_text(new_text, encoding="utf-8")
    print(f"OK appended papers {added}; total={len(exams)} -> {QUESTIONS}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
