## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| binlog-failure-analysis | Analysis — Diagnose why code signing fails with access denied | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ✅ binlog-failure-analysis; tools: skill | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| binlog-failure-analysis | Deep — Full autonomous root cause investigation and fix proposal | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ✅ binlog-failure-analysis; tools: skill | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| binlog-failure-analysis | Insight — Inspect Distrib property across projects in signing build | 2.0/5 → **3.0/5** 🟢 | 2.0/5 → **3.0/5** 🟢 | ✅ binlog-failure-analysis; tools: skill | — | ✅ |
| binlog-failure-analysis | Surface — Identify signing failure from binlog | 3.0/5 → **4.0/5** 🟢 | 3.0/5 → **5.0/5** 🟢 | ✅ binlog-failure-analysis; tools: skill | — | ✅ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -30.1% due to: completion (✓ → ✗), quality, tokens (252077 → 662019), tool calls (11 → 29), time (174.1s → 258.1s)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Plugin) Quality unchanged but weighted score is -16.6% due to: quality, tokens (2031776 → 3869582), tool calls (52 → 89), time (332.5s → 486.5s)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
