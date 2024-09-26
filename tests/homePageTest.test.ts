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

    await homePage.signIn('fav_user', 'testingisfun99');

    await homePage.addItemToCart('31');
    await homePage.closeCart();
    await homePage.addItemToCart('32');

    await homePage.proceedToCheckout();

    await homePage.fillShippingDetails('first', 'last', 'address', 'province', 'pincode');

    await homePage.continueShipping();

    await homePage.continuePayment();

    await homePage.verifyOrderCount(2);
  });
  
  test.afterEach(async () => {
    await context.close();
    await page.close();
  });

});