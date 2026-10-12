# BDD support layer

`world.js` creates a browser context and page objects per scenario. `hooks.js` owns setup, failure screenshot attachment, and teardown. Cucumber runs separately from Playwright Test fixtures. Do not store credentials or shared browser state here.
