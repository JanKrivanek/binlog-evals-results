## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | **4.0/5** → 2.0/5 🔴 | **4.0/5** → 1.0/5 ⏰ 🔴 | ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, binlog-binlog_errors, binlog-binlog_assembly_conflicts, binlog-binlog_warnings, glob, binlog-binlog_projects, binlog-binlog_search, binlog-binlog_items, binlog-binlog_properties, binlog-binlog_files, binlog-binlog_tasks_in_target, binlog-binlog_task_details, binlog-binlog_search_files, binlog-binlog_evaluations, binlog-binlog_explain_property, binlog-binlog_evaluation_global_properties, binlog-binlog_evaluation_properties, binlog-binlog_compiler, binlog-binlog_project_targets, binlog-binlog_search_targets, binlog-binlog_assets / ⚠️ NOT ACTIVATED | — | ❌ |

> ⏰ **timeout** — run(s) hit the scenario timeout limit; scoring may be impacted by aborting model execution before it could produce its full output (increase via `timeout` in eval.yaml)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
