export class BasePage {
  constructor(page) { this.page = page; }
  async goto(path = '/') { await this.page.goto(new URL(path, process.env.BASE_URL || 'https://www.automationexercise.com').toString()); }
  async currentUrl() { return this.page.url(); }
}
