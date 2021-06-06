let randomNumber = () => {
  return Math.random() * 100;
}

randomNumber = jest.fn().mockReturnValue(10);

describe('Testa se gera um número', () => {
  // randomNumber = jest.fn().mockReturnValue(10);
  it('should test if its a function', () => {
    expect(typeof randomNumber).toBe('function');
  });

  it('should test if return 10', () => {
    expect(randomNumber()).toBe(10);
  })

  it('should been called', () => {
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
  })
});
