# -*- coding: utf-8 -*-
"""
CET6 模拟考试 —— 本地评分代理服务器
- 提供静态文件服务（白名单，绝不暴露本脚本与 key）
- /api/score: 接收作文/翻译答案，调用 POE 的 gpt-5.5 + deepseek-v4-pro-e 双模型
  按 CET6 官方 15 分制评分，取两模型平均分返回
- 浏览器只与本机代理通信，POE key 仅存于服务器端
用法:  python server.py  然后浏览器访问 http://<本机IP>:8765/index.html
"""
import json, os, re, threading, urllib.request, urllib.error
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

# ===== 配置 =====
HERE     = os.path.dirname(os.path.abspath(__file__))

def _load_poe_key():
    """优先读环境变量 POE_KEY；否则读同目录下 poe_key.txt（已被 .gitignore 排除，绝不进仓库）。"""
    k = os.environ.get("POE_KEY", "").strip()
    if k:
        return k
    fp = os.path.join(HERE, "poe_key.txt")
    if os.path.isfile(fp):
        with open(fp, "r", encoding="utf-8") as f:
            return f.read().strip()
    return ""

POE_KEY  = _load_poe_key()      # 不再硬编码：设环境变量 POE_KEY 或在本目录放 poe_key.txt
POE_URL  = "https://api.poe.com/v1/chat/completions"
MODELS   = ["gpt-5.5", "deepseek-v4-flash-e"]   # 双模型（flash 变体更快更稳）
PORT     = 8765
# 静态文件白名单（只有这些能被下载，server.py / key 永不外泄）
WHITELIST = {"/index.html":"text/html; charset=utf-8",
             "/questions.js":"application/javascript; charset=utf-8",
             "/dict_words.js":"application/javascript; charset=utf-8",
             "/health":"application/json; charset=utf-8",
             "/":"text/html; charset=utf-8"}

# ===== CET6 官方评分标准（15 分制四档） =====
WRITING_STD = """你是大学英语六级（CET6）作文阅卷专家。严格按官方15分制评分标准评分：
- 13-15分：切题，表达思想清楚，文字通顺连贯，基本无语言错误，仅个别小错。
- 10-12分：切题，表达思想清楚，文字较连贯，但有少量语言错误。
- 7-9分：基本切题，有些地方表达不够清楚，文字勉强连贯，语言错误相当多，含一些严重错误。
- 4-6分：基本切题，表达思想不清楚，连贯性差，有较多严重语言错误。
- 1-3分：条理不清，思路紊乱，语言支离破碎，多数句子有严重错误。
- 0分：未作答/完全偏题/字数过少。
评分时综合考虑：①是否切题并按要求开头 ②内容是否充实有论证 ③结构与连贯性 ④语言丰富度（高级词汇/句式）⑤语法拼写准确性。要求150-200词，字数不足要扣分。"""

TRANS_STD = """你是大学英语六级（CET6）翻译阅卷专家。严格按官方15分制评分标准评分（汉译英）：
- 13-15分：译文准确表达原文意思，用词贴切，行文流畅，基本无语言错误。
- 10-12分：译文基本表达原文意思，文字通顺连贯，无重大语言错误。
- 7-9分：译文勉强表达原文意思，用词欠准确，语言错误相当多，含一些严重错误。
- 4-6分：译文仅表达一小部分原文意思，用词不准确，有相当多严重语言错误。
- 1-3分：译文支离破碎，绝大部分文字未表达原文意思。
- 0分：未作答。
评分时综合考虑：①关键信息/采分点覆盖 ②用词准确地道 ③句子结构与时态 ④语法拼写。"""

def build_prompt(kind, payload):
    """构造给模型的评分指令，强制 JSON 输出"""
    if kind == "writing":
        std = WRITING_STD
        ctx = f"【作文题目要求】\n{payload.get('directions','')}\n\n【考生作文】\n{payload.get('text','')}"
        dims = '"relevance":切题度0-10,"content":内容充实0-10,"coherence":结构连贯0-10,"language":语言丰富0-10,"accuracy":语法准确0-10'
    else:
        std = TRANS_STD
        ctx = (f"【中文原文】\n{payload.get('source','')}\n\n"
               f"【参考译文】\n{payload.get('reference','')}\n\n"
               f"【考生译文】\n{payload.get('text','')}")
        dims = '"accuracy":信息准确0-10,"wording":用词地道0-10,"grammar":语法句法0-10,"fluency":流畅度0-10'
    return (f"{std}\n\n{ctx}\n\n"
            f"请只输出一个JSON对象，不要任何解释或markdown代码块，格式严格如下：\n"
            f'{{"score":总分0到15的数字(可含.5),{dims},'
            f'"comment":"一句中文总评(50字内)","suggestions":["改进建议1","改进建议2"],'
            f'"errors":["指出的具体语言错误1","错误2"]}}')

