const { questionInt } = require('readline-sync');

const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
];

let mensagem = scripts.map((script, index) => `${index + 1}: ${script.name} `);

mensagem.unshift('Escolha um número para executar o script correspondente');

// mensagem.join('\n');
// mensagem = mensagem.join('\n');
const escolha = questionInt(mensagem) - 1;

const escolhido = scripts[escolha];

if (!escolhido) return console.log('Número inválido. Saindo');

require(script.escolhido)
