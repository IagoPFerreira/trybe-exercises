const numbers = [50, 85, -30, 3, 15];

// const getBigger = (bigger, number) => (bigger > number) ? bigger : number;

// const bigger = numbers.reduce(getBigger, 0);

let bigger = 0;

console.log(bigger);


for (let index = 0; index < numbers.length; index += 1) {
  if (index === 0) {
    bigger = numbers[index];
  }
  if (numbers[index] > bigger){
    bigger = numbers[index];
  }
}

console.log(bigger);