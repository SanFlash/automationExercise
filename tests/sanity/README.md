# Sanity suite

Sanity tests are a compact, high-value subset used to check whether the build is stable enough for deeper testing. They are not a replacement for regression or E2E.

Current checks:
- Home page and product content render.
- Searching for a known catalogue item returns matching content.
- Login and signup entry points are available.

Run `npm run test:sanity`. The suite is deliberately short and avoids creating persistent accounts or placing orders.