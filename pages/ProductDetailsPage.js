import { BasePage } from './BasePage.js';
import { productDetailsLocators as l } from '../locators/product-details.locators.js';

export class ProductDetailsPage extends BasePage {
  get information() { return l.information(this.page); }
  get name() { return l.name(this.page); }
  async submitReview(review) {
    await l.reviewName(this.page).fill(review.name);
    await l.reviewEmail(this.page).fill(review.email);
    await l.reviewText(this.page).fill(review.text);
    await l.reviewSubmit(this.page).click();
  }
}
