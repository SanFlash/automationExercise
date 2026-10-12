import { test, expect } from '../../fixtures/base.fixture.js';
// Creates a unique disposable account and removes it in the same journey.
// Keep this test serial within its own browser context; do not reuse real credentials.
test('E2E-002 a new shopper can register and delete the disposable account', async ({
  loginPage,
  signupPage,
  generatedData,
  navigationBar,
  page,
}) => {
  const user = generatedData.user();

  await loginPage.open();
  await loginPage.startSignup(user.name, user.email);
  await expect(signupPage.accountInfoHeading).toBeVisible();

  await signupPage.fillAccountDetails(user);
  await signupPage.createAccount();
  await expect(signupPage.accountCreatedHeading).toBeVisible();

  await page.getByRole('link', { name: 'Continue', exact: true }).click();
  await expect(navigationBar.loggedInIndicator).toContainText(user.name);

  // Use the documented account-deletion route after verifying authentication.
  // This avoids coupling cleanup to the site's navigation label/rendering.
  await page.goto('/delete_account');
  await expect(signupPage.accountDeletedHeading).toBeVisible();
  await page.getByRole('link', { name: 'Continue', exact: true }).click();
});
