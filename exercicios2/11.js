function receberPrimeiroEUltimoElemento(array){
  let res = []
  res.push(array[0])
  res.push(array[array.length-1])
  return res
}

const aopa = [20, 3, 27, 87, 5, 32, 178, 1233]

console.log(receberPrimeiroEUltimoElemento(aopa))

