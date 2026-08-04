## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-noop | Analysis — Diagnose why code signing fails with access denied | 2.0/5 → **3.0/5** 🟢 | 2.0/5 → **3.0/5** 🟢 | ⚠️ NOT ACTIVATED / ✅ eval-noop; tools: glob, skill | — | ✅ |
| eval-noop | Deep — Full autonomous root cause investigation and fix proposal | 3.0/5 → 3.0/5 | **3.0/5** → 1.0/5 ⏰ 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-noop | Insight — Inspect Distrib property across projects in signing build | **4.0/5** → 3.0/5 🔴 | **4.0/5** → 3.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ❌ |
| eval-noop | Surface — Identify signing failure from binlog | 3.0/5 → 3.0/5 | 3.0/5 → **4.0/5** 🟢 | ✅ eval-noop; tools: skill | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -9.6% due to: tokens (62558 → 103584), quality, tool calls (4 → 7), time (22.8s → 34.3s)

> ⏰ **timeout** — run(s) hit the scenario timeout limit; scoring may be impacted by aborting model execution before it could produce its full output (increase via `timeout` in eval.yaml)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
