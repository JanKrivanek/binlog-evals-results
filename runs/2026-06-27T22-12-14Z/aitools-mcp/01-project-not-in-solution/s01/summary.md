## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why a file copy failed during build | 4.0/5 → **5.0/5** 🟢 | **4.0/5** → 3.0/5 🔴 | ⚠️ NOT ACTIVATED | — | ✅ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality dropped but weighted score is +13.6% due to: completion (✗ → ✓), tokens (615419 → 148463), time (272.3s → 53.2s), tool calls (29 → 11)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
