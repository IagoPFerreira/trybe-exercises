const { expect } = require('chai');

const calculaSituacao = require('../examples/calculaSituacao');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).to.be.equals('reprovado');
  });
});

describe('Quando a média for maior que 7', () => {
  it('retorna "aprovado"', () => {
    const resposta = calculaSituacao(9)

    expect(resposta).to.be.equal('aprovado');
  });
});

describe('Quando a média for igual que 7', () => {
  it('retorna "aprovado"', () => {
    const resposta = calculaSituacao(7)

    expect(resposta).to.be.equal('aprovado');
  });
});