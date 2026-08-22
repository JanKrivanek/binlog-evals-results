## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Deep — Full autonomous root-cause investigation and fix | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, read_bash, stop_bash, binlog-count, binlog-get_children, binlog-search_files, binlog-read_file, binlog-get_ancestors, binlog-get_node, binlog-list_files, binlog-search_properties_and_items / ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -24.8% due to: completion (✓ → ✗), tokens (1135144 → 2618436), quality, tool calls (32 → 57), time (304.8s → 411.8s)

Model: claude-opus-5 | Judge: claude-opus-5
