# Binlog Eval Comparison — 2026-04-18 18:59 UTC

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
| Surface — Identify build error from binlog (missing file copy) | 5 | 5 | 5 | 5 |
| Analysis — Diagnose why a file copy failed during build | 5 | 5 | 2 | 1 |
| Insight — Determine which projects are in the solution vs referenced | 5 | 4 | 2 | 3 |

## MSB3277 Investigation: System.Diagnostics.DiagnosticSource Version Conflict

| Scenario | baronfel-mcp | binlog-insights-mcp | plain | skill-only |
|---|---|---|---|---|
| Surface — Extract MSB3277 assembly version conflict details | 5 | 5 | 5 | 3 |
| Insight — Inspect how RAR processes binding redirects across TFMs | 2 | 2 | 2 | 1 |
| Analysis — Find root cause of DiagnosticSource version conflict | 1 | 1 | 1 | 1 |

## DataSources Signing Failure — Root Cause & Fix

| Scenario | baronfel-mcp | binlog-insights-mcp | plain | skill-only |
|---|---|---|---|---|
| Insight — Inspect Distrib property across projects in signing build | 4 | 3 | 3 | 3 |
| Surface — Identify signing failure from binlog | 5 | 3 | 3 | 5 |
| Analysis — Diagnose why code signing fails with access denied | 3 | 3 | 3 | 3 |

## Overall Ranking

| Rank | Config | Total Score | Avg per Scenario |
|---|---|---|---|
| 1 | baronfel-mcp | 35 | 3.89 |
| 2 | binlog-insights-mcp | 31 | 3.44 |
| 3 | plain | 26 | 2.89 |
| 4 | skill-only | 25 | 2.78 |

## Metrics Summary

| Config | Case | Scenario | Tokens (In/Out) | Tool Calls | Turns | Wall Time |
|---|---|---|---|---|---|---|
| baronfel-mcp | 01-project-not-in-solution | Surface — Identify build error from binlog (missing file copy) | 69078/546 | 4 | 4 | 26.1s |
| binlog-insights-mcp | 01-project-not-in-solution | Surface — Identify build error from binlog (missing file copy) | 33752/521 | 3 | 2 | 31.5s |
| plain | 01-project-not-in-solution | Surface — Identify build error from binlog (missing file copy) | 92980/1266 | 7 | 7 | 62.7s |
| skill-only | 01-project-not-in-solution | Surface — Identify build error from binlog (missing file copy) | 97818/1346 | 7 | 7 | 56s |
| baronfel-mcp | 01-project-not-in-solution | Analysis — Diagnose why a file copy failed during build | 389284/7915 | 30 | 13 | 164.4s |
| binlog-insights-mcp | 01-project-not-in-solution | Analysis — Diagnose why a file copy failed during build | 361391/8947 | 28 | 12 | 190.4s |
| plain | 01-project-not-in-solution | Analysis — Diagnose why a file copy failed during build | 400406/9150 | 26 | 15 | 335.1s |
| skill-only | 01-project-not-in-solution | Analysis — Diagnose why a file copy failed during build | 2482899/10763 | 55 | 54 | 360.3s |
| baronfel-mcp | 01-project-not-in-solution | Insight — Determine which projects are in the solution vs referenced | 346456/6282 | 24 | 12 | 140.3s |
| binlog-insights-mcp | 01-project-not-in-solution | Insight — Determine which projects are in the solution vs referenced | 195669/4101 | 15 | 7 | 112.4s |
| plain | 01-project-not-in-solution | Insight — Determine which projects are in the solution vs referenced | 1133585/8101 | 44 | 33 | 306.6s |
| skill-only | 01-project-not-in-solution | Insight — Determine which projects are in the solution vs referenced | 292466/4024 | 20 | 12 | 113.2s |
| baronfel-mcp | 02-binding-redirect-poison | Surface — Extract MSB3277 assembly version conflict details | 125844/1230 | 7 | 7 | 46.4s |
| binlog-insights-mcp | 02-binding-redirect-poison | Surface — Extract MSB3277 assembly version conflict details | 121032/1487 | 10 | 6 | 48.2s |
| plain | 02-binding-redirect-poison | Surface — Extract MSB3277 assembly version conflict details | 107685/1524 | 8 | 8 | 56.4s |
| skill-only | 02-binding-redirect-poison | Surface — Extract MSB3277 assembly version conflict details | 147672/1823 | 10 | 10 | 60.8s |
| baronfel-mcp | 02-binding-redirect-poison | Insight — Inspect how RAR processes binding redirects across TFMs | 376294/5308 | 29 | 14 | 120.1s |
| binlog-insights-mcp | 02-binding-redirect-poison | Insight — Inspect how RAR processes binding redirects across TFMs | 396779/4442 | 26 | 12 | 109.2s |
| plain | 02-binding-redirect-poison | Insight — Inspect how RAR processes binding redirects across TFMs | 746011/8412 | 39 | 20 | 331.6s |
| skill-only | 02-binding-redirect-poison | Insight — Inspect how RAR processes binding redirects across TFMs | 4813506/21389 | 84 | 83 | 600.3s |
| baronfel-mcp | 02-binding-redirect-poison | Analysis — Find root cause of DiagnosticSource version conflict | 2310093/28933 | 65 | 42 | 600.6s |
| binlog-insights-mcp | 02-binding-redirect-poison | Analysis — Find root cause of DiagnosticSource version conflict | 2331190/30637 | 64 | 35 | 600.4s |
| plain | 02-binding-redirect-poison | Analysis — Find root cause of DiagnosticSource version conflict | 1356935/26370 | 39 | 33 | 601.1s |
| skill-only | 02-binding-redirect-poison | Analysis — Find root cause of DiagnosticSource version conflict | 1439126/25778 | 44 | 27 | 600.5s |
| baronfel-mcp | 03-shared-distrib-signing | Insight — Inspect Distrib property across projects in signing build | 225035/4079 | 22 | 9 | 84.4s |
| binlog-insights-mcp | 03-shared-distrib-signing | Insight — Inspect Distrib property across projects in signing build | 144385/3961 | 24 | 7 | 71.4s |
| plain | 03-shared-distrib-signing | Insight — Inspect Distrib property across projects in signing build | 466487/6088 | 33 | 19 | 140.9s |
| skill-only | 03-shared-distrib-signing | Insight — Inspect Distrib property across projects in signing build | 239598/3845 | 19 | 10 | 90s |
| baronfel-mcp | 03-shared-distrib-signing | Surface — Identify signing failure from binlog | 97820/969 | 7 | 5 | 29.1s |
| binlog-insights-mcp | 03-shared-distrib-signing | Surface — Identify signing failure from binlog | 114347/1344 | 11 | 6 | 35.4s |
| plain | 03-shared-distrib-signing | Surface — Identify signing failure from binlog | 288547/3329 | 19 | 18 | 106s |
| skill-only | 03-shared-distrib-signing | Surface — Identify signing failure from binlog | 278164/2231 | 13 | 13 | 66.3s |
| baronfel-mcp | 03-shared-distrib-signing | Analysis — Diagnose why code signing fails with access denied | 302591/5293 | 21 | 12 | 120.9s |
| binlog-insights-mcp | 03-shared-distrib-signing | Analysis — Diagnose why code signing fails with access denied | 237193/4387 | 22 | 10 | 95.8s |
| plain | 03-shared-distrib-signing | Analysis — Diagnose why code signing fails with access denied | 370362/4368 | 21 | 16 | 113.2s |
| skill-only | 03-shared-distrib-signing | Analysis — Diagnose why code signing fails with access denied | 620499/4839 | 25 | 25 | 140.6s |
