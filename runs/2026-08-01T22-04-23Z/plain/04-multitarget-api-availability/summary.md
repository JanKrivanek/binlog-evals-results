## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-noop | Analysis — Diagnose the root cause of the compiler errors | 1.0/5 ⏰ → **4.0/5** 🟢 | 1.0/5 ⏰ → **4.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ✅ |
| eval-noop | Deep — Full autonomous root-cause investigation and fix | **5.0/5** → 4.0/5 🔴 | **5.0/5** → 3.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-noop | Insight — Split the failures per target framework | **5.0/5** → 2.0/5 🔴 | **5.0/5** → 2.0/5 🔴 | ✅ eval-noop; tools: skill / ⚠️ NOT ACTIVATED | — | ❌ |
| eval-noop | Surface — Extract build errors from a large multi-target failure | **4.0/5** → 1.0/5 ⏰ 🔴 | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED | — | ❌ |

> ⏰ **timeout** — run(s) hit the scenario timeout limit; scoring may be impacted by aborting model execution before it could produce its full output (increase via `timeout` in eval.yaml)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
