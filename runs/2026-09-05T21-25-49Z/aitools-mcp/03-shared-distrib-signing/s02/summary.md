## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Insight — Inspect Distrib property across projects in signing build | 4.0/5 → 4.0/5 | 4.0/5 → **5.0/5** 🟢 | ✅ eval-mcp-assist; tools: skill, binlog-binlog_compare_property, binlog-binlog_double_writes, binlog-binlog_errors, binlog-binlog_warnings, binlog-binlog_task_details, binlog-binlog_search / ✅ eval-mcp-assist; tools: skill, binlog-binlog_compare_property, binlog-binlog_double_writes, binlog-binlog_errors, binlog-binlog_task_details, binlog-binlog_search_files | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -4.5% due to: quality, time (96.0s → 135.8s), tokens (317362 → 376016)

Model: claude-opus-5 | Judge: claude-opus-5
