import { test as baseTest } from "@playwright/test";
import { MainPage } from "../tests/pageobjects/main.page";
import { LoginPage } from "../tests/pageobjects/login.page";
import { Helper } from "../helper/helper";
import { BagPage } from "../tests/pageobjects/bag.page";
import { SignUpPage } from "../tests/pageobjects/signUp.page";

const test = baseTest.extend<{
    mainPage: MainPage;
    loginPage: LoginPage;
    helper: Helper;
    bagPage: BagPage;
    signUp: SignUpPage;
}>({
    mainPage: async ({ page }, use) => {
        await use(new MainPage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    bagPage: async ({ page }, use) => {
        await use(new BagPage(page));
    },
    signUp: async ({ page }, use) => {
        await use(new SignUpPage(page));
    },
    helper: async ({ signUp }, use) => {
        await use(new Helper(signUp));
    }, 
});

export default test;
export const expect = test.expect;