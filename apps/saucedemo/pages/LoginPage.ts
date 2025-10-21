import { Page } from '@playwright/test';
import { urls } from '../config/urls';
/**
 * The LoginPage class represents the login screen of SauceDemo.
 * It stores locators and provides methods that describe user actions on this page.
 */
export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // --- Locators ---
  usernameInput = () => this.page.locator('[data-test="username"]');
  passwordInput = () => this.page.locator('[data-test="password"]');
  loginButton   = () => this.page.locator('[data-test="login-button"]');

  // --- Actions ---
  async goto() {
	console.log('Navigating to:', urls.base);
    await this.page.goto(urls.base);
  }

  async login(username: string, password: string) {
    await this.usernameInput().fill(username);
    await this.passwordInput().fill(password);
    await this.loginButton().click();
  }
}
