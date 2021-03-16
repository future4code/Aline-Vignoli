// Examples:
// banana, banan -> one edit
// banana, bananak -> one edit
// banana, panana -> one edit
// banana, bananaaa -> não é one edit

const checkIfOneEdit = (inputA: string, inputB: string) => {
    const inputASize = inputA.length;
    const inputBSize = inputB.length;
    
    // diferença de tamanho das duas é maior que 1, retorne false
    if (Math.abs(inputASize - inputBSize) > 1) return false;

    // se um input é maior do que o outro, ele deve conter o outro
    if (inputASize > inputBSize) inputA.includes(inputB);
    if (inputBSize > inputASize) inputB.includes(inputA);

    // contador para caracteres diferentes
    let differentChars = 0;
    for (let i = 0; i <= inputASize; i++) {
        if (inputA[i] !== inputB[i]) differentChars++
    }
    
    return differentChars === 1;
}

console.log(checkIfOneEdit("banana", "banan")); //true
console.log(checkIfOneEdit("banana", "bananak")); //true
console.log(checkIfOneEdit("banana", "panana")); //true
console.log(checkIfOneEdit("banana", "bananaaa")); //false