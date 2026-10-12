import { environment } from './environment.js';

const positiveNumber = (value, fallback) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
};

export const frameworkConfig = Object.freeze({
  ...environment,
  testTimeout: positiveNumber(process.env.TEST_TIMEOUT_MS, 45_000),
  expectTimeout: positiveNumber(process.env.EXPECT_TIMEOUT_MS, 8_000),
  actionTimeout: positiveNumber(process.env.ACTION_TIMEOUT_MS, 10_000),
  navigationTimeout: positiveNumber(process.env.NAVIGATION_TIMEOUT_MS, 30_000),
});
