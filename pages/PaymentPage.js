import { BasePage } from './BasePage.js';
import { paymentLocators as l } from '../locators/payment.locators.js';

export class PaymentPage extends BasePage {
  async payWithDummyData(payment) {
    await l.nameOnCard(this.page).fill(payment.name);
    await l.cardNumber(this.page).fill(payment.cardNumber);
    await l.cvc(this.page).fill(payment.cvc);
    await l.expiryMonth(this.page).fill(payment.expiryMonth);
    await l.expiryYear(this.page).fill(payment.expiryYear);
    await l.payButton(this.page).click();
  }
  get orderSuccess() { return l.orderSuccess(this.page); }
  get downloadInvoiceLink() { return l.downloadInvoice(this.page); }
  async downloadInvoice() {
    const downloadPromise = this.page.waitForEvent('download');
    await this.downloadInvoiceLink.click();
    return downloadPromise;
  }
}
