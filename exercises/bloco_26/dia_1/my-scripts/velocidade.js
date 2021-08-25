const { questionFloat } = require('readline-sync');

const calcularVelocidade = () => {
  const distancia = questionFloat("Qual é a distância em metros? ");
  const tempo = questionFloat("Qual é o tempo em segundos? ");
  const velocidade = distancia / tempo;
  console.log(`A velocidade é de ${velocidade} m/s`);
  return velocidade;
}

calcularVelocidade();