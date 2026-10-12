# Test strategy and coverage matrix

| ID | Area | Scenario | Test |
|---|---|---|---|
| SMK-001 | Home | Home and featured products render | `tests/smoke/home-page.spec.js` |
| NAV-001/002 | Navigation | Products and Test Cases routes | `tests/navigation/navigation.spec.js` |
| AUTH-002/003 | Auth | Invalid login and signup form | `tests/authentication/login.spec.js` |
| PRD-001/002 | Products | Catalogue, detail and search | `tests/products/products.spec.js` |
| CART-001 | Cart | Cart page renders | `tests/cart/cart.spec.js` |
| CON-001 | Contact | Main form fields render | `tests/contact/contact.spec.js` |
| SUB-001 | Subscription | Home subscription feedback | `tests/subscription/subscription.spec.js` |
| API-001–004 | API | Products, brands and search validation | `tests/api/products-api.spec.js` |
| BDD-SMK/PRD | BDD | Home and product search | `bdd/features/` |

Implemented does not mean passed. Not yet covered end-to-end: account create/delete, valid login, cart mutation, complete checkout/payment, invoice download and review submission. Add these after account setup and live selectors are verified. Do not claim success without an execution report.
