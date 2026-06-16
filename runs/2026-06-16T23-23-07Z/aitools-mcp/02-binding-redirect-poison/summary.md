## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Find root cause of DiagnosticSource version conflict | **5.0/5** → 3.0/5 🔴 | **5.0/5** → 4.0/5 🔴 | ✅ eval-mcp-assist; tools: skill, binlog-binlog_assembly_conflicts, binlog-binlog_errors, binlog-binlog_warnings, binlog-binlog_projects, binlog-binlog_search, binlog-binlog_tasks_in_target, binlog-binlog_task_details, binlog-binlog_evaluations, binlog-binlog_files, binlog-binlog_search_files, binlog-binlog_explain_property, binlog-binlog_project_targets, glob, binlog-binlog_items, binlog-binlog_properties / ✅ eval-mcp-assist; tools: skill, binlog-binlog_assembly_conflicts, binlog-binlog_errors, binlog-binlog_warnings, binlog-binlog_evaluations, binlog-binlog_search, binlog-binlog_tasks_in_target, binlog-binlog_task_details, binlog-binlog_projects, binlog-binlog_search_files, binlog-binlog_files, binlog-binlog_explain_property, binlog-binlog_properties, binlog-binlog_items, binlog-binlog_evaluation_global_properties, binlog-binlog_evaluation_properties | — | ❌ |
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | **3.0/5** → 2.0/5 🔴 | 3.0/5 → 3.0/5 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-mcp-assist | Insight — Inspect how RAR processes binding redirects across TFMs | **2.0/5** → 1.0/5 🔴 | 2.0/5 → 2.0/5 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-mcp-assist | Surface — Extract MSB3277 assembly version conflict details | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED | — | ✅ |

Model: claude-opus-4.6 | Judge: claude-opus-4.6
