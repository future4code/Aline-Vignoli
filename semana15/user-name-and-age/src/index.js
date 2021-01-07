// Ao rodar o comando npm run start passar como primeiro argumento seu Nome, e segundo argumento sua idade
//Exemplo: 
// npm run start Aline 32

const user = {
    name: process.argv[2],
    age: process.argv[3]
}

console.log(`Olá, ${user.name}! você tem ${user.age} anos`)