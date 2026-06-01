// Binlog Eval Dashboard — JavaScript
// Loads dashboard-data.json and renders three tab views

const CONFIG_COLORS = {
    'plain':              { line: '#8b949e', bg: 'rgba(139,148,158,0.15)' },
    'skill-only':         { line: '#58a6ff', bg: 'rgba(88,166,255,0.15)' },
    'baronfel-mcp':       { line: '#3fb950', bg: 'rgba(63,185,80,0.15)' },
    'binlog-insights-mcp':{ line: '#bc8cff', bg: 'rgba(188,140,255,0.15)' },
    'sqlite-logger':      { line: '#f0883e', bg: 'rgba(240,136,62,0.15)' },
    'picasso':            { line: '#f85149', bg: 'rgba(248,81,73,0.15)' },
    'andyg-mcp':          { line: '#e3b341', bg: 'rgba(227,179,65,0.15)' },
    'aitools-mcp':        { line: '#2dd4bf', bg: 'rgba(45,212,191,0.15)' },
    'binlog-mcp':         { line: '#db61a2', bg: 'rgba(219,97,162,0.15)' },
};

const CONFIG_LABELS = {
    'plain':               'A — Plain Copilot',
    'skill-only':          'B — + Skill',
    'baronfel-mcp':        'C — + baronfel MCP',
    'binlog-insights-mcp': 'D — + BinlogInsights MCP',
    'sqlite-logger':       'E — + SQLite Logger',
    'picasso':             'F — + Picasso',
    'andyg-mcp':           'G — + AndyG MCP',
    'aitools-mcp':         'H — + AITools MCP',
    'binlog-mcp':          'I — + Binlog MCP',
};

let dashboardData = null;
let charts = {};

// ─── Data loading ────────────────────────────────────────────

async function loadData() {
    try {
        const resp = await fetch('data/dashboard-data.json');
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        dashboardData = await resp.json();
        document.getElementById('lastUpdated').textContent =
            `Last updated: ${new Date(dashboardData.generatedAt).toLocaleString()}`;
        renderAll();
    } catch (e) {
        document.querySelectorAll('.loading').forEach(el => {
            el.textContent = `Failed to load data: ${e.message}`;
        });
    }
}

// ─── Tab switching ───────────────────────────────────────────

function switchTab(name) {
    document.querySelectorAll('.tab-bar button').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelector(`.tab-bar button[onclick*="${name}"]`).classList.add('active');
    document.getElementById(`tab-${name}`).classList.add('active');
}

// ─── Rendering ───────────────────────────────────────────────

function renderAll() {
    renderOverall();
    renderScenarios();
    renderEfficiency();
}

// ─── Overall tab ─────────────────────────────────────────────

