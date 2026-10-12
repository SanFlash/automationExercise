import { test, expect } from '../../fixtures/base.fixture.js';

test('PRD-001 catalogue and product detail are visible', async ({ productsPage, page }) => {
  await productsPage.open();
  await expect(productsPage.heading).toBeVisible();
  await expect(productsPage.productCards.first()).toBeVisible();
  const firstProductUrl = await productsPage.productCards.first().locator('a[href*="product_details"]').first().getAttribute('href');
  await productsPage.openFirstProduct();
  // Ads on the shared practice site occasionally intercept the click with #google_vignette.
  if (page.url().includes('#google_vignette') && firstProductUrl) await page.goto(firstProductUrl);
  await expect(page).toHaveURL(/\/product_details\//);
  await expect(page.locator('.product-information h2')).toBeVisible();
  await expect(page.locator('.product-information')).toContainText(/Category:/);
});

test('PRD-002 searching Blue Top displays matching product content', async ({ productsPage, page }) => {
  await productsPage.open();
  await productsPage.search('Blue Top');
  await expect(productsPage.searchedHeading).toBeVisible();
  await expect(page.locator('.features_items')).toContainText(/Blue Top/i);
});
