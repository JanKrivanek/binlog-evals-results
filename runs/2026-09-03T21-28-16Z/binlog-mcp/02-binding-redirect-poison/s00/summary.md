## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Extract MSB3277 assembly version conflict details | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-search, read_bash, stop_bash, binlog-get_children, binlog-print_subtree, binlog-get_node, glob, binlog-search_properties_and_items, binlog-search_files, binlog-read_file / ✅ eval-mcp-assist; tools: skill, binlog-search | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -25.0% due to: completion (✓ → ✗), tokens (138851 → 749921), tool calls (6 → 29), time (34.4s → 184.2s)

Model: claude-opus-5 | Judge: claude-opus-5
