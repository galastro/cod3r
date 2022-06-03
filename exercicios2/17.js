function somarNumeros(array) {
  return array.reduce((acumulador, valor) => acumulador +valor)
}

console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))