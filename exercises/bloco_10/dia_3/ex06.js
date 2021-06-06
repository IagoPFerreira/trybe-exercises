function fetchDog() {
  return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
    response.json()
      .then(respo => response.ok ? Promise.resolve(respo) : Promise.reject(respo)
      )
  );
};

module.exports = fetchDog;