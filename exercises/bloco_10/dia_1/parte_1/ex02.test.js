// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Verifique se o array passado por parâmetro não sofreu alterações
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

const myRemove = require('./ex02.js');

describe('Verifica o retorno de myRemove', () => {
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Verifica se o array passado por parâmetro não sofreu alterações', () => {
    expect(myRemove([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  })

  it('Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
})