# CET6 mock exam - LAN server launcher (Windows)
$ErrorActionPreference = 'Stop'
$Here = Split-Path -Parent $MyInvocation.MyCommand.Path
$Python = if ($env:CET6_PYTHON) { $env:CET6_PYTHON } else { 'D:\Aodou\python.exe' }
$Port = 8765

if (-not (Test-Path -LiteralPath $Python)) {
    Write-Error "Python not found: $Python"
}

Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue |
    Select-Object -ExpandProperty OwningProcess -Unique |
    ForEach-Object { Stop-Process -Id $_ -Force -ErrorAction SilentlyContinue }

Start-Sleep -Seconds 1
Start-Process -FilePath $Python -ArgumentList 'server.py' -WorkingDirectory $Here -WindowStyle Hidden
Start-Sleep -Seconds 2

$ip = (Get-NetIPAddress -AddressFamily IPv4 -ErrorAction SilentlyContinue |
    Where-Object { $_.IPAddress -notmatch '^127\.' -and $_.PrefixOrigin -ne 'WellKnown' } |
    Select-Object -First 1 -ExpandProperty IPAddress)

Write-Host ""
Write-Host "CET6 server started on 0.0.0.0:$Port"
Write-Host "Local:  http://127.0.0.1:$Port/index.html"
if ($ip) { Write-Host "LAN:    http://${ip}:$Port/index.html" }
