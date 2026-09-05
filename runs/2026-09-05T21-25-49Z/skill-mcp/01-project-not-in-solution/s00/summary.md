## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| binlog-failure-analysis | Surface — Identify build error from binlog (missing file copy) | 5.0/5 → 5.0/5 ⏰ | 5.0/5 → 5.0/5 | ⚠️ NOT ACTIVATED / ✅ binlog-failure-analysis; tools: skill, binlog-binlog_overview, binlog-binlog_errors, binlog-binlog_incremental_analysis, read_bash, stop_bash, binlog-binlog_search, binlog-binlog_project_targets, binlog-binlog_explore_node, binlog-binlog_compare_property | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -35.3% due to: completion (✓ → ✗), quality, tokens (119914 → 502827), errors (0 → 1), tool calls (5 → 13), time (35.0s → 300.6s)

> ⏰ **timeout** — run(s) hit the scenario timeout limit; scoring may be impacted by aborting model execution before it could produce its full output (increase via `timeout` in eval.yaml)

Model: claude-opus-5 | Judge: claude-opus-5
