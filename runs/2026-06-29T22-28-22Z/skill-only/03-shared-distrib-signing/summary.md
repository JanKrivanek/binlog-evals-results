## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| binlog-failure-analysis | Analysis — Diagnose why code signing fails with access denied | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ✅ binlog-failure-analysis; tools: skill / ✅ binlog-failure-analysis; tools: skill, grep, view | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| binlog-failure-analysis | Deep — Full autonomous root cause investigation and fix proposal | **3.0/5** → 2.0/5 🔴 | **3.0/5** → 2.0/5 🔴 | ✅ binlog-failure-analysis; tools: skill | — | ❌ |
| binlog-failure-analysis | Insight — Inspect Distrib property across projects in signing build | 3.0/5 → **4.0/5** 🟢 | 3.0/5 → **4.0/5** 🟢 | ✅ binlog-failure-analysis; tools: skill | — | ✅ |
| binlog-failure-analysis | Surface — Identify signing failure from binlog | 3.0/5 → **5.0/5** 🟢 | 3.0/5 → **4.0/5** 🟢 | ✅ binlog-failure-analysis; tools: skill | — | ✅ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -28.2% due to: completion (✓ → ✗), tokens (139720 → 993258), quality, tool calls (10 → 36), time (79.1s → 205.6s)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
