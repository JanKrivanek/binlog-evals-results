## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-noop | Analysis — Diagnose why a file copy failed during build | 3.0/5 → 3.0/5 | **3.0/5** → 2.0/5 🔴 | ✅ eval-noop; tools: skill | — | ❌ |
| eval-noop | Deep — Full autonomous root cause investigation and fix proposal | 4.0/5 → **5.0/5** 🟢 | 4.0/5 → **5.0/5** 🟢 | ✅ eval-noop; tools: skill, edit / ⚠️ NOT ACTIVATED | — | ✅ |
| eval-noop | Insight — Determine which projects are in the solution vs referenced | 1.0/5 → **3.0/5** 🟢 | 1.0/5 → **2.0/5** 🟢 | ✅ eval-noop; tools: skill | — | ✅ |
| eval-noop | Surface — Identify build error from binlog (missing file copy) | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED / ✅ eval-noop; tools: skill, glob | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -6.9% due to: tokens (181292 → 303530), tool calls (12 → 22), time (83.6s → 133.3s)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
