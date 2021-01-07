// EXERCÍCIO 2

// Para executar o calculator rodar o comando:
// npm run start operation firstNumber secondNumber
// Exemplos de execução:
// npm start add 2 2
// npm start sub 40 20

const add = (a, b) => {
    return a + b
}

const sub = (a, b) => {
    return a - b
}

const mult = (a, b) => {
    return a * b
}

const div = (a, b) => {
    return a / b
}

const calculate = () => {
    const operation = process.argv[2]
    const a = Number(process.argv[3])
    const b = Number(process.argv[4])
    let result = null

    switch (operation) {
        case "add": 
            result = add(a,b)
        break;
        case "sub": 
            result = sub(a,b)
        break;
        case "mult": 
            result = mult(a,b)
        break;
        case "div": 
            result = div(a,b)
        break;
    }

    return result
}

const result = calculate()
console.log(result)