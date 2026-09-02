## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Deep — Full autonomous root-cause investigation and fix | **5.0/5** → 4.0/5 🔴 | 5.0/5 → 5.0/5 | ⚠️ NOT ACTIVATED / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, read_bash, stop_bash, binlog-count, binlog-search_files, binlog-get_children, binlog-print_subtree, binlog-get_node, binlog-list_files | — | ❌ <a href="#user-content-fn-1" id="ref-1">[1]</a> |

<a href="#user-content-ref-1" id="fn-1"><strong>[1]</strong></a> (Plugin) Quality unchanged but weighted score is -23.2% due to: completion (✓ → ✗), tokens (614085 → 2735290), tool calls (20 → 115), time (334.6s → 428.4s)

Model: claude-opus-5 | Judge: claude-opus-5
