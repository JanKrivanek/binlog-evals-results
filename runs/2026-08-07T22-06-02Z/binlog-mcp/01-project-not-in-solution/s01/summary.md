## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why a file copy failed during build | 3.0/5 → 3.0/5 | 3.0/5 → **4.0/5** 🟢 | ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-read_file, binlog-get_node, binlog-search_files, binlog-search_properties_and_items, binlog-get_children, binlog-get_ancestors, binlog-print_subtree / ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-read_file, binlog-get_node, binlog-search_properties_and_items | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -1.2% due to: tokens (276081 → 510473), tool calls (16 → 26)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
