## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why code signing fails with access denied | 2.0/5 → **3.0/5** 🟢 | 2.0/5 → 2.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| eval-mcp-assist | Insight — Inspect Distrib property across projects in signing build | 3.0/5 → **4.0/5** 🟢 | 3.0/5 → 3.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-list_projects, binlog-get_diagnostics, binlog-list_evaluations, binlog-get_evaluation_properties_by_name, binlog-search_binlog, binlog-get_task_info, binlog-get_target_info_by_name / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, binlog-list_evaluations, binlog-get_evaluation_properties_by_name, binlog-search_binlog, binlog-get_target_info_by_id, binlog-get_task_info | — | ✅ |
| eval-mcp-assist | Surface — Identify signing failure from binlog | 3.0/5 → **4.0/5** 🟢 | 3.0/5 → 3.0/5 | ⚠️ NOT ACTIVATED | — | ✅ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -17.2% due to: completion (✓ → ✗), tokens (103090 → 260767), tool calls (6 → 19), time (61.1s → 88.2s)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Isolated) Quality unchanged but weighted score is -5.0% due to: tokens (844074 → 1750351), tool calls (32 → 73)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
