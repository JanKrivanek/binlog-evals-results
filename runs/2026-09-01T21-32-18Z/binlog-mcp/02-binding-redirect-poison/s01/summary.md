## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Find root cause of DiagnosticSource version conflict | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-list_files, binlog-get_children, stop_bash, binlog-print_subtree, binlog-search_files, binlog-get_node, binlog-count, binlog-read_file / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-list_files, binlog-get_node, binlog-get_children, binlog-print_subtree, binlog-search_files, binlog-read_file, read_bash, view, stop_bash | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -27.5% due to: completion (✓ → ✗), tokens (690538 → 3049857), quality, tool calls (24 → 78), time (285.6s → 551.7s)

Model: claude-opus-5 | Judge: claude-opus-5
