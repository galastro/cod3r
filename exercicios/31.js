function negativos(vetor) {
    let negativos = 0
    for (i in vetor){
        if (vetor[i] < 0){
            negativos++
        }
    }
    return negativos
}

lista =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

console.log(negativos(lista))