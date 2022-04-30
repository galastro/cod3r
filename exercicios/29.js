function quantidade(vetor){
    res = []
    for (i in vetor) {
        if (vetor[i]>=10 && vetor[i]<=20){
            res.push(vetor[i])
        }
    }
    return res.length
    
}
lista = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

console.log(quantidade(lista))