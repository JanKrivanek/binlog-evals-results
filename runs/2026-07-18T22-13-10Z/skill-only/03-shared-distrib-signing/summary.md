## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| binlog-failure-analysis | Analysis — Diagnose why code signing fails with access denied | 2.0/5 → **3.0/5** 🟢 | 2.0/5 → 2.0/5 | ✅ binlog-failure-analysis; tools: skill / ✅ binlog-failure-analysis; tools: skill, grep, view | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| binlog-failure-analysis | Deep — Full autonomous root cause investigation and fix proposal | 2.0/5 → **3.0/5** 🟢 | 2.0/5 → 2.0/5 | ✅ binlog-failure-analysis; tools: skill | — | ✅ |
| binlog-failure-analysis | Insight — Inspect Distrib property across projects in signing build | **4.0/5** → 2.0/5 🔴 | **4.0/5** → 3.0/5 🔴 | ✅ binlog-failure-analysis; tools: skill | — | ❌ |
| binlog-failure-analysis | Surface — Identify signing failure from binlog | 4.0/5 → 4.0/5 | 4.0/5 → **5.0/5** 🟢 | ✅ binlog-failure-analysis; tools: skill | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -21.8% due to: completion (✓ → ✗), tokens (220277 → 1264110), tool calls (12 → 43), time (73.9s → 236.0s)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Isolated) Quality unchanged but weighted score is -3.2% due to: tokens (175484 → 268601)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
