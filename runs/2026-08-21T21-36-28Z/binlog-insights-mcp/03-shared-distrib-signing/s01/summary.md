## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why code signing fails with access denied | 4.0/5 → 4.0/5 | 4.0/5 → **5.0/5** 🟢 | ✅ eval-mcp-assist; tools: skill, binlog-insights-binlog_overview, binlog-insights-binlog_errors, read_bash, stop_bash, binlog-insights-binlog_tasks_in_target, binlog-insights-binlog_search, binlog-insights-binlog_task_details, binlog-insights-binlog_search_targets, binlog-insights-binlog_list_files, binlog-insights-binlog_item_types, binlog-insights-binlog_get_file, binlog-insights-binlog_items / ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -18.0% due to: quality, tokens (235797 → 620578), tool calls (9 → 26), time (57.4s → 273.8s)

Model: claude-opus-5 | Judge: claude-opus-5