def call_poe(model, prompt, result, idx):
    """调用单个 POE 模型，结果写入 result[idx]"""
    if not POE_KEY:
        result[idx] = {"_model": model, "_error": "未配置 POE_KEY（设环境变量或放 poe_key.txt）"}
        return
    try:
        body = json.dumps({
            "model": model,
            "messages": [{"role":"user","content":prompt}],
            "temperature": 0.2
        }).encode("utf-8")
        req = urllib.request.Request(POE_URL, data=body, headers={
            "Authorization": f"Bearer {POE_KEY}",
            "Content-Type": "application/json"
        })
        with urllib.request.urlopen(req, timeout=120) as r:
            data = json.loads(r.read().decode("utf-8"))
        content = data["choices"][0]["message"]["content"]
        # 剥离可能的 markdown 代码块
        m = re.search(r"\{[\s\S]*\}", content)
        parsed = json.loads(m.group(0)) if m else None
        if parsed and "score" in parsed:
            parsed["_model"] = model
            result[idx] = parsed
        else:
            result[idx] = {"_model": model, "_error": "解析失败", "_raw": content[:200]}
    except urllib.error.HTTPError as e:
        result[idx] = {"_model": model, "_error": f"HTTP {e.code}"}
    except Exception as e:
        result[idx] = {"_model": model, "_error": str(e)[:120]}

def _word_count(text):
    return len(re.findall(r"[A-Za-z\u4e00-\u9fff]+(?:'[A-Za-z]+)?", text or ""))


def heuristic_score(kind, payload):
    """POE 不可用时的离线启发式评分（0–15，与官方档位对齐的近似）"""
    text = (payload.get("text") or "").strip()
    wc = _word_count(text)
    if wc == 0:
        return {"score": 0, "comment": "未作答", "suggestions": ["请先完成作答"], "errors": []}

    if kind == "writing":
        min_w = int(payload.get("minWords") or 150)
        max_w = int(payload.get("maxWords") or 200)
        directions = payload.get("directions") or ""
        score = 6.0
        if wc >= min_w:
            score += 2.5
        elif wc >= min_w * 0.7:
            score += 1.0
        if wc > max_w:
            score -= 1.0
        first = directions.split('"')[1] if '"' in directions else ""
        if first and text.lower().startswith(first.lower()[:40]):
            score += 2.0
        sents = len(re.findall(r"[.!?]+", text))
        if sents >= 4:
            score += 1.5
        adv = len(re.findall(r"\b(however|therefore|moreover|furthermore|indispensable|crucial|significant)\b", text, re.I))
        score += min(adv * 0.4, 2.0)
        score = max(1.0, min(12.5, round(score, 1)))
        return {
            "score": score,
            "comment": f"离线启发式估分（{wc}词）：已按字数、开头句、段落与衔接词粗略评估，请对照范文自评。",
            "suggestions": ["对照参考范文检查论点与例子", "检查首句是否按要求照抄"],
            "errors": [],
        }

    reference = (payload.get("reference") or "").lower()
    points = payload.get("points") or []
    score = 6.0
    if wc >= 120:
        score += 2.5
    elif wc >= 80:
        score += 1.0
    ref_words = set(re.findall(r"[a-z]{4,}", reference))
    ans_words = set(re.findall(r"[a-z]{4,}", text.lower()))
    overlap = len(ref_words & ans_words)
    score += min(overlap / max(len(ref_words), 1) * 4.0, 4.0)
    hit = 0
    for p in points:
        tokens = re.findall(r"[a-z]{4,}", p.lower())
        if tokens and any(t in ans_words for t in tokens[:3]):
            hit += 1
    if points:
        score += min(hit / len(points) * 2.5, 2.5)
    score = max(1.0, min(12.0, round(score, 1)))
    return {
        "score": score,
        "comment": f"离线启发式估分（{wc}词）：已按字数、参考词重叠与采分点命中率粗略评估。",
        "suggestions": ["对照参考译文检查关键信息是否译出", "注意时态与主谓一致"],
        "errors": [],
    }


