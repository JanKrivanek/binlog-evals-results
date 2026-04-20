# Binlog Eval Comparison — 2026-04-20 10:17 UTC

## Configurations

| ID | Config | Description |
|---|---|---|
| C | baronfel-mcp | Copilot + baronfel.binlog.mcp |
| D | binlog-insights-mcp | Copilot + BinlogInsights.Mcp |
| A | plain | Plain Copilot — no skills, no MCP |
| B | skill-only | Copilot + binlog-failure-analysis skill |

## Case 01: Project Not in Solution (Configuration Mismatch)

| Scenario | baronfel-mcp | binlog-insights-mcp | plain | skill-only |
|---|---|---|---|---|
| Insight — Determine which projects are in the solution vs referenced | 5 | 4 | 3 | 3 |
| Deep — Full autonomous root cause investigation and fix proposal | 5 | 5 | 5 | 5 |
| Surface — Identify build error from binlog (missing file copy) | 4 | 5 | 4 | 5 |
| Analysis — Diagnose why a file copy failed during build | 5 | 5 | 5 | 5 |

## MSB3277 Investigation: System.Diagnostics.DiagnosticSource Version Conflict

| Scenario | baronfel-mcp | binlog-insights-mcp | plain | skill-only |
|---|---|---|---|---|
| Surface — Extract MSB3277 assembly version conflict details | 4 | 5 | N/A | 5 |
| Analysis — Find root cause of DiagnosticSource version conflict | 5 | 4 | N/A | 4 |
| Deep — Full autonomous root cause investigation and fix proposal | 4 | 5 | N/A | 4 |
| Insight — Inspect how RAR processes binding redirects across TFMs | 2 | 2 | N/A | 2 |

## DataSources Signing Failure — Root Cause & Fix

| Scenario | baronfel-mcp | binlog-insights-mcp | plain | skill-only |
|---|---|---|---|---|
| Surface — Identify signing failure from binlog | 5 | 4 | 3 | 5 |
| Deep — Full autonomous root cause investigation and fix proposal | 3 | 3 | 4 | 3 |
| Insight — Inspect Distrib property across projects in signing build | 3 | 3 | 4 | 3 |
| Analysis — Diagnose why code signing fails with access denied | 2 | 2 | 2 | 3 |

## Overall Ranking

| Rank | Config | Total Score | Avg per Scenario |
|---|---|---|---|
| 1 | baronfel-mcp | 47 | 3.92 |
| 2 | skill-only | 47 | 3.92 |
| 3 | binlog-insights-mcp | 47 | 3.92 |
| 4 | plain | 30 | 3.75 |

## Metrics Summary

