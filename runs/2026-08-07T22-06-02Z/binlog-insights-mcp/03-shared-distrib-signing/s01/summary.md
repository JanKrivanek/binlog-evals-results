## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why code signing fails with access denied | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-insights-binlog_overview, binlog-insights-binlog_errors, binlog-insights-binlog_tasks_in_target, binlog-insights-binlog_search, binlog-insights-binlog_task_details, binlog-insights-binlog_items, binlog-insights-binlog_item_types, binlog-insights-binlog_list_files, binlog-insights-binlog_get_file, stop_bash, binlog-insights-binlog_properties, binlog-insights-binlog_project_targets / ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -6.8% due to: tokens (148094 → 492375), tool calls (8 → 35), time (54.7s → 139.1s)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
