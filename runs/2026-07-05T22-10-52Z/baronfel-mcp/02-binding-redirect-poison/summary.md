## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Find root cause of DiagnosticSource version conflict | **5.0/5** → 4.0/5 🔴 | **5.0/5** → 4.0/5 🔴 | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-get_diagnostics, stop_bash, binlog-search_binlog, binlog-list_projects, binlog-get_project_target_list, binlog-list_tasks_in_target, binlog-get_task_info, binlog-list_files_from_binlog, binlog-list_evaluations, binlog-get_file_from_binlog, binlog-get_target_info_by_id | — | ❌ |
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-mcp-assist | Insight — Inspect how RAR processes binding redirects across TFMs | 2.0/5 → 2.0/5 | 2.0/5 → 2.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| eval-mcp-assist | Surface — Extract MSB3277 assembly version conflict details | 4.0/5 → 4.0/5 | **4.0/5** → 2.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -11.5% due to: quality, tokens (3887982 → 5530937), tool calls (77 → 114)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Isolated) Quality unchanged but weighted score is -4.8% due to: quality, tool calls (44 → 62), tokens (1246728 → 1429929)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
