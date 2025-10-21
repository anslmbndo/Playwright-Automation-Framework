import { Page, Locator, expect } from '@playwright/test';

/**
 * Represents the checkout page of SauceDemo.
 */
export class CheckoutPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // --- Locators ---
  firstName = (): Locator => this.page.locator('[data-test="firstName"]');
  lastName = (): Locator => this.page.locator('[data-test="lastName"]');
  postalCode = (): Locator => this.page.locator('[data-test="postalCode"]');
  continueButton = (): Locator => this.page.locator('[data-test="continue"]');
  paymentInfoLabel = (): Locator => this.page.locator('[data-test="payment-info-label"]');
  shippingInfoLabel = (): Locator => this.page.locator('[data-test="shipping-info-label"]');

  // --- Actions ---
  async fillCustomerInfo(first: string, last: string, postal: string) {
    await this.firstName().fill(first);
    await this.lastName().fill(last);
    await this.postalCode().fill(postal);
    await this.continueButton().click();
  }

  async verifyPaymentAndShippingInfoVisible() {
    await expect(this.paymentInfoLabel()).toBeVisible();
    await expect(this.shippingInfoLabel()).toBeVisible();
  }
}
