const fs = require('fs');

fs.readFileSync('./simpsons.json', 'utf-8')
  .then((arquivo) => JSON.parse(arquivo))
  .then((simpsons) => simpsons.map(({ id, name}) => `${id} - ${name}`))
  .then((resultados) => resultados.forEach(resultado => console.log(resultado)));
