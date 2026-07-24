## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why code signing fails with access denied | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-binlog_errors, binlog-binlog_double_writes, binlog-binlog_search_targets, binlog-binlog_tasks_in_target, binlog-binlog_search, binlog-binlog_task_details, binlog-binlog_projects / ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -1.3% due to: tokens (158373 → 352519), tool calls (10 → 21)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
