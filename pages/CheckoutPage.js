import { BasePage } from './BasePage.js';
import { checkoutLocators as l } from '../locators/checkout.locators.js';

export class CheckoutPage extends BasePage {
  get deliveryAddress() { return l.deliveryAddress(this.page); }
  get billingAddress() { return l.billingAddress(this.page); }
  async addComment(comment) { await l.comment(this.page).fill(comment); }
  async placeOrder() { await l.placeOrder(this.page).click(); }
}
