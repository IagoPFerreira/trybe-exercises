let peca = 'King';
let pecaMinuscula = peca.toLocaleLowerCase()

if (pecaMinuscula == 'king') {
    console.log('Todas as direções, uma casa por vez');
} else if (pecaMinuscula == 'queen') {
    console.log('Todas as direções');
} else if (pecaMinuscula == 'bishop') {
    console.log('Diagonais'); 
} else if (pecaMinuscula == 'pawn'){
    console.log('Anda pra frente e come nas diagonais');
} else if (pecaMinuscula == 'horse') {
    console.log('L');
} else if (pecaMinuscula == 'tower') {
    console.log('Para frente, para trás, para esquerda e  para direita');
} else {
    console.log('Essa peça não existe');
}

