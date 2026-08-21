## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Extract build errors from a large multi-target failure | 4.0/5 → **5.0/5** 🟢 | 4.0/5 → **5.0/5** 🟢 | ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, read_bash, stop_bash, binlog-binlog_errors, glob, binlog-binlog_search / ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, read_bash, binlog-binlog_errors | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality improved but weighted score is -6.7% due to: completion (✓ → ✗), tokens (172892 → 510201), tool calls (5 → 15)

Model: claude-opus-5 | Judge: claude-opus-5
