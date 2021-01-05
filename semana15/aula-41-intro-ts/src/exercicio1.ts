// a) 
const minhaString : string = "Aline"; //ao tentar atribuir um tipo number recebemos um erro, pois não é possível atribuir um number à uma variável definida como string

// b) 
const meuNumero : number = 1; 
//para fazer com que a variavel acima possa também receber uma string, usamos a sintaxe de union type, dessa forma:
const meuNumero2 : number | string = "1"

// c)
const objPessoa : {nome: string, idade: number, corFavorita: string} = {
    nome: "Pessoa",
    idade: 43,
    corFavorita: "preto"
}


// d)
// Para garantir que um objeto só tenha as propriedades específicas fazemos a tipagem dele utilizando a palavra reservada type
// type pessoa = {
//     nome: string,
//     idade: number,
//     corFavorita: string
// }

// const aline : pessoa = {
//     nome: "Aline",
//     idade: 32,
//     corFavorita: "roxo"
// }

// const fulana : pessoa = {
//     nome: "Fulana",
//     idade: 29,
//     corFavorita: "azul"
// }

// const ciclana : pessoa = {
//     nome: "Ciclana",
//     idade: 37,
//     corFavorita: "vermelho"
// }

// e)
enum CoresArcoIris {
    VIOLETA = "Violeta",
    ANIL = "Anil",
    AZUL = "Azul",
    VERDE = "Verde",
    AMARELO = "Amarelo",
    LARANJA = "Laranja",
    VERMELHO = "Vermelho"
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: CoresArcoIris
}

const aline : pessoa = {
    nome: "Aline",
    idade: 32,
    corFavorita: CoresArcoIris.AMARELO
}

const fulana : pessoa = {
    nome: "Fulana",
    idade: 29,
    corFavorita: CoresArcoIris.AZUL
}

const ciclana : pessoa = {
    nome: "Ciclana",
    idade: 37,
    corFavorita: CoresArcoIris.VERMELHO
}