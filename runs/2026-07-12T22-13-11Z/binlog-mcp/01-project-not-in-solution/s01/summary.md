## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why a file copy failed during build | 1.0/5 ⏰ → **3.0/5** 🟢 | 1.0/5 ⏰ → **3.0/5** 🟢 | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-get_node, binlog-read_file, binlog-search_properties_and_items, binlog-get_children, binlog-print_subtree | — | ✅ |

> ⏰ **timeout** — run(s) hit the scenario timeout limit; scoring may be impacted by aborting model execution before it could produce its full output (increase via `timeout` in eval.yaml)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