| Config | Case | Scenario | Tokens (In/Out) | Tool Calls | Turns | Wall Time |
|---|---|---|---|---|---|---|
| baronfel-mcp | 01-project-not-in-solution | Insight — Determine which projects are in the solution vs referenced | 197316/3900 | 17 | 9 | 92.8s |
| binlog-insights-mcp | 01-project-not-in-solution | Insight — Determine which projects are in the solution vs referenced | 156704/3419 | 16 | 6 | 85.9s |
| plain | 01-project-not-in-solution | Insight — Determine which projects are in the solution vs referenced | 227641/5662 | 18 | 14 | 136s |
| skill-only | 01-project-not-in-solution | Insight — Determine which projects are in the solution vs referenced | 124916/1951 | 10 | 7 | 68.3s |
| baronfel-mcp | 01-project-not-in-solution | Deep — Full autonomous root cause investigation and fix proposal | 1096881/14589 | 57 | 26 | 306.6s |
| binlog-insights-mcp | 01-project-not-in-solution | Deep — Full autonomous root cause investigation and fix proposal | 802264/9919 | 35 | 17 | 220.5s |
| plain | 01-project-not-in-solution | Deep — Full autonomous root cause investigation and fix proposal | 1528559/24858 | 64 | 36 | 632.3s |
| skill-only | 01-project-not-in-solution | Deep — Full autonomous root cause investigation and fix proposal | 1338112/12977 | 52 | 28 | 303.2s |
| baronfel-mcp | 01-project-not-in-solution | Surface — Identify build error from binlog (missing file copy) | 51316/435 | 3 | 3 | 17.9s |
| binlog-insights-mcp | 01-project-not-in-solution | Surface — Identify build error from binlog (missing file copy) | 51213/609 | 5 | 3 | 28.8s |
| plain | 01-project-not-in-solution | Surface — Identify build error from binlog (missing file copy) | 86318/1079 | 6 | 6 | 40.3s |
| skill-only | 01-project-not-in-solution | Surface — Identify build error from binlog (missing file copy) | 97703/1270 | 7 | 7 | 51.9s |
| baronfel-mcp | 01-project-not-in-solution | Analysis — Diagnose why a file copy failed during build | 678179/7637 | 35 | 20 | 169.1s |
| binlog-insights-mcp | 01-project-not-in-solution | Analysis — Diagnose why a file copy failed during build | 210539/6578 | 23 | 8 | 143.1s |
| plain | 01-project-not-in-solution | Analysis — Diagnose why a file copy failed during build | 1456526/18937 | 50 | 40 | 554.2s |
| skill-only | 01-project-not-in-solution | Analysis — Diagnose why a file copy failed during build | 1978317/11654 | 50 | 37 | 315.7s |
| baronfel-mcp | 02-binding-redirect-poison | Surface — Extract MSB3277 assembly version conflict details | 109951/1156 | 7 | 6 | 37s |
| binlog-insights-mcp | 02-binding-redirect-poison | Surface — Extract MSB3277 assembly version conflict details | 59262/932 | 5 | 3 | 28.8s |
| skill-only | 02-binding-redirect-poison | Surface — Extract MSB3277 assembly version conflict details | 131834/1877 | 11 | 9 | 62.9s |
| baronfel-mcp | 02-binding-redirect-poison | Analysis — Find root cause of DiagnosticSource version conflict | 3630602/22411 | 83 | 61 | 524.3s |
| binlog-insights-mcp | 02-binding-redirect-poison | Analysis — Find root cause of DiagnosticSource version conflict | 2468282/22612 | 69 | 47 | 479.2s |
| skill-only | 02-binding-redirect-poison | Analysis — Find root cause of DiagnosticSource version conflict | 6561202/27243 | 103 | 98 | 727.6s |
| baronfel-mcp | 02-binding-redirect-poison | Deep — Full autonomous root cause investigation and fix proposal | 8647946/59280 | 152 | 111 | 1273.8s |
| binlog-insights-mcp | 02-binding-redirect-poison | Deep — Full autonomous root cause investigation and fix proposal | 4712971/39097 | 89 | 58 | 804.2s |
| skill-only | 02-binding-redirect-poison | Deep — Full autonomous root cause investigation and fix proposal | 5796491/32963 | 105 | 69 | 743.4s |
| baronfel-mcp | 02-binding-redirect-poison | Insight — Inspect how RAR processes binding redirects across TFMs | 914447/8326 | 41 | 24 | 182.5s |
| binlog-insights-mcp | 02-binding-redirect-poison | Insight — Inspect how RAR processes binding redirects across TFMs | 492748/7438 | 39 | 16 | 142.3s |
| skill-only | 02-binding-redirect-poison | Insight — Inspect how RAR processes binding redirects across TFMs | 2479989/13999 | 72 | 52 | 345.7s |
| baronfel-mcp | 03-shared-distrib-signing | Surface — Identify signing failure from binlog | 118241/1055 | 7 | 6 | 27.5s |
| binlog-insights-mcp | 03-shared-distrib-signing | Surface — Identify signing failure from binlog | 132910/1627 | 12 | 7 | 43.7s |
| plain | 03-shared-distrib-signing | Surface — Identify signing failure from binlog | 135948/2207 | 12 | 10 | 50.8s |
| skill-only | 03-shared-distrib-signing | Surface — Identify signing failure from binlog | 200433/2134 | 12 | 12 | 64.4s |
| baronfel-mcp | 03-shared-distrib-signing | Deep — Full autonomous root cause investigation and fix proposal | 2744367/23166 | 91 | 49 | 485s |
| binlog-insights-mcp | 03-shared-distrib-signing | Deep — Full autonomous root cause investigation and fix proposal | 1043784/13782 | 49 | 23 | 277.2s |
| plain | 03-shared-distrib-signing | Deep — Full autonomous root cause investigation and fix proposal | 2084824/22167 | 73 | 40 | 469.7s |
| skill-only | 03-shared-distrib-signing | Deep — Full autonomous root cause investigation and fix proposal | 1197226/14205 | 55 | 22 | 309.1s |
| baronfel-mcp | 03-shared-distrib-signing | Insight — Inspect Distrib property across projects in signing build | 169138/2759 | 17 | 8 | 58.2s |
| binlog-insights-mcp | 03-shared-distrib-signing | Insight — Inspect Distrib property across projects in signing build | 154282/3665 | 18 | 7 | 73.4s |
| plain | 03-shared-distrib-signing | Insight — Inspect Distrib property across projects in signing build | 457770/7725 | 32 | 19 | 177.5s |
| skill-only | 03-shared-distrib-signing | Insight — Inspect Distrib property across projects in signing build | 371916/5110 | 25 | 13 | 118.9s |
| baronfel-mcp | 03-shared-distrib-signing | Analysis — Diagnose why code signing fails with access denied | 157263/3632 | 16 | 7 | 73.1s |
| binlog-insights-mcp | 03-shared-distrib-signing | Analysis — Diagnose why code signing fails with access denied | 306798/3985 | 20 | 11 | 94.3s |
| plain | 03-shared-distrib-signing | Analysis — Diagnose why code signing fails with access denied | 203399/2698 | 9 | 9 | 83.9s |
| skill-only | 03-shared-distrib-signing | Analysis — Diagnose why code signing fails with access denied | 915885/5963 | 31 | 31 | 178.6s |
