## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Insight — Determine which projects are in the solution vs referenced | **5.0/5** → 2.0/5 🔴 | **5.0/5** → 4.0/5 🔴 | ✅ eval-mcp-assist; tools: skill, binlog-insights-binlog_overview, binlog-insights-binlog_errors, binlog-insights-binlog_projects, binlog-insights-binlog_search_targets, binlog-insights-binlog_evaluations, read_bash, binlog-insights-binlog_evaluation_global_properties, binlog-insights-binlog_properties, binlog-insights-binlog_items / ✅ eval-mcp-assist; tools: skill, binlog-insights-binlog_overview, binlog-insights-binlog_projects, binlog-insights-binlog_errors, binlog-insights-binlog_search, binlog-insights-binlog_evaluations, binlog-insights-binlog_project_targets, binlog-insights-binlog_evaluation_global_properties, binlog-insights-binlog_properties, binlog-insights-binlog_task_details, binlog-insights-binlog_list_files, binlog-insights-binlog_get_file | — | ❌ |

Model: claude-opus-5 | Judge: claude-opus-5
