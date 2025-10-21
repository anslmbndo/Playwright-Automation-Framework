import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('SauceDemo full flow - login, add to cart, checkout', async ({ page }) => {
  // Create page objects
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // 1️Go to login page and log in
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // 2️Add products to cart
  await inventoryPage.addToCart('Sauce Labs Backpack');
  await inventoryPage.addToCart('Sauce Labs Bike Light');

  // 3️Go to cart and verify items
  await inventoryPage.goToCart();
  await expect(cartPage.productByName('Sauce Labs Backpack')).toBeVisible();
  await expect(cartPage.cartList()).toContainText('$29.99');
  await expect(cartPage.productByName('Sauce Labs Bike Light')).toBeVisible();

  // 4️Proceed to checkout
  await cartPage.proceedToCheckout();

  // 5️Fill checkout info and verify payment section
  await checkoutPage.fillCustomerInfo('Playwright', 'Tester', '0000');
  await checkoutPage.verifyPaymentAndShippingInfoVisible();
});
