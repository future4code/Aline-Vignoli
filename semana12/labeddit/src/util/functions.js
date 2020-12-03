export const getFirstLetters = (text) => {
    if ( text.includes(" ")) {
        const splitedText = text.split(" ")
        const firstWord = splitedText[0]
        const secondWord = splitedText[1]
        const firstWordFirstLetter = firstWord[0]
        const secondWordFirstLetter = secondWord[0]
        return { firstWordFirstLetter, secondWordFirstLetter }
    }else {
        const splitedText = text.split("")
        const firstWordFirstLetter = splitedText[0]
        return { firstWordFirstLetter }
    }
}