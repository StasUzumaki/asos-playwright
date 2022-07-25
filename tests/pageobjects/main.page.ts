import { expect, Page } from "@playwright/test";

export class MainPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get accountDropDownBtn() {
        return this.page.locator("#myAccountDropdown");
    }
    get signInLink() {
        return this.page.locator('[data-testid="signin-link"]');
    }
    get accountFilledBtn() {
        return this.page.locator('[type="accountFilled"]');
    }
    get bagDropDownBtn() {
        return this.page.locator('[data-testid="miniBagIcon"]');
    }
    get viewBagBtn() {
        return this.page.locator('[data-test-id="bag-link"]');
    }
    get searchField() {
        return this.page.locator("#chrome-search");
    }

    async clickViewBagBtn() {
        await this.viewBagBtn.click();
    }

    async clickBagDropDownBtn() {
        await this.bagDropDownBtn.click();
    }

    async clickAccountDropDownBtn() {
        await this.accountDropDownBtn.click();
    }

    async clickSignInLink() {
        await this.signInLink.click();
    }

    async clickSearchField() {
        await this.searchField.click();
    }

    async fillSearchField(text: string) {
        await this.searchField.fill(text);
        await this.searchField.press("Enter");
    }
}
