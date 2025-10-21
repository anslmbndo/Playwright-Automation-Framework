import { Page } from '@playwright/test';

export class ButtonsPage {
  constructor(private page: Page) {}

  doubleClickBtn = () => this.page.locator('#doubleClickBtn');
  rightClickBtn = () => this.page.locator('#rightClickBtn');
  message = () => this.page.locator('#doubleClickMessage, #rightClickMessage');
}
