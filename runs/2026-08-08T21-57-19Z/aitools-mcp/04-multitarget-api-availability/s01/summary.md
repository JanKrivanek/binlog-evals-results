## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose the root cause of the compiler errors | **4.0/5** → 3.0/5 🔴 | 4.0/5 → 4.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, binlog-binlog_errors, stop_bash, binlog-binlog_search, binlog-binlog_items, binlog-binlog_properties, binlog-binlog_search_files, binlog-binlog_files / ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, binlog-binlog_errors, stop_bash, binlog-binlog_search, binlog-binlog_properties, binlog-binlog_items, binlog-binlog_search_files, binlog-binlog_evaluations, binlog-binlog_evaluation_properties, binlog-binlog_files | — | ✅ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality dropped but weighted score is +0.1% due to: completion (✗ → ✓), tokens (1279419 → 346605), time (553.5s → 136.6s), tool calls (39 → 20)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
