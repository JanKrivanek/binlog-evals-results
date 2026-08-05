## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| binlog-failure-analysis | Analysis — Diagnose why a file copy failed during build | 3.0/5 → **5.0/5** 🟢 | 3.0/5 → 3.0/5 | ✅ binlog-failure-analysis; tools: skill | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| binlog-failure-analysis | Deep — Full autonomous root cause investigation and fix proposal | 4.0/5 → 4.0/5 | 4.0/5 → **5.0/5** 🟢 | ✅ binlog-failure-analysis; tools: skill | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| binlog-failure-analysis | Insight — Determine which projects are in the solution vs referenced | 2.0/5 → 2.0/5 | 2.0/5 → 2.0/5 | ✅ binlog-failure-analysis; tools: skill | — | ✅ |
| binlog-failure-analysis | Surface — Identify build error from binlog (missing file copy) | **5.0/5** → 4.0/5 🔴 | 5.0/5 → 5.0/5 | ✅ binlog-failure-analysis; tools: skill | — | ❌ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -21.8% due to: completion (✓ → ✗), tokens (286109 → 3060810), tool calls (17 → 62), time (155.8s → 357.2s)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Isolated) Quality unchanged but weighted score is -23.9% due to: completion (✓ → ✗), tokens (1860221 → 4424091), tool calls (37 → 83), quality

Model: claude-opus-4.6 | Judge: claude-opus-4.6
