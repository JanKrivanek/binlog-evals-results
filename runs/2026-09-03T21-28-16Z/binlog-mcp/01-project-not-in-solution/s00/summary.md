## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Identify build error from binlog (missing file copy) | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-read_file, binlog-search_properties_and_items, binlog-get_children, binlog-search_files, binlog-get_node, binlog-get_ancestors, binlog-count / ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -22.3% due to: completion (✓ → ✗), tokens (141089 → 379578), tool calls (6 → 17), time (32.0s → 74.3s)

Model: claude-opus-5 | Judge: claude-opus-5
