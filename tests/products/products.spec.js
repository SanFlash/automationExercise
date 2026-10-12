import { test, expect } from '../../fixtures/base.fixture.js';

test('PRD-001 catalogue and product detail are visible', async ({ productsPage, page }) => {
  await productsPage.open();
  await expect(productsPage.heading).toBeVisible();
  await expect(productsPage.productCards.first()).toBeVisible();
  await productsPage.openFirstProduct();
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
