## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-noop | Analysis — Diagnose why code signing fails with access denied | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ✅ eval-noop; tools: skill | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-noop | Deep — Full autonomous root cause investigation and fix proposal | 3.0/5 → **4.0/5** 🟢 | 3.0/5 → 3.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| eval-noop | Insight — Inspect Distrib property across projects in signing build | 2.0/5 → **4.0/5** 🟢 | 2.0/5 → **3.0/5** 🟢 | ✅ eval-noop; tools: skill | — | ✅ |
| eval-noop | Surface — Identify signing failure from binlog | **4.0/5** → 3.0/5 🔴 | **4.0/5** → 3.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -6.8% due to: tokens (87043 → 676286), tool calls (9 → 27), time (45.4s → 212.3s)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Plugin) Quality unchanged but weighted score is -10.6% due to: completion (✓ → ✗), tokens (1375807 → 1783576), time (203.8s → 292.4s)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
