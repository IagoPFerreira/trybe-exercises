const getUserName = require('./ex03.js');

describe('Verifica o resultado da função getUserName', () => {
  it('Verifica o usuário na posicao 4', async () => {
    const user = await getUserName(4);
    expect(user).toMatch('Mark');
  });

  it('Verifica o usuário na posicao 5', async () => {
    const user = await getUserName(5);
    expect(user).toMatch('Paul');
  });

  it('Verifica que não existe ningúem na posicao 2', async () => {
    try {
      await getUserName(2);
    } catch (user) {
      expect(user).toEqual({ error: 'User with 2 not found.' })
    }
  })
});
