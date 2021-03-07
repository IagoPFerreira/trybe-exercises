let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function contaLetras(names) {
	tamanhoDoNome = 0;
	maior = 0;
	maiorNome = ''
	for (nome in names) {
		tamanhoDoNome = names[nome].length
		if (names[nome] === 0) {
			maior = tamanhoDoNome
		} else if (tamanhoDoNome > maior) {
			maior = tamanhoDoNome
			maiorNome = names[nome]
		}
	}
	return maiorNome
}

console.log(contaLetras(nomes));
