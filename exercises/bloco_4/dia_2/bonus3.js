let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let ordenedNumbers = []

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index + 1]){
        ordenedNumbers.push(numbers[index] * numbers[index + 1])
    } else {
        ordenedNumbers.push(numbers[index] * 2)
    }

    
}

console.log(numbers);
console.log(ordenedNumbers);