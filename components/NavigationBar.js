import { commonLocators } from '../locators/common.locators.js';
export class NavigationBar {
  constructor(page) { this.page = page; }
  async open(name) { await commonLocators.navLink(this.page, name).click(); }
  get loggedInIndicator() { return commonLocators.loggedInAs(this.page); }
}
