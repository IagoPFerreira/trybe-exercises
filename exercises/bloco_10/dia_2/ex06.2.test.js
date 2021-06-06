const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const ageArray = Animals.filter((animal) => animal.age === age);
      if (ageArray.length !== 0) {
        return resolve(ageArray);
      }
      return reject('Nenhum animal com essa idade!');
    }, 100);
  })
)

const getAnimalByAge = (age) => {
  return findAnimalByAge(age)
    .then(animal => animal);
}

// ---------------------

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return expect(getAnimalByAge(1)).resolves.toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }]);
    })
  })

  describe('Quando não existe o animal com a idade procurada', () => {
    it('Retorna um erro', () => {
      expect.assertions(1);
      return expect(getAnimalByAge(6)).rejects.toMatch('Nenhum animal com essa idade!');
    })
  })
})