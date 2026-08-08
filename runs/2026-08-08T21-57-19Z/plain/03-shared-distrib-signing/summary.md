## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-noop | Analysis — Diagnose why code signing fails with access denied | **3.0/5** → 2.0/5 🔴 | **3.0/5** → 2.0/5 🔴 | ⚠️ NOT ACTIVATED / ✅ eval-noop; tools: glob, skill | — | ❌ |
| eval-noop | Deep — Full autonomous root cause investigation and fix proposal | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-noop | Insight — Inspect Distrib property across projects in signing build | 3.0/5 → 3.0/5 | 3.0/5 → **4.0/5** 🟢 | ✅ eval-noop; tools: skill, view / ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| eval-noop | Surface — Identify signing failure from binlog | 3.0/5 → 3.0/5 | **3.0/5** → 2.0/5 🔴 | ⚠️ NOT ACTIVATED / ✅ eval-noop; tools: skill | — | ❌ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -13.4% due to: tokens (1437084 → 3228771), quality, time (377.6s → 729.3s), tool calls (44 → 71)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Plugin) Quality improved but weighted score is -2.1% due to: completion (✓ → ✗), tokens (224822 → 434587), time (67.7s → 104.5s), tool calls (18 → 26)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
