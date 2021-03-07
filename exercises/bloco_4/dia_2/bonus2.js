let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let ordenedNumbers = []

for (num1 = 1; num1 < numbers.length; num1 += 1) {
    for (num2 = 0; num2 < num1; num2 += 1) {
        if(numbers[num1] > numbers[num2]) {
            let position = numbers[num1]
            numbers[num1] = numbers[num2]
            numbers[num2] = position;
            
        }

    }
}

console.log(numbers)
console.log(ordenedNumbers);