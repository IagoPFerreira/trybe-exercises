const { rejects } = require("node:assert");
const { resolve } = require("node:path");

// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

fetch(API_URL, { headers: { Accept: 'application/json' } })
  .then(response => response.json())
  .then(data =>
    document.getElementById('jokeContainer').innerText = data.joke)
};

window.onload = () => fetchJoke();