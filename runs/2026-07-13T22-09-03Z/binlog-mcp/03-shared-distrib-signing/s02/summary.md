## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Insight — Inspect Distrib property across projects in signing build | 4.0/5 → **5.0/5** 🟢 | 4.0/5 → 4.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-search_properties_and_items, binlog-get_node, binlog-print_subtree, binlog-list_files, binlog-search_files, binlog-read_file / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-search_properties_and_items, binlog-print_subtree, binlog-get_children | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -2.2% due to: quality, tool calls (15 → 20)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
