## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| binlog-failure-analysis | Analysis — Diagnose why a file copy failed during build | 2.0/5 ⏰ → **5.0/5** 🟢 | 2.0/5 ⏰ → **3.0/5** 🟢 | ✅ binlog-failure-analysis; tools: skill | — | ✅ |
| binlog-failure-analysis | Deep — Full autonomous root cause investigation and fix proposal | **5.0/5** → 4.0/5 🔴 | **5.0/5** → 4.0/5 🔴 | ✅ binlog-failure-analysis; tools: skill | — | ❌ |
| binlog-failure-analysis | Insight — Determine which projects are in the solution vs referenced | 3.0/5 → 3.0/5 | 3.0/5 → **4.0/5** 🟢 | ✅ binlog-failure-analysis; tools: skill | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| binlog-failure-analysis | Surface — Identify build error from binlog (missing file copy) | 4.0/5 → **5.0/5** 🟢 | 4.0/5 → 4.0/5 | ✅ binlog-failure-analysis; tools: skill | — | ✅ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -2.2% due to: tokens (205264 → 368027), tool calls (13 → 21), time (79.9s → 102.5s)

> ⏰ **timeout** — run(s) hit the scenario timeout limit; scoring may be impacted by aborting model execution before it could produce its full output (increase via `timeout` in eval.yaml)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
