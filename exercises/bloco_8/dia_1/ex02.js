const sorteio = (number) => {
  const randomNumber = Math.ceil(Math.random() * 5);
  return randomNumber;
}

console.log(sorteio());