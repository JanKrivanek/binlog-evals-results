## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Find root cause of DiagnosticSource version conflict | 4.0/5 → 4.0/5 | 4.0/5 → **5.0/5** 🟢 | ✅ eval-mcp-assist; tools: skill, binlog-binlog_assembly_conflicts, binlog-binlog_errors, binlog-binlog_search, binlog-binlog_projects, binlog-binlog_tasks_in_target, binlog-binlog_evaluations, binlog-binlog_task_details, binlog-binlog_search_files, binlog-binlog_files, binlog-binlog_explain_property, binlog-binlog_items, binlog-binlog_project_targets, binlog-binlog_evaluation_global_properties, binlog-binlog_target_graph, binlog-binlog_properties, binlog-binlog_evaluation_properties, binlog-binlog_warnings, glob, binlog-binlog_compiler, binlog-binlog_diagnose / ✅ eval-mcp-assist; tools: skill, binlog-binlog_assembly_conflicts, binlog-binlog_errors, binlog-binlog_warnings, binlog-binlog_search, binlog-binlog_projects, binlog-binlog_tasks_in_target, binlog-binlog_evaluations, binlog-binlog_task_details, binlog-binlog_explain_property, binlog-binlog_properties, binlog-binlog_search_files, binlog-binlog_files, binlog-binlog_items, binlog-binlog_evaluation_global_properties, binlog-binlog_evaluation_properties | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -17.4% due to: quality, tokens (2316669 → 6173073), tool calls (61 → 124)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
