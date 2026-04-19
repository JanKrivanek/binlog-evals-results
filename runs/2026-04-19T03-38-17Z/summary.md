# Binlog Eval Comparison — 2026-04-19 03:38 UTC

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
| Surface — Identify build error from binlog (missing file copy) | 5 | 5 | 4 | 4 |
| Analysis — Diagnose why a file copy failed during build | 5 | 5 | 5 | 5 |
| Insight — Determine which projects are in the solution vs referenced | 3 | 1 | 1 | 3 |

## MSB3277 Investigation: System.Diagnostics.DiagnosticSource Version Conflict

| Scenario | baronfel-mcp | binlog-insights-mcp | plain | skill-only |
|---|---|---|---|---|
| Surface — Extract MSB3277 assembly version conflict details | 4 | 5 | 5 | 4 |
| Insight — Inspect how RAR processes binding redirects across TFMs | 2 | 2 | 2 | 2 |
| Analysis — Find root cause of DiagnosticSource version conflict | 1 | 1 | 2 | 1 |

## DataSources Signing Failure — Root Cause & Fix

| Scenario | baronfel-mcp | binlog-insights-mcp | plain | skill-only |
|---|---|---|---|---|
| Insight — Inspect Distrib property across projects in signing build | 3 | 2 | 4 | 3 |
| Surface — Identify signing failure from binlog | 5 | 3 | 3 | 5 |
| Analysis — Diagnose why code signing fails with access denied | 3 | 3 | 3 | 3 |

## Overall Ranking

| Rank | Config | Total Score | Avg per Scenario |
|---|---|---|---|
| 1 | baronfel-mcp | 31 | 3.44 |
| 2 | skill-only | 30 | 3.33 |
| 3 | plain | 29 | 3.22 |
| 4 | binlog-insights-mcp | 27 | 3 |

## Metrics Summary

