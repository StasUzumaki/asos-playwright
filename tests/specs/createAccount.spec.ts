import test, { expect } from "../../fixtures/basePages";

test.describe("Create ASOS account", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://www.asos.com/");
    });
    test("should create account", async ({ page, mainPage, helper }) => {
        await mainPage.clickAccountDropDownBtn();
        await mainPage.clickJoinLink();
        expect(page.url()).toContain("https://my.asos.com/identity/register");
        await helper.createAccount();
    });
});
