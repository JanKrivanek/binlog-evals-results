## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| binlog-failure-analysis | Analysis — Diagnose the root cause of the compiler errors | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ binlog-failure-analysis; tools: skill | — | ✅ |
| binlog-failure-analysis | Deep — Full autonomous root-cause investigation and fix | 1.0/5 ⏰ → **5.0/5** 🟢 | 1.0/5 ⏰ → **5.0/5** 🟢 | ✅ binlog-failure-analysis; tools: skill | — | ✅ |
| binlog-failure-analysis | Insight — Split the failures per target framework | **5.0/5** → 4.0/5 🔴 | **5.0/5** → 4.0/5 🔴 | ✅ binlog-failure-analysis; tools: skill | — | ❌ |
| binlog-failure-analysis | Surface — Extract build errors from a large multi-target failure | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ binlog-failure-analysis; tools: skill | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -2.1% due to: tool calls (7 → 10), time (50.1s → 66.1s)

> ⏰ **timeout** — run(s) hit the scenario timeout limit; scoring may be impacted by aborting model execution before it could produce its full output (increase via `timeout` in eval.yaml)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
