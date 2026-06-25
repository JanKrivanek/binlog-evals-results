## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why a file copy failed during build | 3.0/5 → 3.0/5 | 3.0/5 → **4.0/5** 🟢 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-get_ancestors, binlog-read_file, binlog-search_properties_and_items, binlog-print_subtree / ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-get_node, binlog-list_files, binlog-read_file, binlog-print_subtree, binlog-get_children, binlog-search_properties_and_items | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -2.5% due to: tool calls (7 → 15), tokens (133664 → 158035)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
