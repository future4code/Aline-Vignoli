import { Character, validateCharacter } from "./validateCharacter";

export const decreaseCharacterDefense = (
    character: Character,
    newDefense: number
): Character => {
    if (!validateCharacter(character)) {
        throw new Error("Invalid Character");
    };

    if (newDefense >= character.defense) {
        throw new Error("New Defense must be less than current defense");
    };

    return { ...character, defense: newDefense };
};