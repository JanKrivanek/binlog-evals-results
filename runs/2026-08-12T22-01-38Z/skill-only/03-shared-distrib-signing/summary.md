## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| binlog-failure-analysis | Analysis — Diagnose why code signing fails with access denied | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ✅ binlog-failure-analysis; tools: skill | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| binlog-failure-analysis | Deep — Full autonomous root cause investigation and fix proposal | 2.0/5 → **3.0/5** 🟢 | 2.0/5 → 2.0/5 | ✅ binlog-failure-analysis; tools: skill | — | ✅ |
| binlog-failure-analysis | Insight — Inspect Distrib property across projects in signing build | **4.0/5** → 3.0/5 🔴 | 4.0/5 → 4.0/5 | ✅ binlog-failure-analysis; tools: skill | — | ✅ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| binlog-failure-analysis | Surface — Identify signing failure from binlog | 3.0/5 → **4.0/5** 🟢 | 3.0/5 → **4.0/5** 🟢 | ✅ binlog-failure-analysis; tools: skill | — | ✅ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -18.6% due to: completion (✓ → ✗), tokens (128604 → 802806), tool calls (8 → 28), time (55.2s → 132.5s)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Isolated) Quality dropped but weighted score is +4.1% due to: completion (✗ → ✓), tokens (512644 → 429926), time (120.8s → 91.0s)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
