import "dotenv/config";
import { test, expect, Page, BrowserContext } from "@playwright/test";
import { MainPage } from "../pageobjects/main.page";
import { SearchPage } from "../pageobjects/search.page";
import { ItemPage } from "../pageobjects/item.page";
import { BagPage } from "../pageobjects/bag.page";

test.describe.serial("Add item to shopping cart", () => {
    let context: BrowserContext;
    let page: Page;
    let mainPage: MainPage;
    let searchPage: SearchPage;
    let itemPage: ItemPage;
    let bagPage: BagPage;
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://www.asos.com/");
        mainPage = new MainPage(page);
        searchPage = new SearchPage(page);
        itemPage = new ItemPage(page);
        bagPage = new BagPage(page);
    });
    test("should search adidas model and add it to shopping cart", async ({}) => {
        await mainPage.clickSearchField();
        await mainPage.fillSearchField("Adidas Ozweego");
        await expect(page.url()).toContain("https://www.asos.com/search/?q=adidas+ozweego");
        await expect(searchPage.searchTextResult).toHaveText('"adidas ozweego"');
        await searchPage.clickOzweegoCeloxTrainersLink();
        await itemPage.selectSizeValue();
        await itemPage.clickShowMoreBtn();
        await itemPage.clickAddToBagBtn();
        await expect(itemPage.addToBagBtn).toHaveText("Added");
    });
    test("should remove all items from bag", async ({}) => {
        await mainPage.clickBagDropDownBtn();
        await mainPage.clickViewBagBtn();
        await expect(page.url()).toContain("https://www.asos.com/bag?ctaref=mini+bag");
        await bagPage.clickRemoveItemBagBtn();
        await expect(bagPage.emptyBagTitle).toHaveText("Your bag is empty");
        await expect(bagPage.signInBtn).toBeVisible();
    });
});
