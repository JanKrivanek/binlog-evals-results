## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Extract build errors from a large multi-target failure | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, read_bash, glob, binlog-binlog_errors / ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, read_bash, glob, stop_bash, binlog-binlog_errors, binlog-binlog_search | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -27.1% due to: completion (✓ → ✗), tokens (139022 → 541905), tool calls (6 → 16), time (59.0s → 188.1s), quality

Model: claude-opus-5 | Judge: claude-opus-5
