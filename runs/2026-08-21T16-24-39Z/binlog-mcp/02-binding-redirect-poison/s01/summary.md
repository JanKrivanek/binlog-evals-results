## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Find root cause of DiagnosticSource version conflict | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-list_files, binlog-get_children, binlog-read_file, binlog-print_subtree, binlog-get_node, glob, binlog-search_files, binlog-count, read_bash / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-list_files, binlog-get_children, binlog-print_subtree, binlog-get_node, binlog-search_files, binlog-read_file, stop_bash, binlog-search_properties_and_items | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -29.2% due to: completion (✓ → ✗), tokens (745227 → 2717169), quality, tool calls (22 → 69), time (149.3s → 404.5s)

Model: claude-opus-5 | Judge: claude-opus-5
