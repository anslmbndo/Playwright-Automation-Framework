import { test, expect } from '@playwright/test';
import { Actor } from '../../../core/actor/Actor';
import { Login } from '../tasks/Login';
import { AddToCart } from '../tasks/AddToCart';
import { Checkout } from '../tasks/Checkout';
import { CartPage } from '../pages/CartPage'; // for quick verification

test('SauceDemo - complete purchase flow (Screenplay style)', async ({ page }) => {
  // Create an actor
  const anselm = new Actor('Anselm', page);

  // The story:
  await anselm.attemptsTo(
    Login.withCredentials(),
    AddToCart.item('Sauce Labs Backpack'),
    AddToCart.item('Sauce Labs Bike Light'),
    AddToCart.goToCart(),
    Checkout.proceed(),
    Checkout.fillCustomerInfo(),
    Checkout.verifyPaymentAndShipping()
  );

  // Optional extra assertion
  const cartPage = new CartPage(page);
  await expect(cartPage.cartList()).toBeVisible();
});
