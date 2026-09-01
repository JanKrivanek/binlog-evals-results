## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| binlog-failure-analysis | Insight — Split the failures per target framework | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ binlog-failure-analysis; tools: skill, binlog-binlog_overview, binlog-binlog_errors, read_bash, stop_bash, glob, binlog-binlog_search, binlog-binlog_explore_node, binlog-binlog_task_details / ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -2.1% due to: tokens (457430 → 635141), tool calls (18 → 22)

Model: claude-opus-5 | Judge: claude-opus-5
