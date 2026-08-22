## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Identify build error from binlog (missing file copy) | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, binlog-binlog_errors, binlog-binlog_projects, binlog-binlog_search, binlog-binlog_compare_property / ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, binlog-binlog_errors, binlog-binlog_projects, binlog-binlog_search, binlog-binlog_incremental_analysis, read_bash, stop_bash, binlog-binlog_project_targets, binlog-binlog_explore_node, binlog-binlog_task_details, binlog-binlog_tasks_in_target, binlog-binlog_compare_property | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -30.3% due to: completion (✓ → ✗), quality, tokens (172664 → 530003), tool calls (8 → 19), time (46.9s → 170.4s)

Model: claude-opus-5 | Judge: claude-opus-5
