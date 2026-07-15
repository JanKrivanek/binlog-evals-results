## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| binlog-failure-analysis | Analysis — Find root cause of DiagnosticSource version conflict | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ✅ binlog-failure-analysis; tools: skill | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| binlog-failure-analysis | Deep — Full autonomous root cause investigation and fix proposal | 4.0/5 → 4.0/5 | **4.0/5** → 3.0/5 🔴 | ✅ binlog-failure-analysis; tools: skill | — | ❌ |
| binlog-failure-analysis | Insight — Inspect how RAR processes binding redirects across TFMs | **3.0/5** → 2.0/5 🔴 | **3.0/5** → 2.0/5 🔴 | ✅ binlog-failure-analysis; tools: skill | — | ❌ |
| binlog-failure-analysis | Surface — Extract MSB3277 assembly version conflict details | 4.0/5 → **5.0/5** 🟢 | 4.0/5 → **5.0/5** 🟢 | ✅ binlog-failure-analysis; tools: skill | — | ✅ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -12.0% due to: quality, tokens (1197283 → 2770799), tool calls (39 → 58)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
