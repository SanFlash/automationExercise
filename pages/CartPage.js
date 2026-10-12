import { BasePage } from './BasePage.js';
import { cartLocators as l } from '../locators/cart.locators.js';

export class CartPage extends BasePage {
  get table() { return l.cartTable(this.page); }
  get rows() { return l.cartRows(this.page); }
  get emptyText() { return l.emptyCartText(this.page); }
  async open() { await this.goto('/view_cart'); }
  async removeProductAt(index = 0) { await l.deleteButtons(this.page).nth(index).click(); }
  async proceedToCheckout() { await l.proceedToCheckout(this.page).click(); }
}
