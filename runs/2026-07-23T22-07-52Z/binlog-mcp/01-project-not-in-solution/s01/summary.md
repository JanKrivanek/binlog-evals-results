## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why a file copy failed during build | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-get_node, binlog-print_subtree, binlog-read_file, binlog-get_children / ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-get_node, binlog-read_file, binlog-search_properties_and_items, binlog-print_subtree, binlog-get_ancestors, binlog-get_children | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -13.7% due to: quality, tokens (179410 → 256686), tool calls (11 → 20)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
