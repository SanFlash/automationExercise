import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
Given('the shopper opens the Automation Exercise home page', async function () { await this.homePage.open(); });
Then('the home page content should be visible', async function () { await expect(this.homePage.heroCarousel).toBeVisible(); });
When('the shopper navigates to the products page', async function () { await this.productsPage.open(); });
When('the shopper searches for {string}', async function (term) { await this.productsPage.search(term); });
Then('matching products should be displayed', async function () {
  await expect(this.productsPage.searchedHeading).toBeVisible();
  await expect(this.page.locator('.features_items')).toContainText(/Blue Top/i);
});
