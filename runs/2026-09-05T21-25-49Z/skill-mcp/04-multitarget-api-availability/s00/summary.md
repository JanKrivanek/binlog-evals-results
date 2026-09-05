## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| binlog-failure-analysis | Surface — Extract build errors from a large multi-target failure | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ binlog-failure-analysis; tools: skill, binlog-binlog_overview, binlog-binlog_errors, read_bash, stop_bash, glob, binlog-binlog_search / ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -29.2% due to: completion (✓ → ✗), tokens (182441 → 395183), quality, time (43.5s → 194.8s), tool calls (8 → 14)

Model: claude-opus-5 | Judge: claude-opus-5
