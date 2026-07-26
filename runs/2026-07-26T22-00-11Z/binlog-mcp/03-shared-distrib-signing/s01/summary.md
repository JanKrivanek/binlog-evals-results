## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why code signing fails with access denied | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-print_subtree, binlog-get_children / ✅ eval-mcp-assist; tools: skill, binlog-search, glob, binlog-print_subtree, binlog-get_children | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -0.7% due to: tokens (168332 → 259123), tool calls (10 → 14)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
