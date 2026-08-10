## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why code signing fails with access denied | 3.0/5 → 3.0/5 | **3.0/5** → 2.0/5 🔴 | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: skill, binlog-binlog_errors, binlog-binlog_search, binlog-binlog_tasks_in_target, binlog-binlog_task_details, binlog-binlog_double_writes, binlog-binlog_build_graph, binlog-binlog_items, binlog-binlog_search_files | — | ✅ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality dropped but weighted score is +4.6% due to: completion (✗ → ✓), tokens (561505 → 274152), time (153.9s → 67.1s), tool calls (27 → 18)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
