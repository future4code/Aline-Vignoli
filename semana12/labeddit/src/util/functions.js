export const getFirstLetters = (text) => {
    if ( text.includes(" ")) {
        const splitedText = text.split(" ")
        const firstWord = splitedText[0]
        const secondWord = splitedText[1]
        const firstWordFirstLetter = firstWord[0]
        const lastWordFirstLetter = secondWord[0]
        return { firstWordFirstLetter, lastWordFirstLetter }
    }else {
        const splitedText = text.split("")
        const firstWordFirstLetter = splitedText[0]
        return { firstWordFirstLetter }
    }
}