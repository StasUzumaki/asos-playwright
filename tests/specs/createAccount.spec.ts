import { test, expect, Page, BrowserContext } from "@playwright/test";
import { MainPage } from "../pageobjects/main.page";
import { LoginPage } from "../pageobjects/login.page";
import { Helper } from "../../helper/helper";
import { SignUpPage } from "../pageobjects/signUp.page";

test.describe("Create ASOS account", () => {
    let context: BrowserContext;
    let page: Page;
    let mainPage: MainPage;
    let loginPage: LoginPage;
    let helper: Helper;
    let signUp: SignUpPage;
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://www.asos.com/");
        mainPage = new MainPage(page);
        loginPage = new LoginPage(page);
        signUp = new SignUpPage(page);
        helper = new Helper();
    });
    test("should create account", async ({}) => {
        const email = await helper.randomName();
        await mainPage.clickAccountDropDownBtn();
        await mainPage.clickJoinLink();
        expect(page.url()).toContain("https://my.asos.com/identity/register");
        await helper.createAccount(email);
    });
});
