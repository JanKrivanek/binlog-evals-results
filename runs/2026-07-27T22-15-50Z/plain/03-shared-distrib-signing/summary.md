## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-noop | Analysis — Diagnose why code signing fails with access denied | **3.0/5** → 2.0/5 🔴 | 3.0/5 → 3.0/5 | ✅ eval-noop; tools: glob, skill / ✅ eval-noop; tools: skill | — | ❌ |
| eval-noop | Deep — Full autonomous root cause investigation and fix proposal | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-noop | Insight — Inspect Distrib property across projects in signing build | 2.0/5 → **3.0/5** 🟢 | 2.0/5 → 2.0/5 | ✅ eval-noop; tools: skill | — | ✅ |
| eval-noop | Surface — Identify signing failure from binlog | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ✅ eval-noop; tools: skill | — | ✅ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -4.7% due to: quality, time (332.5s → 402.6s)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
