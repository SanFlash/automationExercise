import { Before, After, Status } from '@cucumber/cucumber';
Before(async function () { await this.startBrowser(); });
After(async function (scenario) {
  try {
    if (scenario.result?.status === Status.FAILED && this.page) {
      await this.attach(await this.page.screenshot({ fullPage: true }), 'image/png');
    }
  } finally { await this.closeBrowser(); }
});
