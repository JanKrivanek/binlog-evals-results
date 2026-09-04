## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Identify signing failure from binlog | 5.0/5 → 5.0/5 ⏰ | 5.0/5 → 5.0/5 ⏰ | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: skill, binlog-insights-binlog_overview, binlog-insights-binlog_errors, binlog-insights-binlog_task_details, binlog-insights-binlog_search, binlog-insights-binlog_tasks_in_target | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -30.0% due to: completion (✓ → ✗), tokens (204551 → 1176161), errors (0 → 1), tool calls (9 → 30), time (41.4s → 302.2s)

> ⏰ **timeout** — run(s) hit the scenario timeout limit; scoring may be impacted by aborting model execution before it could produce its full output (increase via `timeout` in eval.yaml)

Model: claude-opus-5 | Judge: claude-opus-5
