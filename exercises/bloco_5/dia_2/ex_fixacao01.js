let pai = document.getElementById('pai');
let irmao = document.createElement('div');
irmao.innerText = 'Irmao';
pai.appendChild(irmao);

let esta = document.querySelector('#elementoOndeVoceEsta');
let filhoDeOndeEsta = document.createElement('div');
filhoDeOndeEsta.innerText = 'Você está no filho';
esta.appendChild(filhoDeOndeEsta);

let primeiroNeto = document.querySelector('#primeiroFilhoDoFilho');
let primeiroFilhoDoNeto = document.createElement('p');
primeiroFilhoDoNeto.innerText = 'Bisneto boladão';
primeiroNeto.appendChild(primeiroFilhoDoNeto);