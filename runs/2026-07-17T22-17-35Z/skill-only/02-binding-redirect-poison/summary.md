## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| binlog-failure-analysis | Analysis — Find root cause of DiagnosticSource version conflict | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ binlog-failure-analysis; tools: skill | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| binlog-failure-analysis | Deep — Full autonomous root cause investigation and fix proposal | 2.0/5 → **4.0/5** 🟢 | 2.0/5 → **4.0/5** 🟢 | ✅ binlog-failure-analysis; tools: skill | — | ✅ |
| binlog-failure-analysis | Insight — Inspect how RAR processes binding redirects across TFMs | 2.0/5 → 2.0/5 | 2.0/5 → 2.0/5 | ✅ binlog-failure-analysis; tools: skill | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| binlog-failure-analysis | Surface — Extract MSB3277 assembly version conflict details | 3.0/5 → **4.0/5** 🟢 | 3.0/5 → **5.0/5** 🟢 | ✅ binlog-failure-analysis; tools: skill | — | ❌ <a href="#user-content-fn-3" id="ref-3">[3]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -6.5% due to: tokens (1117699 → 2793672), tool calls (39 → 66)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Isolated) Quality unchanged but weighted score is -12.2% due to: tokens (1373250 → 4424150), quality, tool calls (52 → 89), time (352.2s → 555.1s)
<a href="#user-content-ref-3" id="fn-3"><strong>[3]</strong></a> (Isolated) Quality improved but weighted score is -5.6% due to: completion (✓ → ✗), tokens (104932 → 140815), time (43.9s → 53.9s)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
