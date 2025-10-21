import { Actor } from "../../../core/actor/Actor";
import { expect } from "@playwright/test";
import { Product } from "../models/Product";

export class ValidateCart {
  static total = () => new ValidateCart();

  async performAs(actor: Actor) {
    const page = actor.page;
    const cartItems: Product[] = actor.recalls("cartItems") || [];

    await page.goto("https://www.saucedemo.com/cart.html");

    // Extract total from UI
    const uiPrices = await page.locator(".inventory_item_price").allTextContents();
    const uiTotal = uiPrices.map(p => parseFloat(p.replace("$", ""))).reduce((a, b) => a + b, 0);

    // Compare with stored total
    const storedTotal = cartItems.reduce((a, b) => a + b.price, 0);

    console.log(`UI Total: $${uiTotal} | Stored Total: $${storedTotal}`);
    expect(uiTotal).toBeCloseTo(storedTotal, 2);
  }
}
