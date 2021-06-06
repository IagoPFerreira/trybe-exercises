let randomNumber = () => {
  return Math.random() * 100;
}

randomNumber = jest.fn().mockImplementation((a, b) => a / b);

  test('Testando a implentação do mock', () => {
    expect(randomNumber(4, 2)).toBe(2);
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledWith(4, 2);
  })