import { test, expect } from '../../fixtures/base.fixture.js';

test('NAV-001 primary navigation reaches Products', async ({ navigationBar, page }) => {
  await page.goto('/');
  await navigationBar.open('Products');
  await expect(page).toHaveURL(/\/products/);
  await expect(page.getByRole('heading', { name: 'All Products', exact: true })).toBeVisible();
});

test('NAV-002 Test Cases page is reachable', async ({ testCasesPage, page }) => {
  await testCasesPage.open();
  await expect(page).toHaveURL(/\/test_cases/);
  await expect(page.locator('body')).toContainText(/test case/i);
});
