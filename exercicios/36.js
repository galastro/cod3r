const teste = [3,4,5,6,7,8,9,10]

function multiplicador(vetor, numero){
    const res = []
    for (i in vetor){
        res.push(vetor[i]*numero)
    }
    return res
}
console.log(multiplicador(teste,4))

function multiplicadorMaiorQueCinco(vetor, numero){
    const res = []
    for (i in vetor){
        if (vetor[i]>5){
            res.push(vetor[i]*numero)
        }
    }
    return res
}
console.log(multiplicadorMaiorQueCinco(teste, 5))