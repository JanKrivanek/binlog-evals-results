## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | 2.0/5 ⏰ → **4.0/5** 🟢 | 2.0/5 ⏰ → **5.0/5** 🟢 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-get_ancestors, binlog-get_node, binlog-read_file, binlog-search_properties_and_items, binlog-get_children, binlog-search_files, binlog-list_files, binlog-print_subtree / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-get_ancestors, binlog-get_node, binlog-read_file, binlog-print_subtree, binlog-search_properties_and_items, binlog-get_children, binlog-list_files, binlog-search_files | — | ✅ |

> ⏰ **timeout** — run(s) hit the scenario timeout limit; scoring may be impacted by aborting model execution before it could produce its full output (increase via `timeout` in eval.yaml)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
