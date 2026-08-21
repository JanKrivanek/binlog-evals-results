## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Extract build errors from a large multi-target failure | 4.0/5 → 4.0/5 | 4.0/5 → **5.0/5** 🟢 | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: skill, binlog-search, read_bash, stop_bash, binlog-count | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -2.6% due to: tokens (178884 → 312573), tool calls (6 → 13), time (60.7s → 123.3s)

Model: claude-opus-5 | Judge: claude-opus-5
