## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Deep — Full autonomous root-cause investigation and fix | 1.0/5 ⏰ → **4.0/5** 🟢 | 1.0/5 ⏰ → **5.0/5** 🟢 | ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, binlog-binlog_errors, glob, stop_bash, binlog-binlog_search, binlog-binlog_properties, binlog-binlog_files, binlog-binlog_items, binlog-binlog_search_files / ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, binlog-binlog_errors, glob, binlog-binlog_search, binlog-binlog_items, binlog-binlog_files, binlog-binlog_properties, binlog-binlog_search_files, binlog-binlog_projects | — | ✅ |

> ⏰ **timeout** — run(s) hit the scenario timeout limit; scoring may be impacted by aborting model execution before it could produce its full output (increase via `timeout` in eval.yaml)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
