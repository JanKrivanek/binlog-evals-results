## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why code signing fails with access denied | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-get_diagnostics, binlog-get_task_info, binlog-search_binlog, read_bash, stop_bash, binlog-list_projects, binlog-get_evaluation_properties_by_name, binlog-get_file_from_binlog, binlog-get_project_target_list, glob, binlog-list_tasks_in_target / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-get_diagnostics, binlog-get_task_info, binlog-search_binlog, read_bash, stop_bash, binlog-list_projects, binlog-get_file_from_binlog, binlog-get_project_target_list, binlog-get_target_info_by_id, binlog-get_evaluation_properties_by_name | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, binlog-get_task_info, binlog-search_binlog, binlog-list_evaluations, binlog-get_evaluation_properties_by_name, binlog-list_files_from_binlog, binlog-get_target_info_by_id, binlog-list_tasks_in_target, binlog-get_evaluation_items_by_name, binlog-get_project_target_list, binlog-get_node_timeline / ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| eval-mcp-assist | Insight — Inspect Distrib property across projects in signing build | 5.0/5 → 5.0/5 | **5.0/5** → 3.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-mcp-assist | Surface — Identify signing failure from binlog | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-3" id="ref-3">[3]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -21.6% due to: completion (✓ → ✗), tokens (433261 → 1050661), time (106.0s → 210.7s), tool calls (15 → 26)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Isolated) Quality unchanged but weighted score is -24.1% due to: completion (✓ → ✗), tokens (1574726 → 2945227), tool calls (31 → 64), quality
<a href="#user-content-ref-3" id="fn-3"><strong>[3]</strong></a> (Plugin) Quality unchanged but weighted score is -6.8% due to: tokens (180498 → 428542), tool calls (7 → 15), time (43.6s → 86.9s)

Model: claude-opus-5 | Judge: claude-opus-5
