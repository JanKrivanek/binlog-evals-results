## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Find root cause of DiagnosticSource version conflict | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-get_node, binlog-get_children, binlog-print_subtree, binlog-list_files, binlog-search_files, binlog-search_properties_and_items, binlog-read_file, glob / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-get_node, binlog-get_children, binlog-list_files, binlog-print_subtree, binlog-search_files, binlog-read_file, glob, binlog-search_properties_and_items, binlog-preprocess_file | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -8.2% due to: tokens (2570959 → 4283804), quality, tool calls (67 → 107)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
