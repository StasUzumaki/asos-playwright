import { expect, Page } from "@playwright/test";

export class BagPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get removeItemBagBtn() {
        return this.page.locator('[class="bag-item-remove"]');
    }
    get emptyBagTitle(){
        return this.page.locator('[class="empty-bag-title"]')
    }
    get signInBtn(){
        return this.page.locator('[class="main-button"]')
    }

    async clickRemoveItemBagBtn() {
        await this.removeItemBagBtn.click();
    }
}