function renderOverall() {
    const container = document.getElementById('tab-overall');
    const { runs, configs, cases, expectedScenarios } = dashboardData;

    // Compute average score per config per run
    const labels = runs.map(r => formatTimestamp(r.timestamp));
    const datasets = configs.map(cfg => {
        const color = CONFIG_COLORS[cfg] || { line: '#fff', bg: 'rgba(255,255,255,0.15)' };
        const warnings = runs.map(run => computeWarning(run, cfg, expectedScenarios));
        const ds = {
            label: CONFIG_LABELS[cfg] || cfg,
            data: runs.map(run => {
                const cfgData = run.configs[cfg];
                if (!cfgData) return null;
                let total = 0, count = 0;
                for (const caseName of Object.keys(cfgData)) {
                    for (const sc of cfgData[caseName]) {
                        total += sc.score;
                        count++;
                    }
                }
                return count > 0 ? +(total / count).toFixed(2) : null;
            }),
            borderColor: color.line,
            backgroundColor: color.bg,
            tension: 0.3,
            fill: false,
            pointRadius: 4,
            pointHoverRadius: 6,
        };
        applyWarningMarkers(ds, warnings);
        return ds;
    });

    // Summary cards: latest run averages
    const latest = runs[runs.length - 1];
    let cardsHtml = '<div class="summary-cards">';
    for (const cfg of configs) {
        const cfgData = latest?.configs[cfg];
        let total = 0, count = 0;
        if (cfgData) {
            for (const caseName of Object.keys(cfgData)) {
                for (const sc of cfgData[caseName]) { total += sc.score; count++; }
            }
        }
        const avg = count > 0 ? (total / count).toFixed(2) : 'N/A';
        const totalScore = count > 0 ? total : 'N/A';
        const color = CONFIG_COLORS[cfg]?.line || '#fff';
        cardsHtml += `
            <div class="card">
                <div class="label" style="color:${color}">${CONFIG_LABELS[cfg] || cfg}</div>
                <div class="value">${avg}</div>
                <div class="detail">Avg score / scenario (latest run)</div>
                <div class="detail">Total: ${totalScore} / ${count * 5}</div>
            </div>`;
    }
    cardsHtml += '</div>';

    container.innerHTML = `
        ${cardsHtml}
        <div class="chart-container">
            <h3>Average Score per Scenario Over Time</h3>
            <canvas id="chart-overall-avg"></canvas>
        </div>
        <div class="chart-container">
            <h3>Total Score Over Time (max ${configs.length > 0 ? Object.values(Object.values(latest?.configs || {})[0] || {}).reduce((s, sc) => s + sc.length, 0) * 5 : '?'})</h3>
            <canvas id="chart-overall-total"></canvas>
        </div>
    `;

    createLineChart('chart-overall-avg', labels, datasets, 'Score (0–5)', 0, 5);

    // Total score chart
    const totalDatasets = configs.map(cfg => {
        const color = CONFIG_COLORS[cfg] || { line: '#fff', bg: 'rgba(255,255,255,0.15)' };
        const warnings = runs.map(run => computeWarning(run, cfg, expectedScenarios));
        const ds = {
            label: CONFIG_LABELS[cfg] || cfg,
            data: runs.map(run => {
                const cfgData = run.configs[cfg];
                if (!cfgData) return null;
                let total = 0;
                for (const caseName of Object.keys(cfgData)) {
                    for (const sc of cfgData[caseName]) total += sc.score;
                }
                return total;
            }),
            borderColor: color.line,
            backgroundColor: color.bg,
            tension: 0.3,
            fill: false,
            pointRadius: 4,
            pointHoverRadius: 6,
        };
        applyWarningMarkers(ds, warnings);
        return ds;
    });

    createLineChart('chart-overall-total', labels, totalDatasets, 'Total Score');
}

// ─── Per-Scenario tab ────────────────────────────────────────

function renderScenarios() {
    const container = document.getElementById('tab-scenarios');
    const { runs, configs, cases } = dashboardData;

    // Build a chart per case, showing each scenario within the case
    let html = '';

    for (const caseName of cases) {
        // Collect scenarios for this case
        const scenarioNames = new Set();
        for (const run of runs) {
            for (const cfg of configs) {
                const caseData = run.configs[cfg]?.[caseName];
                if (caseData) caseData.forEach(sc => scenarioNames.add(sc.name));
            }
        }

        const scenarios = [...scenarioNames].sort();
        const labels = runs.map(r => formatTimestamp(r.timestamp));

        // One chart per scenario within the case
        for (const scenario of scenarios) {
            const chartId = `chart-scenario-${caseName}-${slugify(scenario)}`;
            html += `
                <div class="chart-container">
                    <h3>${caseName} — ${scenario}</h3>
                    <canvas id="${chartId}"></canvas>
                </div>`;
        }

        // Store scenario info for deferred chart creation
        if (!window._scenarioCharts) window._scenarioCharts = [];
        for (const scenario of scenarios) {
            window._scenarioCharts.push({ caseName, scenario, labels, configs, runs });
        }
    }

    container.innerHTML = html;

    // Create charts
    for (const info of (window._scenarioCharts || [])) {
        const chartId = `chart-scenario-${info.caseName}-${slugify(info.scenario)}`;
        const datasets = info.configs.map(cfg => {
            const color = CONFIG_COLORS[cfg] || { line: '#fff', bg: 'rgba(255,255,255,0.15)' };
            return {
                label: CONFIG_LABELS[cfg] || cfg,
                data: info.runs.map(run => {
                    const caseData = run.configs[cfg]?.[info.caseName];
                    if (!caseData) return null;
                    const sc = caseData.find(s => s.name === info.scenario);
                    return sc ? sc.score : null;
                }),
                borderColor: color.line,
                backgroundColor: color.bg,
                tension: 0.3,
                fill: false,
                pointRadius: 4,
                pointHoverRadius: 6,
            };
        });

        createLineChart(chartId, info.labels, datasets, 'Score (0–5)', 0, 5);
    }
}

