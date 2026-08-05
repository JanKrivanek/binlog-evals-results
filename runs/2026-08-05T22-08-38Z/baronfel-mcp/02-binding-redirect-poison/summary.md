## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Find root cause of DiagnosticSource version conflict | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, binlog-search_binlog, binlog-get_evaluation_properties_by_name, binlog-get_task_info, binlog-list_files_from_binlog, binlog-get_project_target_list, binlog-list_tasks_in_target, binlog-get_evaluation_global_properties, binlog-get_evaluation_items_by_name, binlog-get_file_from_binlog, binlog-list_evaluations / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, binlog-get_task_info, binlog-search_binlog, binlog-get_project_target_list, binlog-list_tasks_in_target, binlog-list_evaluations, binlog-get_evaluation_properties_by_name, binlog-get_evaluation_global_properties, binlog-list_files_from_binlog, binlog-search_targets_by_name, binlog-get_target_info_by_name, binlog-search_tasks_by_name, binlog-get_evaluation_items_by_name, binlog-get_file_from_binlog | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | 4.0/5 → 4.0/5 | **4.0/5** → 2.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-mcp-assist | Insight — Inspect how RAR processes binding redirects across TFMs | 2.0/5 → 2.0/5 | 2.0/5 → 2.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| eval-mcp-assist | Surface — Extract MSB3277 assembly version conflict details | **4.0/5** → 2.0/5 🔴 | **4.0/5** → 3.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -10.6% due to: tokens (3215315 → 8135403), quality, tool calls (54 → 147)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Isolated) Quality unchanged but weighted score is -11.1% due to: quality, tokens (1289477 → 1986162), tool calls (59 → 71)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
