## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why code signing fails with access denied | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-print_subtree, binlog-get_children, binlog-read_file, binlog-get_node / ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-print_subtree, binlog-get_children | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -5.8% due to: tokens (252077 → 466974), tool calls (11 → 23)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
