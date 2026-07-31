## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| binlog-failure-analysis | Deep — Full autonomous root cause investigation and fix proposal | 5.0/5 → 5.0/5 | **5.0/5** → 4.0/5 🔴 | ✅ binlog-failure-analysis; tools: skill, binlog-binlog_overview, binlog-binlog_errors, glob, binlog-binlog_projects, binlog-binlog_items, binlog-binlog_search, binlog-binlog_project_targets, binlog-binlog_build_graph, binlog-binlog_tasks_in_target, binlog-binlog_task_details, binlog-binlog_evaluations, binlog-binlog_files, binlog-binlog_properties, binlog-binlog_explain_property, binlog-binlog_evaluation_properties, binlog-binlog_evaluation_global_properties / ✅ binlog-failure-analysis; tools: skill, binlog-binlog_overview, binlog-binlog_errors, glob, binlog-binlog_projects, binlog-binlog_items, binlog-binlog_properties, binlog-binlog_search, binlog-binlog_evaluations, binlog-binlog_tasks_in_target, binlog-binlog_evaluation_global_properties, binlog-binlog_task_details, binlog-binlog_explain_property, binlog-binlog_files, binlog-binlog_search_files | — | ✅ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality dropped but weighted score is +0.8% due to: completion (✗ → ✓), tokens (1801743 → 414970), time (594.5s → 116.7s), tool calls (47 → 26)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
