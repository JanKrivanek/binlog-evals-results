## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Insight — Inspect how RAR processes binding redirects across TFMs | 2.0/5 → 2.0/5 | 2.0/5 → 2.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-binlog_properties, binlog-binlog_assembly_conflicts, binlog-binlog_evaluations, binlog-binlog_evaluation_global_properties, binlog-binlog_evaluation_properties, binlog-binlog_search_files, binlog-binlog_items, binlog-binlog_files, binlog-binlog_explain_property, binlog-binlog_search / ✅ eval-mcp-assist; tools: skill, binlog-binlog_properties, binlog-binlog_assembly_conflicts, binlog-binlog_evaluations, binlog-binlog_evaluation_global_properties, binlog-binlog_evaluation_properties, binlog-binlog_explain_property, binlog-binlog_search_files, binlog-binlog_files, binlog-binlog_search, binlog-binlog_items, binlog-binlog_errors, stop_bash, binlog-binlog_tasks_in_target, binlog-binlog_task_details, binlog-binlog_projects, binlog-binlog_project_targets | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -7.6% due to: completion (✓ → ✗), tool calls (28 → 43), tokens (902568 → 1092474)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
