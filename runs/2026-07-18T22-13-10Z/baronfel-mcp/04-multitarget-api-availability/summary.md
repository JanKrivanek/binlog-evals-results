## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose the root cause of the compiler errors | 4.0/5 → **5.0/5** 🟢 | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, binlog-list_files_from_binlog, binlog-list_evaluations, binlog-search_binlog, binlog-get_expensive_projects, binlog-get_project_target_list, binlog-get_target_info_by_id, binlog-get_project_build_time, binlog-get_target_info_by_name, binlog-list_tasks_in_target, binlog-get_task_info | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-mcp-assist | Deep — Full autonomous root-cause investigation and fix | 5.0/5 → 5.0/5 | **5.0/5** → 4.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-mcp-assist | Insight — Split the failures per target framework | **4.0/5** → 3.0/5 🔴 | **4.0/5** → 3.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-mcp-assist | Surface — Extract build errors from a large multi-target failure | **5.0/5** → 2.0/5 🔴 | **5.0/5** → 2.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -23.4% due to: completion (✓ → ✗), tokens (577845 → 1051060), quality, tool calls (25 → 46)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
