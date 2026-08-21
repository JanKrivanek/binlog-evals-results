## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Identify signing failure from binlog | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, read_bash, stop_bash, binlog-binlog_errors, binlog-binlog_task_details, binlog-binlog_double_writes / ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, binlog-binlog_errors, binlog-binlog_task_details, binlog-binlog_search, binlog-binlog_double_writes | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -18.2% due to: completion (✓ → ✗), tokens (201926 → 353979), time (60.3s → 104.9s)

Model: claude-opus-5 | Judge: claude-opus-5
