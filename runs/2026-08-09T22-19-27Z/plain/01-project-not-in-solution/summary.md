## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-noop | Analysis — Diagnose why a file copy failed during build | **4.0/5** → 3.0/5 🔴 | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-noop | Deep — Full autonomous root cause investigation and fix proposal | 5.0/5 → 5.0/5 | **5.0/5** → 4.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-noop | Insight — Determine which projects are in the solution vs referenced | 2.0/5 → 2.0/5 | 2.0/5 → 2.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| eval-noop | Surface — Identify build error from binlog (missing file copy) | **5.0/5** → 4.0/5 🔴 | 5.0/5 → 5.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-3" id="ref-3">[3]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -8.4% due to: quality, tokens (636397 → 1030054), tool calls (29 → 43), time (129.0s → 175.9s)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Isolated) Quality unchanged but weighted score is -17.3% due to: quality, tokens (204117 → 322234), tool calls (12 → 20), time (98.9s → 128.0s)
<a href="#user-content-ref-3" id="fn-3"><strong>[3]</strong></a> (Plugin) Quality unchanged but weighted score is -23.3% due to: completion (✓ → ✗), tokens (97226 → 159686), quality, tool calls (7 → 10), time (37.1s → 49.8s)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
