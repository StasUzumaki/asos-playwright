import { uniqueNamesGenerator, Config, adjectives, colors, animals, countries, languages, names, starWars } from "unique-names-generator";
import { BagPage } from "../tests/pageobjects/bag.page";
import { SignUpPage } from "../tests/pageobjects/signUp.page";

const randomNumber = Math.floor(Math.random() * 1000);
const mainEmail = 'stastestasos';
const tempGoogleMail = mainEmail + "+" + randomNumber + "@gmail.com";

export class Helper {
    signUp: SignUpPage;
    constructor(signUp: SignUpPage) {
        this.signUp = signUp;
    }

    async randomName() {
        const randomName = uniqueNamesGenerator({
            dictionaries: [adjectives, animals, colors, countries, languages, names, starWars],
            length: 1,
        });
        return randomName;
    }

    async createAccount() {
        const name = await this.randomName();
        const password = name + randomNumber;
        await this.signUp.fillEmailField(tempGoogleMail);
        await this.signUp.fillFirstName(name);
        await this.signUp.fillLastName(name);
        await this.signUp.fillPasswordValue(password);
    }
}
