# Automation Engineering Learning Modules

This guide explains not just what files exist, but why the framework is structured this way and how to practise each concept.

## Module 1 — Translate requirements into test scenarios

Start with a user outcome, not a selector. Example: “A shopper can add a product to the cart and remove it.” Identify preconditions, actions, expected results, and cleanup. Keep each test focused on one behavior; use a stable ID in the title (for example, `E2E-001`). Avoid asserting implementation details that users cannot observe.

**Practice:** read `tests/e2e/shopping-journey.spec.js`. Write the scenario in plain English before reading the implementation.

## Module 2 — Playwright's browser model

Playwright Test creates an isolated browser context/page for each test by default. Use `page.goto` through a page object's navigation method, then locate elements and interact with them. Locator actions auto-wait for actionable state; web-first assertions retry until success or timeout. This is usually more reliable than fixed `waitForTimeout` sleeps.

**Practice:** replace a fixed wait (if you encounter one) with a locator assertion or an explicit response/event wait.

## Module 3 — Locator strategy

Prefer `getByRole`, `getByLabel`, and user-facing text where the app exposes accessible semantics. Use CSS selectors for stable application hooks when semantic locators are not available. Centralized locator modules reduce duplication, but do not turn them into giant catch-all files.

**Practice:** identify the selector used for a product card and explain why the test scopes the add-to-cart button to that card instead of clicking the first matching button on the whole page.

## Module 4 — Page Object Model

A page object represents a page or meaningful UI region. It should expose intent-level methods such as `open()`, `search(term)`, or `removeProductAt(index)`. Keep test assertions in tests unless the assertion is an invariant needed by a page object's own operation. Avoid methods that hide many unrelated actions.

**Practice:** trace `productsPage.open()` into `pages/ProductsPage.js`, then into its locator module.

## Module 5 — Fixtures and dependency injection

`fixtures/base.fixture.js` extends Playwright's built-in test fixture and creates page objects using the test's isolated `page`. Tests request only the dependencies they need. This keeps setup consistent and prevents each test from manually constructing the same objects.

**Practice:** add a small fixture for a new page object and consume it in one test. Do not share a mutable page between tests.

## Module 6 — Test data and environment

Use generated, unique data for flows that create accounts or records. Store environment-specific settings in configuration and secrets in environment variables. Never commit credentials, real card data, or a local `.env` file. Tests that need a pre-provisioned account should fail or skip clearly when prerequisites are missing; they should not silently use a personal account.

**Practice:** inspect `utils/test-data.factory.js` and explain why unique email addresses help with parallel execution.

## Module 7 — End-to-end testing

An E2E test verifies a user journey across multiple application boundaries. It should assert intermediate checkpoints as well as the final outcome, and it should avoid coupling to other tests' state. The current sample covers catalogue -> add product -> cart verification -> remove product. Checkout/payment should be tested with an explicitly provisioned test account and dummy payment data, never a real account or card.

**Practice:** run `npm run test:e2e -- --project=chromium`; inspect the report. Extend the journey only when the target site's current behavior and cleanup are understood.

## Module 8 — API testing

API tests should use documented endpoints and assert status, response shape, and meaningful business fields. Do not invent endpoints or assume a status code without checking the site's published API contract. UI and API checks complement one another; an API pass does not prove the UI journey works.

**Practice:** read `api/endpoints.js` and the public site's API list before adding a case.

## Module 9 — BDD with Cucumber

Feature files describe behavior in business language. Step definitions translate Gherkin steps into browser operations; the World stores scenario-specific context and hooks perform setup/teardown. Cucumber is a separate runner from Playwright Test, so its reporting, fixtures, and lifecycle must be configured explicitly.

**Practice:** read one `.feature` file and follow each Given/When/Then to its step definition.

## Module 10 — Assertions and failure quality

Assert observable outcomes: URL, visible heading, cart row, success message, or a meaningful response field. A click without an assertion is not a useful test. Avoid overly broad assertions that can pass for the wrong reason. When a test fails, first determine whether the product changed, the selector is stale, the test data is invalid, or the environment is unavailable.

## Module 11 — Trace-driven debugging

Use `npx playwright test --trace on` for a focused reproduction or inspect the trace retained on failure. Review action timeline, DOM snapshots, network activity, console output, and screenshots. Capture only the evidence needed to explain the failure. Never solve intermittent behavior by adding arbitrary sleeps without understanding the race.

## Module 12 — CI and quality gates

A pull-request workflow should install dependencies, install the browser(s) used by the job, validate configuration, lint, format-check, execute the relevant tests, and upload reports even when a test fails. Scheduled regression is useful for detecting changes in a public practice site. A green workflow is evidence only for the commit, browser, environment, and scenarios that actually ran.

**Practice:** open the Actions run linked from the repository. Confirm the commit SHA, workflow conclusion, and uploaded artifacts before reporting a pass.

## Module 13 — Maintainable test design

Keep test files readable, avoid duplicated selectors, isolate stateful tests, and give failures actionable names. Use retries only to collect diagnostic evidence, not to mask flaky tests. Prefer explicit waits tied to UI or network conditions. Keep external dependencies and public-site assumptions documented.

## Module 14 — Before calling a framework production-ready

- [ ] All critical user journeys have explicit acceptance criteria.
- [ ] Positive and negative paths are covered.
- [ ] Test data is isolated, unique, and cleaned up where possible.
- [ ] Browser matrix and mobile scope are intentionally selected.
- [ ] API assertions follow documented contracts.
- [ ] Secrets and artifacts are handled safely.
- [ ] CI reports, traces, and failures are reviewed.
- [ ] Tests have been run against the target environment; unrun coverage is not described as passing.
