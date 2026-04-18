# Binlog Eval Comparison — 2026-04-18 22:00 UTC

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
| Analysis — Diagnose why a file copy failed during build | 3 | 5 | 2 | 3 |
| Surface — Identify build error from binlog (missing file copy) | 5 | 5 | 4 | 5 |
| Insight — Determine which projects are in the solution vs referenced | 3 | 2 | 1 | 2 |

## MSB3277 Investigation: System.Diagnostics.DiagnosticSource Version Conflict

| Scenario | baronfel-mcp | binlog-insights-mcp | plain | skill-only |
|---|---|---|---|---|
| Analysis — Find root cause of DiagnosticSource version conflict | 1 | 1 | 1 | 1 |
| Insight — Inspect how RAR processes binding redirects across TFMs | 2 | 2 | 2 | 3 |
| Surface — Extract MSB3277 assembly version conflict details | 4 | 5 | 4 | 4 |

## DataSources Signing Failure — Root Cause & Fix

| Scenario | baronfel-mcp | binlog-insights-mcp | plain | skill-only |
|---|---|---|---|---|
| Analysis — Diagnose why code signing fails with access denied | 4 | 3 | 4 | 3 |
| Surface — Identify signing failure from binlog | 5 | 5 | 5 | 5 |
| Insight — Inspect Distrib property across projects in signing build | 3 | 2 | 2 | 3 |

## Overall Ranking

| Rank | Config | Total Score | Avg per Scenario |
|---|---|---|---|
| 1 | baronfel-mcp | 30 | 3.33 |
| 2 | binlog-insights-mcp | 30 | 3.33 |
| 3 | skill-only | 29 | 3.22 |
| 4 | plain | 25 | 2.78 |

## Metrics Summary

