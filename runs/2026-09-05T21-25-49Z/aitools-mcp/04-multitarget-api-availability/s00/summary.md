## Skill Validation Results

| Skill | Scenario | Quality (Isolated) | Quality (Plugin) | Skills Loaded | Overfit | Verdict |
|-------|----------|--------------------|------------------|---------------|---------|---------|
| eval-mcp-assist | Surface — Extract build errors from a large multi-target failure | 5.0/5 → 5.0/5 | **5.0/5** → 4.0/5 🔴 | ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, read_bash, glob, stop_bash, binlog-binlog_errors / ✅ eval-mcp-assist; tools: skill, binlog-binlog_overview, glob, binlog-binlog_errors | — | ❌ |

Model: claude-opus-5 | Judge: claude-opus-5
