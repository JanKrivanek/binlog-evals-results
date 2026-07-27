## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why code signing fails with access denied | 3.0/5 → 3.0/5 | **3.0/5** → 2.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ✅ eval-mcp-assist; tools: skill, glob, binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, binlog-get_target_info_by_id, binlog-get_task_info, binlog-search_binlog, binlog-list_evaluations, binlog-get_evaluation_properties_by_name, binlog-get_project_target_list, binlog-list_tasks_in_target, binlog-list_files_from_binlog, binlog-get_evaluation_items_by_name, binlog-get_node_timeline / ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-mcp-assist | Insight — Inspect Distrib property across projects in signing build | 2.0/5 → **3.0/5** 🟢 | 2.0/5 → 2.0/5 | ⚠️ NOT ACTIVATED | — | ✅ |
| eval-mcp-assist | Surface — Identify signing failure from binlog | 3.0/5 → **4.0/5** 🟢 | 3.0/5 → **4.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ✅ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -10.2% due to: tokens (2031776 → 3860676), tool calls (52 → 100), quality, time (332.5s → 479.3s)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
