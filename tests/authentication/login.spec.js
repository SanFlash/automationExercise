import { test, expect } from '../../fixtures/base.fixture.js';

test('AUTH-002 invalid credentials display an error', async ({ loginPage }) => {
  await loginPage.open();
  await expect(loginPage.loginHeading).toBeVisible();
  await loginPage.login('invalid-user@example.invalid', 'wrong-password');
  await expect(loginPage.loginError).toBeVisible();
});

test('AUTH-003 signup entry form is available', async ({ loginPage }) => {
  await loginPage.open();
  await expect(loginPage.signupHeading).toBeVisible();
});
