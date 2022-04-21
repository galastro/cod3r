let valor // não inicializada.
console.log(valor)

valor = null // ausência de valor. Intencional.
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined // Não atribuir undefined.
console.log(!!produto.preco)
// delete produto.preco >> isso sim.
console.log(produto)

produto.preco = null // preco
console.log(!!produto.preco)
console.log(produto)