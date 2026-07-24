## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-noop | Analysis — Diagnose the root cause of the compiler errors | **5.0/5** → 4.0/5 🔴 | **5.0/5** → 3.0/5 🔴 | ✅ eval-noop; tools: skill, edit / ⚠️ NOT ACTIVATED | — | ❌ |
| eval-noop | Deep — Full autonomous root-cause investigation and fix | **5.0/5** → 4.0/5 🔴 | **5.0/5** → 4.0/5 🔴 | ⚠️ NOT ACTIVATED / ✅ eval-noop; tools: skill | — | ❌ |
| eval-noop | Insight — Split the failures per target framework | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ✅ eval-noop; tools: skill / ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-noop | Surface — Extract build errors from a large multi-target failure | **3.0/5** → 2.0/5 🔴 | 3.0/5 → 3.0/5 | ⚠️ NOT ACTIVATED | — | ❌ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -21.3% due to: completion (✓ → ✗), quality, tokens (448868 → 565102), time (185.6s → 271.9s), tool calls (23 → 29)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
