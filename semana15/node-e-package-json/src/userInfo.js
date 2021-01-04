// EXERCICIO 1
// b)
// const user = {
//     name: process.argv[2],
//     age: process.argv[3]
// }

// console.log(`Olá, ${user.name}! você tem ${user.age} anos`)

// c)
const user = {
    name: process.argv[2],
    age: process.argv[3]
}

const age7YearsFromNow = Number(user.age) + 7

console.log(`Olá, ${user.name}! você tem ${user.age} anos. Em sete anos você terá ${age7YearsFromNow}.`)