## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose the root cause of the compiler errors | 4.0/5 → 4.0/5 | 4.0/5 → **5.0/5** 🟢 | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, binlog-search_binlog, binlog-list_evaluations, binlog-get_evaluation_properties_by_name, binlog-get_evaluation_items_by_name, binlog-get_evaluation_global_properties, binlog-get_target_info_by_id, binlog-get_file_from_binlog, binlog-list_files_from_binlog, binlog-get_task_info | — | ✅ |
| eval-mcp-assist | Deep — Full autonomous root-cause investigation and fix | **5.0/5** → 4.0/5 🔴 | **5.0/5** → 4.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-mcp-assist | Insight — Split the failures per target framework | 4.0/5 → **5.0/5** 🟢 | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-mcp-assist | Surface — Extract build errors from a large multi-target failure | **4.0/5** → 3.0/5 🔴 | **4.0/5** → 2.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -10.8% due to: tokens (284781 → 527302), quality, tool calls (17 → 37), time (114.7s → 154.7s)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
