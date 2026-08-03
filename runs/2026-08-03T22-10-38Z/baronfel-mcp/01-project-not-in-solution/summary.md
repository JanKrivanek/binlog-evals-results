## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why a file copy failed during build | **4.0/5** → 3.0/5 🔴 | **4.0/5** → 3.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | **5.0/5** → 4.0/5 🔴 | **5.0/5** → 3.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-mcp-assist | Insight — Determine which projects are in the solution vs referenced | **3.0/5** → 2.0/5 🔴 | **3.0/5** → 2.0/5 🔴 | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, stop_bash, binlog-search_binlog, binlog-get_expensive_projects, binlog-get_evaluation_global_properties, binlog-list_evaluations, binlog-get_evaluation_properties_by_name, binlog-get_project_target_list, binlog-get_target_info_by_id, binlog-get_target_info_by_name | — | ❌ |
| eval-mcp-assist | Surface — Identify build error from binlog (missing file copy) | 4.0/5 → **5.0/5** 🟢 | 4.0/5 → **5.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ✅ |

Model: claude-opus-4.6 | Judge: claude-opus-4.6
