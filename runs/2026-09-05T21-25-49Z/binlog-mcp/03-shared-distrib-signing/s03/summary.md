## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-get_llm_guide, binlog-load_binlog, binlog-search, binlog-print_subtree, binlog-list_files, binlog-read_file, binlog-search_files, binlog-get_children / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-print_subtree, binlog-list_files, binlog-read_file, binlog-search_files, binlog-search_properties_and_items, binlog-get_children | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -0.7% due to: tool calls (28 → 48), tokens (1121001 → 1375625)

Model: claude-opus-5 | Judge: claude-opus-5
