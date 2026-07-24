## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-noop | Analysis — Diagnose why code signing fails with access denied | 2.0/5 → 2.0/5 | 2.0/5 → **3.0/5** 🟢 | ✅ eval-noop; tools: skill | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |
| eval-noop | Deep — Full autonomous root cause investigation and fix proposal | **3.0/5** → 2.0/5 🔴 | 3.0/5 → 3.0/5 | ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-2" id="ref-2">[2]</a> |
| eval-noop | Insight — Inspect Distrib property across projects in signing build | 2.0/5 → 2.0/5 | 2.0/5 → **4.0/5** 🟢 | ✅ eval-noop; tools: skill | — | ✅ |
| eval-noop | Surface — Identify signing failure from binlog | 3.0/5 → 3.0/5 | 3.0/5 → **4.0/5** 🟢 | ✅ eval-noop; tools: skill | — | ✅ |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -18.7% due to: quality, tokens (158373 → 296663), tool calls (10 → 15)
<a href="#user-content-ref-2" id="fn-2"><strong>[2]</strong></a> (Plugin) Quality unchanged but weighted score is -4.1% due to: quality

Model: claude-opus-4.6 | Judge: claude-opus-4.6
