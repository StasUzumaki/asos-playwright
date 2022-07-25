import { expect, Page } from "@playwright/test";

export class SearchPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get searchTextResult() {
        return this.page.locator(`//*[@id="search-term-banner"]/p[2]`);
    }
    get ozweegoCeloxTrainers() {
        return this.page.locator("#product-202152758");
    }

    async clickOzweegoCeloxTrainersLink() {
        await this.ozweegoCeloxTrainers.click();
    }
}
