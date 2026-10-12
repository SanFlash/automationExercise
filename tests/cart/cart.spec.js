import { test, expect } from '../../fixtures/base.fixture.js';

test('CART-001 cart page exposes cart content', async ({ cartPage, page }) => {
  await cartPage.open();
  await expect(page).toHaveURL(/\/view_cart/);
  await expect(page.locator('#cart_info')).toBeVisible();
});
