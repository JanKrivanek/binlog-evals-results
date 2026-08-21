## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-noop | Analysis — Find root cause of DiagnosticSource version conflict | 4.0/5 → **5.0/5** 🟢 | 4.0/5 → **5.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-noop | Deep — Full autonomous root cause investigation and fix proposal | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED | — | ✅ |
| eval-noop | Insight — Inspect how RAR processes binding redirects across TFMs | 2.0/5 → 2.0/5 | 2.0/5 → **3.0/5** 🟢 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| eval-noop | Surface — Extract MSB3277 assembly version conflict details | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ⚠️ NOT ACTIVATED / ✅ eval-noop; tools: skill | — | ❌ <a href="#user-content-fn-3" id="ref-3">[3]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality improved but weighted score is -5.4% due to: completion (✓ → ✗), tokens (745227 → 1273277), time (149.3s → 368.8s), tool calls (22 → 37)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Isolated) Quality unchanged but weighted score is -6.7% due to: tokens (396056 → 714569), tool calls (15 → 26), time (172.5s → 230.5s)
<a href="#user-content-ref-3" id="fn-3"><strong>[3]</strong></a> (Plugin) Quality unchanged but weighted score is -5.1% due to: quality

Model: claude-opus-5 | Judge: claude-opus-5
