import { uniqueNamesGenerator, Config, adjectives, colors, animals, countries, languages, names, starWars } from "unique-names-generator";
import { BagPage } from "../tests/pageobjects/bag.page";
import { SignUpPage } from "../tests/pageobjects/signUp.page";

let signUp: SignUpPage;

export class Helper {
    async randomName() {
        const randomName = uniqueNamesGenerator({
            dictionaries: [adjectives, animals, colors, countries, languages, names, starWars],
            length: 1,
        });
        return randomName;
    }

    async createAccount(firstName: string) {
        await signUp.fillEmailField(firstName);
        // await signUp.fillFirstName(await this.randomName());
        // await signUp.fillLastName(await this.randomName());
        // await signUp.fillPasswordValue(await this.randomName());
    }
}
