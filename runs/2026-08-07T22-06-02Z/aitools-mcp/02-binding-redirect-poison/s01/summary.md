## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Find root cause of DiagnosticSource version conflict | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-binlog_assembly_conflicts, binlog-binlog_overview, glob, binlog-binlog_errors, binlog-binlog_warnings, binlog-binlog_projects, binlog-binlog_search, binlog-binlog_tasks_in_target, binlog-binlog_evaluations, binlog-binlog_task_details, binlog-binlog_files, binlog-binlog_search_files, binlog-binlog_explain_property, binlog-binlog_properties, binlog-binlog_items, view, binlog-binlog_project_targets, binlog-binlog_evaluation_global_properties, binlog-binlog_target_graph / ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -9.6% due to: quality, tokens (2570959 → 4014261), tool calls (67 → 88)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
