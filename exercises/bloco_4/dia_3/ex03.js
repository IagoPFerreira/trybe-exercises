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