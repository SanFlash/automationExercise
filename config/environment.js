import 'dotenv/config';

export const environment = Object.freeze({
  baseURL: process.env.BASE_URL || 'https://www.automationexercise.com',
  apiBaseURL: process.env.API_BASE_URL || 'https://automationexercise.com/api',
  isCI: process.env.CI === 'true',
  headless: process.env.HEADLESS !== 'false',
});
