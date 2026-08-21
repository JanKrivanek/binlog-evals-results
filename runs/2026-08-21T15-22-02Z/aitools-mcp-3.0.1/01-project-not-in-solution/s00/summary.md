## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Identify build error from binlog (missing file copy) | 5.0/5 → 5.0/5 | **5.0/5** → 4.0/5 🔴 | ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, binlog-binlog_errors / ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, binlog-binlog_errors, binlog-binlog_incremental_analysis, binlog-binlog_projects, binlog-binlog_project_targets, binlog-binlog_search, binlog-binlog_tasks_in_target, binlog-binlog_task_details, binlog-binlog_compare_property | — | ❌ |

Model: claude-opus-5 | Judge: claude-opus-5
