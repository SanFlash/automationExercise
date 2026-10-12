export const loginLocators = {
  loginHeading: (page) => page.getByRole('heading', { name: 'Login to your account', exact: true }),
  signupHeading: (page) => page.getByRole('heading', { name: 'New User Signup!', exact: true }),
  loginEmail: (page) => page.locator('input[data-qa="login-email"]'),
  loginPassword: (page) => page.locator('input[data-qa="login-password"]'),
  loginButton: (page) => page.locator('button[data-qa="login-button"]'),
  signupName: (page) => page.locator('input[data-qa="signup-name"]'),
  signupEmail: (page) => page.locator('input[data-qa="signup-email"]'),
  signupButton: (page) => page.locator('button[data-qa="signup-button"]'),
  loginError: (page) => page.getByText('Your email or password is incorrect!', { exact: true }),
  signupError: (page) => page.getByText('Email Address already exist!', { exact: true }),
};
