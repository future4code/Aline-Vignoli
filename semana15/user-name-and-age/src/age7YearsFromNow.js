// Ao rodar o comando npm run age-7-years-from-now passar como primeiro argumento seu Nome, e segundo argumento sua idade
//Exemplo: 
// npm run age-7-years-from-now Aline 32

const user = {
    name: process.argv[2],
    age: process.argv[3]
}

const age7YearsFromNow = Number(user.age) + 7

console.log(`Olá, ${user.name}! você tem ${user.age} anos. Em sete anos você terá ${age7YearsFromNow}.`)