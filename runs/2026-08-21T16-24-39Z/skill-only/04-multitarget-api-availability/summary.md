## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| binlog-failure-analysis | Analysis — Diagnose the root cause of the compiler errors | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ binlog-failure-analysis; tools: skill, view / ✅ binlog-failure-analysis; tools: skill | — | ✅ |
| binlog-failure-analysis | Deep — Full autonomous root-cause investigation and fix | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ binlog-failure-analysis; tools: skill / ✅ binlog-failure-analysis; tools: skill, view | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| binlog-failure-analysis | Insight — Split the failures per target framework | 5.0/5 → 5.0/5 | **5.0/5** → 4.0/5 🔴 | ✅ binlog-failure-analysis; tools: skill / ✅ binlog-failure-analysis; tools: skill, view, read_bash, stop_bash | — | ❌ |
| binlog-failure-analysis | Surface — Extract build errors from a large multi-target failure | 4.0/5 → **5.0/5** 🟢 | 4.0/5 → **5.0/5** 🟢 | ✅ binlog-failure-analysis; tools: skill | — | ✅ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -22.9% due to: completion (✓ → ✗), tokens (962783 → 1717279), quality, tool calls (32 → 44), time (291.6s → 379.9s)

Model: claude-opus-5 | Judge: claude-opus-5
