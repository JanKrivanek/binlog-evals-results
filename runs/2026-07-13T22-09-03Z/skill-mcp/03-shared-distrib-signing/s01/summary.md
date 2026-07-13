## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| binlog-failure-analysis | Analysis — Diagnose why code signing fails with access denied | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ✅ binlog-failure-analysis; tools: skill, binlog-binlog_overview, binlog-binlog_errors, binlog-binlog_diagnose, binlog-binlog_search, binlog-binlog_double_writes, binlog-binlog_tasks_in_target, binlog-binlog_search_files, binlog-binlog_task_details / ✅ binlog-failure-analysis; tools: skill, binlog-binlog_overview, binlog-binlog_errors, binlog-binlog_search, binlog-binlog_double_writes, binlog-binlog_search_files, binlog-binlog_files, binlog-binlog_projects | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -2.1% due to: tokens (131039 → 210609), tool calls (9 → 16)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
