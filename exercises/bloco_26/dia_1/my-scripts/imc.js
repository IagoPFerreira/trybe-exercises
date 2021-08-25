const { questionFloat } = require('readline-sync');

const calculaImc = () => {
const peso = questionFloat('Qual seu peso em kg? ');
const altura = questionFloat('Qual a sua altura em metros? ');

const imc = (peso / altura ** 2).toFixed(1);


  if (imc < 18.5) {
    console.log(`Situação: Abaixo do peso (magreza). IMC: ${imc}`);
    return;
  }
  if (imc > 18.5 && imc < 24.9) {
    console.log(`Situação: Peso normal. IMC: ${imc}`);
    return;
  }
  if (imc > 25 && imc < 29.9) {
    console.log(`Situação: Acima do peso (sobrepeso). IMC: ${imc}`);
    return;
  }
  if (imc > 30 && imc < 34.9) {
    console.log(`Situação: Obesidade grau I. IMC: ${imc}`);
    return;
  }
  if (imc > 35 && imc < 40) {
    console.log(`Situação: Obesidade grau II. IMC: ${imc}`);
    return;
  }
    console.log(`Situação: Obesidade grau II. IMC: ${imc}`);
    return;
}

calculaImc();