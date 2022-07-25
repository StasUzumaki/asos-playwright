import { expect, Page } from "@playwright/test";

export class SignUpPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get emailField() {
        return this.page.locator("#Email");
    }
    get firstNameField() {
        return this.page.locator("#FirstName");
    }
    get lastNameField() {
        return this.page.locator("#LastName");
    }
    get passwordField() {
        return this.page.locator("#Password");
    }
    get dateOfBirthDaySelect() {
        return this.page.locator("#BirthDay");
    }
    get dateOfBirthMonthSelect() {
        return this.page.locator("#BirthMonth");
    }
    get dateOfBirthYearSelect() {
        return this.page.locator("#BirthYear");
    }
    get menswearRadioBtn() {
        return this.page.locator("#male");
    }

    async fillEmailField(email: string) {
        await this.emailField.fill(email);
    }
    async fillFirstName(firstName: string) {
        await this.firstNameField.fill(firstName);
    }
    async fillLastName(lastName: string) {
        await this.lastNameField.fill(lastName);
    }
    async fillPasswordValue(passwordField: string) {
        await this.passwordField.fill(passwordField);
    }

    // async createAccount(email: string,  firstName: string, lastName: string, pass: string,){
    //     firstName = await helper.randomName();
    //     lastName = await helper.randomName();
    //     await this.emailField.fill(email)
    //     await this.firstNameField.fill(firstName)
    //     await this.lastNameField.fill(lastName)
    //     await this.passwordField.fill(pass)
    //     await this.dateOfBirthDaySelect?.selectOption("2");
    //     await this.dateOfBirthMonthSelect?.selectOption("2");
    // }
}
