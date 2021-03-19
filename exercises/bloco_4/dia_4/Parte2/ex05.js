let numeros = [2, 3, 2, 8, 5, 8, 2, 8, 3, 8];

function maisRepetido(numeros) {
	let totalDeAcertos = 0
	let numerosRepetidos = 0
	let indexNumerosRepetidos = 0

	for (let num in numeros) {
		let numeroAtual = numeros[num];
		for (let num2 in numeros) {
			if (numeroAtual === numeros[num2]) {
				totalDeAcertos += 1;
			}
		}

		if (totalDeAcertos > numerosRepetidos) {
			numerosRepetidos = totalDeAcertos;
			indexNumerosRepetidos = num
		}
		totalDeAcertos = 0;
	}
	return numeros[indexNumerosRepetidos];
}



console.log(maisRepetido(numeros))