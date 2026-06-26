# Binlog Eval Comparison — 2026-06-26 09:07 UTC

## Configurations

| ID | Config | Description |
|---|---|---|
| I | aitools-mcp | Copilot + Microsoft.AITools.BinlogMcp (dotnet/ai-tools MCP server) |
| A | plain | Plain Copilot — no skills, no MCP |

## Case 04: Multi-Target API Availability (net472 missing runtime APIs)

| Scenario | aitools-mcp | plain |
|---|---|---|
| Surface — Extract build errors from a large multi-target failure | 3 | 3 |
| Analysis — Diagnose the root cause of the compiler errors | 4 | 2 |
| Insight — Split the failures per target framework | 3 | 4 |
| Deep — Full autonomous root-cause investigation and fix | 4 | 2 |

## Overall Ranking

| Rank | Config | Total Score | Avg per Scenario |
|---|---|---|---|
| 1 | aitools-mcp | 14 | 3.5 |
| 2 | plain | 11 | 2.75 |

## Metrics Summary

| Config | Case | Scenario | Tokens (In/Out) | Tool Calls | Turns | Wall Time |
|---|---|---|---|---|---|---|
| aitools-mcp | 04-multitarget-api-availability | Surface — Extract build errors from a large multi-target failure | 163915/1060 | 8 | 8 | 86.4s |
| plain | 04-multitarget-api-availability | Surface — Extract build errors from a large multi-target failure | 190376/2757 | 13 | 13 | 131.2s |
| aitools-mcp | 04-multitarget-api-availability | Analysis — Diagnose the root cause of the compiler errors | 391164/4502 | 20 | 15 | 173.8s |
| plain | 04-multitarget-api-availability | Analysis — Diagnose the root cause of the compiler errors | 3600777/16443 | 84 | 83 | 600.3s |
| aitools-mcp | 04-multitarget-api-availability | Insight — Split the failures per target framework | 219504/5527 | 16 | 10 | 175.4s |
| plain | 04-multitarget-api-availability | Insight — Split the failures per target framework | 746515/12243 | 29 | 29 | 477.1s |
| aitools-mcp | 04-multitarget-api-availability | Deep — Full autonomous root-cause investigation and fix | 1608933/10332 | 60 | 40 | 302.2s |
| plain | 04-multitarget-api-availability | Deep — Full autonomous root-cause investigation and fix | 938377/17841 | 39 | 38 | 407s |
## Deep Scenario Drill-Down

Detailed breakdown of the most complex scenario per case.

### 04-multitarget-api-availability — Case 04: Multi-Target API Availability (net472 missing runtime APIs)

<details>
<summary><b>aitools-mcp</b> — Score: 4</summary>

| Metric | Value |
|---|---|
| Input tokens | 1608933 |
| Output tokens | 10332 |
| Total tokens | 1619265 |
| Tool calls | 60 |
| Turns | 40 |
| Errors | 0 |
| Wall time | 302.2s |

**Rubric Scores:**

| Criterion | Score |
|---|---|
| Summarized the failure accurately: ~167 distinct errors across net10.0 and net472 in FSharp.Compiler.ComponentTests | 4 |
| Grouped the errors into the dominant net472 root cause (missing .NET-only hot-reload APIs) plus a small set of real net10.0 type errors | 5 |
| Verified the net472 root cause via the per-framework attribution: all 64 FS0039 'not defined' errors are on net472, none on net10.0 | 4 |
| Explained the FS0039 -> FS0072 cascade (undefined base type -> inference failures at member access) | 4 |
| Proposed a concrete fix: exclude the HotReload tests from the net472 build (TargetFramework condition / #if NETCOREAPP / net-only test project), since the APIs are .NET-only | 5 |
| Separately called out fixing the ~8 genuine net10.0 type errors | 4 |
| Cross-referenced multiple data points (error codes, undefined symbol names, target frameworks, the HotReload source files) to confirm the conclusion | 4 |

**Judge reasoning:**

> The agent produced a well-structured, thorough investigation report. It correctly identified the dominant root cause (net472-incompatible APIs in HotReload tests), properly separated it from genuine cross-TFM type errors, provided specific evidence with file names and line numbers, explained error cascades, and proposed concrete fixes. The investigation process was methodical despite some wasted steps early on (trying to find temp files). The final report is clear, actionable, and well-evidenced. It loses a point from 5 because: the exact error counts per category aren't always precisely cited, and the investigation took 60 tool calls which suggests some inefficiency in the exploration phase.

</details>

<details>
<summary><b>plain</b> — Score: 2</summary>

| Metric | Value |
|---|---|
| Input tokens | 938377 |
| Output tokens | 17841 |
| Total tokens | 956218 |
| Tool calls | 39 |
| Turns | 38 |
| Errors | 0 |
| Wall time | 407s |

**Rubric Scores:**

| Criterion | Score |
|---|---|
| Summarized the failure accurately: ~167 distinct errors across net10.0 and net472 in FSharp.Compiler.ComponentTests | 2 |
| Grouped the errors into the dominant net472 root cause (missing .NET-only hot-reload APIs) plus a small set of real net10.0 type errors | 2 |
| Verified the net472 root cause via the per-framework attribution: all 64 FS0039 'not defined' errors are on net472, none on net10.0 | 2 |
| Explained the FS0039 -> FS0072 cascade (undefined base type -> inference failures at member access) | 3 |
| Proposed a concrete fix: exclude the HotReload tests from the net472 build (TargetFramework condition / #if NETCOREAPP / net-only test project), since the APIs are .NET-only | 4 |
| Separately called out fixing the ~8 genuine net10.0 type errors | 1 |
| Cross-referenced multiple data points (error codes, undefined symbol names, target frameworks, the HotReload source files) to confirm the conclusion | 3 |

**Judge reasoning:**

> The agent correctly identified the primary root cause (HotReload tests using .NET Core-only APIs compiled against net472) and proposed appropriate fixes. However, it severely undercounted errors (6 vs ~167), missed an entire category of net10.0 failures, and found only 1 FS0039 instance when there should be 64. The binary log parsing approach using regex on decompressed data was unreliable, leading to significant data loss. While the qualitative diagnosis was partially correct, the quantitative analysis was far off, and the completeness of the investigation falls well short of expectations.

</details>

