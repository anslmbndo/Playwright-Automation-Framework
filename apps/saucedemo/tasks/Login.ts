import { Actor } from '../../../core/actor/Actor';
import { LoginPage } from '../pages/LoginPage';
import { BaseTask } from '../../../core/actor/BaseTask';
import { users } from '../data/usersAndCustInfo';

export class Login {
  static withCredentials(username?: string, password?: string) {
    const user = username && password ? { username, password } : users.standard;

    return BaseTask.define(`Login.withCredentials(${user.username})`, async (actor: Actor) => {
      const loginPage = new LoginPage(actor.page);
      await loginPage.goto();
      await loginPage.login(user.username, user.password);
    });
  }
}
