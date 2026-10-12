# CI/CD operating guide

## Workflow inventory

| Workflow | Trigger | Gate/scope | Evidence |
|---|---|---|---|
| `playwright-tests.yml` | Pull request, push to `main`, manual | Static checks plus Chromium smoke, sanity, and E2E | HTML/JSON/JUnit reports, screenshots, videos, traces |
| `api-tests.yml` | Pull request, push to `main`, manual | Documented API response/status checks | Playwright report artifacts |
| `bdd-tests.yml` | Pull request, manual | Cucumber features and step definitions | Cucumber JSON and failure screenshots |
| `scheduled-regression.yml` | Weekday schedule, manual | UI regression in Chromium/Firefox/WebKit plus API and BDD | Browser-specific reports and evidence |
| `manual-suite.yml` | Manual dispatch with suite/browser inputs | Targeted smoke, sanity, regression, E2E, API, BDD, or combined run | Run-specific reports and evidence |

## Pull request lifecycle

1. GitHub checks out the commit under review.
2. Node.js is installed and npm dependencies are installed.
3. Configuration validation confirms target URLs and timeout values are valid.
4. ESLint and Prettier are run.
5. Chromium smoke, sanity, and E2E suites execute as distinct steps.
6. API and BDD workflows execute independently.
7. Artifacts are uploaded even when a test step fails.
8. The reviewer inspects the exact commit, workflow conclusion, and evidence before merging.

## Manual suite runner

Use Actions → Manual test suite runner → Run workflow. Choose the suite and browser; optionally supply a UI base URL. The workflow uploads artifacts even if the selected suite fails. Use only an environment you are authorized to test. The `full` option combines selected-browser UI suites with API and BDD runs.

## Scheduled regression

The weekday scheduled workflow uses a browser matrix and keeps each browser's artifacts separate. API and BDD checks are separate jobs so failures are attributable to a test layer. The workflow uses `fail-fast: false` to preserve results from other browser engines when one matrix job fails.

## Artifact triage

From GitHub Actions, open the run, inspect the failed job and step, then download the corresponding artifact. Check `reports/html`, `reports/results.json`, `reports/junit.xml`, and `test-results/`. For every failure, capture:
- commit SHA and workflow run URL;
- suite, test title, and browser project;
- expected vs actual behavior;
- likely category: application defect, automation defect, data/setup issue, or environment outage;
- trace/screenshot evidence and reproduction steps.

## Dependency reproducibility

The committed lockfile currently needs to be regenerated and verified in a network-enabled development environment before the project can switch safely to `npm ci` everywhere. The workflows currently use `npm install` intentionally. A lockfile hardening task is to run `npm install`, commit the complete generated `package-lock.json`, validate a clean `npm ci`, then replace workflow install commands with `npm ci`.

## Security and permissions

- Keep `permissions: contents: read` unless a workflow needs more.
- Never print secrets or tokens into logs.
- Store CI-only credentials in GitHub Actions secrets; avoid storing them unless a test genuinely needs them.
- Review screenshots/traces before sharing because browser evidence can contain sensitive data.
- Keep artifact retention bounded.

## What a green workflow means

A successful workflow is evidence only for the checked-out commit, target environment, selected browser, and tests that ran. It does not prove unimplemented test cases pass, and it is not a substitute for reviewing coverage gaps.