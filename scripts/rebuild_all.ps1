# 完整重建流水线：阅读/听力解析 → POE 答案与脚本 → 合并题库 → 校验
# 用法（在 F:\六级 目录）:
#   powershell -File scripts/rebuild_all.ps1
#   powershell -File scripts/rebuild_all.ps1 -SkipPoe   # 跳过 POE 步骤（仅解析 + 合并）
#   powershell -File scripts/rebuild_all.ps1 -TranslationsOnly  # 仅补新卷参考译文
param(
    [switch]$SkipPoe,
    [switch]$TranslationsOnly
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
Set-Location (Split-Path $PSScriptRoot -Parent)

function Invoke-Step($label, $cmd) {
    Write-Host ""
    Write-Host "==> $label"
    Invoke-Expression $cmd
    if ($LASTEXITCODE -ne 0) { throw "Failed: $label" }
}

if ($TranslationsOnly) {
    Invoke-Step "补全英文参考译文 (08)" "python scripts/08_build_translation_references.py"
    Invoke-Step "合并题库 (07)" "python scripts/07_build_exam_bank.py"
    Invoke-Step "校验 (09)" "node scripts/09_validate_exam_bank.js"
    Write-Host ""
    Write-Host "OK translations-only rebuild complete."
    exit 0
}

Invoke-Step "解析阅读 Part III (10)" "python scripts/10_parse_reading_from_txt.py"

if (-not $SkipPoe) {
    Invoke-Step "POE 阅读答案 (11)" "python scripts/11_build_reading_answers.py"
} else {
    Write-Host "==> 跳过 POE 阅读答案 (11)"
}

Invoke-Step "解析听力 Part II (12)" "python scripts/12_parse_listening_from_txt.py"

if (-not $SkipPoe) {
    Invoke-Step "POE 听力朗读脚本 (13)" "python scripts/13_generate_listening_scripts.py"
    Invoke-Step "POE 听力答案 (14)" "python scripts/14_build_listening_answers.py"
} else {
    Write-Host "==> 跳过 POE 听力脚本/答案 (13/14)"
}

Invoke-Step "合并 59 套题库 (07)" "python scripts/07_build_exam_bank.py"
Invoke-Step "校验题库 (09)" "node scripts/09_validate_exam_bank.js"

Write-Host ""
Write-Host "OK full rebuild complete."
