import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';
import { frameworkConfig } from './config/framework.config.js';

const isCI = process.env.CI === 'true';

export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.js',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 1 : 0,
  workers: isCI ? 2 : undefined,
  timeout: frameworkConfig.testTimeout,
  expect: { timeout: frameworkConfig.expectTimeout },
  outputDir: 'test-results',
  reporter: [
    ['list'],
    ['html', { outputFolder: 'reports/html', open: 'never' }],
    ['json', { outputFile: 'reports/results.json' }],
    ['junit', { outputFile: 'reports/junit.xml' }],
  ],
  use: {
    baseURL: frameworkConfig.baseURL,
    headless: process.env.HEADLESS !== 'false',
    actionTimeout: frameworkConfig.actionTimeout,
    navigationTimeout: frameworkConfig.navigationTimeout,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    {
      name: 'mobile-chromium',
      testMatch: /tests\/(smoke|navigation)\/.*\.spec\.js/,
      use: { ...devices['Pixel 7'] },
    },
  ],
});
