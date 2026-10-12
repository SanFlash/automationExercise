export class Modal {
  constructor(page) { this.page = page; }
  get root() { return this.page.locator('.modal-content'); }
  get continueButton() { return this.root.getByRole('button', { name: /continue shopping/i }); }
  async continueShopping() { await this.continueButton.click(); }
}
