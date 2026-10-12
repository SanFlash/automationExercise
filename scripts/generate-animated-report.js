import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const outputDir = path.join(root, 'reports', 'dashboard');
const jsonPaths = ['ui-results.json', 'api-results.json', 'results.json'].map(name => path.join(root, 'reports', name));
const templatePath = path.join(root, 'reports', 'dashboard-template.html');
let report = { suites: [], stats: { expected: 0, unexpected: 0, skipped: 0, flaky: 0, duration: 0 } };

try {
  const rawReports = [];
  for (const file of jsonPaths) {
    try { rawReports.push(JSON.parse(await fs.readFile(file, 'utf8'))); } catch { /* This suite may not have run. */ }
  }
  if (!rawReports.length) throw new Error('No Playwright JSON result files found');
  const walk = (suite, parent = '') => {
    const title = [parent, suite.title].filter(Boolean).join(' › ');
    for (const spec of suite.specs ?? []) {
      for (const test of spec.tests ?? []) {
        const result = test.results?.at(-1) ?? {};
        const status = result.status ?? test.status ?? 'unknown';
        report.suites.push({ title: [title, spec.title].filter(Boolean).join(' › '), file: spec.file ?? suite.file ?? '', status, duration: result.duration ?? 0, error: result.error?.message ?? result.errors?.[0]?.message ?? '', retries: Math.max(0, (test.results?.length ?? 1) - 1) });
        report.stats.duration += result.duration ?? 0;
        if (status === 'passed') report.stats.expected++;
        else if (status === 'skipped' || status === 'interrupted') report.stats.skipped++;
        else report.stats.unexpected++;
        if ((test.results?.length ?? 0) > 1 && status === 'passed') report.stats.flaky++;
      }
    }
    for (const child of suite.suites ?? []) walk(child, title);
  };
  for (const raw of rawReports) for (const suite of raw.suites ?? []) walk(suite);
} catch (error) {
  report.error = 'Playwright JSON results were not found or could not be parsed.';
  report.detail = String(error);
}
report.generatedAt = new Date().toISOString();
report.runUrl = process.env.GITHUB_SERVER_URL && process.env.GITHUB_REPOSITORY && process.env.GITHUB_RUN_ID ? `${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}` : '';
report.commit = process.env.GITHUB_SHA ?? 'local';
report.author = 'Satyendra Kumar Namdeo';
report.target = process.env.BASE_URL || 'https://www.automationexercise.com';
await fs.mkdir(outputDir, { recursive: true });
await fs.writeFile(path.join(outputDir, 'report-data.json'), JSON.stringify(report, null, 2));
const template = await fs.readFile(templatePath, 'utf8');
await fs.writeFile(path.join(outputDir, 'index.html'), template.replace('__REPORT_DATA__', JSON.stringify(report).replaceAll('<', '\\u003c')));
console.log(`Animated report generated with ${report.suites.length} recorded test cases.`);
