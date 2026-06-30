## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Analysis — Diagnose why a file copy failed during build | **4.0/5** → 3.0/5 🔴 | 4.0/5 → 4.0/5 | ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-get_ancestors, binlog-print_subtree, binlog-read_file / ✅ eval-mcp-assist; tools: skill, binlog-search, binlog-get_node, binlog-print_subtree, binlog-get_children, binlog-read_file, binlog-search_properties_and_items | — | ❌ |

Model: claude-opus-4.6 | Judge: claude-opus-4.6
