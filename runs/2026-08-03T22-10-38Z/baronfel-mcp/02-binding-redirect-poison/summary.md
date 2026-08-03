## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Find root cause of DiagnosticSource version conflict | **5.0/5** → 4.0/5 🔴 | **5.0/5** → 4.0/5 🔴 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, binlog-search_binlog, binlog-search_targets_by_name, binlog-get_target_info_by_name, binlog-list_tasks_in_target, binlog-get_task_info, binlog-list_evaluations, binlog-get_evaluation_global_properties, binlog-get_evaluation_properties_by_name, binlog-get_evaluation_items_by_name, binlog-list_files_from_binlog, binlog-get_file_from_binlog, binlog-get_project_target_list, binlog-get_project_build_time / ⚠️ NOT ACTIVATED | — | ❌ |
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | **4.0/5** → 1.0/5 ⏰ 🔴 | **4.0/5** → 1.0/5 ⏰ 🔴 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, stop_bash, binlog-search_binlog, glob, binlog-search_targets_by_name, binlog-search_tasks_by_name, binlog-get_project_target_list, binlog-get_target_info_by_name, binlog-list_tasks_in_target, binlog-get_task_info, binlog-list_evaluations, binlog-get_evaluation_global_properties, binlog-get_evaluation_items_by_name, binlog-list_files_from_binlog, binlog-get_file_from_binlog, binlog-get_evaluation_properties_by_name, binlog-get_target_info_by_id / ⚠️ NOT ACTIVATED | — | ❌ |
| eval-mcp-assist | Insight — Inspect how RAR processes binding redirects across TFMs | 2.0/5 → 2.0/5 | 2.0/5 → 2.0/5 | ⚠️ NOT ACTIVATED | — | ✅ |
| eval-mcp-assist | Surface — Extract MSB3277 assembly version conflict details | 3.0/5 → 3.0/5 | 3.0/5 → **4.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -12.2% due to: completion (✓ → ✗), tokens (129471 → 774267), tool calls (12 → 34), time (47.8s → 205.3s)

> ⏰ **timeout** — run(s) hit the scenario timeout limit; scoring may be impacted by aborting model execution before it could produce its full output (increase via `timeout` in eval.yaml)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
