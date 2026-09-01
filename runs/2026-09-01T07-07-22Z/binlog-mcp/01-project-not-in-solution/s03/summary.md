## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-print_subtree, binlog-search_properties_and_items, binlog-get_children, binlog-get_node, binlog-search_files, binlog-get_ancestors, binlog-read_file, binlog-list_files / ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -3.4% due to: quality, tool calls (23 → 37), tokens (890370 → 1155602)

Model: claude-opus-5 | Judge: claude-opus-5
