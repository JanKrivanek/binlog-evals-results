## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Find root cause of DiagnosticSource version conflict | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-get_children, binlog-list_files, binlog-get_node, binlog-search_properties_and_items, binlog-read_file, binlog-print_subtree / ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-get_node, binlog-get_children, binlog-list_files, binlog-search_properties_and_items, binlog-print_subtree, binlog-read_file, binlog-search_files, stop_bash | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -0.9% due to: quality

Model: claude-opus-4.6 | Judge: claude-opus-4.6
