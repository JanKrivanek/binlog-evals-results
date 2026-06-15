# Binlog Eval Comparison — 2026-06-15 13:23 UTC

## Configurations

| ID | Config | Description |
|---|---|---|
| I | aitools-mcp | Copilot + Microsoft.AITools.BinlogMcp (dotnet/ai-tools MCP server) |
| C | baronfel-mcp | Copilot + baronfel.binlog.mcp |
| D | binlog-insights-mcp | Copilot + BinlogInsights.Mcp |
| H | binlog-mcp | Copilot + BinlogMcp (KirillOsenkov/MSBuildStructuredLog MCP server) |
| A | plain | Plain Copilot — no skills, no MCP |
| J | skill-mcp | Copilot + binlog-failure-analysis skill + Microsoft.AITools.BinlogMcp (matching dotnet/skills#673) |
| B | skill-only | Copilot + binlog-failure-analysis skill |

## Case 01: Project Not in Solution (Configuration Mismatch)

| Scenario | aitools-mcp | baronfel-mcp | binlog-insights-mcp | binlog-mcp | plain | skill-mcp | skill-only |
|---|---|---|---|---|---|---|---|
| Analysis — Diagnose why a file copy failed during build | N/A | N/A | N/A | N/A | 5 | N/A | N/A |
| Surface — Identify build error from binlog (missing file copy) | N/A | N/A | N/A | N/A | 4 | N/A | N/A |
| Deep — Full autonomous root cause investigation and fix proposal | N/A | N/A | N/A | N/A | 4 | N/A | N/A |
| Insight — Determine which projects are in the solution vs referenced | N/A | N/A | N/A | N/A | 2 | N/A | N/A |

## MSB3277 Investigation: System.Diagnostics.DiagnosticSource Version Conflict

| Scenario | aitools-mcp | baronfel-mcp | binlog-insights-mcp | binlog-mcp | plain | skill-mcp | skill-only |
|---|---|---|---|---|---|---|---|
| Deep — Full autonomous root cause investigation and fix proposal | N/A | N/A | N/A | N/A | 4 | N/A | N/A |
| Analysis — Find root cause of DiagnosticSource version conflict | N/A | N/A | N/A | N/A | 5 | N/A | N/A |
| Insight — Inspect how RAR processes binding redirects across TFMs | N/A | N/A | N/A | N/A | 2 | N/A | N/A |
| Surface — Extract MSB3277 assembly version conflict details | N/A | N/A | N/A | N/A | 4 | N/A | N/A |

## DataSources Signing Failure — Root Cause & Fix

| Scenario | aitools-mcp | baronfel-mcp | binlog-insights-mcp | binlog-mcp | plain | skill-mcp | skill-only |
|---|---|---|---|---|---|---|---|
| Insight — Inspect Distrib property across projects in signing build | N/A | N/A | N/A | N/A | 3 | N/A | N/A |
| Surface — Identify signing failure from binlog | N/A | N/A | N/A | N/A | 2 | N/A | N/A |
| Deep — Full autonomous root cause investigation and fix proposal | N/A | N/A | N/A | N/A | 3 | N/A | N/A |
| Analysis — Diagnose why code signing fails with access denied | N/A | N/A | N/A | N/A | 3 | N/A | N/A |

## Overall Ranking

| Rank | Config | Total Score | Avg per Scenario |
|---|---|---|---|
| 1 | plain | 41 | 3.42 |
| 2 | baronfel-mcp | 0 | 0 |
| 3 | aitools-mcp | 0 | 0 |
| 4 | binlog-insights-mcp | 0 | 0 |
| 5 | binlog-mcp | 0 | 0 |
| 6 | skill-mcp | 0 | 0 |
| 7 | skill-only | 0 | 0 |

## Metrics Summary

| Config | Case | Scenario | Tokens (In/Out) | Tool Calls | Turns | Wall Time |
|---|---|---|---|---|---|---|
| plain | 01-project-not-in-solution | Analysis — Diagnose why a file copy failed during build | 949800/15367 | 41 | 41 | 434.8s |
| plain | 01-project-not-in-solution | Surface — Identify build error from binlog (missing file copy) | 226098/3098 | 15 | 15 | 98.5s |
| plain | 01-project-not-in-solution | Deep — Full autonomous root cause investigation and fix proposal | 1402528/19310 | 46 | 40 | 475.2s |
| plain | 01-project-not-in-solution | Insight — Determine which projects are in the solution vs referenced | 562456/5628 | 33 | 26 | 290.9s |
| plain | 02-binding-redirect-poison | Deep — Full autonomous root cause investigation and fix proposal | 6374589/40839 | 106 | 104 | 1325s |
| plain | 02-binding-redirect-poison | Analysis — Find root cause of DiagnosticSource version conflict | 1674258/30479 | 48 | 48 | 859.6s |
| plain | 02-binding-redirect-poison | Insight — Inspect how RAR processes binding redirects across TFMs | 1668782/13326 | 50 | 50 | 436.2s |
| plain | 02-binding-redirect-poison | Surface — Extract MSB3277 assembly version conflict details | 110554/1293 | 8 | 8 | 50.6s |
| plain | 03-shared-distrib-signing | Insight — Inspect Distrib property across projects in signing build | 214462/3394 | 20 | 12 | 91.7s |
| plain | 03-shared-distrib-signing | Surface — Identify signing failure from binlog | 92460/1198 | 7 | 6 | 30.3s |
| plain | 03-shared-distrib-signing | Deep — Full autonomous root cause investigation and fix proposal | 2317953/19234 | 66 | 56 | 446.8s |
| plain | 03-shared-distrib-signing | Analysis — Diagnose why code signing fails with access denied | 165614/2911 | 11 | 10 | 76.9s |
## Deep Scenario Drill-Down

Detailed breakdown of the most complex scenario per case.

### 01-project-not-in-solution — Case 01: Project Not in Solution (Configuration Mismatch)

<details>
<summary><b>plain</b> — Score: 4</summary>

| Metric | Value |
|---|---|
| Input tokens | 1402528 |
| Output tokens | 19310 |
| Total tokens | 1421838 |
| Tool calls | 46 |
| Turns | 40 |
| Errors | 0 |
| Wall time | 475.2s |

**Rubric Scores:**

| Criterion | Score |
|---|---|
| Identified the specific error (MSB3030 in LrgWindowsFabricHost) with the exact missing file path | 5 |
| Traced the missing file to LrgWindowsAppManifest's output directory and noticed it was built under Debug, not Release | 5 |
| Verified that LrgWindowsAppManifest is referenced via ProjectReference but is NOT listed in the solution file | 5 |
| Explained the full causal chain: project absent from solution → MSBuild doesn't assign it the Release configuration → it uses Debug from a prior build → output lands in Debug path → copy from Release path fails | 4 |
| Cross-referenced multiple data points (solution project list, project configurations, output paths, ProjectReference declarations) to confirm the hypothesis | 5 |
| Proposed the specific fix: add LrgWindowsAppManifest to the solution file | 4 |
| Verified the fix would resolve the issue by confirming that adding the project to the solution would cause it to receive the Release configuration and produce output in the correct path | 3 |

**Judge reasoning:**

> The agent performed a thorough investigation of a binary log file, which is a non-trivial format to work with. It correctly identified the MSB3030 error, traced it to a configuration mismatch (Debug vs Release) caused by the manifest projects being absent from the solution configuration mapping, and proposed two valid fixes. The root cause chain is well-documented with specific evidence from the binlog. The investigation took many steps (46 tool calls) partly due to the difficulty of parsing binary log format, but the agent was persistent and methodical. The final report is well-structured and accurate. Minor deductions for: the somewhat lengthy investigation path, and the verification of the fix being more logical reasoning than empirical verification.

</details>

### 02-binding-redirect-poison — MSB3277 Investigation: System.Diagnostics.DiagnosticSource Version Conflict

<details>
<summary><b>plain</b> — Score: 4</summary>

| Metric | Value |
|---|---|
| Input tokens | 6374589 |
| Output tokens | 40839 |
| Total tokens | 6415428 |
| Tool calls | 106 |
| Turns | 104 |
| Errors | 0 |
| Wall time | 1325s |

**Rubric Scores:**

| Criterion | Score |
|---|---|
| Identified MSB3277 for System.Diagnostics.DiagnosticSource in DeviceConfigClient, specifically in the net8.0 target framework build | 5 |
| Discovered that the NuGet package ships different assembly versions per TFM: 10.0.0.0 for net8.0 and 10.0.0.3 for net472 | 4 |
| Found the App.config file with a binding redirect that specifies newVersion=10.0.0.3 | 3 |
| Traced how the AppConfigFile MSBuild property feeds into the ResolveAssemblyReference task for ALL target frameworks, including net8.0 where binding redirects don't apply | 4 |
| Explained that RAR reads the binding redirect and tries to unify to version 10.0.0.3, which conflicts with the actual net8.0 assembly version 10.0.0.0 | 4 |
| Noted that the error message is misleading — it claims other assemblies depend on 10.0.0.3, but this is an artifact of RAR applying the redirect before reporting | 3 |
| Proposed removing the hardcoded binding redirect from App.config as the specific fix, noting that AutoGenerateBindingRedirects handles this correctly for net472 | 4 |

**Judge reasoning:**

> The agent conducted a thorough investigation despite significant tooling challenges (binlogtool limitations, binary format issues). It correctly identified the failing project, target framework, error, root cause mechanism, and proposed a concrete fix. The main weakness is that the agent never actually read the App.config XML content (as explicitly requested in the task), instead inferring it from RAR behavior. The investigation was methodical but took many steps (106 tool calls) due to tooling difficulties. The final analysis is coherent, well-structured, and the proposed fix is appropriate. The agent's conclusions are well-supported by the evidence gathered.

</details>

### 03-shared-distrib-signing — DataSources Signing Failure — Root Cause & Fix

<details>
<summary><b>plain</b> — Score: 3</summary>

| Metric | Value |
|---|---|
| Input tokens | 2317953 |
| Output tokens | 19234 |
| Total tokens | 2337187 |
| Tool calls | 66 |
| Turns | 56 |
| Errors | 0 |
| Wall time | 446.8s |

**Rubric Scores:**

| Criterion | Score |
|---|---|
| Found the MSB3073 error in the DataSources project's signing step and identified the specific file(s) that failed | 5 |
| Traced the failing file to its origin — it was placed in the shared output folder by a different project (StorageLibrary or Common) | 4 |
| Discovered that multiple projects (Common, StorageLibrary, DataSources) all set their Distrib property to the same ConfigurationLinterService output path | 4 |
| Identified that CloudBuild's content-addressable store (CAS) places outputs as read-only hard links, making them unsignable by other projects' signing steps | 2 |
| Explained the non-deterministic nature: failure depends on which project's SignCopiedFiles target runs first and encounters files from other projects | 3 |
| Proposed removing Distrib and Robocopy from library projects (Common, StorageLibrary) so only the service project (DataSources or ConfigurationLinterService) owns the output folder | 4 |
| Verified the fix by confirming that with separated outputs, each project would only sign its own files | 3 |

**Judge reasoning:**

> The agent conducted a thorough investigation using creative approaches to parse the binlog (writing custom C# programs, using binlogtool). It correctly identified the error, the failing file, and the shared Distrib path pattern. However, it missed a key technical detail: the CAS/read-only hard link mechanism that makes files unsignable, instead attributing the issue to concurrent file locking. This is a significant gap since understanding the true root cause (read-only files from CAS) vs. the agent's theory (concurrent lock contention) changes the nature of the problem. The fix proposed is reasonable and would work, but the underlying reasoning about WHY 'Access is denied' occurs is incomplete. The investigation was methodical but took many steps (66 tool calls) to reach conclusions.

</details>

