## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Insight — Determine which projects are in the solution vs referenced | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-insights-binlog_overview, read_bash, glob, stop_bash, binlog-insights-binlog_errors, binlog-insights-binlog_projects, binlog-insights-binlog_project_targets, binlog-insights-binlog_properties, binlog-insights-binlog_evaluations, binlog-insights-binlog_task_details, binlog-insights-binlog_evaluation_global_properties, binlog-insights-binlog_evaluation_properties / ✅ eval-mcp-assist; tools: skill, binlog-insights-binlog_overview, binlog-insights-binlog_errors, binlog-insights-binlog_projects, binlog-insights-binlog_evaluations, binlog-insights-binlog_search, binlog-insights-binlog_evaluation_global_properties, binlog-insights-binlog_evaluation_properties, binlog-insights-binlog_properties, binlog-insights-binlog_project_targets, binlog-insights-binlog_items, binlog-insights-binlog_task_details | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -7.2% due to: tokens (309896 → 471053), quality, tool calls (11 → 18), time (120.1s → 185.9s)

Model: claude-opus-5 | Judge: claude-opus-5
