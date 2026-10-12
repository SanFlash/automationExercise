export const commonLocators = {
  navLink: (page, name) => page.locator('.shop-menu').getByRole('link', { name, exact: true }),
  loggedInAs: (page) => page.getByText(/Logged in as/i),
  deleteAccount: (page) => page.getByRole('link', { name: 'Delete Account', exact: true }),
  continueButton: (page) => page.getByRole('link', { name: 'Continue', exact: true }),
};
