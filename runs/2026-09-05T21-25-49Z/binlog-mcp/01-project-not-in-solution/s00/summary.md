## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Identify build error from binlog (missing file copy) | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-read_file, binlog-search_properties_and_items, binlog-get_node, binlog-get_children, binlog-print_subtree, binlog-search_files / ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -24.7% due to: completion (✓ → ✗), tokens (119914 → 373325), tool calls (5 → 13), time (35.0s → 65.3s)

Model: claude-opus-5 | Judge: claude-opus-5
