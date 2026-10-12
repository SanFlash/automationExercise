export class SubscriptionComponent {
  constructor(page) { this.page = page; }
  get heading() { return this.page.getByRole('heading', { name: /subscription/i }); }
  get emailInput() { return this.page.locator('#susbscribe_email'); }
  get submitButton() { return this.page.locator('#subscribe'); }
  get successMessage() { return this.page.locator('.alert-success'); }
  async subscribe(email) {
    await this.emailInput.fill(email);
    await this.submitButton.click();
  }
}
