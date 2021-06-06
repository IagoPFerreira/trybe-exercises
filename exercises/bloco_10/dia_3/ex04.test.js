const funcs = require('./ex04');

jest.mock('./ex04');

describe('Testando as funções importadas', () => {
  it('Testando a função uppercase', () => {
    funcs.uppercase.mockImplementation((string) => string.toLowerCase());
    expect(funcs.uppercase('OLÁ')).toMatch('olá');
    expect(funcs.uppercase).toHaveBeenCalled();
    expect(funcs.uppercase).toHaveBeenCalledTimes(1);
    expect(funcs.uppercase).toHaveBeenCalledWith('OLÁ');
  });

  it('Testando a função firstLetter', () => {
    funcs.firstLetter.mockImplementation((string) => string[string.length - 1])
    expect(funcs.firstLetter('Pirulito')).toMatch('o');
    expect(funcs.firstLetter).toHaveBeenCalled();
    expect(funcs.firstLetter).toHaveBeenCalledTimes(1);
    expect(funcs.firstLetter).toHaveBeenCalledWith('Pirulito');
  });

  it('Testando a função concatStrings', () => {
    funcs.concatStrings.mockImplementation((string1, string2, string3) => `${string1} ${string2} ${string3}`);
    expect(funcs.concatStrings('Olá,', 'usuário.', 'Seja bem vindo!')).toBe('Olá, usuário. Seja bem vindo!');
  })
})
