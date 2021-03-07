let numeros = [2, 4, 6, 7, 10, 0, -3];

function verificaMenorNumero(numero) {
	let menor = 0;
	let indice = 0
	for (let index = 0; index < numero.length; index += 1) {
		if (numero[index] < menor) {
			menor = numero[index];
			indice = index
		}
	}
	return indice
}
console.log(verificaMenorNumero(numeros))