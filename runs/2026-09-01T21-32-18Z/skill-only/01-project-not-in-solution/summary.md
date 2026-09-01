## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| binlog-failure-analysis | Analysis — Diagnose why a file copy failed during build | 3.0/5 → **5.0/5** 🟢 | 3.0/5 → 3.0/5 | ✅ binlog-failure-analysis; tools: skill, view, stop_bash / ✅ binlog-failure-analysis; tools: skill, view | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| binlog-failure-analysis | Deep — Full autonomous root cause investigation and fix proposal | 4.0/5 → **5.0/5** 🟢 | 4.0/5 → **5.0/5** 🟢 | ✅ binlog-failure-analysis; tools: skill / ✅ binlog-failure-analysis; tools: skill, view | — | ✅ |
| binlog-failure-analysis | Insight — Determine which projects are in the solution vs referenced | **5.0/5** → 3.0/5 🔴 | **5.0/5** → 3.0/5 🔴 | ✅ binlog-failure-analysis; tools: skill, view / ✅ binlog-failure-analysis; tools: skill | — | ❌ |
| binlog-failure-analysis | Surface — Identify build error from binlog (missing file copy) | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ binlog-failure-analysis; tools: skill | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -4.6% due to: tokens (443554 → 705084), quality, tool calls (16 → 20)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Plugin) Quality unchanged but weighted score is -11.4% due to: tokens (207446 → 569916), quality, time (41.4s → 95.0s), tool calls (10 → 15)

Model: claude-opus-5 | Judge: claude-opus-5
