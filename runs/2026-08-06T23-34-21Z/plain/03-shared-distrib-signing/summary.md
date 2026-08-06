## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-noop | Analysis — Diagnose why code signing fails with access denied | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-noop | Deep — Full autonomous root cause investigation and fix proposal | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| eval-noop | Insight — Inspect Distrib property across projects in signing build | 3.0/5 → **4.0/5** 🟢 | **3.0/5** → 2.0/5 🔴 | ✅ eval-noop; tools: skill, view, stop_bash / ⚠️ NOT ACTIVATED | — | ❌ |
| eval-noop | Surface — Identify signing failure from binlog | 3.0/5 → 3.0/5 | **3.0/5** → 2.0/5 🔴 | ✅ eval-noop; tools: skill | — | ❌ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -9.9% due to: tokens (134266 → 221322), quality, time (48.1s → 116.8s), tool calls (8 → 11)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Plugin) Quality unchanged but weighted score is -5.4% due to: tokens (1472086 → 4418424), tool calls (35 → 87), time (278.2s → 828.1s)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
