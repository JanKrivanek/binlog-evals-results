## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-noop | Analysis — Diagnose why code signing fails with access denied | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ✅ eval-noop; tools: skill / ✅ eval-noop; tools: skill, glob | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-noop | Deep — Full autonomous root cause investigation and fix proposal | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| eval-noop | Insight — Inspect Distrib property across projects in signing build | 3.0/5 → **4.0/5** 🟢 | 3.0/5 → **4.0/5** 🟢 | ✅ eval-noop; tools: skill | — | ✅ |
| eval-noop | Surface — Identify signing failure from binlog | **4.0/5** → 3.0/5 🔴 | 4.0/5 → **5.0/5** 🟢 | ✅ eval-noop; tools: glob, skill / ⚠️ NOT ACTIVATED | — | ❌ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -8.3% due to: tokens (148669 → 869601), tool calls (8 → 35), time (106.3s → 140.1s)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Isolated) Quality unchanged but weighted score is -18.8% due to: completion (✓ → ✗), tokens (1213547 → 1849611), time (472.3s → 594.0s), tool calls (34 → 41)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
