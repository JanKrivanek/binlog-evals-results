## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose the root cause of the compiler errors | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, binlog-search_binlog, skill, binlog-list_evaluations, binlog-list_files_from_binlog, binlog-get_evaluation_items_by_name, binlog-get_evaluation_properties_by_name, binlog-get_evaluation_global_properties, binlog-get_target_info_by_id, binlog-get_project_build_time, binlog-get_task_info | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-mcp-assist | Deep — Full autonomous root-cause investigation and fix | **5.0/5** → 4.0/5 🔴 | **5.0/5** → 4.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-mcp-assist | Insight — Split the failures per target framework | 4.0/5 → 4.0/5 | **4.0/5** → 3.0/5 🔴 | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, stop_bash, binlog-search_binlog, binlog-get_evaluation_properties_by_name, binlog-list_evaluations, binlog-get_evaluation_global_properties, binlog-get_target_info_by_id, binlog-get_file_from_binlog, binlog-list_files_from_binlog | — | ❌ |
| eval-mcp-assist | Surface — Extract build errors from a large multi-target failure | 3.0/5 → **4.0/5** 🟢 | 3.0/5 → 3.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -28.2% due to: completion (✓ → ✗), quality, tokens (353724 → 727085), tool calls (18 → 47)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Plugin) Quality unchanged but weighted score is -1.8% due to: quality

Model: claude-opus-4.6 | Judge: claude-opus-4.6
