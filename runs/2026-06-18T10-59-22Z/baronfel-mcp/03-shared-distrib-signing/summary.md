## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why code signing fails with access denied | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, binlog-get_expensive_projects, binlog-get_target_info_by_id, binlog-get_task_info, binlog-search_binlog, binlog-list_evaluations, binlog-get_evaluation_properties_by_name, binlog-list_files_from_binlog, binlog-get_project_target_list, binlog-list_tasks_in_target, binlog-get_node_timeline, binlog-get_evaluation_items_by_name, binlog-get_evaluation_global_properties / ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| eval-mcp-assist | Insight — Inspect Distrib property across projects in signing build | 2.0/5 → **3.0/5** 🟢 | 2.0/5 → 2.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-3" id="ref-3">[3]</a> |
| eval-mcp-assist | Surface — Identify signing failure from binlog | 3.0/5 → **4.0/5** 🟢 | 3.0/5 → **4.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ✅ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -13.9% due to: completion (✓ → ✗), quality
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Plugin) Quality unchanged but weighted score is -1.1% due to: quality
<a href="#user-content-ref-3" id="fn-3"><strong>[3]</strong></a> (Plugin) Quality unchanged but weighted score is -1.7% due to: quality

Model: claude-opus-4.6 | Judge: claude-opus-4.6
