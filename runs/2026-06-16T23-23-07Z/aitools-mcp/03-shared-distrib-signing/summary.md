## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why code signing fails with access denied | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | 2.0/5 → **4.0/5** 🟢 | 2.0/5 → **3.0/5** 🟢 | ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, binlog-binlog_errors, binlog-binlog_projects, binlog-binlog_search, binlog-binlog_tasks_in_target, binlog-binlog_task_details, binlog-binlog_properties, binlog-binlog_evaluations, binlog-binlog_search_files, binlog-binlog_files, binlog-binlog_double_writes, binlog-binlog_items, binlog-binlog_explain_property / ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, binlog-binlog_errors, binlog-binlog_diagnose, binlog-binlog_tasks_in_target, binlog-binlog_projects, binlog-binlog_search_files, binlog-binlog_task_details, binlog-binlog_double_writes, binlog-binlog_properties, binlog-binlog_evaluations, binlog-binlog_search, binlog-binlog_explain_property, binlog-binlog_items, binlog-binlog_files, binlog-binlog_target_reasons | — | ✅ |
| eval-mcp-assist | Insight — Inspect Distrib property across projects in signing build | 3.0/5 → 3.0/5 | **3.0/5** → 2.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-mcp-assist | Surface — Identify signing failure from binlog | 3.0/5 → **5.0/5** 🟢 | 3.0/5 → **4.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ✅ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -19.3% due to: completion (✓ → ✗), quality

Model: claude-opus-4.6 | Judge: claude-opus-4.6
