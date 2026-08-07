## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Find root cause of DiagnosticSource version conflict | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, binlog-search_binlog, binlog-search_tasks_by_name, binlog-get_target_info_by_id, binlog-get_project_target_list, binlog-list_tasks_in_target, binlog-get_task_info, binlog-list_evaluations, binlog-get_evaluation_properties_by_name, binlog-get_evaluation_items_by_name, binlog-get_evaluation_global_properties, binlog-list_files_from_binlog, binlog-get_file_from_binlog, binlog-get_target_info_by_name / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, binlog-search_binlog, binlog-get_task_info, binlog-get_project_target_list, binlog-list_tasks_in_target, binlog-list_files_from_binlog, binlog-list_evaluations, binlog-get_evaluation_global_properties, binlog-get_file_from_binlog, glob | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | **3.0/5** → 2.0/5 🔴 | 3.0/5 → **4.0/5** 🟢 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, binlog-search_binlog, binlog-get_evaluation_properties_by_name, binlog-list_evaluations, binlog-get_evaluation_global_properties, binlog-get_project_target_list, binlog-get_task_info, binlog-get_evaluation_items_by_name, binlog-list_files_from_binlog, binlog-get_file_from_binlog, binlog-search_targets_by_name / ⚠️ NOT ACTIVATED | — | ❌ |
| eval-mcp-assist | Insight — Inspect how RAR processes binding redirects across TFMs | 2.0/5 → 2.0/5 | 2.0/5 → 2.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| eval-mcp-assist | Surface — Extract MSB3277 assembly version conflict details | **4.0/5** → 3.0/5 🔴 | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED | — | ❌ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -7.6% due to: tokens (2570959 → 4352162), quality, tool calls (67 → 94)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Isolated) Quality unchanged but weighted score is -23.6% due to: completion (✓ → ✗), tokens (665962 → 1209310), quality, tool calls (29 → 45)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
