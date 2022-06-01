function simboloMais(numero) {
  let res = ""
  for(let i = 0; i < numero; i++){
    res += "+"
  }
  return res
}

console.log(simboloMais(3))

//Outra solução possível (professor):
function simboloMais2(quantidade) {
  return Array(quantidade).fill('+').join('')
  }

  //Outra solução possível (professor):
  function simboloMais(quantidade) {
    return "+".repeat(quantidade)
    }
