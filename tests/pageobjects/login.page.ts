import { expect, Page } from "@playwright/test";
import "dotenv/config";

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get emailInput() {
        return this.page.locator("#EmailAddress");
    }
    get passwordInput() {
        return this.page.locator("#Password");
    }
    get signInBtn(){
        return this.page.locator('#signin')
    }
    get loginErrorMessage(){
        return this.page.locator('#loginErrorMessage')
    }

    async loginToAcc(email: string, password: string){
        await this.emailInput.fill(email)
        await this.passwordInput.fill(password)
    }
    async clickSignInBtn(){
        await this.signInBtn.click()
    }


}