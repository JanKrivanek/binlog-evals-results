## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Extract MSB3277 assembly version conflict details | 4.0/5 → **5.0/5** 🟢 | 4.0/5 → 4.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-insights-binlog_overview, glob, binlog-insights-binlog_errors, read_bash / ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -16.4% due to: completion (✓ → ✗), tokens (230889 → 486720), time (63.0s → 149.1s), tool calls (9 → 16)

Model: claude-opus-5 | Judge: claude-opus-5
