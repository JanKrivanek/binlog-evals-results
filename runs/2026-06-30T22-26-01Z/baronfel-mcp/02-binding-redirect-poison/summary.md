## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Find root cause of DiagnosticSource version conflict | 4.0/5 → **5.0/5** 🟢 | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-get_diagnostics, stop_bash, binlog-search_binlog, binlog-list_projects, binlog-get_task_info, binlog-list_evaluations, binlog-get_evaluation_global_properties, binlog-get_evaluation_properties_by_name, binlog-get_evaluation_items_by_name, binlog-list_tasks_in_target, binlog-get_expensive_projects, binlog-get_target_info_by_name, binlog-search_targets_by_name, binlog-get_project_target_list, binlog-list_files_from_binlog, binlog-get_project_target_times, binlog-get_target_info_by_id, binlog-get_file_from_binlog | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | **4.0/5** → 2.0/5 🔴 | **4.0/5** → 3.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-mcp-assist | Insight — Inspect how RAR processes binding redirects across TFMs | 2.0/5 → 2.0/5 | 2.0/5 → 2.0/5 | ⚠️ NOT ACTIVATED | — | ✅ |
| eval-mcp-assist | Surface — Extract MSB3277 assembly version conflict details | 4.0/5 → 4.0/5 | **4.0/5** → 3.0/5 🔴 | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-get_diagnostics, binlog-search_binlog, binlog-list_projects, stop_bash | — | ❌ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -2.0% due to: tokens (5316072 → 7069003), tool calls (85 → 123)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
