## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-noop | Analysis — Diagnose why a file copy failed during build | 1.0/5 ⏰ → **3.0/5** 🟢 | 1.0/5 ⏰ → **2.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ✅ |
| eval-noop | Deep — Full autonomous root cause investigation and fix proposal | **4.0/5** → 1.0/5 ⏰ 🔴 | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-noop | Insight — Determine which projects are in the solution vs referenced | **3.0/5** → 2.0/5 🔴 | 3.0/5 → **4.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-noop | Surface — Identify build error from binlog (missing file copy) | 4.0/5 → **5.0/5** 🟢 | 4.0/5 → **5.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ✅ |

> ⏰ **timeout** — run(s) hit the scenario timeout limit; scoring may be impacted by aborting model execution before it could produce its full output (increase via `timeout` in eval.yaml)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
