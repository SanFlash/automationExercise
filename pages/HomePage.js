import { BasePage } from './BasePage.js';
import { homeLocators } from '../locators/home.locators.js';

export class HomePage extends BasePage {
  get heroCarousel() { return homeLocators.heroCarousel(this.page); }
  get pageHeading() { return homeLocators.homeHeading(this.page); }
  get productCards() { return homeLocators.productCards(this.page); }
  async open() { await this.goto('/'); }
}
