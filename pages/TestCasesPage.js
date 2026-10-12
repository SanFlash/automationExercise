import { BasePage } from './BasePage.js';
export class TestCasesPage extends BasePage {
  async open() { await this.goto('/test_cases'); }
}
