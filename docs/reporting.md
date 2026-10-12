# Reporting and evidence

Playwright is configured for HTML (`reports/html`), JSON (`reports/results.json`) and JUnit XML (`reports/junit.xml`). Failure screenshots, traces and retained videos are written to `test-results/`. Cucumber produces JSON at `reports/cucumber-results.json` and attaches screenshots on failed scenarios.

Run tests first, then use `npm run report`. Inspect a trace with `npx playwright show-trace <trace.zip>`. Generated artifacts are ignored by Git and may contain page data.
