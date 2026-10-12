import { URL } from 'node:url';
import { frameworkConfig } from '../config/framework.config.js';

const parsed = new URL(frameworkConfig.baseURL);
if (!['http:', 'https:'].includes(parsed.protocol)) throw new Error('BASE_URL must use HTTP or HTTPS.');
for (const name of ['testTimeout', 'expectTimeout', 'actionTimeout', 'navigationTimeout']) {
  if (!Number.isFinite(frameworkConfig[name]) || frameworkConfig[name] <= 0) throw new Error(`${name} must be positive`);
}
console.info('Framework configuration is valid.');
console.info(`Base URL: ${frameworkConfig.baseURL}`);
console.info(`API base URL: ${frameworkConfig.apiBaseURL}`);
