## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| binlog-failure-analysis | Analysis — Find root cause of DiagnosticSource version conflict | 5.0/5 → 5.0/5 | **5.0/5** → 4.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ✅ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| binlog-failure-analysis | Deep — Full autonomous root cause investigation and fix proposal | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED | — | ✅ |
| binlog-failure-analysis | Insight — Inspect how RAR processes binding redirects across TFMs | 2.0/5 → 2.0/5 | 2.0/5 → 2.0/5 | ⚠️ NOT ACTIVATED | — | ✅ |
| binlog-failure-analysis | Surface — Extract MSB3277 assembly version conflict details | 3.0/5 → **4.0/5** 🟢 | 3.0/5 → **4.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ✅ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality dropped but weighted score is +1.1% due to: completion (✗ → ✓), tokens (2369445 → 1106669), time (724.6s → 406.4s), tool calls (67 → 46)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
