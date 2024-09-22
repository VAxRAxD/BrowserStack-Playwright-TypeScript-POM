import { Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async navigateTo() {
        await this.page.goto('https://bstackdemo.com/');
    }
}

export default HomePage