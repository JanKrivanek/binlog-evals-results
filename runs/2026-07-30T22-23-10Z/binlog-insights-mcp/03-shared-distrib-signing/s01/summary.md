## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why code signing fails with access denied | 2.0/5 → 2.0/5 | 2.0/5 → **3.0/5** 🟢 | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: skill, binlog-insights-binlog_overview, binlog-insights-binlog_errors, binlog-insights-binlog_task_details, binlog-insights-binlog_search, binlog-insights-binlog_list_files, binlog-insights-binlog_get_file, binlog-insights-binlog_items, binlog-insights-binlog_properties, binlog-insights-binlog_project_targets | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -7.8% due to: tokens (103090 → 208590), tool calls (6 → 17)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
