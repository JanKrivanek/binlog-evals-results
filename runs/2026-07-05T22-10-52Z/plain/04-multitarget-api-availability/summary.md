## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-noop | Analysis — Diagnose the root cause of the compiler errors | **5.0/5** → 1.0/5 ⏰ 🔴 | **5.0/5** → 3.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-noop | Deep — Full autonomous root-cause investigation and fix | 4.0/5 → 4.0/5 ⏰ | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-noop | Insight — Split the failures per target framework | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| eval-noop | Surface — Extract build errors from a large multi-target failure | 4.0/5 → **5.0/5** 🟢 | **4.0/5** → 3.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -29.2% due to: completion (✓ → ✗), errors (0 → 1), tokens (997225 → 1969469), quality, time (637.9s → 900.1s), tool calls (44 → 61)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Plugin) Quality unchanged but weighted score is -7.6% due to: quality, tokens (796748 → 1132212), time (270.2s → 444.0s), tool calls (33 → 42)

> ⏰ **timeout** — run(s) hit the scenario timeout limit; scoring may be impacted by aborting model execution before it could produce its full output (increase via `timeout` in eval.yaml)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
