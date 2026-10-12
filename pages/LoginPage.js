import { BasePage } from './BasePage.js';
import { loginLocators as l } from '../locators/login.locators.js';

export class LoginPage extends BasePage {
  get loginHeading() { return l.loginHeading(this.page); }
  get signupHeading() { return l.signupHeading(this.page); }
  get loginError() { return l.loginError(this.page); }
  get signupError() { return l.signupError(this.page); }
  async open() { await this.goto('/login'); }
  async login(email, password) {
    await l.loginEmail(this.page).fill(email);
    await l.loginPassword(this.page).fill(password);
    await l.loginButton(this.page).click();
  }
  async startSignup(name, email) {
    await l.signupName(this.page).fill(name);
    await l.signupEmail(this.page).fill(email);
    await l.signupButton(this.page).click();
  }
}
