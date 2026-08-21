## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why code signing fails with access denied | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, binlog-get_task_info, binlog-get_target_info_by_id, binlog-search_binlog, binlog-search_tasks_by_name, read_bash, stop_bash, binlog-get_project_target_list, binlog-list_evaluations, binlog-get_evaluation_properties_by_name, binlog-get_evaluation_items_by_name, binlog-get_file_from_binlog, binlog-list_files_from_binlog, task, skill, rg, view, binlog-get_target_info_by_name, binlog-search_targets_by_name, binlog-list_tasks_in_target, binlog-get_node_timeline | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| eval-mcp-assist | Insight — Inspect Distrib property across projects in signing build | 3.0/5 → **4.0/5** 🟢 | 3.0/5 → **4.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ✅ |
| eval-mcp-assist | Surface — Identify signing failure from binlog | **5.0/5** → 4.0/5 🔴 | **5.0/5** → 4.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -11.8% due to: quality, tokens (336550 → 507262), time (77.4s → 309.4s), tool calls (12 → 19)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Plugin) Quality unchanged but weighted score is -27.3% due to: completion (✓ → ✗), tokens (1099878 → 4335598), tool calls (24 → 181), time (266.2s → 685.3s), quality

Model: claude-opus-5 | Judge: claude-opus-5
