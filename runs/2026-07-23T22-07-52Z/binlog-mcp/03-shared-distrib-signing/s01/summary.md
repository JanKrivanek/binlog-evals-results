## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why code signing fails with access denied | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-print_subtree, binlog-get_children, binlog-search_properties_and_items, binlog-list_files, binlog-read_file, binlog-search_files | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -6.3% due to: tokens (186454 → 474698), tool calls (11 → 25), time (67.7s → 121.4s)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
