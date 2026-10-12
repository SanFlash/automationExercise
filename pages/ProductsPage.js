import { BasePage } from './BasePage.js';
import { productsLocators as l } from '../locators/products.locators.js';

export class ProductsPage extends BasePage {
  get heading() { return l.allProductsHeading(this.page); }
  get searchedHeading() { return l.searchedProductsHeading(this.page); }
  get productCards() { return l.productCards(this.page); }
  async open() { await this.goto('/products'); }
  async search(term) {
    await l.searchInput(this.page).fill(term);
    await l.searchButton(this.page).click();
  }
  async openFirstProduct() {
    const card = this.productCards.first();
    await l.viewProduct(this.page, card).click();
  }
  async openProductByName(name) {
    const card = this.productCards.filter({ hasText: name }).first();
    await l.viewProduct(this.page, card).click();
  }
}