// ─── Efficiency tab ──────────────────────────────────────────

function renderEfficiency() {
    const container = document.getElementById('tab-efficiency');
    const { runs, configs, cases, expectedScenarios } = dashboardData;

    const labels = runs.map(r => formatTimestamp(r.timestamp));

    // ── Overall efficiency charts (aggregated across all scenarios) ──
    let html = `
        <div class="chart-container">
            <h3>Overall: Total Wall Time (seconds)</h3>
            <canvas id="chart-eff-overall-time"></canvas>
        </div>
        <div class="grid-2">
            <div class="chart-container">
                <h3>Overall: Total Tokens (Input + Output)</h3>
                <canvas id="chart-eff-overall-tokens"></canvas>
            </div>
            <div class="chart-container">
                <h3>Overall: Avg Score / 100k Tokens</h3>
                <canvas id="chart-eff-overall-spt"></canvas>
            </div>
        </div>
        <hr style="border-color:#30363d; margin:2rem 0;">
    `;

    // ── Per-scenario charts ──
    const chartInfos = [];

    for (const caseName of cases) {
        const scenarioNames = new Set();
        for (const run of runs) {
            for (const cfg of configs) {
                const caseData = run.configs[cfg]?.[caseName];
                if (caseData) caseData.forEach(sc => scenarioNames.add(sc.name));
            }
        }

        const scenarios = [...scenarioNames].sort();

        for (const scenario of scenarios) {
            const timeId = `chart-eff-time-${caseName}-${slugify(scenario)}`;
            const tokenId = `chart-eff-tokens-${caseName}-${slugify(scenario)}`;
            const scorePerTokenId = `chart-eff-spt-${caseName}-${slugify(scenario)}`;

            html += `
                <div class="chart-container">
                    <h3>${caseName} — ${scenario}: Wall Time (seconds)</h3>
                    <canvas id="${timeId}"></canvas>
                </div>
                <div class="grid-2">
                    <div class="chart-container">
                        <h3>${caseName} — ${scenario}: Total Tokens</h3>
                        <canvas id="${tokenId}"></canvas>
                    </div>
                    <div class="chart-container">
                        <h3>${caseName} — ${scenario}: Score / 100k Tokens</h3>
                        <canvas id="${scorePerTokenId}"></canvas>
                    </div>
                </div>`;

            chartInfos.push({ caseName, scenario, labels, configs, runs, timeId, tokenId, scorePerTokenId });
        }
    }

    container.innerHTML = html;

    // ── Render overall efficiency charts ──
    const overallTimeDs = configs.map(cfg => {
        const color = CONFIG_COLORS[cfg] || { line: '#fff', bg: 'rgba(255,255,255,0.15)' };
        const warnings = runs.map(run => computeWarning(run, cfg, expectedScenarios));
        const ds = {
            label: CONFIG_LABELS[cfg] || cfg,
            data: runs.map(run => {
                const cfgData = run.configs[cfg];
                if (!cfgData) return null;
                let total = 0;
                for (const caseName of Object.keys(cfgData)) {
                    for (const sc of cfgData[caseName]) total += sc.metrics.wallTimeMs;
                }
                return +(total / 1000).toFixed(1);
            }),
            borderColor: color.line, backgroundColor: color.bg,
            tension: 0.3, fill: false, pointRadius: 4, pointHoverRadius: 6,
        };
        applyWarningMarkers(ds, warnings);
        return ds;
    });
    createLineChart('chart-eff-overall-time', labels, overallTimeDs, 'Seconds');

    const overallTokenDs = configs.map(cfg => {
        const color = CONFIG_COLORS[cfg] || { line: '#fff', bg: 'rgba(255,255,255,0.15)' };
        const warnings = runs.map(run => computeWarning(run, cfg, expectedScenarios));
        const ds = {
            label: CONFIG_LABELS[cfg] || cfg,
            data: runs.map(run => {
                const cfgData = run.configs[cfg];
                if (!cfgData) return null;
                let total = 0;
                for (const caseName of Object.keys(cfgData)) {
                    for (const sc of cfgData[caseName]) total += sc.metrics.inputTokens + sc.metrics.outputTokens;
                }
                return total;
            }),
            borderColor: color.line, backgroundColor: color.bg,
            tension: 0.3, fill: false, pointRadius: 4, pointHoverRadius: 6,
        };
        applyWarningMarkers(ds, warnings);
        return ds;
    });
    createLineChart('chart-eff-overall-tokens', labels, overallTokenDs, 'Tokens');

    const overallSptDs = configs.map(cfg => {
        const color = CONFIG_COLORS[cfg] || { line: '#fff', bg: 'rgba(255,255,255,0.15)' };
        const warnings = runs.map(run => computeWarning(run, cfg, expectedScenarios));
        const ds = {
            label: CONFIG_LABELS[cfg] || cfg,
            data: runs.map(run => {
                const cfgData = run.configs[cfg];
                if (!cfgData) return null;
                let totalScore = 0, totalTokens = 0;
                for (const caseName of Object.keys(cfgData)) {
                    for (const sc of cfgData[caseName]) {
                        totalScore += sc.score;
                        totalTokens += sc.metrics.inputTokens + sc.metrics.outputTokens;
                    }
                }
                return totalTokens > 0 ? +((totalScore / totalTokens) * 100000).toFixed(2) : null;
            }),
            borderColor: color.line, backgroundColor: color.bg,
            tension: 0.3, fill: false, pointRadius: 4, pointHoverRadius: 6,
        };
        applyWarningMarkers(ds, warnings);
        return ds;
    });
    createLineChart('chart-eff-overall-spt', labels, overallSptDs, 'Score / 100k tokens');

    // ── Render per-scenario charts ──

    for (const info of chartInfos) {
        // Wall time chart
        const timeDatasets = info.configs.map(cfg => {
            const color = CONFIG_COLORS[cfg] || { line: '#fff' };
            return {
                label: CONFIG_LABELS[cfg] || cfg,
                data: info.runs.map(run => {
                    const sc = findScenario(run, cfg, info.caseName, info.scenario);
                    return sc ? +(sc.metrics.wallTimeMs / 1000).toFixed(1) : null;
                }),
                borderColor: color.line,
                backgroundColor: color.bg,
                tension: 0.3, fill: false, pointRadius: 4,
            };
        });
        createLineChart(info.timeId, info.labels, timeDatasets, 'Seconds');

        // Total tokens chart
        const tokenDatasets = info.configs.map(cfg => {
            const color = CONFIG_COLORS[cfg] || { line: '#fff' };
            return {
                label: CONFIG_LABELS[cfg] || cfg,
                data: info.runs.map(run => {
                    const sc = findScenario(run, cfg, info.caseName, info.scenario);
                    return sc ? sc.metrics.inputTokens + sc.metrics.outputTokens : null;
                }),
                borderColor: color.line,
                backgroundColor: color.bg,
                tension: 0.3, fill: false, pointRadius: 4,
            };
        });
        createLineChart(info.tokenId, info.labels, tokenDatasets, 'Tokens');

        // Score per 100k tokens
        const sptDatasets = info.configs.map(cfg => {
            const color = CONFIG_COLORS[cfg] || { line: '#fff' };
            return {
                label: CONFIG_LABELS[cfg] || cfg,
                data: info.runs.map(run => {
                    const sc = findScenario(run, cfg, info.caseName, info.scenario);
                    if (!sc) return null;
                    const totalTokens = sc.metrics.inputTokens + sc.metrics.outputTokens;
                    return totalTokens > 0 ? +((sc.score / totalTokens) * 100000).toFixed(2) : null;
                }),
                borderColor: color.line,
                backgroundColor: color.bg,
                tension: 0.3, fill: false, pointRadius: 4,
            };
        });
        createLineChart(info.scorePerTokenId, info.labels, sptDatasets, 'Score / 100k tokens');
    }
}

