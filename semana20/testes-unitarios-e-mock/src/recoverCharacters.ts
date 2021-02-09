import { Character, validateCharacter } from "./validateCharacter";

export const recoverCharacters = (
    characters: Character[]
): Character[] => {
    if (characters.length < 2) {
        throw new Error("Array must contain at least 2 characters");
    };

    let recoveredCharacters: Character[] = [];
    for (let character of characters) {
        if (validateCharacter(character)) {
            const recoveredCharacter = {
                ...character,
                life: 1500
            };

            recoveredCharacters.push(recoveredCharacter);
        } else {
            throw new Error("Invalid Character");
        };
    };

    return recoveredCharacters;    
};