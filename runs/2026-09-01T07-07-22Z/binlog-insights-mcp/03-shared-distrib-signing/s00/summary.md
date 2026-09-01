## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Identify signing failure from binlog | 5.0/5 → 5.0/5 | **5.0/5** → 4.0/5 🔴 | ✅ eval-mcp-assist; tools: skill, binlog-insights-binlog_overview, binlog-insights-binlog_errors, binlog-insights-binlog_task_details, binlog-insights-binlog_search / ✅ eval-mcp-assist; tools: skill, binlog-insights-binlog_overview, binlog-insights-binlog_errors, binlog-insights-binlog_task_details, binlog-insights-binlog_search, binlog-insights-binlog_tasks_in_target | — | ❌ |

Model: claude-opus-5 | Judge: claude-opus-5
