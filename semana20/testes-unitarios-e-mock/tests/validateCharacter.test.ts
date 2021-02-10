import { Character, validateCharacter } from "../src/validateCharacter";

describe("Testing validateCharacter", () => {
    test("Should return 'false' for empty 'name'", () => {
        expect.assertions(1);

        const input: Character = {
            name: "",
            life: 1500,
            strength: 100,
            defense: 50
        };
        
        const output: boolean = validateCharacter(input);

        expect(output).toBe(false);
    });

    test("Should return 'false' for life equal to 0", () => {
        expect.assertions(1);

        const input: Character = {
            name: "My Character",
            life: 0,
            strength: 100,
            defense: 50
        };

        const output: boolean = validateCharacter(input);

        expect(output).toBe(false);
    });

    test("Should return 'false' for defense equal to 0", () => {
        expect.assertions(1);

        const input: Character = {
            name: "My Character",
            life: 1500,
            strength: 100,
            defense: 0
        };

        const output: boolean = validateCharacter(input);

        expect(output).toBe(false);
    });

    test("Should return 'false' for life, strength or defense with a negative number", () => {
        expect.assertions(3);

        const inputNegativeLife: Character = {
            name: "My Character",
            life: -1500,
            strength: 100,
            defense: 50
        };

        const inputNegativeStrength: Character = {
            name: "My Character",
            life: 1500,
            strength: -100,
            defense: 50
        };

        const inputNegativeDefense: Character = {
            name: "My Character",
            life: 1500,
            strength: 100,
            defense: -50
        };

        const outputNegativeLife: boolean = validateCharacter(inputNegativeLife);
        const outputNegativeStrength: boolean = validateCharacter(inputNegativeStrength);
        const outputNegativeDefense: boolean = validateCharacter(inputNegativeDefense);

        expect(outputNegativeLife).toBe(false);
        expect(outputNegativeStrength).toBe(false);
        expect(outputNegativeDefense).toBe(false);
    });

    test("Should return 'true' for valid input", () => {
        expect.assertions(1);

        const input: Character = {
            name: "My Character",
            life: 1500,
            strength: 200,
            defense: 50
        };

        const output: boolean = validateCharacter(input);

        expect(output).toBe(true);
    });
});