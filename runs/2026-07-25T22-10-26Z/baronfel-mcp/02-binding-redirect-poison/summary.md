## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Find root cause of DiagnosticSource version conflict | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | 3.0/5 → **4.0/5** 🟢 | **3.0/5** → 2.0/5 🔴 | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, binlog-search_binlog, stop_bash, skill, binlog-get_project_target_list, binlog-get_target_info_by_id, binlog-list_evaluations, binlog-get_evaluation_global_properties, binlog-list_tasks_in_target, binlog-get_task_info, binlog-search_targets_by_name, binlog-get_evaluation_items_by_name, binlog-get_evaluation_properties_by_name, binlog-list_files_from_binlog, binlog-get_file_from_binlog, binlog-get_project_build_time, binlog-get_expensive_projects, binlog-get_target_info_by_name | — | ❌ |
| eval-mcp-assist | Insight — Inspect how RAR processes binding redirects across TFMs | 1.0/5 → **2.0/5** 🟢 | 1.0/5 → **2.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ✅ |
| eval-mcp-assist | Surface — Extract MSB3277 assembly version conflict details | **3.0/5** → 2.0/5 🔴 | **3.0/5** → 2.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -25.0% due to: completion (✓ → ✗), tokens (721561 → 9229682), tool calls (28 → 157), time (384.3s → 905.9s)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
