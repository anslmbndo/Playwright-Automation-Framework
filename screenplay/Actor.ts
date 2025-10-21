import { Page } from '@playwright/test';

export class Actor {
  constructor(public name: string, public page: Page) {}

  async attemptsTo(...tasks: Array<{ performAs(actor: Actor): Promise<void> }>) {
    for (const task of tasks) await task.performAs(this);
  }
}