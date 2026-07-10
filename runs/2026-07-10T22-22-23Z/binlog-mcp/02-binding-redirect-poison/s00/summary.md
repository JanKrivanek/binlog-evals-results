## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Extract MSB3277 assembly version conflict details | 3.0/5 → 3.0/5 | 3.0/5 → **4.0/5** 🟢 | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-get_node, binlog-get_children, binlog-print_subtree, view | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality improved but weighted score is -1.9% due to: completion (✓ → ✗), tokens (95888 → 208645), tool calls (7 → 12), time (33.4s → 56.2s)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
