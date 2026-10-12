import { BasePage } from './BasePage.js';
import { contactUsLocators as l } from '../locators/contact-us.locators.js';

export class ContactUsPage extends BasePage {
  get heading() { return l.heading(this.page); }
  get successMessage() { return l.success(this.page); }
  async open() { await this.goto('/contact_us'); }
  async submitForm(data, uploadPath) {
    await l.name(this.page).fill(data.name);
    await l.email(this.page).fill(data.email);
    await l.subject(this.page).fill(data.subject);
    await l.message(this.page).fill(data.message);
    if (uploadPath) await l.upload(this.page).setInputFiles(uploadPath);
    this.page.once('dialog', (dialog) => dialog.accept());
    await l.submit(this.page).click();
  }
}
