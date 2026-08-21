## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Identify build error from binlog (missing file copy) | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-binlog_errors, binlog-binlog_search, binlog-binlog_incremental_analysis, binlog-binlog_projects, binlog-binlog_project_targets, binlog-binlog_explore_node, binlog-binlog_task_details, binlog-binlog_compare_property, read_bash / ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, binlog-binlog_errors, binlog-binlog_search, binlog-binlog_incremental_analysis, read_bash, stop_bash, binlog-binlog_compare_property | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -10.9% due to: tokens (217632 → 680701), quality, time (90.3s → 153.8s), tool calls (10 → 16)

Model: claude-opus-5 | Judge: claude-opus-5
