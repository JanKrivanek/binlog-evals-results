## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-noop | Analysis — Find root cause of DiagnosticSource version conflict | 5.0/5 → 5.0/5 | **5.0/5** → 4.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-noop | Deep — Full autonomous root cause investigation and fix proposal | 2.0/5 → 2.0/5 | 2.0/5 → 2.0/5 ⏰ | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-noop | Insight — Inspect how RAR processes binding redirects across TFMs | 2.0/5 → 2.0/5 | 2.0/5 → 2.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| eval-noop | Surface — Extract MSB3277 assembly version conflict details | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-3" id="ref-3">[3]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -15.2% due to: quality, errors (0 → 1), tokens (10752524 → 13887639), time (1191.3s → 1800.1s), tool calls (142 → 179)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Isolated) Quality unchanged but weighted score is -0.6% due to: tokens (1127235 → 1284687)
<a href="#user-content-ref-3" id="fn-3"><strong>[3]</strong></a> (Isolated) Quality unchanged but weighted score is -28.2% due to: completion (✓ → ✗), tokens (126372 → 438982), quality, tool calls (8 → 24), time (39.3s → 106.0s)

> ⏰ **timeout** — run(s) hit the scenario timeout limit; scoring may be impacted by aborting model execution before it could produce its full output (increase via `timeout` in eval.yaml)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
