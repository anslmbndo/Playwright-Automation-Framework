import { Page, Locator } from '@playwright/test';

/**
 * Represents the inventory (product list) page of SauceDemo.
 */
export class InventoryPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // --- Locators ---
  productCardByName(name: string): Locator {
    return this.page.locator('.inventory_item').filter({ hasText: name });
  }

  addToCartButton(name: string): Locator {
    return this.productCardByName(name).locator('button:has-text("Add to cart")');
  }

  productPrice(name: string): Locator {
    return this.productCardByName(name).locator('.inventory_item_price');
  }

  cartLink(): Locator {
    return this.page.locator('[data-test="shopping-cart-link"]');
  }

  // --- Actions ---
  async addToCart(name: string) {
    await this.addToCartButton(name).click();
  }

  async goToCart() {
    await this.cartLink().click();
  }

  async getPriceOf(name: string): Promise<string> {
    const priceText = await this.productPrice(name).textContent();
    return priceText ? priceText.trim() : '';
  }
}
