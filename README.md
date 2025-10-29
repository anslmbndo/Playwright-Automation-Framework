##Playwright Automation Framework
This project is a **modular, reusable Playwright test automation framework** built using the **Screenplay Pattern**.  
It is designed for scalability, readability, and maintainability — ideal for real-world web app testing.
# features

- JDK version: 21.0.8  
- Appium version: 3.0.1  
- Node.js version: v22.17.0  
- Connected Android device or emulator  
- ADB version:  
  - Android Debug Bridge version 1.0.41  
  - Version 36.0.0-13206524  

## Running Appium Server

Before running tests, start the Appium server with the following command:

```bash
appium -p 4723 -a 127.0.0.1 --base-path /wd/hub
