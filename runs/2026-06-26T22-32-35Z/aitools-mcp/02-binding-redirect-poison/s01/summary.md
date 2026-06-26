## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Find root cause of DiagnosticSource version conflict | 1.0/5 ⏰ → **4.0/5** 🟢 | 1.0/5 ⏰ → **4.0/5** 🟢 | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: skill, binlog-binlog_assembly_conflicts, binlog-binlog_errors, binlog-binlog_warnings, binlog-binlog_projects, binlog-binlog_search, binlog-binlog_tasks_in_target, binlog-binlog_evaluations, binlog-binlog_task_details, binlog-binlog_search_files, binlog-binlog_files, binlog-binlog_properties, binlog-binlog_search_targets, binlog-binlog_explain_property, binlog-binlog_project_targets, binlog-binlog_items | — | ✅ |

> ⏰ **timeout** — run(s) hit the scenario timeout limit; scoring may be impacted by aborting model execution before it could produce its full output (increase via `timeout` in eval.yaml)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
