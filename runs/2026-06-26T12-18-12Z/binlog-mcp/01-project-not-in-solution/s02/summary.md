## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Insight — Determine which projects are in the solution vs referenced | 4.0/5 → 4.0/5 | **4.0/5** → 3.0/5 🔴 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-search_properties_and_items, binlog-get_node, binlog-get_children, binlog-print_subtree / ⚠️ NOT ACTIVATED | — | ✅ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality dropped but weighted score is +3.6% due to: completion (✗ → ✓), tokens (1023526 → 117404), time (393.5s → 50.8s), tool calls (41 → 8)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
