## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why code signing fails with access denied | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-print_subtree, binlog-get_children / ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -13.0% due to: quality, tokens (103953 → 223883), tool calls (7 → 10), time (48.9s → 59.9s)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
