## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| binlog-failure-analysis | Analysis — Diagnose why code signing fails with access denied | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ✅ binlog-failure-analysis; tools: skill | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| binlog-failure-analysis | Deep — Full autonomous root cause investigation and fix proposal | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ✅ binlog-failure-analysis; tools: skill, view / ✅ binlog-failure-analysis; tools: skill | — | ✅ |
| binlog-failure-analysis | Insight — Inspect Distrib property across projects in signing build | **4.0/5** → 3.0/5 🔴 | 4.0/5 → 4.0/5 | ✅ binlog-failure-analysis; tools: skill | — | ❌ |
| binlog-failure-analysis | Surface — Identify signing failure from binlog | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ binlog-failure-analysis; tools: skill, view | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -10.6% due to: completion (✓ → ✗), tokens (390964 → 699524), tool calls (14 → 21), time (102.2s → 147.3s)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Plugin) Quality unchanged but weighted score is -28.2% due to: completion (✓ → ✗), tokens (188715 → 701430), quality, tool calls (9 → 21), time (40.8s → 117.9s)

Model: claude-opus-5 | Judge: claude-opus-5
