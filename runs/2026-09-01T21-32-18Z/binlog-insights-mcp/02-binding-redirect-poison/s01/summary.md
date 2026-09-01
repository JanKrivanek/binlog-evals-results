## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Find root cause of DiagnosticSource version conflict | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-insights-binlog_overview, binlog-insights-binlog_errors, read_bash, stop_bash, binlog-insights-binlog_task_details, binlog-insights-binlog_list_files, binlog-insights-binlog_search, binlog-insights-binlog_get_file | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -24.0% due to: completion (✓ → ✗), tokens (690538 → 2792217), tool calls (24 → 50), time (285.6s → 459.2s)

Model: claude-opus-5 | Judge: claude-opus-5
