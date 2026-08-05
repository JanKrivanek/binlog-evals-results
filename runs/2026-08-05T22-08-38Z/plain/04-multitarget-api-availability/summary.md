## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-noop | Analysis — Diagnose the root cause of the compiler errors | 1.0/5 → **3.0/5** 🟢 | 1.0/5 → **5.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ✅ |
| eval-noop | Deep — Full autonomous root-cause investigation and fix | 4.0/5 → **5.0/5** 🟢 | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-noop | Insight — Split the failures per target framework | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-noop; tools: skill / ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| eval-noop | Surface — Extract build errors from a large multi-target failure | 3.0/5 → 3.0/5 | 3.0/5 → **4.0/5** 🟢 | ⚠️ NOT ACTIVATED / ✅ eval-noop; tools: skill | — | ❌ <a href="#user-content-fn-3" id="ref-3">[3]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -0.3% due to: efficiency metrics
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Isolated) Quality unchanged but weighted score is -0.0% due to: efficiency metrics
<a href="#user-content-ref-3" id="fn-3"><strong>[3]</strong></a> (Isolated) Quality unchanged but weighted score is -5.6% due to: quality

Model: claude-opus-4.6 | Judge: claude-opus-4.6
