## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-noop | Analysis — Diagnose why code signing fails with access denied | 2.0/5 → 2.0/5 | 2.0/5 → 2.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-noop | Deep — Full autonomous root cause investigation and fix proposal | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| eval-noop | Insight — Inspect Distrib property across projects in signing build | **4.0/5** → 3.0/5 🔴 | **4.0/5** → 3.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-noop | Surface — Identify signing failure from binlog | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-3" id="ref-3">[3]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -10.0% due to: tokens (130105 → 304325), tool calls (8 → 16), time (58.6s → 147.1s)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Isolated) Quality unchanged but weighted score is -19.3% due to: completion (✓ → ✗), tokens (1506091 → 2134994), tool calls (35 → 55), time (502.4s → 658.0s)
<a href="#user-content-ref-3" id="fn-3"><strong>[3]</strong></a> (Plugin) Quality unchanged but weighted score is -3.4% due to: tokens (95904 → 149975), tool calls (7 → 10)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
