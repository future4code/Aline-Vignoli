import { Character, validateCharacter } from "./validateCharacter";

export const increaseCharactersStrength = (
    character: Character,
    newStrength: number
): Character => {
    if (!validateCharacter(character)) {
        throw new Error("Invalid Character");
    };

    if (newStrength <= character.strength) {
        throw new Error("New Strength must be greater than current strength");
    };

    return { ...character, strength: newStrength };
};