// ─── Helpers ─────────────────────────────────────────────────

// Compute completeness warning for a (run, config) pair.
// Returns an object { reason: string } when data is incomplete (some
// expected scenarios are missing), or null when fully complete.
// `expectedScenarios` is a map of caseName -> [scenarioName, ...].
function computeWarning(run, cfg, expectedScenarios) {
    const cfgData = run.configs[cfg];
    if (!cfgData) return null; // no data at all -> chart shows null gap, no marker needed
    if (!expectedScenarios) return null;

    const missingCases = [];
    const missingScenarios = []; // per-case missing scenario names
    const expectedCases = Object.keys(expectedScenarios);

    for (const caseName of expectedCases) {
        const expected = expectedScenarios[caseName] || [];
        const actual = cfgData[caseName];
        if (!actual) {
            missingCases.push(caseName);
            continue;
        }
        const actualNames = new Set(actual.map(s => s.name));
        const missing = expected.filter(n => !actualNames.has(n));
        if (missing.length > 0) {
            missingScenarios.push({ case: caseName, missing });
        }
    }

    if (missingCases.length === 0 && missingScenarios.length === 0) return null;

    const parts = [];
    for (const c of missingCases) parts.push(`Missing entire case: ${c}`);
    for (const m of missingScenarios) {
        for (const sc of m.missing) parts.push(`Missing scenario: ${m.case} / ${sc}`);
    }
    return { reason: parts.join('\n') };
}

