## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Deep — Full autonomous root-cause investigation and fix | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, glob, binlog-count, binlog-read_file, binlog-list_files, binlog-get_node, binlog-search_properties_and_items, binlog-get_children, binlog-print_subtree / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, stop_bash, binlog-count, binlog-read_file, binlog-list_files, binlog-search_properties_and_items, binlog-get_children, binlog-search_files | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -12.6% due to: tokens (494653 → 1252652), quality, tool calls (25 → 62)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
