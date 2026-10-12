import { test as base, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.js';
import { LoginPage } from '../pages/LoginPage.js';
import { SignupPage } from '../pages/SignupPage.js';
import { ProductsPage } from '../pages/ProductsPage.js';
import { CartPage } from '../pages/CartPage.js';
import { ContactUsPage } from '../pages/ContactUsPage.js';
import { TestCasesPage } from '../pages/TestCasesPage.js';
import { SubscriptionComponent } from '../pages/SubscriptionComponent.js';
import { NavigationBar } from '../components/NavigationBar.js';
import { Footer } from '../components/Footer.js';
import { testDataFactory } from '../utils/test-data.factory.js';

export const test = base.extend({
  homePage: async ({ page }, use) => use(new HomePage(page)),
  loginPage: async ({ page }, use) => use(new LoginPage(page)),
  signupPage: async ({ page }, use) => use(new SignupPage(page)),
  productsPage: async ({ page }, use) => use(new ProductsPage(page)),
  cartPage: async ({ page }, use) => use(new CartPage(page)),
  contactUsPage: async ({ page }, use) => use(new ContactUsPage(page)),
  testCasesPage: async ({ page }, use) => use(new TestCasesPage(page)),
  subscription: async ({ page }, use) => use(new SubscriptionComponent(page)),
  navigationBar: async ({ page }, use) => use(new NavigationBar(page)),
  footer: async ({ page }, use) => use(new Footer(page)),
  generatedData: async ({}, use) => use(testDataFactory),
});

export { expect };
