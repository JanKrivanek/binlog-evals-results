## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-noop | Analysis — Diagnose why a file copy failed during build | 3.0/5 → **5.0/5** 🟢 | **3.0/5** → 2.0/5 🔴 | ✅ eval-noop; tools: skill, glob | — | ❌ |
| eval-noop | Deep — Full autonomous root cause investigation and fix proposal | 2.0/5 ⏰ → **4.0/5** 🟢 | 2.0/5 ⏰ → **5.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ✅ |
| eval-noop | Insight — Determine which projects are in the solution vs referenced | 2.0/5 → **5.0/5** 🟢 | 2.0/5 → **3.0/5** 🟢 | ✅ eval-noop; tools: skill / ✅ eval-noop; tools: skill, stop_bash | — | ✅ |
| eval-noop | Surface — Identify build error from binlog (missing file copy) | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -3.5% due to: tokens (326283 → 458021), tool calls (18 → 27)

> ⏰ **timeout** — run(s) hit the scenario timeout limit; scoring may be impacted by aborting model execution before it could produce its full output (increase via `timeout` in eval.yaml)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
