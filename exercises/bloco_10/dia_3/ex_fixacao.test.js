// Faça o mock da funcão subtrair e teste sua chamada.
// Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.
// Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.
// Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.
// Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.

const math = require('./ex_fixacao');

jest.mock('./ex_fixacao');

describe('Testa as funções de math', () => {
  it('Testa o mock de subtrair', () => {
    math.subtrair.mockImplementation((a, b) => a - b);
    expect(math.subtrair(8, 5)).toBe(3);
    expect(math.subtrair).toHaveBeenCalledWith(8, 5);
    expect(math.subtrair).toHaveBeenCalled();
    expect(math.subtrair).toHaveBeenCalledTimes(1);
  })

  it('Testa o mock de multiplicar', () => {
    math.multiplicar.mockImplementation((a, b) => a * b);
    expect(math.multiplicar(5, 9)).toBe(45);
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar).toHaveBeenCalledTimes(1);
    expect(math.multiplicar).toHaveBeenCalledWith(5, 9);
  })

  it('Testa o mock de somar', () => {
    math.somar.mockImplementation((a, b) => a + b);
    expect(math.somar(8, 4)).toBe(12);
    expect(math.somar).toHaveBeenCalled();
    expect(math.somar).toHaveBeenCalledTimes(1);
    expect(math.somar).toHaveBeenCalledWith(8, 4);
  })

  it('Testa o mock de dividir', () => {
    math.dividir.mockReturnValue(15);
    expect(math.dividir(2)).toBe(15);
    expect(math.dividir(5)).toBe(15);
    expect(math.dividir).toHaveBeenCalled();
    expect(math.dividir).toHaveBeenCalledTimes(2);
    expect(math.dividir).toHaveBeenCalledWith(2);
    expect(math.dividir).toHaveBeenCalledWith(5);
  })

  it('Testa o mock reset de subtrair', () => {
    math.subtrair.mockClear();

    math.subtrair.mockReturnValue(20);
    expect(math.subtrair()).toBe(20);
    expect(math.subtrair).toBeCalledTimes(1);

    math.subtrair.mockRestore();
    expect(math.subtrair(3, 2)).toBe(undefined);
    expect(math.subtrair).toHaveBeenCalledWith(3, 2);
    expect(math.subtrair).toHaveBeenCalledTimes(1);
  })
})