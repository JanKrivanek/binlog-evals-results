## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-insights-binlog_overview, binlog-insights-binlog_warnings, binlog-insights-binlog_errors, read_bash, stop_bash, binlog-insights-binlog_list_files, binlog-insights-binlog_items, binlog-insights-binlog_search, binlog-insights-binlog_task_details, binlog-insights-binlog_get_file, binlog-insights-binlog_item_types / ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -29.5% due to: completion (✓ → ✗), quality, tokens (1032288 → 2560305), tool calls (29 → 57), time (293.9s → 416.3s)

Model: claude-opus-5 | Judge: claude-opus-5
