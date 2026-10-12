export class Footer {
  constructor(page) { this.page = page; }
  get subscriptionHeading() { return this.page.getByRole('heading', { name: /subscription/i }); }
  async scrollIntoView() { await this.subscriptionHeading.scrollIntoViewIfNeeded(); }
}
