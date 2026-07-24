## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Find root cause of DiagnosticSource version conflict | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | 2.0/5 → **4.0/5** 🟢 | 2.0/5 → **3.0/5** 🟢 | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, stop_bash, binlog-search_binlog, skill, binlog-list_files_from_binlog, binlog-list_evaluations, binlog-get_task_info, binlog-get_evaluation_global_properties, task, binlog-get_file_from_binlog, binlog-get_evaluation_items_by_name, binlog-get_target_info_by_id, binlog-list_tasks_in_target, binlog-get_evaluation_properties_by_name, binlog-get_target_info_by_name, web_fetch | — | ✅ |
| eval-mcp-assist | Insight — Inspect how RAR processes binding redirects across TFMs | 2.0/5 → 2.0/5 | 2.0/5 → 2.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| eval-mcp-assist | Surface — Extract MSB3277 assembly version conflict details | **4.0/5** → 2.0/5 🔴 | **4.0/5** → 3.0/5 🔴 | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: binlog-load_binlog, binlog-get_diagnostics, binlog-search_binlog, binlog-list_projects, glob, stop_bash, view, skill, binlog-search_targets_by_name | — | ❌ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -10.5% due to: tokens (2085692 → 6054111), quality, tool calls (49 → 130)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Isolated) Quality unchanged but weighted score is -3.2% due to: quality, tool calls (30 → 44)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
