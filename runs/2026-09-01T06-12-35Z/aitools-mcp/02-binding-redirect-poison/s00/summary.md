## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Extract MSB3277 assembly version conflict details | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-binlog_assembly_conflicts, binlog-binlog_overview, binlog-binlog_errors, binlog-binlog_search, binlog-binlog_assets, binlog-binlog_search_files, binlog-binlog_task_details, binlog-binlog_files, binlog-binlog_explore_node, binlog-binlog_diagnose / ✅ eval-mcp-assist; tools: skill, binlog-binlog_assembly_conflicts, read_bash, glob, stop_bash, binlog-binlog_overview, binlog-binlog_errors | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -9.9% due to: quality, time (59.5s → 163.9s), tokens (313485 → 441292)

Model: claude-opus-5 | Judge: claude-opus-5
