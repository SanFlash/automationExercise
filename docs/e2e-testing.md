# End-to-End Testing

## What E2E means here

End-to-end testing follows a user journey through multiple real application pages and verifies the resulting state. It differs from smoke testing (fast confidence that critical pages render) and from unit testing (small isolated functions). A meaningful E2E test contains actions and assertions across the journey, and controls its data/state.

## Implemented example

Run:

```bash
npm run test:e2e -- --project=chromium
```

Open `tests/e2e/shopping-journey.spec.js`. It opens the product catalogue, scopes an add-to-cart action to one product card, verifies the add confirmation, opens the cart, verifies the expected product row, removes it, and verifies the cart is empty. The scenario does not submit an order or payment.

## Adding a new journey

1. Write the precondition, user actions, expected checkpoints, and cleanup.
2. Check the live site and published behavior before choosing selectors.
3. Reuse page objects and centralized locators where they make the test clearer.
4. Generate unique test data for stateful flows; avoid dependence on another test.
5. Assert each important transition and the final outcome.
6. Run the test alone, then with its suite, then in CI.
7. Review traces/screenshots on failure and document target-site assumptions.

## Checkout and account prerequisites

Checkout on this practice site can depend on authentication and persistent account state. Do not hard-code credentials. Provision a dedicated test account through an approved setup process and store credentials as CI secrets/environment variables. Use only the site's dummy payment examples. Account creation/deletion, checkout completion, invoice download, and review submission must be considered covered only when implemented and verified in the relevant suite—not because a page object exists.

## Stability guidelines

- Prefer web-first assertions and locator auto-waiting to fixed sleeps.
- Keep shared-site concurrency conservative for stateful scenarios.
- Use retries to capture evidence, not to hide intermittent defects.
- Distinguish application failures from site downtime, rate limits, and selector drift.
- Keep tests non-destructive and avoid load/security testing on public infrastructure without explicit authorization.
