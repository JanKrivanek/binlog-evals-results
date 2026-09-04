## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why a file copy failed during build | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-search_properties_and_items, binlog-get_ancestors, binlog-search_files, binlog-get_children, binlog-get_node, binlog-read_file / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-read_file, binlog-print_subtree, binlog-search_properties_and_items, binlog-get_children, binlog-get_node | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -3.3% due to: quality, time (110.1s → 474.1s)

Model: claude-opus-5 | Judge: claude-opus-5
