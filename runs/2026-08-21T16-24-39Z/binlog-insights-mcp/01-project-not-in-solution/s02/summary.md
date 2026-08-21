## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Insight — Determine which projects are in the solution vs referenced | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: skill, glob, binlog-insights-binlog_overview, binlog-insights-binlog_errors, binlog-insights-binlog_projects, binlog-insights-binlog_evaluations, binlog-insights-binlog_search_targets, binlog-insights-binlog_properties, read_bash, stop_bash, binlog-insights-binlog_project_targets, binlog-insights-binlog_search, binlog-insights-binlog_items, binlog-insights-binlog_list_files, binlog-insights-binlog_get_file, binlog-insights-binlog_evaluation_global_properties, binlog-insights-binlog_evaluation_properties | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -24.8% due to: completion (✓ → ✗), tokens (488273 → 875411), time (118.4s → 295.3s), quality, tool calls (17 → 25)

Model: claude-opus-5 | Judge: claude-opus-5
