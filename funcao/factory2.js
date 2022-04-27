function criarProduto(nome = 'Sapato', preco = 666, desconto = 10){ 
    convertePorcentagem = preco/100*desconto
    precoComDesconto = preco - convertePorcentagem
    return {
        nome,
        preco,
        precoComDesconto
    }
}

console.log(criarProduto('Dart', 20))