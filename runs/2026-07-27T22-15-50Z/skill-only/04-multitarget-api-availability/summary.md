## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| binlog-failure-analysis | Analysis — Diagnose the root cause of the compiler errors | **5.0/5** → 4.0/5 🔴 | **5.0/5** → 4.0/5 🔴 | ✅ binlog-failure-analysis; tools: skill | — | ❌ |
| binlog-failure-analysis | Deep — Full autonomous root-cause investigation and fix | 4.0/5 → **5.0/5** 🟢 | 4.0/5 → **5.0/5** 🟢 | ✅ binlog-failure-analysis; tools: skill | — | ✅ |
| binlog-failure-analysis | Insight — Split the failures per target framework | **5.0/5** → 4.0/5 🔴 | **5.0/5** → 4.0/5 🔴 | ✅ binlog-failure-analysis; tools: skill | — | ✅ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| binlog-failure-analysis | Surface — Extract build errors from a large multi-target failure | 4.0/5 → **5.0/5** 🟢 | 4.0/5 → **5.0/5** 🟢 | ✅ binlog-failure-analysis; tools: skill | — | ✅ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality dropped but weighted score is +3.4% due to: completion (✗ → ✓), tokens (575772 → 145703), time (217.0s → 74.5s), tool calls (25 → 11)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
