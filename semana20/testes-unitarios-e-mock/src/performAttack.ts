import { Character, validateCharacter } from "./validateCharacter";

export const performAttack = (
    attacker: Character,
    defender: Character
): PerformAttackResult => {
    const validAttacker = validateCharacter(attacker);
    const validDefender = validateCharacter(defender);

    if (!validAttacker || !validDefender) {
        throw new Error("Invalid Character");
    };

    let updatedDefender: Character = defender;
    const finalAttackValue: number = attacker.strength - defender.defense;
    if (defender.defense <= attacker.strength) {
        updatedDefender = {
            ...defender,
            life: defender.life - finalAttackValue
        };
    };

    const result: PerformAttackResult = {
        attacker,
        defender: updatedDefender
    };

    return result;
};

interface PerformAttackResult {
    attacker: Character,
    defender: Character
};