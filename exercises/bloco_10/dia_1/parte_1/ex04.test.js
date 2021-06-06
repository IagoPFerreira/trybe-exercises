// A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número

// Faz uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faz uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faz uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faz uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faz uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

const myFizzBuzz = require('./ex04.js');

describe('Testa os retornos da função myFizzBuzz', () => {
  it('Faz uma chamada com um número divisível por 3 e 5 e verifica se o retorno é fizzbuzz', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
  })

  it('Faz uma chamada com um número divisível por 3 e verifica se o retorno é fizz', () => {
    expect(myFizzBuzz(18)).toMatch('fizz');
  })

  it('Faz uma chamada com um número divisível por 5 e verifica se o retorno é buzz', () => {
    expect(myFizzBuzz(10)).toMatch('buzz');
  })

  it('Faz uma chamada com um número que não é divisível por 3 ou 5 e verifica se o retorno é o próprio número', () => {
    expect(myFizzBuzz(7)).toEqual(7);
  })

  it('Faz uma chamada com um parâmetro que não é um número e verifica se o retorno é falsy', () => {
    expect(myFizzBuzz('oi')).toBeFalsy();
  })
})
