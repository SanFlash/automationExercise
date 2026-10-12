import { setWorldConstructor, World } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { HomePage } from '../../pages/HomePage.js';
import { ProductsPage } from '../../pages/ProductsPage.js';

export class AutomationExerciseWorld extends World {
  async startBrowser() {
    this.browser = await chromium.launch({ headless: process.env.HEADLESS !== 'false' });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.baseURL = process.env.BASE_URL || 'https://www.automationexercise.com';
    this.page.setDefaultNavigationTimeout(30000);
    this.homePage = new HomePage(this.page);
    this.productsPage = new ProductsPage(this.page);
  }
  async closeBrowser() { await this.context?.close(); await this.browser?.close(); }
}
setWorldConstructor(AutomationExerciseWorld);
