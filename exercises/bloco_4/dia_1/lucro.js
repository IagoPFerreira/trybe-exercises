let valorCusto = 100;
let valorVenda = 200;
let valorCustoTotal = valorCusto / 5 + valorCusto
let lucro = valorVenda - valorCustoTotal
let lucroDeMil = lucro * 1000

if (valorVenda < 0 || valorCusto < 0) {
    console.log('Erro, valores inválidos!');
} else {
    console.log('O lucro foi de ' + lucroDeMil + ' reais');
}

