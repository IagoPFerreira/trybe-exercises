const fetchPromise = () => {
  const myPromisse = new Promise((resolve, reject) => {
    const myArray = [];
    for (let index = 0; index < 10; index += 1) {
      const number = Math.round(Math.random() * 50);
      myArray.push(number ** 2);
    }

    const sum = myArray.reduce((acc, curr) => acc + curr);

    (sum < 8000) ? resolve() : reject();
  });

  myPromisse
    .then(() => console.log('Promisse resolvida'))
    .catch(() => console.log('Promisse rejeitada'))
}

fetchPromise();
