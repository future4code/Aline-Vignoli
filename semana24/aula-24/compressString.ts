// Examples
// aabbb -> a2b3
// aabcccccaaa -> a2b1c5a3
// accurate -> accurate (pois retornaria uma string maior do que a orginal)
// escola -> escola (pois retornaria uma string maior do que a orginal)
// accuraaaaaaaaaate -> a1c2u1r1a10t1e1

interface HashString {
    [index: string]: string
}

const compressString = (input: string) => {
    const substrings = [];
    let lastChar = input[0];
    let charCount = 0;
    
    for (const char of input) {
        if (char !== lastChar) {
            substrings.push(lastChar + charCount);
            lastChar = char;
            charCount = 0;
        }

        charCount++;
    }
    
    substrings.push(lastChar + charCount);
    
    let result = "";
    for (const key of substrings) {
        result += key;
    }
    
    return result.length > input.length ? input : result;
}

console.log(compressString("aabbb"));
console.log(compressString("aabcccccaaa"));
console.log(compressString("accurate"));
console.log(compressString("escola"));
console.log(compressString("accuraaaaaaaaaate"));