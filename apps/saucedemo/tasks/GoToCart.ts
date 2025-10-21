import { BaseTask } from "../../../core/actor/BaseTask";
import { InventoryPage } from "../pages/InventoryPage";
import { Actor } from "../../../core/actor/Actor";

export class GoToCart {
  static now() {
    return BaseTask.define("GoToCart.now", async (actor: Actor) => {
      const inventoryPage = new InventoryPage(actor.page);
      await inventoryPage.goToCart();
    });
  }
}
