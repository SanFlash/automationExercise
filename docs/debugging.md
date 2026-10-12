# Debugging

1. Run one test: `npx playwright test tests/smoke/home-page.spec.js --project=chromium`.
2. Add `--headed` to observe browser actions or use `npm run test:debug`.
3. Open reports using `npm run report`.
4. Open trace ZIPs with `npx playwright show-trace test-results/<test-folder>/trace.zip`.
5. Inspect action logs, DOM snapshots, screenshots, console/network events and locator match counts.

Classify failures as framework/configuration, selector drift, application behavior or network/public-site instability. Gather evidence before adjusting timeouts.
