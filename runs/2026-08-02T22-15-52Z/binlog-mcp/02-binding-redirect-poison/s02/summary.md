## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Insight — Inspect how RAR processes binding redirects across TFMs | 2.0/5 → 2.0/5 | 2.0/5 → **3.0/5** 🟢 | ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-search_properties_and_items, binlog-read_file, binlog-list_files, binlog-get_node, binlog-get_children, binlog-print_subtree, binlog-search_files, view / ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-search_properties_and_items, binlog-list_files, binlog-search_files, binlog-get_node, binlog-read_file, binlog-print_subtree, binlog-get_children | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -13.7% due to: completion (✓ → ✗), tokens (460545 → 1081145), tool calls (23 → 54)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
