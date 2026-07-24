## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-noop | Analysis — Find root cause of DiagnosticSource version conflict | 4.0/5 → 4.0/5 | 4.0/5 → **5.0/5** 🟢 | ✅ eval-noop; tools: glob, skill / ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-noop | Deep — Full autonomous root cause investigation and fix proposal | 2.0/5 → 2.0/5 | 2.0/5 → **4.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| eval-noop | Insight — Inspect how RAR processes binding redirects across TFMs | 2.0/5 → 2.0/5 | **2.0/5** → 1.0/5 🔴 | ✅ eval-noop; tools: skill, create / ✅ eval-noop; tools: view, skill | — | ❌ |
| eval-noop | Surface — Extract MSB3277 assembly version conflict details | **4.0/5** → 3.0/5 🔴 | **4.0/5** → 3.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -1.9% due to: quality
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Isolated) Quality unchanged but weighted score is -5.9% due to: tokens (3893199 → 6334162), quality, tool calls (59 → 88)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
