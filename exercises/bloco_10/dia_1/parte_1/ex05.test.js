// Compare dois objetos (JSON) para verificar se são idênticos ou não

const objetos = require('./ex05.js');
const { obj1 } = objetos;
const { obj2 } = objetos;
const { obj3 } = objetos;

describe('Testa se os objetos são iguais entre si', () => {
  it('Verifica se o obj1 é igual ao obj2', () => {
    expect(obj1).toEqual(obj2);
  });

  it('Verifica se o obj2 é diferente do obj3', () => {
    expect(obj2).not.toEqual(obj3);
  });

  it('Verifica se o obj3 é diferente do obj1', () => {
    expect(obj3).not.toEqual(obj1);
  });
});