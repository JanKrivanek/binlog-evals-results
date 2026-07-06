## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why a file copy failed during build | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-get_ancestors, binlog-print_subtree, binlog-read_file / ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-get_ancestors, binlog-read_file, binlog-print_subtree, binlog-search_properties_and_items, binlog-get_node | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -19.6% due to: quality, tokens (53726 → 155503), tool calls (4 → 14), time (36.1s → 76.4s)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