// Apply per-point warning markers to a Chart.js dataset.
// `warnings` is a parallel array of warning objects (or null) — one per data point.
// When a point has a warning AND a numeric value, it's drawn as a yellow triangle.
function applyWarningMarkers(dataset, warnings) {
    const baseColor = dataset.borderColor;
    const baseRadius = 4;
    const warnColor = '#ffd33d'; // yellow
    const warnBorder = '#9c6500';
    const warnRadius = 7;

    dataset._warnings = warnings;
    dataset.pointStyle = warnings.map((w, i) =>
        (w && dataset.data[i] != null) ? 'triangle' : 'circle');
    dataset.pointBackgroundColor = warnings.map((w, i) =>
        (w && dataset.data[i] != null) ? warnColor : baseColor);
    dataset.pointBorderColor = warnings.map((w, i) =>
        (w && dataset.data[i] != null) ? warnBorder : baseColor);
    dataset.pointBorderWidth = warnings.map((w, i) =>
        (w && dataset.data[i] != null) ? 2 : 1);
    dataset.pointRadius = warnings.map((w, i) =>
        (w && dataset.data[i] != null) ? warnRadius : baseRadius);
    dataset.pointHoverRadius = warnings.map((w, i) =>
        (w && dataset.data[i] != null) ? warnRadius + 2 : baseRadius + 2);
}

function findScenario(run, cfg, caseName, scenarioName) {
    const caseData = run.configs[cfg]?.[caseName];
    if (!caseData) return null;
    return caseData.find(s => s.name === scenarioName) || null;
}

function formatTimestamp(ts) {
    // ts format: 2026-04-18T19-18-32Z
    return ts.replace('T', ' ').replace(/-(\d{2})-(\d{2})Z$/, ':$1:$2');
}

function slugify(s) {
    return s.replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '').toLowerCase();
}

function createLineChart(canvasId, labels, datasets, yLabel, yMin, yMax) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    if (charts[canvasId]) charts[canvasId].destroy();

    // Ensure dots are solid-filled with the line color (only if not already
    // configured per-point — applyWarningMarkers sets these as arrays).
    for (const ds of datasets) {
        if (!Array.isArray(ds.pointBackgroundColor)) {
            ds.pointBackgroundColor = ds.borderColor;
        }
    }

    const yScale = { grid: { color: 'rgba(48,54,61,0.6)' }, ticks: { color: '#8b949e' } };
    if (yMin !== undefined) yScale.min = yMin;
    if (yMax !== undefined) yScale.max = yMax;
    if (yLabel) yScale.title = { display: true, text: yLabel, color: '#8b949e' };

    charts[canvasId] = new Chart(canvas, {
        type: 'line',
        data: { labels, datasets },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            interaction: { mode: 'index', intersect: false },
            plugins: {
                legend: { labels: { color: '#e6edf3', usePointStyle: true, padding: 16 } },
                tooltip: {
                    backgroundColor: '#161b22',
                    borderColor: '#30363d',
                    borderWidth: 1,
                    titleColor: '#e6edf3',
                    bodyColor: '#e6edf3',
                    callbacks: {
                        afterLabel: (ctx) => {
                            const w = ctx.dataset._warnings && ctx.dataset._warnings[ctx.dataIndex];
                            if (!w) return null;
                            // Render warning lines prefixed by ⚠
                            return w.reason.split('\n').map(line => `  ⚠ ${line}`);
                        },
                    },
                },
            },
            scales: {
                x: {
                    grid: { color: 'rgba(48,54,61,0.6)' },
                    ticks: { color: '#8b949e', maxRotation: 45 },
                },
                y: yScale,
            },
        },
    });
}

// ─── Init ────────────────────────────────────────────────────

loadData();
