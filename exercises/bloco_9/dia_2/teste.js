const promise = new Promise((resolve, reject) => {
  const number = Math.round(Math.random() * 11);

  number <= 5 ? reject(number) : resolve(number);
})

promise
  .then(number => `Que sucesso =) nosso número foi ${number}`)
    .then(msg => console.log(msg))
  .catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`))

const fetch = require('node-fetch');

async function verifiedFetch(url) {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      return fetch(url)
        .then((result) => result.json())
        .then((result) => resolve(result.value));
    }
      throw new Error('endpoint não existe')  
}

async function sendJokeToFriend(name) {
  const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna");