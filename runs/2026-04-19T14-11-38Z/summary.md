# Binlog Eval Comparison — 2026-04-19 14:11 UTC

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
| Deep — Full autonomous root cause investigation and fix proposal | 4 | 4 | 5 | 5 |
| Surface — Identify build error from binlog (missing file copy) | 4 | 5 | 5 | 4 |
| Analysis — Diagnose why a file copy failed during build | 5 | 5 | 3 | 5 |
| Insight — Determine which projects are in the solution vs referenced | 3 | 2 | 2 | 3 |

## MSB3277 Investigation: System.Diagnostics.DiagnosticSource Version Conflict

| Scenario | baronfel-mcp | binlog-insights-mcp | plain | skill-only |
|---|---|---|---|---|
| Deep — Full autonomous root cause investigation and fix proposal | 1 | 4 | 1 | 4 |
| Insight — Inspect how RAR processes binding redirects across TFMs | 2 | 2 | 2 | 2 |
| Analysis — Find root cause of DiagnosticSource version conflict | 4 | 4 | 5 | 4 |
| Surface — Extract MSB3277 assembly version conflict details | 4 | 4 | 4 | 5 |

## DataSources Signing Failure — Root Cause & Fix

| Scenario | baronfel-mcp | binlog-insights-mcp | plain | skill-only |
|---|---|---|---|---|
| Deep — Full autonomous root cause investigation and fix proposal | 3 | 3 | 3 | 2 |
| Insight — Inspect Distrib property across projects in signing build | 3 | 4 | 3 | 3 |
| Analysis — Diagnose why code signing fails with access denied | 3 | 3 | 3 | 3 |
| Surface — Identify signing failure from binlog | 5 | 5 | 4 | 5 |

## Overall Ranking

| Rank | Config | Total Score | Avg per Scenario |
|---|---|---|---|
| 1 | skill-only | 45 | 3.75 |
| 2 | binlog-insights-mcp | 45 | 3.75 |
| 3 | baronfel-mcp | 41 | 3.42 |
| 4 | plain | 40 | 3.33 |

## Metrics Summary

| Config | Case | Scenario | Tokens (In/Out) | Tool Calls | Turns | Wall Time |
|---|---|---|---|---|---|---|
| baronfel-mcp | 01-project-not-in-solution | Deep — Full autonomous root cause investigation and fix proposal | 275581/5965 | 30 | 10 | 113.5s |
| binlog-insights-mcp | 01-project-not-in-solution | Deep — Full autonomous root cause investigation and fix proposal | 848167/19939 | 41 | 20 | 375.9s |
| plain | 01-project-not-in-solution | Deep — Full autonomous root cause investigation and fix proposal | 2999500/36210 | 75 | 57 | 817.7s |
| skill-only | 01-project-not-in-solution | Deep — Full autonomous root cause investigation and fix proposal | 1016307/10806 | 43 | 25 | 244.6s |
| baronfel-mcp | 01-project-not-in-solution | Surface — Identify build error from binlog (missing file copy) | 69063/589 | 4 | 4 | 19.1s |
| binlog-insights-mcp | 01-project-not-in-solution | Surface — Identify build error from binlog (missing file copy) | 33756/506 | 3 | 2 | 18.3s |
| plain | 01-project-not-in-solution | Surface — Identify build error from binlog (missing file copy) | 54297/1046 | 4 | 4 | 31.1s |
| skill-only | 01-project-not-in-solution | Surface — Identify build error from binlog (missing file copy) | 82478/1210 | 6 | 6 | 38.7s |
| baronfel-mcp | 01-project-not-in-solution | Analysis — Diagnose why a file copy failed during build | 639908/7683 | 29 | 16 | 158.5s |
| binlog-insights-mcp | 01-project-not-in-solution | Analysis — Diagnose why a file copy failed during build | 411186/8106 | 27 | 12 | 167.7s |
| plain | 01-project-not-in-solution | Analysis — Diagnose why a file copy failed during build | 1921906/11259 | 52 | 48 | 379.4s |
| skill-only | 01-project-not-in-solution | Analysis — Diagnose why a file copy failed during build | 1871653/8945 | 45 | 45 | 244s |
| baronfel-mcp | 01-project-not-in-solution | Insight — Determine which projects are in the solution vs referenced | 139809/2893 | 13 | 6 | 60.2s |
| binlog-insights-mcp | 01-project-not-in-solution | Insight — Determine which projects are in the solution vs referenced | 85276/2206 | 8 | 4 | 60.6s |
| plain | 01-project-not-in-solution | Insight — Determine which projects are in the solution vs referenced | 374906/5054 | 24 | 15 | 154.9s |
| skill-only | 01-project-not-in-solution | Insight — Determine which projects are in the solution vs referenced | 133872/2083 | 12 | 8 | 60.9s |
| baronfel-mcp | 02-binding-redirect-poison | Deep — Full autonomous root cause investigation and fix proposal | 9090672/42662 | 159 | 112 | 900.1s |
| binlog-insights-mcp | 02-binding-redirect-poison | Deep — Full autonomous root cause investigation and fix proposal | 3298302/46184 | 70 | 43 | 891s |
| plain | 02-binding-redirect-poison | Deep — Full autonomous root cause investigation and fix proposal | 3689406/44250 | 93 | 58 | 900.7s |
| skill-only | 02-binding-redirect-poison | Deep — Full autonomous root cause investigation and fix proposal | 5299230/41336 | 104 | 60 | 865.5s |
| baronfel-mcp | 02-binding-redirect-poison | Insight — Inspect how RAR processes binding redirects across TFMs | 857907/10944 | 50 | 25 | 216.7s |
| binlog-insights-mcp | 02-binding-redirect-poison | Insight — Inspect how RAR processes binding redirects across TFMs | 335771/5524 | 30 | 12 | 109.4s |
| plain | 02-binding-redirect-poison | Insight — Inspect how RAR processes binding redirects across TFMs | 1063865/11708 | 55 | 28 | 270.2s |
| skill-only | 02-binding-redirect-poison | Insight — Inspect how RAR processes binding redirects across TFMs | 3774678/17087 | 74 | 72 | 429.6s |
| baronfel-mcp | 02-binding-redirect-poison | Analysis — Find root cause of DiagnosticSource version conflict | 2471857/17724 | 67 | 50 | 383.3s |
| binlog-insights-mcp | 02-binding-redirect-poison | Analysis — Find root cause of DiagnosticSource version conflict | 1902962/21636 | 58 | 34 | 447.7s |
| plain | 02-binding-redirect-poison | Analysis — Find root cause of DiagnosticSource version conflict | 1567974/24372 | 51 | 44 | 547.7s |
| skill-only | 02-binding-redirect-poison | Analysis — Find root cause of DiagnosticSource version conflict | 3686706/24972 | 77 | 63 | 585.8s |
| baronfel-mcp | 02-binding-redirect-poison | Surface — Extract MSB3277 assembly version conflict details | 129376/1153 | 7 | 7 | 37.4s |
| binlog-insights-mcp | 02-binding-redirect-poison | Surface — Extract MSB3277 assembly version conflict details | 77293/1000 | 8 | 4 | 28.3s |
| plain | 02-binding-redirect-poison | Surface — Extract MSB3277 assembly version conflict details | 107978/1553 | 8 | 8 | 43.4s |
| skill-only | 02-binding-redirect-poison | Surface — Extract MSB3277 assembly version conflict details | 103049/1400 | 7 | 7 | 45.9s |
| baronfel-mcp | 03-shared-distrib-signing | Deep — Full autonomous root cause investigation and fix proposal | 1197647/15520 | 58 | 25 | 298.5s |
| binlog-insights-mcp | 03-shared-distrib-signing | Deep — Full autonomous root cause investigation and fix proposal | 883720/13809 | 47 | 21 | 279.2s |
| plain | 03-shared-distrib-signing | Deep — Full autonomous root cause investigation and fix proposal | 2303806/19852 | 70 | 52 | 445.6s |
| skill-only | 03-shared-distrib-signing | Deep — Full autonomous root cause investigation and fix proposal | 1648742/14237 | 59 | 34 | 322.2s |
| baronfel-mcp | 03-shared-distrib-signing | Insight — Inspect Distrib property across projects in signing build | 173956/3617 | 17 | 8 | 70.1s |
| binlog-insights-mcp | 03-shared-distrib-signing | Insight — Inspect Distrib property across projects in signing build | 332795/5497 | 27 | 13 | 102s |
| plain | 03-shared-distrib-signing | Insight — Inspect Distrib property across projects in signing build | 363890/4217 | 28 | 16 | 98.3s |
| skill-only | 03-shared-distrib-signing | Insight — Inspect Distrib property across projects in signing build | 329711/5210 | 27 | 13 | 104.1s |
| baronfel-mcp | 03-shared-distrib-signing | Analysis — Diagnose why code signing fails with access denied | 304337/5073 | 22 | 11 | 112.4s |
| binlog-insights-mcp | 03-shared-distrib-signing | Analysis — Diagnose why code signing fails with access denied | 233813/4074 | 19 | 9 | 86.5s |
| plain | 03-shared-distrib-signing | Analysis — Diagnose why code signing fails with access denied | 788660/5303 | 30 | 30 | 140.8s |
| skill-only | 03-shared-distrib-signing | Analysis — Diagnose why code signing fails with access denied | 1011417/6765 | 35 | 35 | 164.6s |
| baronfel-mcp | 03-shared-distrib-signing | Surface — Identify signing failure from binlog | 98027/1025 | 7 | 5 | 24.9s |
| binlog-insights-mcp | 03-shared-distrib-signing | Surface — Identify signing failure from binlog | 584449/4710 | 36 | 23 | 88.4s |
| plain | 03-shared-distrib-signing | Surface — Identify signing failure from binlog | 323689/2999 | 22 | 21 | 81.7s |
| skill-only | 03-shared-distrib-signing | Surface — Identify signing failure from binlog | 159731/1611 | 9 | 9 | 43.8s |
