function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
    let jurosTotal = capitalInicial*taxaJuros*tempoAplicacao
    return (jurosTotal+capitalInicial).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}
console.log(`juros simples: ${jurosSimples(150, 0.1, 12)}`)

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
    let total = capitalInicial*(1+taxaJuros)**tempoAplicacao
    return total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}
console.log(`juros compostos: ${jurosCompostos(150,0.1,12)}`)