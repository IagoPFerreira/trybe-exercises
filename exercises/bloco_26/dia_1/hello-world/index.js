const readline = require('readline-sync');

const name = readline.question('Qual seu nome? ');
const age = readline.question('Qual sua idade? ');

console.log(`Hello ${name}! You are ${age} years old!`);

// const inicio = readline.questionInt('Qual o número do primeiro arquivo? ');
// const final = readline.questionInt('Qual o número do último arquivo? ');

// let contador = inicio;

// while (contador <= final) {
//   console.log(`Adiciona desafio${contador}`);
//   console.log(`Commita desafio${contador}`);
//   contador += 1;
// }