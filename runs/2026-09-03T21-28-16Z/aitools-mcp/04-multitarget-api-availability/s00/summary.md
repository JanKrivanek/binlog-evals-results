## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Extract build errors from a large multi-target failure | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, glob, binlog-binlog_errors, read_bash, stop_bash, binlog-binlog_search / ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, binlog-binlog_errors, glob, read_bash, stop_bash, binlog-binlog_search | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -30.3% due to: completion (✓ → ✗), quality, tokens (131255 → 443528), tool calls (6 → 13), time (43.1s → 113.7s)

Model: claude-opus-5 | Judge: claude-opus-5
