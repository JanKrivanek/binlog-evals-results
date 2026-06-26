## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Find root cause of DiagnosticSource version conflict | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ⚠️ NOT ACTIVATED | — | ✅ |
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | 4.0/5 → 4.0/5 | **4.0/5** → 2.0/5 🔴 | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, stop_bash, binlog-search_binlog, binlog-get_task_info, binlog-get_project_target_list, binlog-list_evaluations, binlog-get_evaluation_global_properties, binlog-list_tasks_in_target, binlog-list_files_from_binlog, binlog-get_target_info_by_id, binlog-get_expensive_projects, binlog-get_target_info_by_name, binlog-search_targets_by_name, binlog-get_file_from_binlog, skill, binlog-get_evaluation_properties_by_name, binlog-get_evaluation_items_by_name | — | ❌ |
| eval-mcp-assist | Insight — Inspect how RAR processes binding redirects across TFMs | 2.0/5 → 2.0/5 | 2.0/5 → 2.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-mcp-assist | Surface — Extract MSB3277 assembly version conflict details | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -27.3% due to: completion (✓ → ✗), tokens (625710 → 1662965), quality, tool calls (30 → 59), time (197.3s → 270.5s)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Isolated) Quality unchanged but weighted score is -24.0% due to: completion (✓ → ✗), tokens (127205 → 434128), tool calls (8 → 21), time (80.6s → 127.9s)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
