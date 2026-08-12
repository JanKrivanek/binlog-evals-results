## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose the root cause of the compiler errors | **4.0/5** → 3.0/5 🔴 | 4.0/5 → 4.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-count, binlog-search_properties_and_items, binlog-read_file, binlog-list_files, binlog-search_files, binlog-get_node / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-count, binlog-read_file, binlog-list_files | — | ✅ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Isolated) Quality dropped but weighted score is +3.0% due to: completion (✗ → ✓), time (456.2s → 108.0s), tool calls (32 → 22), tokens (674037 → 604811)

Model: claude-opus-4.6 | Judge: claude-opus-4.6
