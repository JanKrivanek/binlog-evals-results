## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| binlog-failure-analysis | Analysis — Diagnose why a file copy failed during build | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ✅ binlog-failure-analysis; tools: skill | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| binlog-failure-analysis | Deep — Full autonomous root cause investigation and fix proposal | **5.0/5** → 4.0/5 🔴 | 5.0/5 → 5.0/5 | ✅ binlog-failure-analysis; tools: skill | — | ❌ |
| binlog-failure-analysis | Insight — Determine which projects are in the solution vs referenced | 3.0/5 → 3.0/5 | 3.0/5 → **4.0/5** 🟢 | ✅ binlog-failure-analysis; tools: skill | — | ✅ |
| binlog-failure-analysis | Surface — Identify build error from binlog (missing file copy) | 4.0/5 → **5.0/5** 🟢 | 4.0/5 → 4.0/5 | ✅ binlog-failure-analysis; tools: skill | — | ✅ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -3.4% due to: tokens (275563 → 777020), tool calls (16 → 24)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
