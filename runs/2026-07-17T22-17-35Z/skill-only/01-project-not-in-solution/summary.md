## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| binlog-failure-analysis | Analysis — Diagnose why a file copy failed during build | **5.0/5** → 3.0/5 🔴 | **5.0/5** → 3.0/5 🔴 | ✅ binlog-failure-analysis; tools: skill | — | ❌ |
| binlog-failure-analysis | Deep — Full autonomous root cause investigation and fix proposal | 1.0/5 ⏰ → **3.0/5** 🟢 | 1.0/5 ⏰ → **5.0/5** 🟢 | ✅ binlog-failure-analysis; tools: skill | — | ✅ |
| binlog-failure-analysis | Insight — Determine which projects are in the solution vs referenced | **4.0/5** → 3.0/5 🔴 | **4.0/5** → 2.0/5 🔴 | ✅ binlog-failure-analysis; tools: skill | — | ❌ |
| binlog-failure-analysis | Surface — Identify build error from binlog (missing file copy) | 5.0/5 → 5.0/5 | **5.0/5** → 4.0/5 🔴 | ✅ binlog-failure-analysis; tools: skill | — | ❌ |

> ⏰ **timeout** — run(s) hit the scenario timeout limit; scoring may be impacted by aborting model execution before it could produce its full output (increase via `timeout` in eval.yaml)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
