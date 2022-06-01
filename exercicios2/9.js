function repetir(multiplicando,multiplicador){
  const res = []
  for(let i = 0; i < multiplicador; i++){
    res.push(multiplicando)
  }
  return res

}

console.log(repetir(533, 3))

// outra solução possível:
function repetir2(item, quantidade) {
  return Array(quantidade).fill(item)
  }