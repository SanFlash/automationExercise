import { test, expect } from '../../fixtures/base.fixture.js';

// This journey intentionally crosses catalogue -> cart -> cart mutation.
// It uses a disposable cart session and does not place an order or submit payment.
test('E2E-001 customer can add a catalogue product to the cart and remove it', async ({ productsPage, cartPage, page }) => {
  await productsPage.open();
  await expect(productsPage.heading).toBeVisible();

  const firstProduct = productsPage.productCards.first();
  await expect(firstProduct).toBeVisible();
  const productName = (await firstProduct.locator('.productinfo p').innerText()).trim();

  await firstProduct.locator('.add-to-cart').first().click();
  const addedDialog = page.locator('.modal-content');
  await expect(addedDialog).toBeVisible();
  await expect(addedDialog).toContainText(/added/i);

  // Opening the cart by URL keeps this journey independent of modal link wording.
  await cartPage.open();
  await expect(cartPage.table).toBeVisible();
  const matchingRow = cartPage.rows.filter({ hasText: productName });
  await expect(matchingRow).toHaveCount(1);

  await cartPage.removeProductAt(await cartPage.rows.count() - 1);
  await expect(cartPage.rows).toHaveCount(0);
});
