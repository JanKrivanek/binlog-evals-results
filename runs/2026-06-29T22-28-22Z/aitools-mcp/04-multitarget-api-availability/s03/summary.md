## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Deep — Full autonomous root-cause investigation and fix | 4.0/5 ⏰ → 4.0/5 | 4.0/5 ⏰ → **5.0/5** 🟢 | ✅ eval-mcp-assist; tools: binlog-binlog_overview, binlog-binlog_errors, stop_bash, binlog-binlog_search, task, read_agent, skill, binlog-binlog_files, binlog-binlog_search_files, binlog-binlog_properties / ⚠️ NOT ACTIVATED | — | ✅ |

> ⏰ **timeout** — run(s) hit the scenario timeout limit; scoring may be impacted by aborting model execution before it could produce its full output (increase via `timeout` in eval.yaml)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
