## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| binlog-failure-analysis | Analysis — Diagnose why code signing fails with access denied | 2.0/5 → **3.0/5** 🟢 | 2.0/5 → **3.0/5** 🟢 | ✅ binlog-failure-analysis; tools: skill, grep, view / ✅ binlog-failure-analysis; tools: skill | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| binlog-failure-analysis | Deep — Full autonomous root cause investigation and fix proposal | 3.0/5 → 3.0/5 | **3.0/5** → 2.0/5 🔴 | ✅ binlog-failure-analysis; tools: skill | — | ❌ |
| binlog-failure-analysis | Insight — Inspect Distrib property across projects in signing build | **4.0/5** → 2.0/5 🔴 | 4.0/5 → 4.0/5 | ✅ binlog-failure-analysis; tools: skill | — | ❌ |
| binlog-failure-analysis | Surface — Identify signing failure from binlog | 4.0/5 → **5.0/5** 🟢 | 4.0/5 → **5.0/5** 🟢 | ✅ binlog-failure-analysis; tools: skill | — | ✅ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality improved but weighted score is -3.4% due to: completion (✓ → ✗), tokens (112097 → 670362), tool calls (7 → 27), time (75.8s → 151.8s)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
