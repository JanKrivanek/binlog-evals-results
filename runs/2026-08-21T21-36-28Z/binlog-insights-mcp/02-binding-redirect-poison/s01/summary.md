## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Find root cause of DiagnosticSource version conflict | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-insights-binlog_overview, binlog-insights-binlog_errors, glob, read_bash, stop_bash, binlog-insights-binlog_list_files, binlog-insights-binlog_search, binlog-insights-binlog_task_details, binlog-insights-binlog_get_file, binlog-insights-binlog_compiler / ✅ eval-mcp-assist; tools: skill, binlog-insights-binlog_overview, binlog-insights-binlog_errors, read_bash, stop_bash, binlog-insights-binlog_list_files, binlog-insights-binlog_properties, binlog-insights-binlog_task_details, binlog-insights-binlog_search, binlog-insights-binlog_get_file, binlog-insights-binlog_search_tasks | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -25.0% due to: completion (✓ → ✗), tokens (735080 → 4234423), tool calls (23 → 78), time (227.8s → 590.1s)

Model: claude-opus-5 | Judge: claude-opus-5
