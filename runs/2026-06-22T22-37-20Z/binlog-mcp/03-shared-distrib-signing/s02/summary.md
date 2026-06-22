## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Insight — Inspect Distrib property across projects in signing build | 4.0/5 → 4.0/5 | **4.0/5** → 3.0/5 🔴 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-search_properties_and_items, binlog-get_node, binlog-get_children, binlog-print_subtree, binlog-list_files, binlog-read_file / ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-search_properties_and_items, binlog-get_node, binlog-print_subtree, binlog-get_children, binlog-search_files | — | ✅ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality dropped but weighted score is +1.6% due to: completion (✗ → ✓), tokens (448683 → 259641), time (177.5s → 81.4s)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
