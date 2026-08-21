## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Find root cause of DiagnosticSource version conflict | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-binlog_assembly_conflicts, read_bash, glob, binlog-binlog_overview, binlog-binlog_errors, binlog-binlog_search, binlog-binlog_task_details, binlog-binlog_search_files, binlog-binlog_files, binlog-binlog_explore_node, binlog-binlog_compare_property, binlog-binlog_double_writes / ✅ eval-mcp-assist; tools: skill, binlog-binlog_assembly_conflicts, read_bash, glob, binlog-binlog_overview, stop_bash, binlog-binlog_errors, binlog-binlog_search, binlog-binlog_search_files, binlog-binlog_files, binlog-binlog_items, binlog-binlog_task_details | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -26.7% due to: completion (✓ → ✗), tokens (735080 → 1796770), quality, tool calls (23 → 37), time (227.8s → 356.4s)

Model: claude-opus-5 | Judge: claude-opus-5
