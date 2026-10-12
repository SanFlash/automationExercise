# Architecture

Execution chain: configuration → runner → fixtures → page objects → centralized locators/components → practice website → assertions → screenshots/traces/reports → CI artifacts. BDD uses Cucumber's own World/hooks but shares page objects and locators. API checks use Playwright's request fixture and documented endpoints.

- Configuration: URL, timeouts and projects.
- Runner: discovery, isolation, retries and reporting.
- Fixture: dependency construction and lifecycle.
- Page object: focused page/component behavior.
- Locator module: selectors separated from business logic.
- Flow: multi-page journey.
- Test: preconditions and business expectations.
- Utilities/data: reusable generation and helper behavior.

A passing test is evidence only for its assertions in that run.
