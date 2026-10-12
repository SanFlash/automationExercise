import { BasePage } from './BasePage.js';
import { signupLocators as l } from '../locators/signup.locators.js';

export class SignupPage extends BasePage {
  get accountInfoHeading() { return l.accountInfoHeading(this.page); }
  get accountCreatedHeading() { return l.accountCreated(this.page); }
  get accountDeletedHeading() { return l.accountDeleted(this.page); }
  async fillAccountDetails(user) {
    await l.titleMr(this.page).check();
    await l.password(this.page).fill(user.password);
    await l.day(this.page).selectOption(String(user.birthDay ?? 10));
    await l.month(this.page).selectOption(String(user.birthMonth ?? 5));
    await l.year(this.page).selectOption(String(user.birthYear ?? 1995));
    if (user.newsletter) await l.newsletter(this.page).check();
    if (user.offers) await l.offers(this.page).check();
    await l.firstName(this.page).fill(user.firstName);
    await l.lastName(this.page).fill(user.lastName);
    await l.company(this.page).fill(user.company ?? 'QA Practice');
    await l.address1(this.page).fill(user.address1 ?? '123 Test Street');
    await l.address2(this.page).fill(user.address2 ?? '');
    await l.country(this.page).selectOption(user.country ?? 'India');
    await l.state(this.page).fill(user.state ?? 'Madhya Pradesh');
    await l.city(this.page).fill(user.city ?? 'Indore');
    await l.zipcode(this.page).fill(user.zipcode ?? '452001');
    await l.mobile(this.page).fill(user.mobile ?? '9000000000');
  }
  async createAccount() { await l.createAccount(this.page).click(); }
}
