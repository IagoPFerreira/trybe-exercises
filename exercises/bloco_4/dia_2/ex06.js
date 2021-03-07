let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;

for(let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 == 1) {
        impar += 1
    }
}

if (impar == 0) {
    console.log('Nenhum valor ímpar encontrado')
} else {
    console.log(impar + ' valores ímpares encotrados.')
}