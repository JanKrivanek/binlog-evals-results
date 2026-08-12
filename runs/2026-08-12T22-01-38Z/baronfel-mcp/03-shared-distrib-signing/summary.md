## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why code signing fails with access denied | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, binlog-get_target_info_by_id, binlog-search_binlog, binlog-get_task_info, binlog-get_node_timeline, binlog-list_files_from_binlog, binlog-get_project_target_list, binlog-get_target_info_by_name | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | 2.0/5 → **3.0/5** 🟢 | 2.0/5 → **3.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ✅ |
| eval-mcp-assist | Insight — Inspect Distrib property across projects in signing build | **4.0/5** → 3.0/5 🔴 | **4.0/5** → 2.0/5 🔴 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-list_projects, binlog-get_diagnostics, binlog-list_evaluations, binlog-get_evaluation_properties_by_name, binlog-search_binlog, binlog-get_evaluation_global_properties, binlog-get_target_info_by_id / ⚠️ NOT ACTIVATED | — | ❌ |
| eval-mcp-assist | Surface — Identify signing failure from binlog | 3.0/5 → **4.0/5** 🟢 | 3.0/5 → **4.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ✅ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -12.3% due to: tokens (128604 → 452988), quality, tool calls (8 → 24), time (55.2s → 90.6s)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
