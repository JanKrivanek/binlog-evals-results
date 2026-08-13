## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Deep — Full autonomous root-cause investigation and fix | 1.0/5 ⏰ → **4.0/5** 🟢 | 1.0/5 ⏰ → **4.0/5** 🟢 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, stop_bash, binlog-count, binlog-read_file, binlog-list_files, binlog-get_node, binlog-search_properties_and_items, binlog-search_files, binlog-get_children / ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-count, binlog-read_file, binlog-list_files, binlog-get_children, binlog-get_node, binlog-search_files, binlog-search_properties_and_items, binlog-print_subtree | — | ✅ |

> ⏰ **timeout** — run(s) hit the scenario timeout limit; scoring may be impacted by aborting model execution before it could produce its full output (increase via `timeout` in eval.yaml)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
