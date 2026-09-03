## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | 4.0/5 → 4.0/5 ⏰ | 4.0/5 → 4.0/5 ⏰ | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-print_subtree, binlog-get_children, binlog-list_files, binlog-search_properties_and_items, binlog-read_file, binlog-search_files / ✅ eval-mcp-assist; tools: skill, binlog-get_llm_guide, binlog-load_binlog, binlog-search, binlog-print_subtree, binlog-search_files, binlog-list_files, binlog-search_properties_and_items, binlog-read_file, binlog-get_node | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -12.5% due to: errors (0 → 1), tokens (603080 → 1186136), tool calls (16 → 37), time (136.3s → 901.9s)

> ⏰ **timeout** — run(s) hit the scenario timeout limit; scoring may be impacted by aborting model execution before it could produce its full output (increase via `timeout` in eval.yaml)

Model: claude-opus-5 | Judge: claude-opus-5
