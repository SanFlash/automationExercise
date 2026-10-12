# Troubleshooting

- Browser binary missing: run `npx playwright install --with-deps chromium`.
- Unexpected page/status: verify availability and inspect live markup.
- Strict-mode violation: scope the locator to the intended section/product card.
- Timeout: inspect trace and state before adjusting limits.
- Unmatched Cucumber step: compare feature wording and step definitions; verify imports.
- No report: execute a test first.
- Formatting mismatch: run `npm run format`, then `npm run format:check`.
- Account test failure: do not assume a shared user exists; provision an account securely.