| Config | Case | Scenario | Tokens (In/Out) | Tool Calls | Turns | Wall Time |
|---|---|---|---|---|---|---|
| baronfel-mcp | 01-project-not-in-solution | Surface — Identify build error from binlog (missing file copy) | 51328/456 | 3 | 3 | 17.9s |
| binlog-insights-mcp | 01-project-not-in-solution | Surface — Identify build error from binlog (missing file copy) | 51187/580 | 5 | 3 | 20s |
| plain | 01-project-not-in-solution | Surface — Identify build error from binlog (missing file copy) | 255708/3513 | 17 | 17 | 102.2s |
| skill-only | 01-project-not-in-solution | Surface — Identify build error from binlog (missing file copy) | 82476/1130 | 6 | 6 | 42.3s |
| baronfel-mcp | 01-project-not-in-solution | Analysis — Diagnose why a file copy failed during build | 602424/9221 | 28 | 15 | 185.4s |
| binlog-insights-mcp | 01-project-not-in-solution | Analysis — Diagnose why a file copy failed during build | 233950/5750 | 20 | 8 | 123s |
| plain | 01-project-not-in-solution | Analysis — Diagnose why a file copy failed during build | 1963534/14593 | 65 | 49 | 507.3s |
| skill-only | 01-project-not-in-solution | Analysis — Diagnose why a file copy failed during build | 450244/6394 | 28 | 15 | 152s |
| baronfel-mcp | 01-project-not-in-solution | Insight — Determine which projects are in the solution vs referenced | 360393/4591 | 20 | 15 | 113.1s |
| binlog-insights-mcp | 01-project-not-in-solution | Insight — Determine which projects are in the solution vs referenced | 86134/2106 | 10 | 4 | 54.4s |
| plain | 01-project-not-in-solution | Insight — Determine which projects are in the solution vs referenced | 268464/4710 | 18 | 17 | 138.9s |
| skill-only | 01-project-not-in-solution | Insight — Determine which projects are in the solution vs referenced | 826997/8300 | 35 | 23 | 222.1s |
| baronfel-mcp | 02-binding-redirect-poison | Surface — Extract MSB3277 assembly version conflict details | 126089/1233 | 7 | 7 | 32.4s |
| binlog-insights-mcp | 02-binding-redirect-poison | Surface — Extract MSB3277 assembly version conflict details | 59248/874 | 5 | 3 | 27.6s |
| plain | 02-binding-redirect-poison | Surface — Extract MSB3277 assembly version conflict details | 95170/1402 | 8 | 7 | 42.6s |
| skill-only | 02-binding-redirect-poison | Surface — Extract MSB3277 assembly version conflict details | 154691/1927 | 11 | 10 | 54.5s |
| baronfel-mcp | 02-binding-redirect-poison | Insight — Inspect how RAR processes binding redirects across TFMs | 1038390/10679 | 46 | 27 | 219.4s |
| binlog-insights-mcp | 02-binding-redirect-poison | Insight — Inspect how RAR processes binding redirects across TFMs | 286554/5441 | 28 | 11 | 109.9s |
| plain | 02-binding-redirect-poison | Insight — Inspect how RAR processes binding redirects across TFMs | 1088145/13475 | 52 | 31 | 378.5s |
| skill-only | 02-binding-redirect-poison | Insight — Inspect how RAR processes binding redirects across TFMs | 904570/12504 | 54 | 20 | 277.4s |
| baronfel-mcp | 02-binding-redirect-poison | Analysis — Find root cause of DiagnosticSource version conflict | 5706427/39147 | 106 | 82 | 900.4s |
| binlog-insights-mcp | 02-binding-redirect-poison | Analysis — Find root cause of DiagnosticSource version conflict | 4872915/45098 | 75 | 57 | 900.3s |
| plain | 02-binding-redirect-poison | Analysis — Find root cause of DiagnosticSource version conflict | 1543159/21964 | 46 | 34 | 475.9s |
| skill-only | 02-binding-redirect-poison | Analysis — Find root cause of DiagnosticSource version conflict | 6582746/38056 | 89 | 77 | 900.3s |
| baronfel-mcp | 03-shared-distrib-signing | Insight — Inspect Distrib property across projects in signing build | 162500/3845 | 19 | 7 | 70s |
| binlog-insights-mcp | 03-shared-distrib-signing | Insight — Inspect Distrib property across projects in signing build | 98020/2540 | 13 | 5 | 50.5s |
| plain | 03-shared-distrib-signing | Insight — Inspect Distrib property across projects in signing build | 259123/4261 | 24 | 13 | 97.6s |
| skill-only | 03-shared-distrib-signing | Insight — Inspect Distrib property across projects in signing build | 309500/3772 | 20 | 12 | 89.9s |
| baronfel-mcp | 03-shared-distrib-signing | Surface — Identify signing failure from binlog | 95393/1020 | 7 | 5 | 28.5s |
| binlog-insights-mcp | 03-shared-distrib-signing | Surface — Identify signing failure from binlog | 221292/1835 | 13 | 9 | 43.8s |
| plain | 03-shared-distrib-signing | Surface — Identify signing failure from binlog | 134837/1721 | 9 | 9 | 45s |
| skill-only | 03-shared-distrib-signing | Surface — Identify signing failure from binlog | 185062/1885 | 11 | 11 | 55.1s |
| baronfel-mcp | 03-shared-distrib-signing | Analysis — Diagnose why code signing fails with access denied | 202239/3892 | 16 | 9 | 88.9s |
| binlog-insights-mcp | 03-shared-distrib-signing | Analysis — Diagnose why code signing fails with access denied | 364020/3825 | 23 | 15 | 90.3s |
| plain | 03-shared-distrib-signing | Analysis — Diagnose why code signing fails with access denied | 282338/3292 | 16 | 14 | 86.1s |
| skill-only | 03-shared-distrib-signing | Analysis — Diagnose why code signing fails with access denied | 1070328/7620 | 36 | 36 | 195.4s |
