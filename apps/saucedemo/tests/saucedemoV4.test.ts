import { test, expect } from '@playwright/test';
import { Actor } from '../../../core/actor/Actor';
import { Login } from '../tasks/Login';
import { AddToCart } from '../tasks/AddToCart';
import { Checkout } from '../tasks/Checkout';
import { CartPage } from '../pages/CartPage'; // for quick verification
import { ValidateCart } from "../tasks/ValidateCart";
import { GoToCart } from '../tasks/GoToCart';
import { users } from "../data/usersAndCustInfo";  // ✅ added back

// --- Test 1: Full Purchase Flow ---
test('SauceDemo - complete purchase flow (Screenplay style)', async ({ page }) => {
  const anselm = new Actor('Anselm', page);

  await anselm.attemptsTo(
    Login.withCredentials(),
    AddToCart.item('Sauce Labs Backpack'),
    AddToCart.item('Sauce Labs Bike Light'),
    GoToCart.now(),
    Checkout.proceed(),
    Checkout.fillCustomerInfo(),
    Checkout.verifyPaymentAndShipping()
  );

  const cartPage = new CartPage(page);
  await expect(cartPage.cartList()).toBeVisible();
});

// --- Test 2: Dynamic Cart Validation ---
test("SauceDemo - dynamic add-to-cart and total validation", async ({ page }) => {
  const actor = new Actor("Anselm's cart", page);
  const products = ["Sauce Labs Backpack", "Sauce Labs Bolt T-Shirt", "Sauce Labs Onesie"];

  await actor.attemptsTo(
    Login.withCredentials(),
    AddToCart.items(products),
    ValidateCart.total()
  );
});
