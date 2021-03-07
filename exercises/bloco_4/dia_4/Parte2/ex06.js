function somatorio(numero) {
  let soma = 0
  for (let num = 0; num <= numero; num += 1) {
    soma += num
  }
  return soma
}

console.log(somatorio(5))