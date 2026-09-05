## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Identify signing failure from binlog | 5.0/5 → 5.0/5 | **5.0/5** → 4.0/5 🔴 | ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, read_bash, glob, stop_bash, binlog-binlog_errors, binlog-binlog_task_details, binlog-binlog_double_writes, binlog-binlog_search, binlog-binlog_projects, binlog-binlog_search_files, binlog-binlog_compare_property / ✅ eval-mcp-assist; tools: skill, binlog-binlog_errors, binlog-binlog_task_details, binlog-binlog_double_writes | — | ❌ |

Model: claude-opus-5 | Judge: claude-opus-5
