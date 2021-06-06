const funcs = require('./ex04');

describe('Testando as funções importadas', () => {
  jest.spyOn(funcs, 'uppercase')
  .mockImplementation((string) => string.toLowerCase())
  // funcs.uppercase.mockImplementation();
  it('Testando a função uppercase', () => {
    expect(funcs.uppercase('OLÁ')).toMatch('olá');
    expect(funcs.uppercase).toHaveBeenCalled();
    expect(funcs.uppercase).toHaveBeenCalledTimes(1);
    expect(funcs.uppercase).toHaveBeenCalledWith('OLÁ');
  });

  it('Resetanto a função uppercase', () => {
    funcs.uppercase.mockReset();
    funcs.uppercase.mockImplementation((string) => string.toUpperCase());
    expect(funcs.uppercase('ola')).toBe('OLA');
    expect(funcs.uppercase).toHaveBeenCalled();
    expect(funcs.uppercase).toHaveBeenCalledTimes(1);
    expect(funcs.uppercase).toHaveBeenCalledWith('ola');
  })

})