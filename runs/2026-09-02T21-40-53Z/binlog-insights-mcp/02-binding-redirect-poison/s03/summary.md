## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | 2.0/5 → 2.0/5 | 2.0/5 → **4.0/5** 🟢 | ✅ eval-mcp-assist; tools: skill, binlog-insights-binlog_overview, binlog-insights-binlog_errors, read_bash, stop_bash, binlog-insights-binlog_search, binlog-insights-binlog_list_files, binlog-insights-binlog_properties, binlog-insights-binlog_get_file, binlog-insights-binlog_evaluations, binlog-insights-binlog_task_details, glob, binlog-insights-binlog_items, binlog-insights-binlog_item_types, binlog-insights-binlog_search_tasks / ✅ eval-mcp-assist; tools: skill, binlog-insights-binlog_overview, binlog-insights-binlog_warnings, binlog-insights-binlog_errors, read_bash, stop_bash, binlog-insights-binlog_task_details, binlog-insights-binlog_list_files, binlog-insights-binlog_search, binlog-insights-binlog_get_file, binlog-insights-binlog_items, binlog-insights-binlog_properties | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -17.3% due to: completion (✓ → ✗), tokens (1627504 → 3233817), tool calls (37 → 79)

Model: claude-opus-5 | Judge: claude-opus-5
