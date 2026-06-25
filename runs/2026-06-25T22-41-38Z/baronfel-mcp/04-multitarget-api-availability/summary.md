## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose the root cause of the compiler errors | **5.0/5** → 4.0/5 🔴 | **5.0/5** → 4.0/5 🔴 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, binlog-list_evaluations, binlog-search_binlog, binlog-list_files_from_binlog, binlog-get_evaluation_properties_by_name, binlog-get_project_target_list, binlog-get_target_info_by_id, binlog-get_task_info / ⚠️ NOT ACTIVATED | — | ❌ |
| eval-mcp-assist | Deep — Full autonomous root-cause investigation and fix | 4.0/5 → 4.0/5 | 4.0/5 → **5.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-mcp-assist | Insight — Split the failures per target framework | **5.0/5** → 3.0/5 🔴 | **5.0/5** → 3.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-mcp-assist | Surface — Extract build errors from a large multi-target failure | 4.0/5 → 4.0/5 | **4.0/5** → 3.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -15.2% due to: quality, tokens (772622 → 1252025), tool calls (29 → 57), time (287.9s → 351.5s)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
