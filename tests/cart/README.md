# Cart tests

This initial check verifies that the cart page renders in a fresh isolated context. Do not assume that cart items persist between contexts. For mutation tests, add the intended product within the same test, scope its Add to Cart action to the product card, and verify quantity/price after navigating to the cart. Run `npx playwright test tests/cart`.
