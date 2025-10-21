import { Actor } from '../../../core/actor/Actor';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { BaseTask } from '../../../core/actor/BaseTask';
import { customerInfo } from '../data/usersAndCustInfo';

export class Checkout {
  static proceed() {
    return BaseTask.define('Checkout.proceed', async (actor: Actor) => {
      const cartPage = new CartPage(actor.page);
      await cartPage.proceedToCheckout();
    });
  }

  static fillCustomerInfo(firstName?: string, lastName?: string, postalCode?: string) {
    const info =
      firstName && lastName && postalCode
        ? { firstName, lastName, postalCode }
        : customerInfo.default;

    return BaseTask.define(
      `Checkout.fillCustomerInfo(${info.firstName} ${info.lastName})`,
      async (actor: Actor) => {
        const checkoutPage = new CheckoutPage(actor.page);
        await checkoutPage.fillCustomerInfo(
          info.firstName,
          info.lastName,
          info.postalCode
        );
      }
    );
  }

  static verifyPaymentAndShipping() {
    return BaseTask.define('Checkout.verifyPaymentAndShipping', async (actor: Actor) => {
      const checkoutPage = new CheckoutPage(actor.page);
      await checkoutPage.verifyPaymentAndShippingInfoVisible();
    });
  }
}
