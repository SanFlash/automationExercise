import { test, expect } from '../../fixtures/base.fixture.js';

test('CON-001 contact form and key fields are available', async ({ contactUsPage }) => {
  await contactUsPage.open();
  await expect(contactUsPage.heading).toBeVisible();
  await expect(contactUsPage.page.locator('input[data-qa="name"]')).toBeVisible();
  await expect(contactUsPage.page.locator('textarea[data-qa="message"]')).toBeVisible();
});
