export class Actor {
  constructor(public name: string, public page: Page) {}

  private memory: Record<string, any> = {};

  remembers(key: string, value: any) {
    this.memory[key] = value;
  }

  recalls<T = any>(key: string): T | undefined {
    return this.memory[key];
  }

  async attemptsTo(...tasks: any[]) {
    for (const task of tasks) {
      const taskName = task.name || task.constructor.name || "Unnamed Task";
      console.log(`${this.name} is performing: ${taskName}`);

      if (typeof task === "function") {
        // old BaseTask-style
        await task(this);
      } else if (typeof task.performAs === "function") {
        // new class-style
        await task.performAs(this);
      } else {
        throw new Error(`Invalid task: ${taskName}. Must be a function or have performAs().`);
      }
    }
  }
}
