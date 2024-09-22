import { test, expect, BrowserContext, Page} from '@playwright/test';
import { HomePage } from '../pageObjects/homePage';
test.describe('Playwright Tests', () => {
  let context: BrowserContext;
  let page: Page;
  let homePage: HomePage;

  test.beforeEach(async ({browser}) => {
    context = await browser.newContext();
    page = await context.newPage();
    homePage = new HomePage(page);
  });

  test('BStackDemo test checkout flow', async () => {
    await homePage.navigateTo();
    await page.waitForTimeout(1000);
    await page.click('#signin', { delay: 100 });
    await page.fill('#react-select-2-input', 'fav_user');
    await page.press('#react-select-2-input', 'Enter');
    await page.fill('#react-select-3-input', 'testingisfun99');
    await page.press('#react-select-3-input', 'Enter');
    await page.click('#login-btn');
    await page.waitForTimeout(2000);
    await page.click('#\\31 > .shelf-item__buy-btn');
    await page.click('div.float-cart__close-btn');
    await page.click('#\\32 > .shelf-item__buy-btn');
    await page.click('.buy-btn');
    await page.waitForTimeout(1000);
    await page.fill('#firstNameInput', 'first');
    await page.fill('#lastNameInput', 'last');
    await page.fill('#addressLine1Input', 'address');
    await page.fill('#provinceInput', 'province');
    await page.fill('#postCodeInput', 'pincode');
    await page.waitForTimeout(1000);
    await page.click('#checkout-shipping-continue');
    await page.waitForTimeout(1000);
    await page.click('text=Continue');
    await page.waitForTimeout(1000);
    await page.click('text=Orders');
    await page.waitForTimeout(1000);
    const list = page.locator('.a-fixed-left-grid-inner');
    await expect(list).toHaveCount(2);
    await page.waitForTimeout(1000);
    await page.close();
  });
  
  test.afterEach(async () => {
    await context.close();
  });

});