## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-get_node, binlog-print_subtree, binlog-list_files, binlog-read_file, binlog-get_children, view, binlog-search_files, binlog-preprocess_file, binlog-count, binlog-search_properties_and_items / ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -18.6% due to: quality, tokens (3682116 → 8248223), tool calls (67 → 145)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
