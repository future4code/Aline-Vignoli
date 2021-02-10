import { Character } from "./validateCharacter";

export const recoverCharacters = (
    characters: Character[],
    validator: (input:any) => boolean
): Character[] => {
    if (characters.length < 2) {
        throw new Error("Array must contain at least 2 characters");
    };

    let recoveredCharacters: Character[] = [];
    for (let character of characters) {
        if (validator(character)) {
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