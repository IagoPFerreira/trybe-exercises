let n = 5;
let estrela = '*'
let linhaVazia = ''

for (let linha = 1; linha <= n; linha += 1) {
    linhaVazia += estrela
}
for (let coluna = 1; coluna <= n; coluna += 1) {
    console.log(linhaVazia)
}
