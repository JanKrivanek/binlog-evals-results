## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Find root cause of DiagnosticSource version conflict | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ✅ eval-mcp-assist; tools: binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, binlog-search_binlog, skill, binlog-search_tasks_by_name, binlog-get_target_info_by_id, binlog-get_task_info, binlog-get_target_info_by_name, binlog-list_tasks_in_target, binlog-list_evaluations, binlog-list_files_from_binlog, binlog-get_file_from_binlog, binlog-get_evaluation_global_properties, binlog-get_evaluation_properties_by_name, binlog-get_evaluation_items_by_name, binlog-get_project_target_list / ⚠️ NOT ACTIVATED | — | ✅ |
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | **4.0/5** → 1.0/5 ⏰ 🔴 | **4.0/5** → 2.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-mcp-assist | Insight — Inspect how RAR processes binding redirects across TFMs | 2.0/5 → 2.0/5 | 2.0/5 → **3.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-mcp-assist | Surface — Extract MSB3277 assembly version conflict details | 3.0/5 → **4.0/5** 🟢 | 3.0/5 → 3.0/5 | ⚠️ NOT ACTIVATED | — | ✅ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -9.2% due to: quality, tokens (1066420 → 1305186), tool calls (42 → 52)

> ⏰ **timeout** — run(s) hit the scenario timeout limit; scoring may be impacted by aborting model execution before it could produce its full output (increase via `timeout` in eval.yaml)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
