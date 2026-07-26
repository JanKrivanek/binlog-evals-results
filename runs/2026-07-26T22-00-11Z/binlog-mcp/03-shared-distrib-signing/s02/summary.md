## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Insight — Inspect Distrib property across projects in signing build | **4.0/5** → 3.0/5 🔴 | **4.0/5** → 3.0/5 🔴 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-search_properties_and_items, binlog-get_node, binlog-get_children, binlog-print_subtree / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-search_properties_and_items | — | ✅ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality dropped but weighted score is +0.8% due to: completion (✗ → ✓), tokens (605107 → 202943), time (115.9s → 52.8s), tool calls (33 → 18)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
