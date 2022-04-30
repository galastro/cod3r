function sum(a,b) {
    return (a+b).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}

console.log(sum(0.1, 0.2))