import { Actor } from './Actor';

/**
 * BaseTask provides a helper to wrap async tasks with readable names for logging.
 */
export class BaseTask {
  static define(name: string, action: (actor: Actor) => Promise<void>) {
    const task = async (actor: Actor) => {
      await action(actor);
    };
    // Attach name metadata
    Object.defineProperty(task, 'name', { value: name });
    return task;
  }
}
