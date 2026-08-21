## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-noop | Analysis — Diagnose why a file copy failed during build | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-noop | Deep — Full autonomous root cause investigation and fix proposal | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| eval-noop | Insight — Determine which projects are in the solution vs referenced | **4.0/5** → 3.0/5 🔴 | 4.0/5 → **5.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-noop | Surface — Identify build error from binlog (missing file copy) | **5.0/5** → 4.0/5 🔴 | 5.0/5 → 5.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-3" id="ref-3">[3]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -4.6% due to: quality, tokens (595165 → 831285), tool calls (18 → 22)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Plugin) Quality unchanged but weighted score is -0.1% due to: tokens (1633713 → 2069386)
<a href="#user-content-ref-3" id="fn-3"><strong>[3]</strong></a> (Plugin) Quality unchanged but weighted score is -8.2% due to: tokens (403861 → 1021424), tool calls (15 → 25), time (87.6s → 139.9s)

Model: claude-opus-5 | Judge: claude-opus-5
