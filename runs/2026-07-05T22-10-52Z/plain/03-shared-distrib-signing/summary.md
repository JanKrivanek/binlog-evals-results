## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-noop | Analysis — Diagnose why code signing fails with access denied | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-noop | Deep — Full autonomous root cause investigation and fix proposal | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| eval-noop | Insight — Inspect Distrib property across projects in signing build | **3.0/5** → 2.0/5 🔴 | 3.0/5 → 3.0/5 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-noop | Surface — Identify signing failure from binlog | 3.0/5 → 3.0/5 | 3.0/5 → **4.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-3" id="ref-3">[3]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -18.2% due to: completion (✓ → ✗), tokens (120619 → 335522), time (79.6s → 190.7s), tool calls (7 → 13)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Isolated) Quality unchanged but weighted score is -3.2% due to: quality
<a href="#user-content-ref-3" id="fn-3"><strong>[3]</strong></a> (Isolated) Quality unchanged but weighted score is -16.8% due to: completion (✓ → ✗), quality

Model: claude-opus-4.6 | Judge: claude-opus-4.6
