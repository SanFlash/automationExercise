import { test, expect } from '../../fixtures/base.fixture.js';

test('SUB-001 home subscription accepts an email address', async ({ homePage, subscription, generatedData }) => {
  await homePage.open();
  await expect(subscription.heading).toBeVisible();
  await subscription.subscribe(generatedData.email());
  await expect(subscription.successMessage).toContainText(/successfully subscribed/i);
});
