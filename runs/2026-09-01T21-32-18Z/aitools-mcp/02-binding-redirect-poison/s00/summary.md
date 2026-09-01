## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Extract MSB3277 assembly version conflict details | 4.0/5 → **5.0/5** 🟢 | 4.0/5 → 4.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-binlog_assembly_conflicts, read_bash, glob, binlog-binlog_overview, binlog-binlog_errors, binlog-binlog_search, binlog-binlog_search_files, binlog-binlog_task_details, binlog-binlog_files / ✅ eval-mcp-assist; tools: skill, binlog-binlog_assembly_conflicts, binlog-binlog_errors, read_bash, stop_bash, binlog-binlog_search | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -0.6% due to: time (71.0s → 106.9s)

Model: claude-opus-5 | Judge: claude-opus-5
