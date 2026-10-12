export const commonLocators = {
  navLink: (page, name) => page.getByRole('link', { name, exact: true }).filter({ visible: true }).first(),
  loggedInAs: (page) => page.getByText(/Logged in as/i),
  deleteAccount: (page) => page.getByRole('link', { name: 'Delete Account', exact: true }),
  continueButton: (page) => page.getByRole('link', { name: 'Continue', exact: true }),
};
