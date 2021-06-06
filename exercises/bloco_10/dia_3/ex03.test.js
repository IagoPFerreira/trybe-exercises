let randomNumber = () => {
  return Math.random() * 100;
}

describe('Testando implementações do mock', () => {
  randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
  it('Testa a multiplicação de 3 parametros', () => {
    expect(randomNumber(2, 3, 4)).toBe(24);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(2, 3, 4);
  })

  it('Testa o resete da função', () => {
    randomNumber = jest.fn().mockReset();
    randomNumber.mockImplementation((a) => a * 2);
    expect(randomNumber(2)).toBe(4);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(2);
  })
})