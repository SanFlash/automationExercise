import { removeGeneratedPath } from '../utils/file.utils.js';
await removeGeneratedPath('reports');
await removeGeneratedPath('test-results');
console.info('Removed generated reports and test-results.');
