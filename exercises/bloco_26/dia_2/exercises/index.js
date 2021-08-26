const expression = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number'|| typeof b !== 'number' || typeof c !== 'number') {
      reject('Informe apenas números')
    }

    const result = (a + b) * c;

    if (result < 50) {
      reject('Valor muito baixo')
    }

    resolve(result);
  })
}

const randomNumber = () => Math.round(Math.random() * 100);

expression(1, 1, 1)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

expression(1, 'a', 1)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

  expression(randomNumber(), randomNumber(), randomNumber())
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
