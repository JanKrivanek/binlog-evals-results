## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Find root cause of DiagnosticSource version conflict | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ✅ eval-mcp-assist; tools: binlog-insights-binlog_errors, binlog-insights-binlog_overview, binlog-insights-binlog_search, binlog-insights-binlog_task_details, binlog-insights-binlog_list_files, binlog-insights-binlog_properties, binlog-insights-binlog_get_file, binlog-insights-binlog_preprocess, binlog-insights-binlog_warnings, binlog-insights-binlog_items, binlog-insights-binlog_item_types, binlog-insights-binlog_tasks_in_target, stop_bash, skill, binlog-insights-binlog_search_tasks, binlog-insights-binlog_evaluations, binlog-insights-binlog_evaluation_global_properties, binlog-insights-binlog_evaluation_properties, binlog-insights-binlog_nuget, binlog-insights-binlog_compiler / ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -3.9% due to: tokens (2325222 → 5323292), tool calls (50 → 130)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
