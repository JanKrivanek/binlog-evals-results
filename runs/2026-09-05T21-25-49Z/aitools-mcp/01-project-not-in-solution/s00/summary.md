## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Identify build error from binlog (missing file copy) | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-binlog_errors, read_bash, glob, binlog-binlog_search, binlog-binlog_incremental_analysis, binlog-binlog_task_details, binlog-binlog_projects, binlog-binlog_overview, binlog-binlog_project_targets, binlog-binlog_tasks_in_target, binlog-binlog_explore_node, binlog-binlog_compare_property / ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, binlog-binlog_errors, binlog-binlog_compare_property, binlog-binlog_search | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -28.2% due to: completion (✓ → ✗), tokens (119914 → 752593), quality, tool calls (5 → 20), time (35.0s → 198.6s)

Model: claude-opus-5 | Judge: claude-opus-5
