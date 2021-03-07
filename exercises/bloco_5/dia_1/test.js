function highestNumber(listNumbers) {
  let number = Math.max.apply(null, listNumbers);
  return number;
}
highestNumber([9, 1, 2, 3, 9, 5, 7]);
// console.log(highestNumber([9, 1, 2, 3, 9, 5, 7]));
function highestCount(list) {
  let num = highestNumber(list);
  console.log(highestNumber(list));
  let count = 0;
  for (let key in list) {
    if (list[key] === num) {
      count += 1;
    }
  }
  return count;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));