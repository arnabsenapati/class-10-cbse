<#
.SYNOPSIS
Registers the Class 10 CBSE Study Hub PWA to run silently in the background on Windows startup.

.DESCRIPTION
Supports two built-in Windows modes (no third-party NSSM/WinSW download required):
- BootService (default, requires Administrator): Runs hidden as NT AUTHORITY\SYSTEM at boot
  (even before user login), auto-restarts on failure, and adds the TCP port firewall rule.
- UserLogon (non-admin option): Runs as a scheduled background task when the current user logs on.

.EXAMPLE
powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\install-startup.ps1
powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\install-startup.ps1 -Mode UserLogon
#>
[CmdletBinding()]
param(
    [ValidateSet('BootService', 'UserLogon')]
    [string]$Mode = 'BootService',

    [string]$TaskName = 'Class10StudyHubPWA',

    [int]$Port = 4174,

    [switch]$SkipFirewall
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

. (Join-Path $PSScriptRoot 'service-helpers.ps1')

$projectRoot = Split-Path -Parent $PSScriptRoot
$runnerScript = Join-Path $PSScriptRoot 'service-runner.mjs'
$distIndex = Join-Path $projectRoot 'dist\index.html'
$firewallRuleName = "Class 10 Study Hub PWA (TCP $Port)"

if ($Mode -eq 'BootService' -and -not (Test-IsAdministrator)) {
    Write-Error (@"
Administrator privileges are required to register a system-boot service task ($TaskName) and add the Windows Firewall rule for port $Port.

Run this command in an Administrator PowerShell window:
  powershell -NoProfile -ExecutionPolicy Bypass -File "$PSCommandPath"

Or, to install only for your user login without Administrator privileges:
  powershell -NoProfile -ExecutionPolicy Bypass -File "$PSCommandPath" -Mode UserLogon
"@)
    exit 1
}

if (-not (Test-Path $runnerScript)) {
    throw "Service runner script not found at '$runnerScript'."
}

if (-not (Test-Path $distIndex)) {
    Write-Host 'Built dist/ folder not found. Running "npm run build" first...'
    $npmCmd = (Get-Command npm.cmd -ErrorAction Stop).Source
    Push-Location $projectRoot
    try {
        & $npmCmd run build
        if ($LASTEXITCODE -ne 0) {
            throw 'npm run build failed.'
        }
    } finally {
        Pop-Location
    }
}

$nodeExe = Resolve-NodeExecutable

Remove-ExistingScheduledTaskIfPresent -TaskName $TaskName
Stop-ExistingPortListener -Port $Port

$action = New-ScheduledTaskAction `
    -Execute $nodeExe `
    -Argument ('"' + $runnerScript + '" --port ' + $Port) `
    -WorkingDirectory $projectRoot

if ($Mode -eq 'BootService') {
    $trigger = New-ScheduledTaskTrigger -AtStartup
    $principal = New-ScheduledTaskPrincipal `
        -UserId 'NT AUTHORITY\SYSTEM' `
        -LogonType ServiceAccount `
        -RunLevel Highest
} else {
    $trigger = New-ScheduledTaskTrigger -AtLogOn -User $env:USERNAME
    $principal = New-ScheduledTaskPrincipal `
        -UserId "$env:USERDOMAIN\$env:USERNAME" `
        -LogonType Interactive `
        -RunLevel Limited
}

$settings = New-ScheduledTaskSettingsSet `
    -AllowStartIfOnBatteries `
    -DontStopIfGoingOnBatteries `
    -ExecutionTimeLimit ([TimeSpan]::Zero) `
    -RestartCount 10 `
    -RestartInterval (New-TimeSpan -Minutes 1) `
    -MultipleInstances IgnoreNew `
    -StartWhenAvailable `
    -Hidden

Register-ScheduledTask `
    -TaskName $TaskName `
    -Action $action `
    -Trigger $trigger `
    -Principal $principal `
    -Settings $settings `
    -Description "Serves Class 10 CBSE Study Hub PWA on 0.0.0.0:$Port ($Mode)." | Out-Null

Write-Host "Registered scheduled task '$TaskName' ($Mode)."

if ($Mode -eq 'BootService' -and -not $SkipFirewall) {
    $existingRule = Get-NetFirewallRule -DisplayName $firewallRuleName -ErrorAction SilentlyContinue
    if ($existingRule) {
        Remove-NetFirewallRule -DisplayName $firewallRuleName
    }
    New-NetFirewallRule `
        -DisplayName $firewallRuleName `
        -Direction Inbound `
        -Protocol TCP `
        -LocalPort $Port `
        -Action Allow `
        -Profile Any `
        -Description 'Allow inbound LAN access to Class 10 CBSE Study Hub PWA.' | Out-Null
    Write-Host "Configured Windows Firewall inbound TCP rule on port $Port."
}

Write-Host "Starting '$TaskName'..."
Start-ScheduledTask -TaskName $TaskName

$ready = $false
for ($attempt = 1; $attempt -le 15; $attempt++) {
    Start-Sleep -Milliseconds 500
    try {
        $response = Invoke-WebRequest -Uri "http://127.0.0.1:$Port/" -UseBasicParsing -TimeoutSec 2
        if ($response.StatusCode -eq 200) {
            $ready = $true
            break
        }
    } catch {
        # Wait for Node server startup
    }
}

if (-not $ready) {
    throw "Task '$TaskName' started, but http://127.0.0.1:$Port/ did not respond within timeout. Check logs\pwa-service.log."
}

Write-Host "SUCCESS: Class 10 CBSE Study Hub PWA is running on http://localhost:$Port/ and set to start automatically ($Mode)."
Write-Host "Logs: $(Join-Path $projectRoot 'logs\pwa-service.log')"
