# BDD with Cucumber.js

This is a separate executable BDD layer. Gherkin feature files express behaviors; step definitions translate Given/When/Then into calls against shared page objects; the World object stores scenario-local page and browser state; hooks manage startup, failure evidence and cleanup. Cucumber owns its own browser lifecycle and does not borrow Playwright Test fixtures.

Run `npm run test:bdd` for all scenarios and `npm run test:bdd:smoke` for smoke-tagged scenarios. JSON output is configured at `reports/cucumber-results.json`.

Keep feature language business-oriented and keep browser interaction logic in page objects rather than duplicating it in step definitions. A feature is not proof that its scenario has passed; inspect the actual output from a run.
