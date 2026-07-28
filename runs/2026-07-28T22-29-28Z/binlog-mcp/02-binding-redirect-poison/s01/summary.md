## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Find root cause of DiagnosticSource version conflict | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, stop_bash, binlog-get_node, binlog-get_children, binlog-list_files, binlog-search_properties_and_items, binlog-read_file, binlog-search_files, binlog-print_subtree, glob / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-get_node, binlog-print_subtree, binlog-get_children, binlog-list_files, binlog-search_properties_and_items, binlog-read_file, glob, binlog-search_files | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -6.8% due to: tokens (2015745 → 3960242), tool calls (55 → 108)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
