const { expect } = require('chai');
const fs = require('fs');
const { stub } = require('sinon');

const escrevaArquivo = require('./escrevaArquivo');

describe('Executa a função escrevaArquivo', () => {
  before(() => {
    stub(fs, 'writeFileSync');
  })

  after(() => {
    fs.writeFileSync.restore();
  });

  describe('a resposta', () => {
    it('é uma string', () => {
      const resposta = escrevaArquivo('arquivo.txt', 'o brabo tem nome');

      expect(resposta).to.be.a('string');
    });

    it('é igual à "ok"', () => {
      const resposta = escrevaArquivo('arquivo.txt', 'o brabo tem nome');

      expect(resposta).to.be.equal('ok');
    });
  });
});
