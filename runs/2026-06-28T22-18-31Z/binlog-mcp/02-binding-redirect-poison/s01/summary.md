## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Find root cause of DiagnosticSource version conflict | 4.0/5 → 4.0/5 | 4.0/5 → **5.0/5** 🟢 | ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-print_subtree, binlog-list_files, binlog-get_children, binlog-get_node, view, binlog-search_files, binlog-read_file, binlog-search_properties_and_items / ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-get_node, binlog-get_children, binlog-print_subtree, binlog-list_files, binlog-search_files, binlog-read_file, binlog-search_properties_and_items, binlog-get_ancestors | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -7.2% due to: tokens (2204804 → 7221706), tool calls (47 → 134)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
