## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Extract MSB3277 assembly version conflict details | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-search, glob, binlog-get_children, binlog-print_subtree, binlog-get_node, binlog-search_properties_and_items / ✅ eval-mcp-assist; tools: skill, binlog-search | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -23.9% due to: completion (✓ → ✗), tokens (205660 → 584819), tool calls (9 → 20), time (64.2s → 170.7s)

Model: claude-opus-5 | Judge: claude-opus-5
