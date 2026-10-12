import { test, expect } from '../../fixtures/base.fixture.js';

test('SMK-001 home page and featured products render', async ({ homePage, page }) => {
  await homePage.open();
  await expect(page).toHaveURL(/automationexercise\.com\/?$/);
  await expect(homePage.heroCarousel).toBeVisible();
  await expect(homePage.productCards.first()).toBeVisible();
});
