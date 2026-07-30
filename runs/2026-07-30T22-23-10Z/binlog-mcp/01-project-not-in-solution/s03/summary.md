## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | 1.0/5 ⏰ → **5.0/5** 🟢 | 1.0/5 ⏰ → **3.0/5** 🟢 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-get_ancestors, binlog-print_subtree, binlog-read_file, binlog-search_properties_and_items, binlog-get_node, binlog-get_children / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-get_node, binlog-get_ancestors, binlog-read_file, binlog-search_properties_and_items, binlog-print_subtree | — | ✅ |

> ⏰ **timeout** — run(s) hit the scenario timeout limit; scoring may be impacted by aborting model execution before it could produce its full output (increase via `timeout` in eval.yaml)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
