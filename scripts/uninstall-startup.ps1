<#
.SYNOPSIS
Stops and removes the Class 10 CBSE Study Hub PWA startup task (and optionally its firewall rule).
#>
[CmdletBinding()]
param(
    [string]$TaskName = 'Class10StudyHubPWA',

    [int]$Port = 4174,

    [switch]$RemoveFirewall
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

. (Join-Path $PSScriptRoot 'service-helpers.ps1')

Remove-ExistingScheduledTaskIfPresent -TaskName $TaskName
Stop-ExistingPortListener -Port $Port

if ($RemoveFirewall) {
    if (-not (Test-IsAdministrator)) {
        Write-Warning 'Skipping firewall rule removal because this shell is not running as Administrator.'
    } else {
        $firewallRuleName = "Class 10 Study Hub PWA (TCP $Port)"
        $existingRule = Get-NetFirewallRule -DisplayName $firewallRuleName -ErrorAction SilentlyContinue
        if ($existingRule) {
            Remove-NetFirewallRule -DisplayName $firewallRuleName
            Write-Host "Removed firewall rule '$firewallRuleName'."
        }
    }
}

Write-Host "Uninstall complete for '$TaskName'."
