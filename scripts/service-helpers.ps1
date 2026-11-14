<#
.SYNOPSIS
Shared Windows service/startup helpers for the Class 10 CBSE Study Hub PWA.
#>

function Test-IsAdministrator {
    $identity = [Security.Principal.WindowsIdentity]::GetCurrent()
    $principal = [Security.Principal.WindowsPrincipal]::new($identity)
    return $principal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
}

function Resolve-NodeExecutable {
    $cmd = Get-Command node.exe -ErrorAction SilentlyContinue
    if (-not $cmd) {
        $cmd = Get-Command node -ErrorAction SilentlyContinue
    }
    if (-not $cmd) {
        throw 'Node.js ("node.exe") was not found on PATH. Install Node.js LTS and retry.'
    }
    return $cmd.Source
}

function Stop-ExistingPortListener {
    param(
        [Parameter(Mandatory = $true)]
        [int]$Port
    )

    $listeners = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
    if (-not $listeners) {
        return
    }

    $pids = $listeners | Select-Object -ExpandProperty OwningProcess -Unique
    foreach ($procId in $pids) {
        if ($procId -le 4) { continue }
        $proc = Get-Process -Id $procId -ErrorAction SilentlyContinue
        if ($proc -and $proc.ProcessName -match '^node') {
            Write-Host "Stopping existing Node listener on port $Port (PID $procId)..."
            Stop-Process -Id $procId -Force -ErrorAction SilentlyContinue
        }
    }
    Start-Sleep -Milliseconds 400
}

function Remove-ExistingScheduledTaskIfPresent {
    param(
        [Parameter(Mandatory = $true)]
        [string]$TaskName
    )

    $existing = Get-ScheduledTask -TaskName $TaskName -ErrorAction SilentlyContinue
    if ($existing) {
        if ($existing.State -eq 'Running') {
            Write-Host "Stopping running scheduled task '$TaskName'..."
            Stop-ScheduledTask -TaskName $TaskName -ErrorAction SilentlyContinue
            Start-Sleep -Milliseconds 400
        }
        Write-Host "Removing existing scheduled task '$TaskName'..."
        Unregister-ScheduledTask -TaskName $TaskName -Confirm:$false
    }
}
