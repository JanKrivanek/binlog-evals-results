## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | 2.0/5 → **4.0/5** 🟢 | 2.0/5 → 2.0/5 | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: binlog-insights-binlog_overview, binlog-insights-binlog_errors, binlog-insights-binlog_warnings, glob, binlog-insights-binlog_search, stop_bash, binlog-insights-binlog_task_details, binlog-insights-binlog_items, binlog-insights-binlog_properties, binlog-insights-binlog_list_files, binlog-insights-binlog_get_file, binlog-insights-binlog_nuget, binlog-insights-binlog_compiler, task, skill, read_agent, binlog-insights-binlog_projects, rg, binlog-insights-binlog_item_types, view, read_bash, binlog-insights-binlog_search_tasks, binlog-insights-binlog_search_targets, binlog-insights-binlog_project_targets, binlog-insights-binlog_imports, binlog-insights-binlog_evaluations, binlog-insights-binlog_evaluation_global_properties | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -1.6% due to: tool calls (59 → 186), tokens (3893199 → 4313100)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
