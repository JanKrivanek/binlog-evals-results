## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Extract MSB3277 assembly version conflict details | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, read_bash, stop_bash, glob, binlog-get_children, binlog-print_subtree, binlog-get_node / ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-get_children, binlog-print_subtree, binlog-get_node, binlog-search_files | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -26.3% due to: completion (✓ → ✗), tokens (228579 → 419432), quality, time (55.0s → 116.0s), tool calls (9 → 16)

Model: claude-opus-5 | Judge: claude-opus-5
