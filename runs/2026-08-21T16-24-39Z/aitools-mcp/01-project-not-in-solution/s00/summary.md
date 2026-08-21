## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Identify build error from binlog (missing file copy) | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: skill, binlog-binlog_errors, binlog-binlog_search, binlog-binlog_projects, binlog-binlog_incremental_analysis, binlog-binlog_project_targets, binlog-binlog_task_details, binlog-binlog_compare_property, stop_bash | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -24.1% due to: completion (✓ → ✗), tokens (170494 → 470945), time (36.6s → 89.7s), tool calls (8 → 13)

Model: claude-opus-5 | Judge: claude-opus-5
