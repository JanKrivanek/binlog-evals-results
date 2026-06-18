## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Extract MSB3277 assembly version conflict details | 4.0/5 → **5.0/5** 🟢 | **4.0/5** → 3.0/5 🔴 | ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-get_node, binlog-get_children / ⚠️ NOT ACTIVATED | — | ✅ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality dropped but weighted score is +15.1% due to: completion (✗ → ✓), tokens (165550 → 71355), tool calls (12 → 5), time (69.0s → 31.5s)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
