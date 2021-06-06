const getUserName = require('./ex02.js');

describe('Verifica o resultado da função getUserName', () => {
  it('Verifica o usuário na posicao 4', () => {
    expect.assertions(1);
    return getUserName(4).then(user => {
      expect(user).toMatch('Mark');
    });
  });

  it('Verifica o usuário na posicao 5', () => {
    expect.assertions(1);
    return getUserName(5).then(user => {
      expect(user).toMatch('Paul');
    });
  });

  it('Verifica que não existe ningúem na posicao 2', () => {
    expect.assertions(1);
    return getUserName(2).catch(user => {
      expect(user).toEqual({ error: 'User with 2 not found.' });
    });
  });
})