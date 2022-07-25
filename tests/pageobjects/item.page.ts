import { expect, Page } from "@playwright/test";

export class ItemPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get sizeSelect() {
        return this.page.locator('[data-id="sizeSelect"]');
    }
    get addToBagBtn() {
        return this.page.locator("#product-add-button");
    }
    get showMoreBtn() {
        return this.page.locator('[class="show-more"]');
    }

    async selectSizeValue() {
        await this.sizeSelect?.selectOption({ label: "EU 38" });
    }
    async clickAddToBagBtn() {
        return this.addToBagBtn.click();
    }
    async clickShowMoreBtn() {
        await this.showMoreBtn.click();
    }
}
