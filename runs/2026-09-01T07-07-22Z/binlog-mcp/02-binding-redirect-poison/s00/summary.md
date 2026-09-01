## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Extract MSB3277 assembly version conflict details | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, read_bash, stop_bash, glob, binlog-get_children, binlog-print_subtree, binlog-get_node, binlog-search_files / ✅ eval-mcp-assist; tools: skill, binlog-search, glob, read_bash, stop_bash, binlog-get_children, binlog-print_subtree, binlog-get_node, binlog-search_properties_and_items | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -30.3% due to: completion (✓ → ✗), quality, tokens (135285 → 971305), tool calls (6 → 38), time (27.4s → 219.1s)

Model: claude-opus-5 | Judge: claude-opus-5
