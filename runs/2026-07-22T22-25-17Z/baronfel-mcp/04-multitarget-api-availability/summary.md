## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose the root cause of the compiler errors | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, binlog-list_evaluations, binlog-get_file_from_binlog, binlog-get_evaluation_items_by_name, binlog-get_evaluation_properties_by_name, binlog-get_evaluation_global_properties, binlog-list_files_from_binlog, binlog-search_binlog, binlog-get_target_info_by_id / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, binlog-get_file_from_binlog, binlog-list_evaluations, binlog-get_evaluation_items_by_name, binlog-get_evaluation_properties_by_name, binlog-get_evaluation_global_properties, binlog-search_binlog, binlog-get_expensive_projects, binlog-get_project_target_list, binlog-get_target_info_by_id, binlog-list_files_from_binlog, binlog-list_tasks_in_target, binlog-get_task_info | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-mcp-assist | Deep — Full autonomous root-cause investigation and fix | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED | — | ✅ |
| eval-mcp-assist | Insight — Split the failures per target framework | **5.0/5** → 3.0/5 🔴 | **5.0/5** → 3.0/5 🔴 | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: binlog-load_binlog, binlog-get_diagnostics, stop_bash, binlog-list_projects, skill, binlog-get_expensive_projects, binlog-search_binlog, binlog-get_project_target_list, binlog-get_target_info_by_id, binlog-list_evaluations | — | ❌ |
| eval-mcp-assist | Surface — Extract build errors from a large multi-target failure | **5.0/5** → 2.0/5 🔴 | **5.0/5** → 3.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -23.9% due to: completion (✓ → ✗), tokens (127698 → 1052270), tool calls (9 → 40), time (190.5s → 293.8s)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
