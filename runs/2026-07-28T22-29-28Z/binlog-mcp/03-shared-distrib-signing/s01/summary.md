## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why code signing fails with access denied | 3.0/5 → 3.0/5 | **3.0/5** → 2.0/5 🔴 | ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-print_subtree, binlog-get_children / ✅ eval-mcp-assist; tools: skill, binlog-load_binlog, binlog-search, binlog-print_subtree, binlog-get_children, binlog-get_node, binlog-search_properties_and_items, binlog-list_files, binlog-read_file | — | ❌ |

Model: claude-opus-4.6 | Judge: claude-opus-4.6
