## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Identify build error from binlog (missing file copy) | 5.0/5 → 5.0/5 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-search_files, binlog-search_properties_and_items, binlog-read_file, read_bash, stop_bash / ⚠️ NOT ACTIVATED | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality unchanged but weighted score is -21.4% due to: completion (✓ → ✗), tokens (170494 → 350920), time (36.6s → 119.3s), tool calls (8 → 13)

Model: claude-opus-5 | Judge: claude-opus-5
