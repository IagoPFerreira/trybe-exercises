function creatObject (object, chave, value) {
  object = {}
  object[chave] = value
  return object
}


console.log(creatObject('item', 'carteira', 'dinheiro'));