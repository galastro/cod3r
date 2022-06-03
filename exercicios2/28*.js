function filtrarPorQuantidadeDeDigitos(array, input) {
  return array.filter(numero => {
  const quantidadeDeDigitos = String(numero).length
  return quantidadeDeDigitos === input
  })
  }

  console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))