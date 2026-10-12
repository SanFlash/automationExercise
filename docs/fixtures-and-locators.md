# Fixtures and locators — practical guide

## What is a locator?

A Playwright Locator is a query recipe that resolves against the current DOM when used. Unlike a Selenium WebElement reference, it is not just a one-time element lookup: each operation can re-resolve the target, while actions and async assertions use Playwright's auto-waiting and retry behavior. This helps with rerenders, but selector quality still matters.

## Locator priority

Prefer `getByRole` for accessible controls, `getByLabel` for labelled inputs, `getByPlaceholder` for stable placeholder text, `getByText` for user-visible content, and `getByTestId` where the application exposes test IDs. Use stable IDs or CSS/data-qa attributes when the public practice site's markup makes them the most reliable contract. The login page uses selectors such as `input[data-qa="login-email"]`; those are centralized in `locators/login.locators.js`.

## Locator factories

A factory accepts the page and returns a locator, such as `loginLocators.loginEmail(page)`. The factory does not need to be awaited. The page object uses that factory, and tests avoid repeating raw selector strings. Updating a selector centrally therefore updates all users of that locator.

## Auto-waiting and retryability

Playwright waits for actionability before operations such as click, and async assertions retry until they pass or reach the configured timeout. Avoid arbitrary fixed sleeps. Wait for observable results such as a heading being visible or the URL changing.

## Multiple matches and product scoping

A strict-mode violation usually means a locator matched multiple elements. Assert uniqueness when appropriate with `await expect(locator).toHaveCount(1)` or scope a control to the product card:

```js
const card = page.locator('.product-image-wrapper').filter({ hasText: 'Blue Top' }).first();
await card.getByRole('link', { name: /view product/i }).click();
```

Avoid a page-wide `getByText('Add to cart')` if every product card has that control.

## Debug a broken locator

1. Run one test with `npx playwright test tests/smoke/home-page.spec.js --project=chromium --headed`.
2. Open the HTML report and examine its error and attachments.
3. Open a trace with `npx playwright show-trace test-results/<test-folder>/trace.zip`.
4. Inspect the DOM snapshot, accessible name, and locator match count.
5. Prefer accessible roles/labels, or use a stable ID/data-qa selector.
6. Update the central locator module and rerun the focused test.

## Fixture and locator execution flow

`Test → Fixture → Page Object → Locator → Browser Interaction → Assertion → Report`

A fixture manages construction and lifecycle. A page object exposes focused UI actions and locators. A locator module stores selector recipes. The test declares expected business behavior and assertions. These responsibilities are separate so the failure is easier to isolate.
