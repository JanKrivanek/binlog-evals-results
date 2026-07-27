## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | 4.0/5 → 4.0/5 | **4.0/5** → 3.0/5 🔴 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-print_subtree, binlog-get_children, binlog-search_properties_and_items, binlog-list_files, binlog-read_file, binlog-get_node / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, glob, binlog-search, binlog-print_subtree, binlog-get_children, binlog-search_properties_and_items, binlog-get_node, binlog-read_file | — | ✅ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality dropped but weighted score is +7.3% due to: completion (✗ → ✓), tokens (2031776 → 963922), time (332.5s → 215.7s), tool calls (52 → 35)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
