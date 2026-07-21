## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| binlog-failure-analysis | Analysis — Diagnose why code signing fails with access denied | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ✅ binlog-failure-analysis; tools: skill | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| binlog-failure-analysis | Deep — Full autonomous root cause investigation and fix proposal | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ✅ binlog-failure-analysis; tools: skill, view, grep / ✅ binlog-failure-analysis; tools: skill | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| binlog-failure-analysis | Insight — Inspect Distrib property across projects in signing build | **4.0/5** → 3.0/5 🔴 | **4.0/5** → 3.0/5 🔴 | ✅ binlog-failure-analysis; tools: skill | — | ✅ <a href="#user-content-fn-3" id="ref-3">[3]</a> |
| binlog-failure-analysis | Surface — Identify signing failure from binlog | 3.0/5 → **5.0/5** 🟢 | 3.0/5 → **4.0/5** 🟢 | ✅ binlog-failure-analysis; tools: skill | — | ✅ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -25.0% due to: completion (✓ → ✗), tokens (136332 → 781039), tool calls (9 → 33), time (54.2s → 183.4s)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Plugin) Quality unchanged but weighted score is -12.6% due to: tokens (2229169 → 5498663), quality, tool calls (52 → 101), time (447.7s → 570.0s)
<a href="#user-content-ref-3" id="fn-3"><strong>[3]</strong></a> (Isolated) Quality dropped but weighted score is +0.1% due to: completion (✗ → ✓), tokens (1087935 → 498498), time (286.0s → 101.1s), tool calls (42 → 29)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
