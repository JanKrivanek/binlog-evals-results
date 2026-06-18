## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why a file copy failed during build | 3.0/5 → **4.0/5** 🟢 | 3.0/5 → **5.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ✅ |
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | 4.0/5 → **5.0/5** 🟢 | 4.0/5 → **5.0/5** 🟢 | ✅ eval-mcp-assist; tools: skill, binlog-insights-binlog_overview, binlog-insights-binlog_errors, binlog-insights-binlog_projects, binlog-insights-binlog_task_details, binlog-insights-binlog_properties, binlog-insights-binlog_items, binlog-insights-binlog_list_files, binlog-insights-binlog_search, binlog-insights-binlog_project_targets, binlog-insights-binlog_get_file, binlog-insights-binlog_evaluations, binlog-insights-binlog_evaluation_global_properties, binlog-insights-binlog_evaluation_properties / ⚠️ NOT ACTIVATED | — | ✅ |
| eval-mcp-assist | Insight — Determine which projects are in the solution vs referenced | 2.0/5 → 2.0/5 | 2.0/5 → 2.0/5 | ⚠️ NOT ACTIVATED | — | ✅ |
| eval-mcp-assist | Surface — Identify build error from binlog (missing file copy) | 4.0/5 → **5.0/5** 🟢 | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED | — | ✅ |

Model: claude-opus-4.6 | Judge: claude-opus-4.6
