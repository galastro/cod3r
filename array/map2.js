const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderono", "preco": 13.90 }',
  '{ "nome": "Kit de Lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const paraDinheiro = (e) => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`



const resultado = carrinho.map(paraObjeto).map(apenasPreco).map(paraDinheiro)
console.log(resultado)
