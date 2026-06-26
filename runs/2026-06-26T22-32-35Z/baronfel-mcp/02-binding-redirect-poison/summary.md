## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Find root cause of DiagnosticSource version conflict | 1.0/5 ⏰ → **4.0/5** 🟢 | 1.0/5 ⏰ → **4.0/5** 🟢 | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-get_diagnostics, binlog-list_projects, binlog-search_binlog, binlog-search_tasks_by_name, binlog-get_task_info, binlog-get_project_target_list, binlog-list_tasks_in_target, binlog-list_evaluations, stop_bash, binlog-get_target_info_by_id, binlog-get_project_build_time, binlog-list_files_from_binlog, binlog-get_file_from_binlog | — | ✅ |
| eval-mcp-assist | Deep — Full autonomous root cause investigation and fix proposal | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-mcp-assist | Insight — Inspect how RAR processes binding redirects across TFMs | 2.0/5 → 2.0/5 | 2.0/5 → 2.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| eval-mcp-assist | Surface — Extract MSB3277 assembly version conflict details | **4.0/5** → 3.0/5 🔴 | **4.0/5** → 2.0/5 🔴 | ✅ eval-mcp-assist; tools: binlog-load_binlog, binlog-get_diagnostics, read_bash, stop_bash, view, binlog-search_binlog, binlog-list_projects, grep, binlog-search_targets_by_name, binlog-get_expensive_projects, skill, binlog-list_evaluations, binlog-get_evaluation_items_by_name / ⚠️ NOT ACTIVATED | — | ❌ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -22.4% due to: quality, tokens (2679908 → 21598952), tool calls (60 → 217), time (885.9s → 1311.8s)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Isolated) Quality unchanged but weighted score is -18.4% due to: completion (✓ → ✗), tokens (336071 → 1455716), tool calls (15 → 63)

> ⏰ **timeout** — run(s) hit the scenario timeout limit; scoring may be impacted by aborting model execution before it could produce its full output (increase via `timeout` in eval.yaml)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
