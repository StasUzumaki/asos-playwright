import "dotenv/config";
import { test, expect, Page, BrowserContext } from "@playwright/test";
import { MainPage } from "../pageobjects/main.page";
import { LoginPage } from "../pageobjects/login.page";

test.describe("Login to ASOS account", () => {
    let context: BrowserContext;
    let page: Page;
    let mainPage: MainPage;
    let loginPage: LoginPage;
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://www.asos.com/");
        mainPage = new MainPage(page);
        loginPage = new LoginPage(page);
    });
    test("should login to account", async ({}) => {
        await mainPage.clickAccountDropDownBtn();
        await mainPage.clickSignInLink();
        expect(page.url()).toContain("https://my.asos.com/identity/login");
        await loginPage.loginToAcc("mowej99652@5k2u.com", "salampopolam123");
        await loginPage.clickSignInBtn();
        await expect(mainPage.accountFilledBtn).toBeVisible();
    });
});
