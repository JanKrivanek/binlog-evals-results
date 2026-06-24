## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why a file copy failed during build | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-get_node, binlog-print_subtree, binlog-get_children, binlog-search_properties_and_items, binlog-read_file, binlog-get_ancestors / ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-get_node, binlog-print_subtree, binlog-get_children, binlog-search_properties_and_items, binlog-get_ancestors, binlog-search_files, binlog-read_file | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -4.4% due to: tokens (134000 → 448806), tool calls (9 → 21)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
