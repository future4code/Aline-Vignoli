import { recoverCharacters } from "../src/recoverCharacters";
import { Character } from "../src/validateCharacter";

describe("Testing recoverCharacters", () => {
    test("Should receive at least 2 characters", () => {
        expect.assertions(1);

        const validatorMockTrue = jest.fn (()=> {
            return true;
        });

        const attacker: Character = {
            name: "Attacker",
            life: 100,
            strength: 300,
            defense: 100
        };

        try {
            recoverCharacters([attacker], validatorMockTrue);
        } catch (error) {
            expect(error.message).toEqual("Array must contain at least 2 characters");
        };
    });
});