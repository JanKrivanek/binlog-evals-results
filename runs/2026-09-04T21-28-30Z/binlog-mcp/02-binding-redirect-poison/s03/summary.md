## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, view, binlog-list_files, binlog-read_file, binlog-search_files, binlog-get_children, binlog-print_subtree, binlog-search_properties_and_items / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-search_files, binlog-list_files, binlog-read_file, binlog-get_children | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -4.0% due to: tokens (1141239 → 1835801), tool calls (30 → 47), time (215.7s → 319.8s)

Model: claude-opus-5 | Judge: claude-opus-5
