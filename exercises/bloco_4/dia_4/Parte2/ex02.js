let numeros = [2, 3, 6, 7, 10, 1];

function verificaMaiorNumero(numero) {
	let maior = 0;
	let indice = 0
	for (let index = 0; index < numero.length; index += 1) {
		if (numero[index] > maior) {
			maior = numero[index];
			indice = index
		}
	}
	return indice
}
console.log(verificaMaiorNumero(numeros))