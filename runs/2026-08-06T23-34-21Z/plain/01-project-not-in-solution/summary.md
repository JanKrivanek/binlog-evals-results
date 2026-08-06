## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-noop | Analysis — Diagnose why a file copy failed during build | 4.0/5 → **5.0/5** 🟢 | **4.0/5** → 3.0/5 🔴 | ⚠️ NOT ACTIVATED / ✅ eval-noop; tools: skill | — | ❌ |
| eval-noop | Deep — Full autonomous root cause investigation and fix proposal | **5.0/5** → 4.0/5 🔴 | **5.0/5** → 3.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-noop | Insight — Determine which projects are in the solution vs referenced | 3.0/5 → 3.0/5 | 3.0/5 → 3.0/5 | ✅ eval-noop; tools: skill / ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-noop | Surface — Identify build error from binlog (missing file copy) | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED | — | ✅ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -27.8% due to: completion (✓ → ✗), quality, tokens (482752 → 774943), tool calls (23 → 34), time (197.2s → 243.7s)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
