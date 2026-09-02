## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Identify signing failure from binlog | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, read_bash, stop_bash, binlog-binlog_errors, binlog-binlog_task_details / ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, read_bash, glob, stop_bash, binlog-binlog_errors, binlog-binlog_task_details, binlog-binlog_double_writes, binlog-binlog_search | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -20.4% due to: completion (✓ → ✗), tokens (188715 → 397763), time (40.8s → 112.9s), tool calls (9 → 11)

Model: claude-opus-5 | Judge: claude-opus-5
