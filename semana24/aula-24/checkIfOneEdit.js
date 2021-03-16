// Examples:
// banana, banan -> one edit
// banana, bananak -> one edit
// banana, panana -> one edit
// banana, bananaaa -> não é one edit
const checkIfOneEdit = (inputA, inputB) => {
    const inputASize = inputA.length;
    const inputBSize = inputB.length;
    if (Math.abs(inputASize - inputBSize) > 1)
        return false;
    if (inputASize > inputBSize)
        inputA.includes(inputB);
    if (inputBSize > inputASize)
        inputB.includes(inputA);
    let differentChars = 0;
    for (let i = 0; i <= inputASize; i++) {
        if (inputA[i] !== inputB[i])
            differentChars++;
    }
    return differentChars === 1;
};
console.log(checkIfOneEdit("banana", "banan")); //true
console.log(checkIfOneEdit("banana", "bananak")); //true
console.log(checkIfOneEdit("banana", "panana")); //true
console.log(checkIfOneEdit("banana", "bananaaa")); //false
