function conferePalindromo(palindromo) {
	let palavraAoContrário = '';
	for (let index = palindromo.length - 1; index >= 0; index -= 1) {
		palavraAoContrário += palindromo[index]
	}

	if (palavraAoContrário.toLowerCase() === palindromo.toLowerCase()) {
		return true
	} else {
		return false
	}
}

console.log(conferePalindromo('arara'));