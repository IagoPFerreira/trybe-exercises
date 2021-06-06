const uppercase = require('./ex01.js');

describe('Verifica a callback de uppercase', () => {
  it('Verifica se a frase "casa suja" retorna como "CASA SUJA"', done => {
    uppercase('casa suja', (result) => {
      expect(result).toMatch('CASA SUJA');
      done();
    })
  });
  
  it('Verifica se a frase "Outra Casa" retorna como "OUTRA CASA"', done => {
    uppercase('Outra Casa', (result) => {
      expect(result).toMatch('OUTRA CASA');
      done();
    })
  })
})