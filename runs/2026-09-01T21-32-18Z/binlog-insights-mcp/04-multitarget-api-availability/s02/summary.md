## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Insight — Split the failures per target framework | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-insights-binlog_overview, read_bash, binlog-insights-binlog_errors, binlog-insights-binlog_evaluations, binlog-insights-binlog_search_tasks, binlog-insights-binlog_properties, binlog-insights-binlog_search, binlog-insights-binlog_compiler, binlog-insights-binlog_task_details / ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -27.8% due to: completion (✓ → ✗), tokens (457430 → 1578391), quality, time (193.5s → 469.9s), tool calls (18 → 33)

Model: claude-opus-5 | Judge: claude-opus-5