| Config | Case | Scenario | Tokens (In/Out) | Tool Calls | Turns | Wall Time |
|---|---|---|---|---|---|---|
| baronfel-mcp | 01-project-not-in-solution | Analysis — Diagnose why a file copy failed during build | 424831/6709 | 32 | 14 | 141.7s |
| binlog-insights-mcp | 01-project-not-in-solution | Analysis — Diagnose why a file copy failed during build | 700805/15525 | 41 | 16 | 334.9s |
| plain | 01-project-not-in-solution | Analysis — Diagnose why a file copy failed during build | 1090726/7069 | 43 | 34 | 360.9s |
| skill-only | 01-project-not-in-solution | Analysis — Diagnose why a file copy failed during build | 1497508/10258 | 47 | 35 | 271.3s |
| baronfel-mcp | 01-project-not-in-solution | Surface — Identify build error from binlog (missing file copy) | 69087/597 | 4 | 4 | 30.9s |
| binlog-insights-mcp | 01-project-not-in-solution | Surface — Identify build error from binlog (missing file copy) | 33760/494 | 3 | 2 | 28.1s |
| plain | 01-project-not-in-solution | Surface — Identify build error from binlog (missing file copy) | 254167/2687 | 16 | 16 | 102.2s |
| skill-only | 01-project-not-in-solution | Surface — Identify build error from binlog (missing file copy) | 97743/1308 | 7 | 7 | 59s |
| baronfel-mcp | 01-project-not-in-solution | Insight — Determine which projects are in the solution vs referenced | 250270/4711 | 16 | 10 | 129.8s |
| binlog-insights-mcp | 01-project-not-in-solution | Insight — Determine which projects are in the solution vs referenced | 79447/1718 | 8 | 4 | 68.2s |
| plain | 01-project-not-in-solution | Insight — Determine which projects are in the solution vs referenced | 1086761/7310 | 45 | 34 | 360.2s |
| skill-only | 01-project-not-in-solution | Insight — Determine which projects are in the solution vs referenced | 207300/2538 | 13 | 10 | 76.5s |
| baronfel-mcp | 02-binding-redirect-poison | Analysis — Find root cause of DiagnosticSource version conflict | 2563329/27182 | 67 | 49 | 600.4s |
| binlog-insights-mcp | 02-binding-redirect-poison | Analysis — Find root cause of DiagnosticSource version conflict | 3014115/26391 | 72 | 46 | 600.5s |
| plain | 02-binding-redirect-poison | Analysis — Find root cause of DiagnosticSource version conflict | 956492/27610 | 34 | 23 | 600.3s |
| skill-only | 02-binding-redirect-poison | Analysis — Find root cause of DiagnosticSource version conflict | 3317467/26496 | 58 | 45 | 600.7s |
| baronfel-mcp | 02-binding-redirect-poison | Insight — Inspect how RAR processes binding redirects across TFMs | 876464/11969 | 51 | 25 | 253.7s |
| binlog-insights-mcp | 02-binding-redirect-poison | Insight — Inspect how RAR processes binding redirects across TFMs | 222867/4984 | 24 | 8 | 114.7s |
| plain | 02-binding-redirect-poison | Insight — Inspect how RAR processes binding redirects across TFMs | 522467/7754 | 38 | 15 | 264.5s |
| skill-only | 02-binding-redirect-poison | Insight — Inspect how RAR processes binding redirects across TFMs | 844786/14285 | 54 | 21 | 316.6s |
| baronfel-mcp | 02-binding-redirect-poison | Surface — Extract MSB3277 assembly version conflict details | 161682/1486 | 9 | 9 | 81.4s |
| binlog-insights-mcp | 02-binding-redirect-poison | Surface — Extract MSB3277 assembly version conflict details | 77709/1092 | 8 | 4 | 38.8s |
| plain | 02-binding-redirect-poison | Surface — Extract MSB3277 assembly version conflict details | 173308/2258 | 11 | 11 | 60.3s |
| skill-only | 02-binding-redirect-poison | Surface — Extract MSB3277 assembly version conflict details | 103950/1648 | 9 | 7 | 58.9s |
| baronfel-mcp | 03-shared-distrib-signing | Analysis — Diagnose why code signing fails with access denied | 221046/4326 | 19 | 9 | 91.3s |
| binlog-insights-mcp | 03-shared-distrib-signing | Analysis — Diagnose why code signing fails with access denied | 254630/3303 | 21 | 10 | 75.8s |
| plain | 03-shared-distrib-signing | Analysis — Diagnose why code signing fails with access denied | 652618/9114 | 27 | 25 | 217s |
| skill-only | 03-shared-distrib-signing | Analysis — Diagnose why code signing fails with access denied | 800676/7928 | 33 | 29 | 184.1s |
| baronfel-mcp | 03-shared-distrib-signing | Surface — Identify signing failure from binlog | 96862/956 | 6 | 5 | 27.8s |
| binlog-insights-mcp | 03-shared-distrib-signing | Surface — Identify signing failure from binlog | 164613/1981 | 12 | 8 | 44.8s |
| plain | 03-shared-distrib-signing | Surface — Identify signing failure from binlog | 341620/3823 | 23 | 21 | 108.8s |
| skill-only | 03-shared-distrib-signing | Surface — Identify signing failure from binlog | 163269/1670 | 9 | 9 | 47.9s |
| baronfel-mcp | 03-shared-distrib-signing | Insight — Inspect Distrib property across projects in signing build | 148469/3221 | 18 | 7 | 64.1s |
| binlog-insights-mcp | 03-shared-distrib-signing | Insight — Inspect Distrib property across projects in signing build | 71581/1213 | 7 | 4 | 27.6s |
| plain | 03-shared-distrib-signing | Insight — Inspect Distrib property across projects in signing build | 211126/7995 | 14 | 13 | 173.2s |
| skill-only | 03-shared-distrib-signing | Insight — Inspect Distrib property across projects in signing build | 437780/4856 | 26 | 13 | 105.2s |
