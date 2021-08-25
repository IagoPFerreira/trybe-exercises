const { questionInt, question } = require('readline-sync');

function resultado(numero, resposta) {
  if (numero === resposta) {
    return console.log('Parabéns, número correto!');
  }
  return console.log(`Opa, não foi dessa vez. O número era ${numero}.`);
}

function adivinhe() {
  const numero = Math.round(Math.random() * 10);
  const resposta = questionInt("Digite um número entre 0 e 10 para saber se é o número que estou pensando: ")
  resultado(numero, resposta);

  console.log('------------------------------------------');

  const continuar = question("Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não) ")
  if (continuar !== 's') return console.log('OK, até a próxima!');

  adivinhe();
}

adivinhe()