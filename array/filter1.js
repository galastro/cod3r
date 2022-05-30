const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true},
  { nome: 'iPad Pro', preco: 4199, fragil: true},
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
  { nome: 'Copo de Plástico', preco: 18.99, fragil: false},
  
]


const maisQue500 = produto => produto.preco >= 500
const fragil = produto => produto.fragil

const res = produtos.filter(maisQue500).filter(fragil)
console.log(res)


/* Minha primeira solução:
const maisQue500 = produtos.filter(function(p){
  return p.preco >= 500
})


const res = maisQue500.filter(function(p){
  return p.fragil
})

console.log(res)
*/