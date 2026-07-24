## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why code signing fails with access denied | 3.0/5 → 3.0/5 | **3.0/5** → 2.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | 3.0/5 → 3.0/5 | **3.0/5** → 2.0/5 🔴 | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, binlog-get_target_info_by_id, binlog-get_task_info, binlog-search_binlog, binlog-list_evaluations, binlog-get_evaluation_properties_by_name, binlog-list_files_from_binlog, binlog-list_tasks_in_target, binlog-get_project_target_list, binlog-get_evaluation_items_by_name, binlog-get_file_from_binlog, stop_bash, binlog-get_node_timeline, binlog-get_project_target_times, binlog-get_target_info_by_name | — | ❌ |
| eval-mcp-assist | Insight — Inspect Distrib property across projects in signing build | 2.0/5 → **3.0/5** 🟢 | 2.0/5 → **3.0/5** 🟢 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-list_projects, binlog-get_diagnostics, binlog-list_evaluations, binlog-get_evaluation_properties_by_name, binlog-search_binlog, binlog-get_target_info_by_name / ⚠️ NOT ACTIVATED | — | ✅ |
| eval-mcp-assist | Surface — Identify signing failure from binlog | 2.0/5 → **4.0/5** 🟢 | 2.0/5 → **3.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ✅ |

Model: claude-opus-4.6 | Judge: claude-opus-4.6
