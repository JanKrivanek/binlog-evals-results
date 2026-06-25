# Binlog Eval Comparison — 2026-06-25 16:26 UTC

## Configurations

| ID | Config | Description |
|---|---|---|
| I | aitools-mcp | Copilot + Microsoft.AITools.BinlogMcp (dotnet/ai-tools MCP server) |
| A | plain | Plain Copilot — no skills, no MCP |

## Case 04: Multi-Target API Availability (net472 missing runtime APIs)

| Scenario | aitools-mcp | plain |
|---|---|---|
| Surface — Extract build errors from a large multi-target failure | 3 | 3 |
| Analysis — Diagnose the root cause of the compiler errors | 4 | 4 |
| Deep — Full autonomous root-cause investigation and fix | 4 | 4 |
| Insight — Split the failures per target framework | 3 | 5 |

## Overall Ranking

| Rank | Config | Total Score | Avg per Scenario |
|---|---|---|---|
| 1 | plain | 16 | 4 |
| 2 | aitools-mcp | 14 | 3.5 |

## Metrics Summary

| Config | Case | Scenario | Tokens (In/Out) | Tool Calls | Turns | Wall Time |
|---|---|---|---|---|---|---|
| aitools-mcp | 04-multitarget-api-availability | Surface — Extract build errors from a large multi-target failure | 80219/1270 | 6 | 4 | 62.5s |
| plain | 04-multitarget-api-availability | Surface — Extract build errors from a large multi-target failure | 108574/1594 | 8 | 8 | 55.6s |
| aitools-mcp | 04-multitarget-api-availability | Analysis — Diagnose the root cause of the compiler errors | 798407/6279 | 36 | 20 | 210.4s |
| plain | 04-multitarget-api-availability | Analysis — Diagnose the root cause of the compiler errors | 314449/8197 | 16 | 15 | 261s |
| aitools-mcp | 04-multitarget-api-availability | Deep — Full autonomous root-cause investigation and fix | 2604863/14798 | 75 | 48 | 428.2s |
| plain | 04-multitarget-api-availability | Deep — Full autonomous root-cause investigation and fix | 938476/9607 | 34 | 32 | 315.1s |
| aitools-mcp | 04-multitarget-api-availability | Insight — Split the failures per target framework | 293108/5097 | 28 | 9 | 159.2s |
| plain | 04-multitarget-api-availability | Insight — Split the failures per target framework | 502261/7436 | 26 | 26 | 244.2s |
## Deep Scenario Drill-Down

Detailed breakdown of the most complex scenario per case.

### 04-multitarget-api-availability — Case 04: Multi-Target API Availability (net472 missing runtime APIs)

<details>
<summary><b>aitools-mcp</b> — Score: 4</summary>

| Metric | Value |
|---|---|
| Input tokens | 2604863 |
| Output tokens | 14798 |
| Total tokens | 2619661 |
| Tool calls | 75 |
| Turns | 48 |
| Errors | 0 |
| Wall time | 428.2s |

**Rubric Scores:**

| Criterion | Score |
|---|---|
| Summarized the failure accurately: ~167 distinct errors across net10.0 and net472 in FSharp.Compiler.ComponentTests | 4 |
| Grouped the errors into the dominant net472 root cause (missing .NET-only hot-reload APIs) plus a small set of real net10.0 type errors | 5 |
| Verified the net472 root cause via the per-framework attribution: all 64 FS0039 'not defined' errors are on net472, none on net10.0 | 5 |
| Explained the FS0039 -> FS0072 cascade (undefined base type -> inference failures at member access) | 4 |
| Proposed a concrete fix: exclude the HotReload tests from the net472 build (TargetFramework condition / #if NETCOREAPP / net-only test project), since the APIs are .NET-only | 5 |
| Separately called out fixing the ~8 genuine net10.0 type errors | 4 |
| Cross-referenced multiple data points (error codes, undefined symbol names, target frameworks, the HotReload source files) to confirm the conclusion | 5 |

**Judge reasoning:**

> The agent produced a thorough, well-structured investigation report with clear root-cause grouping backed by specific evidence from the binlog. It correctly identified the dominant issue (HotReload files compiled for net472 without TFM guards), verified it through multiple data points, and proposed concrete fixes with code examples. The investigation path was somewhat inefficient (75 tool calls, some file-finding issues), but the agent recovered well and the final output is comprehensive and accurate. The report format with error summary, root-cause grouping with evidence tables, and verified fixes is exactly what was requested.

</details>

<details>
<summary><b>plain</b> — Score: 4</summary>

| Metric | Value |
|---|---|
| Input tokens | 938476 |
| Output tokens | 9607 |
| Total tokens | 948083 |
| Tool calls | 34 |
| Turns | 32 |
| Errors | 0 |
| Wall time | 315.1s |

**Rubric Scores:**

| Criterion | Score |
|---|---|
| Summarized the failure accurately: ~167 distinct errors across net10.0 and net472 in FSharp.Compiler.ComponentTests | 4 |
| Grouped the errors into the dominant net472 root cause (missing .NET-only hot-reload APIs) plus a small set of real net10.0 type errors | 5 |
| Verified the net472 root cause via the per-framework attribution: all 64 FS0039 'not defined' errors are on net472, none on net10.0 | 5 |
| Explained the FS0039 -> FS0072 cascade (undefined base type -> inference failures at member access) | 4 |
| Proposed a concrete fix: exclude the HotReload tests from the net472 build (TargetFramework condition / #if NETCOREAPP / net-only test project), since the APIs are .NET-only | 5 |
| Separately called out fixing the ~8 genuine net10.0 type errors | 4 |
| Cross-referenced multiple data points (error codes, undefined symbol names, target frameworks, the HotReload source files) to confirm the conclusion | 5 |

**Judge reasoning:**

> The agent conducted a thorough and methodical investigation. It overcame initial tooling challenges (binlogtool didn't have an 'errors' command) by writing a custom C# program using MSBuild.StructuredLogger to parse the binlog properly. The final report is well-structured with clear error summary, root-cause grouping backed by specific evidence, and concrete fixes. The per-TF attribution is verified, the cascade mechanism is explained, and the fix is practical. Minor deductions: some error counts in the sub-groups don't perfectly reconcile (Root Causes B+C+D sum to more than 8), and the investigation took many steps with some false starts on tooling, but the final output is high quality and well-evidenced.

</details>

