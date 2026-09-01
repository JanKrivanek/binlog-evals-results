## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Deep — Full autonomous root-cause investigation and fix | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, read_bash, stop_bash, binlog-count, binlog-get_search_syntax_help, glob, binlog-search_files, binlog-read_file, binlog-get_children, binlog-print_subtree / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, read_bash, stop_bash, binlog-count, glob, binlog-search_files, binlog-read_file | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -22.4% due to: completion (✓ → ✗), tokens (829071 → 2355134), tool calls (22 → 54)

Model: claude-opus-5 | Judge: claude-opus-5
