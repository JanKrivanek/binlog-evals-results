## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why a file copy failed during build | **3.0/5** → 2.0/5 🔴 | 3.0/5 → **5.0/5** 🟢 | ✅ eval-mcp-assist; tools: skill, binlog-binlog_errors, binlog-binlog_overview, glob, binlog-binlog_projects, binlog-binlog_items, binlog-binlog_search, binlog-binlog_files, binlog-binlog_build_graph, binlog-binlog_evaluations, binlog-binlog_project_targets, binlog-binlog_target_reasons, binlog-binlog_search_files / ⚠️ NOT ACTIVATED | — | ✅ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality dropped but weighted score is +2.1% due to: completion (✗ → ✓), tokens (1252012 → 519638), time (293.1s → 127.1s), tool calls (45 → 25)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
