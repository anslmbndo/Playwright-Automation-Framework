#Playwright Automation Framework

This project is a **modular, reusable Playwright test automation framework** built using the **Screenplay Pattern**.  
It is designed for scalability, readability, and maintainability — ideal for real-world web app testing.

# features

- Built with [Playwright](https://playwright.dev)
- Implements the **Screenplay Pattern** (Actors, Tasks, Questions, and Models)
- Actor memory — share data dynamically across tasks
- Data-driven test design (JSON-based test data)  
- Modular architecture for multi-app support (e.g. SauceDemo, DemoQA)
- Logging and descriptive test output
- Scalable for both frontend and backend test automation
- Supports multiple environments (e.g. dev, staging, prod) via configurable environment settings

# Structure
```bash
playwright-demo/
├── core/
│ ├── actor/
│ │ ├── Actor.ts
│ │ └── BaseTask.ts
│ ├── config/
│ │ ├── Environment.ts
│
├── apps/
│ ├── saucedemo/
│ │ ├── data/
│ │ │ └── usersAndCustInfo.ts
│ │ ├── models/
│ │ │ └── Product.ts
│ │ ├── pages/
│ │ │ ├── InventoryPage.ts
│ │ │ ├── CartPage.ts
│ │ │ └── CheckoutPage.ts
│ │ ├── tasks/
│ │ │ ├── Login.ts
│ │ │ ├── AddToCart.ts
│ │ │ ├── GoToCart.ts
│ │ │ ├── Checkout.ts
│ │ │ └── ValidateCart.ts
│ │ └── tests/
│ │ ├── saucedemoV3.test.ts
│ │ └── saucedemoV4.test.ts
│ │
│ └── demoqa/ ← upcoming app integration
│ └── ...
│
├── playwright.config.ts
└── package.json
```
## Lets get started!

Before running tests, start the Appium server with the following command:

```bash
git clone https://github.com/anslmbndo/Playwright-Automation-Framework.git
cd Playwright-Automation-Framework
```


# 1. Install dependencies
```bash
npm install
npm install -D @playwright/test
npx playwright install
```
# 2. Set up the environment then.....RUN!
```bash
set ENV=production
npx playwright test saucedemoV4.test.ts
```

# Author
```markdown
**Anselm Abundo**  
*Quality Assurance Engineer | Automation & Performance Tester*  

📧 [anselm.abundo@gmail.com](mailto:anselm.abundo@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/anslmabundo/)
```
