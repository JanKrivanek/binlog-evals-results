## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose the root cause of the compiler errors | **5.0/5** → 4.0/5 🔴 | 5.0/5 → 5.0/5 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-mcp-assist | Deep — Full autonomous root-cause investigation and fix | 4.0/5 → 4.0/5 | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-mcp-assist | Insight — Split the failures per target framework | 4.0/5 → **5.0/5** 🟢 | 4.0/5 → 4.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| eval-mcp-assist | Surface — Extract build errors from a large multi-target failure | 3.0/5 → 3.0/5 | **3.0/5** → 2.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -22.7% due to: completion (✓ → ✗), tokens (1212522 → 2518288), tool calls (40 → 76)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Plugin) Quality unchanged but weighted score is -30.1% due to: completion (✓ → ✗), quality, tokens (448868 → 1092061), tool calls (23 → 49), time (185.6s → 274.6s)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
