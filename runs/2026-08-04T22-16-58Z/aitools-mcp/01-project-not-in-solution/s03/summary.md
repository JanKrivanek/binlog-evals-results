## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | 2.0/5 ⏰ → **5.0/5** 🟢 | 2.0/5 ⏰ → **5.0/5** 🟢 | ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, binlog-binlog_errors, glob, binlog-binlog_build_graph, binlog-binlog_projects, binlog-binlog_properties, binlog-binlog_search, binlog-binlog_items, binlog-binlog_files, binlog-binlog_evaluations, binlog-binlog_evaluation_global_properties, binlog-binlog_evaluation_properties, binlog-binlog_tasks_in_target, binlog-binlog_search_files, binlog-binlog_task_details, binlog-binlog_project_targets / ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, binlog-binlog_errors, glob, binlog-binlog_search, binlog-binlog_projects, binlog-binlog_items, binlog-binlog_tasks_in_target, binlog-binlog_task_details, binlog-binlog_properties, binlog-binlog_evaluations, binlog-binlog_project_targets, binlog-binlog_evaluation_global_properties, binlog-binlog_files, binlog-binlog_build_graph, binlog-binlog_explain_property, binlog-binlog_search_files, binlog-binlog_evaluation_properties | — | ✅ |

> ⏰ **timeout** — run(s) hit the scenario timeout limit; scoring may be impacted by aborting model execution before it could produce its full output (increase via `timeout` in eval.yaml)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
