## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose the root cause of the compiler errors | **5.0/5** → 4.0/5 🔴 | 5.0/5 → 5.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-count, binlog-read_file / ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-count, binlog-list_files, binlog-read_file | — | ✅ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality dropped but weighted score is +0.6% due to: completion (✗ → ✓), tokens (710506 → 201003), time (595.1s → 76.9s), tool calls (27 → 11)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
