const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1: Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const lesson = (object, key, value) => object[key] = value;
console.log(lesson(lesson2, 'turno', 'noite'));

// Exercício 2: Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKey = (object) => Object.keys(object);
console.log(listKey(lesson1));

// Exercício 3: Crie uma função para mostrar o tamanho de um objeto.
const objSize = (object) => Object.keys(object).length;
console.log(objSize(lesson3));

// Exercício 4: Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listValue = (object) => Object.values(object);
console.log(listValue(lesson1));

// Exercício 5: Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 .
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// Exercício 6: Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const numberOfStudents = (object) => {
  let totalStudents = 0;
  const array = Object.keys(object);
  for (index in array) {
    totalStudents += object[array[index]].numeroEstudantes
  }
  return totalStudents;
}
console.log(numberOfStudents(allLessons))

// Exercício 7: Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const getValueByNumber = (object, key) => Object.keys(object)[key];
console.log(getValueByNumber(lesson1, 1));
