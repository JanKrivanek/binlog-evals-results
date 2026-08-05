## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-noop | Analysis — Diagnose why a file copy failed during build | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ✅ eval-noop; tools: skill / ✅ eval-noop; tools: skill, view | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-noop | Deep — Full autonomous root cause investigation and fix proposal | 4.0/5 → **5.0/5** 🟢 | **4.0/5** → 3.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-noop | Insight — Determine which projects are in the solution vs referenced | 2.0/5 → **4.0/5** 🟢 | 2.0/5 → 2.0/5 | ✅ eval-noop; tools: skill / ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| eval-noop | Surface — Identify build error from binlog (missing file copy) | 4.0/5 → 4.0/5 | 4.0/5 → **5.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ✅ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -4.1% due to: tokens (286109 → 419736), time (155.8s → 222.0s), tool calls (17 → 22)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Plugin) Quality unchanged but weighted score is -8.5% due to: quality, tokens (312558 → 506989), time (177.8s → 231.6s), tool calls (19 → 24)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
