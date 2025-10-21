import { Page, Locator } from '@playwright/test';

/**
 * Represents the shopping cart page in SauceDemo.
 */
export class CartPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // --- Locators ---
  cartList(): Locator {
    return this.page.locator('[data-test="cart-list"]');
  }

  checkoutButton(): Locator {
    return this.page.locator('[data-test="checkout"]');
  }

  productByName(name: string): Locator {
    return this.page.locator('.cart_item').filter({ hasText: name });
  }

  // --- Actions ---
  async proceedToCheckout() {
    await this.checkoutButton().click();
  }

  async verifyProductInCart(name: string, price?: string) {
    const item = this.productByName(name);
    await item.waitFor();
    if (price) {
      await this.page.expect(item).toContainText(price);
    }
  }
}
