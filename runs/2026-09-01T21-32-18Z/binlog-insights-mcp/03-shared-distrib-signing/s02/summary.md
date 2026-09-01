## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Insight — Inspect Distrib property across projects in signing build | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-insights-binlog_overview, binlog-insights-binlog_errors, binlog-insights-binlog_properties, binlog-insights-binlog_evaluations, binlog-insights-binlog_task_details, binlog-insights-binlog_search, binlog-insights-binlog_tasks_in_target, read_bash, stop_bash, binlog-insights-binlog_list_files, binlog-insights-binlog_get_file / ✅ eval-mcp-assist; tools: skill, glob, binlog-insights-binlog_overview, binlog-insights-binlog_errors, binlog-insights-binlog_properties, binlog-insights-binlog_search, binlog-insights-binlog_tasks_in_target, binlog-insights-binlog_task_details, read_bash, stop_bash | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -14.2% due to: quality, tokens (280307 → 550047), tool calls (12 → 21), time (91.7s → 132.9s)

Model: claude-opus-5 | Judge: claude-opus-5
