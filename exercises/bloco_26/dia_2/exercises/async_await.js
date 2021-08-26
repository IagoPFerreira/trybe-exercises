const expression = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (
      typeof a !== 'number' ||
      typeof b !== 'number' ||
      typeof c !== 'number'
    ) {
      reject('Informe apenas números');
    }

    const result = (a + b) * c;

    if (result < 50) {
      reject('Valor muito baixo');
    }

    resolve(result);
  });
};

const randomNumber = () => Math.round(Math.random() * 100);

const numbers = Array.from({ length: 3 }).map(randomNumber);

console.log(numbers);

async function callExpression() {
  try {
    const result = await expression(1, 1, 1);
    console.log(result);
  } catch (err) {
    console.log(err);
  }

  try {
    const result = expression(1, 'a', 1);
    console.log(result);
  } catch (err) {
    console.log(error);
  }

  try {
    const result = expression(...numbers);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
