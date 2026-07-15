## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose the root cause of the compiler errors | **5.0/5** → 4.0/5 🔴 | **5.0/5** → 4.0/5 🔴 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, binlog-get_expensive_projects, binlog-list_evaluations, binlog-get_file_from_binlog, binlog-get_evaluation_properties_by_name, binlog-get_evaluation_items_by_name, binlog-get_evaluation_global_properties, binlog-list_files_from_binlog, binlog-search_binlog / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, binlog-list_evaluations, binlog-list_files_from_binlog, binlog-search_binlog, binlog-get_file_from_binlog, binlog-get_evaluation_properties_by_name, binlog-get_evaluation_global_properties, binlog-get_evaluation_items_by_name | — | ❌ |
| eval-mcp-assist | Deep — Full autonomous root-cause investigation and fix | **5.0/5** → 4.0/5 🔴 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, glob, stop_bash, binlog-search_binlog, binlog-list_evaluations, binlog-get_evaluation_global_properties, binlog-get_target_info_by_id, binlog-get_evaluation_properties_by_name, binlog-list_files_from_binlog, binlog-get_file_from_binlog / ⚠️ NOT ACTIVATED | — | ❌ |
| eval-mcp-assist | Insight — Split the failures per target framework | 1.0/5 ⏰ → **3.0/5** 🟢 | 1.0/5 ⏰ → **3.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ✅ |
| eval-mcp-assist | Surface — Extract build errors from a large multi-target failure | **4.0/5** → 3.0/5 🔴 | **4.0/5** → 3.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |

> ⏰ **timeout** — run(s) hit the scenario timeout limit; scoring may be impacted by aborting model execution before it could produce its full output (increase via `timeout` in eval.yaml)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
