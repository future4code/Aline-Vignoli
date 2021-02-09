import { PerformAttackResult, performAttackDI } from "../src/performAttack";
import { Character } from "../src/validateCharacter";

describe("Testing performAttack", () => {

    test("Should perform attack", () => {
        expect.assertions(4);

        const validatorMockTrue = jest.fn (()=> {
            return true;
        });

        const attacker: Character = {
            name: "Attacker",
            life: 1500,
            strength: 500,
            defense: 100
        };

        const defender: Character = {
            name: "Defender",
            life: 1500,
            strength: 500,
            defense: 300
        };

        const output: PerformAttackResult = performAttackDI(
            attacker, 
            defender, 
            validatorMockTrue
        );

        expect(output.defender.life).toBe(1300);
        expect(validatorMockTrue).toHaveBeenCalled();
        expect(validatorMockTrue).toHaveBeenCalledTimes(2);
        expect(validatorMockTrue).toHaveReturnedTimes(2);
    });

    test("Should return 'Invalid Character' error", () => {
        expect.assertions(4);

        const validatorMockFalse = jest.fn (()=> {
            return false;
        });

        const attacker: Character = {
            name: "",
            life: 1500,
            strength: 500,
            defense: 100
        };

        const defender: Character = {
            name: "Defender",
            life: 1500,
            strength: 500,
            defense: 300
        };

        try {
            performAttackDI(
                attacker,
                defender,
                validatorMockFalse
            );
        } catch (error) {
            expect(error.message).toEqual("Invalid Character");
            expect(validatorMockFalse).toHaveBeenCalled();
            expect(validatorMockFalse).toHaveBeenCalledTimes(2);
            expect(validatorMockFalse).toHaveReturnedTimes(2);
        };
    });

    test("Should not affect defender's life", () => {
        expect.assertions(4);
        
        const validatorMockTrue = jest.fn (()=> {
            return true;
        });

        const attacker: Character = {
            name: "Attacker",
            life: 1500,
            strength: 500,
            defense: 100
        };

        const defender: Character = {
            name: "Defender",
            life: 1500,
            strength: 500,
            defense: 500
        };

        const output: PerformAttackResult = performAttackDI(
            attacker, 
            defender, 
            validatorMockTrue
        );

        expect(output.defender.life).toBe(1500);
        expect(validatorMockTrue).toHaveBeenCalled();
        expect(validatorMockTrue).toHaveBeenCalledTimes(2);
        expect(validatorMockTrue).toHaveReturnedTimes(2);
    });
});