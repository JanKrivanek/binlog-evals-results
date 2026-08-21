## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why code signing fails with access denied | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, binlog-binlog_errors, binlog-binlog_task_details, binlog-binlog_double_writes, binlog-binlog_search, binlog-binlog_explore_node, binlog-binlog_projects, binlog-binlog_search_files, binlog-binlog_properties, binlog-binlog_compare_property / ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, binlog-binlog_errors, binlog-binlog_task_details, binlog-binlog_double_writes, binlog-binlog_search, binlog-binlog_search_targets, binlog-binlog_projects, binlog-binlog_search_files, binlog-binlog_compare_property, read_bash | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -10.4% due to: tokens (235797 → 417553), quality, time (57.4s → 142.0s), tool calls (9 → 14)

Model: claude-opus-5 | Judge: claude-opus-5
