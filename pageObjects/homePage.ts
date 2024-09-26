import { Page, expect} from '@playwright/test';

export class HomePage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async navigateTo() {
        await this.page.goto('https://bstackdemo.com/');
    }
    async signIn(username: string, password: string) {
        await this.page.click('#signin', { delay: 100 });
        await this.page.fill('#react-select-2-input', username);
        await this.page.press('#react-select-2-input', 'Enter');
        await this.page.fill('#react-select-3-input', password);
        await this.page.press('#react-select-3-input', 'Enter');
        await this.page.waitForTimeout(1000);
        await this.page.click('#login-btn');
        await this.page.waitForTimeout(2000);
    }

    async addItemToCart(itemId: string) {
        await this.page.click(`#\\${itemId} > .shelf-item__buy-btn`);
    }

    async closeCart() {
        await this.page.click('div.float-cart__close-btn');
    }

    async proceedToCheckout() {
        await this.page.click('.buy-btn');
        await this.page.waitForTimeout(1000);
    }

    async fillShippingDetails(firstName: string, lastName: string, address: string, province: string, postCode: string) {
        await this.page.fill('#firstNameInput', firstName);
        await this.page.fill('#lastNameInput', lastName);
        await this.page.fill('#addressLine1Input', address);
        await this.page.fill('#provinceInput', province);
        await this.page.fill('#postCodeInput', postCode);
        await this.page.waitForTimeout(1000);
    }

    async continueShipping() {
        await this.page.click('#checkout-shipping-continue');
        await this.page.waitForTimeout(2000);
    }

    async continuePayment() {
        await this.page.click('text=Continue');
        await this.page.click('text=Orders');
        await this.page.waitForTimeout(2000);
    }

    async verifyOrderCount(expectedCount: number) {
        const list = this.page.locator('.a-fixed-left-grid-inner');
        await expect(list).toHaveCount(expectedCount);
    }
}

export default HomePage