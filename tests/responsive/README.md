# Responsive and browser coverage

The Playwright configuration defines Chromium, Firefox, WebKit, and a Pixel 7 device-emulation project for the selected smoke/navigation tests. Run the browser project explicitly, for example `npm run test:chromium`, `npm run test:firefox`, or `npm run test:webkit`.

Device emulation is useful for viewport and touch-layout checks, but it is not equivalent to testing on every real device. When adding responsive scenarios, assert user-visible layout and navigation behavior at documented viewport sizes. Avoid brittle pixel-perfect assertions unless a visual baseline is deliberately maintained.

This folder documents the strategy; it does not claim that a complete responsive suite already exists.