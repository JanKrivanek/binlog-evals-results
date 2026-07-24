## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-noop | Analysis — Diagnose why a file copy failed during build | 3.0/5 → **5.0/5** 🟢 | 3.0/5 → 3.0/5 | ✅ eval-noop; tools: skill / ⚠️ NOT ACTIVATED | — | ✅ |
| eval-noop | Deep — Full autonomous root cause investigation and fix proposal | 2.0/5 → **5.0/5** 🟢 | 2.0/5 → **5.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ✅ |
| eval-noop | Insight — Determine which projects are in the solution vs referenced | **3.0/5** → 2.0/5 🔴 | **3.0/5** → 1.0/5 🔴 | ✅ eval-noop; tools: skill | — | ❌ |
| eval-noop | Surface — Identify build error from binlog (missing file copy) | 5.0/5 → 5.0/5 | **5.0/5** → 4.0/5 🔴 | ⚠️ NOT ACTIVATED / ✅ eval-noop; tools: skill, edit | — | ❌ |

Model: claude-opus-4.6 | Judge: claude-opus-4.6
