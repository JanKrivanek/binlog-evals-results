## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| binlog-failure-analysis | Analysis — Diagnose why code signing fails with access denied | 2.0/5 → **3.0/5** 🟢 | 2.0/5 → **3.0/5** 🟢 | ✅ binlog-failure-analysis; tools: skill | — | ✅ |
| binlog-failure-analysis | Deep — Full autonomous root cause investigation and fix proposal | **3.0/5** → 2.0/5 🔴 | **3.0/5** → 2.0/5 🔴 | ✅ binlog-failure-analysis; tools: skill / ✅ binlog-failure-analysis; tools: skill, glob, view | — | ❌ |
| binlog-failure-analysis | Insight — Inspect Distrib property across projects in signing build | **4.0/5** → 3.0/5 🔴 | **4.0/5** → 3.0/5 🔴 | ✅ binlog-failure-analysis; tools: skill | — | ✅ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| binlog-failure-analysis | Surface — Identify signing failure from binlog | 3.0/5 → **4.0/5** 🟢 | 3.0/5 → **5.0/5** 🟢 | ✅ binlog-failure-analysis; tools: skill | — | ✅ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality dropped but weighted score is +3.1% due to: completion (✗ → ✓), tokens (663434 → 378377), tool calls (40 → 24), time (142.2s → 87.5s)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
