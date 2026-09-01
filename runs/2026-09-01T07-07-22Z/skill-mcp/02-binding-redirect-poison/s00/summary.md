## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| binlog-failure-analysis | Surface — Extract MSB3277 assembly version conflict details | **5.0/5** → 4.0/5 🔴 | 5.0/5 → 5.0/5 ⏰ | ⚠️ NOT ACTIVATED / ✅ binlog-failure-analysis; tools: skill, binlog-binlog_assembly_conflicts, binlog-binlog_overview, binlog-binlog_errors, binlog-binlog_warnings, binlog-binlog_search, binlog-binlog_projects, binlog-binlog_search_files, binlog-binlog_task_details | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -35.3% due to: completion (✓ → ✗), quality, tokens (135285 → 990101), errors (0 → 1), tool calls (6 → 24), time (27.4s → 302.1s)

> ⏰ **timeout** — run(s) hit the scenario timeout limit; scoring may be impacted by aborting model execution before it could produce its full output (increase via `timeout` in eval.yaml)

Model: claude-opus-5 | Judge: claude-opus-5
