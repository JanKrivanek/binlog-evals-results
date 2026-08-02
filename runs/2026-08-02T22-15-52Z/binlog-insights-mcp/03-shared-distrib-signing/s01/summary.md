## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why code signing fails with access denied | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-insights-binlog_overview, binlog-insights-binlog_errors, glob, binlog-insights-binlog_search, binlog-insights-binlog_tasks_in_target, binlog-insights-binlog_task_details, binlog-insights-binlog_list_files, binlog-insights-binlog_get_file, binlog-insights-binlog_project_targets / ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -4.6% due to: tokens (148669 → 542131), tool calls (8 → 31)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
