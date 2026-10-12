# CI/CD

The PR workflow should install dependencies with `npm ci`, install Playwright browsers, validate configuration, lint, check formatting, run smoke tests and upload artifacts even on failure. Scheduled/manual regression should run broader tests and upload reports.

Open Actions → workflow run → failed job to inspect output and download artifacts. Never describe a workflow as passing until GitHub reports a successful completed run. Keep permissions least-privilege.
