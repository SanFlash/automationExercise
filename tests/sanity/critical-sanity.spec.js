import { test, expect } from '../../fixtures/base.fixture.js';

// Sanity is a short, high-value subset executed after a build or deployment.
test('SAN-001 home page renders its primary shopping content', async ({ homePage, page }) => {
  await homePage.open();
  await expect(page).toHaveURL(/automationexercise\.com\/?$/);
  await expect(homePage.heroCarousel).toBeVisible();
  await expect(homePage.productCards.first()).toBeVisible();
});

test('SAN-002 product search returns a matching result', async ({ productsPage, page }) => {
  await productsPage.open();
  await productsPage.search('Blue Top');
  await expect(productsPage.searchedHeading).toBeVisible();
  await expect(page.locator('.features_items')).toContainText(/Blue Top/i);
});

test('SAN-003 login page exposes both login and signup entry points', async ({ loginPage }) => {
  await loginPage.open();
  await expect(loginPage.loginHeading).toBeVisible();
  await expect(loginPage.signupHeading).toBeVisible();
});
