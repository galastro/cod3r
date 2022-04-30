function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco*(1-this.desc)*(1+imposto)}`
}

const produto = {
    nome: "Notebook",
    preco: 4589,
    desc: 0.15,
    getPreco
}

globalThis.preco = 20
globalThis.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco: 49990, desc: 0.2}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$')) // contexto, dps parâmetros
console.log(getPreco.apply(global, [0.17, '$']))

// ambos servem ao mesmo propósito, apenas apresentam uma diferença na sintaxe: enquanto um utiliza argumentos na forma (contexto, param1, param2, paramEtc...), o outro utiliza (contexto, [param1, param2, paramETC])