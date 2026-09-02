## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-noop | Analysis — Find root cause of DiagnosticSource version conflict | 5.0/5 → 5.0/5 | **5.0/5** → 4.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-noop | Deep — Full autonomous root cause investigation and fix proposal | 2.0/5 → **4.0/5** 🟢 | 2.0/5 → **4.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ✅ |
| eval-noop | Insight — Inspect how RAR processes binding redirects across TFMs | 2.0/5 → 2.0/5 | 2.0/5 → **3.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ✅ |
| eval-noop | Surface — Extract MSB3277 assembly version conflict details | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -5.0% due to: tokens (1337963 → 2974113), tool calls (34 → 56), time (428.5s → 614.8s)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Isolated) Quality unchanged but weighted score is -12.7% due to: completion (✓ → ✗), tokens (205660 → 267654), time (64.2s → 89.0s), tool calls (9 → 11)

Model: claude-opus-5 | Judge: claude-opus-5
