## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-noop | Analysis — Diagnose why code signing fails with access denied | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-noop | Deep — Full autonomous root cause investigation and fix proposal | 2.0/5 → 2.0/5 | 2.0/5 → **3.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ✅ |
| eval-noop | Insight — Inspect Distrib property across projects in signing build | 3.0/5 → 3.0/5 | 3.0/5 → **4.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ✅ |
| eval-noop | Surface — Identify signing failure from binlog | 2.0/5 → **3.0/5** 🟢 | 2.0/5 → 2.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -14.4% due to: completion (✓ → ✗), tool calls (7 → 10), tokens (114966 → 134509), time (50.0s → 62.8s)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Plugin) Quality unchanged but weighted score is -8.3% due to: quality, tokens (97340 → 115864), time (40.1s → 49.1s)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
