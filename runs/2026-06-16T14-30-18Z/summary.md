# Binlog Eval Comparison — 2026-06-16 14:30 UTC

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

## MSB3277 Investigation: System.Diagnostics.DiagnosticSource Version Conflict

| Scenario | aitools-mcp | baronfel-mcp | binlog-insights-mcp | binlog-mcp | plain | skill-mcp | skill-only |
|---|---|---|---|---|---|---|---|

## DataSources Signing Failure — Root Cause & Fix

| Scenario | aitools-mcp | baronfel-mcp | binlog-insights-mcp | binlog-mcp | plain | skill-mcp | skill-only |
|---|---|---|---|---|---|---|---|

## Overall Ranking

| Rank | Config | Total Score | Avg per Scenario |
|---|---|---|---|
| 1 | skill-mcp | 0 | 0 |
| 2 | baronfel-mcp | 0 | 0 |
| 3 | skill-only | 0 | 0 |
| 4 | binlog-insights-mcp | 0 | 0 |
| 5 | binlog-mcp | 0 | 0 |
| 6 | aitools-mcp | 0 | 0 |
| 7 | plain | 0 | 0 |

## Metrics Summary

| Config | Case | Scenario | Tokens (In/Out) | Tool Calls | Turns | Wall Time |
|---|---|---|---|---|---|---|
