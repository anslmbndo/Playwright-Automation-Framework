import { Actor } from "../../../core/actor/Actor";
import { expect } from "@playwright/test";
import { Product } from "../models/Product";

export class AddToCart {
  static item = (productName: string) => new AddToCart(productName);
  static items = (productNames: string[]) => new AddToCartMultiple(productNames);

  constructor(private productName: string) {}

  async performAs(actor: Actor) {
    const page = actor.page;

    // Find product container by name
    const productContainer = page.locator(`.inventory_item:has-text("${this.productName}")`);
    const priceText = await productContainer.locator(".inventory_item_price").textContent();
    const price = parseFloat(priceText?.replace("$", "") || "0");

    // Click Add to Cart
    await productContainer.locator("button:has-text('Add to cart')").click();

    // Save to actor’s memory
    let cartItems: Product[] = actor.recalls("cartItems") || [];
    cartItems.push({ name: this.productName, price });
    actor.remembers("cartItems", cartItems);

    console.log(`Added ${this.productName} ($${price}) to cart`);
  }
}

// Handle multiple items
class AddToCartMultiple {
  constructor(private productNames: string[]) {}

  async performAs(actor: Actor) {
    for (const name of this.productNames) {
      await new AddToCart(name).performAs(actor);
    }
  }
}
