//Na primeira linha adicionar 2 espaços, 1 estrela, depois mais 2 espaços
//Na segunda linha adicionar 1 espaço, 3 estrelas, depois 1 espaço
// na terceira linha adicionar 5 estrelas.

let n = 5;
let estrela = '*';
let linhaVazia = '';
let posicao = n;

for (let linha = 0; linha < n; linha += 1) {
    for (let coluna = 0; coluna <= n; coluna += 1) {
        if (coluna < posicao) {
            linhaVazia += ' ';
        } else {
            linhaVazia += estrela;
        }
    }
    console.log(linhaVazia);
    linhaVazia = '';
    posicao -= 1;
}