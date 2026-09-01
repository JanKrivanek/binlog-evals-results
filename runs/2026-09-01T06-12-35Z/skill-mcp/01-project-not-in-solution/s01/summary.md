## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| binlog-failure-analysis | Analysis — Diagnose why a file copy failed during build | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ⚠️ NOT ACTIVATED / ✅ binlog-failure-analysis; tools: skill, binlog-binlog_overview, binlog-binlog_errors, glob, binlog-binlog_compare_property, binlog-binlog_projects, binlog-binlog_search_files, binlog-binlog_task_details, binlog-binlog_properties, binlog-binlog_items, binlog-binlog_project_targets, binlog-binlog_explore_node, binlog-binlog_evaluations, binlog-binlog_search, binlog-binlog_evaluation_global_properties | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -2.1% due to: tokens (311576 → 535512), tool calls (12 → 22)

Model: claude-opus-5 | Judge: claude-opus-5
