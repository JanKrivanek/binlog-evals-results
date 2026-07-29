## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Deep — Full autonomous root-cause investigation and fix | **5.0/5** → 4.0/5 🔴 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, binlog-binlog_errors, glob, stop_bash, binlog-binlog_search, binlog-binlog_items, binlog-binlog_properties, binlog-binlog_search_files, binlog-binlog_files, binlog-binlog_evaluations, binlog-binlog_evaluation_properties, binlog-binlog_projects / ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, binlog-binlog_errors, glob, stop_bash, binlog-binlog_search, binlog-binlog_items, binlog-binlog_properties, binlog-binlog_files, binlog-binlog_search_files, binlog-binlog_projects, binlog-binlog_evaluations, binlog-binlog_evaluation_global_properties | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -22.3% due to: completion (✓ → ✗), tokens (835976 → 1557235), quality, tool calls (40 → 54)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
