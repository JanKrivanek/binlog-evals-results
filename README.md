# Binlog Investigation Eval Results

> **[📊 Dashboard](https://jankrivanek.github.io/binlog-evals-results/)** — live scoring trends across configurations

Public results and dashboard for evaluating MSBuild binary log investigation quality across multiple AI tooling configurations.

The evaluation infrastructure, test cases, and scoring scripts live in the private [dotnet/binlog-tools-eval](https://github.com/dotnet/binlog-tools-eval) repository. This public repo hosts:

- **`results` branch** — full evaluation data pushed after each pipeline run
- **GitHub Pages dashboard** — interactive charts deployed to `gh-pages`
- **Tracking issue** — summary comments appended per run

## Configurations

| ID | Configuration | Description |
|----|--------------|-------------|
| A  | **Plain Copilot** | No skills, no MCP. Agent uses `dotnet msbuild` replay + grep |
| B  | **Copilot + dotnet/skills** | `binlog-failure-analysis` skill (replay-to-text-logs workflow) |
| C  | **Copilot + baronfel MCP** | [`baronfel.binlog.mcp`](https://github.com/baronfel/mcp-binlog-tool) — structured queries |
| D  | **Copilot + BinlogInsights MCP** | [`BinlogInsights.Mcp`](https://github.com/SergeyTeplyakov/BinlogInsights) — 26 tools |
| E  | **Copilot + SQLite Logger** | Binlog → SQLite conversion, agent queries with `sqlite3` CLI |
| F  | **Copilot + Picasso** | [`baronfel.binlog.cli`](https://www.nuget.org/packages/baronfel.binlog.cli) via `dnx` batch mode |
| G  | **Copilot + AndyG MCP** | [`BinlogMCP`](https://github.com/AndyGerlicher/BinlogMCP) — 52 tools |
| H  | **Copilot + BinlogMcp** | [`BinlogMcp`](https://www.nuget.org/packages/BinlogMcp) — MSBuildStructuredLog MCP server |
| I  | **Copilot + AITools.BinlogMcp** | [`AITools.BinlogMcp`](https://dev.azure.com/dnceng/public/_artifacts/feed/dotnet-eng/NuGet/AITools.BinlogMcp) — dotnet/ai-tools MCP server |

## Test Cases

| Case | Description | Difficulty |
|------|-------------|-----------|
| 01 | Project not in solution (Debug/Release config mismatch) | Medium |
| 02 | App.config binding redirect poisoning (MSB3277) | Very Hard |
| 03 | Shared distrib folder signing failure | Hard |

Each case has 4 scenario tiers: **Surface** (error extraction), **Analysis** (root cause), **Insight** (deep MSBuild inspection), **Deep** (actionable fix).

## How Results Are Produced

The private `binlog-evals` repo contains:
- MSBuild binary logs (`.binlog`) with known build failures
- Evaluation scenarios with ground-truth rubrics
- Scripts that run GitHub Copilot against each case × configuration
- An LLM judge that scores responses on a 0–1 scale per rubric item

A CI pipeline in the private repo runs evaluations daily, then cross-publishes results and dashboard updates to this public repo.

## Browsing Results

- **Dashboard**: Visit the [live dashboard](https://jankrivanek.github.io/binlog-evals-results/) for interactive score trends
- **Raw data**: Switch to the [`results` branch](https://github.com/JanKrivanek/binlog-evals-results/tree/results) to browse `runs/<timestamp>/<config>/<case>/` directories
- **Issue tracker**: See [Issue #1](https://github.com/JanKrivanek/binlog-evals-results/issues/1) for per-run summary comments
