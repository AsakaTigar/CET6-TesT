# 长线维护：从真题 txt + 参考译文库重建 questions.js
# 用法（在 F:\六级 目录）:
#   powershell -File scripts/rebuild_exam_bank.ps1
# 若新增真题 txt 且缺英文参考译文，先运行:
#   node scripts/_export_papers.js
#   python scripts/08_build_translation_references.py
Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
Set-Location (Split-Path $PSScriptRoot -Parent)

Write-Host "==> 重建 59 套题库 (questions.js) ..."
python scripts/07_build_exam_bank.py
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "==> 校验参考译文覆盖率 ..."
node -e "const fs=require('fs'); let c=fs.readFileSync('模拟考试/questions.js','utf8').replace('const EXAMS','var EXAMS'); eval(c); const miss=EXAMS.filter(e=>e.translation.reference.startsWith('（')); console.log('papers', EXAMS.length, 'missing refs', miss.length); if(miss.length) process.exit(1);"
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "OK rebuild complete."
