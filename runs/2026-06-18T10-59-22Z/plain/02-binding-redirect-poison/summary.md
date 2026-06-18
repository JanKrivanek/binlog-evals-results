## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-noop | Analysis — Find root cause of DiagnosticSource version conflict | 5.0/5 → 5.0/5 | **5.0/5** → 1.0/5 ⏰ 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-noop | Deep — Full autonomous root cause investigation and fix proposal | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-noop | Insight — Inspect how RAR processes binding redirects across TFMs | 2.0/5 → 2.0/5 | 2.0/5 → 2.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| eval-noop | Surface — Extract MSB3277 assembly version conflict details | 3.0/5 → **4.0/5** 🟢 | 3.0/5 → **5.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-3" id="ref-3">[3]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -14.6% due to: quality, tokens (1903698 → 5081722), time (916.9s → 1596.3s), tool calls (49 → 67)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Plugin) Quality unchanged but weighted score is -11.4% due to: quality, tokens (1238205 → 1794051), tool calls (42 → 62)
<a href="#user-content-ref-3" id="fn-3"><strong>[3]</strong></a> (Isolated) Quality improved but weighted score is -1.2% due to: completion (✓ → ✗), tokens (123706 → 222506), tool calls (8 → 15), time (72.2s → 118.3s)

> ⏰ **timeout** — run(s) hit the scenario timeout limit; scoring may be impacted by aborting model execution before it could produce its full output (increase via `timeout` in eval.yaml)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
