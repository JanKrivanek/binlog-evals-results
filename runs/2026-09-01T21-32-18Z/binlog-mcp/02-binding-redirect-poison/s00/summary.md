## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Extract MSB3277 assembly version conflict details | 4.0/5 → 4.0/5 | 4.0/5 → **5.0/5** 🟢 | ✅ eval-mcp-assist; tools: skill, binlog-search, glob, binlog-get_children, binlog-print_subtree, binlog-get_node / ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-load_binlog, read_bash, glob, stop_bash | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -0.5% due to: tokens (371611 → 624675), time (71.0s → 145.9s), tool calls (11 → 20)

Model: claude-opus-5 | Judge: claude-opus-5
