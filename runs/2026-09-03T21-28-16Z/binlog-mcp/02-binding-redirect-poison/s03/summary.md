## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, read_bash, binlog-get_children, binlog-print_subtree, binlog-list_files, binlog-read_file, binlog-search_files, binlog-get_node, binlog-count, binlog-search_properties_and_items | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -27.0% due to: completion (✓ → ✗), tokens (973996 → 2696547), tool calls (28 → 85), time (212.9s → 502.3s), quality

Model: claude-opus-5 | Judge: claude-opus-5
