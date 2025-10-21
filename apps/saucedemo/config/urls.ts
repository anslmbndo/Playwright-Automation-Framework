import { environments } from '../../../core/config/environments';

const env = process.env.ENV || 'production';

export const urls = {
  base: environments[env].sauceDemoBaseUrl,
  login: environments[env].sauceDemoBaseUrl,
  inventory: `${environments[env].sauceDemoBaseUrl}inventory.html`,
  cart: `${environments[env].sauceDemoBaseUrl}cart.html`,
  checkout: `${environments[env].sauceDemoBaseUrl}checkout-step-one.html`,
};
