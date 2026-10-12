# Installation and local setup

## Prerequisites

- Node.js 20+ and npm
- Git
- Internet access to install dependencies and reach Automation Exercise

## Setup

```bash
git clone https://github.com/SanFlash/automationExercise.git
cd automationExercise
npm ci
npx playwright install --with-deps chromium
npm run validate:config
npm run test:smoke
```

Use `npm ci` to install the versions in the lockfile. Copy `.env.example` to `.env` only when you need to override the default public URLs or timeouts. `.env` is ignored by Git.

## Reports

Playwright generates HTML, JSON, and JUnit output during a test run. Once a run has generated the HTML report, open it with `npm run report`. Traces and screenshots are attached to failed test results according to the Playwright configuration.

## Caveat

The public practice website is independently maintained. A network failure or selector change can fail a test even when the framework starts correctly; inspect the trace and actual website before changing timeouts.