# Test strategy and coverage matrix

This matrix documents the implemented test inventory and distinguishes it from planned coverage. A file existing in the repository does not mean it has passed; use the GitHub Actions run and generated report for execution evidence.

| ID | Test layer | Scenario | Test path | Suite |
|---|---|---|---|---|
| SMK-001 | Smoke | Home and featured products render | `tests/smoke/home-page.spec.js` | Smoke |
| SAN-001–003 | Sanity | Home content, product search, login/signup entry | `tests/sanity/critical-sanity.spec.js` | Sanity |
| NAV-001/002 | Functional/navigation | Products and Test Cases routes | `tests/navigation/navigation.spec.js` | Regression |
| AUTH-002/003 | Negative/auth entry | Invalid login and signup form | `tests/authentication/login.spec.js` | Regression |
| PRD-001/002 | Functional/product | Catalogue, product details, product search | `tests/products/products.spec.js` | Regression |
| CART-001 | Functional/cart | Cart page content | `tests/cart/cart.spec.js` | Regression |
| CON-001 | Functional/contact | Contact form fields | `tests/contact/contact.spec.js` | Regression |
| SUB-001 | Functional/subscription | Subscription confirmation | `tests/subscription/subscription.spec.js` | Regression |
| E2E-001 | E2E/cart | Add product, verify cart row, remove product | `tests/e2e/shopping-journey.spec.js` | E2E + regression |
| E2E-002 | E2E/account | Register and delete a disposable generated account | `tests/e2e/account-lifecycle.spec.js` | E2E + regression |
| API-001–004 | API/negative contract | Products, brands, valid and invalid search requests | `tests/api/products-api.spec.js` | API |
| BDD-SMK/PRD | BDD | Home page and product search | `bdd/features/` | Cucumber |
| Cross-browser | Browser compatibility | Selected UI regression tests on Chromium, Firefox, WebKit | `playwright.config.js` | Scheduled regression |
| Device emulation | Responsive baseline | Selected smoke/navigation tests on Pixel 7 emulation | `playwright.config.js` | Targeted |

## Suite intent

- **Smoke:** quick signal that the essential UI is available.
- **Sanity:** small, high-value subset after a focused change.
- **Regression:** broader selected UI coverage to catch unintended behavior changes.
- **E2E:** multi-page journeys with state transitions and cleanup.
- **API:** published endpoint response/status checks.
- **BDD:** business-readable scenarios executed by Cucumber.
- **Cross-browser:** selected regression suite across browser engines.

## Known coverage gaps

The current suite is not yet a complete e-commerce certification. Full checkout/order/payment, invoice download, successful login against a provisioned account, cart quantity/total calculations, product review submission, contact-form submission, and exhaustive responsive/accessibility/visual checks still require implementation and execution evidence. Page objects for checkout/payment are building blocks, not proof of completed E2E coverage.

Performance/load and security tests are intentionally not run against the shared public practice site. Only add those with explicit owner authorization and an appropriate controlled environment. Accessibility conformance needs dedicated automated checks (for example, axe-core) plus manual keyboard/screen-reader assessment.

## Acceptance criteria for a new test

1. Test name and ID identify one behavior.
2. Preconditions and test data are explicit.
3. Assertions check observable results.
4. Test can run alone without another test's state.
5. No real credentials or payment data are used.
6. Failure evidence is actionable.
7. The test is run in the intended browser/CI environment before being reported as passing.
