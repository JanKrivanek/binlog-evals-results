## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Extract build errors from a large multi-target failure | 4.0/5 → **5.0/5** 🟢 | 4.0/5 → **5.0/5** 🟢 | ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-count, read_bash, stop_bash / ✅ eval-mcp-assist; tools: skill, binlog-search, read_bash, stop_bash, glob, binlog-count | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality improved but weighted score is -3.4% due to: completion (✓ → ✗), tokens (172892 → 325934), tool calls (5 → 11)

Model: claude-opus-5 | Judge: claude-opus-5
