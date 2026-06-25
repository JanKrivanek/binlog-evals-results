## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Find root cause of DiagnosticSource version conflict | 4.0/5 → 4.0/5 | 4.0/5 → **5.0/5** 🟢 | ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-get_node, binlog-get_children, binlog-print_subtree, binlog-list_files, binlog-search_files, binlog-read_file, binlog-search_properties_and_items, view, stop_bash / ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -8.8% due to: quality

Model: claude-opus-4.6 | Judge: claude-opus-4.6
