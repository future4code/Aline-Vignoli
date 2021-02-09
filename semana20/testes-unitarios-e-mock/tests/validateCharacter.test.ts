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
});