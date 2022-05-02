vetorPilha = [1,2,3,4,5]
vetorAdiciona = [6,7,8,9,10]
function adiciona(vetor1, vetor2){
    for (i in vetor2){
        vetor1.push(vetor2[i])
    }
    return vetor1
}

console.log(adiciona(vetorPilha,vetorAdiciona))