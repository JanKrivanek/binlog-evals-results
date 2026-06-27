## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why a file copy failed during build | **4.0/5** → 3.0/5 🔴 | **4.0/5** → 3.0/5 🔴 | ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-get_node, binlog-read_file, binlog-search_properties_and_items, binlog-print_subtree, binlog-get_children, binlog-get_ancestors / ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-get_node, binlog-print_subtree, binlog-get_children, binlog-search_properties_and_items, binlog-read_file, binlog-search_files | — | ❌ |

Model: claude-opus-4.6 | Judge: claude-opus-4.6
