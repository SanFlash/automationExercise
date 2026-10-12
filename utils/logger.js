export const logger = Object.freeze({
  info: (message, metadata = {}) => console.info(`[INFO] ${message}`, metadata),
  warn: (message, metadata = {}) => console.warn(`[WARN] ${message}`, metadata),
  error: (message, metadata = {}) => console.error(`[ERROR] ${message}`, metadata),
});
