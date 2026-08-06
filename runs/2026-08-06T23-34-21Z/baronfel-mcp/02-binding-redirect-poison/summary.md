## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Find root cause of DiagnosticSource version conflict | **5.0/5** → 4.0/5 🔴 | **5.0/5** → 4.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | **4.0/5** → 2.0/5 🔴 | **4.0/5** → 2.0/5 🔴 | ✅ eval-mcp-assist; tools: binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, binlog-search_binlog, skill, binlog-get_project_target_list, binlog-search_targets_by_name, binlog-get_target_info_by_name, binlog-list_tasks_in_target, binlog-get_task_info, binlog-list_evaluations, binlog-get_evaluation_global_properties, binlog-get_evaluation_items_by_name, binlog-get_evaluation_properties_by_name, binlog-list_files_from_binlog, binlog-get_target_info_by_id / ⚠️ NOT ACTIVATED | — | ❌ |
| eval-mcp-assist | Insight — Inspect how RAR processes binding redirects across TFMs | 2.0/5 → 2.0/5 | 2.0/5 → 2.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-mcp-assist | Surface — Extract MSB3277 assembly version conflict details | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ⚠️ NOT ACTIVATED | — | ✅ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -16.8% due to: quality, tokens (834642 → 2250580), tool calls (37 → 80), time (223.1s → 337.3s)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
