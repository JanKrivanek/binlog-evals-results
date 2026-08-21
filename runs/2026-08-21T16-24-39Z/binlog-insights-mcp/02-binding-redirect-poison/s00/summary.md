## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Extract MSB3277 assembly version conflict details | 5.0/5 → 5.0/5 | **5.0/5** → 4.0/5 ⏰ 🔴 | ✅ eval-mcp-assist; tools: skill, binlog-insights-binlog_overview, binlog-insights-binlog_warnings, glob, binlog-insights-binlog_errors, read_bash, stop_bash, binlog-insights-binlog_search, binlog-insights-binlog_items / ✅ eval-mcp-assist; tools: skill, binlog-insights-binlog_overview, binlog-insights-binlog_errors, read_bash, stop_bash, glob, binlog-insights-binlog_search, binlog-insights-binlog_items | — | ❌ |

> ⏰ **timeout** — run(s) hit the scenario timeout limit; scoring may be impacted by aborting model execution before it could produce its full output (increase via `timeout` in eval.yaml)

Model: claude-opus-5 | Judge: claude-opus-5
