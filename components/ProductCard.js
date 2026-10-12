export class ProductCard {
  constructor(cardLocator) { this.card = cardLocator; }
  get name() { return this.card.locator('.productinfo p'); }
  get price() { return this.card.locator('.productinfo h2'); }
  get viewProduct() { return this.card.getByRole('link', { name: /view product/i }); }
  async openDetails() { await this.viewProduct.click(); }
}
