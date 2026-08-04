## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Insight — Inspect Distrib property across projects in signing build | **4.0/5** → 3.0/5 🔴 | 4.0/5 → 4.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-search_properties_and_items, binlog-get_node, binlog-get_children / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-search_properties_and_items, binlog-get_node, binlog-print_subtree, binlog-search_files, binlog-read_file | — | ✅ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality dropped but weighted score is +4.7% due to: completion (✗ → ✓), tokens (663434 → 242310), time (142.2s → 68.2s), tool calls (40 → 20)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
