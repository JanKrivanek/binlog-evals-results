## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Deep — Full autonomous root-cause investigation and fix | 1.0/5 ⏰ → **4.0/5** 🟢 | 1.0/5 ⏰ → **3.0/5** 🟢 | ✅ eval-mcp-assist; tools: skill, binlog-insights-binlog_overview, binlog-insights-binlog_errors, glob, stop_bash, binlog-insights-binlog_properties, binlog-insights-binlog_projects, binlog-insights-binlog_evaluations, binlog-insights-binlog_evaluation_global_properties, binlog-insights-binlog_search, binlog-insights-binlog_list_files, binlog-insights-binlog_get_file, binlog-insights-binlog_compiler, binlog-insights-binlog_search_targets, binlog-insights-binlog_evaluation_properties / ✅ eval-mcp-assist; tools: skill, binlog-insights-binlog_overview, binlog-insights-binlog_errors, glob, view, binlog-insights-binlog_projects, binlog-insights-binlog_properties, binlog-insights-binlog_list_files, binlog-insights-binlog_get_file, binlog-insights-binlog_compiler, binlog-insights-binlog_search, binlog-insights-binlog_evaluations, binlog-insights-binlog_evaluation_global_properties, binlog-insights-binlog_search_tasks, binlog-insights-binlog_task_details, binlog-insights-binlog_items | — | ✅ |

> ⏰ **timeout** — run(s) hit the scenario timeout limit; scoring may be impacted by aborting model execution before it could produce its full output (increase via `timeout` in eval.yaml)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
