// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.


const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];


// Sem reduce
function containsA() {
  // escreva seu código aqui
  let bigACounter = 0;
  let smallACounter = 0;
  names.map((name, index) => {
    for (index = 0; index < name.length; index += 1) {
      if (name[index] === 'A') {
        bigACounter += 1;
      }
      if (name[index] === 'a') {
        smallACounter += 1;
      }
    }
  })
  return bigACounter + smallACounter;
}

// Com reduce

function containsA() {
  return names.reduce((acc, curr) => {
    return acc + curr.split('').reduce((acumulator, current) => {
      if (current === 'a' || current === 'A') return acumulator + 1;
      return acumulator;
    }, 0);
  }, 0);
}

assert.deepStrictEqual(containsA(), 20);