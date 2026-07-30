## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| binlog-failure-analysis | Analysis — Find root cause of DiagnosticSource version conflict | 4.0/5 → **5.0/5** 🟢 | 4.0/5 → 4.0/5 | ✅ binlog-failure-analysis; tools: skill | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| binlog-failure-analysis | Deep — Full autonomous root cause investigation and fix proposal | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ✅ binlog-failure-analysis; tools: glob, skill, web_fetch | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| binlog-failure-analysis | Insight — Inspect how RAR processes binding redirects across TFMs | 2.0/5 → 2.0/5 | 2.0/5 → 2.0/5 | ✅ binlog-failure-analysis; tools: skill | — | ❌ <a href="#user-content-fn-3" id="ref-3">[3]</a> |
| binlog-failure-analysis | Surface — Extract MSB3277 assembly version conflict details | 3.0/5 → **4.0/5** 🟢 | 3.0/5 → **4.0/5** 🟢 | ✅ binlog-failure-analysis; tools: skill | — | ❌ <a href="#user-content-fn-4" id="ref-4">[4]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -3.9% due to: quality, tokens (2333770 → 2981843), tool calls (55 → 67)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Plugin) Quality unchanged but weighted score is -3.5% due to: quality, tokens (3559344 → 4537305), tool calls (61 → 81)
<a href="#user-content-ref-3" id="fn-3"><strong>[3]</strong></a> (Plugin) Quality unchanged but weighted score is -25.2% due to: completion (✓ → ✗), quality, tool calls (28 → 52), tokens (902568 → 1258226)
<a href="#user-content-ref-4" id="fn-4"><strong>[4]</strong></a> (Plugin) Quality improved but weighted score is -0.1% due to: completion (✓ → ✗)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
