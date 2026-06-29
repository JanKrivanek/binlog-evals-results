## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-noop | Analysis — Diagnose why code signing fails with access denied | 2.0/5 → **3.0/5** 🟢 | 2.0/5 → **3.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-noop | Deep — Full autonomous root cause investigation and fix proposal | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| eval-noop | Insight — Inspect Distrib property across projects in signing build | 3.0/5 → **4.0/5** 🟢 | 3.0/5 → **4.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ✅ |
| eval-noop | Surface — Identify signing failure from binlog | 3.0/5 → **4.0/5** 🟢 | **3.0/5** → 2.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality improved but weighted score is -8.5% due to: completion (✓ → ✗), tokens (139720 → 223836), time (79.1s → 142.5s), tool calls (10 → 12)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Isolated) Quality unchanged but weighted score is -21.7% due to: completion (✓ → ✗), tokens (1156386 → 2283764), tool calls (34 → 47), time (523.5s → 713.4s)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
