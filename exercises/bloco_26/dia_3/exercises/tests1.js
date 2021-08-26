const { expect } = require('chai');
const numerosNaturais = require('./numerosNaturais');

describe('Executa a função numerosNaturais', () => {
  describe('quando o número é maior que 0', () => {
    const resultado = numerosNaturais(1);
    describe('a resposta', () => {
      it('é uma string', () => {
        expect(resultado).to.be.a('string');
      });
      
      it('é igual à "positivo"', () => {
        expect(resultado).to.be.equal('positivo');
      });
    });
  });

  describe('quando o número é menor que 0', () => {
    const resultado = numerosNaturais(-1);
    describe('a resposta', () => {

      it('é uma string', () => {
        expect(resultado).to.be.a('string');
      });
      
      it('é igual à "negativo"', () => {
        expect(resultado).to.be.equal('negativo');
      });
    });
  });

  describe('quando o número é igual à 0', () => {
    const resultado = numerosNaturais(0);
    describe('a resposta', () => {
      it('é uma string', () => {
        expect(resultado).to.be.a('string');
      });

      it('é igual à "neutro"', () => {
        expect(resultado).to.be.equal('neutro')
      })
    });
  });

  describe('quando o parâmetro não é um número', () => {
    const resultado = numerosNaturais('Bão?');
    describe('a resposta', () => {
      it('é uma string', () => {
        expect(resultado).to.be.a('string');
      });
      
      it('é igual à "o valor deve ser um número"', () => {
        expect(resultado).to.be.equal('o valor deve ser um número');
      });
    });
  });
});