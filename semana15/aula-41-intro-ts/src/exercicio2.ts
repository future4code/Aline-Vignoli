// a) A função abaixo recebe um array de números como entrada e retorna um objeto com as estatisticas
// function obterEstatisticas(numeros: number[]) {

//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas : object = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// const info : object = obterEstatisticas([1, 3, 30])
// console.log(info)

// b)
function obterEstatisticas(numeros: number[]) : object {

    const numerosOrdenados = numeros.sort(
        (a: number, b: number) : number => a - b
    )

    let soma : number = 0

    for (let num of numeros) {
        soma += num
    }

    type estatisticas = {
        maior: number,
        menor: number,
        media: number
    }

    const estatisticas : estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// const info : object = obterEstatisticas([20, 42, 80])
// console.log(info)

// c)
type amostraDeIdades = {
    numeros : number[],
    obterEstatisticas : (numeros: number[]) => object
} 

const amostraDeDados : amostraDeIdades = {
    numeros : [10, 320, 12, 9],
    obterEstatisticas : obterEstatisticas
}

const info : object = obterEstatisticas(amostraDeDados.numeros) 
console.log(info)