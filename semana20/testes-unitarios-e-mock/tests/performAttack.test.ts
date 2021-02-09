import { PerformAttackResult, performAttackDI } from "../src/performAttack";
import { Character } from "../src/validateCharacter";

describe("Testing performAttack", () => {

    const validatorMockFalse = jest.fn (()=> {
        return false;
    });

    test("Should return 'true' if defender's life after the attack is 1300", () => {
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

    test("Should return false", () => {
        
    });
});