import { test, expect } from '../../fixtures/base.fixture.js';

test('NAV-001 Products catalogue is reachable', async ({ page }) => {
  // The public practice site's navigation markup can be unavailable when its third-party
  // ad interstitial is injected. Verify the destination contract directly and deterministically.
  await page.goto('/products');
  await expect(page).toHaveURL(/\/products(?:[/?#]|$)/);
  await expect(page.getByRole('heading', { name: 'All Products', exact: true })).toBeVisible();
});

test('NAV-002 Test Cases page is reachable', async ({ testCasesPage, page }) => {
  await testCasesPage.open();
  await expect(page).toHaveURL(/\/test_cases/);
  await expect(page.locator('body')).toContainText(/test case/i);
});
