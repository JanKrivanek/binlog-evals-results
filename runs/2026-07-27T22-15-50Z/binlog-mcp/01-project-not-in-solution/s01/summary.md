## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why a file copy failed during build | **5.0/5** → 3.0/5 🔴 | **5.0/5** → 3.0/5 🔴 | ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-get_ancestors, binlog-read_file, binlog-search_properties_and_items, binlog-print_subtree / ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-get_ancestors, binlog-print_subtree, binlog-get_node, binlog-get_children, binlog-list_files, binlog-read_file, binlog-search_properties_and_items | — | ❌ |

Model: claude-opus-4.6 | Judge: claude-opus-4.6
