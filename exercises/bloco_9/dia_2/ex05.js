const fetchPromise = () => {
  const myPromisse = new Promise((resolve, reject) => {
    const myArray = [];
    for (let index = 0; index < 10; index += 1) {
      const number = Math.round(Math.random() * 50);
      myArray.push(number ** 2);
    }

    const sum = myArray.reduce((acc, curr) => acc + curr);

    (sum < 8000) ? resolve(sum) : reject();
  });

  myPromisse
    .then((sum) => [2, 3, 5, 10].map((number) => (sum / number).toFixed()))
    .then((array) => array.reduce((acc, curr) => acc + curr, 0))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))
}

fetchPromise();
