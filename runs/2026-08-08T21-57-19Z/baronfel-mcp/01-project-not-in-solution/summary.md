## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why a file copy failed during build | 2.0/5 → **3.0/5** 🟢 | 2.0/5 → **3.0/5** 🟢 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, binlog-get_target_info_by_id, binlog-get_task_info, binlog-list_files_from_binlog, binlog-search_binlog, binlog-get_project_target_list, binlog-list_evaluations, binlog-get_evaluation_properties_by_name, binlog-get_evaluation_global_properties / ⚠️ NOT ACTIVATED | — | ✅ |
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | **4.0/5** → 3.0/5 🔴 | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-mcp-assist | Insight — Determine which projects are in the solution vs referenced | 2.0/5 → 2.0/5 | 2.0/5 → **3.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ✅ |
| eval-mcp-assist | Surface — Identify build error from binlog (missing file copy) | 4.0/5 → **5.0/5** 🟢 | 4.0/5 → **5.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ✅ |

Model: claude-opus-4.6 | Judge: claude-opus-4.6
