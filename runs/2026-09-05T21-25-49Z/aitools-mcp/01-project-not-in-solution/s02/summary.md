## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Insight — Determine which projects are in the solution vs referenced | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, binlog-binlog_errors, binlog-binlog_projects, binlog-binlog_compare_property, binlog-binlog_search_files / ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, read_bash, glob, stop_bash, binlog-binlog_errors, binlog-binlog_projects, binlog-binlog_compare_property | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -3.7% due to: quality

Model: claude-opus-5 | Judge: claude-opus-5
