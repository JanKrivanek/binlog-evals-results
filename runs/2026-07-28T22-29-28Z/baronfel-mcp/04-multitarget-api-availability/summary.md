## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose the root cause of the compiler errors | 1.0/5 → **5.0/5** 🟢 | 1.0/5 → **5.0/5** 🟢 | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, stop_bash, binlog-search_binlog, binlog-list_evaluations, skill, binlog-get_evaluation_global_properties, binlog-get_evaluation_properties_by_name, binlog-get_project_target_list, binlog-get_task_info, binlog-list_files_from_binlog, binlog-get_file_from_binlog | — | ✅ |
| eval-mcp-assist | Deep — Full autonomous root-cause investigation and fix | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-mcp-assist | Insight — Split the failures per target framework | **5.0/5** → 3.0/5 🔴 | **5.0/5** → 3.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-mcp-assist | Surface — Extract build errors from a large multi-target failure | 3.0/5 → 3.0/5 | **3.0/5** → 2.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -3.1% due to: tokens (1284431 → 1823738), tool calls (38 → 59)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
