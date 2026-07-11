## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose the root cause of the compiler errors | 3.0/5 → **4.0/5** 🟢 | 3.0/5 → **5.0/5** 🟢 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, view, glob, binlog-get_file_from_binlog, binlog-list_files_from_binlog, binlog-list_evaluations, binlog-search_binlog, binlog-get_evaluation_items_by_name, binlog-get_evaluation_properties_by_name, binlog-get_expensive_projects, binlog-get_evaluation_global_properties, binlog-get_target_info_by_name, binlog-list_tasks_in_target, binlog-get_task_info, binlog-get_project_build_time / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, binlog-get_file_from_binlog, binlog-list_files_from_binlog, binlog-list_evaluations, binlog-get_evaluation_items_by_name, binlog-get_evaluation_properties_by_name, binlog-search_binlog, view, binlog-get_evaluation_global_properties, binlog-get_task_info, binlog-get_expensive_projects, binlog-get_project_target_list | — | ✅ |
| eval-mcp-assist | Deep — Full autonomous root-cause investigation and fix | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-mcp-assist | Insight — Split the failures per target framework | **5.0/5** → 3.0/5 🔴 | **5.0/5** → 2.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-mcp-assist | Surface — Extract build errors from a large multi-target failure | 2.0/5 → **3.0/5** 🟢 | 2.0/5 → **3.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ✅ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -14.8% due to: quality, tokens (536109 → 1173254), tool calls (32 → 55), time (176.1s → 258.9s)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
