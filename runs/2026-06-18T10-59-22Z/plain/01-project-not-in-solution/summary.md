## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-noop | Analysis — Diagnose why a file copy failed during build | **3.0/5** → 1.0/5 ⏰ 🔴 | 3.0/5 → 3.0/5 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-noop | Deep — Full autonomous root cause investigation and fix proposal | 4.0/5 → 4.0/5 ⏰ | 4.0/5 → **5.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-noop | Insight — Determine which projects are in the solution vs referenced | 2.0/5 → 2.0/5 | 2.0/5 → **3.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ✅ |
| eval-noop | Surface — Identify build error from binlog (missing file copy) | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -29.4% due to: completion (✓ → ✗), tokens (1075633 → 3009136), errors (0 → 1), time (437.3s → 900.2s), tool calls (40 → 71)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Isolated) Quality unchanged but weighted score is -6.2% due to: quality

> ⏰ **timeout** — run(s) hit the scenario timeout limit; scoring may be impacted by aborting model execution before it could produce its full output (increase via `timeout` in eval.yaml)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
