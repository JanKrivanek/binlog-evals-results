## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Insight — Inspect Distrib property across projects in signing build | 3.0/5 → 3.0/5 | 3.0/5 → **4.0/5** 🟢 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-search_properties_and_items, binlog-get_node / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-search_properties_and_items, binlog-print_subtree, binlog-get_node, binlog-get_children, binlog-search_files | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -9.2% due to: quality

Model: claude-opus-4.6 | Judge: claude-opus-4.6
