## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-get_node, binlog-print_subtree, binlog-get_children, binlog-list_files, binlog-read_file, binlog-search_files, binlog-search_properties_and_items / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-get_children, binlog-print_subtree, binlog-get_node, binlog-list_files, binlog-read_file, binlog-search_files, binlog-count, binlog-search_properties_and_items | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -5.8% due to: quality, tool calls (70 → 112), tokens (4128334 → 4576994)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
