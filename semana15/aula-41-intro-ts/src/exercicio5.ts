function calculos(a: number, b: number) : object {
    type estatistica = {
        soma: number,
        subtracao: number,
        multiplicacao: number,
        maior: number
    }

    const soma : number = a + b 
    const subtracao : number = a - b
    const multiplicacao : number = a * b
    const maior : number = a > b ? a : b

    const resultado : estatistica = {
        soma: soma,
        subtracao: subtracao,
        multiplicacao: multiplicacao,
        maior: maior
    }

    return resultado
}

const result = calculos(30, 10)
console.log(result)