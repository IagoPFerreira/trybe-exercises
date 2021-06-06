// Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
// Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Faz uma chamada para a função myRemoveWithoutCopy e verifica se o array passado por parâmetro sofreu alterações
// Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

const myRemoveWithoutCopy = require('./ex03.js');

// implemente seus testes aqui

describe('Testa o array', () => {
  it('Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Faz uma chamada para a função myRemoveWithoutCopy e verifica se o array passado por parâmetro sofreu alterações', () => {
    const personalList = [6, 7, 8, 9];
    myRemoveWithoutCopy(personalList, 7);
    expect(personalList.length).toEqual(3);
  })

  it('Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
})