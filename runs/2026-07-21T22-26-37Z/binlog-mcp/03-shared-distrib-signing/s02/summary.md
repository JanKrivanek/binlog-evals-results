## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Insight — Inspect Distrib property across projects in signing build | 4.0/5 → 4.0/5 | **4.0/5** → 3.0/5 🔴 | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-search_properties_and_items, binlog-print_subtree, binlog-get_node | — | ✅ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality dropped but weighted score is +2.1% due to: completion (✗ → ✓), tokens (1087935 → 200888), time (286.0s → 70.6s), tool calls (42 → 23)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
