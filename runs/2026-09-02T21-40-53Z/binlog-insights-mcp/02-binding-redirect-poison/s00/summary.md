## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Extract MSB3277 assembly version conflict details | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-insights-binlog_overview, read_bash, glob, stop_bash, binlog-insights-binlog_errors / ✅ eval-mcp-assist; tools: skill, binlog-insights-binlog_overview, binlog-insights-binlog_warnings, glob, binlog-insights-binlog_errors, read_bash | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -20.7% due to: completion (✓ → ✗), tokens (205660 → 451186), time (64.2s → 167.3s), tool calls (9 → 16)

Model: claude-opus-5 | Judge: claude-opus-5
