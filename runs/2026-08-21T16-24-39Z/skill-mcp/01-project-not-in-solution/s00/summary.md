## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| binlog-failure-analysis | Surface — Identify build error from binlog (missing file copy) | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ binlog-failure-analysis; tools: skill, binlog-binlog_overview, read_bash, glob, stop_bash, binlog-binlog_errors, binlog-binlog_incremental_analysis, binlog-binlog_search, binlog-binlog_compare_property / ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -24.7% due to: completion (✓ → ✗), tokens (170494 → 454872), time (36.6s → 112.9s), tool calls (8 → 15)

Model: claude-opus-5 | Judge: claude-opus-5