def score_with_models(kind, payload):
    """双模型并行评分 + 取平均；失败则离线启发式回退"""
    prompt = build_prompt(kind, payload)
    results = [None, None]
    threads = [threading.Thread(target=call_poe, args=(MODELS[i], prompt, results, i)) for i in range(2)]
    for t in threads: t.start()
    for t in threads: t.join()

    valid = [r for r in results if r and "score" in r]
    if not valid:
        h = heuristic_score(kind, payload)
        return {
            "ok": True,
            "source": "offline_heuristic",
            "avg_score": h["score"],
            "dims": {},
            "comments": [h.get("comment", "")],
            "suggestions": h.get("suggestions", []),
            "errors": h.get("errors", []),
            "models": [],
            "failed": [r for r in results if r and "_error" in r],
        }

    # 取平均（满分15）
    def avg(key):
        vals = [float(r[key]) for r in valid if isinstance(r.get(key),(int,float))]
        return round(sum(vals)/len(vals), 1) if vals else None
    avg_score = avg("score")
    # 收集各维度（取并集后平均）
    dim_keys = set()
    for r in valid: dim_keys |= {k for k,v in r.items() if isinstance(v,(int,float)) and k!="score"}
    dims = {k: avg(k) for k in dim_keys}
    comments = [r.get("comment","") for r in valid if r.get("comment")]
    suggestions, errors = [], []
    for r in valid:
        suggestions += r.get("suggestions",[]) or []
        errors += r.get("errors",[]) or []
    return {
        "ok": True,
        "source": "poe_dual",
        "avg_score": avg_score,           # 0-15 平均分
        "dims": dims,
        "comments": comments,
        "suggestions": suggestions[:5],
        "errors": errors[:6],
        "models": [{"model":r["_model"],"score":r.get("score"),
                    "comment":r.get("comment","")} for r in valid],
        "failed": [r for r in results if r and "_error" in r]
    }

class Handler(BaseHTTPRequestHandler):
    def log_message(self, *a): pass   # 静默
    def _cors(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
    def do_OPTIONS(self):
        self.send_response(204); self._cors(); self.end_headers()

    def do_GET(self):
        path = self.path.split("?")[0]
        if path == "/health":
            body = json.dumps({"ok": True, "service": "cet6-mock-exam", "port": PORT}).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self._cors(); self.end_headers(); self.wfile.write(body); return
        if path == "/": path = "/index.html"
        if path in WHITELIST:
            name = "index.html" if path == "/" else path.lstrip("/")
            fp = os.path.join(HERE, name)
            if os.path.isfile(fp):
                with open(fp, "rb") as f: data = f.read()
                self.send_response(200)
                self.send_header("Content-Type", WHITELIST.get(path,"text/html; charset=utf-8"))
                self.send_header("Content-Length", str(len(data)))
                self._cors(); self.end_headers(); self.wfile.write(data); return
        self.send_response(404); self._cors(); self.end_headers()
        self.wfile.write(b"404 Not Found")

    def do_POST(self):
        if self.path.split("?")[0] != "/api/score":
            self.send_response(404); self._cors(); self.end_headers(); return
        try:
            n = int(self.headers.get("Content-Length",0))
            payload = json.loads(self.rfile.read(n).decode("utf-8"))
            kind = payload.get("kind","writing")
            out = score_with_models(kind, payload)
        except Exception as e:
            out = {"ok": False, "error": str(e)[:200]}
        body = json.dumps(out, ensure_ascii=False).encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type","application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self._cors(); self.end_headers(); self.wfile.write(body)

if __name__ == "__main__":
    print(f"CET6 评分服务器启动: http://0.0.0.0:{PORT}")
    print(f"本机访问: http://127.0.0.1:{PORT}/index.html")
    print(f"局域网访问: http://<本机IP>:{PORT}/index.html")
    print(f"双模型: {MODELS}  (POE)")
    if POE_KEY:
        print(f"POE_KEY: 已加载 (****{POE_KEY[-4:]})")
    else:
        print("POE_KEY: 未配置 —— 将使用离线启发式评分。"
              "设置方式: 环境变量 POE_KEY，或在本目录放 poe_key.txt")
    ThreadingHTTPServer(("0.0.0.0", PORT), Handler).serve_forever()
