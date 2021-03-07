function verificaFinalDaPalavra(stringWord, stringEnd) {
  let stringEndSize = stringEnd.length
  let stringWordSize = stringWord.length

  for (let index = 0; index < stringEndSize; index += 1) {
    if (stringWord[stringWordSize - stringEndSize + index] === stringEnd[index]) {
      return true
    } else {
      return false
    }

  }

}

console.log(verificaFinalDaPalavra("joaofernando", "fernan"))