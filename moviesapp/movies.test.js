const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

let driver;

beforeAll(async () => {
  driver = new Builder().forBrowser(Browser.CHROME).build();
});

afterAll(async () => {
  await driver.quit();
});

test("", async () => {
   
    await driver.get("");
  
    await driver.findElement(By.id('APjFqb')).sendKeys("automation", Key.RETURN);
  
   
  });