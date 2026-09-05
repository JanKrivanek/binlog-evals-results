## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Extract build errors from a large multi-target failure | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-search, read_bash, stop_bash / ✅ eval-mcp-assist; tools: skill, binlog-search, read_bash | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -25.8% due to: completion (✓ → ✗), tokens (182441 → 343207), quality, time (43.5s → 156.3s), tool calls (8 → 12)

Model: claude-opus-5 | Judge: claude-opus-5
