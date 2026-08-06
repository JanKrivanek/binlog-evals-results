## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, binlog-binlog_errors, glob, binlog-binlog_search, binlog-binlog_projects, binlog-binlog_build_graph, binlog-binlog_project_targets, binlog-binlog_items, binlog-binlog_files, binlog-binlog_properties, binlog-binlog_evaluations, binlog-binlog_tasks_in_target, binlog-binlog_evaluation_global_properties, binlog-binlog_task_details, binlog-binlog_evaluation_properties / ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, binlog-binlog_errors, glob, binlog-binlog_projects, binlog-binlog_items, binlog-binlog_search, binlog-binlog_properties, binlog-binlog_evaluations, binlog-binlog_tasks_in_target, binlog-binlog_evaluation_global_properties, binlog-binlog_task_details, binlog-binlog_evaluation_properties, binlog-binlog_files, binlog-binlog_explain_property, binlog-binlog_project_targets | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -4.6% due to: quality, tool calls (25 → 41), tokens (639929 → 786614)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
