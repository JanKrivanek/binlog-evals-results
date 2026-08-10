## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Find root cause of DiagnosticSource version conflict | 5.0/5 → 5.0/5 | **5.0/5** → 4.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | **3.0/5** → 2.0/5 🔴 | **3.0/5** → 1.0/5 🔴 | ✅ eval-mcp-assist; tools: binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, binlog-search_binlog, skill, binlog-get_target_info_by_id, binlog-search_tasks_by_name, binlog-get_task_info, binlog-get_project_target_list, binlog-list_tasks_in_target, binlog-list_files_from_binlog, binlog-get_file_from_binlog, binlog-list_evaluations, binlog-get_evaluation_global_properties, binlog-get_evaluation_items_by_name, binlog-get_evaluation_properties_by_name / ⚠️ NOT ACTIVATED | — | ❌ |
| eval-mcp-assist | Insight — Inspect how RAR processes binding redirects across TFMs | 2.0/5 → 2.0/5 | 2.0/5 → 2.0/5 | ⚠️ NOT ACTIVATED | — | ✅ |
| eval-mcp-assist | Surface — Extract MSB3277 assembly version conflict details | **4.0/5** → 3.0/5 🔴 | **4.0/5** → 2.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |

Model: claude-opus-4.6 | Judge: claude-opus-4.6
